// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flocking.core');
goog.require('cljs.core');
goog.require('flocking.kdtree');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
flocking.core.ranges = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(640),new cljs.core.Keyword(null,"y","y",-1757859776),(480),new cljs.core.Keyword(null,"vx","vx",-1685168462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-5),(5)], null),new cljs.core.Keyword(null,"vy","vy",-2018509997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-5),(5)], null)], null);
flocking.core.rand_int_between = (function rand_int_between(p__7085){
var vec__7087 = p__7085;
var l = cljs.core.nth.call(null,vec__7087,(0),null);
var h = cljs.core.nth.call(null,vec__7087,(1),null);
return (cljs.core.rand_int.call(null,(h - l)) + l);
});
flocking.core.boid = (function boid(x,y,vx,vy){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"vx","vx",-1685168462),vx,new cljs.core.Keyword(null,"vy","vy",-2018509997),vy], null);
});
flocking.core.random_boid = (function random_boid(){
var x = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(flocking.core.ranges));
var y = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(flocking.core.ranges));
var vx = flocking.core.rand_int_between.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(flocking.core.ranges));
var vy = flocking.core.rand_int_between.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(flocking.core.ranges));
return flocking.core.boid.call(null,x,y,vx,vy);
});
flocking.core.init_boids = (function init_boids(n,boid_atom){
return cljs.core.reset_BANG_.call(null,boid_atom,cljs.core.doall.call(null,cljs.core.take.call(null,n,cljs.core.repeatedly.call(null,flocking.core.random_boid))));
});
flocking.core.flock_debug = (function flock_debug(boids_atom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(b)].join('')], null);
}),cljs.core.deref.call(null,boids_atom))], null);
});
flocking.core.mount_debug = (function mount_debug(boids_atom){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flocking.core.flock_debug,boids_atom], null),document.body);
});
flocking.core.cohesion_coeff = -0.9;
flocking.core.separation_coeff = 0.03;
flocking.core.separation_neighbourhood = (4);
flocking.core.alignment_coeff = 0.15;
flocking.core.alignment_neighbourhood = (4);
flocking.core.centre_of_mass = (function centre_of_mass(boids){
var n = cljs.core.count.call(null,boids);
var sx = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"x","x",2099068185),boids));
var sy = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),boids));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(sx / n),new cljs.core.Keyword(null,"y","y",-1757859776),(sy / n)], null);
});
flocking.core.cohesion_force = (function cohesion_force(cm,boid){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(boid) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cm));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(boid) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cm));
var s = Math.sqrt.call(null,((dx * dx) + (dy * dy)));
var ux = (dx / s);
var uy = (dy / s);
var fx = (ux * flocking.core.cohesion_coeff);
var fy = (uy * flocking.core.cohesion_coeff);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),fx,new cljs.core.Keyword(null,"fy","fy",550788984),fy], null);
});
flocking.core.separation_force = (function separation_force(tree,boid){
var neighbours = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"point","point",1813198264),cljs.core.rest.call(null,flocking.kdtree.nearest_neighbor.call(null,tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(boid),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(boid)], null),flocking.core.separation_neighbourhood)));
var xf = (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,cljs.core.first,neighbours)) / (flocking.core.separation_neighbourhood - (1)));
var yf = (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,cljs.core.second,neighbours)) / (flocking.core.separation_neighbourhood - (1)));
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(boid) - xf);
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(boid) - yf);
var fx = (dx * flocking.core.separation_coeff);
var fy = (dy * flocking.core.separation_coeff);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),fx,new cljs.core.Keyword(null,"fy","fy",550788984),fy], null);
});
flocking.core.alignment_force = (function alignment_force(tree,boid){
var neighbours = cljs.core.rest.call(null,flocking.kdtree.nearest_neighbor.call(null,tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(boid),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(boid)], null),flocking.core.alignment_neighbourhood));
var vxf = (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,((function (neighbours){
return (function (p1__7088_SHARP_){
return new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boid","boid",-1588406796).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__7088_SHARP_)));
});})(neighbours))
,neighbours)) / (flocking.core.alignment_neighbourhood - (1)));
var vyf = (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,((function (neighbours,vxf){
return (function (p1__7089_SHARP_){
return new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boid","boid",-1588406796).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__7089_SHARP_)));
});})(neighbours,vxf))
,neighbours)) / (flocking.core.alignment_neighbourhood - (1)));
var fx = ((vxf - new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(boid)) * flocking.core.alignment_coeff);
var fy = ((vyf - new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(boid)) * flocking.core.alignment_coeff);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),fx,new cljs.core.Keyword(null,"fy","fy",550788984),fy], null);
});
flocking.core.total_force = (function total_force(cm,tree,boid){
var forces = cljs.core.juxt.call(null,cljs.core.partial.call(null,flocking.core.cohesion_force,cm),cljs.core.partial.call(null,flocking.core.separation_force,tree),cljs.core.partial.call(null,flocking.core.alignment_force,tree)).call(null,boid);
var fx = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),forces));
var fy = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"fy","fy",550788984),forces));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),fx,new cljs.core.Keyword(null,"fy","fy",550788984),fy], null);
});
flocking.core.calculate_forces = (function calculate_forces(boids){
var cm = flocking.core.centre_of_mass.call(null,boids);
var tree = flocking.kdtree.build_tree.call(null,cljs.core.mapv.call(null,((function (cm){
return (function (b){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boid","boid",-1588406796),b], null));
});})(cm))
,boids));
return cljs.core.mapv.call(null,cljs.core.partial.call(null,flocking.core.total_force,cm,tree),boids);
});
flocking.core.limit = (function limit(v,m){
if((v > m)){
return m;
} else {
if((v < (-1.0 * m))){
return (-1.0 * m);
} else {
return v;

}
}
});
flocking.core.update_velocity = (function update_velocity(force,boid){
var map__7092 = boid;
var map__7092__$1 = ((cljs.core.seq_QMARK_.call(null,map__7092))?cljs.core.apply.call(null,cljs.core.hash_map,map__7092):map__7092);
var vx = cljs.core.get.call(null,map__7092__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__7092__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var map__7093 = force;
var map__7093__$1 = ((cljs.core.seq_QMARK_.call(null,map__7093))?cljs.core.apply.call(null,cljs.core.hash_map,map__7093):map__7093);
var fx = cljs.core.get.call(null,map__7093__$1,new cljs.core.Keyword(null,"fx","fx",-1237829572));
var fy = cljs.core.get.call(null,map__7093__$1,new cljs.core.Keyword(null,"fy","fy",550788984));
return cljs.core.assoc.call(null,boid,new cljs.core.Keyword(null,"vx","vx",-1685168462),flocking.core.limit.call(null,(vx + fx),10.0),new cljs.core.Keyword(null,"vy","vy",-2018509997),flocking.core.limit.call(null,(vy + fy),10.0));
});
flocking.core.update_position = (function update_position(p__7094){
var map__7096 = p__7094;
var map__7096__$1 = ((cljs.core.seq_QMARK_.call(null,map__7096))?cljs.core.apply.call(null,cljs.core.hash_map,map__7096):map__7096);
var boid = map__7096__$1;
var vy = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var vx = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var y = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__7096__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs.core.assoc.call(null,boid,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.mod.call(null,(x + vx),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(flocking.core.ranges)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.mod.call(null,(y + vy),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(flocking.core.ranges)));
});
flocking.core.update_boids = (function update_boids(boids){
var forces = flocking.core.calculate_forces.call(null,boids);
var boids_SINGLEQUOTE_ = cljs.core.mapv.call(null,flocking.core.update_position,cljs.core.mapv.call(null,flocking.core.update_velocity,forces,boids));
return boids_SINGLEQUOTE_;
});
flocking.core.run = (function run(boids_atom){
return setInterval((function (){
return cljs.core.swap_BANG_.call(null,boids_atom,flocking.core.update_boids);
}),(20));
});
flocking.core.render_boid = (function render_boid(coord_scale,velocity_scale){
return (function (p__7100){
var map__7101 = p__7100;
var map__7101__$1 = ((cljs.core.seq_QMARK_.call(null,map__7101))?cljs.core.apply.call(null,cljs.core.hash_map,map__7101):map__7101);
var boid = map__7101__$1;
var vy = cljs.core.get.call(null,map__7101__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var vx = cljs.core.get.call(null,map__7101__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var y = cljs.core.get.call(null,map__7101__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__7101__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var coords = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (velocity_scale * vx)),(y + (velocity_scale * vy))], null)], null);
var points = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.interpose," "),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,((function (coords,map__7101,map__7101__$1,boid,vy,vx,y,x){
return (function (p1__7097_SHARP_){
return (coord_scale * p1__7097_SHARP_);
});})(coords,map__7101,map__7101__$1,boid,vy,vx,y,x))
),coords)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null);
});
});
flocking.core.render_flock = (function render_flock(boids_atom,config_atom){
var boids = cljs.core.deref.call(null,boids_atom);
var map__7107 = cljs.core.deref.call(null,config_atom);
var map__7107__$1 = ((cljs.core.seq_QMARK_.call(null,map__7107))?cljs.core.apply.call(null,cljs.core.hash_map,map__7107):map__7107);
var ps = cljs.core.get.call(null,map__7107__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var vs = cljs.core.get.call(null,map__7107__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(480),new cljs.core.Keyword(null,"width","width",-384071477),(640)], null),(function (){var iter__4571__auto__ = ((function (boids,map__7107,map__7107__$1,ps,vs){
return (function iter__7108(s__7109){
return (new cljs.core.LazySeq(null,((function (boids,map__7107,map__7107__$1,ps,vs){
return (function (){
var s__7109__$1 = s__7109;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7109__$1);
if(temp__4126__auto__){
var s__7109__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7109__$2)){
var c__4569__auto__ = cljs.core.chunk_first.call(null,s__7109__$2);
var size__4570__auto__ = cljs.core.count.call(null,c__4569__auto__);
var b__7111 = cljs.core.chunk_buffer.call(null,size__4570__auto__);
if((function (){var i__7110 = (0);
while(true){
if((i__7110 < size__4570__auto__)){
var boid = cljs.core._nth.call(null,c__4569__auto__,i__7110);
cljs.core.chunk_append.call(null,b__7111,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flocking.core.render_boid.call(null,ps,vs),boid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),boid], null)));

var G__7112 = (i__7110 + (1));
i__7110 = G__7112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7111),iter__7108.call(null,cljs.core.chunk_rest.call(null,s__7109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7111),null);
}
} else {
var boid = cljs.core.first.call(null,s__7109__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flocking.core.render_boid.call(null,ps,vs),boid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),boid], null)),iter__7108.call(null,cljs.core.rest.call(null,s__7109__$2)));
}
} else {
return null;
}
break;
}
});})(boids,map__7107,map__7107__$1,ps,vs))
,null,null));
});})(boids,map__7107,map__7107__$1,ps,vs))
;
return iter__4571__auto__.call(null,boids);
})()], null);
});
flocking.core.mountit = (function mountit(boids_atom,config_atom){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flocking.core.render_flock,boids_atom,config_atom], null),document.body);
});
if(typeof flocking.core.config !== 'undefined'){
} else {
flocking.core.config = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),(1),new cljs.core.Keyword(null,"vs","vs",-2022097090),(2)], null));
}
if(typeof flocking.core.boids !== 'undefined'){
} else {
flocking.core.boids = reagent.core.atom.call(null,null);
}
if(typeof flocking.core.simulation !== 'undefined'){
} else {
flocking.core.simulation = reagent.core.atom.call(null,null);
}
flocking.core.start = (function start(){
if(cljs.core.truth_(cljs.core.deref.call(null,flocking.core.simulation))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,flocking.core.simulation,flocking.core.run.call(null,flocking.core.boids));
}
});
flocking.core.stop = (function stop(){
if(cljs.core.truth_(cljs.core.deref.call(null,flocking.core.simulation))){
return cljs.core.swap_BANG_.call(null,flocking.core.simulation,clearInterval);
} else {
return null;
}
});
flocking.core.begin = (function() {
var begin = null;
var begin__0 = (function (){
return begin.call(null,(50));
});
var begin__1 = (function (n){
if(cljs.core.truth_(cljs.core.deref.call(null,flocking.core.simulation))){
flocking.core.stop.call(null);
} else {
}

flocking.core.init_boids.call(null,n,flocking.core.boids);

flocking.core.mountit.call(null,flocking.core.boids,flocking.core.config);

return flocking.core.start.call(null);
});
begin = function(n){
switch(arguments.length){
case 0:
return begin__0.call(this);
case 1:
return begin__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$0 = begin__0;
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
return begin;
})()
;
flocking.core.begin.call(null);

//# sourceMappingURL=core.js.map?rel=1427901090602