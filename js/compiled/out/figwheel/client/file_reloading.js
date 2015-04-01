// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__25883_SHARP_,p2__25884_SHARP_){
var and__16133__auto__ = p1__25883_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__25884_SHARP_;
} else {
return and__16133__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__16145__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16145__auto__){
return or__16145__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__25886_SHARP_,p2__25885_SHARP_){
return [cljs.core.str(p2__25885_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16145__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16145__auto__){
return or__16145__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16145__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25887){
var map__25888 = p__25887;
var map__25888__$1 = ((cljs.core.seq_QMARK_.call(null,map__25888))?cljs.core.apply.call(null,cljs.core.hash_map,map__25888):map__25888);
var file = cljs.core.get.call(null,map__25888__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__25889){
var map__25890 = p__25889;
var map__25890__$1 = ((cljs.core.seq_QMARK_.call(null,map__25890))?cljs.core.apply.call(null,cljs.core.hash_map,map__25890):map__25890);
var namespace = cljs.core.get.call(null,map__25890__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25891){if((e25891 instanceof Error)){
var e = e25891;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25891;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__25892,callback){
var map__25894 = p__25892;
var map__25894__$1 = ((cljs.core.seq_QMARK_.call(null,map__25894))?cljs.core.apply.call(null,cljs.core.hash_map,map__25894):map__25894);
var file_msg = map__25894__$1;
var request_url = cljs.core.get.call(null,map__25894__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25894,map__25894__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25894,map__25894__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__25895){
var map__25897 = p__25895;
var map__25897__$1 = ((cljs.core.seq_QMARK_.call(null,map__25897))?cljs.core.apply.call(null,cljs.core.hash_map,map__25897):map__25897);
var file_msg = map__25897__$1;
var meta_data = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__16145__auto__ = meta_data;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16133__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16133__auto__){
var or__16145__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16145__auto____$1)){
return or__16145__auto____$1;
} else {
var and__16133__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16133__auto____$1){
var or__16145__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16145__auto____$2){
return or__16145__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16133__auto____$1;
}
}
}
} else {
return and__16133__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__25898,callback){
var map__25900 = p__25898;
var map__25900__$1 = ((cljs.core.seq_QMARK_.call(null,map__25900))?cljs.core.apply.call(null,cljs.core.hash_map,map__25900):map__25900);
var file_msg = map__25900__$1;
var namespace = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18145__auto___25987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___25987,out){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___25987,out){
return (function (state_25969){
var state_val_25970 = (state_25969[(1)]);
if((state_val_25970 === (7))){
var inst_25953 = (state_25969[(7)]);
var inst_25959 = (state_25969[(2)]);
var inst_25960 = cljs.core.async.put_BANG_.call(null,out,inst_25959);
var inst_25949 = inst_25953;
var state_25969__$1 = (function (){var statearr_25971 = state_25969;
(statearr_25971[(8)] = inst_25960);

(statearr_25971[(9)] = inst_25949);

return statearr_25971;
})();
var statearr_25972_25988 = state_25969__$1;
(statearr_25972_25988[(2)] = null);

(statearr_25972_25988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (6))){
var inst_25965 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25973_25989 = state_25969__$1;
(statearr_25973_25989[(2)] = inst_25965);

(statearr_25973_25989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (5))){
var inst_25963 = cljs.core.async.close_BANG_.call(null,out);
var state_25969__$1 = state_25969;
var statearr_25974_25990 = state_25969__$1;
(statearr_25974_25990[(2)] = inst_25963);

(statearr_25974_25990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (4))){
var inst_25952 = (state_25969[(10)]);
var inst_25957 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25952);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(7),inst_25957);
} else {
if((state_val_25970 === (3))){
var inst_25967 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25969__$1,inst_25967);
} else {
if((state_val_25970 === (2))){
var inst_25952 = (state_25969[(10)]);
var inst_25949 = (state_25969[(9)]);
var inst_25952__$1 = cljs.core.nth.call(null,inst_25949,(0),null);
var inst_25953 = cljs.core.nthnext.call(null,inst_25949,(1));
var inst_25954 = (inst_25952__$1 == null);
var inst_25955 = cljs.core.not.call(null,inst_25954);
var state_25969__$1 = (function (){var statearr_25975 = state_25969;
(statearr_25975[(10)] = inst_25952__$1);

(statearr_25975[(7)] = inst_25953);

return statearr_25975;
})();
if(inst_25955){
var statearr_25976_25991 = state_25969__$1;
(statearr_25976_25991[(1)] = (4));

} else {
var statearr_25977_25992 = state_25969__$1;
(statearr_25977_25992[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (1))){
var inst_25947 = cljs.core.nth.call(null,files,(0),null);
var inst_25948 = cljs.core.nthnext.call(null,files,(1));
var inst_25949 = files;
var state_25969__$1 = (function (){var statearr_25978 = state_25969;
(statearr_25978[(11)] = inst_25947);

(statearr_25978[(12)] = inst_25948);

(statearr_25978[(9)] = inst_25949);

return statearr_25978;
})();
var statearr_25979_25993 = state_25969__$1;
(statearr_25979_25993[(2)] = null);

(statearr_25979_25993[(1)] = (2));


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
});})(c__18145__auto___25987,out))
;
return ((function (switch__18130__auto__,c__18145__auto___25987,out){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_25983 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25983[(0)] = state_machine__18131__auto__);

(statearr_25983[(1)] = (1));

return statearr_25983;
});
var state_machine__18131__auto____1 = (function (state_25969){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_25969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e25984){if((e25984 instanceof Object)){
var ex__18134__auto__ = e25984;
var statearr_25985_25994 = state_25969;
(statearr_25985_25994[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25995 = state_25969;
state_25969 = G__25995;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_25969){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_25969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___25987,out))
})();
var state__18147__auto__ = (function (){var statearr_25986 = f__18146__auto__.call(null);
(statearr_25986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___25987);

return statearr_25986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___25987,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__25996,p__25997){
var map__26000 = p__25996;
var map__26000__$1 = ((cljs.core.seq_QMARK_.call(null,map__26000))?cljs.core.apply.call(null,cljs.core.hash_map,map__26000):map__26000);
var opts = map__26000__$1;
var url_rewriter = cljs.core.get.call(null,map__26000__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26001 = p__25997;
var map__26001__$1 = ((cljs.core.seq_QMARK_.call(null,map__26001))?cljs.core.apply.call(null,cljs.core.hash_map,map__26001):map__26001);
var file_msg = map__26001__$1;
var file = cljs.core.get.call(null,map__26001__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__26002){
var map__26005 = p__26002;
var map__26005__$1 = ((cljs.core.seq_QMARK_.call(null,map__26005))?cljs.core.apply.call(null,cljs.core.hash_map,map__26005):map__26005);
var file = cljs.core.get.call(null,map__26005__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26005__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__16133__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16133__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16133__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e26006){var e = e26006;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__26011,p__26012){
var map__26213 = p__26011;
var map__26213__$1 = ((cljs.core.seq_QMARK_.call(null,map__26213))?cljs.core.apply.call(null,cljs.core.hash_map,map__26213):map__26213);
var opts = map__26213__$1;
var load_unchanged_files = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26214 = p__26012;
var map__26214__$1 = ((cljs.core.seq_QMARK_.call(null,map__26214))?cljs.core.apply.call(null,cljs.core.hash_map,map__26214):map__26214);
var msg = map__26214__$1;
var files = cljs.core.get.call(null,map__26214__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files){
return (function (state_26338){
var state_val_26339 = (state_26338[(1)]);
if((state_val_26339 === (7))){
var inst_26228 = (state_26338[(7)]);
var inst_26227 = (state_26338[(8)]);
var inst_26225 = (state_26338[(9)]);
var inst_26226 = (state_26338[(10)]);
var inst_26233 = cljs.core._nth.call(null,inst_26226,inst_26228);
var inst_26234 = figwheel.client.file_reloading.eval_body.call(null,inst_26233);
var inst_26235 = (inst_26228 + (1));
var tmp26340 = inst_26227;
var tmp26341 = inst_26225;
var tmp26342 = inst_26226;
var inst_26225__$1 = tmp26341;
var inst_26226__$1 = tmp26342;
var inst_26227__$1 = tmp26340;
var inst_26228__$1 = inst_26235;
var state_26338__$1 = (function (){var statearr_26343 = state_26338;
(statearr_26343[(7)] = inst_26228__$1);

(statearr_26343[(11)] = inst_26234);

(statearr_26343[(8)] = inst_26227__$1);

(statearr_26343[(9)] = inst_26225__$1);

(statearr_26343[(10)] = inst_26226__$1);

return statearr_26343;
})();
var statearr_26344_26413 = state_26338__$1;
(statearr_26344_26413[(2)] = null);

(statearr_26344_26413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (20))){
var inst_26275 = (state_26338[(12)]);
var inst_26270 = (state_26338[(13)]);
var inst_26274 = (state_26338[(14)]);
var inst_26271 = (state_26338[(15)]);
var inst_26277 = (state_26338[(16)]);
var inst_26280 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26282 = (function (){var files_not_loaded = inst_26277;
var res = inst_26275;
var res_SINGLEQUOTE_ = inst_26274;
var files_SINGLEQUOTE_ = inst_26271;
var all_files = inst_26270;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26275,inst_26270,inst_26274,inst_26271,inst_26277,inst_26280,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files){
return (function (p__26281){
var map__26345 = p__26281;
var map__26345__$1 = ((cljs.core.seq_QMARK_.call(null,map__26345))?cljs.core.apply.call(null,cljs.core.hash_map,map__26345):map__26345);
var file = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26275,inst_26270,inst_26274,inst_26271,inst_26277,inst_26280,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files))
})();
var inst_26283 = cljs.core.map.call(null,inst_26282,inst_26275);
var inst_26284 = cljs.core.pr_str.call(null,inst_26283);
var inst_26285 = figwheel.client.utils.log.call(null,inst_26284);
var inst_26286 = (function (){var files_not_loaded = inst_26277;
var res = inst_26275;
var res_SINGLEQUOTE_ = inst_26274;
var files_SINGLEQUOTE_ = inst_26271;
var all_files = inst_26270;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26275,inst_26270,inst_26274,inst_26271,inst_26277,inst_26280,inst_26282,inst_26283,inst_26284,inst_26285,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26275,inst_26270,inst_26274,inst_26271,inst_26277,inst_26280,inst_26282,inst_26283,inst_26284,inst_26285,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files))
})();
var inst_26287 = setTimeout(inst_26286,(10));
var state_26338__$1 = (function (){var statearr_26346 = state_26338;
(statearr_26346[(17)] = inst_26285);

(statearr_26346[(18)] = inst_26280);

return statearr_26346;
})();
var statearr_26347_26414 = state_26338__$1;
(statearr_26347_26414[(2)] = inst_26287);

(statearr_26347_26414[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (27))){
var inst_26297 = (state_26338[(19)]);
var state_26338__$1 = state_26338;
var statearr_26348_26415 = state_26338__$1;
(statearr_26348_26415[(2)] = inst_26297);

(statearr_26348_26415[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (1))){
var inst_26217 = (state_26338[(20)]);
var inst_26215 = before_jsload.call(null,files);
var inst_26216 = (function (){return ((function (inst_26217,inst_26215,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files){
return (function (p1__26007_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26007_SHARP_);
});
;})(inst_26217,inst_26215,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files))
})();
var inst_26217__$1 = cljs.core.filter.call(null,inst_26216,files);
var inst_26218 = cljs.core.not_empty.call(null,inst_26217__$1);
var state_26338__$1 = (function (){var statearr_26349 = state_26338;
(statearr_26349[(21)] = inst_26215);

(statearr_26349[(20)] = inst_26217__$1);

return statearr_26349;
})();
if(cljs.core.truth_(inst_26218)){
var statearr_26350_26416 = state_26338__$1;
(statearr_26350_26416[(1)] = (2));

} else {
var statearr_26351_26417 = state_26338__$1;
(statearr_26351_26417[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (24))){
var state_26338__$1 = state_26338;
var statearr_26352_26418 = state_26338__$1;
(statearr_26352_26418[(2)] = null);

(statearr_26352_26418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (4))){
var inst_26262 = (state_26338[(2)]);
var inst_26263 = (function (){return ((function (inst_26262,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files){
return (function (p1__26008_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26008_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26008_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_26262,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files))
})();
var inst_26264 = cljs.core.filter.call(null,inst_26263,files);
var state_26338__$1 = (function (){var statearr_26353 = state_26338;
(statearr_26353[(22)] = inst_26262);

(statearr_26353[(23)] = inst_26264);

return statearr_26353;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26354_26419 = state_26338__$1;
(statearr_26354_26419[(1)] = (16));

} else {
var statearr_26355_26420 = state_26338__$1;
(statearr_26355_26420[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (15))){
var inst_26252 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26356_26421 = state_26338__$1;
(statearr_26356_26421[(2)] = inst_26252);

(statearr_26356_26421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (21))){
var state_26338__$1 = state_26338;
var statearr_26357_26422 = state_26338__$1;
(statearr_26357_26422[(2)] = null);

(statearr_26357_26422[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (31))){
var inst_26305 = (state_26338[(24)]);
var inst_26315 = (state_26338[(2)]);
var inst_26316 = cljs.core.not_empty.call(null,inst_26305);
var state_26338__$1 = (function (){var statearr_26358 = state_26338;
(statearr_26358[(25)] = inst_26315);

return statearr_26358;
})();
if(cljs.core.truth_(inst_26316)){
var statearr_26359_26423 = state_26338__$1;
(statearr_26359_26423[(1)] = (32));

} else {
var statearr_26360_26424 = state_26338__$1;
(statearr_26360_26424[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (32))){
var inst_26305 = (state_26338[(24)]);
var inst_26318 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26305);
var inst_26319 = cljs.core.pr_str.call(null,inst_26318);
var inst_26320 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26319)].join('');
var inst_26321 = figwheel.client.utils.log.call(null,inst_26320);
var state_26338__$1 = state_26338;
var statearr_26361_26425 = state_26338__$1;
(statearr_26361_26425[(2)] = inst_26321);

(statearr_26361_26425[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (33))){
var state_26338__$1 = state_26338;
var statearr_26362_26426 = state_26338__$1;
(statearr_26362_26426[(2)] = null);

(statearr_26362_26426[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (13))){
var inst_26238 = (state_26338[(26)]);
var inst_26242 = cljs.core.chunk_first.call(null,inst_26238);
var inst_26243 = cljs.core.chunk_rest.call(null,inst_26238);
var inst_26244 = cljs.core.count.call(null,inst_26242);
var inst_26225 = inst_26243;
var inst_26226 = inst_26242;
var inst_26227 = inst_26244;
var inst_26228 = (0);
var state_26338__$1 = (function (){var statearr_26363 = state_26338;
(statearr_26363[(7)] = inst_26228);

(statearr_26363[(8)] = inst_26227);

(statearr_26363[(9)] = inst_26225);

(statearr_26363[(10)] = inst_26226);

return statearr_26363;
})();
var statearr_26364_26427 = state_26338__$1;
(statearr_26364_26427[(2)] = null);

(statearr_26364_26427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (22))){
var inst_26277 = (state_26338[(16)]);
var inst_26290 = (state_26338[(2)]);
var inst_26291 = cljs.core.not_empty.call(null,inst_26277);
var state_26338__$1 = (function (){var statearr_26365 = state_26338;
(statearr_26365[(27)] = inst_26290);

return statearr_26365;
})();
if(cljs.core.truth_(inst_26291)){
var statearr_26366_26428 = state_26338__$1;
(statearr_26366_26428[(1)] = (23));

} else {
var statearr_26367_26429 = state_26338__$1;
(statearr_26367_26429[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (36))){
var state_26338__$1 = state_26338;
var statearr_26368_26430 = state_26338__$1;
(statearr_26368_26430[(2)] = null);

(statearr_26368_26430[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (29))){
var inst_26306 = (state_26338[(28)]);
var inst_26309 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26306);
var inst_26310 = cljs.core.pr_str.call(null,inst_26309);
var inst_26311 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26310)].join('');
var inst_26312 = figwheel.client.utils.log.call(null,inst_26311);
var state_26338__$1 = state_26338;
var statearr_26369_26431 = state_26338__$1;
(statearr_26369_26431[(2)] = inst_26312);

(statearr_26369_26431[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (6))){
var inst_26259 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26370_26432 = state_26338__$1;
(statearr_26370_26432[(2)] = inst_26259);

(statearr_26370_26432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (28))){
var inst_26306 = (state_26338[(28)]);
var inst_26303 = (state_26338[(2)]);
var inst_26304 = cljs.core.get.call(null,inst_26303,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26305 = cljs.core.get.call(null,inst_26303,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26306__$1 = cljs.core.get.call(null,inst_26303,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26307 = cljs.core.not_empty.call(null,inst_26306__$1);
var state_26338__$1 = (function (){var statearr_26371 = state_26338;
(statearr_26371[(28)] = inst_26306__$1);

(statearr_26371[(29)] = inst_26304);

(statearr_26371[(24)] = inst_26305);

return statearr_26371;
})();
if(cljs.core.truth_(inst_26307)){
var statearr_26372_26433 = state_26338__$1;
(statearr_26372_26433[(1)] = (29));

} else {
var statearr_26373_26434 = state_26338__$1;
(statearr_26373_26434[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (25))){
var inst_26336 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26338__$1,inst_26336);
} else {
if((state_val_26339 === (34))){
var inst_26304 = (state_26338[(29)]);
var inst_26324 = (state_26338[(2)]);
var inst_26325 = cljs.core.not_empty.call(null,inst_26304);
var state_26338__$1 = (function (){var statearr_26374 = state_26338;
(statearr_26374[(30)] = inst_26324);

return statearr_26374;
})();
if(cljs.core.truth_(inst_26325)){
var statearr_26375_26435 = state_26338__$1;
(statearr_26375_26435[(1)] = (35));

} else {
var statearr_26376_26436 = state_26338__$1;
(statearr_26376_26436[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (17))){
var inst_26264 = (state_26338[(23)]);
var state_26338__$1 = state_26338;
var statearr_26377_26437 = state_26338__$1;
(statearr_26377_26437[(2)] = inst_26264);

(statearr_26377_26437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (3))){
var state_26338__$1 = state_26338;
var statearr_26378_26438 = state_26338__$1;
(statearr_26378_26438[(2)] = null);

(statearr_26378_26438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (12))){
var inst_26255 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26379_26439 = state_26338__$1;
(statearr_26379_26439[(2)] = inst_26255);

(statearr_26379_26439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (2))){
var inst_26217 = (state_26338[(20)]);
var inst_26224 = cljs.core.seq.call(null,inst_26217);
var inst_26225 = inst_26224;
var inst_26226 = null;
var inst_26227 = (0);
var inst_26228 = (0);
var state_26338__$1 = (function (){var statearr_26380 = state_26338;
(statearr_26380[(7)] = inst_26228);

(statearr_26380[(8)] = inst_26227);

(statearr_26380[(9)] = inst_26225);

(statearr_26380[(10)] = inst_26226);

return statearr_26380;
})();
var statearr_26381_26440 = state_26338__$1;
(statearr_26381_26440[(2)] = null);

(statearr_26381_26440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (23))){
var inst_26275 = (state_26338[(12)]);
var inst_26270 = (state_26338[(13)]);
var inst_26274 = (state_26338[(14)]);
var inst_26271 = (state_26338[(15)]);
var inst_26297 = (state_26338[(19)]);
var inst_26277 = (state_26338[(16)]);
var inst_26293 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26296 = (function (){var files_not_loaded = inst_26277;
var res = inst_26275;
var res_SINGLEQUOTE_ = inst_26274;
var files_SINGLEQUOTE_ = inst_26271;
var all_files = inst_26270;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26275,inst_26270,inst_26274,inst_26271,inst_26297,inst_26277,inst_26293,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files){
return (function (p__26295){
var map__26382 = p__26295;
var map__26382__$1 = ((cljs.core.seq_QMARK_.call(null,map__26382))?cljs.core.apply.call(null,cljs.core.hash_map,map__26382):map__26382);
var meta_data = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26275,inst_26270,inst_26274,inst_26271,inst_26297,inst_26277,inst_26293,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files))
})();
var inst_26297__$1 = cljs.core.group_by.call(null,inst_26296,inst_26277);
var inst_26298 = cljs.core.seq_QMARK_.call(null,inst_26297__$1);
var state_26338__$1 = (function (){var statearr_26383 = state_26338;
(statearr_26383[(31)] = inst_26293);

(statearr_26383[(19)] = inst_26297__$1);

return statearr_26383;
})();
if(inst_26298){
var statearr_26384_26441 = state_26338__$1;
(statearr_26384_26441[(1)] = (26));

} else {
var statearr_26385_26442 = state_26338__$1;
(statearr_26385_26442[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (35))){
var inst_26304 = (state_26338[(29)]);
var inst_26327 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26304);
var inst_26328 = cljs.core.pr_str.call(null,inst_26327);
var inst_26329 = [cljs.core.str("not required: "),cljs.core.str(inst_26328)].join('');
var inst_26330 = figwheel.client.utils.log.call(null,inst_26329);
var state_26338__$1 = state_26338;
var statearr_26386_26443 = state_26338__$1;
(statearr_26386_26443[(2)] = inst_26330);

(statearr_26386_26443[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (19))){
var inst_26275 = (state_26338[(12)]);
var inst_26270 = (state_26338[(13)]);
var inst_26274 = (state_26338[(14)]);
var inst_26271 = (state_26338[(15)]);
var inst_26274__$1 = (state_26338[(2)]);
var inst_26275__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26274__$1);
var inst_26276 = (function (){var res = inst_26275__$1;
var res_SINGLEQUOTE_ = inst_26274__$1;
var files_SINGLEQUOTE_ = inst_26271;
var all_files = inst_26270;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26275,inst_26270,inst_26274,inst_26271,inst_26274__$1,inst_26275__$1,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files){
return (function (p1__26010_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26010_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26275,inst_26270,inst_26274,inst_26271,inst_26274__$1,inst_26275__$1,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files))
})();
var inst_26277 = cljs.core.filter.call(null,inst_26276,inst_26274__$1);
var inst_26278 = cljs.core.not_empty.call(null,inst_26275__$1);
var state_26338__$1 = (function (){var statearr_26387 = state_26338;
(statearr_26387[(12)] = inst_26275__$1);

(statearr_26387[(14)] = inst_26274__$1);

(statearr_26387[(16)] = inst_26277);

return statearr_26387;
})();
if(cljs.core.truth_(inst_26278)){
var statearr_26388_26444 = state_26338__$1;
(statearr_26388_26444[(1)] = (20));

} else {
var statearr_26389_26445 = state_26338__$1;
(statearr_26389_26445[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (11))){
var state_26338__$1 = state_26338;
var statearr_26390_26446 = state_26338__$1;
(statearr_26390_26446[(2)] = null);

(statearr_26390_26446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (9))){
var inst_26257 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26391_26447 = state_26338__$1;
(statearr_26391_26447[(2)] = inst_26257);

(statearr_26391_26447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (5))){
var inst_26228 = (state_26338[(7)]);
var inst_26227 = (state_26338[(8)]);
var inst_26230 = (inst_26228 < inst_26227);
var inst_26231 = inst_26230;
var state_26338__$1 = state_26338;
if(cljs.core.truth_(inst_26231)){
var statearr_26392_26448 = state_26338__$1;
(statearr_26392_26448[(1)] = (7));

} else {
var statearr_26393_26449 = state_26338__$1;
(statearr_26393_26449[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (14))){
var inst_26238 = (state_26338[(26)]);
var inst_26247 = cljs.core.first.call(null,inst_26238);
var inst_26248 = figwheel.client.file_reloading.eval_body.call(null,inst_26247);
var inst_26249 = cljs.core.next.call(null,inst_26238);
var inst_26225 = inst_26249;
var inst_26226 = null;
var inst_26227 = (0);
var inst_26228 = (0);
var state_26338__$1 = (function (){var statearr_26394 = state_26338;
(statearr_26394[(32)] = inst_26248);

(statearr_26394[(7)] = inst_26228);

(statearr_26394[(8)] = inst_26227);

(statearr_26394[(9)] = inst_26225);

(statearr_26394[(10)] = inst_26226);

return statearr_26394;
})();
var statearr_26395_26450 = state_26338__$1;
(statearr_26395_26450[(2)] = null);

(statearr_26395_26450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (26))){
var inst_26297 = (state_26338[(19)]);
var inst_26300 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26297);
var state_26338__$1 = state_26338;
var statearr_26396_26451 = state_26338__$1;
(statearr_26396_26451[(2)] = inst_26300);

(statearr_26396_26451[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (16))){
var inst_26264 = (state_26338[(23)]);
var inst_26266 = (function (){var all_files = inst_26264;
return ((function (all_files,inst_26264,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files){
return (function (p1__26009_SHARP_){
return cljs.core.update_in.call(null,p1__26009_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26264,state_val_26339,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files))
})();
var inst_26267 = cljs.core.map.call(null,inst_26266,inst_26264);
var state_26338__$1 = state_26338;
var statearr_26397_26452 = state_26338__$1;
(statearr_26397_26452[(2)] = inst_26267);

(statearr_26397_26452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (30))){
var state_26338__$1 = state_26338;
var statearr_26398_26453 = state_26338__$1;
(statearr_26398_26453[(2)] = null);

(statearr_26398_26453[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (10))){
var inst_26238 = (state_26338[(26)]);
var inst_26240 = cljs.core.chunked_seq_QMARK_.call(null,inst_26238);
var state_26338__$1 = state_26338;
if(inst_26240){
var statearr_26399_26454 = state_26338__$1;
(statearr_26399_26454[(1)] = (13));

} else {
var statearr_26400_26455 = state_26338__$1;
(statearr_26400_26455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (18))){
var inst_26270 = (state_26338[(13)]);
var inst_26271 = (state_26338[(15)]);
var inst_26270__$1 = (state_26338[(2)]);
var inst_26271__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26270__$1);
var inst_26272 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26271__$1);
var state_26338__$1 = (function (){var statearr_26401 = state_26338;
(statearr_26401[(13)] = inst_26270__$1);

(statearr_26401[(15)] = inst_26271__$1);

return statearr_26401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26338__$1,(19),inst_26272);
} else {
if((state_val_26339 === (37))){
var inst_26333 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26402_26456 = state_26338__$1;
(statearr_26402_26456[(2)] = inst_26333);

(statearr_26402_26456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (8))){
var inst_26238 = (state_26338[(26)]);
var inst_26225 = (state_26338[(9)]);
var inst_26238__$1 = cljs.core.seq.call(null,inst_26225);
var state_26338__$1 = (function (){var statearr_26403 = state_26338;
(statearr_26403[(26)] = inst_26238__$1);

return statearr_26403;
})();
if(inst_26238__$1){
var statearr_26404_26457 = state_26338__$1;
(statearr_26404_26457[(1)] = (10));

} else {
var statearr_26405_26458 = state_26338__$1;
(statearr_26405_26458[(1)] = (11));

}

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
}
}
}
});})(c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files))
;
return ((function (switch__18130__auto__,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_26409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26409[(0)] = state_machine__18131__auto__);

(statearr_26409[(1)] = (1));

return statearr_26409;
});
var state_machine__18131__auto____1 = (function (state_26338){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_26338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e26410){if((e26410 instanceof Object)){
var ex__18134__auto__ = e26410;
var statearr_26411_26459 = state_26338;
(statearr_26411_26459[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26460 = state_26338;
state_26338 = G__26460;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_26338){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_26338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files))
})();
var state__18147__auto__ = (function (){var statearr_26412 = f__18146__auto__.call(null);
(statearr_26412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto__);

return statearr_26412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto__,map__26213,map__26213__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26214,map__26214__$1,msg,files))
);

return c__18145__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__26463,link){
var map__26465 = p__26463;
var map__26465__$1 = ((cljs.core.seq_QMARK_.call(null,map__26465))?cljs.core.apply.call(null,cljs.core.hash_map,map__26465):map__26465);
var file = cljs.core.get.call(null,map__26465__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__26465,map__26465__$1,file){
return (function (p1__26461_SHARP_,p2__26462_SHARP_){
if(cljs.core._EQ_.call(null,p1__26461_SHARP_,p2__26462_SHARP_)){
return p1__26461_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__26465,map__26465__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26469){
var map__26470 = p__26469;
var map__26470__$1 = ((cljs.core.seq_QMARK_.call(null,map__26470))?cljs.core.apply.call(null,cljs.core.hash_map,map__26470):map__26470);
var current_url_length = cljs.core.get.call(null,map__26470__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__26470__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26466_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26466_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__26471){
var map__26473 = p__26471;
var map__26473__$1 = ((cljs.core.seq_QMARK_.call(null,map__26473))?cljs.core.apply.call(null,cljs.core.hash_map,map__26473):map__26473);
var f_data = map__26473__$1;
var request_url = cljs.core.get.call(null,map__26473__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26473__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16145__auto__ = request_url;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__26474,files_msg){
var map__26496 = p__26474;
var map__26496__$1 = ((cljs.core.seq_QMARK_.call(null,map__26496))?cljs.core.apply.call(null,cljs.core.hash_map,map__26496):map__26496);
var opts = map__26496__$1;
var on_cssload = cljs.core.get.call(null,map__26496__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26497_26517 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26498_26518 = null;
var count__26499_26519 = (0);
var i__26500_26520 = (0);
while(true){
if((i__26500_26520 < count__26499_26519)){
var f_26521 = cljs.core._nth.call(null,chunk__26498_26518,i__26500_26520);
figwheel.client.file_reloading.reload_css_file.call(null,f_26521);

var G__26522 = seq__26497_26517;
var G__26523 = chunk__26498_26518;
var G__26524 = count__26499_26519;
var G__26525 = (i__26500_26520 + (1));
seq__26497_26517 = G__26522;
chunk__26498_26518 = G__26523;
count__26499_26519 = G__26524;
i__26500_26520 = G__26525;
continue;
} else {
var temp__4126__auto___26526 = cljs.core.seq.call(null,seq__26497_26517);
if(temp__4126__auto___26526){
var seq__26497_26527__$1 = temp__4126__auto___26526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26497_26527__$1)){
var c__16932__auto___26528 = cljs.core.chunk_first.call(null,seq__26497_26527__$1);
var G__26529 = cljs.core.chunk_rest.call(null,seq__26497_26527__$1);
var G__26530 = c__16932__auto___26528;
var G__26531 = cljs.core.count.call(null,c__16932__auto___26528);
var G__26532 = (0);
seq__26497_26517 = G__26529;
chunk__26498_26518 = G__26530;
count__26499_26519 = G__26531;
i__26500_26520 = G__26532;
continue;
} else {
var f_26533 = cljs.core.first.call(null,seq__26497_26527__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26533);

var G__26534 = cljs.core.next.call(null,seq__26497_26527__$1);
var G__26535 = null;
var G__26536 = (0);
var G__26537 = (0);
seq__26497_26517 = G__26534;
chunk__26498_26518 = G__26535;
count__26499_26519 = G__26536;
i__26500_26520 = G__26537;
continue;
}
} else {
}
}
break;
}

var c__18145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto__,map__26496,map__26496__$1,opts,on_cssload){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto__,map__26496,map__26496__$1,opts,on_cssload){
return (function (state_26507){
var state_val_26508 = (state_26507[(1)]);
if((state_val_26508 === (2))){
var inst_26503 = (state_26507[(2)]);
var inst_26504 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26505 = on_cssload.call(null,inst_26504);
var state_26507__$1 = (function (){var statearr_26509 = state_26507;
(statearr_26509[(7)] = inst_26503);

return statearr_26509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26507__$1,inst_26505);
} else {
if((state_val_26508 === (1))){
var inst_26501 = cljs.core.async.timeout.call(null,(100));
var state_26507__$1 = state_26507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26507__$1,(2),inst_26501);
} else {
return null;
}
}
});})(c__18145__auto__,map__26496,map__26496__$1,opts,on_cssload))
;
return ((function (switch__18130__auto__,c__18145__auto__,map__26496,map__26496__$1,opts,on_cssload){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_26513 = [null,null,null,null,null,null,null,null];
(statearr_26513[(0)] = state_machine__18131__auto__);

(statearr_26513[(1)] = (1));

return statearr_26513;
});
var state_machine__18131__auto____1 = (function (state_26507){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_26507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e26514){if((e26514 instanceof Object)){
var ex__18134__auto__ = e26514;
var statearr_26515_26538 = state_26507;
(statearr_26515_26538[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26539 = state_26507;
state_26507 = G__26539;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_26507){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_26507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto__,map__26496,map__26496__$1,opts,on_cssload))
})();
var state__18147__auto__ = (function (){var statearr_26516 = f__18146__auto__.call(null);
(statearr_26516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto__);

return statearr_26516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto__,map__26496,map__26496__$1,opts,on_cssload))
);

return c__18145__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1427899296345