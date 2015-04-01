// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25844_25848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25845_25849 = null;
var count__25846_25850 = (0);
var i__25847_25851 = (0);
while(true){
if((i__25847_25851 < count__25846_25850)){
var f_25852 = cljs.core._nth.call(null,chunk__25845_25849,i__25847_25851);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_25852);

var G__25853 = seq__25844_25848;
var G__25854 = chunk__25845_25849;
var G__25855 = count__25846_25850;
var G__25856 = (i__25847_25851 + (1));
seq__25844_25848 = G__25853;
chunk__25845_25849 = G__25854;
count__25846_25850 = G__25855;
i__25847_25851 = G__25856;
continue;
} else {
var temp__4126__auto___25857 = cljs.core.seq.call(null,seq__25844_25848);
if(temp__4126__auto___25857){
var seq__25844_25858__$1 = temp__4126__auto___25857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25844_25858__$1)){
var c__16932__auto___25859 = cljs.core.chunk_first.call(null,seq__25844_25858__$1);
var G__25860 = cljs.core.chunk_rest.call(null,seq__25844_25858__$1);
var G__25861 = c__16932__auto___25859;
var G__25862 = cljs.core.count.call(null,c__16932__auto___25859);
var G__25863 = (0);
seq__25844_25848 = G__25860;
chunk__25845_25849 = G__25861;
count__25846_25850 = G__25862;
i__25847_25851 = G__25863;
continue;
} else {
var f_25864 = cljs.core.first.call(null,seq__25844_25858__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_25864);

var G__25865 = cljs.core.next.call(null,seq__25844_25858__$1);
var G__25866 = null;
var G__25867 = (0);
var G__25868 = (0);
seq__25844_25848 = G__25865;
chunk__25845_25849 = G__25866;
count__25846_25850 = G__25867;
i__25847_25851 = G__25868;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1427899295832