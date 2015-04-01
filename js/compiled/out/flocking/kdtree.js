// Compiled by ClojureScript 0.0-2850 {}
goog.provide('flocking.kdtree');
goog.require('cljs.core');

/**
* @constructor
* @param {*} left
* @param {*} right
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
flocking.kdtree.Node = (function (left,right,value,__meta,__extmap,__hash){
this.left = left;
this.right = right;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
flocking.kdtree.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16748__auto__,k__16749__auto__){
var self__ = this;
var this__16748__auto____$1 = this;
return cljs.core._lookup.call(null,this__16748__auto____$1,k__16749__auto__,null);
});

flocking.kdtree.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16750__auto__,k18368,else__16751__auto__){
var self__ = this;
var this__16750__auto____$1 = this;
var G__18370 = (((k18368 instanceof cljs.core.Keyword))?k18368.fqn:null);
switch (G__18370) {
case "value":
return self__.value;

break;
case "right":
return self__.right;

break;
case "left":
return self__.left;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18368,else__16751__auto__);

}
});

flocking.kdtree.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16762__auto__,writer__16763__auto__,opts__16764__auto__){
var self__ = this;
var this__16762__auto____$1 = this;
var pr_pair__16765__auto__ = ((function (this__16762__auto____$1){
return (function (keyval__16766__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16763__auto__,cljs.core.pr_writer,""," ","",opts__16764__auto__,keyval__16766__auto__);
});})(this__16762__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16763__auto__,pr_pair__16765__auto__,"#flocking.kdtree.Node{",", ","}",opts__16764__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

flocking.kdtree.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16746__auto__){
var self__ = this;
var this__16746__auto____$1 = this;
return self__.__meta;
});

flocking.kdtree.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16742__auto__){
var self__ = this;
var this__16742__auto____$1 = this;
return (new flocking.kdtree.Node(self__.left,self__.right,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

flocking.kdtree.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16752__auto__){
var self__ = this;
var this__16752__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

flocking.kdtree.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16743__auto__){
var self__ = this;
var this__16743__auto____$1 = this;
var h__16566__auto__ = self__.__hash;
if(!((h__16566__auto__ == null))){
return h__16566__auto__;
} else {
var h__16566__auto____$1 = cljs.core.hash_imap.call(null,this__16743__auto____$1);
self__.__hash = h__16566__auto____$1;

return h__16566__auto____$1;
}
});

flocking.kdtree.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16744__auto__,other__16745__auto__){
var self__ = this;
var this__16744__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16133__auto__ = other__16745__auto__;
if(cljs.core.truth_(and__16133__auto__)){
return ((this__16744__auto____$1.constructor === other__16745__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__16744__auto____$1,other__16745__auto__));
} else {
return and__16133__auto__;
}
})())){
return true;
} else {
return false;
}
});

flocking.kdtree.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16757__auto__,k__16758__auto__){
var self__ = this;
var this__16757__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__16758__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16757__auto____$1),self__.__meta),k__16758__auto__);
} else {
return (new flocking.kdtree.Node(self__.left,self__.right,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16758__auto__)),null));
}
});

flocking.kdtree.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16755__auto__,k__16756__auto__,G__18367){
var self__ = this;
var this__16755__auto____$1 = this;
var pred__18371 = cljs.core.keyword_identical_QMARK_;
var expr__18372 = k__16756__auto__;
if(cljs.core.truth_(pred__18371.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__18372))){
return (new flocking.kdtree.Node(G__18367,self__.right,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18371.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__18372))){
return (new flocking.kdtree.Node(self__.left,G__18367,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18371.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__18372))){
return (new flocking.kdtree.Node(self__.left,self__.right,G__18367,self__.__meta,self__.__extmap,null));
} else {
return (new flocking.kdtree.Node(self__.left,self__.right,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16756__auto__,G__18367),null));
}
}
}
});

flocking.kdtree.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16760__auto__){
var self__ = this;
var this__16760__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

flocking.kdtree.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16747__auto__,G__18367){
var self__ = this;
var this__16747__auto____$1 = this;
return (new flocking.kdtree.Node(self__.left,self__.right,self__.value,G__18367,self__.__extmap,self__.__hash));
});

flocking.kdtree.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16753__auto__,entry__16754__auto__){
var self__ = this;
var this__16753__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16754__auto__)){
return cljs.core._assoc.call(null,this__16753__auto____$1,cljs.core._nth.call(null,entry__16754__auto__,(0)),cljs.core._nth.call(null,entry__16754__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16753__auto____$1,entry__16754__auto__);
}
});

flocking.kdtree.Node.cljs$lang$type = true;

flocking.kdtree.Node.cljs$lang$ctorPrSeq = (function (this__16782__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"flocking.kdtree/Node");
});

flocking.kdtree.Node.cljs$lang$ctorPrWriter = (function (this__16782__auto__,writer__16783__auto__){
return cljs.core._write.call(null,writer__16783__auto__,"flocking.kdtree/Node");
});

flocking.kdtree.__GT_Node = (function __GT_Node(left,right,value){
return (new flocking.kdtree.Node(left,right,value,null,null,null));
});

flocking.kdtree.map__GT_Node = (function map__GT_Node(G__18369){
return (new flocking.kdtree.Node(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__18369),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__18369),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__18369),null,cljs.core.dissoc.call(null,G__18369,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
* @param {*} point
* @param {*} dist_squared
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
flocking.kdtree.Result = (function (point,dist_squared,__meta,__extmap,__hash){
this.point = point;
this.dist_squared = dist_squared;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
flocking.kdtree.Result.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16748__auto__,k__16749__auto__){
var self__ = this;
var this__16748__auto____$1 = this;
return cljs.core._lookup.call(null,this__16748__auto____$1,k__16749__auto__,null);
});

flocking.kdtree.Result.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16750__auto__,k18376,else__16751__auto__){
var self__ = this;
var this__16750__auto____$1 = this;
var G__18378 = (((k18376 instanceof cljs.core.Keyword))?k18376.fqn:null);
switch (G__18378) {
case "dist-squared":
return self__.dist_squared;

break;
case "point":
return self__.point;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18376,else__16751__auto__);

}
});

flocking.kdtree.Result.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16762__auto__,writer__16763__auto__,opts__16764__auto__){
var self__ = this;
var this__16762__auto____$1 = this;
var pr_pair__16765__auto__ = ((function (this__16762__auto____$1){
return (function (keyval__16766__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16763__auto__,cljs.core.pr_writer,""," ","",opts__16764__auto__,keyval__16766__auto__);
});})(this__16762__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16763__auto__,pr_pair__16765__auto__,"#flocking.kdtree.Result{",", ","}",opts__16764__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1813198264),self__.point],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989),self__.dist_squared],null))], null),self__.__extmap));
});

flocking.kdtree.Result.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16746__auto__){
var self__ = this;
var this__16746__auto____$1 = this;
return self__.__meta;
});

flocking.kdtree.Result.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16742__auto__){
var self__ = this;
var this__16742__auto____$1 = this;
return (new flocking.kdtree.Result(self__.point,self__.dist_squared,self__.__meta,self__.__extmap,self__.__hash));
});

flocking.kdtree.Result.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16752__auto__){
var self__ = this;
var this__16752__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

flocking.kdtree.Result.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16743__auto__){
var self__ = this;
var this__16743__auto____$1 = this;
var h__16566__auto__ = self__.__hash;
if(!((h__16566__auto__ == null))){
return h__16566__auto__;
} else {
var h__16566__auto____$1 = cljs.core.hash_imap.call(null,this__16743__auto____$1);
self__.__hash = h__16566__auto____$1;

return h__16566__auto____$1;
}
});

flocking.kdtree.Result.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16744__auto__,other__16745__auto__){
var self__ = this;
var this__16744__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16133__auto__ = other__16745__auto__;
if(cljs.core.truth_(and__16133__auto__)){
return ((this__16744__auto____$1.constructor === other__16745__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__16744__auto____$1,other__16745__auto__));
} else {
return and__16133__auto__;
}
})())){
return true;
} else {
return false;
}
});

flocking.kdtree.Result.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16757__auto__,k__16758__auto__){
var self__ = this;
var this__16757__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989),null,new cljs.core.Keyword(null,"point","point",1813198264),null], null), null),k__16758__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16757__auto____$1),self__.__meta),k__16758__auto__);
} else {
return (new flocking.kdtree.Result(self__.point,self__.dist_squared,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16758__auto__)),null));
}
});

flocking.kdtree.Result.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16755__auto__,k__16756__auto__,G__18375){
var self__ = this;
var this__16755__auto____$1 = this;
var pred__18379 = cljs.core.keyword_identical_QMARK_;
var expr__18380 = k__16756__auto__;
if(cljs.core.truth_(pred__18379.call(null,new cljs.core.Keyword(null,"point","point",1813198264),expr__18380))){
return (new flocking.kdtree.Result(G__18375,self__.dist_squared,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18379.call(null,new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989),expr__18380))){
return (new flocking.kdtree.Result(self__.point,G__18375,self__.__meta,self__.__extmap,null));
} else {
return (new flocking.kdtree.Result(self__.point,self__.dist_squared,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16756__auto__,G__18375),null));
}
}
});

flocking.kdtree.Result.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16760__auto__){
var self__ = this;
var this__16760__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1813198264),self__.point],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989),self__.dist_squared],null))], null),self__.__extmap));
});

flocking.kdtree.Result.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16747__auto__,G__18375){
var self__ = this;
var this__16747__auto____$1 = this;
return (new flocking.kdtree.Result(self__.point,self__.dist_squared,G__18375,self__.__extmap,self__.__hash));
});

flocking.kdtree.Result.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16753__auto__,entry__16754__auto__){
var self__ = this;
var this__16753__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16754__auto__)){
return cljs.core._assoc.call(null,this__16753__auto____$1,cljs.core._nth.call(null,entry__16754__auto__,(0)),cljs.core._nth.call(null,entry__16754__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16753__auto____$1,entry__16754__auto__);
}
});

flocking.kdtree.Result.cljs$lang$type = true;

flocking.kdtree.Result.cljs$lang$ctorPrSeq = (function (this__16782__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"flocking.kdtree/Result");
});

flocking.kdtree.Result.cljs$lang$ctorPrWriter = (function (this__16782__auto__,writer__16783__auto__){
return cljs.core._write.call(null,writer__16783__auto__,"flocking.kdtree/Result");
});

flocking.kdtree.__GT_Result = (function __GT_Result(point,dist_squared){
return (new flocking.kdtree.Result(point,dist_squared,null,null,null));
});

flocking.kdtree.map__GT_Result = (function map__GT_Result(G__18377){
return (new flocking.kdtree.Result(new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(G__18377),new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(G__18377),null,cljs.core.dissoc.call(null,G__18377,new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989)),null));
});

flocking.kdtree.dist_squared = (function dist_squared(a,b){

var res = 0.0;
var ind = cljs.core.long$.call(null,(0));
while(true){
if((ind === a.length)){
return res;
} else {
var v = ((a[ind]) - (b[ind]));
var G__18383 = (res + (v * v));
var G__18384 = (ind + (1));
res = G__18383;
ind = G__18384;
continue;
}
break;
}
});
flocking.kdtree.build_tree_internal = (function build_tree_internal(points,depth){
if(cljs.core.empty_QMARK_.call(null,points)){
return null;
} else {
var point_count = cljs.core.count.call(null,points);
var k = cljs.core.count.call(null,cljs.core.nth.call(null,points,(0)));
var dimension = cljs.core.mod.call(null,depth,k);
var points__$1 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,((function (point_count,k,dimension){
return (function (p1__18385_SHARP_){
return cljs.core.nth.call(null,p1__18385_SHARP_,dimension);
});})(point_count,k,dimension))
,points));
var median = cljs.core.quot.call(null,point_count,(2));
var split_point = (function (){var n = median;
while(true){
if(cljs.core._EQ_.call(null,(0),n)){
return n;
} else {
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,points__$1.call(null,n),dimension),cljs.core.nth.call(null,points__$1.call(null,(n - (1))),dimension))){
var G__18386 = (n - (1));
n = G__18386;
continue;
} else {
return n;

}
}
break;
}
})();
var left_tree = build_tree_internal.call(null,cljs.core.subvec.call(null,points__$1,(0),split_point),(depth + (1)));
var right_tree = build_tree_internal.call(null,cljs.core.subvec.call(null,points__$1,(split_point + (1))),(depth + (1)));
return (new flocking.kdtree.Node(left_tree,right_tree,cljs.core.double_array.call(null,cljs.core.nth.call(null,points__$1,split_point)),cljs.core.meta.call(null,cljs.core.nth.call(null,points__$1,split_point)),null,null,null,null));
}
});
/**
* Construct a Kd-tree from points. Assumes all
* points are of the same dimension.
*/
flocking.kdtree.build_tree = (function build_tree(points){
return flocking.kdtree.build_tree_internal.call(null,points,(0));
});
flocking.kdtree.insert_internal = (function insert_internal(tree,point,depth,point_meta){
var k = point.length;
var dimension = cljs.core.mod.call(null,depth,k);
if((tree == null)){
return (new flocking.kdtree.Node(null,null,point,point_meta,null,null,null,null));
} else {
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree);
var go_to_left_QMARK_ = ((point[dimension]) < (value[dimension]));
var left = ((go_to_left_QMARK_)?insert_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),point,(depth + (1)),point_meta):new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree));
var right = ((!(go_to_left_QMARK_))?insert_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),point,(depth + (1)),point_meta):new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree));
return (new flocking.kdtree.Node(left,right,value,cljs.core.meta.call(null,tree),null,null,null,null));
}
});
/**
* Adds a point to an existing tree.
*/
flocking.kdtree.insert = (function insert(tree,point){
return flocking.kdtree.insert_internal.call(null,tree,cljs.core.double_array.call(null,point),(0),cljs.core.meta.call(null,point));
});
flocking.kdtree.find_min_internal = (function find_min_internal(tree,dimension,depth){
while(true){
if(cljs.core.truth_(tree)){
var k = cljs.core.count.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree));
var min_node = ((function (tree,dimension,depth,k){
return (function (node1,node2){
var value1 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node1);
var value2 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node2);
if(((value2 == null)) || (((value1[dimension]) < (value2[dimension])))){
return node1;
} else {
return node2;
}
});})(tree,dimension,depth,k))
;
if(cljs.core._EQ_.call(null,dimension,cljs.core.mod.call(null,depth,k))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree))){
var G__18387 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree);
var G__18388 = dimension;
var G__18389 = (depth + (1));
tree = G__18387;
dimension = G__18388;
depth = G__18389;
continue;
} else {
return tree;
}
} else {
return min_node.call(null,min_node.call(null,tree,find_min_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),dimension,(depth + (1)))),find_min_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),dimension,(depth + (1))));
}
} else {
return null;
}
break;
}
});
/**
* Locate the point with the smallest value in a given dimension.
* Used internally by the delete function. Runs in O(√n) time for a
* balanced tree.
*/
flocking.kdtree.find_min = (function find_min(tree,dimension){
var res = flocking.kdtree.find_min_internal.call(null,tree,dimension,(0));
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.meta.call(null,res));
});
/**
* Compares 2 points represented by arrays of doubles and return true if they are equal
*/
flocking.kdtree.points_EQ_ = (function points_EQ_(a,b){
var i = (0);
while(true){
if((i === a.length)){
return true;
} else {
if(((a[i]) === (b[i]))){
var G__18390 = (i + (1));
i = G__18390;
continue;
} else {
return false;

}
}
break;
}
});
flocking.kdtree.delete_internal = (function delete_internal(tree,point,depth){
if(cljs.core.truth_(tree)){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree);
var k = value.length;
var dimension = cljs.core.mod.call(null,depth,k);
if(!(flocking.kdtree.points_EQ_.call(null,point,value))){
var go_to_left_QMARK_ = ((point[dimension]) < (value[dimension]));
var left = ((go_to_left_QMARK_)?delete_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),point,(depth + (1))):new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree));
var right = ((!(go_to_left_QMARK_))?delete_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),point,(depth + (1))):new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree));
return (new flocking.kdtree.Node(left,right,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree),cljs.core.meta.call(null,tree),null,null,null,null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree))){
var min = flocking.kdtree.find_min_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),dimension,(depth + (1)));
return (new flocking.kdtree.Node(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),delete_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(min),(depth + (1))),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(min),cljs.core.meta.call(null,min),null,null,null,null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree))){
var min = flocking.kdtree.find_min_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),dimension,(depth + (1)));
return (new flocking.kdtree.Node(null,delete_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(min),(depth + (1))),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(min),cljs.core.meta.call(null,min),null,null,null,null));
} else {
return null;

}
}
}
} else {
return null;
}
});
/**
* Delete value at the given point. Runs in O(log n) time for a balanced tree.
*/
flocking.kdtree.delete$ = (function delete$(tree,point){
return flocking.kdtree.delete_internal.call(null,tree,cljs.core.double_array.call(null,point),(0));
});
/**
* Inserts value to sorted transient vector. Vector will not grow
* bigger than n elements.
*/
flocking.kdtree.insert_sorted_BANG_ = (function insert_sorted_BANG_(vec,value,n){
if(((cljs.core.count.call(null,vec) === n)) && ((new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(value) > new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,vec,(n - (1))))))){
return vec;
} else {
var ind = cljs.core.long$.call(null,(0));
var value__$1 = value;
var vec__$1 = vec;
while(true){
if(cljs.core._EQ_.call(null,ind,n)){
return vec__$1;
} else {
if(cljs.core._EQ_.call(null,ind,cljs.core.count.call(null,vec__$1))){
return cljs.core.conj_BANG_.call(null,vec__$1,value__$1);
} else {
var existing = cljs.core.nth.call(null,vec__$1,ind);
if((new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(value__$1) < new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(existing))){
var G__18391 = (ind + (1));
var G__18392 = existing;
var G__18393 = cljs.core.assoc_BANG_.call(null,vec__$1,ind,value__$1);
ind = G__18391;
value__$1 = G__18392;
vec__$1 = G__18393;
continue;
} else {
var G__18394 = (ind + (1));
var G__18395 = value__$1;
var G__18396 = vec__$1;
ind = G__18394;
value__$1 = G__18395;
vec__$1 = G__18396;
continue;
}

}
}
break;
}
}
});
flocking.kdtree.nearest_neighbor_internal = (function nearest_neighbor_internal(tree,point,n,dimension,best){
while(true){
if((tree == null)){
return best;
} else {
var dimension__$1 = cljs.core.long$.call(null,dimension);
var next_dimension = cljs.core.mod.call(null,(dimension__$1 + (1)),point.length);
var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree);
var dim_dist = ((point[dimension__$1]) - (v[dimension__$1]));
var closest_semiplane = (((dim_dist > 0.0))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937)).call(null,tree);
var farthest_semiplane = (((dim_dist > 0.0))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833)).call(null,tree);
var best_with_cur = flocking.kdtree.insert_sorted_BANG_.call(null,best,(new flocking.kdtree.Result(v,flocking.kdtree.dist_squared.call(null,v,point),cljs.core.meta.call(null,tree),null,null,null,null)),n);
var best_near = nearest_neighbor_internal.call(null,closest_semiplane,point,n,next_dimension,best_with_cur);
var worst_nearest = new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,best_near,(cljs.core.count.call(null,best_near) - (1))));
if(((dim_dist * dim_dist) < worst_nearest)){
var G__18397 = farthest_semiplane;
var G__18398 = point;
var G__18399 = n;
var G__18400 = next_dimension;
var G__18401 = best_near;
tree = G__18397;
point = G__18398;
n = G__18399;
dimension = G__18400;
best = G__18401;
continue;
} else {
return best_near;
}
}
break;
}
});
/**
* Compute n nearest neighbors for a point. If n is
* omitted, the result is the nearest neighbor;
* otherwise, the result is a list of length n.
*/
flocking.kdtree.nearest_neighbor = (function() {
var nearest_neighbor = null;
var nearest_neighbor__2 = (function (tree,point){
return cljs.core.first.call(null,nearest_neighbor.call(null,tree,point,(1)));
});
var nearest_neighbor__3 = (function (tree,point,n){
return cljs.core.map.call(null,(function (p1__18402_SHARP_){
return cljs.core.update_in.call(null,p1__18402_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264)], null),cljs.core.vec);
}),cljs.core.persistent_BANG_.call(null,flocking.kdtree.nearest_neighbor_internal.call(null,tree,cljs.core.double_array.call(null,point),n,(0),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY))));
});
nearest_neighbor = function(tree,point,n){
switch(arguments.length){
case 2:
return nearest_neighbor__2.call(this,tree,point);
case 3:
return nearest_neighbor__3.call(this,tree,point,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nearest_neighbor.cljs$core$IFn$_invoke$arity$2 = nearest_neighbor__2;
nearest_neighbor.cljs$core$IFn$_invoke$arity$3 = nearest_neighbor__3;
return nearest_neighbor;
})()
;
flocking.kdtree.inside_interval_QMARK_ = (function inside_interval_QMARK_(interval,point){
var n = point.length;
var ind = (0);
while(true){
if((ind === n)){
return true;
} else {
var axis_intv = cljs.core.nth.call(null,interval,ind);
var left = (axis_intv[(0)]);
var right = (axis_intv[(1)]);
var value = (point[ind]);
if(((left <= value)) && ((value <= right))){
var G__18403 = (ind + (1));
ind = G__18403;
continue;
} else {
return false;
}
}
break;
}
});
flocking.kdtree.interval_search_internal = (function interval_search_internal(tree,interval,depth,accum){
if((tree == null)){
return accum;
} else {
var point = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree);
var accum__$1 = ((flocking.kdtree.inside_interval_QMARK_.call(null,interval,point))?cljs.core.conj_BANG_.call(null,accum,cljs.core.with_meta.call(null,cljs.core.vec.call(null,point),cljs.core.meta.call(null,tree))):accum);
var k = cljs.core.mod.call(null,depth,point.length);
var dim_value = (point[k]);
var dim_boundaries = cljs.core.nth.call(null,interval,k);
var left_boundary = (dim_boundaries[(0)]);
var right_boundary = (dim_boundaries[(1)]);
var accum__$2 = (((dim_value <= right_boundary))?interval_search_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),interval,(depth + (1)),accum__$1):accum__$1);
var accum__$3 = (((dim_value > left_boundary))?interval_search_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),interval,(depth + (1)),accum__$2):accum__$2);
return accum__$3;
}
});
/**
* Find all points inside given interval.
* Interval is a sequence of boundaries for each dimension.
* Example: interval 0≤x≤10, 5≤y≤20 represented as [[0 10] [5 20]]
*/
flocking.kdtree.interval_search = (function interval_search(tree,interval){
return cljs.core.persistent_BANG_.call(null,flocking.kdtree.interval_search_internal.call(null,tree,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.double_array,interval)),(0),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)));
});

//# sourceMappingURL=kdtree.js.map?rel=1427899283942