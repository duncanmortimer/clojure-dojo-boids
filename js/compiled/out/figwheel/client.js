// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24837__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24838__i = 0, G__24838__a = new Array(arguments.length -  0);
while (G__24838__i < G__24838__a.length) {G__24838__a[G__24838__i] = arguments[G__24838__i + 0]; ++G__24838__i;}
  args = new cljs.core.IndexedSeq(G__24838__a,0);
} 
return G__24837__delegate.call(this,args);};
G__24837.cljs$lang$maxFixedArity = 0;
G__24837.cljs$lang$applyTo = (function (arglist__24839){
var args = cljs.core.seq(arglist__24839);
return G__24837__delegate(args);
});
G__24837.cljs$core$IFn$_invoke$arity$variadic = G__24837__delegate;
return G__24837;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24840){
var map__24842 = p__24840;
var map__24842__$1 = ((cljs.core.seq_QMARK_.call(null,map__24842))?cljs.core.apply.call(null,cljs.core.hash_map,map__24842):map__24842);
var class$ = cljs.core.get.call(null,map__24842__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__24842__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__16145__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__16133__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16133__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16133__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18145__auto___24971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___24971,ch){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___24971,ch){
return (function (state_24945){
var state_val_24946 = (state_24945[(1)]);
if((state_val_24946 === (7))){
var inst_24941 = (state_24945[(2)]);
var state_24945__$1 = state_24945;
var statearr_24947_24972 = state_24945__$1;
(statearr_24947_24972[(2)] = inst_24941);

(statearr_24947_24972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (1))){
var state_24945__$1 = state_24945;
var statearr_24948_24973 = state_24945__$1;
(statearr_24948_24973[(2)] = null);

(statearr_24948_24973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (4))){
var inst_24909 = (state_24945[(7)]);
var inst_24909__$1 = (state_24945[(2)]);
var state_24945__$1 = (function (){var statearr_24949 = state_24945;
(statearr_24949[(7)] = inst_24909__$1);

return statearr_24949;
})();
if(cljs.core.truth_(inst_24909__$1)){
var statearr_24950_24974 = state_24945__$1;
(statearr_24950_24974[(1)] = (5));

} else {
var statearr_24951_24975 = state_24945__$1;
(statearr_24951_24975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (13))){
var state_24945__$1 = state_24945;
var statearr_24952_24976 = state_24945__$1;
(statearr_24952_24976[(2)] = null);

(statearr_24952_24976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (6))){
var state_24945__$1 = state_24945;
var statearr_24953_24977 = state_24945__$1;
(statearr_24953_24977[(2)] = null);

(statearr_24953_24977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (3))){
var inst_24943 = (state_24945[(2)]);
var state_24945__$1 = state_24945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24945__$1,inst_24943);
} else {
if((state_val_24946 === (12))){
var inst_24916 = (state_24945[(8)]);
var inst_24929 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24916);
var inst_24930 = cljs.core.first.call(null,inst_24929);
var inst_24931 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24930);
var inst_24932 = console.warn("Figwheel: Not loading code with warnings - ",inst_24931);
var state_24945__$1 = state_24945;
var statearr_24954_24978 = state_24945__$1;
(statearr_24954_24978[(2)] = inst_24932);

(statearr_24954_24978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (2))){
var state_24945__$1 = state_24945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24945__$1,(4),ch);
} else {
if((state_val_24946 === (11))){
var inst_24925 = (state_24945[(2)]);
var state_24945__$1 = state_24945;
var statearr_24955_24979 = state_24945__$1;
(statearr_24955_24979[(2)] = inst_24925);

(statearr_24955_24979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (9))){
var inst_24915 = (state_24945[(9)]);
var inst_24927 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24915,opts);
var state_24945__$1 = state_24945;
if(inst_24927){
var statearr_24956_24980 = state_24945__$1;
(statearr_24956_24980[(1)] = (12));

} else {
var statearr_24957_24981 = state_24945__$1;
(statearr_24957_24981[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (5))){
var inst_24909 = (state_24945[(7)]);
var inst_24915 = (state_24945[(9)]);
var inst_24911 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24912 = (new cljs.core.PersistentArrayMap(null,2,inst_24911,null));
var inst_24913 = (new cljs.core.PersistentHashSet(null,inst_24912,null));
var inst_24914 = figwheel.client.focus_msgs.call(null,inst_24913,inst_24909);
var inst_24915__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24914);
var inst_24916 = cljs.core.first.call(null,inst_24914);
var inst_24917 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24915__$1,opts);
var state_24945__$1 = (function (){var statearr_24958 = state_24945;
(statearr_24958[(9)] = inst_24915__$1);

(statearr_24958[(8)] = inst_24916);

return statearr_24958;
})();
if(cljs.core.truth_(inst_24917)){
var statearr_24959_24982 = state_24945__$1;
(statearr_24959_24982[(1)] = (8));

} else {
var statearr_24960_24983 = state_24945__$1;
(statearr_24960_24983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (14))){
var inst_24935 = (state_24945[(2)]);
var state_24945__$1 = state_24945;
var statearr_24961_24984 = state_24945__$1;
(statearr_24961_24984[(2)] = inst_24935);

(statearr_24961_24984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (10))){
var inst_24937 = (state_24945[(2)]);
var state_24945__$1 = (function (){var statearr_24962 = state_24945;
(statearr_24962[(10)] = inst_24937);

return statearr_24962;
})();
var statearr_24963_24985 = state_24945__$1;
(statearr_24963_24985[(2)] = null);

(statearr_24963_24985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (8))){
var inst_24916 = (state_24945[(8)]);
var inst_24919 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24920 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24916);
var inst_24921 = cljs.core.async.timeout.call(null,(1000));
var inst_24922 = [inst_24920,inst_24921];
var inst_24923 = (new cljs.core.PersistentVector(null,2,(5),inst_24919,inst_24922,null));
var state_24945__$1 = state_24945;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24945__$1,(11),inst_24923);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18145__auto___24971,ch))
;
return ((function (switch__18130__auto__,c__18145__auto___24971,ch){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_24967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24967[(0)] = state_machine__18131__auto__);

(statearr_24967[(1)] = (1));

return statearr_24967;
});
var state_machine__18131__auto____1 = (function (state_24945){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_24945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e24968){if((e24968 instanceof Object)){
var ex__18134__auto__ = e24968;
var statearr_24969_24986 = state_24945;
(statearr_24969_24986[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24987 = state_24945;
state_24945 = G__24987;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_24945){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_24945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___24971,ch))
})();
var state__18147__auto__ = (function (){var statearr_24970 = f__18146__auto__.call(null);
(statearr_24970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___24971);

return statearr_24970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___24971,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24988_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24988_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24997 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__24990_SHARP_,p2__24989_SHARP_){
return [cljs.core.str(p2__24989_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24997){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_24995 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24996 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24995,_STAR_print_newline_STAR_24996,base_path_24997){
return (function() { 
var G__24998__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24999__i = 0, G__24999__a = new Array(arguments.length -  0);
while (G__24999__i < G__24999__a.length) {G__24999__a[G__24999__i] = arguments[G__24999__i + 0]; ++G__24999__i;}
  args = new cljs.core.IndexedSeq(G__24999__a,0);
} 
return G__24998__delegate.call(this,args);};
G__24998.cljs$lang$maxFixedArity = 0;
G__24998.cljs$lang$applyTo = (function (arglist__25000){
var args = cljs.core.seq(arglist__25000);
return G__24998__delegate(args);
});
G__24998.cljs$core$IFn$_invoke$arity$variadic = G__24998__delegate;
return G__24998;
})()
;})(_STAR_print_fn_STAR_24995,_STAR_print_newline_STAR_24996,base_path_24997))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24996;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24995;
}}catch (e24994){if((e24994 instanceof Error)){
var e = e24994;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24997], null));
} else {
var e = e24994;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24997))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__25001){
var map__25006 = p__25001;
var map__25006__$1 = ((cljs.core.seq_QMARK_.call(null,map__25006))?cljs.core.apply.call(null,cljs.core.hash_map,map__25006):map__25006);
var opts = map__25006__$1;
var build_id = cljs.core.get.call(null,map__25006__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25006,map__25006__$1,opts,build_id){
return (function (p__25007){
var vec__25008 = p__25007;
var map__25009 = cljs.core.nth.call(null,vec__25008,(0),null);
var map__25009__$1 = ((cljs.core.seq_QMARK_.call(null,map__25009))?cljs.core.apply.call(null,cljs.core.hash_map,map__25009):map__25009);
var msg = map__25009__$1;
var msg_name = cljs.core.get.call(null,map__25009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25008,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25008,map__25009,map__25009__$1,msg,msg_name,_,map__25006,map__25006__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25008,map__25009,map__25009__$1,msg,msg_name,_,map__25006,map__25006__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25006,map__25006__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__25013){
var vec__25014 = p__25013;
var map__25015 = cljs.core.nth.call(null,vec__25014,(0),null);
var map__25015__$1 = ((cljs.core.seq_QMARK_.call(null,map__25015))?cljs.core.apply.call(null,cljs.core.hash_map,map__25015):map__25015);
var msg = map__25015__$1;
var msg_name = cljs.core.get.call(null,map__25015__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25014,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__25016){
var map__25024 = p__25016;
var map__25024__$1 = ((cljs.core.seq_QMARK_.call(null,map__25024))?cljs.core.apply.call(null,cljs.core.hash_map,map__25024):map__25024);
var on_compile_fail = cljs.core.get.call(null,map__25024__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25024__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25024,map__25024__$1,on_compile_fail,on_compile_warning){
return (function (p__25025){
var vec__25026 = p__25025;
var map__25027 = cljs.core.nth.call(null,vec__25026,(0),null);
var map__25027__$1 = ((cljs.core.seq_QMARK_.call(null,map__25027))?cljs.core.apply.call(null,cljs.core.hash_map,map__25027):map__25027);
var msg = map__25027__$1;
var msg_name = cljs.core.get.call(null,map__25027__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25026,(1));
var pred__25028 = cljs.core._EQ_;
var expr__25029 = msg_name;
if(cljs.core.truth_(pred__25028.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25029))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25028.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25029))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25024,map__25024__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto__,msg_hist,msg_names,msg){
return (function (state_25226){
var state_val_25227 = (state_25226[(1)]);
if((state_val_25227 === (7))){
var inst_25162 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25228_25269 = state_25226__$1;
(statearr_25228_25269[(2)] = inst_25162);

(statearr_25228_25269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (20))){
var inst_25188 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25226__$1 = state_25226;
if(inst_25188){
var statearr_25229_25270 = state_25226__$1;
(statearr_25229_25270[(1)] = (22));

} else {
var statearr_25230_25271 = state_25226__$1;
(statearr_25230_25271[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (27))){
var inst_25200 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25201 = figwheel.client.heads_up.display_warning.call(null,inst_25200);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(30),inst_25201);
} else {
if((state_val_25227 === (1))){
var inst_25150 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25226__$1 = state_25226;
if(cljs.core.truth_(inst_25150)){
var statearr_25231_25272 = state_25226__$1;
(statearr_25231_25272[(1)] = (2));

} else {
var statearr_25232_25273 = state_25226__$1;
(statearr_25232_25273[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (24))){
var inst_25216 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25233_25274 = state_25226__$1;
(statearr_25233_25274[(2)] = inst_25216);

(statearr_25233_25274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (4))){
var inst_25224 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25226__$1,inst_25224);
} else {
if((state_val_25227 === (15))){
var inst_25177 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25178 = figwheel.client.format_messages.call(null,inst_25177);
var inst_25179 = figwheel.client.heads_up.display_error.call(null,inst_25178);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(18),inst_25179);
} else {
if((state_val_25227 === (21))){
var inst_25218 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25234_25275 = state_25226__$1;
(statearr_25234_25275[(2)] = inst_25218);

(statearr_25234_25275[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (31))){
var inst_25207 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(34),inst_25207);
} else {
if((state_val_25227 === (32))){
var state_25226__$1 = state_25226;
var statearr_25235_25276 = state_25226__$1;
(statearr_25235_25276[(2)] = null);

(statearr_25235_25276[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (33))){
var inst_25212 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25236_25277 = state_25226__$1;
(statearr_25236_25277[(2)] = inst_25212);

(statearr_25236_25277[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (13))){
var inst_25168 = (state_25226[(2)]);
var inst_25169 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25170 = figwheel.client.format_messages.call(null,inst_25169);
var inst_25171 = figwheel.client.heads_up.display_error.call(null,inst_25170);
var state_25226__$1 = (function (){var statearr_25237 = state_25226;
(statearr_25237[(7)] = inst_25168);

return statearr_25237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(14),inst_25171);
} else {
if((state_val_25227 === (22))){
var inst_25190 = figwheel.client.heads_up.clear.call(null);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(25),inst_25190);
} else {
if((state_val_25227 === (29))){
var inst_25214 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25238_25278 = state_25226__$1;
(statearr_25238_25278[(2)] = inst_25214);

(statearr_25238_25278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (6))){
var inst_25158 = figwheel.client.heads_up.clear.call(null);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(9),inst_25158);
} else {
if((state_val_25227 === (28))){
var inst_25205 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25226__$1 = state_25226;
if(inst_25205){
var statearr_25239_25279 = state_25226__$1;
(statearr_25239_25279[(1)] = (31));

} else {
var statearr_25240_25280 = state_25226__$1;
(statearr_25240_25280[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (25))){
var inst_25192 = (state_25226[(2)]);
var inst_25193 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25194 = figwheel.client.heads_up.display_warning.call(null,inst_25193);
var state_25226__$1 = (function (){var statearr_25241 = state_25226;
(statearr_25241[(8)] = inst_25192);

return statearr_25241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(26),inst_25194);
} else {
if((state_val_25227 === (34))){
var inst_25209 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25242_25281 = state_25226__$1;
(statearr_25242_25281[(2)] = inst_25209);

(statearr_25242_25281[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (17))){
var inst_25220 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25243_25282 = state_25226__$1;
(statearr_25243_25282[(2)] = inst_25220);

(statearr_25243_25282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (3))){
var inst_25164 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25226__$1 = state_25226;
if(inst_25164){
var statearr_25244_25283 = state_25226__$1;
(statearr_25244_25283[(1)] = (10));

} else {
var statearr_25245_25284 = state_25226__$1;
(statearr_25245_25284[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (12))){
var inst_25222 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25246_25285 = state_25226__$1;
(statearr_25246_25285[(2)] = inst_25222);

(statearr_25246_25285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (2))){
var inst_25152 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25226__$1 = state_25226;
if(cljs.core.truth_(inst_25152)){
var statearr_25247_25286 = state_25226__$1;
(statearr_25247_25286[(1)] = (5));

} else {
var statearr_25248_25287 = state_25226__$1;
(statearr_25248_25287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (23))){
var inst_25198 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25226__$1 = state_25226;
if(inst_25198){
var statearr_25249_25288 = state_25226__$1;
(statearr_25249_25288[(1)] = (27));

} else {
var statearr_25250_25289 = state_25226__$1;
(statearr_25250_25289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (19))){
var inst_25185 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25186 = figwheel.client.heads_up.append_message.call(null,inst_25185);
var state_25226__$1 = state_25226;
var statearr_25251_25290 = state_25226__$1;
(statearr_25251_25290[(2)] = inst_25186);

(statearr_25251_25290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (11))){
var inst_25175 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25226__$1 = state_25226;
if(inst_25175){
var statearr_25252_25291 = state_25226__$1;
(statearr_25252_25291[(1)] = (15));

} else {
var statearr_25253_25292 = state_25226__$1;
(statearr_25253_25292[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (9))){
var inst_25160 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25254_25293 = state_25226__$1;
(statearr_25254_25293[(2)] = inst_25160);

(statearr_25254_25293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (5))){
var inst_25154 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(8),inst_25154);
} else {
if((state_val_25227 === (14))){
var inst_25173 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25255_25294 = state_25226__$1;
(statearr_25255_25294[(2)] = inst_25173);

(statearr_25255_25294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (26))){
var inst_25196 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25256_25295 = state_25226__$1;
(statearr_25256_25295[(2)] = inst_25196);

(statearr_25256_25295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (16))){
var inst_25183 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25226__$1 = state_25226;
if(inst_25183){
var statearr_25257_25296 = state_25226__$1;
(statearr_25257_25296[(1)] = (19));

} else {
var statearr_25258_25297 = state_25226__$1;
(statearr_25258_25297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (30))){
var inst_25203 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25259_25298 = state_25226__$1;
(statearr_25259_25298[(2)] = inst_25203);

(statearr_25259_25298[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (10))){
var inst_25166 = figwheel.client.heads_up.clear.call(null);
var state_25226__$1 = state_25226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,(13),inst_25166);
} else {
if((state_val_25227 === (18))){
var inst_25181 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25260_25299 = state_25226__$1;
(statearr_25260_25299[(2)] = inst_25181);

(statearr_25260_25299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25227 === (8))){
var inst_25156 = (state_25226[(2)]);
var state_25226__$1 = state_25226;
var statearr_25261_25300 = state_25226__$1;
(statearr_25261_25300[(2)] = inst_25156);

(statearr_25261_25300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18145__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18130__auto__,c__18145__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_25265 = [null,null,null,null,null,null,null,null,null];
(statearr_25265[(0)] = state_machine__18131__auto__);

(statearr_25265[(1)] = (1));

return statearr_25265;
});
var state_machine__18131__auto____1 = (function (state_25226){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_25226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e25266){if((e25266 instanceof Object)){
var ex__18134__auto__ = e25266;
var statearr_25267_25301 = state_25226;
(statearr_25267_25301[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25302 = state_25226;
state_25226 = G__25302;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_25226){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_25226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto__,msg_hist,msg_names,msg))
})();
var state__18147__auto__ = (function (){var statearr_25268 = f__18146__auto__.call(null);
(statearr_25268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto__);

return statearr_25268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto__,msg_hist,msg_names,msg))
);

return c__18145__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18145__auto___25365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___25365,ch){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___25365,ch){
return (function (state_25348){
var state_val_25349 = (state_25348[(1)]);
if((state_val_25349 === (8))){
var inst_25340 = (state_25348[(2)]);
var state_25348__$1 = (function (){var statearr_25350 = state_25348;
(statearr_25350[(7)] = inst_25340);

return statearr_25350;
})();
var statearr_25351_25366 = state_25348__$1;
(statearr_25351_25366[(2)] = null);

(statearr_25351_25366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (7))){
var inst_25344 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
var statearr_25352_25367 = state_25348__$1;
(statearr_25352_25367[(2)] = inst_25344);

(statearr_25352_25367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (6))){
var state_25348__$1 = state_25348;
var statearr_25353_25368 = state_25348__$1;
(statearr_25353_25368[(2)] = null);

(statearr_25353_25368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (5))){
var inst_25336 = (state_25348[(8)]);
var inst_25338 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25336);
var state_25348__$1 = state_25348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25348__$1,(8),inst_25338);
} else {
if((state_val_25349 === (4))){
var inst_25336 = (state_25348[(8)]);
var inst_25336__$1 = (state_25348[(2)]);
var state_25348__$1 = (function (){var statearr_25354 = state_25348;
(statearr_25354[(8)] = inst_25336__$1);

return statearr_25354;
})();
if(cljs.core.truth_(inst_25336__$1)){
var statearr_25355_25369 = state_25348__$1;
(statearr_25355_25369[(1)] = (5));

} else {
var statearr_25356_25370 = state_25348__$1;
(statearr_25356_25370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (3))){
var inst_25346 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25348__$1,inst_25346);
} else {
if((state_val_25349 === (2))){
var state_25348__$1 = state_25348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25348__$1,(4),ch);
} else {
if((state_val_25349 === (1))){
var state_25348__$1 = state_25348;
var statearr_25357_25371 = state_25348__$1;
(statearr_25357_25371[(2)] = null);

(statearr_25357_25371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18145__auto___25365,ch))
;
return ((function (switch__18130__auto__,c__18145__auto___25365,ch){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_25361 = [null,null,null,null,null,null,null,null,null];
(statearr_25361[(0)] = state_machine__18131__auto__);

(statearr_25361[(1)] = (1));

return statearr_25361;
});
var state_machine__18131__auto____1 = (function (state_25348){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_25348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e25362){if((e25362 instanceof Object)){
var ex__18134__auto__ = e25362;
var statearr_25363_25372 = state_25348;
(statearr_25363_25372[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25373 = state_25348;
state_25348 = G__25373;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_25348){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_25348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___25365,ch))
})();
var state__18147__auto__ = (function (){var statearr_25364 = f__18146__auto__.call(null);
(statearr_25364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___25365);

return statearr_25364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___25365,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto__){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto__){
return (function (state_25394){
var state_val_25395 = (state_25394[(1)]);
if((state_val_25395 === (2))){
var inst_25391 = (state_25394[(2)]);
var inst_25392 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25394__$1 = (function (){var statearr_25396 = state_25394;
(statearr_25396[(7)] = inst_25391);

return statearr_25396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25394__$1,inst_25392);
} else {
if((state_val_25395 === (1))){
var inst_25389 = cljs.core.async.timeout.call(null,(3000));
var state_25394__$1 = state_25394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25394__$1,(2),inst_25389);
} else {
return null;
}
}
});})(c__18145__auto__))
;
return ((function (switch__18130__auto__,c__18145__auto__){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_25400 = [null,null,null,null,null,null,null,null];
(statearr_25400[(0)] = state_machine__18131__auto__);

(statearr_25400[(1)] = (1));

return statearr_25400;
});
var state_machine__18131__auto____1 = (function (state_25394){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_25394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e25401){if((e25401 instanceof Object)){
var ex__18134__auto__ = e25401;
var statearr_25402_25404 = state_25394;
(statearr_25402_25404[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25405 = state_25394;
state_25394 = G__25405;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_25394){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_25394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto__))
})();
var state__18147__auto__ = (function (){var statearr_25403 = f__18146__auto__.call(null);
(statearr_25403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto__);

return statearr_25403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto__))
);

return c__18145__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__16133__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16133__auto__)){
return ("CustomEvent" in window);
} else {
return and__16133__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25409 = {"detail":url};
return obj25409;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25410){
var map__25416 = p__25410;
var map__25416__$1 = ((cljs.core.seq_QMARK_.call(null,map__25416))?cljs.core.apply.call(null,cljs.core.hash_map,map__25416):map__25416);
var ed = map__25416__$1;
var exception_data = cljs.core.get.call(null,map__25416__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__25416__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25417_25421 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25418_25422 = null;
var count__25419_25423 = (0);
var i__25420_25424 = (0);
while(true){
if((i__25420_25424 < count__25419_25423)){
var msg_25425 = cljs.core._nth.call(null,chunk__25418_25422,i__25420_25424);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25425);

var G__25426 = seq__25417_25421;
var G__25427 = chunk__25418_25422;
var G__25428 = count__25419_25423;
var G__25429 = (i__25420_25424 + (1));
seq__25417_25421 = G__25426;
chunk__25418_25422 = G__25427;
count__25419_25423 = G__25428;
i__25420_25424 = G__25429;
continue;
} else {
var temp__4126__auto___25430 = cljs.core.seq.call(null,seq__25417_25421);
if(temp__4126__auto___25430){
var seq__25417_25431__$1 = temp__4126__auto___25430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25417_25431__$1)){
var c__16932__auto___25432 = cljs.core.chunk_first.call(null,seq__25417_25431__$1);
var G__25433 = cljs.core.chunk_rest.call(null,seq__25417_25431__$1);
var G__25434 = c__16932__auto___25432;
var G__25435 = cljs.core.count.call(null,c__16932__auto___25432);
var G__25436 = (0);
seq__25417_25421 = G__25433;
chunk__25418_25422 = G__25434;
count__25419_25423 = G__25435;
i__25420_25424 = G__25436;
continue;
} else {
var msg_25437 = cljs.core.first.call(null,seq__25417_25431__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25437);

var G__25438 = cljs.core.next.call(null,seq__25417_25431__$1);
var G__25439 = null;
var G__25440 = (0);
var G__25441 = (0);
seq__25417_25421 = G__25438;
chunk__25418_25422 = G__25439;
count__25419_25423 = G__25440;
i__25420_25424 = G__25441;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__25442){
var map__25444 = p__25442;
var map__25444__$1 = ((cljs.core.seq_QMARK_.call(null,map__25444))?cljs.core.apply.call(null,cljs.core.hash_map,map__25444):map__25444);
var w = map__25444__$1;
var message = cljs.core.get.call(null,map__25444__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16133__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16133__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16133__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__25451 = cljs.core.seq.call(null,plugins);
var chunk__25452 = null;
var count__25453 = (0);
var i__25454 = (0);
while(true){
if((i__25454 < count__25453)){
var vec__25455 = cljs.core._nth.call(null,chunk__25452,i__25454);
var k = cljs.core.nth.call(null,vec__25455,(0),null);
var plugin = cljs.core.nth.call(null,vec__25455,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25457 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25451,chunk__25452,count__25453,i__25454,pl_25457,vec__25455,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25457.call(null,msg_hist);
});})(seq__25451,chunk__25452,count__25453,i__25454,pl_25457,vec__25455,k,plugin))
);
} else {
}

var G__25458 = seq__25451;
var G__25459 = chunk__25452;
var G__25460 = count__25453;
var G__25461 = (i__25454 + (1));
seq__25451 = G__25458;
chunk__25452 = G__25459;
count__25453 = G__25460;
i__25454 = G__25461;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25451);
if(temp__4126__auto__){
var seq__25451__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25451__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__25451__$1);
var G__25462 = cljs.core.chunk_rest.call(null,seq__25451__$1);
var G__25463 = c__16932__auto__;
var G__25464 = cljs.core.count.call(null,c__16932__auto__);
var G__25465 = (0);
seq__25451 = G__25462;
chunk__25452 = G__25463;
count__25453 = G__25464;
i__25454 = G__25465;
continue;
} else {
var vec__25456 = cljs.core.first.call(null,seq__25451__$1);
var k = cljs.core.nth.call(null,vec__25456,(0),null);
var plugin = cljs.core.nth.call(null,vec__25456,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25466 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25451,chunk__25452,count__25453,i__25454,pl_25466,vec__25456,k,plugin,seq__25451__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25466.call(null,msg_hist);
});})(seq__25451,chunk__25452,count__25453,i__25454,pl_25466,vec__25456,k,plugin,seq__25451__$1,temp__4126__auto__))
);
} else {
}

var G__25467 = cljs.core.next.call(null,seq__25451__$1);
var G__25468 = null;
var G__25469 = (0);
var G__25470 = (0);
seq__25451 = G__25467;
chunk__25452 = G__25468;
count__25453 = G__25469;
i__25454 = G__25470;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__25471){
var map__25473 = p__25471;
var map__25473__$1 = ((cljs.core.seq_QMARK_.call(null,map__25473))?cljs.core.apply.call(null,cljs.core.hash_map,map__25473):map__25473);
var opts = map__25473__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__25471 = null;
if (arguments.length > 0) {
var G__25474__i = 0, G__25474__a = new Array(arguments.length -  0);
while (G__25474__i < G__25474__a.length) {G__25474__a[G__25474__i] = arguments[G__25474__i + 0]; ++G__25474__i;}
  p__25471 = new cljs.core.IndexedSeq(G__25474__a,0);
} 
return watch_and_reload__delegate.call(this,p__25471);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__25475){
var p__25471 = cljs.core.seq(arglist__25475);
return watch_and_reload__delegate(p__25471);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1427899295160