// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t26586 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26586 = (function (f,fn_handler,meta26587){
this.f = f;
this.fn_handler = fn_handler;
this.meta26587 = meta26587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26586.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26588){
var self__ = this;
var _26588__$1 = this;
return self__.meta26587;
});

cljs.core.async.t26586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26588,meta26587__$1){
var self__ = this;
var _26588__$1 = this;
return (new cljs.core.async.t26586(self__.f,self__.fn_handler,meta26587__$1));
});

cljs.core.async.t26586.cljs$lang$type = true;

cljs.core.async.t26586.cljs$lang$ctorStr = "cljs.core.async/t26586";

cljs.core.async.t26586.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t26586");
});

cljs.core.async.__GT_t26586 = (function __GT_t26586(f__$1,fn_handler__$1,meta26587){
return (new cljs.core.async.t26586(f__$1,fn_handler__$1,meta26587));
});

}

return (new cljs.core.async.t26586(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__26590 = buff;
if(G__26590){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__26590.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26590.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26590);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26590);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26591 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26591);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26591,ret){
return (function (){
return fn1.call(null,val_26591);
});})(val_26591,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__17032__auto___26592 = n;
var x_26593 = (0);
while(true){
if((x_26593 < n__17032__auto___26592)){
(a[x_26593] = (0));

var G__26594 = (x_26593 + (1));
x_26593 = G__26594;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26595 = (i + (1));
i = G__26595;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26599 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26599 = (function (flag,alt_flag,meta26600){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26600 = meta26600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26599.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26601){
var self__ = this;
var _26601__$1 = this;
return self__.meta26600;
});})(flag))
;

cljs.core.async.t26599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26601,meta26600__$1){
var self__ = this;
var _26601__$1 = this;
return (new cljs.core.async.t26599(self__.flag,self__.alt_flag,meta26600__$1));
});})(flag))
;

cljs.core.async.t26599.cljs$lang$type = true;

cljs.core.async.t26599.cljs$lang$ctorStr = "cljs.core.async/t26599";

cljs.core.async.t26599.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t26599");
});})(flag))
;

cljs.core.async.__GT_t26599 = ((function (flag){
return (function __GT_t26599(flag__$1,alt_flag__$1,meta26600){
return (new cljs.core.async.t26599(flag__$1,alt_flag__$1,meta26600));
});})(flag))
;

}

return (new cljs.core.async.t26599(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t26605 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26605 = (function (cb,flag,alt_handler,meta26606){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26606 = meta26606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26605.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26607){
var self__ = this;
var _26607__$1 = this;
return self__.meta26606;
});

cljs.core.async.t26605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26607,meta26606__$1){
var self__ = this;
var _26607__$1 = this;
return (new cljs.core.async.t26605(self__.cb,self__.flag,self__.alt_handler,meta26606__$1));
});

cljs.core.async.t26605.cljs$lang$type = true;

cljs.core.async.t26605.cljs$lang$ctorStr = "cljs.core.async/t26605";

cljs.core.async.t26605.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t26605");
});

cljs.core.async.__GT_t26605 = (function __GT_t26605(cb__$1,flag__$1,alt_handler__$1,meta26606){
return (new cljs.core.async.t26605(cb__$1,flag__$1,alt_handler__$1,meta26606));
});

}

return (new cljs.core.async.t26605(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26608_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26608_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26609_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26609_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16145__auto__ = wport;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26610 = (i + (1));
i = G__26610;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16145__auto__ = ret;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__16133__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16133__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__26611){
var map__26613 = p__26611;
var map__26613__$1 = ((cljs.core.seq_QMARK_.call(null,map__26613))?cljs.core.apply.call(null,cljs.core.hash_map,map__26613):map__26613);
var opts = map__26613__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26611 = null;
if (arguments.length > 1) {
var G__26614__i = 0, G__26614__a = new Array(arguments.length -  1);
while (G__26614__i < G__26614__a.length) {G__26614__a[G__26614__i] = arguments[G__26614__i + 1]; ++G__26614__i;}
  p__26611 = new cljs.core.IndexedSeq(G__26614__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__26611);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26615){
var ports = cljs.core.first(arglist__26615);
var p__26611 = cljs.core.rest(arglist__26615);
return alts_BANG___delegate(ports,p__26611);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__18145__auto___26710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___26710){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___26710){
return (function (state_26686){
var state_val_26687 = (state_26686[(1)]);
if((state_val_26687 === (7))){
var inst_26682 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
var statearr_26688_26711 = state_26686__$1;
(statearr_26688_26711[(2)] = inst_26682);

(statearr_26688_26711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (1))){
var state_26686__$1 = state_26686;
var statearr_26689_26712 = state_26686__$1;
(statearr_26689_26712[(2)] = null);

(statearr_26689_26712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (4))){
var inst_26665 = (state_26686[(7)]);
var inst_26665__$1 = (state_26686[(2)]);
var inst_26666 = (inst_26665__$1 == null);
var state_26686__$1 = (function (){var statearr_26690 = state_26686;
(statearr_26690[(7)] = inst_26665__$1);

return statearr_26690;
})();
if(cljs.core.truth_(inst_26666)){
var statearr_26691_26713 = state_26686__$1;
(statearr_26691_26713[(1)] = (5));

} else {
var statearr_26692_26714 = state_26686__$1;
(statearr_26692_26714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (13))){
var state_26686__$1 = state_26686;
var statearr_26693_26715 = state_26686__$1;
(statearr_26693_26715[(2)] = null);

(statearr_26693_26715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (6))){
var inst_26665 = (state_26686[(7)]);
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26686__$1,(11),to,inst_26665);
} else {
if((state_val_26687 === (3))){
var inst_26684 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26686__$1,inst_26684);
} else {
if((state_val_26687 === (12))){
var state_26686__$1 = state_26686;
var statearr_26694_26716 = state_26686__$1;
(statearr_26694_26716[(2)] = null);

(statearr_26694_26716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (2))){
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26686__$1,(4),from);
} else {
if((state_val_26687 === (11))){
var inst_26675 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
if(cljs.core.truth_(inst_26675)){
var statearr_26695_26717 = state_26686__$1;
(statearr_26695_26717[(1)] = (12));

} else {
var statearr_26696_26718 = state_26686__$1;
(statearr_26696_26718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (9))){
var state_26686__$1 = state_26686;
var statearr_26697_26719 = state_26686__$1;
(statearr_26697_26719[(2)] = null);

(statearr_26697_26719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (5))){
var state_26686__$1 = state_26686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26698_26720 = state_26686__$1;
(statearr_26698_26720[(1)] = (8));

} else {
var statearr_26699_26721 = state_26686__$1;
(statearr_26699_26721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (14))){
var inst_26680 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
var statearr_26700_26722 = state_26686__$1;
(statearr_26700_26722[(2)] = inst_26680);

(statearr_26700_26722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (10))){
var inst_26672 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
var statearr_26701_26723 = state_26686__$1;
(statearr_26701_26723[(2)] = inst_26672);

(statearr_26701_26723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (8))){
var inst_26669 = cljs.core.async.close_BANG_.call(null,to);
var state_26686__$1 = state_26686;
var statearr_26702_26724 = state_26686__$1;
(statearr_26702_26724[(2)] = inst_26669);

(statearr_26702_26724[(1)] = (10));


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
});})(c__18145__auto___26710))
;
return ((function (switch__18130__auto__,c__18145__auto___26710){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_26706 = [null,null,null,null,null,null,null,null];
(statearr_26706[(0)] = state_machine__18131__auto__);

(statearr_26706[(1)] = (1));

return statearr_26706;
});
var state_machine__18131__auto____1 = (function (state_26686){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_26686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e26707){if((e26707 instanceof Object)){
var ex__18134__auto__ = e26707;
var statearr_26708_26725 = state_26686;
(statearr_26708_26725[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26726 = state_26686;
state_26686 = G__26726;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_26686){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_26686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___26710))
})();
var state__18147__auto__ = (function (){var statearr_26709 = f__18146__auto__.call(null);
(statearr_26709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___26710);

return statearr_26709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___26710))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26910){
var vec__26911 = p__26910;
var v = cljs.core.nth.call(null,vec__26911,(0),null);
var p = cljs.core.nth.call(null,vec__26911,(1),null);
var job = vec__26911;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18145__auto___27093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___27093,res,vec__26911,v,p,job,jobs,results){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___27093,res,vec__26911,v,p,job,jobs,results){
return (function (state_26916){
var state_val_26917 = (state_26916[(1)]);
if((state_val_26917 === (2))){
var inst_26913 = (state_26916[(2)]);
var inst_26914 = cljs.core.async.close_BANG_.call(null,res);
var state_26916__$1 = (function (){var statearr_26918 = state_26916;
(statearr_26918[(7)] = inst_26913);

return statearr_26918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26916__$1,inst_26914);
} else {
if((state_val_26917 === (1))){
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26916__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18145__auto___27093,res,vec__26911,v,p,job,jobs,results))
;
return ((function (switch__18130__auto__,c__18145__auto___27093,res,vec__26911,v,p,job,jobs,results){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_26922 = [null,null,null,null,null,null,null,null];
(statearr_26922[(0)] = state_machine__18131__auto__);

(statearr_26922[(1)] = (1));

return statearr_26922;
});
var state_machine__18131__auto____1 = (function (state_26916){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_26916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e26923){if((e26923 instanceof Object)){
var ex__18134__auto__ = e26923;
var statearr_26924_27094 = state_26916;
(statearr_26924_27094[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27095 = state_26916;
state_26916 = G__27095;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_26916){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_26916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___27093,res,vec__26911,v,p,job,jobs,results))
})();
var state__18147__auto__ = (function (){var statearr_26925 = f__18146__auto__.call(null);
(statearr_26925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___27093);

return statearr_26925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___27093,res,vec__26911,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26926){
var vec__26927 = p__26926;
var v = cljs.core.nth.call(null,vec__26927,(0),null);
var p = cljs.core.nth.call(null,vec__26927,(1),null);
var job = vec__26927;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17032__auto___27096 = n;
var __27097 = (0);
while(true){
if((__27097 < n__17032__auto___27096)){
var G__26928_27098 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26928_27098) {
case "async":
var c__18145__auto___27100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27097,c__18145__auto___27100,G__26928_27098,n__17032__auto___27096,jobs,results,process,async){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (__27097,c__18145__auto___27100,G__26928_27098,n__17032__auto___27096,jobs,results,process,async){
return (function (state_26941){
var state_val_26942 = (state_26941[(1)]);
if((state_val_26942 === (7))){
var inst_26937 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
var statearr_26943_27101 = state_26941__$1;
(statearr_26943_27101[(2)] = inst_26937);

(statearr_26943_27101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (6))){
var state_26941__$1 = state_26941;
var statearr_26944_27102 = state_26941__$1;
(statearr_26944_27102[(2)] = null);

(statearr_26944_27102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (5))){
var state_26941__$1 = state_26941;
var statearr_26945_27103 = state_26941__$1;
(statearr_26945_27103[(2)] = null);

(statearr_26945_27103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (4))){
var inst_26931 = (state_26941[(2)]);
var inst_26932 = async.call(null,inst_26931);
var state_26941__$1 = state_26941;
if(cljs.core.truth_(inst_26932)){
var statearr_26946_27104 = state_26941__$1;
(statearr_26946_27104[(1)] = (5));

} else {
var statearr_26947_27105 = state_26941__$1;
(statearr_26947_27105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26942 === (3))){
var inst_26939 = (state_26941[(2)]);
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26941__$1,inst_26939);
} else {
if((state_val_26942 === (2))){
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26941__$1,(4),jobs);
} else {
if((state_val_26942 === (1))){
var state_26941__$1 = state_26941;
var statearr_26948_27106 = state_26941__$1;
(statearr_26948_27106[(2)] = null);

(statearr_26948_27106[(1)] = (2));


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
});})(__27097,c__18145__auto___27100,G__26928_27098,n__17032__auto___27096,jobs,results,process,async))
;
return ((function (__27097,switch__18130__auto__,c__18145__auto___27100,G__26928_27098,n__17032__auto___27096,jobs,results,process,async){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_26952 = [null,null,null,null,null,null,null];
(statearr_26952[(0)] = state_machine__18131__auto__);

(statearr_26952[(1)] = (1));

return statearr_26952;
});
var state_machine__18131__auto____1 = (function (state_26941){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_26941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e26953){if((e26953 instanceof Object)){
var ex__18134__auto__ = e26953;
var statearr_26954_27107 = state_26941;
(statearr_26954_27107[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27108 = state_26941;
state_26941 = G__27108;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_26941){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_26941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(__27097,switch__18130__auto__,c__18145__auto___27100,G__26928_27098,n__17032__auto___27096,jobs,results,process,async))
})();
var state__18147__auto__ = (function (){var statearr_26955 = f__18146__auto__.call(null);
(statearr_26955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___27100);

return statearr_26955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(__27097,c__18145__auto___27100,G__26928_27098,n__17032__auto___27096,jobs,results,process,async))
);


break;
case "compute":
var c__18145__auto___27109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27097,c__18145__auto___27109,G__26928_27098,n__17032__auto___27096,jobs,results,process,async){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (__27097,c__18145__auto___27109,G__26928_27098,n__17032__auto___27096,jobs,results,process,async){
return (function (state_26968){
var state_val_26969 = (state_26968[(1)]);
if((state_val_26969 === (7))){
var inst_26964 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26970_27110 = state_26968__$1;
(statearr_26970_27110[(2)] = inst_26964);

(statearr_26970_27110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (6))){
var state_26968__$1 = state_26968;
var statearr_26971_27111 = state_26968__$1;
(statearr_26971_27111[(2)] = null);

(statearr_26971_27111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (5))){
var state_26968__$1 = state_26968;
var statearr_26972_27112 = state_26968__$1;
(statearr_26972_27112[(2)] = null);

(statearr_26972_27112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (4))){
var inst_26958 = (state_26968[(2)]);
var inst_26959 = process.call(null,inst_26958);
var state_26968__$1 = state_26968;
if(cljs.core.truth_(inst_26959)){
var statearr_26973_27113 = state_26968__$1;
(statearr_26973_27113[(1)] = (5));

} else {
var statearr_26974_27114 = state_26968__$1;
(statearr_26974_27114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (3))){
var inst_26966 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26968__$1,inst_26966);
} else {
if((state_val_26969 === (2))){
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26968__$1,(4),jobs);
} else {
if((state_val_26969 === (1))){
var state_26968__$1 = state_26968;
var statearr_26975_27115 = state_26968__$1;
(statearr_26975_27115[(2)] = null);

(statearr_26975_27115[(1)] = (2));


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
});})(__27097,c__18145__auto___27109,G__26928_27098,n__17032__auto___27096,jobs,results,process,async))
;
return ((function (__27097,switch__18130__auto__,c__18145__auto___27109,G__26928_27098,n__17032__auto___27096,jobs,results,process,async){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_26979 = [null,null,null,null,null,null,null];
(statearr_26979[(0)] = state_machine__18131__auto__);

(statearr_26979[(1)] = (1));

return statearr_26979;
});
var state_machine__18131__auto____1 = (function (state_26968){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_26968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e26980){if((e26980 instanceof Object)){
var ex__18134__auto__ = e26980;
var statearr_26981_27116 = state_26968;
(statearr_26981_27116[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27117 = state_26968;
state_26968 = G__27117;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_26968){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_26968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(__27097,switch__18130__auto__,c__18145__auto___27109,G__26928_27098,n__17032__auto___27096,jobs,results,process,async))
})();
var state__18147__auto__ = (function (){var statearr_26982 = f__18146__auto__.call(null);
(statearr_26982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___27109);

return statearr_26982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(__27097,c__18145__auto___27109,G__26928_27098,n__17032__auto___27096,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27118 = (__27097 + (1));
__27097 = G__27118;
continue;
} else {
}
break;
}

var c__18145__auto___27119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___27119,jobs,results,process,async){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___27119,jobs,results,process,async){
return (function (state_27004){
var state_val_27005 = (state_27004[(1)]);
if((state_val_27005 === (9))){
var inst_26997 = (state_27004[(2)]);
var state_27004__$1 = (function (){var statearr_27006 = state_27004;
(statearr_27006[(7)] = inst_26997);

return statearr_27006;
})();
var statearr_27007_27120 = state_27004__$1;
(statearr_27007_27120[(2)] = null);

(statearr_27007_27120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27005 === (8))){
var inst_26990 = (state_27004[(8)]);
var inst_26995 = (state_27004[(2)]);
var state_27004__$1 = (function (){var statearr_27008 = state_27004;
(statearr_27008[(9)] = inst_26995);

return statearr_27008;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27004__$1,(9),results,inst_26990);
} else {
if((state_val_27005 === (7))){
var inst_27000 = (state_27004[(2)]);
var state_27004__$1 = state_27004;
var statearr_27009_27121 = state_27004__$1;
(statearr_27009_27121[(2)] = inst_27000);

(statearr_27009_27121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27005 === (6))){
var inst_26990 = (state_27004[(8)]);
var inst_26985 = (state_27004[(10)]);
var inst_26990__$1 = cljs.core.async.chan.call(null,(1));
var inst_26991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26992 = [inst_26985,inst_26990__$1];
var inst_26993 = (new cljs.core.PersistentVector(null,2,(5),inst_26991,inst_26992,null));
var state_27004__$1 = (function (){var statearr_27010 = state_27004;
(statearr_27010[(8)] = inst_26990__$1);

return statearr_27010;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27004__$1,(8),jobs,inst_26993);
} else {
if((state_val_27005 === (5))){
var inst_26988 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27004__$1 = state_27004;
var statearr_27011_27122 = state_27004__$1;
(statearr_27011_27122[(2)] = inst_26988);

(statearr_27011_27122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27005 === (4))){
var inst_26985 = (state_27004[(10)]);
var inst_26985__$1 = (state_27004[(2)]);
var inst_26986 = (inst_26985__$1 == null);
var state_27004__$1 = (function (){var statearr_27012 = state_27004;
(statearr_27012[(10)] = inst_26985__$1);

return statearr_27012;
})();
if(cljs.core.truth_(inst_26986)){
var statearr_27013_27123 = state_27004__$1;
(statearr_27013_27123[(1)] = (5));

} else {
var statearr_27014_27124 = state_27004__$1;
(statearr_27014_27124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27005 === (3))){
var inst_27002 = (state_27004[(2)]);
var state_27004__$1 = state_27004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27004__$1,inst_27002);
} else {
if((state_val_27005 === (2))){
var state_27004__$1 = state_27004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27004__$1,(4),from);
} else {
if((state_val_27005 === (1))){
var state_27004__$1 = state_27004;
var statearr_27015_27125 = state_27004__$1;
(statearr_27015_27125[(2)] = null);

(statearr_27015_27125[(1)] = (2));


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
});})(c__18145__auto___27119,jobs,results,process,async))
;
return ((function (switch__18130__auto__,c__18145__auto___27119,jobs,results,process,async){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_27019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27019[(0)] = state_machine__18131__auto__);

(statearr_27019[(1)] = (1));

return statearr_27019;
});
var state_machine__18131__auto____1 = (function (state_27004){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_27004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e27020){if((e27020 instanceof Object)){
var ex__18134__auto__ = e27020;
var statearr_27021_27126 = state_27004;
(statearr_27021_27126[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27127 = state_27004;
state_27004 = G__27127;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_27004){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_27004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___27119,jobs,results,process,async))
})();
var state__18147__auto__ = (function (){var statearr_27022 = f__18146__auto__.call(null);
(statearr_27022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___27119);

return statearr_27022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___27119,jobs,results,process,async))
);


var c__18145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto__,jobs,results,process,async){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto__,jobs,results,process,async){
return (function (state_27060){
var state_val_27061 = (state_27060[(1)]);
if((state_val_27061 === (7))){
var inst_27056 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
var statearr_27062_27128 = state_27060__$1;
(statearr_27062_27128[(2)] = inst_27056);

(statearr_27062_27128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (20))){
var state_27060__$1 = state_27060;
var statearr_27063_27129 = state_27060__$1;
(statearr_27063_27129[(2)] = null);

(statearr_27063_27129[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (1))){
var state_27060__$1 = state_27060;
var statearr_27064_27130 = state_27060__$1;
(statearr_27064_27130[(2)] = null);

(statearr_27064_27130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (4))){
var inst_27025 = (state_27060[(7)]);
var inst_27025__$1 = (state_27060[(2)]);
var inst_27026 = (inst_27025__$1 == null);
var state_27060__$1 = (function (){var statearr_27065 = state_27060;
(statearr_27065[(7)] = inst_27025__$1);

return statearr_27065;
})();
if(cljs.core.truth_(inst_27026)){
var statearr_27066_27131 = state_27060__$1;
(statearr_27066_27131[(1)] = (5));

} else {
var statearr_27067_27132 = state_27060__$1;
(statearr_27067_27132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (15))){
var inst_27038 = (state_27060[(8)]);
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27060__$1,(18),to,inst_27038);
} else {
if((state_val_27061 === (21))){
var inst_27051 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
var statearr_27068_27133 = state_27060__$1;
(statearr_27068_27133[(2)] = inst_27051);

(statearr_27068_27133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (13))){
var inst_27053 = (state_27060[(2)]);
var state_27060__$1 = (function (){var statearr_27069 = state_27060;
(statearr_27069[(9)] = inst_27053);

return statearr_27069;
})();
var statearr_27070_27134 = state_27060__$1;
(statearr_27070_27134[(2)] = null);

(statearr_27070_27134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (6))){
var inst_27025 = (state_27060[(7)]);
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27060__$1,(11),inst_27025);
} else {
if((state_val_27061 === (17))){
var inst_27046 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
if(cljs.core.truth_(inst_27046)){
var statearr_27071_27135 = state_27060__$1;
(statearr_27071_27135[(1)] = (19));

} else {
var statearr_27072_27136 = state_27060__$1;
(statearr_27072_27136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (3))){
var inst_27058 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27060__$1,inst_27058);
} else {
if((state_val_27061 === (12))){
var inst_27035 = (state_27060[(10)]);
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27060__$1,(14),inst_27035);
} else {
if((state_val_27061 === (2))){
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27060__$1,(4),results);
} else {
if((state_val_27061 === (19))){
var state_27060__$1 = state_27060;
var statearr_27073_27137 = state_27060__$1;
(statearr_27073_27137[(2)] = null);

(statearr_27073_27137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (11))){
var inst_27035 = (state_27060[(2)]);
var state_27060__$1 = (function (){var statearr_27074 = state_27060;
(statearr_27074[(10)] = inst_27035);

return statearr_27074;
})();
var statearr_27075_27138 = state_27060__$1;
(statearr_27075_27138[(2)] = null);

(statearr_27075_27138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (9))){
var state_27060__$1 = state_27060;
var statearr_27076_27139 = state_27060__$1;
(statearr_27076_27139[(2)] = null);

(statearr_27076_27139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (5))){
var state_27060__$1 = state_27060;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27077_27140 = state_27060__$1;
(statearr_27077_27140[(1)] = (8));

} else {
var statearr_27078_27141 = state_27060__$1;
(statearr_27078_27141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (14))){
var inst_27038 = (state_27060[(8)]);
var inst_27040 = (state_27060[(11)]);
var inst_27038__$1 = (state_27060[(2)]);
var inst_27039 = (inst_27038__$1 == null);
var inst_27040__$1 = cljs.core.not.call(null,inst_27039);
var state_27060__$1 = (function (){var statearr_27079 = state_27060;
(statearr_27079[(8)] = inst_27038__$1);

(statearr_27079[(11)] = inst_27040__$1);

return statearr_27079;
})();
if(inst_27040__$1){
var statearr_27080_27142 = state_27060__$1;
(statearr_27080_27142[(1)] = (15));

} else {
var statearr_27081_27143 = state_27060__$1;
(statearr_27081_27143[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (16))){
var inst_27040 = (state_27060[(11)]);
var state_27060__$1 = state_27060;
var statearr_27082_27144 = state_27060__$1;
(statearr_27082_27144[(2)] = inst_27040);

(statearr_27082_27144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (10))){
var inst_27032 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
var statearr_27083_27145 = state_27060__$1;
(statearr_27083_27145[(2)] = inst_27032);

(statearr_27083_27145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (18))){
var inst_27043 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
var statearr_27084_27146 = state_27060__$1;
(statearr_27084_27146[(2)] = inst_27043);

(statearr_27084_27146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (8))){
var inst_27029 = cljs.core.async.close_BANG_.call(null,to);
var state_27060__$1 = state_27060;
var statearr_27085_27147 = state_27060__$1;
(statearr_27085_27147[(2)] = inst_27029);

(statearr_27085_27147[(1)] = (10));


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
});})(c__18145__auto__,jobs,results,process,async))
;
return ((function (switch__18130__auto__,c__18145__auto__,jobs,results,process,async){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_27089 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27089[(0)] = state_machine__18131__auto__);

(statearr_27089[(1)] = (1));

return statearr_27089;
});
var state_machine__18131__auto____1 = (function (state_27060){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_27060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e27090){if((e27090 instanceof Object)){
var ex__18134__auto__ = e27090;
var statearr_27091_27148 = state_27060;
(statearr_27091_27148[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27149 = state_27060;
state_27060 = G__27149;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_27060){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_27060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto__,jobs,results,process,async))
})();
var state__18147__auto__ = (function (){var statearr_27092 = f__18146__auto__.call(null);
(statearr_27092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto__);

return statearr_27092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto__,jobs,results,process,async))
);

return c__18145__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18145__auto___27250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___27250,tc,fc){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___27250,tc,fc){
return (function (state_27225){
var state_val_27226 = (state_27225[(1)]);
if((state_val_27226 === (7))){
var inst_27221 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27227_27251 = state_27225__$1;
(statearr_27227_27251[(2)] = inst_27221);

(statearr_27227_27251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (1))){
var state_27225__$1 = state_27225;
var statearr_27228_27252 = state_27225__$1;
(statearr_27228_27252[(2)] = null);

(statearr_27228_27252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (4))){
var inst_27202 = (state_27225[(7)]);
var inst_27202__$1 = (state_27225[(2)]);
var inst_27203 = (inst_27202__$1 == null);
var state_27225__$1 = (function (){var statearr_27229 = state_27225;
(statearr_27229[(7)] = inst_27202__$1);

return statearr_27229;
})();
if(cljs.core.truth_(inst_27203)){
var statearr_27230_27253 = state_27225__$1;
(statearr_27230_27253[(1)] = (5));

} else {
var statearr_27231_27254 = state_27225__$1;
(statearr_27231_27254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (13))){
var state_27225__$1 = state_27225;
var statearr_27232_27255 = state_27225__$1;
(statearr_27232_27255[(2)] = null);

(statearr_27232_27255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (6))){
var inst_27202 = (state_27225[(7)]);
var inst_27208 = p.call(null,inst_27202);
var state_27225__$1 = state_27225;
if(cljs.core.truth_(inst_27208)){
var statearr_27233_27256 = state_27225__$1;
(statearr_27233_27256[(1)] = (9));

} else {
var statearr_27234_27257 = state_27225__$1;
(statearr_27234_27257[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (3))){
var inst_27223 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27225__$1,inst_27223);
} else {
if((state_val_27226 === (12))){
var state_27225__$1 = state_27225;
var statearr_27235_27258 = state_27225__$1;
(statearr_27235_27258[(2)] = null);

(statearr_27235_27258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (2))){
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27225__$1,(4),ch);
} else {
if((state_val_27226 === (11))){
var inst_27202 = (state_27225[(7)]);
var inst_27212 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27225__$1,(8),inst_27212,inst_27202);
} else {
if((state_val_27226 === (9))){
var state_27225__$1 = state_27225;
var statearr_27236_27259 = state_27225__$1;
(statearr_27236_27259[(2)] = tc);

(statearr_27236_27259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (5))){
var inst_27205 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27206 = cljs.core.async.close_BANG_.call(null,fc);
var state_27225__$1 = (function (){var statearr_27237 = state_27225;
(statearr_27237[(8)] = inst_27205);

return statearr_27237;
})();
var statearr_27238_27260 = state_27225__$1;
(statearr_27238_27260[(2)] = inst_27206);

(statearr_27238_27260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (14))){
var inst_27219 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27239_27261 = state_27225__$1;
(statearr_27239_27261[(2)] = inst_27219);

(statearr_27239_27261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (10))){
var state_27225__$1 = state_27225;
var statearr_27240_27262 = state_27225__$1;
(statearr_27240_27262[(2)] = fc);

(statearr_27240_27262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (8))){
var inst_27214 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
if(cljs.core.truth_(inst_27214)){
var statearr_27241_27263 = state_27225__$1;
(statearr_27241_27263[(1)] = (12));

} else {
var statearr_27242_27264 = state_27225__$1;
(statearr_27242_27264[(1)] = (13));

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
});})(c__18145__auto___27250,tc,fc))
;
return ((function (switch__18130__auto__,c__18145__auto___27250,tc,fc){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_27246 = [null,null,null,null,null,null,null,null,null];
(statearr_27246[(0)] = state_machine__18131__auto__);

(statearr_27246[(1)] = (1));

return statearr_27246;
});
var state_machine__18131__auto____1 = (function (state_27225){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_27225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e27247){if((e27247 instanceof Object)){
var ex__18134__auto__ = e27247;
var statearr_27248_27265 = state_27225;
(statearr_27248_27265[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27266 = state_27225;
state_27225 = G__27266;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_27225){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_27225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___27250,tc,fc))
})();
var state__18147__auto__ = (function (){var statearr_27249 = f__18146__auto__.call(null);
(statearr_27249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___27250);

return statearr_27249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___27250,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__18145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto__){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto__){
return (function (state_27313){
var state_val_27314 = (state_27313[(1)]);
if((state_val_27314 === (7))){
var inst_27309 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
var statearr_27315_27331 = state_27313__$1;
(statearr_27315_27331[(2)] = inst_27309);

(statearr_27315_27331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (6))){
var inst_27302 = (state_27313[(7)]);
var inst_27299 = (state_27313[(8)]);
var inst_27306 = f.call(null,inst_27299,inst_27302);
var inst_27299__$1 = inst_27306;
var state_27313__$1 = (function (){var statearr_27316 = state_27313;
(statearr_27316[(8)] = inst_27299__$1);

return statearr_27316;
})();
var statearr_27317_27332 = state_27313__$1;
(statearr_27317_27332[(2)] = null);

(statearr_27317_27332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (5))){
var inst_27299 = (state_27313[(8)]);
var state_27313__$1 = state_27313;
var statearr_27318_27333 = state_27313__$1;
(statearr_27318_27333[(2)] = inst_27299);

(statearr_27318_27333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (4))){
var inst_27302 = (state_27313[(7)]);
var inst_27302__$1 = (state_27313[(2)]);
var inst_27303 = (inst_27302__$1 == null);
var state_27313__$1 = (function (){var statearr_27319 = state_27313;
(statearr_27319[(7)] = inst_27302__$1);

return statearr_27319;
})();
if(cljs.core.truth_(inst_27303)){
var statearr_27320_27334 = state_27313__$1;
(statearr_27320_27334[(1)] = (5));

} else {
var statearr_27321_27335 = state_27313__$1;
(statearr_27321_27335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (3))){
var inst_27311 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27313__$1,inst_27311);
} else {
if((state_val_27314 === (2))){
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27313__$1,(4),ch);
} else {
if((state_val_27314 === (1))){
var inst_27299 = init;
var state_27313__$1 = (function (){var statearr_27322 = state_27313;
(statearr_27322[(8)] = inst_27299);

return statearr_27322;
})();
var statearr_27323_27336 = state_27313__$1;
(statearr_27323_27336[(2)] = null);

(statearr_27323_27336[(1)] = (2));


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
});})(c__18145__auto__))
;
return ((function (switch__18130__auto__,c__18145__auto__){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_27327 = [null,null,null,null,null,null,null,null,null];
(statearr_27327[(0)] = state_machine__18131__auto__);

(statearr_27327[(1)] = (1));

return statearr_27327;
});
var state_machine__18131__auto____1 = (function (state_27313){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_27313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e27328){if((e27328 instanceof Object)){
var ex__18134__auto__ = e27328;
var statearr_27329_27337 = state_27313;
(statearr_27329_27337[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27338 = state_27313;
state_27313 = G__27338;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_27313){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_27313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto__))
})();
var state__18147__auto__ = (function (){var statearr_27330 = f__18146__auto__.call(null);
(statearr_27330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto__);

return statearr_27330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto__))
);

return c__18145__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__18145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto__){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto__){
return (function (state_27412){
var state_val_27413 = (state_27412[(1)]);
if((state_val_27413 === (7))){
var inst_27394 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27414_27437 = state_27412__$1;
(statearr_27414_27437[(2)] = inst_27394);

(statearr_27414_27437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (1))){
var inst_27388 = cljs.core.seq.call(null,coll);
var inst_27389 = inst_27388;
var state_27412__$1 = (function (){var statearr_27415 = state_27412;
(statearr_27415[(7)] = inst_27389);

return statearr_27415;
})();
var statearr_27416_27438 = state_27412__$1;
(statearr_27416_27438[(2)] = null);

(statearr_27416_27438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (4))){
var inst_27389 = (state_27412[(7)]);
var inst_27392 = cljs.core.first.call(null,inst_27389);
var state_27412__$1 = state_27412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27412__$1,(7),ch,inst_27392);
} else {
if((state_val_27413 === (13))){
var inst_27406 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27417_27439 = state_27412__$1;
(statearr_27417_27439[(2)] = inst_27406);

(statearr_27417_27439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (6))){
var inst_27397 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
if(cljs.core.truth_(inst_27397)){
var statearr_27418_27440 = state_27412__$1;
(statearr_27418_27440[(1)] = (8));

} else {
var statearr_27419_27441 = state_27412__$1;
(statearr_27419_27441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (3))){
var inst_27410 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27412__$1,inst_27410);
} else {
if((state_val_27413 === (12))){
var state_27412__$1 = state_27412;
var statearr_27420_27442 = state_27412__$1;
(statearr_27420_27442[(2)] = null);

(statearr_27420_27442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (2))){
var inst_27389 = (state_27412[(7)]);
var state_27412__$1 = state_27412;
if(cljs.core.truth_(inst_27389)){
var statearr_27421_27443 = state_27412__$1;
(statearr_27421_27443[(1)] = (4));

} else {
var statearr_27422_27444 = state_27412__$1;
(statearr_27422_27444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (11))){
var inst_27403 = cljs.core.async.close_BANG_.call(null,ch);
var state_27412__$1 = state_27412;
var statearr_27423_27445 = state_27412__$1;
(statearr_27423_27445[(2)] = inst_27403);

(statearr_27423_27445[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (9))){
var state_27412__$1 = state_27412;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27424_27446 = state_27412__$1;
(statearr_27424_27446[(1)] = (11));

} else {
var statearr_27425_27447 = state_27412__$1;
(statearr_27425_27447[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (5))){
var inst_27389 = (state_27412[(7)]);
var state_27412__$1 = state_27412;
var statearr_27426_27448 = state_27412__$1;
(statearr_27426_27448[(2)] = inst_27389);

(statearr_27426_27448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (10))){
var inst_27408 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27427_27449 = state_27412__$1;
(statearr_27427_27449[(2)] = inst_27408);

(statearr_27427_27449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (8))){
var inst_27389 = (state_27412[(7)]);
var inst_27399 = cljs.core.next.call(null,inst_27389);
var inst_27389__$1 = inst_27399;
var state_27412__$1 = (function (){var statearr_27428 = state_27412;
(statearr_27428[(7)] = inst_27389__$1);

return statearr_27428;
})();
var statearr_27429_27450 = state_27412__$1;
(statearr_27429_27450[(2)] = null);

(statearr_27429_27450[(1)] = (2));


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
});})(c__18145__auto__))
;
return ((function (switch__18130__auto__,c__18145__auto__){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_27433 = [null,null,null,null,null,null,null,null];
(statearr_27433[(0)] = state_machine__18131__auto__);

(statearr_27433[(1)] = (1));

return statearr_27433;
});
var state_machine__18131__auto____1 = (function (state_27412){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_27412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e27434){if((e27434 instanceof Object)){
var ex__18134__auto__ = e27434;
var statearr_27435_27451 = state_27412;
(statearr_27435_27451[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27452 = state_27412;
state_27412 = G__27452;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_27412){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_27412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto__))
})();
var state__18147__auto__ = (function (){var statearr_27436 = f__18146__auto__.call(null);
(statearr_27436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto__);

return statearr_27436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto__))
);

return c__18145__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27454 = {};
return obj27454;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__16133__auto__ = _;
if(and__16133__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16789__auto__ = (((_ == null))?null:_);
return (function (){var or__16145__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27456 = {};
return obj27456;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27678 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27678 = (function (cs,ch,mult,meta27679){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27679 = meta27679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27678.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27678.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27678.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27678.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27678.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27680){
var self__ = this;
var _27680__$1 = this;
return self__.meta27679;
});})(cs))
;

cljs.core.async.t27678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27680,meta27679__$1){
var self__ = this;
var _27680__$1 = this;
return (new cljs.core.async.t27678(self__.cs,self__.ch,self__.mult,meta27679__$1));
});})(cs))
;

cljs.core.async.t27678.cljs$lang$type = true;

cljs.core.async.t27678.cljs$lang$ctorStr = "cljs.core.async/t27678";

cljs.core.async.t27678.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t27678");
});})(cs))
;

cljs.core.async.__GT_t27678 = ((function (cs){
return (function __GT_t27678(cs__$1,ch__$1,mult__$1,meta27679){
return (new cljs.core.async.t27678(cs__$1,ch__$1,mult__$1,meta27679));
});})(cs))
;

}

return (new cljs.core.async.t27678(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18145__auto___27899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___27899,cs,m,dchan,dctr,done){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___27899,cs,m,dchan,dctr,done){
return (function (state_27811){
var state_val_27812 = (state_27811[(1)]);
if((state_val_27812 === (7))){
var inst_27807 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27813_27900 = state_27811__$1;
(statearr_27813_27900[(2)] = inst_27807);

(statearr_27813_27900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (20))){
var inst_27712 = (state_27811[(7)]);
var inst_27722 = cljs.core.first.call(null,inst_27712);
var inst_27723 = cljs.core.nth.call(null,inst_27722,(0),null);
var inst_27724 = cljs.core.nth.call(null,inst_27722,(1),null);
var state_27811__$1 = (function (){var statearr_27814 = state_27811;
(statearr_27814[(8)] = inst_27723);

return statearr_27814;
})();
if(cljs.core.truth_(inst_27724)){
var statearr_27815_27901 = state_27811__$1;
(statearr_27815_27901[(1)] = (22));

} else {
var statearr_27816_27902 = state_27811__$1;
(statearr_27816_27902[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (27))){
var inst_27683 = (state_27811[(9)]);
var inst_27759 = (state_27811[(10)]);
var inst_27754 = (state_27811[(11)]);
var inst_27752 = (state_27811[(12)]);
var inst_27759__$1 = cljs.core._nth.call(null,inst_27752,inst_27754);
var inst_27760 = cljs.core.async.put_BANG_.call(null,inst_27759__$1,inst_27683,done);
var state_27811__$1 = (function (){var statearr_27817 = state_27811;
(statearr_27817[(10)] = inst_27759__$1);

return statearr_27817;
})();
if(cljs.core.truth_(inst_27760)){
var statearr_27818_27903 = state_27811__$1;
(statearr_27818_27903[(1)] = (30));

} else {
var statearr_27819_27904 = state_27811__$1;
(statearr_27819_27904[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (1))){
var state_27811__$1 = state_27811;
var statearr_27820_27905 = state_27811__$1;
(statearr_27820_27905[(2)] = null);

(statearr_27820_27905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (24))){
var inst_27712 = (state_27811[(7)]);
var inst_27729 = (state_27811[(2)]);
var inst_27730 = cljs.core.next.call(null,inst_27712);
var inst_27692 = inst_27730;
var inst_27693 = null;
var inst_27694 = (0);
var inst_27695 = (0);
var state_27811__$1 = (function (){var statearr_27821 = state_27811;
(statearr_27821[(13)] = inst_27694);

(statearr_27821[(14)] = inst_27693);

(statearr_27821[(15)] = inst_27692);

(statearr_27821[(16)] = inst_27695);

(statearr_27821[(17)] = inst_27729);

return statearr_27821;
})();
var statearr_27822_27906 = state_27811__$1;
(statearr_27822_27906[(2)] = null);

(statearr_27822_27906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (39))){
var state_27811__$1 = state_27811;
var statearr_27826_27907 = state_27811__$1;
(statearr_27826_27907[(2)] = null);

(statearr_27826_27907[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (4))){
var inst_27683 = (state_27811[(9)]);
var inst_27683__$1 = (state_27811[(2)]);
var inst_27684 = (inst_27683__$1 == null);
var state_27811__$1 = (function (){var statearr_27827 = state_27811;
(statearr_27827[(9)] = inst_27683__$1);

return statearr_27827;
})();
if(cljs.core.truth_(inst_27684)){
var statearr_27828_27908 = state_27811__$1;
(statearr_27828_27908[(1)] = (5));

} else {
var statearr_27829_27909 = state_27811__$1;
(statearr_27829_27909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (15))){
var inst_27694 = (state_27811[(13)]);
var inst_27693 = (state_27811[(14)]);
var inst_27692 = (state_27811[(15)]);
var inst_27695 = (state_27811[(16)]);
var inst_27708 = (state_27811[(2)]);
var inst_27709 = (inst_27695 + (1));
var tmp27823 = inst_27694;
var tmp27824 = inst_27693;
var tmp27825 = inst_27692;
var inst_27692__$1 = tmp27825;
var inst_27693__$1 = tmp27824;
var inst_27694__$1 = tmp27823;
var inst_27695__$1 = inst_27709;
var state_27811__$1 = (function (){var statearr_27830 = state_27811;
(statearr_27830[(18)] = inst_27708);

(statearr_27830[(13)] = inst_27694__$1);

(statearr_27830[(14)] = inst_27693__$1);

(statearr_27830[(15)] = inst_27692__$1);

(statearr_27830[(16)] = inst_27695__$1);

return statearr_27830;
})();
var statearr_27831_27910 = state_27811__$1;
(statearr_27831_27910[(2)] = null);

(statearr_27831_27910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (21))){
var inst_27733 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27835_27911 = state_27811__$1;
(statearr_27835_27911[(2)] = inst_27733);

(statearr_27835_27911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (31))){
var inst_27759 = (state_27811[(10)]);
var inst_27763 = done.call(null,null);
var inst_27764 = cljs.core.async.untap_STAR_.call(null,m,inst_27759);
var state_27811__$1 = (function (){var statearr_27836 = state_27811;
(statearr_27836[(19)] = inst_27763);

return statearr_27836;
})();
var statearr_27837_27912 = state_27811__$1;
(statearr_27837_27912[(2)] = inst_27764);

(statearr_27837_27912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (32))){
var inst_27753 = (state_27811[(20)]);
var inst_27754 = (state_27811[(11)]);
var inst_27751 = (state_27811[(21)]);
var inst_27752 = (state_27811[(12)]);
var inst_27766 = (state_27811[(2)]);
var inst_27767 = (inst_27754 + (1));
var tmp27832 = inst_27753;
var tmp27833 = inst_27751;
var tmp27834 = inst_27752;
var inst_27751__$1 = tmp27833;
var inst_27752__$1 = tmp27834;
var inst_27753__$1 = tmp27832;
var inst_27754__$1 = inst_27767;
var state_27811__$1 = (function (){var statearr_27838 = state_27811;
(statearr_27838[(20)] = inst_27753__$1);

(statearr_27838[(22)] = inst_27766);

(statearr_27838[(11)] = inst_27754__$1);

(statearr_27838[(21)] = inst_27751__$1);

(statearr_27838[(12)] = inst_27752__$1);

return statearr_27838;
})();
var statearr_27839_27913 = state_27811__$1;
(statearr_27839_27913[(2)] = null);

(statearr_27839_27913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (40))){
var inst_27779 = (state_27811[(23)]);
var inst_27783 = done.call(null,null);
var inst_27784 = cljs.core.async.untap_STAR_.call(null,m,inst_27779);
var state_27811__$1 = (function (){var statearr_27840 = state_27811;
(statearr_27840[(24)] = inst_27783);

return statearr_27840;
})();
var statearr_27841_27914 = state_27811__$1;
(statearr_27841_27914[(2)] = inst_27784);

(statearr_27841_27914[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (33))){
var inst_27770 = (state_27811[(25)]);
var inst_27772 = cljs.core.chunked_seq_QMARK_.call(null,inst_27770);
var state_27811__$1 = state_27811;
if(inst_27772){
var statearr_27842_27915 = state_27811__$1;
(statearr_27842_27915[(1)] = (36));

} else {
var statearr_27843_27916 = state_27811__$1;
(statearr_27843_27916[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (13))){
var inst_27702 = (state_27811[(26)]);
var inst_27705 = cljs.core.async.close_BANG_.call(null,inst_27702);
var state_27811__$1 = state_27811;
var statearr_27844_27917 = state_27811__$1;
(statearr_27844_27917[(2)] = inst_27705);

(statearr_27844_27917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (22))){
var inst_27723 = (state_27811[(8)]);
var inst_27726 = cljs.core.async.close_BANG_.call(null,inst_27723);
var state_27811__$1 = state_27811;
var statearr_27845_27918 = state_27811__$1;
(statearr_27845_27918[(2)] = inst_27726);

(statearr_27845_27918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (36))){
var inst_27770 = (state_27811[(25)]);
var inst_27774 = cljs.core.chunk_first.call(null,inst_27770);
var inst_27775 = cljs.core.chunk_rest.call(null,inst_27770);
var inst_27776 = cljs.core.count.call(null,inst_27774);
var inst_27751 = inst_27775;
var inst_27752 = inst_27774;
var inst_27753 = inst_27776;
var inst_27754 = (0);
var state_27811__$1 = (function (){var statearr_27846 = state_27811;
(statearr_27846[(20)] = inst_27753);

(statearr_27846[(11)] = inst_27754);

(statearr_27846[(21)] = inst_27751);

(statearr_27846[(12)] = inst_27752);

return statearr_27846;
})();
var statearr_27847_27919 = state_27811__$1;
(statearr_27847_27919[(2)] = null);

(statearr_27847_27919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (41))){
var inst_27770 = (state_27811[(25)]);
var inst_27786 = (state_27811[(2)]);
var inst_27787 = cljs.core.next.call(null,inst_27770);
var inst_27751 = inst_27787;
var inst_27752 = null;
var inst_27753 = (0);
var inst_27754 = (0);
var state_27811__$1 = (function (){var statearr_27848 = state_27811;
(statearr_27848[(27)] = inst_27786);

(statearr_27848[(20)] = inst_27753);

(statearr_27848[(11)] = inst_27754);

(statearr_27848[(21)] = inst_27751);

(statearr_27848[(12)] = inst_27752);

return statearr_27848;
})();
var statearr_27849_27920 = state_27811__$1;
(statearr_27849_27920[(2)] = null);

(statearr_27849_27920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (43))){
var state_27811__$1 = state_27811;
var statearr_27850_27921 = state_27811__$1;
(statearr_27850_27921[(2)] = null);

(statearr_27850_27921[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (29))){
var inst_27795 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27851_27922 = state_27811__$1;
(statearr_27851_27922[(2)] = inst_27795);

(statearr_27851_27922[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (44))){
var inst_27804 = (state_27811[(2)]);
var state_27811__$1 = (function (){var statearr_27852 = state_27811;
(statearr_27852[(28)] = inst_27804);

return statearr_27852;
})();
var statearr_27853_27923 = state_27811__$1;
(statearr_27853_27923[(2)] = null);

(statearr_27853_27923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (6))){
var inst_27743 = (state_27811[(29)]);
var inst_27742 = cljs.core.deref.call(null,cs);
var inst_27743__$1 = cljs.core.keys.call(null,inst_27742);
var inst_27744 = cljs.core.count.call(null,inst_27743__$1);
var inst_27745 = cljs.core.reset_BANG_.call(null,dctr,inst_27744);
var inst_27750 = cljs.core.seq.call(null,inst_27743__$1);
var inst_27751 = inst_27750;
var inst_27752 = null;
var inst_27753 = (0);
var inst_27754 = (0);
var state_27811__$1 = (function (){var statearr_27854 = state_27811;
(statearr_27854[(20)] = inst_27753);

(statearr_27854[(30)] = inst_27745);

(statearr_27854[(29)] = inst_27743__$1);

(statearr_27854[(11)] = inst_27754);

(statearr_27854[(21)] = inst_27751);

(statearr_27854[(12)] = inst_27752);

return statearr_27854;
})();
var statearr_27855_27924 = state_27811__$1;
(statearr_27855_27924[(2)] = null);

(statearr_27855_27924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (28))){
var inst_27770 = (state_27811[(25)]);
var inst_27751 = (state_27811[(21)]);
var inst_27770__$1 = cljs.core.seq.call(null,inst_27751);
var state_27811__$1 = (function (){var statearr_27856 = state_27811;
(statearr_27856[(25)] = inst_27770__$1);

return statearr_27856;
})();
if(inst_27770__$1){
var statearr_27857_27925 = state_27811__$1;
(statearr_27857_27925[(1)] = (33));

} else {
var statearr_27858_27926 = state_27811__$1;
(statearr_27858_27926[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (25))){
var inst_27753 = (state_27811[(20)]);
var inst_27754 = (state_27811[(11)]);
var inst_27756 = (inst_27754 < inst_27753);
var inst_27757 = inst_27756;
var state_27811__$1 = state_27811;
if(cljs.core.truth_(inst_27757)){
var statearr_27859_27927 = state_27811__$1;
(statearr_27859_27927[(1)] = (27));

} else {
var statearr_27860_27928 = state_27811__$1;
(statearr_27860_27928[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (34))){
var state_27811__$1 = state_27811;
var statearr_27861_27929 = state_27811__$1;
(statearr_27861_27929[(2)] = null);

(statearr_27861_27929[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (17))){
var state_27811__$1 = state_27811;
var statearr_27862_27930 = state_27811__$1;
(statearr_27862_27930[(2)] = null);

(statearr_27862_27930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (3))){
var inst_27809 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27811__$1,inst_27809);
} else {
if((state_val_27812 === (12))){
var inst_27738 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27863_27931 = state_27811__$1;
(statearr_27863_27931[(2)] = inst_27738);

(statearr_27863_27931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (2))){
var state_27811__$1 = state_27811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27811__$1,(4),ch);
} else {
if((state_val_27812 === (23))){
var state_27811__$1 = state_27811;
var statearr_27864_27932 = state_27811__$1;
(statearr_27864_27932[(2)] = null);

(statearr_27864_27932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (35))){
var inst_27793 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27865_27933 = state_27811__$1;
(statearr_27865_27933[(2)] = inst_27793);

(statearr_27865_27933[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (19))){
var inst_27712 = (state_27811[(7)]);
var inst_27716 = cljs.core.chunk_first.call(null,inst_27712);
var inst_27717 = cljs.core.chunk_rest.call(null,inst_27712);
var inst_27718 = cljs.core.count.call(null,inst_27716);
var inst_27692 = inst_27717;
var inst_27693 = inst_27716;
var inst_27694 = inst_27718;
var inst_27695 = (0);
var state_27811__$1 = (function (){var statearr_27866 = state_27811;
(statearr_27866[(13)] = inst_27694);

(statearr_27866[(14)] = inst_27693);

(statearr_27866[(15)] = inst_27692);

(statearr_27866[(16)] = inst_27695);

return statearr_27866;
})();
var statearr_27867_27934 = state_27811__$1;
(statearr_27867_27934[(2)] = null);

(statearr_27867_27934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (11))){
var inst_27692 = (state_27811[(15)]);
var inst_27712 = (state_27811[(7)]);
var inst_27712__$1 = cljs.core.seq.call(null,inst_27692);
var state_27811__$1 = (function (){var statearr_27868 = state_27811;
(statearr_27868[(7)] = inst_27712__$1);

return statearr_27868;
})();
if(inst_27712__$1){
var statearr_27869_27935 = state_27811__$1;
(statearr_27869_27935[(1)] = (16));

} else {
var statearr_27870_27936 = state_27811__$1;
(statearr_27870_27936[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (9))){
var inst_27740 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27871_27937 = state_27811__$1;
(statearr_27871_27937[(2)] = inst_27740);

(statearr_27871_27937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (5))){
var inst_27690 = cljs.core.deref.call(null,cs);
var inst_27691 = cljs.core.seq.call(null,inst_27690);
var inst_27692 = inst_27691;
var inst_27693 = null;
var inst_27694 = (0);
var inst_27695 = (0);
var state_27811__$1 = (function (){var statearr_27872 = state_27811;
(statearr_27872[(13)] = inst_27694);

(statearr_27872[(14)] = inst_27693);

(statearr_27872[(15)] = inst_27692);

(statearr_27872[(16)] = inst_27695);

return statearr_27872;
})();
var statearr_27873_27938 = state_27811__$1;
(statearr_27873_27938[(2)] = null);

(statearr_27873_27938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (14))){
var state_27811__$1 = state_27811;
var statearr_27874_27939 = state_27811__$1;
(statearr_27874_27939[(2)] = null);

(statearr_27874_27939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (45))){
var inst_27801 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27875_27940 = state_27811__$1;
(statearr_27875_27940[(2)] = inst_27801);

(statearr_27875_27940[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (26))){
var inst_27743 = (state_27811[(29)]);
var inst_27797 = (state_27811[(2)]);
var inst_27798 = cljs.core.seq.call(null,inst_27743);
var state_27811__$1 = (function (){var statearr_27876 = state_27811;
(statearr_27876[(31)] = inst_27797);

return statearr_27876;
})();
if(inst_27798){
var statearr_27877_27941 = state_27811__$1;
(statearr_27877_27941[(1)] = (42));

} else {
var statearr_27878_27942 = state_27811__$1;
(statearr_27878_27942[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (16))){
var inst_27712 = (state_27811[(7)]);
var inst_27714 = cljs.core.chunked_seq_QMARK_.call(null,inst_27712);
var state_27811__$1 = state_27811;
if(inst_27714){
var statearr_27879_27943 = state_27811__$1;
(statearr_27879_27943[(1)] = (19));

} else {
var statearr_27880_27944 = state_27811__$1;
(statearr_27880_27944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (38))){
var inst_27790 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27881_27945 = state_27811__$1;
(statearr_27881_27945[(2)] = inst_27790);

(statearr_27881_27945[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (30))){
var state_27811__$1 = state_27811;
var statearr_27882_27946 = state_27811__$1;
(statearr_27882_27946[(2)] = null);

(statearr_27882_27946[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (10))){
var inst_27693 = (state_27811[(14)]);
var inst_27695 = (state_27811[(16)]);
var inst_27701 = cljs.core._nth.call(null,inst_27693,inst_27695);
var inst_27702 = cljs.core.nth.call(null,inst_27701,(0),null);
var inst_27703 = cljs.core.nth.call(null,inst_27701,(1),null);
var state_27811__$1 = (function (){var statearr_27883 = state_27811;
(statearr_27883[(26)] = inst_27702);

return statearr_27883;
})();
if(cljs.core.truth_(inst_27703)){
var statearr_27884_27947 = state_27811__$1;
(statearr_27884_27947[(1)] = (13));

} else {
var statearr_27885_27948 = state_27811__$1;
(statearr_27885_27948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (18))){
var inst_27736 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27886_27949 = state_27811__$1;
(statearr_27886_27949[(2)] = inst_27736);

(statearr_27886_27949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (42))){
var state_27811__$1 = state_27811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27811__$1,(45),dchan);
} else {
if((state_val_27812 === (37))){
var inst_27683 = (state_27811[(9)]);
var inst_27770 = (state_27811[(25)]);
var inst_27779 = (state_27811[(23)]);
var inst_27779__$1 = cljs.core.first.call(null,inst_27770);
var inst_27780 = cljs.core.async.put_BANG_.call(null,inst_27779__$1,inst_27683,done);
var state_27811__$1 = (function (){var statearr_27887 = state_27811;
(statearr_27887[(23)] = inst_27779__$1);

return statearr_27887;
})();
if(cljs.core.truth_(inst_27780)){
var statearr_27888_27950 = state_27811__$1;
(statearr_27888_27950[(1)] = (39));

} else {
var statearr_27889_27951 = state_27811__$1;
(statearr_27889_27951[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (8))){
var inst_27694 = (state_27811[(13)]);
var inst_27695 = (state_27811[(16)]);
var inst_27697 = (inst_27695 < inst_27694);
var inst_27698 = inst_27697;
var state_27811__$1 = state_27811;
if(cljs.core.truth_(inst_27698)){
var statearr_27890_27952 = state_27811__$1;
(statearr_27890_27952[(1)] = (10));

} else {
var statearr_27891_27953 = state_27811__$1;
(statearr_27891_27953[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__18145__auto___27899,cs,m,dchan,dctr,done))
;
return ((function (switch__18130__auto__,c__18145__auto___27899,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_27895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27895[(0)] = state_machine__18131__auto__);

(statearr_27895[(1)] = (1));

return statearr_27895;
});
var state_machine__18131__auto____1 = (function (state_27811){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_27811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e27896){if((e27896 instanceof Object)){
var ex__18134__auto__ = e27896;
var statearr_27897_27954 = state_27811;
(statearr_27897_27954[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27955 = state_27811;
state_27811 = G__27955;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_27811){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_27811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___27899,cs,m,dchan,dctr,done))
})();
var state__18147__auto__ = (function (){var statearr_27898 = f__18146__auto__.call(null);
(statearr_27898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___27899);

return statearr_27898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___27899,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27957 = {};
return obj27957;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27958){
var map__27963 = p__27958;
var map__27963__$1 = ((cljs.core.seq_QMARK_.call(null,map__27963))?cljs.core.apply.call(null,cljs.core.hash_map,map__27963):map__27963);
var opts = map__27963__$1;
var statearr_27964_27967 = state;
(statearr_27964_27967[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27963,map__27963__$1,opts){
return (function (val){
var statearr_27965_27968 = state;
(statearr_27965_27968[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27963,map__27963__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27966_27969 = state;
(statearr_27966_27969[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27958 = null;
if (arguments.length > 3) {
var G__27970__i = 0, G__27970__a = new Array(arguments.length -  3);
while (G__27970__i < G__27970__a.length) {G__27970__a[G__27970__i] = arguments[G__27970__i + 3]; ++G__27970__i;}
  p__27958 = new cljs.core.IndexedSeq(G__27970__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27958);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27971){
var state = cljs.core.first(arglist__27971);
arglist__27971 = cljs.core.next(arglist__27971);
var cont_block = cljs.core.first(arglist__27971);
arglist__27971 = cljs.core.next(arglist__27971);
var ports = cljs.core.first(arglist__27971);
var p__27958 = cljs.core.rest(arglist__27971);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27958);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28091 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28091 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28092){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28092 = meta28092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28091.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28091.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28091.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28091.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28091.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28091.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28091.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28093){
var self__ = this;
var _28093__$1 = this;
return self__.meta28092;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28093,meta28092__$1){
var self__ = this;
var _28093__$1 = this;
return (new cljs.core.async.t28091(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28092__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28091.cljs$lang$type = true;

cljs.core.async.t28091.cljs$lang$ctorStr = "cljs.core.async/t28091";

cljs.core.async.t28091.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t28091");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28091 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28091(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28092){
return (new cljs.core.async.t28091(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28092));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28091(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18145__auto___28210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___28210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___28210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28163){
var state_val_28164 = (state_28163[(1)]);
if((state_val_28164 === (7))){
var inst_28107 = (state_28163[(7)]);
var inst_28112 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28107);
var state_28163__$1 = state_28163;
var statearr_28165_28211 = state_28163__$1;
(statearr_28165_28211[(2)] = inst_28112);

(statearr_28165_28211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (20))){
var inst_28122 = (state_28163[(8)]);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28163__$1,(23),out,inst_28122);
} else {
if((state_val_28164 === (1))){
var inst_28097 = (state_28163[(9)]);
var inst_28097__$1 = calc_state.call(null);
var inst_28098 = cljs.core.seq_QMARK_.call(null,inst_28097__$1);
var state_28163__$1 = (function (){var statearr_28166 = state_28163;
(statearr_28166[(9)] = inst_28097__$1);

return statearr_28166;
})();
if(inst_28098){
var statearr_28167_28212 = state_28163__$1;
(statearr_28167_28212[(1)] = (2));

} else {
var statearr_28168_28213 = state_28163__$1;
(statearr_28168_28213[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (24))){
var inst_28115 = (state_28163[(10)]);
var inst_28107 = inst_28115;
var state_28163__$1 = (function (){var statearr_28169 = state_28163;
(statearr_28169[(7)] = inst_28107);

return statearr_28169;
})();
var statearr_28170_28214 = state_28163__$1;
(statearr_28170_28214[(2)] = null);

(statearr_28170_28214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (4))){
var inst_28097 = (state_28163[(9)]);
var inst_28103 = (state_28163[(2)]);
var inst_28104 = cljs.core.get.call(null,inst_28103,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28105 = cljs.core.get.call(null,inst_28103,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28106 = cljs.core.get.call(null,inst_28103,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28107 = inst_28097;
var state_28163__$1 = (function (){var statearr_28171 = state_28163;
(statearr_28171[(11)] = inst_28104);

(statearr_28171[(12)] = inst_28106);

(statearr_28171[(7)] = inst_28107);

(statearr_28171[(13)] = inst_28105);

return statearr_28171;
})();
var statearr_28172_28215 = state_28163__$1;
(statearr_28172_28215[(2)] = null);

(statearr_28172_28215[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (15))){
var state_28163__$1 = state_28163;
var statearr_28173_28216 = state_28163__$1;
(statearr_28173_28216[(2)] = null);

(statearr_28173_28216[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (21))){
var inst_28115 = (state_28163[(10)]);
var inst_28107 = inst_28115;
var state_28163__$1 = (function (){var statearr_28174 = state_28163;
(statearr_28174[(7)] = inst_28107);

return statearr_28174;
})();
var statearr_28175_28217 = state_28163__$1;
(statearr_28175_28217[(2)] = null);

(statearr_28175_28217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (13))){
var inst_28159 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28176_28218 = state_28163__$1;
(statearr_28176_28218[(2)] = inst_28159);

(statearr_28176_28218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (22))){
var inst_28157 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28177_28219 = state_28163__$1;
(statearr_28177_28219[(2)] = inst_28157);

(statearr_28177_28219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (6))){
var inst_28161 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28163__$1,inst_28161);
} else {
if((state_val_28164 === (25))){
var state_28163__$1 = state_28163;
var statearr_28178_28220 = state_28163__$1;
(statearr_28178_28220[(2)] = null);

(statearr_28178_28220[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (17))){
var inst_28137 = (state_28163[(14)]);
var state_28163__$1 = state_28163;
var statearr_28179_28221 = state_28163__$1;
(statearr_28179_28221[(2)] = inst_28137);

(statearr_28179_28221[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (3))){
var inst_28097 = (state_28163[(9)]);
var state_28163__$1 = state_28163;
var statearr_28180_28222 = state_28163__$1;
(statearr_28180_28222[(2)] = inst_28097);

(statearr_28180_28222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (12))){
var inst_28123 = (state_28163[(15)]);
var inst_28118 = (state_28163[(16)]);
var inst_28137 = (state_28163[(14)]);
var inst_28137__$1 = inst_28118.call(null,inst_28123);
var state_28163__$1 = (function (){var statearr_28181 = state_28163;
(statearr_28181[(14)] = inst_28137__$1);

return statearr_28181;
})();
if(cljs.core.truth_(inst_28137__$1)){
var statearr_28182_28223 = state_28163__$1;
(statearr_28182_28223[(1)] = (17));

} else {
var statearr_28183_28224 = state_28163__$1;
(statearr_28183_28224[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (2))){
var inst_28097 = (state_28163[(9)]);
var inst_28100 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28097);
var state_28163__$1 = state_28163;
var statearr_28184_28225 = state_28163__$1;
(statearr_28184_28225[(2)] = inst_28100);

(statearr_28184_28225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (23))){
var inst_28148 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
if(cljs.core.truth_(inst_28148)){
var statearr_28185_28226 = state_28163__$1;
(statearr_28185_28226[(1)] = (24));

} else {
var statearr_28186_28227 = state_28163__$1;
(statearr_28186_28227[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (19))){
var inst_28145 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
if(cljs.core.truth_(inst_28145)){
var statearr_28187_28228 = state_28163__$1;
(statearr_28187_28228[(1)] = (20));

} else {
var statearr_28188_28229 = state_28163__$1;
(statearr_28188_28229[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (11))){
var inst_28122 = (state_28163[(8)]);
var inst_28128 = (inst_28122 == null);
var state_28163__$1 = state_28163;
if(cljs.core.truth_(inst_28128)){
var statearr_28189_28230 = state_28163__$1;
(statearr_28189_28230[(1)] = (14));

} else {
var statearr_28190_28231 = state_28163__$1;
(statearr_28190_28231[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (9))){
var inst_28115 = (state_28163[(10)]);
var inst_28115__$1 = (state_28163[(2)]);
var inst_28116 = cljs.core.get.call(null,inst_28115__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28117 = cljs.core.get.call(null,inst_28115__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28118 = cljs.core.get.call(null,inst_28115__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28163__$1 = (function (){var statearr_28191 = state_28163;
(statearr_28191[(16)] = inst_28118);

(statearr_28191[(10)] = inst_28115__$1);

(statearr_28191[(17)] = inst_28117);

return statearr_28191;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28163__$1,(10),inst_28116);
} else {
if((state_val_28164 === (5))){
var inst_28107 = (state_28163[(7)]);
var inst_28110 = cljs.core.seq_QMARK_.call(null,inst_28107);
var state_28163__$1 = state_28163;
if(inst_28110){
var statearr_28192_28232 = state_28163__$1;
(statearr_28192_28232[(1)] = (7));

} else {
var statearr_28193_28233 = state_28163__$1;
(statearr_28193_28233[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (14))){
var inst_28123 = (state_28163[(15)]);
var inst_28130 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28123);
var state_28163__$1 = state_28163;
var statearr_28194_28234 = state_28163__$1;
(statearr_28194_28234[(2)] = inst_28130);

(statearr_28194_28234[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (26))){
var inst_28153 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28195_28235 = state_28163__$1;
(statearr_28195_28235[(2)] = inst_28153);

(statearr_28195_28235[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (16))){
var inst_28133 = (state_28163[(2)]);
var inst_28134 = calc_state.call(null);
var inst_28107 = inst_28134;
var state_28163__$1 = (function (){var statearr_28196 = state_28163;
(statearr_28196[(18)] = inst_28133);

(statearr_28196[(7)] = inst_28107);

return statearr_28196;
})();
var statearr_28197_28236 = state_28163__$1;
(statearr_28197_28236[(2)] = null);

(statearr_28197_28236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (10))){
var inst_28123 = (state_28163[(15)]);
var inst_28122 = (state_28163[(8)]);
var inst_28121 = (state_28163[(2)]);
var inst_28122__$1 = cljs.core.nth.call(null,inst_28121,(0),null);
var inst_28123__$1 = cljs.core.nth.call(null,inst_28121,(1),null);
var inst_28124 = (inst_28122__$1 == null);
var inst_28125 = cljs.core._EQ_.call(null,inst_28123__$1,change);
var inst_28126 = (inst_28124) || (inst_28125);
var state_28163__$1 = (function (){var statearr_28198 = state_28163;
(statearr_28198[(15)] = inst_28123__$1);

(statearr_28198[(8)] = inst_28122__$1);

return statearr_28198;
})();
if(cljs.core.truth_(inst_28126)){
var statearr_28199_28237 = state_28163__$1;
(statearr_28199_28237[(1)] = (11));

} else {
var statearr_28200_28238 = state_28163__$1;
(statearr_28200_28238[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (18))){
var inst_28123 = (state_28163[(15)]);
var inst_28118 = (state_28163[(16)]);
var inst_28117 = (state_28163[(17)]);
var inst_28140 = cljs.core.empty_QMARK_.call(null,inst_28118);
var inst_28141 = inst_28117.call(null,inst_28123);
var inst_28142 = cljs.core.not.call(null,inst_28141);
var inst_28143 = (inst_28140) && (inst_28142);
var state_28163__$1 = state_28163;
var statearr_28201_28239 = state_28163__$1;
(statearr_28201_28239[(2)] = inst_28143);

(statearr_28201_28239[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (8))){
var inst_28107 = (state_28163[(7)]);
var state_28163__$1 = state_28163;
var statearr_28202_28240 = state_28163__$1;
(statearr_28202_28240[(2)] = inst_28107);

(statearr_28202_28240[(1)] = (9));


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
});})(c__18145__auto___28210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18130__auto__,c__18145__auto___28210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_28206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28206[(0)] = state_machine__18131__auto__);

(statearr_28206[(1)] = (1));

return statearr_28206;
});
var state_machine__18131__auto____1 = (function (state_28163){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_28163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e28207){if((e28207 instanceof Object)){
var ex__18134__auto__ = e28207;
var statearr_28208_28241 = state_28163;
(statearr_28208_28241[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28242 = state_28163;
state_28163 = G__28242;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_28163){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_28163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___28210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18147__auto__ = (function (){var statearr_28209 = f__18146__auto__.call(null);
(statearr_28209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___28210);

return statearr_28209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___28210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28244 = {};
return obj28244;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16145__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16145__auto__,mults){
return (function (p1__28245_SHARP_){
if(cljs.core.truth_(p1__28245_SHARP_.call(null,topic))){
return p1__28245_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28245_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28368 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28368 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28369){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28369 = meta28369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28368.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28368.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28368.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28368.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28368.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28368.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28368.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28370){
var self__ = this;
var _28370__$1 = this;
return self__.meta28369;
});})(mults,ensure_mult))
;

cljs.core.async.t28368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28370,meta28369__$1){
var self__ = this;
var _28370__$1 = this;
return (new cljs.core.async.t28368(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28369__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28368.cljs$lang$type = true;

cljs.core.async.t28368.cljs$lang$ctorStr = "cljs.core.async/t28368";

cljs.core.async.t28368.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t28368");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28368 = ((function (mults,ensure_mult){
return (function __GT_t28368(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28369){
return (new cljs.core.async.t28368(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28369));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28368(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18145__auto___28490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___28490,mults,ensure_mult,p){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___28490,mults,ensure_mult,p){
return (function (state_28442){
var state_val_28443 = (state_28442[(1)]);
if((state_val_28443 === (7))){
var inst_28438 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
var statearr_28444_28491 = state_28442__$1;
(statearr_28444_28491[(2)] = inst_28438);

(statearr_28444_28491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (20))){
var state_28442__$1 = state_28442;
var statearr_28445_28492 = state_28442__$1;
(statearr_28445_28492[(2)] = null);

(statearr_28445_28492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (1))){
var state_28442__$1 = state_28442;
var statearr_28446_28493 = state_28442__$1;
(statearr_28446_28493[(2)] = null);

(statearr_28446_28493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (24))){
var inst_28421 = (state_28442[(7)]);
var inst_28430 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28421);
var state_28442__$1 = state_28442;
var statearr_28447_28494 = state_28442__$1;
(statearr_28447_28494[(2)] = inst_28430);

(statearr_28447_28494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (4))){
var inst_28373 = (state_28442[(8)]);
var inst_28373__$1 = (state_28442[(2)]);
var inst_28374 = (inst_28373__$1 == null);
var state_28442__$1 = (function (){var statearr_28448 = state_28442;
(statearr_28448[(8)] = inst_28373__$1);

return statearr_28448;
})();
if(cljs.core.truth_(inst_28374)){
var statearr_28449_28495 = state_28442__$1;
(statearr_28449_28495[(1)] = (5));

} else {
var statearr_28450_28496 = state_28442__$1;
(statearr_28450_28496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (15))){
var inst_28415 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
var statearr_28451_28497 = state_28442__$1;
(statearr_28451_28497[(2)] = inst_28415);

(statearr_28451_28497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (21))){
var inst_28435 = (state_28442[(2)]);
var state_28442__$1 = (function (){var statearr_28452 = state_28442;
(statearr_28452[(9)] = inst_28435);

return statearr_28452;
})();
var statearr_28453_28498 = state_28442__$1;
(statearr_28453_28498[(2)] = null);

(statearr_28453_28498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (13))){
var inst_28397 = (state_28442[(10)]);
var inst_28399 = cljs.core.chunked_seq_QMARK_.call(null,inst_28397);
var state_28442__$1 = state_28442;
if(inst_28399){
var statearr_28454_28499 = state_28442__$1;
(statearr_28454_28499[(1)] = (16));

} else {
var statearr_28455_28500 = state_28442__$1;
(statearr_28455_28500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (22))){
var inst_28427 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
if(cljs.core.truth_(inst_28427)){
var statearr_28456_28501 = state_28442__$1;
(statearr_28456_28501[(1)] = (23));

} else {
var statearr_28457_28502 = state_28442__$1;
(statearr_28457_28502[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (6))){
var inst_28373 = (state_28442[(8)]);
var inst_28423 = (state_28442[(11)]);
var inst_28421 = (state_28442[(7)]);
var inst_28421__$1 = topic_fn.call(null,inst_28373);
var inst_28422 = cljs.core.deref.call(null,mults);
var inst_28423__$1 = cljs.core.get.call(null,inst_28422,inst_28421__$1);
var state_28442__$1 = (function (){var statearr_28458 = state_28442;
(statearr_28458[(11)] = inst_28423__$1);

(statearr_28458[(7)] = inst_28421__$1);

return statearr_28458;
})();
if(cljs.core.truth_(inst_28423__$1)){
var statearr_28459_28503 = state_28442__$1;
(statearr_28459_28503[(1)] = (19));

} else {
var statearr_28460_28504 = state_28442__$1;
(statearr_28460_28504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (25))){
var inst_28432 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
var statearr_28461_28505 = state_28442__$1;
(statearr_28461_28505[(2)] = inst_28432);

(statearr_28461_28505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (17))){
var inst_28397 = (state_28442[(10)]);
var inst_28406 = cljs.core.first.call(null,inst_28397);
var inst_28407 = cljs.core.async.muxch_STAR_.call(null,inst_28406);
var inst_28408 = cljs.core.async.close_BANG_.call(null,inst_28407);
var inst_28409 = cljs.core.next.call(null,inst_28397);
var inst_28383 = inst_28409;
var inst_28384 = null;
var inst_28385 = (0);
var inst_28386 = (0);
var state_28442__$1 = (function (){var statearr_28462 = state_28442;
(statearr_28462[(12)] = inst_28385);

(statearr_28462[(13)] = inst_28384);

(statearr_28462[(14)] = inst_28386);

(statearr_28462[(15)] = inst_28383);

(statearr_28462[(16)] = inst_28408);

return statearr_28462;
})();
var statearr_28463_28506 = state_28442__$1;
(statearr_28463_28506[(2)] = null);

(statearr_28463_28506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (3))){
var inst_28440 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28442__$1,inst_28440);
} else {
if((state_val_28443 === (12))){
var inst_28417 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
var statearr_28464_28507 = state_28442__$1;
(statearr_28464_28507[(2)] = inst_28417);

(statearr_28464_28507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (2))){
var state_28442__$1 = state_28442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28442__$1,(4),ch);
} else {
if((state_val_28443 === (23))){
var state_28442__$1 = state_28442;
var statearr_28465_28508 = state_28442__$1;
(statearr_28465_28508[(2)] = null);

(statearr_28465_28508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (19))){
var inst_28373 = (state_28442[(8)]);
var inst_28423 = (state_28442[(11)]);
var inst_28425 = cljs.core.async.muxch_STAR_.call(null,inst_28423);
var state_28442__$1 = state_28442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28442__$1,(22),inst_28425,inst_28373);
} else {
if((state_val_28443 === (11))){
var inst_28397 = (state_28442[(10)]);
var inst_28383 = (state_28442[(15)]);
var inst_28397__$1 = cljs.core.seq.call(null,inst_28383);
var state_28442__$1 = (function (){var statearr_28466 = state_28442;
(statearr_28466[(10)] = inst_28397__$1);

return statearr_28466;
})();
if(inst_28397__$1){
var statearr_28467_28509 = state_28442__$1;
(statearr_28467_28509[(1)] = (13));

} else {
var statearr_28468_28510 = state_28442__$1;
(statearr_28468_28510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (9))){
var inst_28419 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
var statearr_28469_28511 = state_28442__$1;
(statearr_28469_28511[(2)] = inst_28419);

(statearr_28469_28511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (5))){
var inst_28380 = cljs.core.deref.call(null,mults);
var inst_28381 = cljs.core.vals.call(null,inst_28380);
var inst_28382 = cljs.core.seq.call(null,inst_28381);
var inst_28383 = inst_28382;
var inst_28384 = null;
var inst_28385 = (0);
var inst_28386 = (0);
var state_28442__$1 = (function (){var statearr_28470 = state_28442;
(statearr_28470[(12)] = inst_28385);

(statearr_28470[(13)] = inst_28384);

(statearr_28470[(14)] = inst_28386);

(statearr_28470[(15)] = inst_28383);

return statearr_28470;
})();
var statearr_28471_28512 = state_28442__$1;
(statearr_28471_28512[(2)] = null);

(statearr_28471_28512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (14))){
var state_28442__$1 = state_28442;
var statearr_28475_28513 = state_28442__$1;
(statearr_28475_28513[(2)] = null);

(statearr_28475_28513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (16))){
var inst_28397 = (state_28442[(10)]);
var inst_28401 = cljs.core.chunk_first.call(null,inst_28397);
var inst_28402 = cljs.core.chunk_rest.call(null,inst_28397);
var inst_28403 = cljs.core.count.call(null,inst_28401);
var inst_28383 = inst_28402;
var inst_28384 = inst_28401;
var inst_28385 = inst_28403;
var inst_28386 = (0);
var state_28442__$1 = (function (){var statearr_28476 = state_28442;
(statearr_28476[(12)] = inst_28385);

(statearr_28476[(13)] = inst_28384);

(statearr_28476[(14)] = inst_28386);

(statearr_28476[(15)] = inst_28383);

return statearr_28476;
})();
var statearr_28477_28514 = state_28442__$1;
(statearr_28477_28514[(2)] = null);

(statearr_28477_28514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (10))){
var inst_28385 = (state_28442[(12)]);
var inst_28384 = (state_28442[(13)]);
var inst_28386 = (state_28442[(14)]);
var inst_28383 = (state_28442[(15)]);
var inst_28391 = cljs.core._nth.call(null,inst_28384,inst_28386);
var inst_28392 = cljs.core.async.muxch_STAR_.call(null,inst_28391);
var inst_28393 = cljs.core.async.close_BANG_.call(null,inst_28392);
var inst_28394 = (inst_28386 + (1));
var tmp28472 = inst_28385;
var tmp28473 = inst_28384;
var tmp28474 = inst_28383;
var inst_28383__$1 = tmp28474;
var inst_28384__$1 = tmp28473;
var inst_28385__$1 = tmp28472;
var inst_28386__$1 = inst_28394;
var state_28442__$1 = (function (){var statearr_28478 = state_28442;
(statearr_28478[(12)] = inst_28385__$1);

(statearr_28478[(13)] = inst_28384__$1);

(statearr_28478[(14)] = inst_28386__$1);

(statearr_28478[(15)] = inst_28383__$1);

(statearr_28478[(17)] = inst_28393);

return statearr_28478;
})();
var statearr_28479_28515 = state_28442__$1;
(statearr_28479_28515[(2)] = null);

(statearr_28479_28515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (18))){
var inst_28412 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
var statearr_28480_28516 = state_28442__$1;
(statearr_28480_28516[(2)] = inst_28412);

(statearr_28480_28516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (8))){
var inst_28385 = (state_28442[(12)]);
var inst_28386 = (state_28442[(14)]);
var inst_28388 = (inst_28386 < inst_28385);
var inst_28389 = inst_28388;
var state_28442__$1 = state_28442;
if(cljs.core.truth_(inst_28389)){
var statearr_28481_28517 = state_28442__$1;
(statearr_28481_28517[(1)] = (10));

} else {
var statearr_28482_28518 = state_28442__$1;
(statearr_28482_28518[(1)] = (11));

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
});})(c__18145__auto___28490,mults,ensure_mult,p))
;
return ((function (switch__18130__auto__,c__18145__auto___28490,mults,ensure_mult,p){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_28486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28486[(0)] = state_machine__18131__auto__);

(statearr_28486[(1)] = (1));

return statearr_28486;
});
var state_machine__18131__auto____1 = (function (state_28442){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_28442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e28487){if((e28487 instanceof Object)){
var ex__18134__auto__ = e28487;
var statearr_28488_28519 = state_28442;
(statearr_28488_28519[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28520 = state_28442;
state_28442 = G__28520;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_28442){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_28442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___28490,mults,ensure_mult,p))
})();
var state__18147__auto__ = (function (){var statearr_28489 = f__18146__auto__.call(null);
(statearr_28489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___28490);

return statearr_28489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___28490,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18145__auto___28657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___28657,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___28657,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28627){
var state_val_28628 = (state_28627[(1)]);
if((state_val_28628 === (7))){
var state_28627__$1 = state_28627;
var statearr_28629_28658 = state_28627__$1;
(statearr_28629_28658[(2)] = null);

(statearr_28629_28658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (1))){
var state_28627__$1 = state_28627;
var statearr_28630_28659 = state_28627__$1;
(statearr_28630_28659[(2)] = null);

(statearr_28630_28659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (4))){
var inst_28591 = (state_28627[(7)]);
var inst_28593 = (inst_28591 < cnt);
var state_28627__$1 = state_28627;
if(cljs.core.truth_(inst_28593)){
var statearr_28631_28660 = state_28627__$1;
(statearr_28631_28660[(1)] = (6));

} else {
var statearr_28632_28661 = state_28627__$1;
(statearr_28632_28661[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (15))){
var inst_28623 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28633_28662 = state_28627__$1;
(statearr_28633_28662[(2)] = inst_28623);

(statearr_28633_28662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (13))){
var inst_28616 = cljs.core.async.close_BANG_.call(null,out);
var state_28627__$1 = state_28627;
var statearr_28634_28663 = state_28627__$1;
(statearr_28634_28663[(2)] = inst_28616);

(statearr_28634_28663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (6))){
var state_28627__$1 = state_28627;
var statearr_28635_28664 = state_28627__$1;
(statearr_28635_28664[(2)] = null);

(statearr_28635_28664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (3))){
var inst_28625 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28627__$1,inst_28625);
} else {
if((state_val_28628 === (12))){
var inst_28613 = (state_28627[(8)]);
var inst_28613__$1 = (state_28627[(2)]);
var inst_28614 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28613__$1);
var state_28627__$1 = (function (){var statearr_28636 = state_28627;
(statearr_28636[(8)] = inst_28613__$1);

return statearr_28636;
})();
if(cljs.core.truth_(inst_28614)){
var statearr_28637_28665 = state_28627__$1;
(statearr_28637_28665[(1)] = (13));

} else {
var statearr_28638_28666 = state_28627__$1;
(statearr_28638_28666[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (2))){
var inst_28590 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28591 = (0);
var state_28627__$1 = (function (){var statearr_28639 = state_28627;
(statearr_28639[(7)] = inst_28591);

(statearr_28639[(9)] = inst_28590);

return statearr_28639;
})();
var statearr_28640_28667 = state_28627__$1;
(statearr_28640_28667[(2)] = null);

(statearr_28640_28667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (11))){
var inst_28591 = (state_28627[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28627,(10),Object,null,(9));
var inst_28600 = chs__$1.call(null,inst_28591);
var inst_28601 = done.call(null,inst_28591);
var inst_28602 = cljs.core.async.take_BANG_.call(null,inst_28600,inst_28601);
var state_28627__$1 = state_28627;
var statearr_28641_28668 = state_28627__$1;
(statearr_28641_28668[(2)] = inst_28602);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28627__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (9))){
var inst_28591 = (state_28627[(7)]);
var inst_28604 = (state_28627[(2)]);
var inst_28605 = (inst_28591 + (1));
var inst_28591__$1 = inst_28605;
var state_28627__$1 = (function (){var statearr_28642 = state_28627;
(statearr_28642[(10)] = inst_28604);

(statearr_28642[(7)] = inst_28591__$1);

return statearr_28642;
})();
var statearr_28643_28669 = state_28627__$1;
(statearr_28643_28669[(2)] = null);

(statearr_28643_28669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (5))){
var inst_28611 = (state_28627[(2)]);
var state_28627__$1 = (function (){var statearr_28644 = state_28627;
(statearr_28644[(11)] = inst_28611);

return statearr_28644;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28627__$1,(12),dchan);
} else {
if((state_val_28628 === (14))){
var inst_28613 = (state_28627[(8)]);
var inst_28618 = cljs.core.apply.call(null,f,inst_28613);
var state_28627__$1 = state_28627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28627__$1,(16),out,inst_28618);
} else {
if((state_val_28628 === (16))){
var inst_28620 = (state_28627[(2)]);
var state_28627__$1 = (function (){var statearr_28645 = state_28627;
(statearr_28645[(12)] = inst_28620);

return statearr_28645;
})();
var statearr_28646_28670 = state_28627__$1;
(statearr_28646_28670[(2)] = null);

(statearr_28646_28670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (10))){
var inst_28595 = (state_28627[(2)]);
var inst_28596 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28627__$1 = (function (){var statearr_28647 = state_28627;
(statearr_28647[(13)] = inst_28595);

return statearr_28647;
})();
var statearr_28648_28671 = state_28627__$1;
(statearr_28648_28671[(2)] = inst_28596);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28627__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28628 === (8))){
var inst_28609 = (state_28627[(2)]);
var state_28627__$1 = state_28627;
var statearr_28649_28672 = state_28627__$1;
(statearr_28649_28672[(2)] = inst_28609);

(statearr_28649_28672[(1)] = (5));


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
});})(c__18145__auto___28657,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18130__auto__,c__18145__auto___28657,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_28653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28653[(0)] = state_machine__18131__auto__);

(statearr_28653[(1)] = (1));

return statearr_28653;
});
var state_machine__18131__auto____1 = (function (state_28627){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_28627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e28654){if((e28654 instanceof Object)){
var ex__18134__auto__ = e28654;
var statearr_28655_28673 = state_28627;
(statearr_28655_28673[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28674 = state_28627;
state_28627 = G__28674;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_28627){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_28627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___28657,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18147__auto__ = (function (){var statearr_28656 = f__18146__auto__.call(null);
(statearr_28656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___28657);

return statearr_28656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___28657,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18145__auto___28782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___28782,out){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___28782,out){
return (function (state_28758){
var state_val_28759 = (state_28758[(1)]);
if((state_val_28759 === (7))){
var inst_28738 = (state_28758[(7)]);
var inst_28737 = (state_28758[(8)]);
var inst_28737__$1 = (state_28758[(2)]);
var inst_28738__$1 = cljs.core.nth.call(null,inst_28737__$1,(0),null);
var inst_28739 = cljs.core.nth.call(null,inst_28737__$1,(1),null);
var inst_28740 = (inst_28738__$1 == null);
var state_28758__$1 = (function (){var statearr_28760 = state_28758;
(statearr_28760[(9)] = inst_28739);

(statearr_28760[(7)] = inst_28738__$1);

(statearr_28760[(8)] = inst_28737__$1);

return statearr_28760;
})();
if(cljs.core.truth_(inst_28740)){
var statearr_28761_28783 = state_28758__$1;
(statearr_28761_28783[(1)] = (8));

} else {
var statearr_28762_28784 = state_28758__$1;
(statearr_28762_28784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (1))){
var inst_28729 = cljs.core.vec.call(null,chs);
var inst_28730 = inst_28729;
var state_28758__$1 = (function (){var statearr_28763 = state_28758;
(statearr_28763[(10)] = inst_28730);

return statearr_28763;
})();
var statearr_28764_28785 = state_28758__$1;
(statearr_28764_28785[(2)] = null);

(statearr_28764_28785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (4))){
var inst_28730 = (state_28758[(10)]);
var state_28758__$1 = state_28758;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28758__$1,(7),inst_28730);
} else {
if((state_val_28759 === (6))){
var inst_28754 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28765_28786 = state_28758__$1;
(statearr_28765_28786[(2)] = inst_28754);

(statearr_28765_28786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (3))){
var inst_28756 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28758__$1,inst_28756);
} else {
if((state_val_28759 === (2))){
var inst_28730 = (state_28758[(10)]);
var inst_28732 = cljs.core.count.call(null,inst_28730);
var inst_28733 = (inst_28732 > (0));
var state_28758__$1 = state_28758;
if(cljs.core.truth_(inst_28733)){
var statearr_28767_28787 = state_28758__$1;
(statearr_28767_28787[(1)] = (4));

} else {
var statearr_28768_28788 = state_28758__$1;
(statearr_28768_28788[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (11))){
var inst_28730 = (state_28758[(10)]);
var inst_28747 = (state_28758[(2)]);
var tmp28766 = inst_28730;
var inst_28730__$1 = tmp28766;
var state_28758__$1 = (function (){var statearr_28769 = state_28758;
(statearr_28769[(10)] = inst_28730__$1);

(statearr_28769[(11)] = inst_28747);

return statearr_28769;
})();
var statearr_28770_28789 = state_28758__$1;
(statearr_28770_28789[(2)] = null);

(statearr_28770_28789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (9))){
var inst_28738 = (state_28758[(7)]);
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28758__$1,(11),out,inst_28738);
} else {
if((state_val_28759 === (5))){
var inst_28752 = cljs.core.async.close_BANG_.call(null,out);
var state_28758__$1 = state_28758;
var statearr_28771_28790 = state_28758__$1;
(statearr_28771_28790[(2)] = inst_28752);

(statearr_28771_28790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (10))){
var inst_28750 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28772_28791 = state_28758__$1;
(statearr_28772_28791[(2)] = inst_28750);

(statearr_28772_28791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (8))){
var inst_28739 = (state_28758[(9)]);
var inst_28738 = (state_28758[(7)]);
var inst_28737 = (state_28758[(8)]);
var inst_28730 = (state_28758[(10)]);
var inst_28742 = (function (){var c = inst_28739;
var v = inst_28738;
var vec__28735 = inst_28737;
var cs = inst_28730;
return ((function (c,v,vec__28735,cs,inst_28739,inst_28738,inst_28737,inst_28730,state_val_28759,c__18145__auto___28782,out){
return (function (p1__28675_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28675_SHARP_);
});
;})(c,v,vec__28735,cs,inst_28739,inst_28738,inst_28737,inst_28730,state_val_28759,c__18145__auto___28782,out))
})();
var inst_28743 = cljs.core.filterv.call(null,inst_28742,inst_28730);
var inst_28730__$1 = inst_28743;
var state_28758__$1 = (function (){var statearr_28773 = state_28758;
(statearr_28773[(10)] = inst_28730__$1);

return statearr_28773;
})();
var statearr_28774_28792 = state_28758__$1;
(statearr_28774_28792[(2)] = null);

(statearr_28774_28792[(1)] = (2));


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
});})(c__18145__auto___28782,out))
;
return ((function (switch__18130__auto__,c__18145__auto___28782,out){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_28778 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28778[(0)] = state_machine__18131__auto__);

(statearr_28778[(1)] = (1));

return statearr_28778;
});
var state_machine__18131__auto____1 = (function (state_28758){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_28758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e28779){if((e28779 instanceof Object)){
var ex__18134__auto__ = e28779;
var statearr_28780_28793 = state_28758;
(statearr_28780_28793[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28794 = state_28758;
state_28758 = G__28794;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_28758){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_28758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___28782,out))
})();
var state__18147__auto__ = (function (){var statearr_28781 = f__18146__auto__.call(null);
(statearr_28781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___28782);

return statearr_28781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___28782,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18145__auto___28887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___28887,out){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___28887,out){
return (function (state_28864){
var state_val_28865 = (state_28864[(1)]);
if((state_val_28865 === (7))){
var inst_28846 = (state_28864[(7)]);
var inst_28846__$1 = (state_28864[(2)]);
var inst_28847 = (inst_28846__$1 == null);
var inst_28848 = cljs.core.not.call(null,inst_28847);
var state_28864__$1 = (function (){var statearr_28866 = state_28864;
(statearr_28866[(7)] = inst_28846__$1);

return statearr_28866;
})();
if(inst_28848){
var statearr_28867_28888 = state_28864__$1;
(statearr_28867_28888[(1)] = (8));

} else {
var statearr_28868_28889 = state_28864__$1;
(statearr_28868_28889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (1))){
var inst_28841 = (0);
var state_28864__$1 = (function (){var statearr_28869 = state_28864;
(statearr_28869[(8)] = inst_28841);

return statearr_28869;
})();
var statearr_28870_28890 = state_28864__$1;
(statearr_28870_28890[(2)] = null);

(statearr_28870_28890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (4))){
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28864__$1,(7),ch);
} else {
if((state_val_28865 === (6))){
var inst_28859 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28871_28891 = state_28864__$1;
(statearr_28871_28891[(2)] = inst_28859);

(statearr_28871_28891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (3))){
var inst_28861 = (state_28864[(2)]);
var inst_28862 = cljs.core.async.close_BANG_.call(null,out);
var state_28864__$1 = (function (){var statearr_28872 = state_28864;
(statearr_28872[(9)] = inst_28861);

return statearr_28872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28864__$1,inst_28862);
} else {
if((state_val_28865 === (2))){
var inst_28841 = (state_28864[(8)]);
var inst_28843 = (inst_28841 < n);
var state_28864__$1 = state_28864;
if(cljs.core.truth_(inst_28843)){
var statearr_28873_28892 = state_28864__$1;
(statearr_28873_28892[(1)] = (4));

} else {
var statearr_28874_28893 = state_28864__$1;
(statearr_28874_28893[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (11))){
var inst_28841 = (state_28864[(8)]);
var inst_28851 = (state_28864[(2)]);
var inst_28852 = (inst_28841 + (1));
var inst_28841__$1 = inst_28852;
var state_28864__$1 = (function (){var statearr_28875 = state_28864;
(statearr_28875[(8)] = inst_28841__$1);

(statearr_28875[(10)] = inst_28851);

return statearr_28875;
})();
var statearr_28876_28894 = state_28864__$1;
(statearr_28876_28894[(2)] = null);

(statearr_28876_28894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (9))){
var state_28864__$1 = state_28864;
var statearr_28877_28895 = state_28864__$1;
(statearr_28877_28895[(2)] = null);

(statearr_28877_28895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (5))){
var state_28864__$1 = state_28864;
var statearr_28878_28896 = state_28864__$1;
(statearr_28878_28896[(2)] = null);

(statearr_28878_28896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (10))){
var inst_28856 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28879_28897 = state_28864__$1;
(statearr_28879_28897[(2)] = inst_28856);

(statearr_28879_28897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (8))){
var inst_28846 = (state_28864[(7)]);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(11),out,inst_28846);
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
});})(c__18145__auto___28887,out))
;
return ((function (switch__18130__auto__,c__18145__auto___28887,out){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_28883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28883[(0)] = state_machine__18131__auto__);

(statearr_28883[(1)] = (1));

return statearr_28883;
});
var state_machine__18131__auto____1 = (function (state_28864){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_28864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e28884){if((e28884 instanceof Object)){
var ex__18134__auto__ = e28884;
var statearr_28885_28898 = state_28864;
(statearr_28885_28898[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28899 = state_28864;
state_28864 = G__28899;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_28864){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_28864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___28887,out))
})();
var state__18147__auto__ = (function (){var statearr_28886 = f__18146__auto__.call(null);
(statearr_28886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___28887);

return statearr_28886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___28887,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t28907 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28907 = (function (ch,f,map_LT_,meta28908){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28908 = meta28908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28910 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28910 = (function (fn1,_,meta28908,map_LT_,f,ch,meta28911){
this.fn1 = fn1;
this._ = _;
this.meta28908 = meta28908;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28911 = meta28911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28910.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28900_SHARP_){
return f1.call(null,(((p1__28900_SHARP_ == null))?null:self__.f.call(null,p1__28900_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28912){
var self__ = this;
var _28912__$1 = this;
return self__.meta28911;
});})(___$1))
;

cljs.core.async.t28910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28912,meta28911__$1){
var self__ = this;
var _28912__$1 = this;
return (new cljs.core.async.t28910(self__.fn1,self__._,self__.meta28908,self__.map_LT_,self__.f,self__.ch,meta28911__$1));
});})(___$1))
;

cljs.core.async.t28910.cljs$lang$type = true;

cljs.core.async.t28910.cljs$lang$ctorStr = "cljs.core.async/t28910";

cljs.core.async.t28910.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t28910");
});})(___$1))
;

cljs.core.async.__GT_t28910 = ((function (___$1){
return (function __GT_t28910(fn1__$1,___$2,meta28908__$1,map_LT___$1,f__$1,ch__$1,meta28911){
return (new cljs.core.async.t28910(fn1__$1,___$2,meta28908__$1,map_LT___$1,f__$1,ch__$1,meta28911));
});})(___$1))
;

}

return (new cljs.core.async.t28910(fn1,___$1,self__.meta28908,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16133__auto__ = ret;
if(cljs.core.truth_(and__16133__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16133__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28909){
var self__ = this;
var _28909__$1 = this;
return self__.meta28908;
});

cljs.core.async.t28907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28909,meta28908__$1){
var self__ = this;
var _28909__$1 = this;
return (new cljs.core.async.t28907(self__.ch,self__.f,self__.map_LT_,meta28908__$1));
});

cljs.core.async.t28907.cljs$lang$type = true;

cljs.core.async.t28907.cljs$lang$ctorStr = "cljs.core.async/t28907";

cljs.core.async.t28907.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t28907");
});

cljs.core.async.__GT_t28907 = (function __GT_t28907(ch__$1,f__$1,map_LT___$1,meta28908){
return (new cljs.core.async.t28907(ch__$1,f__$1,map_LT___$1,meta28908));
});

}

return (new cljs.core.async.t28907(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t28916 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28916 = (function (ch,f,map_GT_,meta28917){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28917 = meta28917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28918){
var self__ = this;
var _28918__$1 = this;
return self__.meta28917;
});

cljs.core.async.t28916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28918,meta28917__$1){
var self__ = this;
var _28918__$1 = this;
return (new cljs.core.async.t28916(self__.ch,self__.f,self__.map_GT_,meta28917__$1));
});

cljs.core.async.t28916.cljs$lang$type = true;

cljs.core.async.t28916.cljs$lang$ctorStr = "cljs.core.async/t28916";

cljs.core.async.t28916.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t28916");
});

cljs.core.async.__GT_t28916 = (function __GT_t28916(ch__$1,f__$1,map_GT___$1,meta28917){
return (new cljs.core.async.t28916(ch__$1,f__$1,map_GT___$1,meta28917));
});

}

return (new cljs.core.async.t28916(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t28922 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28922 = (function (ch,p,filter_GT_,meta28923){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28923 = meta28923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28924){
var self__ = this;
var _28924__$1 = this;
return self__.meta28923;
});

cljs.core.async.t28922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28924,meta28923__$1){
var self__ = this;
var _28924__$1 = this;
return (new cljs.core.async.t28922(self__.ch,self__.p,self__.filter_GT_,meta28923__$1));
});

cljs.core.async.t28922.cljs$lang$type = true;

cljs.core.async.t28922.cljs$lang$ctorStr = "cljs.core.async/t28922";

cljs.core.async.t28922.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t28922");
});

cljs.core.async.__GT_t28922 = (function __GT_t28922(ch__$1,p__$1,filter_GT___$1,meta28923){
return (new cljs.core.async.t28922(ch__$1,p__$1,filter_GT___$1,meta28923));
});

}

return (new cljs.core.async.t28922(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18145__auto___29007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___29007,out){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___29007,out){
return (function (state_28986){
var state_val_28987 = (state_28986[(1)]);
if((state_val_28987 === (7))){
var inst_28982 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_28988_29008 = state_28986__$1;
(statearr_28988_29008[(2)] = inst_28982);

(statearr_28988_29008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (1))){
var state_28986__$1 = state_28986;
var statearr_28989_29009 = state_28986__$1;
(statearr_28989_29009[(2)] = null);

(statearr_28989_29009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (4))){
var inst_28968 = (state_28986[(7)]);
var inst_28968__$1 = (state_28986[(2)]);
var inst_28969 = (inst_28968__$1 == null);
var state_28986__$1 = (function (){var statearr_28990 = state_28986;
(statearr_28990[(7)] = inst_28968__$1);

return statearr_28990;
})();
if(cljs.core.truth_(inst_28969)){
var statearr_28991_29010 = state_28986__$1;
(statearr_28991_29010[(1)] = (5));

} else {
var statearr_28992_29011 = state_28986__$1;
(statearr_28992_29011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (6))){
var inst_28968 = (state_28986[(7)]);
var inst_28973 = p.call(null,inst_28968);
var state_28986__$1 = state_28986;
if(cljs.core.truth_(inst_28973)){
var statearr_28993_29012 = state_28986__$1;
(statearr_28993_29012[(1)] = (8));

} else {
var statearr_28994_29013 = state_28986__$1;
(statearr_28994_29013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (3))){
var inst_28984 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28986__$1,inst_28984);
} else {
if((state_val_28987 === (2))){
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28986__$1,(4),ch);
} else {
if((state_val_28987 === (11))){
var inst_28976 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_28995_29014 = state_28986__$1;
(statearr_28995_29014[(2)] = inst_28976);

(statearr_28995_29014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (9))){
var state_28986__$1 = state_28986;
var statearr_28996_29015 = state_28986__$1;
(statearr_28996_29015[(2)] = null);

(statearr_28996_29015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (5))){
var inst_28971 = cljs.core.async.close_BANG_.call(null,out);
var state_28986__$1 = state_28986;
var statearr_28997_29016 = state_28986__$1;
(statearr_28997_29016[(2)] = inst_28971);

(statearr_28997_29016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (10))){
var inst_28979 = (state_28986[(2)]);
var state_28986__$1 = (function (){var statearr_28998 = state_28986;
(statearr_28998[(8)] = inst_28979);

return statearr_28998;
})();
var statearr_28999_29017 = state_28986__$1;
(statearr_28999_29017[(2)] = null);

(statearr_28999_29017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (8))){
var inst_28968 = (state_28986[(7)]);
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28986__$1,(11),out,inst_28968);
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
});})(c__18145__auto___29007,out))
;
return ((function (switch__18130__auto__,c__18145__auto___29007,out){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_29003 = [null,null,null,null,null,null,null,null,null];
(statearr_29003[(0)] = state_machine__18131__auto__);

(statearr_29003[(1)] = (1));

return statearr_29003;
});
var state_machine__18131__auto____1 = (function (state_28986){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_28986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e29004){if((e29004 instanceof Object)){
var ex__18134__auto__ = e29004;
var statearr_29005_29018 = state_28986;
(statearr_29005_29018[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29019 = state_28986;
state_28986 = G__29019;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_28986){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_28986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___29007,out))
})();
var state__18147__auto__ = (function (){var statearr_29006 = f__18146__auto__.call(null);
(statearr_29006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___29007);

return statearr_29006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___29007,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__18145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto__){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto__){
return (function (state_29185){
var state_val_29186 = (state_29185[(1)]);
if((state_val_29186 === (7))){
var inst_29181 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29187_29228 = state_29185__$1;
(statearr_29187_29228[(2)] = inst_29181);

(statearr_29187_29228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (20))){
var inst_29151 = (state_29185[(7)]);
var inst_29162 = (state_29185[(2)]);
var inst_29163 = cljs.core.next.call(null,inst_29151);
var inst_29137 = inst_29163;
var inst_29138 = null;
var inst_29139 = (0);
var inst_29140 = (0);
var state_29185__$1 = (function (){var statearr_29188 = state_29185;
(statearr_29188[(8)] = inst_29140);

(statearr_29188[(9)] = inst_29139);

(statearr_29188[(10)] = inst_29162);

(statearr_29188[(11)] = inst_29138);

(statearr_29188[(12)] = inst_29137);

return statearr_29188;
})();
var statearr_29189_29229 = state_29185__$1;
(statearr_29189_29229[(2)] = null);

(statearr_29189_29229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (1))){
var state_29185__$1 = state_29185;
var statearr_29190_29230 = state_29185__$1;
(statearr_29190_29230[(2)] = null);

(statearr_29190_29230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (4))){
var inst_29126 = (state_29185[(13)]);
var inst_29126__$1 = (state_29185[(2)]);
var inst_29127 = (inst_29126__$1 == null);
var state_29185__$1 = (function (){var statearr_29191 = state_29185;
(statearr_29191[(13)] = inst_29126__$1);

return statearr_29191;
})();
if(cljs.core.truth_(inst_29127)){
var statearr_29192_29231 = state_29185__$1;
(statearr_29192_29231[(1)] = (5));

} else {
var statearr_29193_29232 = state_29185__$1;
(statearr_29193_29232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (15))){
var state_29185__$1 = state_29185;
var statearr_29197_29233 = state_29185__$1;
(statearr_29197_29233[(2)] = null);

(statearr_29197_29233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (21))){
var state_29185__$1 = state_29185;
var statearr_29198_29234 = state_29185__$1;
(statearr_29198_29234[(2)] = null);

(statearr_29198_29234[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (13))){
var inst_29140 = (state_29185[(8)]);
var inst_29139 = (state_29185[(9)]);
var inst_29138 = (state_29185[(11)]);
var inst_29137 = (state_29185[(12)]);
var inst_29147 = (state_29185[(2)]);
var inst_29148 = (inst_29140 + (1));
var tmp29194 = inst_29139;
var tmp29195 = inst_29138;
var tmp29196 = inst_29137;
var inst_29137__$1 = tmp29196;
var inst_29138__$1 = tmp29195;
var inst_29139__$1 = tmp29194;
var inst_29140__$1 = inst_29148;
var state_29185__$1 = (function (){var statearr_29199 = state_29185;
(statearr_29199[(8)] = inst_29140__$1);

(statearr_29199[(9)] = inst_29139__$1);

(statearr_29199[(14)] = inst_29147);

(statearr_29199[(11)] = inst_29138__$1);

(statearr_29199[(12)] = inst_29137__$1);

return statearr_29199;
})();
var statearr_29200_29235 = state_29185__$1;
(statearr_29200_29235[(2)] = null);

(statearr_29200_29235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (22))){
var state_29185__$1 = state_29185;
var statearr_29201_29236 = state_29185__$1;
(statearr_29201_29236[(2)] = null);

(statearr_29201_29236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (6))){
var inst_29126 = (state_29185[(13)]);
var inst_29135 = f.call(null,inst_29126);
var inst_29136 = cljs.core.seq.call(null,inst_29135);
var inst_29137 = inst_29136;
var inst_29138 = null;
var inst_29139 = (0);
var inst_29140 = (0);
var state_29185__$1 = (function (){var statearr_29202 = state_29185;
(statearr_29202[(8)] = inst_29140);

(statearr_29202[(9)] = inst_29139);

(statearr_29202[(11)] = inst_29138);

(statearr_29202[(12)] = inst_29137);

return statearr_29202;
})();
var statearr_29203_29237 = state_29185__$1;
(statearr_29203_29237[(2)] = null);

(statearr_29203_29237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (17))){
var inst_29151 = (state_29185[(7)]);
var inst_29155 = cljs.core.chunk_first.call(null,inst_29151);
var inst_29156 = cljs.core.chunk_rest.call(null,inst_29151);
var inst_29157 = cljs.core.count.call(null,inst_29155);
var inst_29137 = inst_29156;
var inst_29138 = inst_29155;
var inst_29139 = inst_29157;
var inst_29140 = (0);
var state_29185__$1 = (function (){var statearr_29204 = state_29185;
(statearr_29204[(8)] = inst_29140);

(statearr_29204[(9)] = inst_29139);

(statearr_29204[(11)] = inst_29138);

(statearr_29204[(12)] = inst_29137);

return statearr_29204;
})();
var statearr_29205_29238 = state_29185__$1;
(statearr_29205_29238[(2)] = null);

(statearr_29205_29238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (3))){
var inst_29183 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29185__$1,inst_29183);
} else {
if((state_val_29186 === (12))){
var inst_29171 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29206_29239 = state_29185__$1;
(statearr_29206_29239[(2)] = inst_29171);

(statearr_29206_29239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (2))){
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29185__$1,(4),in$);
} else {
if((state_val_29186 === (23))){
var inst_29179 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29207_29240 = state_29185__$1;
(statearr_29207_29240[(2)] = inst_29179);

(statearr_29207_29240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (19))){
var inst_29166 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29208_29241 = state_29185__$1;
(statearr_29208_29241[(2)] = inst_29166);

(statearr_29208_29241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (11))){
var inst_29151 = (state_29185[(7)]);
var inst_29137 = (state_29185[(12)]);
var inst_29151__$1 = cljs.core.seq.call(null,inst_29137);
var state_29185__$1 = (function (){var statearr_29209 = state_29185;
(statearr_29209[(7)] = inst_29151__$1);

return statearr_29209;
})();
if(inst_29151__$1){
var statearr_29210_29242 = state_29185__$1;
(statearr_29210_29242[(1)] = (14));

} else {
var statearr_29211_29243 = state_29185__$1;
(statearr_29211_29243[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (9))){
var inst_29173 = (state_29185[(2)]);
var inst_29174 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29185__$1 = (function (){var statearr_29212 = state_29185;
(statearr_29212[(15)] = inst_29173);

return statearr_29212;
})();
if(cljs.core.truth_(inst_29174)){
var statearr_29213_29244 = state_29185__$1;
(statearr_29213_29244[(1)] = (21));

} else {
var statearr_29214_29245 = state_29185__$1;
(statearr_29214_29245[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (5))){
var inst_29129 = cljs.core.async.close_BANG_.call(null,out);
var state_29185__$1 = state_29185;
var statearr_29215_29246 = state_29185__$1;
(statearr_29215_29246[(2)] = inst_29129);

(statearr_29215_29246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (14))){
var inst_29151 = (state_29185[(7)]);
var inst_29153 = cljs.core.chunked_seq_QMARK_.call(null,inst_29151);
var state_29185__$1 = state_29185;
if(inst_29153){
var statearr_29216_29247 = state_29185__$1;
(statearr_29216_29247[(1)] = (17));

} else {
var statearr_29217_29248 = state_29185__$1;
(statearr_29217_29248[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (16))){
var inst_29169 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29218_29249 = state_29185__$1;
(statearr_29218_29249[(2)] = inst_29169);

(statearr_29218_29249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (10))){
var inst_29140 = (state_29185[(8)]);
var inst_29138 = (state_29185[(11)]);
var inst_29145 = cljs.core._nth.call(null,inst_29138,inst_29140);
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29185__$1,(13),out,inst_29145);
} else {
if((state_val_29186 === (18))){
var inst_29151 = (state_29185[(7)]);
var inst_29160 = cljs.core.first.call(null,inst_29151);
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29185__$1,(20),out,inst_29160);
} else {
if((state_val_29186 === (8))){
var inst_29140 = (state_29185[(8)]);
var inst_29139 = (state_29185[(9)]);
var inst_29142 = (inst_29140 < inst_29139);
var inst_29143 = inst_29142;
var state_29185__$1 = state_29185;
if(cljs.core.truth_(inst_29143)){
var statearr_29219_29250 = state_29185__$1;
(statearr_29219_29250[(1)] = (10));

} else {
var statearr_29220_29251 = state_29185__$1;
(statearr_29220_29251[(1)] = (11));

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
});})(c__18145__auto__))
;
return ((function (switch__18130__auto__,c__18145__auto__){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_29224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29224[(0)] = state_machine__18131__auto__);

(statearr_29224[(1)] = (1));

return statearr_29224;
});
var state_machine__18131__auto____1 = (function (state_29185){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_29185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e29225){if((e29225 instanceof Object)){
var ex__18134__auto__ = e29225;
var statearr_29226_29252 = state_29185;
(statearr_29226_29252[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29253 = state_29185;
state_29185 = G__29253;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_29185){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_29185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto__))
})();
var state__18147__auto__ = (function (){var statearr_29227 = f__18146__auto__.call(null);
(statearr_29227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto__);

return statearr_29227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto__))
);

return c__18145__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18145__auto___29350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___29350,out){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___29350,out){
return (function (state_29325){
var state_val_29326 = (state_29325[(1)]);
if((state_val_29326 === (7))){
var inst_29320 = (state_29325[(2)]);
var state_29325__$1 = state_29325;
var statearr_29327_29351 = state_29325__$1;
(statearr_29327_29351[(2)] = inst_29320);

(statearr_29327_29351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (1))){
var inst_29302 = null;
var state_29325__$1 = (function (){var statearr_29328 = state_29325;
(statearr_29328[(7)] = inst_29302);

return statearr_29328;
})();
var statearr_29329_29352 = state_29325__$1;
(statearr_29329_29352[(2)] = null);

(statearr_29329_29352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (4))){
var inst_29305 = (state_29325[(8)]);
var inst_29305__$1 = (state_29325[(2)]);
var inst_29306 = (inst_29305__$1 == null);
var inst_29307 = cljs.core.not.call(null,inst_29306);
var state_29325__$1 = (function (){var statearr_29330 = state_29325;
(statearr_29330[(8)] = inst_29305__$1);

return statearr_29330;
})();
if(inst_29307){
var statearr_29331_29353 = state_29325__$1;
(statearr_29331_29353[(1)] = (5));

} else {
var statearr_29332_29354 = state_29325__$1;
(statearr_29332_29354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (6))){
var state_29325__$1 = state_29325;
var statearr_29333_29355 = state_29325__$1;
(statearr_29333_29355[(2)] = null);

(statearr_29333_29355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (3))){
var inst_29322 = (state_29325[(2)]);
var inst_29323 = cljs.core.async.close_BANG_.call(null,out);
var state_29325__$1 = (function (){var statearr_29334 = state_29325;
(statearr_29334[(9)] = inst_29322);

return statearr_29334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29325__$1,inst_29323);
} else {
if((state_val_29326 === (2))){
var state_29325__$1 = state_29325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29325__$1,(4),ch);
} else {
if((state_val_29326 === (11))){
var inst_29305 = (state_29325[(8)]);
var inst_29314 = (state_29325[(2)]);
var inst_29302 = inst_29305;
var state_29325__$1 = (function (){var statearr_29335 = state_29325;
(statearr_29335[(10)] = inst_29314);

(statearr_29335[(7)] = inst_29302);

return statearr_29335;
})();
var statearr_29336_29356 = state_29325__$1;
(statearr_29336_29356[(2)] = null);

(statearr_29336_29356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (9))){
var inst_29305 = (state_29325[(8)]);
var state_29325__$1 = state_29325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29325__$1,(11),out,inst_29305);
} else {
if((state_val_29326 === (5))){
var inst_29302 = (state_29325[(7)]);
var inst_29305 = (state_29325[(8)]);
var inst_29309 = cljs.core._EQ_.call(null,inst_29305,inst_29302);
var state_29325__$1 = state_29325;
if(inst_29309){
var statearr_29338_29357 = state_29325__$1;
(statearr_29338_29357[(1)] = (8));

} else {
var statearr_29339_29358 = state_29325__$1;
(statearr_29339_29358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (10))){
var inst_29317 = (state_29325[(2)]);
var state_29325__$1 = state_29325;
var statearr_29340_29359 = state_29325__$1;
(statearr_29340_29359[(2)] = inst_29317);

(statearr_29340_29359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (8))){
var inst_29302 = (state_29325[(7)]);
var tmp29337 = inst_29302;
var inst_29302__$1 = tmp29337;
var state_29325__$1 = (function (){var statearr_29341 = state_29325;
(statearr_29341[(7)] = inst_29302__$1);

return statearr_29341;
})();
var statearr_29342_29360 = state_29325__$1;
(statearr_29342_29360[(2)] = null);

(statearr_29342_29360[(1)] = (2));


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
});})(c__18145__auto___29350,out))
;
return ((function (switch__18130__auto__,c__18145__auto___29350,out){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_29346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29346[(0)] = state_machine__18131__auto__);

(statearr_29346[(1)] = (1));

return statearr_29346;
});
var state_machine__18131__auto____1 = (function (state_29325){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_29325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e29347){if((e29347 instanceof Object)){
var ex__18134__auto__ = e29347;
var statearr_29348_29361 = state_29325;
(statearr_29348_29361[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29362 = state_29325;
state_29325 = G__29362;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_29325){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_29325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___29350,out))
})();
var state__18147__auto__ = (function (){var statearr_29349 = f__18146__auto__.call(null);
(statearr_29349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___29350);

return statearr_29349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___29350,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18145__auto___29497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___29497,out){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___29497,out){
return (function (state_29467){
var state_val_29468 = (state_29467[(1)]);
if((state_val_29468 === (7))){
var inst_29463 = (state_29467[(2)]);
var state_29467__$1 = state_29467;
var statearr_29469_29498 = state_29467__$1;
(statearr_29469_29498[(2)] = inst_29463);

(statearr_29469_29498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29468 === (1))){
var inst_29430 = (new Array(n));
var inst_29431 = inst_29430;
var inst_29432 = (0);
var state_29467__$1 = (function (){var statearr_29470 = state_29467;
(statearr_29470[(7)] = inst_29431);

(statearr_29470[(8)] = inst_29432);

return statearr_29470;
})();
var statearr_29471_29499 = state_29467__$1;
(statearr_29471_29499[(2)] = null);

(statearr_29471_29499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29468 === (4))){
var inst_29435 = (state_29467[(9)]);
var inst_29435__$1 = (state_29467[(2)]);
var inst_29436 = (inst_29435__$1 == null);
var inst_29437 = cljs.core.not.call(null,inst_29436);
var state_29467__$1 = (function (){var statearr_29472 = state_29467;
(statearr_29472[(9)] = inst_29435__$1);

return statearr_29472;
})();
if(inst_29437){
var statearr_29473_29500 = state_29467__$1;
(statearr_29473_29500[(1)] = (5));

} else {
var statearr_29474_29501 = state_29467__$1;
(statearr_29474_29501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29468 === (15))){
var inst_29457 = (state_29467[(2)]);
var state_29467__$1 = state_29467;
var statearr_29475_29502 = state_29467__$1;
(statearr_29475_29502[(2)] = inst_29457);

(statearr_29475_29502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29468 === (13))){
var state_29467__$1 = state_29467;
var statearr_29476_29503 = state_29467__$1;
(statearr_29476_29503[(2)] = null);

(statearr_29476_29503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29468 === (6))){
var inst_29432 = (state_29467[(8)]);
var inst_29453 = (inst_29432 > (0));
var state_29467__$1 = state_29467;
if(cljs.core.truth_(inst_29453)){
var statearr_29477_29504 = state_29467__$1;
(statearr_29477_29504[(1)] = (12));

} else {
var statearr_29478_29505 = state_29467__$1;
(statearr_29478_29505[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29468 === (3))){
var inst_29465 = (state_29467[(2)]);
var state_29467__$1 = state_29467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29467__$1,inst_29465);
} else {
if((state_val_29468 === (12))){
var inst_29431 = (state_29467[(7)]);
var inst_29455 = cljs.core.vec.call(null,inst_29431);
var state_29467__$1 = state_29467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29467__$1,(15),out,inst_29455);
} else {
if((state_val_29468 === (2))){
var state_29467__$1 = state_29467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29467__$1,(4),ch);
} else {
if((state_val_29468 === (11))){
var inst_29447 = (state_29467[(2)]);
var inst_29448 = (new Array(n));
var inst_29431 = inst_29448;
var inst_29432 = (0);
var state_29467__$1 = (function (){var statearr_29479 = state_29467;
(statearr_29479[(7)] = inst_29431);

(statearr_29479[(8)] = inst_29432);

(statearr_29479[(10)] = inst_29447);

return statearr_29479;
})();
var statearr_29480_29506 = state_29467__$1;
(statearr_29480_29506[(2)] = null);

(statearr_29480_29506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29468 === (9))){
var inst_29431 = (state_29467[(7)]);
var inst_29445 = cljs.core.vec.call(null,inst_29431);
var state_29467__$1 = state_29467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29467__$1,(11),out,inst_29445);
} else {
if((state_val_29468 === (5))){
var inst_29431 = (state_29467[(7)]);
var inst_29432 = (state_29467[(8)]);
var inst_29435 = (state_29467[(9)]);
var inst_29440 = (state_29467[(11)]);
var inst_29439 = (inst_29431[inst_29432] = inst_29435);
var inst_29440__$1 = (inst_29432 + (1));
var inst_29441 = (inst_29440__$1 < n);
var state_29467__$1 = (function (){var statearr_29481 = state_29467;
(statearr_29481[(12)] = inst_29439);

(statearr_29481[(11)] = inst_29440__$1);

return statearr_29481;
})();
if(cljs.core.truth_(inst_29441)){
var statearr_29482_29507 = state_29467__$1;
(statearr_29482_29507[(1)] = (8));

} else {
var statearr_29483_29508 = state_29467__$1;
(statearr_29483_29508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29468 === (14))){
var inst_29460 = (state_29467[(2)]);
var inst_29461 = cljs.core.async.close_BANG_.call(null,out);
var state_29467__$1 = (function (){var statearr_29485 = state_29467;
(statearr_29485[(13)] = inst_29460);

return statearr_29485;
})();
var statearr_29486_29509 = state_29467__$1;
(statearr_29486_29509[(2)] = inst_29461);

(statearr_29486_29509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29468 === (10))){
var inst_29451 = (state_29467[(2)]);
var state_29467__$1 = state_29467;
var statearr_29487_29510 = state_29467__$1;
(statearr_29487_29510[(2)] = inst_29451);

(statearr_29487_29510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29468 === (8))){
var inst_29431 = (state_29467[(7)]);
var inst_29440 = (state_29467[(11)]);
var tmp29484 = inst_29431;
var inst_29431__$1 = tmp29484;
var inst_29432 = inst_29440;
var state_29467__$1 = (function (){var statearr_29488 = state_29467;
(statearr_29488[(7)] = inst_29431__$1);

(statearr_29488[(8)] = inst_29432);

return statearr_29488;
})();
var statearr_29489_29511 = state_29467__$1;
(statearr_29489_29511[(2)] = null);

(statearr_29489_29511[(1)] = (2));


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
});})(c__18145__auto___29497,out))
;
return ((function (switch__18130__auto__,c__18145__auto___29497,out){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_29493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29493[(0)] = state_machine__18131__auto__);

(statearr_29493[(1)] = (1));

return statearr_29493;
});
var state_machine__18131__auto____1 = (function (state_29467){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_29467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e29494){if((e29494 instanceof Object)){
var ex__18134__auto__ = e29494;
var statearr_29495_29512 = state_29467;
(statearr_29495_29512[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29513 = state_29467;
state_29467 = G__29513;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_29467){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_29467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___29497,out))
})();
var state__18147__auto__ = (function (){var statearr_29496 = f__18146__auto__.call(null);
(statearr_29496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___29497);

return statearr_29496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___29497,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18145__auto___29656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18145__auto___29656,out){
return (function (){
var f__18146__auto__ = (function (){var switch__18130__auto__ = ((function (c__18145__auto___29656,out){
return (function (state_29626){
var state_val_29627 = (state_29626[(1)]);
if((state_val_29627 === (7))){
var inst_29622 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
var statearr_29628_29657 = state_29626__$1;
(statearr_29628_29657[(2)] = inst_29622);

(statearr_29628_29657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (1))){
var inst_29585 = [];
var inst_29586 = inst_29585;
var inst_29587 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29626__$1 = (function (){var statearr_29629 = state_29626;
(statearr_29629[(7)] = inst_29587);

(statearr_29629[(8)] = inst_29586);

return statearr_29629;
})();
var statearr_29630_29658 = state_29626__$1;
(statearr_29630_29658[(2)] = null);

(statearr_29630_29658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (4))){
var inst_29590 = (state_29626[(9)]);
var inst_29590__$1 = (state_29626[(2)]);
var inst_29591 = (inst_29590__$1 == null);
var inst_29592 = cljs.core.not.call(null,inst_29591);
var state_29626__$1 = (function (){var statearr_29631 = state_29626;
(statearr_29631[(9)] = inst_29590__$1);

return statearr_29631;
})();
if(inst_29592){
var statearr_29632_29659 = state_29626__$1;
(statearr_29632_29659[(1)] = (5));

} else {
var statearr_29633_29660 = state_29626__$1;
(statearr_29633_29660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (15))){
var inst_29616 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
var statearr_29634_29661 = state_29626__$1;
(statearr_29634_29661[(2)] = inst_29616);

(statearr_29634_29661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (13))){
var state_29626__$1 = state_29626;
var statearr_29635_29662 = state_29626__$1;
(statearr_29635_29662[(2)] = null);

(statearr_29635_29662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (6))){
var inst_29586 = (state_29626[(8)]);
var inst_29611 = inst_29586.length;
var inst_29612 = (inst_29611 > (0));
var state_29626__$1 = state_29626;
if(cljs.core.truth_(inst_29612)){
var statearr_29636_29663 = state_29626__$1;
(statearr_29636_29663[(1)] = (12));

} else {
var statearr_29637_29664 = state_29626__$1;
(statearr_29637_29664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (3))){
var inst_29624 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29626__$1,inst_29624);
} else {
if((state_val_29627 === (12))){
var inst_29586 = (state_29626[(8)]);
var inst_29614 = cljs.core.vec.call(null,inst_29586);
var state_29626__$1 = state_29626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29626__$1,(15),out,inst_29614);
} else {
if((state_val_29627 === (2))){
var state_29626__$1 = state_29626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29626__$1,(4),ch);
} else {
if((state_val_29627 === (11))){
var inst_29590 = (state_29626[(9)]);
var inst_29594 = (state_29626[(10)]);
var inst_29604 = (state_29626[(2)]);
var inst_29605 = [];
var inst_29606 = inst_29605.push(inst_29590);
var inst_29586 = inst_29605;
var inst_29587 = inst_29594;
var state_29626__$1 = (function (){var statearr_29638 = state_29626;
(statearr_29638[(11)] = inst_29604);

(statearr_29638[(7)] = inst_29587);

(statearr_29638[(8)] = inst_29586);

(statearr_29638[(12)] = inst_29606);

return statearr_29638;
})();
var statearr_29639_29665 = state_29626__$1;
(statearr_29639_29665[(2)] = null);

(statearr_29639_29665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (9))){
var inst_29586 = (state_29626[(8)]);
var inst_29602 = cljs.core.vec.call(null,inst_29586);
var state_29626__$1 = state_29626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29626__$1,(11),out,inst_29602);
} else {
if((state_val_29627 === (5))){
var inst_29590 = (state_29626[(9)]);
var inst_29587 = (state_29626[(7)]);
var inst_29594 = (state_29626[(10)]);
var inst_29594__$1 = f.call(null,inst_29590);
var inst_29595 = cljs.core._EQ_.call(null,inst_29594__$1,inst_29587);
var inst_29596 = cljs.core.keyword_identical_QMARK_.call(null,inst_29587,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29597 = (inst_29595) || (inst_29596);
var state_29626__$1 = (function (){var statearr_29640 = state_29626;
(statearr_29640[(10)] = inst_29594__$1);

return statearr_29640;
})();
if(cljs.core.truth_(inst_29597)){
var statearr_29641_29666 = state_29626__$1;
(statearr_29641_29666[(1)] = (8));

} else {
var statearr_29642_29667 = state_29626__$1;
(statearr_29642_29667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (14))){
var inst_29619 = (state_29626[(2)]);
var inst_29620 = cljs.core.async.close_BANG_.call(null,out);
var state_29626__$1 = (function (){var statearr_29644 = state_29626;
(statearr_29644[(13)] = inst_29619);

return statearr_29644;
})();
var statearr_29645_29668 = state_29626__$1;
(statearr_29645_29668[(2)] = inst_29620);

(statearr_29645_29668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (10))){
var inst_29609 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
var statearr_29646_29669 = state_29626__$1;
(statearr_29646_29669[(2)] = inst_29609);

(statearr_29646_29669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (8))){
var inst_29590 = (state_29626[(9)]);
var inst_29586 = (state_29626[(8)]);
var inst_29594 = (state_29626[(10)]);
var inst_29599 = inst_29586.push(inst_29590);
var tmp29643 = inst_29586;
var inst_29586__$1 = tmp29643;
var inst_29587 = inst_29594;
var state_29626__$1 = (function (){var statearr_29647 = state_29626;
(statearr_29647[(14)] = inst_29599);

(statearr_29647[(7)] = inst_29587);

(statearr_29647[(8)] = inst_29586__$1);

return statearr_29647;
})();
var statearr_29648_29670 = state_29626__$1;
(statearr_29648_29670[(2)] = null);

(statearr_29648_29670[(1)] = (2));


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
});})(c__18145__auto___29656,out))
;
return ((function (switch__18130__auto__,c__18145__auto___29656,out){
return (function() {
var state_machine__18131__auto__ = null;
var state_machine__18131__auto____0 = (function (){
var statearr_29652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29652[(0)] = state_machine__18131__auto__);

(statearr_29652[(1)] = (1));

return statearr_29652;
});
var state_machine__18131__auto____1 = (function (state_29626){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_29626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e29653){if((e29653 instanceof Object)){
var ex__18134__auto__ = e29653;
var statearr_29654_29671 = state_29626;
(statearr_29654_29671[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29672 = state_29626;
state_29626 = G__29672;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
state_machine__18131__auto__ = function(state_29626){
switch(arguments.length){
case 0:
return state_machine__18131__auto____0.call(this);
case 1:
return state_machine__18131__auto____1.call(this,state_29626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18131__auto____0;
state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18131__auto____1;
return state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18145__auto___29656,out))
})();
var state__18147__auto__ = (function (){var statearr_29655 = f__18146__auto__.call(null);
(statearr_29655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18145__auto___29656);

return statearr_29655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18147__auto__);
});})(c__18145__auto___29656,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1427899298438