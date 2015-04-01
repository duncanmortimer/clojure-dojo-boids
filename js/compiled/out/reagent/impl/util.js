// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__18655 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__18655,(0),null);
var parts = cljs.core.nthnext.call(null,vec__18655,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__18657__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__16145__auto___18658 = self__.p;
if(cljs.core.truth_(or__16145__auto___18658)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__18657 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__18659__i = 0, G__18659__a = new Array(arguments.length -  1);
while (G__18659__i < G__18659__a.length) {G__18659__a[G__18659__i] = arguments[G__18659__i + 1]; ++G__18659__i;}
  a = new cljs.core.IndexedSeq(G__18659__a,0);
} 
return G__18657__delegate.call(this,self__,a);};
G__18657.cljs$lang$maxFixedArity = 1;
G__18657.cljs$lang$applyTo = (function (arglist__18660){
var self__ = cljs.core.first(arglist__18660);
var a = cljs.core.rest(arglist__18660);
return G__18657__delegate(self__,a);
});
G__18657.cljs$core$IFn$_invoke$arity$variadic = G__18657__delegate;
return G__18657;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args18656){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18656)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__18661__delegate = function (a){
var _ = this;
var or__16145__auto___18662 = self__.p;
if(cljs.core.truth_(or__16145__auto___18662)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__18661 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__18663__i = 0, G__18663__a = new Array(arguments.length -  0);
while (G__18663__i < G__18663__a.length) {G__18663__a[G__18663__i] = arguments[G__18663__i + 0]; ++G__18663__i;}
  a = new cljs.core.IndexedSeq(G__18663__a,0);
} 
return G__18661__delegate.call(this,a);};
G__18661.cljs$lang$maxFixedArity = 0;
G__18661.cljs$lang$applyTo = (function (arglist__18664){
var a = cljs.core.seq(arglist__18664);
return G__18661__delegate(a);
});
G__18661.cljs$core$IFn$_invoke$arity$variadic = G__18661__delegate;
return G__18661;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e18666){if((e18666 instanceof Object)){
var e = e18666;
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Error unmounting:")].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e18666;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_18671 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_18671){
return (function (){
var _STAR_always_update_STAR_18672 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18672;
}});})(_STAR_always_update_STAR_18671))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18671;
}}catch (e18670){if((e18670 instanceof Object)){
var e = e18670;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e18670;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var seq__18677_18681 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__18678_18682 = null;
var count__18679_18683 = (0);
var i__18680_18684 = (0);
while(true){
if((i__18680_18684 < count__18679_18683)){
var v_18685 = cljs.core._nth.call(null,chunk__18678_18682,i__18680_18684);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_18685);

var G__18686 = seq__18677_18681;
var G__18687 = chunk__18678_18682;
var G__18688 = count__18679_18683;
var G__18689 = (i__18680_18684 + (1));
seq__18677_18681 = G__18686;
chunk__18678_18682 = G__18687;
count__18679_18683 = G__18688;
i__18680_18684 = G__18689;
continue;
} else {
var temp__4126__auto___18690 = cljs.core.seq.call(null,seq__18677_18681);
if(temp__4126__auto___18690){
var seq__18677_18691__$1 = temp__4126__auto___18690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18677_18691__$1)){
var c__16932__auto___18692 = cljs.core.chunk_first.call(null,seq__18677_18691__$1);
var G__18693 = cljs.core.chunk_rest.call(null,seq__18677_18691__$1);
var G__18694 = c__16932__auto___18692;
var G__18695 = cljs.core.count.call(null,c__16932__auto___18692);
var G__18696 = (0);
seq__18677_18681 = G__18693;
chunk__18678_18682 = G__18694;
count__18679_18683 = G__18695;
i__18680_18684 = G__18696;
continue;
} else {
var v_18697 = cljs.core.first.call(null,seq__18677_18691__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_18697);

var G__18698 = cljs.core.next.call(null,seq__18677_18691__$1);
var G__18699 = null;
var G__18700 = (0);
var G__18701 = (0);
seq__18677_18681 = G__18698;
chunk__18678_18682 = G__18699;
count__18679_18683 = G__18700;
i__18680_18684 = G__18701;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=util.js.map?rel=1427899286335