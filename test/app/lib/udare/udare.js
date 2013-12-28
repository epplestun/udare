!function(a){Q=a()}(function(){"use strict";function a(a){return function(){return X.apply(a,arguments)}}function b(a){return a===Object(a)}function c(a){return"[object StopIteration]"===db(a)||a instanceof T}function d(a,b){if(Q&&b.stack&&"object"==typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf(fb)){for(var c=[],d=b;d;d=d.source)d.stack&&c.unshift(d.stack);c.unshift(a.stack);var f=c.join("\n"+fb+"\n");a.stack=e(f)}}function e(a){for(var b=a.split("\n"),c=[],d=0;d<b.length;++d){var e=b[d];h(e)||f(e)||!e||c.push(e)}return c.join("\n")}function f(a){return-1!==a.indexOf("(module.js:")||-1!==a.indexOf("(node.js:")}function g(a){var b=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);if(b)return[b[1],Number(b[2])];var c=/at ([^ ]+):(\d+):(?:\d+)$/.exec(a);if(c)return[c[1],Number(c[2])];var d=/.*@(.+):(\d+)$/.exec(a);return d?[d[1],Number(d[2])]:void 0}function h(a){var b=g(a);if(!b)return!1;var c=b[0],d=b[1];return c===S&&d>=U&&kb>=d}function i(){if(Q)try{throw new Error}catch(a){var b=a.stack.split("\n"),c=b[0].indexOf("@")>0?b[1]:b[2],d=g(c);if(!d)return;return S=d[0],d[1]}}function j(a,b,c){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(b+" is deprecated, use "+c+" instead.",new Error("").stack),a.apply(a,arguments)}}function k(a){return r(a)?a:s(a)?D(a):C(a)}function l(){function a(a){b=a,f.source=a,Z(c,function(b,c){W(function(){a.promiseDispatch.apply(a,c)})},void 0),c=void 0,d=void 0}var b,c=[],d=[],e=ab(l.prototype),f=ab(o.prototype);if(f.promiseDispatch=function(a,e,f){var g=Y(arguments);c?(c.push(g),"when"===e&&f[1]&&d.push(f[1])):W(function(){b.promiseDispatch.apply(b,g)})},f.valueOf=j(function(){if(c)return f;var a=q(b);return r(a)&&(b=a),a},"valueOf","inspect"),f.inspect=function(){return b?b.inspect():{state:"pending"}},k.longStackSupport&&Q)try{throw new Error}catch(g){f.stack=g.stack.substring(g.stack.indexOf("\n")+1)}return e.promise=f,e.resolve=function(c){b||a(k(c))},e.fulfill=function(c){b||a(C(c))},e.reject=function(c){b||a(B(c))},e.notify=function(a){b||Z(d,function(b,c){W(function(){c(a)})},void 0)},e}function m(a){if("function"!=typeof a)throw new TypeError("resolver must be a function.");var b=l();try{a(b.resolve,b.reject,b.notify)}catch(c){b.reject(c)}return b.promise}function n(a){return m(function(b,c){for(var d=0,e=a.length;e>d;d++)k(a[d]).then(b,c)})}function o(a,b,c){void 0===b&&(b=function(a){return B(new Error("Promise does not support operation: "+a))}),void 0===c&&(c=function(){return{state:"unknown"}});var d=ab(o.prototype);if(d.promiseDispatch=function(c,e,f){var g;try{g=a[e]?a[e].apply(d,f):b.call(d,e,f)}catch(h){g=B(h)}c&&c(g)},d.inspect=c,c){var e=c();"rejected"===e.state&&(d.exception=e.reason),d.valueOf=j(function(){var a=c();return"pending"===a.state||"rejected"===a.state?d:a.value})}return d}function p(a,b,c,d){return k(a).then(b,c,d)}function q(a){if(r(a)){var b=a.inspect();if("fulfilled"===b.state)return b.value}return a}function r(a){return b(a)&&"function"==typeof a.promiseDispatch&&"function"==typeof a.inspect}function s(a){return b(a)&&"function"==typeof a.then}function t(a){return r(a)&&"pending"===a.inspect().state}function u(a){return!r(a)||"fulfilled"===a.inspect().state}function v(a){return r(a)&&"rejected"===a.inspect().state}function w(){ib||"undefined"==typeof window||window.Touch||!window.console||console.warn("[Q] Unhandled rejection reasons (should be empty):",gb),ib=!0}function x(){for(var a=0;a<gb.length;a++){var b=gb[a];console.warn("Unhandled rejection reason:",b)}}function y(){gb.length=0,hb.length=0,ib=!1,jb||(jb=!0,"undefined"!=typeof process&&process.on&&process.on("exit",x))}function z(a,b){jb&&(hb.push(a),b&&"undefined"!=typeof b.stack?gb.push(b.stack):gb.push("(no stack) "+b),w())}function A(a){if(jb){var b=$(hb,a);-1!==b&&(hb.splice(b,1),gb.splice(b,1))}}function B(a){var b=o({when:function(b){return b&&A(this),b?b(a):this}},function(){return this},function(){return{state:"rejected",reason:a}});return z(b,a),b}function C(a){return o({when:function(){return a},get:function(b){return a[b]},set:function(b,c){a[b]=c},"delete":function(b){delete a[b]},post:function(b,c){return null===b||void 0===b?a.apply(void 0,c):a[b].apply(a,c)},apply:function(b,c){return a.apply(b,c)},keys:function(){return cb(a)}},void 0,function(){return{state:"fulfilled",value:a}})}function D(a){var b=l();return W(function(){try{a.then(b.resolve,b.reject,b.notify)}catch(c){b.reject(c)}}),b.promise}function E(a){return o({isDef:function(){}},function(b,c){return K(a,b,c)},function(){return k(a).inspect()})}function F(a,b,c){return k(a).spread(b,c)}function G(a){return function(){function b(a,b){var g;if(eb){try{g=d[a](b)}catch(h){return B(h)}return g.done?g.value:p(g.value,e,f)}try{g=d[a](b)}catch(h){return c(h)?h.value:B(h)}return p(g,e,f)}var d=a.apply(this,arguments),e=b.bind(b,"next"),f=b.bind(b,"throw");return e()}}function H(a){k.done(k.async(a)())}function I(a){throw new T(a)}function J(a){return function(){return F([this,L(arguments)],function(b,c){return a.apply(b,c)})}}function K(a,b,c){return k(a).dispatch(b,c)}function L(a){return p(a,function(a){var b=0,c=l();return Z(a,function(d,e,f){var g;r(e)&&"fulfilled"===(g=e.inspect()).state?a[f]=g.value:(++b,p(e,function(d){a[f]=d,0===--b&&c.resolve(a)},c.reject,function(a){c.notify({index:f,value:a})}))},void 0),0===b&&c.resolve(a),c.promise})}function M(a){return p(a,function(a){return a=_(a,k),p(L(_(a,function(a){return p(a,V,V)})),function(){return a})})}function N(a){return k(a).allSettled()}function O(a,b){return k(a).then(void 0,void 0,b)}function P(a,b){return k(a).nodeify(b)}var Q=!1;try{throw new Error}catch(R){Q=!!R.stack}var S,T,U=i(),V=function(){},W=function(){function a(){for(;b.next;){b=b.next;var c=b.task;b.task=void 0;var e=b.domain;e&&(b.domain=void 0,e.enter());try{c()}catch(g){if(f)throw e&&e.exit(),setTimeout(a,0),e&&e.enter(),g;setTimeout(function(){throw g},0)}e&&e.exit()}d=!1}var b={task:void 0,next:null},c=b,d=!1,e=void 0,f=!1;if(W=function(a){c=c.next={task:a,domain:f&&process.domain,next:null},d||(d=!0,e())},"undefined"!=typeof process&&process.nextTick)f=!0,e=function(){process.nextTick(a)};else if("function"==typeof setImmediate)e="undefined"!=typeof window?setImmediate.bind(window,a):function(){setImmediate(a)};else if("undefined"!=typeof MessageChannel){var g=new MessageChannel;g.port1.onmessage=function(){e=h,g.port1.onmessage=a,a()};var h=function(){g.port2.postMessage(0)};e=function(){setTimeout(a,0),h()}}else e=function(){setTimeout(a,0)};return W}(),X=Function.call,Y=a(Array.prototype.slice),Z=a(Array.prototype.reduce||function(a,b){var c=0,d=this.length;if(1===arguments.length)for(;;){if(c in this){b=this[c++];break}if(++c>=d)throw new TypeError}for(;d>c;c++)c in this&&(b=a(b,this[c],c));return b}),$=a(Array.prototype.indexOf||function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}),_=a(Array.prototype.map||function(a,b){var c=this,d=[];return Z(c,function(e,f,g){d.push(a.call(b,f,g,c))},void 0),d}),ab=Object.create||function(a){function b(){}return b.prototype=a,new b},bb=a(Object.prototype.hasOwnProperty),cb=Object.keys||function(a){var b=[];for(var c in a)bb(a,c)&&b.push(c);return b},db=a(Object.prototype.toString);T="undefined"!=typeof ReturnValue?ReturnValue:function(a){this.value=a};var eb;try{new Function("(function* (){ yield 1; })"),eb=!0}catch(R){eb=!1}var fb="From previous event:";k.resolve=k,k.nextTick=W,k.longStackSupport=!1,k.defer=l,l.prototype.makeNodeResolver=function(){var a=this;return function(b,c){b?a.reject(b):arguments.length>2?a.resolve(Y(arguments,1)):a.resolve(c)}},k.promise=m,k.passByCopy=function(a){return a},o.prototype.passByCopy=function(){return this},k.join=function(a,b){return k(a).join(b)},o.prototype.join=function(a){return k([this,a]).spread(function(a,b){if(a===b)return a;throw new Error("Can't join: not the same: "+a+" "+b)})},k.race=n,o.prototype.race=function(){return this.then(k.race)},k.makePromise=o,o.prototype.toString=function(){return"[object Promise]"},o.prototype.then=function(a,b,c){function e(b){try{return"function"==typeof a?a(b):b}catch(c){return B(c)}}function f(a){if("function"==typeof b){d(a,h);try{return b(a)}catch(c){return B(c)}}return B(a)}function g(a){return"function"==typeof c?c(a):a}var h=this,i=l(),j=!1;return W(function(){h.promiseDispatch(function(a){j||(j=!0,i.resolve(e(a)))},"when",[function(a){j||(j=!0,i.resolve(f(a)))}])}),h.promiseDispatch(void 0,"when",[void 0,function(a){var b,c=!1;try{b=g(a)}catch(d){if(c=!0,!k.onerror)throw d;k.onerror(d)}c||i.notify(b)}]),i.promise},k.when=p,o.prototype.thenResolve=function(a){return this.then(function(){return a})},k.thenResolve=function(a,b){return k(a).thenResolve(b)},o.prototype.thenReject=function(a){return this.then(function(){throw a})},k.thenReject=function(a,b){return k(a).thenReject(b)},k.nearer=q,k.isPromise=r,k.isPromiseAlike=s,k.isPending=t,o.prototype.isPending=function(){return"pending"===this.inspect().state},k.isFulfilled=u,o.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},k.isRejected=v,o.prototype.isRejected=function(){return"rejected"===this.inspect().state};var gb=[],hb=[],ib=!1,jb=!0;k.resetUnhandledRejections=y,k.getUnhandledReasons=function(){return gb.slice()},k.stopUnhandledRejectionTracking=function(){y(),"undefined"!=typeof process&&process.on&&process.removeListener("exit",x),jb=!1},y(),k.reject=B,k.fulfill=C,k.master=E,k.spread=F,o.prototype.spread=function(a,b){return this.all().then(function(b){return a.apply(void 0,b)},b)},k.async=G,k.spawn=H,k["return"]=I,k.promised=J,k.dispatch=K,o.prototype.dispatch=function(a,b){var c=this,d=l();return W(function(){c.promiseDispatch(d.resolve,a,b)}),d.promise},k.get=function(a,b){return k(a).dispatch("get",[b])},o.prototype.get=function(a){return this.dispatch("get",[a])},k.set=function(a,b,c){return k(a).dispatch("set",[b,c])},o.prototype.set=function(a,b){return this.dispatch("set",[a,b])},k.del=k["delete"]=function(a,b){return k(a).dispatch("delete",[b])},o.prototype.del=o.prototype["delete"]=function(a){return this.dispatch("delete",[a])},k.mapply=k.post=function(a,b,c){return k(a).dispatch("post",[b,c])},o.prototype.mapply=o.prototype.post=function(a,b){return this.dispatch("post",[a,b])},k.send=k.mcall=k.invoke=function(a,b){return k(a).dispatch("post",[b,Y(arguments,2)])},o.prototype.send=o.prototype.mcall=o.prototype.invoke=function(a){return this.dispatch("post",[a,Y(arguments,1)])},k.fapply=function(a,b){return k(a).dispatch("apply",[void 0,b])},o.prototype.fapply=function(a){return this.dispatch("apply",[void 0,a])},k["try"]=k.fcall=function(a){return k(a).dispatch("apply",[void 0,Y(arguments,1)])},o.prototype.fcall=function(){return this.dispatch("apply",[void 0,Y(arguments)])},k.fbind=function(a){var b=k(a),c=Y(arguments,1);return function(){return b.dispatch("apply",[this,c.concat(Y(arguments))])}},o.prototype.fbind=function(){var a=this,b=Y(arguments);return function(){return a.dispatch("apply",[this,b.concat(Y(arguments))])}},k.keys=function(a){return k(a).dispatch("keys",[])},o.prototype.keys=function(){return this.dispatch("keys",[])},k.all=L,o.prototype.all=function(){return L(this)},k.allResolved=j(M,"allResolved","allSettled"),o.prototype.allResolved=function(){return M(this)},k.allSettled=N,o.prototype.allSettled=function(){return this.then(function(a){return L(_(a,function(a){function b(){return a.inspect()}return a=k(a),a.then(b,b)}))})},k.fail=k["catch"]=function(a,b){return k(a).then(void 0,b)},o.prototype.fail=o.prototype["catch"]=function(a){return this.then(void 0,a)},k.progress=O,o.prototype.progress=function(a){return this.then(void 0,void 0,a)},k.fin=k["finally"]=function(a,b){return k(a)["finally"](b)},o.prototype.fin=o.prototype["finally"]=function(a){return a=k(a),this.then(function(b){return a.fcall().then(function(){return b})},function(b){return a.fcall().then(function(){throw b})})},k.done=function(a,b,c,d){return k(a).done(b,c,d)},o.prototype.done=function(a,b,c){var e=function(a){W(function(){if(d(a,f),!k.onerror)throw a;k.onerror(a)})},f=a||b||c?this.then(a,b,c):this;"object"==typeof process&&process&&process.domain&&(e=process.domain.bind(e)),f.then(void 0,e)},k.timeout=function(a,b,c){return k(a).timeout(b,c)},o.prototype.timeout=function(a,b){var c=l(),d=setTimeout(function(){c.reject(new Error(b||"Timed out after "+a+" ms"))},a);return this.then(function(a){clearTimeout(d),c.resolve(a)},function(a){clearTimeout(d),c.reject(a)},c.notify),c.promise},k.delay=function(a,b){return void 0===b&&(b=a,a=void 0),k(a).delay(b)},o.prototype.delay=function(a){return this.then(function(b){var c=l();return setTimeout(function(){c.resolve(b)},a),c.promise})},k.nfapply=function(a,b){return k(a).nfapply(b)},o.prototype.nfapply=function(a){var b=l(),c=Y(a);return c.push(b.makeNodeResolver()),this.fapply(c).fail(b.reject),b.promise},k.nfcall=function(a){var b=Y(arguments,1);return k(a).nfapply(b)},o.prototype.nfcall=function(){var a=Y(arguments),b=l();return a.push(b.makeNodeResolver()),this.fapply(a).fail(b.reject),b.promise},k.nfbind=k.denodeify=function(a){var b=Y(arguments,1);return function(){var c=b.concat(Y(arguments)),d=l();return c.push(d.makeNodeResolver()),k(a).fapply(c).fail(d.reject),d.promise}},o.prototype.nfbind=o.prototype.denodeify=function(){var a=Y(arguments);return a.unshift(this),k.denodeify.apply(void 0,a)},k.nbind=function(a,b){var c=Y(arguments,2);return function(){function d(){return a.apply(b,arguments)}var e=c.concat(Y(arguments)),f=l();return e.push(f.makeNodeResolver()),k(d).fapply(e).fail(f.reject),f.promise}},o.prototype.nbind=function(){var a=Y(arguments,0);return a.unshift(this),k.nbind.apply(void 0,a)},k.nmapply=k.npost=function(a,b,c){return k(a).npost(b,c)},o.prototype.nmapply=o.prototype.npost=function(a,b){var c=Y(b||[]),d=l();return c.push(d.makeNodeResolver()),this.dispatch("post",[a,c]).fail(d.reject),d.promise},k.nsend=k.nmcall=k.ninvoke=function(a,b){var c=Y(arguments,2),d=l();return c.push(d.makeNodeResolver()),k(a).dispatch("post",[b,c]).fail(d.reject),d.promise},o.prototype.nsend=o.prototype.nmcall=o.prototype.ninvoke=function(a){var b=Y(arguments,1),c=l();return b.push(c.makeNodeResolver()),this.dispatch("post",[a,b]).fail(c.reject),c.promise},k.nodeify=P,o.prototype.nodeify=function(a){return a?(this.then(function(b){W(function(){a(null,b)})},function(b){W(function(){a(b)})}),void 0):this};var kb=i();return k});
/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

// lib/handlebars/browser-prefix.js
var Handlebars = {};

(function(Handlebars, undefined) {
;
// lib/handlebars/base.js

Handlebars.VERSION = "1.0.0";
Handlebars.COMPILER_REVISION = 4;

Handlebars.REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '>= 1.0.0'
};

Handlebars.helpers  = {};
Handlebars.partials = {};

var toString = Object.prototype.toString,
    functionType = '[object Function]',
    objectType = '[object Object]';

Handlebars.registerHelper = function(name, fn, inverse) {
  if (toString.call(name) === objectType) {
    if (inverse || fn) { throw new Handlebars.Exception('Arg not supported with multiple helpers'); }
    Handlebars.Utils.extend(this.helpers, name);
  } else {
    if (inverse) { fn.not = inverse; }
    this.helpers[name] = fn;
  }
};

Handlebars.registerPartial = function(name, str) {
  if (toString.call(name) === objectType) {
    Handlebars.Utils.extend(this.partials,  name);
  } else {
    this.partials[name] = str;
  }
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Missing helper: '" + arg + "'");
  }
});

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;

  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      return Handlebars.helpers.each(context, options);
    } else {
      return inverse(this);
    }
  } else {
    return fn(context);
  }
});

Handlebars.K = function() {};

Handlebars.createFrame = Object.create || function(object) {
  Handlebars.K.prototype = object;
  var obj = new Handlebars.K();
  Handlebars.K.prototype = null;
  return obj;
};

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},

  // can be overridden in the host environment
  log: function(level, obj) {
    if (Handlebars.logger.level <= level) {
      var method = Handlebars.logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, obj);
      }
    }
  }
};

Handlebars.log = function(level, obj) { Handlebars.logger.log(level, obj); };

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var i = 0, ret = "", data;

  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  if(context && typeof context === 'object') {
    if(context instanceof Array){
      for(var j = context.length; i<j; i++) {
        if (data) { data.index = i; }
        ret = ret + fn(context[i], { data: data });
      }
    } else {
      for(var key in context) {
        if(context.hasOwnProperty(key)) {
          if(data) { data.key = key; }
          ret = ret + fn(context[key], {data: data});
          i++;
        }
      }
    }
  }

  if(i === 0){
    ret = inverse(this);
  }

  return ret;
});

Handlebars.registerHelper('if', function(conditional, options) {
  var type = toString.call(conditional);
  if(type === functionType) { conditional = conditional.call(this); }

  if(!conditional || Handlebars.Utils.isEmpty(conditional)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(conditional, options) {
  return Handlebars.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn});
});

Handlebars.registerHelper('with', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (!Handlebars.Utils.isEmpty(context)) return options.fn(context);
});

Handlebars.registerHelper('log', function(context, options) {
  var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
  Handlebars.log(level, context);
});
;
// lib/handlebars/compiler/parser.js
/* Jison generated parser */
var handlebars = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"simpleInverse":6,"statements":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"params":27,"hash":28,"dataName":29,"param":30,"STRING":31,"INTEGER":32,"BOOLEAN":33,"hashSegments":34,"hashSegment":35,"ID":36,"EQUALS":37,"DATA":38,"pathSegments":39,"SEP":40,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",31:"STRING",32:"INTEGER",33:"BOOLEAN",36:"ID",37:"EQUALS",38:"DATA",40:"SEP"},
productions_: [0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[27,2],[27,1],[30,1],[30,1],[30,1],[30,1],[30,1],[28,1],[34,2],[34,1],[35,3],[35,3],[35,3],[35,3],[35,3],[26,1],[26,1],[26,1],[29,2],[21,1],[39,3],[39,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = new yy.ProgramNode([], $$[$0]); 
break;
case 3: this.$ = new yy.ProgramNode($$[$0-2], $$[$0]); 
break;
case 4: this.$ = new yy.ProgramNode($$[$0-1], []); 
break;
case 5: this.$ = new yy.ProgramNode($$[$0]); 
break;
case 6: this.$ = new yy.ProgramNode([], []); 
break;
case 7: this.$ = new yy.ProgramNode([]); 
break;
case 8: this.$ = [$$[$0]]; 
break;
case 9: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 10: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0]); 
break;
case 11: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0]); 
break;
case 12: this.$ = $$[$0]; 
break;
case 13: this.$ = $$[$0]; 
break;
case 14: this.$ = new yy.ContentNode($$[$0]); 
break;
case 15: this.$ = new yy.CommentNode($$[$0]); 
break;
case 16: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]); 
break;
case 17: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]); 
break;
case 18: this.$ = $$[$0-1]; 
break;
case 19:
    // Parsing out the '&' escape token at this level saves ~500 bytes after min due to the removal of one parser node.
    this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2][2] === '&');
  
break;
case 20: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], true); 
break;
case 21: this.$ = new yy.PartialNode($$[$0-1]); 
break;
case 22: this.$ = new yy.PartialNode($$[$0-2], $$[$0-1]); 
break;
case 23: 
break;
case 24: this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]]; 
break;
case 25: this.$ = [[$$[$0-1]].concat($$[$0]), null]; 
break;
case 26: this.$ = [[$$[$0-1]], $$[$0]]; 
break;
case 27: this.$ = [[$$[$0]], null]; 
break;
case 28: this.$ = [[$$[$0]], null]; 
break;
case 29: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 30: this.$ = [$$[$0]]; 
break;
case 31: this.$ = $$[$0]; 
break;
case 32: this.$ = new yy.StringNode($$[$0]); 
break;
case 33: this.$ = new yy.IntegerNode($$[$0]); 
break;
case 34: this.$ = new yy.BooleanNode($$[$0]); 
break;
case 35: this.$ = $$[$0]; 
break;
case 36: this.$ = new yy.HashNode($$[$0]); 
break;
case 37: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 38: this.$ = [$$[$0]]; 
break;
case 39: this.$ = [$$[$0-2], $$[$0]]; 
break;
case 40: this.$ = [$$[$0-2], new yy.StringNode($$[$0])]; 
break;
case 41: this.$ = [$$[$0-2], new yy.IntegerNode($$[$0])]; 
break;
case 42: this.$ = [$$[$0-2], new yy.BooleanNode($$[$0])]; 
break;
case 43: this.$ = [$$[$0-2], $$[$0]]; 
break;
case 44: this.$ = new yy.PartialNameNode($$[$0]); 
break;
case 45: this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0])); 
break;
case 46: this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0])); 
break;
case 47: this.$ = new yy.DataNode($$[$0]); 
break;
case 48: this.$ = new yy.IdNode($$[$0]); 
break;
case 49: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
break;
case 50: this.$ = [{part: $$[$0]}]; 
break;
}
},
table: [{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],25:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],25:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],25:[1,16]},{17:23,18:[1,22],21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],25:[2,8]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{4:30,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{17:31,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:32,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:33,21:24,29:25,36:[1,28],38:[1,27],39:26},{21:35,26:34,31:[1,36],32:[1,37],36:[1,28],39:26},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],25:[1,16]},{17:23,21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,4],7:38,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],25:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{18:[1,39]},{18:[2,27],21:44,24:[2,27],27:40,28:41,29:48,30:42,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,28],24:[2,28]},{18:[2,48],24:[2,48],31:[2,48],32:[2,48],33:[2,48],36:[2,48],38:[2,48],40:[1,51]},{21:52,36:[1,28],39:26},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],38:[2,50],40:[2,50]},{10:53,20:[1,54]},{10:55,20:[1,54]},{18:[1,56]},{18:[1,57]},{24:[1,58]},{18:[1,59],21:60,36:[1,28],39:26},{18:[2,44],36:[2,44]},{18:[2,45],36:[2,45]},{18:[2,46],36:[2,46]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],25:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{18:[2,25],21:44,24:[2,25],28:61,29:48,30:62,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,26],24:[2,26]},{18:[2,30],24:[2,30],31:[2,30],32:[2,30],33:[2,30],36:[2,30],38:[2,30]},{18:[2,36],24:[2,36],35:63,36:[1,64]},{18:[2,31],24:[2,31],31:[2,31],32:[2,31],33:[2,31],36:[2,31],38:[2,31]},{18:[2,32],24:[2,32],31:[2,32],32:[2,32],33:[2,32],36:[2,32],38:[2,32]},{18:[2,33],24:[2,33],31:[2,33],32:[2,33],33:[2,33],36:[2,33],38:[2,33]},{18:[2,34],24:[2,34],31:[2,34],32:[2,34],33:[2,34],36:[2,34],38:[2,34]},{18:[2,35],24:[2,35],31:[2,35],32:[2,35],33:[2,35],36:[2,35],38:[2,35]},{18:[2,38],24:[2,38],36:[2,38]},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],37:[1,65],38:[2,50],40:[2,50]},{36:[1,66]},{18:[2,47],24:[2,47],31:[2,47],32:[2,47],33:[2,47],36:[2,47],38:[2,47]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{21:67,36:[1,28],39:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,68]},{18:[2,24],24:[2,24]},{18:[2,29],24:[2,29],31:[2,29],32:[2,29],33:[2,29],36:[2,29],38:[2,29]},{18:[2,37],24:[2,37],36:[2,37]},{37:[1,65]},{21:69,29:73,31:[1,70],32:[1,71],33:[1,72],36:[1,28],38:[1,27],39:26},{18:[2,49],24:[2,49],31:[2,49],32:[2,49],33:[2,49],36:[2,49],38:[2,49],40:[2,49]},{18:[1,74]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{18:[2,39],24:[2,39],36:[2,39]},{18:[2,40],24:[2,40],36:[2,40]},{18:[2,41],24:[2,41],36:[2,41]},{18:[2,42],24:[2,42],36:[2,42]},{18:[2,43],24:[2,43],36:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]}],
defaultActions: {17:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0: yy_.yytext = "\\"; return 14; 
break;
case 1:
                                   if(yy_.yytext.slice(-1) !== "\\") this.begin("mu");
                                   if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1), this.begin("emu");
                                   if(yy_.yytext) return 14;
                                 
break;
case 2: return 14; 
break;
case 3:
                                   if(yy_.yytext.slice(-1) !== "\\") this.popState();
                                   if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1);
                                   return 14;
                                 
break;
case 4: yy_.yytext = yy_.yytext.substr(0, yy_.yyleng-4); this.popState(); return 15; 
break;
case 5: return 25; 
break;
case 6: return 16; 
break;
case 7: return 20; 
break;
case 8: return 19; 
break;
case 9: return 19; 
break;
case 10: return 23; 
break;
case 11: return 22; 
break;
case 12: this.popState(); this.begin('com'); 
break;
case 13: yy_.yytext = yy_.yytext.substr(3,yy_.yyleng-5); this.popState(); return 15; 
break;
case 14: return 22; 
break;
case 15: return 37; 
break;
case 16: return 36; 
break;
case 17: return 36; 
break;
case 18: return 40; 
break;
case 19: /*ignore whitespace*/ 
break;
case 20: this.popState(); return 24; 
break;
case 21: this.popState(); return 18; 
break;
case 22: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 31; 
break;
case 23: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\'/g,"'"); return 31; 
break;
case 24: return 38; 
break;
case 25: return 33; 
break;
case 26: return 33; 
break;
case 27: return 32; 
break;
case 28: return 36; 
break;
case 29: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 36; 
break;
case 30: return 'INVALID'; 
break;
case 31: return 5; 
break;
}
};
lexer.rules = [/^(?:\\\\(?=(\{\{)))/,/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[}\/ ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:-?[0-9]+(?=[}\s]))/,/^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
lexer.conditions = {"mu":{"rules":[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"inclusive":false},"emu":{"rules":[3],"inclusive":false},"com":{"rules":[4],"inclusive":false},"INITIAL":{"rules":[0,1,2,31],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();;
// lib/handlebars/compiler/base.js

Handlebars.Parser = handlebars;

Handlebars.parse = function(input) {

  // Just return if an already-compile AST was passed in.
  if(input.constructor === Handlebars.AST.ProgramNode) { return input; }

  Handlebars.Parser.yy = Handlebars.AST;
  return Handlebars.Parser.parse(input);
};
;
// lib/handlebars/compiler/ast.js
Handlebars.AST = {};

Handlebars.AST.ProgramNode = function(statements, inverse) {
  this.type = "program";
  this.statements = statements;
  if(inverse) { this.inverse = new Handlebars.AST.ProgramNode(inverse); }
};

Handlebars.AST.MustacheNode = function(rawParams, hash, unescaped) {
  this.type = "mustache";
  this.escaped = !unescaped;
  this.hash = hash;

  var id = this.id = rawParams[0];
  var params = this.params = rawParams.slice(1);

  // a mustache is an eligible helper if:
  // * its id is simple (a single part, not `this` or `..`)
  var eligibleHelper = this.eligibleHelper = id.isSimple;

  // a mustache is definitely a helper if:
  // * it is an eligible helper, and
  // * it has at least one parameter or hash segment
  this.isHelper = eligibleHelper && (params.length || hash);

  // if a mustache is an eligible helper but not a definite
  // helper, it is ambiguous, and will be resolved in a later
  // pass or at runtime.
};

Handlebars.AST.PartialNode = function(partialName, context) {
  this.type         = "partial";
  this.partialName  = partialName;
  this.context      = context;
};

Handlebars.AST.BlockNode = function(mustache, program, inverse, close) {
  var verifyMatch = function(open, close) {
    if(open.original !== close.original) {
      throw new Handlebars.Exception(open.original + " doesn't match " + close.original);
    }
  };

  verifyMatch(mustache.id, close);
  this.type = "block";
  this.mustache = mustache;
  this.program  = program;
  this.inverse  = inverse;

  if (this.inverse && !this.program) {
    this.isInverse = true;
  }
};

Handlebars.AST.ContentNode = function(string) {
  this.type = "content";
  this.string = string;
};

Handlebars.AST.HashNode = function(pairs) {
  this.type = "hash";
  this.pairs = pairs;
};

Handlebars.AST.IdNode = function(parts) {
  this.type = "ID";

  var original = "",
      dig = [],
      depth = 0;

  for(var i=0,l=parts.length; i<l; i++) {
    var part = parts[i].part;
    original += (parts[i].separator || '') + part;

    if (part === ".." || part === "." || part === "this") {
      if (dig.length > 0) { throw new Handlebars.Exception("Invalid path: " + original); }
      else if (part === "..") { depth++; }
      else { this.isScoped = true; }
    }
    else { dig.push(part); }
  }

  this.original = original;
  this.parts    = dig;
  this.string   = dig.join('.');
  this.depth    = depth;

  // an ID is simple if it only has one part, and that part is not
  // `..` or `this`.
  this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

  this.stringModeValue = this.string;
};

Handlebars.AST.PartialNameNode = function(name) {
  this.type = "PARTIAL_NAME";
  this.name = name.original;
};

Handlebars.AST.DataNode = function(id) {
  this.type = "DATA";
  this.id = id;
};

Handlebars.AST.StringNode = function(string) {
  this.type = "STRING";
  this.original =
    this.string =
    this.stringModeValue = string;
};

Handlebars.AST.IntegerNode = function(integer) {
  this.type = "INTEGER";
  this.original =
    this.integer = integer;
  this.stringModeValue = Number(integer);
};

Handlebars.AST.BooleanNode = function(bool) {
  this.type = "BOOLEAN";
  this.bool = bool;
  this.stringModeValue = bool === "true";
};

Handlebars.AST.CommentNode = function(comment) {
  this.type = "comment";
  this.comment = comment;
};
;
// lib/handlebars/utils.js

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }
};
Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

var escapeChar = function(chr) {
  return escape[chr] || "&amp;";
};

Handlebars.Utils = {
  extend: function(obj, value) {
    for(var key in value) {
      if(value.hasOwnProperty(key)) {
        obj[key] = value[key];
      }
    }
  },

  escapeExpression: function(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof Handlebars.SafeString) {
      return string.toString();
    } else if (string == null || string === false) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = string.toString();

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  },

  isEmpty: function(value) {
    if (!value && value !== 0) {
      return true;
    } else if(toString.call(value) === "[object Array]" && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
;
// lib/handlebars/compiler/compiler.js

/*jshint eqnull:true*/
var Compiler = Handlebars.Compiler = function() {};
var JavaScriptCompiler = Handlebars.JavaScriptCompiler = function() {};

// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.

Compiler.prototype = {
  compiler: Compiler,

  disassemble: function() {
    var opcodes = this.opcodes, opcode, out = [], params, param;

    for (var i=0, l=opcodes.length; i<l; i++) {
      opcode = opcodes[i];

      if (opcode.opcode === 'DECLARE') {
        out.push("DECLARE " + opcode.name + "=" + opcode.value);
      } else {
        params = [];
        for (var j=0; j<opcode.args.length; j++) {
          param = opcode.args[j];
          if (typeof param === "string") {
            param = "\"" + param.replace("\n", "\\n") + "\"";
          }
          params.push(param);
        }
        out.push(opcode.opcode + " " + params.join(" "));
      }
    }

    return out.join("\n");
  },
  equals: function(other) {
    var len = this.opcodes.length;
    if (other.opcodes.length !== len) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      var opcode = this.opcodes[i],
          otherOpcode = other.opcodes[i];
      if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
        return false;
      }
      for (var j = 0; j < opcode.args.length; j++) {
        if (opcode.args[j] !== otherOpcode.args[j]) {
          return false;
        }
      }
    }

    len = this.children.length;
    if (other.children.length !== len) {
      return false;
    }
    for (i = 0; i < len; i++) {
      if (!this.children[i].equals(other.children[i])) {
        return false;
      }
    }

    return true;
  },

  guid: 0,

  compile: function(program, options) {
    this.children = [];
    this.depths = {list: []};
    this.options = options;

    // These changes will propagate to the other compiler components
    var knownHelpers = this.options.knownHelpers;
    this.options.knownHelpers = {
      'helperMissing': true,
      'blockHelperMissing': true,
      'each': true,
      'if': true,
      'unless': true,
      'with': true,
      'log': true
    };
    if (knownHelpers) {
      for (var name in knownHelpers) {
        this.options.knownHelpers[name] = knownHelpers[name];
      }
    }

    return this.program(program);
  },

  accept: function(node) {
    return this[node.type](node);
  },

  program: function(program) {
    var statements = program.statements, statement;
    this.opcodes = [];

    for(var i=0, l=statements.length; i<l; i++) {
      statement = statements[i];
      this[statement.type](statement);
    }
    this.isSimple = l === 1;

    this.depths.list = this.depths.list.sort(function(a, b) {
      return a - b;
    });

    return this;
  },

  compileProgram: function(program) {
    var result = new this.compiler().compile(program, this.options);
    var guid = this.guid++, depth;

    this.usePartial = this.usePartial || result.usePartial;

    this.children[guid] = result;

    for(var i=0, l=result.depths.list.length; i<l; i++) {
      depth = result.depths.list[i];

      if(depth < 2) { continue; }
      else { this.addDepth(depth - 1); }
    }

    return guid;
  },

  block: function(block) {
    var mustache = block.mustache,
        program = block.program,
        inverse = block.inverse;

    if (program) {
      program = this.compileProgram(program);
    }

    if (inverse) {
      inverse = this.compileProgram(inverse);
    }

    var type = this.classifyMustache(mustache);

    if (type === "helper") {
      this.helperMustache(mustache, program, inverse);
    } else if (type === "simple") {
      this.simpleMustache(mustache);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('blockValue');
    } else {
      this.ambiguousMustache(mustache, program, inverse);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('ambiguousBlockValue');
    }

    this.opcode('append');
  },

  hash: function(hash) {
    var pairs = hash.pairs, pair, val;

    this.opcode('pushHash');

    for(var i=0, l=pairs.length; i<l; i++) {
      pair = pairs[i];
      val  = pair[1];

      if (this.options.stringParams) {
        if(val.depth) {
          this.addDepth(val.depth);
        }
        this.opcode('getContext', val.depth || 0);
        this.opcode('pushStringParam', val.stringModeValue, val.type);
      } else {
        this.accept(val);
      }

      this.opcode('assignToHash', pair[0]);
    }
    this.opcode('popHash');
  },

  partial: function(partial) {
    var partialName = partial.partialName;
    this.usePartial = true;

    if(partial.context) {
      this.ID(partial.context);
    } else {
      this.opcode('push', 'depth0');
    }

    this.opcode('invokePartial', partialName.name);
    this.opcode('append');
  },

  content: function(content) {
    this.opcode('appendContent', content.string);
  },

  mustache: function(mustache) {
    var options = this.options;
    var type = this.classifyMustache(mustache);

    if (type === "simple") {
      this.simpleMustache(mustache);
    } else if (type === "helper") {
      this.helperMustache(mustache);
    } else {
      this.ambiguousMustache(mustache);
    }

    if(mustache.escaped && !options.noEscape) {
      this.opcode('appendEscaped');
    } else {
      this.opcode('append');
    }
  },

  ambiguousMustache: function(mustache, program, inverse) {
    var id = mustache.id,
        name = id.parts[0],
        isBlock = program != null || inverse != null;

    this.opcode('getContext', id.depth);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    this.opcode('invokeAmbiguous', name, isBlock);
  },

  simpleMustache: function(mustache) {
    var id = mustache.id;

    if (id.type === 'DATA') {
      this.DATA(id);
    } else if (id.parts.length) {
      this.ID(id);
    } else {
      // Simplified ID for `this`
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);
      this.opcode('pushContext');
    }

    this.opcode('resolvePossibleLambda');
  },

  helperMustache: function(mustache, program, inverse) {
    var params = this.setupFullMustacheParams(mustache, program, inverse),
        name = mustache.id.parts[0];

    if (this.options.knownHelpers[name]) {
      this.opcode('invokeKnownHelper', params.length, name);
    } else if (this.options.knownHelpersOnly) {
      throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name);
    } else {
      this.opcode('invokeHelper', params.length, name);
    }
  },

  ID: function(id) {
    this.addDepth(id.depth);
    this.opcode('getContext', id.depth);

    var name = id.parts[0];
    if (!name) {
      this.opcode('pushContext');
    } else {
      this.opcode('lookupOnContext', id.parts[0]);
    }

    for(var i=1, l=id.parts.length; i<l; i++) {
      this.opcode('lookup', id.parts[i]);
    }
  },

  DATA: function(data) {
    this.options.data = true;
    if (data.id.isScoped || data.id.depth) {
      throw new Handlebars.Exception('Scoped data references are not supported: ' + data.original);
    }

    this.opcode('lookupData');
    var parts = data.id.parts;
    for(var i=0, l=parts.length; i<l; i++) {
      this.opcode('lookup', parts[i]);
    }
  },

  STRING: function(string) {
    this.opcode('pushString', string.string);
  },

  INTEGER: function(integer) {
    this.opcode('pushLiteral', integer.integer);
  },

  BOOLEAN: function(bool) {
    this.opcode('pushLiteral', bool.bool);
  },

  comment: function() {},

  // HELPERS
  opcode: function(name) {
    this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
  },

  declare: function(name, value) {
    this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
  },

  addDepth: function(depth) {
    if(isNaN(depth)) { throw new Error("EWOT"); }
    if(depth === 0) { return; }

    if(!this.depths[depth]) {
      this.depths[depth] = true;
      this.depths.list.push(depth);
    }
  },

  classifyMustache: function(mustache) {
    var isHelper   = mustache.isHelper;
    var isEligible = mustache.eligibleHelper;
    var options    = this.options;

    // if ambiguous, we can possibly resolve the ambiguity now
    if (isEligible && !isHelper) {
      var name = mustache.id.parts[0];

      if (options.knownHelpers[name]) {
        isHelper = true;
      } else if (options.knownHelpersOnly) {
        isEligible = false;
      }
    }

    if (isHelper) { return "helper"; }
    else if (isEligible) { return "ambiguous"; }
    else { return "simple"; }
  },

  pushParams: function(params) {
    var i = params.length, param;

    while(i--) {
      param = params[i];

      if(this.options.stringParams) {
        if(param.depth) {
          this.addDepth(param.depth);
        }

        this.opcode('getContext', param.depth || 0);
        this.opcode('pushStringParam', param.stringModeValue, param.type);
      } else {
        this[param.type](param);
      }
    }
  },

  setupMustacheParams: function(mustache) {
    var params = mustache.params;
    this.pushParams(params);

    if(mustache.hash) {
      this.hash(mustache.hash);
    } else {
      this.opcode('emptyHash');
    }

    return params;
  },

  // this will replace setupMustacheParams when we're done
  setupFullMustacheParams: function(mustache, program, inverse) {
    var params = mustache.params;
    this.pushParams(params);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    if(mustache.hash) {
      this.hash(mustache.hash);
    } else {
      this.opcode('emptyHash');
    }

    return params;
  }
};

var Literal = function(value) {
  this.value = value;
};

JavaScriptCompiler.prototype = {
  // PUBLIC API: You can override these methods in a subclass to provide
  // alternative compiled forms for name lookup and buffering semantics
  nameLookup: function(parent, name /* , type*/) {
    if (/^[0-9]+$/.test(name)) {
      return parent + "[" + name + "]";
    } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
      return parent + "." + name;
    }
    else {
      return parent + "['" + name + "']";
    }
  },

  appendToBuffer: function(string) {
    if (this.environment.isSimple) {
      return "return " + string + ";";
    } else {
      return {
        appendToBuffer: true,
        content: string,
        toString: function() { return "buffer += " + string + ";"; }
      };
    }
  },

  initializeBuffer: function() {
    return this.quotedString("");
  },

  namespace: "Handlebars",
  // END PUBLIC API

  compile: function(environment, options, context, asObject) {
    this.environment = environment;
    this.options = options || {};

    Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n");

    this.name = this.environment.name;
    this.isChild = !!context;
    this.context = context || {
      programs: [],
      environments: [],
      aliases: { }
    };

    this.preamble();

    this.stackSlot = 0;
    this.stackVars = [];
    this.registers = { list: [] };
    this.compileStack = [];
    this.inlineStack = [];

    this.compileChildren(environment, options);

    var opcodes = environment.opcodes, opcode;

    this.i = 0;

    for(l=opcodes.length; this.i<l; this.i++) {
      opcode = opcodes[this.i];

      if(opcode.opcode === 'DECLARE') {
        this[opcode.name] = opcode.value;
      } else {
        this[opcode.opcode].apply(this, opcode.args);
      }
    }

    return this.createFunctionContext(asObject);
  },

  nextOpcode: function() {
    var opcodes = this.environment.opcodes;
    return opcodes[this.i + 1];
  },

  eat: function() {
    this.i = this.i + 1;
  },

  preamble: function() {
    var out = [];

    if (!this.isChild) {
      var namespace = this.namespace;

      var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
      if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
      if (this.options.data) { copies = copies + " data = data || {};"; }
      out.push(copies);
    } else {
      out.push('');
    }

    if (!this.environment.isSimple) {
      out.push(", buffer = " + this.initializeBuffer());
    } else {
      out.push("");
    }

    // track the last context pushed into place to allow skipping the
    // getContext opcode when it would be a noop
    this.lastContext = 0;
    this.source = out;
  },

  createFunctionContext: function(asObject) {
    var locals = this.stackVars.concat(this.registers.list);

    if(locals.length > 0) {
      this.source[1] = this.source[1] + ", " + locals.join(", ");
    }

    // Generate minimizer alias mappings
    if (!this.isChild) {
      for (var alias in this.context.aliases) {
        if (this.context.aliases.hasOwnProperty(alias)) {
          this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
        }
      }
    }

    if (this.source[1]) {
      this.source[1] = "var " + this.source[1].substring(2) + ";";
    }

    // Merge children
    if (!this.isChild) {
      this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
    }

    if (!this.environment.isSimple) {
      this.source.push("return buffer;");
    }

    var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

    for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
      params.push("depth" + this.environment.depths.list[i]);
    }

    // Perform a second pass over the output to merge content when possible
    var source = this.mergeSource();

    if (!this.isChild) {
      var revision = Handlebars.COMPILER_REVISION,
          versions = Handlebars.REVISION_CHANGES[revision];
      source = "this.compilerInfo = ["+revision+",'"+versions+"'];\n"+source;
    }

    if (asObject) {
      params.push(source);

      return Function.apply(this, params);
    } else {
      var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
      Handlebars.log(Handlebars.logger.DEBUG, functionSource + "\n\n");
      return functionSource;
    }
  },
  mergeSource: function() {
    // WARN: We are not handling the case where buffer is still populated as the source should
    // not have buffer append operations as their final action.
    var source = '',
        buffer;
    for (var i = 0, len = this.source.length; i < len; i++) {
      var line = this.source[i];
      if (line.appendToBuffer) {
        if (buffer) {
          buffer = buffer + '\n    + ' + line.content;
        } else {
          buffer = line.content;
        }
      } else {
        if (buffer) {
          source += 'buffer += ' + buffer + ';\n  ';
          buffer = undefined;
        }
        source += line + '\n  ';
      }
    }
    return source;
  },

  // [blockValue]
  //
  // On stack, before: hash, inverse, program, value
  // On stack, after: return value of blockHelperMissing
  //
  // The purpose of this opcode is to take a block of the form
  // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
  // replace it on the stack with the result of properly
  // invoking blockHelperMissing.
  blockValue: function() {
    this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

    var params = ["depth0"];
    this.setupParams(0, params);

    this.replaceStack(function(current) {
      params.splice(1, 0, current);
      return "blockHelperMissing.call(" + params.join(", ") + ")";
    });
  },

  // [ambiguousBlockValue]
  //
  // On stack, before: hash, inverse, program, value
  // Compiler value, before: lastHelper=value of last found helper, if any
  // On stack, after, if no lastHelper: same as [blockValue]
  // On stack, after, if lastHelper: value
  ambiguousBlockValue: function() {
    this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

    var params = ["depth0"];
    this.setupParams(0, params);

    var current = this.topStack();
    params.splice(1, 0, current);

    // Use the options value generated from the invocation
    params[params.length-1] = 'options';

    this.source.push("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
  },

  // [appendContent]
  //
  // On stack, before: ...
  // On stack, after: ...
  //
  // Appends the string value of `content` to the current buffer
  appendContent: function(content) {
    this.source.push(this.appendToBuffer(this.quotedString(content)));
  },

  // [append]
  //
  // On stack, before: value, ...
  // On stack, after: ...
  //
  // Coerces `value` to a String and appends it to the current buffer.
  //
  // If `value` is truthy, or 0, it is coerced into a string and appended
  // Otherwise, the empty string is appended
  append: function() {
    // Force anything that is inlined onto the stack so we don't have duplication
    // when we examine local
    this.flushInline();
    var local = this.popStack();
    this.source.push("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
    if (this.environment.isSimple) {
      this.source.push("else { " + this.appendToBuffer("''") + " }");
    }
  },

  // [appendEscaped]
  //
  // On stack, before: value, ...
  // On stack, after: ...
  //
  // Escape `value` and append it to the buffer
  appendEscaped: function() {
    this.context.aliases.escapeExpression = 'this.escapeExpression';

    this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
  },

  // [getContext]
  //
  // On stack, before: ...
  // On stack, after: ...
  // Compiler value, after: lastContext=depth
  //
  // Set the value of the `lastContext` compiler value to the depth
  getContext: function(depth) {
    if(this.lastContext !== depth) {
      this.lastContext = depth;
    }
  },

  // [lookupOnContext]
  //
  // On stack, before: ...
  // On stack, after: currentContext[name], ...
  //
  // Looks up the value of `name` on the current context and pushes
  // it onto the stack.
  lookupOnContext: function(name) {
    this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
  },

  // [pushContext]
  //
  // On stack, before: ...
  // On stack, after: currentContext, ...
  //
  // Pushes the value of the current context onto the stack.
  pushContext: function() {
    this.pushStackLiteral('depth' + this.lastContext);
  },

  // [resolvePossibleLambda]
  //
  // On stack, before: value, ...
  // On stack, after: resolved value, ...
  //
  // If the `value` is a lambda, replace it on the stack by
  // the return value of the lambda
  resolvePossibleLambda: function() {
    this.context.aliases.functionType = '"function"';

    this.replaceStack(function(current) {
      return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
    });
  },

  // [lookup]
  //
  // On stack, before: value, ...
  // On stack, after: value[name], ...
  //
  // Replace the value on the stack with the result of looking
  // up `name` on `value`
  lookup: function(name) {
    this.replaceStack(function(current) {
      return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
    });
  },

  // [lookupData]
  //
  // On stack, before: ...
  // On stack, after: data[id], ...
  //
  // Push the result of looking up `id` on the current data
  lookupData: function(id) {
    this.push('data');
  },

  // [pushStringParam]
  //
  // On stack, before: ...
  // On stack, after: string, currentContext, ...
  //
  // This opcode is designed for use in string mode, which
  // provides the string value of a parameter along with its
  // depth rather than resolving it immediately.
  pushStringParam: function(string, type) {
    this.pushStackLiteral('depth' + this.lastContext);

    this.pushString(type);

    if (typeof string === 'string') {
      this.pushString(string);
    } else {
      this.pushStackLiteral(string);
    }
  },

  emptyHash: function() {
    this.pushStackLiteral('{}');

    if (this.options.stringParams) {
      this.register('hashTypes', '{}');
      this.register('hashContexts', '{}');
    }
  },
  pushHash: function() {
    this.hash = {values: [], types: [], contexts: []};
  },
  popHash: function() {
    var hash = this.hash;
    this.hash = undefined;

    if (this.options.stringParams) {
      this.register('hashContexts', '{' + hash.contexts.join(',') + '}');
      this.register('hashTypes', '{' + hash.types.join(',') + '}');
    }
    this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
  },

  // [pushString]
  //
  // On stack, before: ...
  // On stack, after: quotedString(string), ...
  //
  // Push a quoted version of `string` onto the stack
  pushString: function(string) {
    this.pushStackLiteral(this.quotedString(string));
  },

  // [push]
  //
  // On stack, before: ...
  // On stack, after: expr, ...
  //
  // Push an expression onto the stack
  push: function(expr) {
    this.inlineStack.push(expr);
    return expr;
  },

  // [pushLiteral]
  //
  // On stack, before: ...
  // On stack, after: value, ...
  //
  // Pushes a value onto the stack. This operation prevents
  // the compiler from creating a temporary variable to hold
  // it.
  pushLiteral: function(value) {
    this.pushStackLiteral(value);
  },

  // [pushProgram]
  //
  // On stack, before: ...
  // On stack, after: program(guid), ...
  //
  // Push a program expression onto the stack. This takes
  // a compile-time guid and converts it into a runtime-accessible
  // expression.
  pushProgram: function(guid) {
    if (guid != null) {
      this.pushStackLiteral(this.programExpression(guid));
    } else {
      this.pushStackLiteral(null);
    }
  },

  // [invokeHelper]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of helper invocation
  //
  // Pops off the helper's parameters, invokes the helper,
  // and pushes the helper's return value onto the stack.
  //
  // If the helper is not found, `helperMissing` is called.
  invokeHelper: function(paramSize, name) {
    this.context.aliases.helperMissing = 'helpers.helperMissing';

    var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
    var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

    this.push(helper.name + ' || ' + nonHelper);
    this.replaceStack(function(name) {
      return name + ' ? ' + name + '.call(' +
          helper.callParams + ") " + ": helperMissing.call(" +
          helper.helperMissingParams + ")";
    });
  },

  // [invokeKnownHelper]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of helper invocation
  //
  // This operation is used when the helper is known to exist,
  // so a `helperMissing` fallback is not required.
  invokeKnownHelper: function(paramSize, name) {
    var helper = this.setupHelper(paramSize, name);
    this.push(helper.name + ".call(" + helper.callParams + ")");
  },

  // [invokeAmbiguous]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of disambiguation
  //
  // This operation is used when an expression like `{{foo}}`
  // is provided, but we don't know at compile-time whether it
  // is a helper or a path.
  //
  // This operation emits more code than the other options,
  // and can be avoided by passing the `knownHelpers` and
  // `knownHelpersOnly` flags at compile-time.
  invokeAmbiguous: function(name, helperCall) {
    this.context.aliases.functionType = '"function"';

    this.pushStackLiteral('{}');    // Hash value
    var helper = this.setupHelper(0, name, helperCall);

    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

    var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
    var nextStack = this.nextStack();

    this.source.push('if (' + nextStack + ' = ' + helperName + ') { ' + nextStack + ' = ' + nextStack + '.call(' + helper.callParams + '); }');
    this.source.push('else { ' + nextStack + ' = ' + nonHelper + '; ' + nextStack + ' = typeof ' + nextStack + ' === functionType ? ' + nextStack + '.apply(depth0) : ' + nextStack + '; }');
  },

  // [invokePartial]
  //
  // On stack, before: context, ...
  // On stack after: result of partial invocation
  //
  // This operation pops off a context, invokes a partial with that context,
  // and pushes the result of the invocation back.
  invokePartial: function(name) {
    var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

    if (this.options.data) {
      params.push("data");
    }

    this.context.aliases.self = "this";
    this.push("self.invokePartial(" + params.join(", ") + ")");
  },

  // [assignToHash]
  //
  // On stack, before: value, hash, ...
  // On stack, after: hash, ...
  //
  // Pops a value and hash off the stack, assigns `hash[key] = value`
  // and pushes the hash back onto the stack.
  assignToHash: function(key) {
    var value = this.popStack(),
        context,
        type;

    if (this.options.stringParams) {
      type = this.popStack();
      context = this.popStack();
    }

    var hash = this.hash;
    if (context) {
      hash.contexts.push("'" + key + "': " + context);
    }
    if (type) {
      hash.types.push("'" + key + "': " + type);
    }
    hash.values.push("'" + key + "': (" + value + ")");
  },

  // HELPERS

  compiler: JavaScriptCompiler,

  compileChildren: function(environment, options) {
    var children = environment.children, child, compiler;

    for(var i=0, l=children.length; i<l; i++) {
      child = children[i];
      compiler = new this.compiler();

      var index = this.matchExistingProgram(child);

      if (index == null) {
        this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
        index = this.context.programs.length;
        child.index = index;
        child.name = 'program' + index;
        this.context.programs[index] = compiler.compile(child, options, this.context);
        this.context.environments[index] = child;
      } else {
        child.index = index;
        child.name = 'program' + index;
      }
    }
  },
  matchExistingProgram: function(child) {
    for (var i = 0, len = this.context.environments.length; i < len; i++) {
      var environment = this.context.environments[i];
      if (environment && environment.equals(child)) {
        return i;
      }
    }
  },

  programExpression: function(guid) {
    this.context.aliases.self = "this";

    if(guid == null) {
      return "self.noop";
    }

    var child = this.environment.children[guid],
        depths = child.depths.list, depth;

    var programParams = [child.index, child.name, "data"];

    for(var i=0, l = depths.length; i<l; i++) {
      depth = depths[i];

      if(depth === 1) { programParams.push("depth0"); }
      else { programParams.push("depth" + (depth - 1)); }
    }

    return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
  },

  register: function(name, val) {
    this.useRegister(name);
    this.source.push(name + " = " + val + ";");
  },

  useRegister: function(name) {
    if(!this.registers[name]) {
      this.registers[name] = true;
      this.registers.list.push(name);
    }
  },

  pushStackLiteral: function(item) {
    return this.push(new Literal(item));
  },

  pushStack: function(item) {
    this.flushInline();

    var stack = this.incrStack();
    if (item) {
      this.source.push(stack + " = " + item + ";");
    }
    this.compileStack.push(stack);
    return stack;
  },

  replaceStack: function(callback) {
    var prefix = '',
        inline = this.isInline(),
        stack;

    // If we are currently inline then we want to merge the inline statement into the
    // replacement statement via ','
    if (inline) {
      var top = this.popStack(true);

      if (top instanceof Literal) {
        // Literals do not need to be inlined
        stack = top.value;
      } else {
        // Get or create the current stack name for use by the inline
        var name = this.stackSlot ? this.topStackName() : this.incrStack();

        prefix = '(' + this.push(name) + ' = ' + top + '),';
        stack = this.topStack();
      }
    } else {
      stack = this.topStack();
    }

    var item = callback.call(this, stack);

    if (inline) {
      if (this.inlineStack.length || this.compileStack.length) {
        this.popStack();
      }
      this.push('(' + prefix + item + ')');
    } else {
      // Prevent modification of the context depth variable. Through replaceStack
      if (!/^stack/.test(stack)) {
        stack = this.nextStack();
      }

      this.source.push(stack + " = (" + prefix + item + ");");
    }
    return stack;
  },

  nextStack: function() {
    return this.pushStack();
  },

  incrStack: function() {
    this.stackSlot++;
    if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
    return this.topStackName();
  },
  topStackName: function() {
    return "stack" + this.stackSlot;
  },
  flushInline: function() {
    var inlineStack = this.inlineStack;
    if (inlineStack.length) {
      this.inlineStack = [];
      for (var i = 0, len = inlineStack.length; i < len; i++) {
        var entry = inlineStack[i];
        if (entry instanceof Literal) {
          this.compileStack.push(entry);
        } else {
          this.pushStack(entry);
        }
      }
    }
  },
  isInline: function() {
    return this.inlineStack.length;
  },

  popStack: function(wrapped) {
    var inline = this.isInline(),
        item = (inline ? this.inlineStack : this.compileStack).pop();

    if (!wrapped && (item instanceof Literal)) {
      return item.value;
    } else {
      if (!inline) {
        this.stackSlot--;
      }
      return item;
    }
  },

  topStack: function(wrapped) {
    var stack = (this.isInline() ? this.inlineStack : this.compileStack),
        item = stack[stack.length - 1];

    if (!wrapped && (item instanceof Literal)) {
      return item.value;
    } else {
      return item;
    }
  },

  quotedString: function(str) {
    return '"' + str
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
      .replace(/\u2029/g, '\\u2029') + '"';
  },

  setupHelper: function(paramSize, name, missingParams) {
    var params = [];
    this.setupParams(paramSize, params, missingParams);
    var foundHelper = this.nameLookup('helpers', name, 'helper');

    return {
      params: params,
      name: foundHelper,
      callParams: ["depth0"].concat(params).join(", "),
      helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
    };
  },

  // the params and contexts arguments are passed in arrays
  // to fill in
  setupParams: function(paramSize, params, useRegister) {
    var options = [], contexts = [], types = [], param, inverse, program;

    options.push("hash:" + this.popStack());

    inverse = this.popStack();
    program = this.popStack();

    // Avoid setting fn and inverse if neither are set. This allows
    // helpers to do a check for `if (options.fn)`
    if (program || inverse) {
      if (!program) {
        this.context.aliases.self = "this";
        program = "self.noop";
      }

      if (!inverse) {
       this.context.aliases.self = "this";
        inverse = "self.noop";
      }

      options.push("inverse:" + inverse);
      options.push("fn:" + program);
    }

    for(var i=0; i<paramSize; i++) {
      param = this.popStack();
      params.push(param);

      if(this.options.stringParams) {
        types.push(this.popStack());
        contexts.push(this.popStack());
      }
    }

    if (this.options.stringParams) {
      options.push("contexts:[" + contexts.join(",") + "]");
      options.push("types:[" + types.join(",") + "]");
      options.push("hashContexts:hashContexts");
      options.push("hashTypes:hashTypes");
    }

    if(this.options.data) {
      options.push("data:data");
    }

    options = "{" + options.join(",") + "}";
    if (useRegister) {
      this.register('options', options);
      params.push('options');
    } else {
      params.push(options);
    }
    return params.join(", ");
  }
};

var reservedWords = (
  "break else new var" +
  " case finally return void" +
  " catch for switch while" +
  " continue function this with" +
  " default if throw" +
  " delete in try" +
  " do instanceof typeof" +
  " abstract enum int short" +
  " boolean export interface static" +
  " byte extends long super" +
  " char final native synchronized" +
  " class float package throws" +
  " const goto private transient" +
  " debugger implements protected volatile" +
  " double import public let yield"
).split(" ");

var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

for(var i=0, l=reservedWords.length; i<l; i++) {
  compilerWords[reservedWords[i]] = true;
}

JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
  if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
    return true;
  }
  return false;
};

Handlebars.precompile = function(input, options) {
  if (input == null || (typeof input !== 'string' && input.constructor !== Handlebars.AST.ProgramNode)) {
    throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
  }

  options = options || {};
  if (!('data' in options)) {
    options.data = true;
  }
  var ast = Handlebars.parse(input);
  var environment = new Compiler().compile(ast, options);
  return new JavaScriptCompiler().compile(environment, options);
};

Handlebars.compile = function(input, options) {
  if (input == null || (typeof input !== 'string' && input.constructor !== Handlebars.AST.ProgramNode)) {
    throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
  }

  options = options || {};
  if (!('data' in options)) {
    options.data = true;
  }
  var compiled;
  function compile() {
    var ast = Handlebars.parse(input);
    var environment = new Compiler().compile(ast, options);
    var templateSpec = new JavaScriptCompiler().compile(environment, options, undefined, true);
    return Handlebars.template(templateSpec);
  }

  // Template is only compiled on first use and cached after that point.
  return function(context, options) {
    if (!compiled) {
      compiled = compile();
    }
    return compiled.call(this, context, options);
  };
};

;
// lib/handlebars/runtime.js

Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = Handlebars.VM.program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = Handlebars.VM.program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common) {
          ret = {};
          Handlebars.Utils.extend(ret, common);
          Handlebars.Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var result = templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);

      var compilerInfo = container.compilerInfo || [],
          compilerRevision = compilerInfo[0] || 1,
          currentRevision = Handlebars.COMPILER_REVISION;

      if (compilerRevision !== currentRevision) {
        if (compilerRevision < currentRevision) {
          var runtimeVersions = Handlebars.REVISION_CHANGES[currentRevision],
              compilerVersions = Handlebars.REVISION_CHANGES[compilerRevision];
          throw "Template was precompiled with an older version of Handlebars than the current runtime. "+
                "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").";
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw "Template was precompiled with a newer version of Handlebars than the current runtime. "+
                "Please update your runtime to a newer version ("+compilerInfo[1]+").";
        }
      }

      return result;
    };
  },

  programWithDepth: function(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var program = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    program.program = i;
    program.depth = args.length;
    return program;
  },
  program: function(i, fn, data) {
    var program = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    program.program = i;
    program.depth = 0;
    return program;
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    var options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial, {data: data !== undefined});
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;
// lib/handlebars/browser-suffix.js
})(Handlebars);
;



//
// Generated on Wed Jun 05 2013 13:48:29 GMT-0400 (EDT) by Nodejitsu, Inc (Using Codesurgeon).
// Version 1.2.0
//
(function(a){function k(a,b,c,d){var e=0,f=0,g=0,c=(c||"(").toString(),d=(d||")").toString(),h;for(h=0;h<a.length;h++){var i=a[h];if(i.indexOf(c,e)>i.indexOf(d,e)||~i.indexOf(c,e)&&!~i.indexOf(d,e)||!~i.indexOf(c,e)&&~i.indexOf(d,e)){f=i.indexOf(c,e),g=i.indexOf(d,e);if(~f&&!~g||!~f&&~g){var j=a.slice(0,(h||1)+1).join(b);a=[j].concat(a.slice((h||1)+1))}e=(g>f?g:f)+1,h=0}else e=0}return a}function j(a,b){var c,d=0,e="";while(c=a.substr(d).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/))d=c.index+c[0].length,c[0]=c[0].replace(/^\*/,"([_.()!\\ %@&a-zA-Z0-9-]+)"),e+=a.substr(0,c.index)+c[0];a=e+=a.substr(d);var f=a.match(/:([^\/]+)/ig),g,h;if(f){h=f.length;for(var j=0;j<h;j++)g=f[j],g.slice(0,2)==="::"?a=g.slice(1):a=a.replace(g,i(g,b))}return a}function i(a,b,c){c=a;for(var d in b)if(b.hasOwnProperty(d)){c=b[d](a);if(c!==a)break}return c===a?"([._a-zA-Z0-9-]+)":c}function h(a,b,c){if(!a.length)return c();var d=0;(function e(){b(a[d],function(b){b||b===!1?(c(b),c=function(){}):(d+=1,d===a.length?c():e())})})()}function g(a){var b=[];for(var c=0,d=a.length;c<d;c++)b=b.concat(a[c]);return b}function f(a,b){for(var c=0;c<a.length;c+=1)if(b(a[c],c,a)===!1)return}function c(){return b.hash===""||b.hash==="#"}Array.prototype.filter||(Array.prototype.filter=function(a,b){var c=[],d;for(var e=0,f=this.length;e<f;e++)e in this&&a.call(b,d=this[e],e,this)&&c.push(d);return c}),Array.isArray||(Array.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"});var b=document.location,d={mode:"modern",hash:b.hash,history:!1,check:function(){var a=b.hash;a!=this.hash&&(this.hash=a,this.onHashChanged())},fire:function(){this.mode==="modern"?this.history===!0?window.onpopstate():window.onhashchange():this.onHashChanged()},init:function(a,b){function d(a){for(var b=0,c=e.listeners.length;b<c;b++)e.listeners[b](a)}var c=this;this.history=b,e.listeners||(e.listeners=[]);if("onhashchange"in window&&(document.documentMode===undefined||document.documentMode>7))this.history===!0?setTimeout(function(){window.onpopstate=d},500):window.onhashchange=d,this.mode="modern";else{var f=document.createElement("iframe");f.id="state-frame",f.style.display="none",document.body.appendChild(f),this.writeFrame(""),"onpropertychange"in document&&"attachEvent"in document&&document.attachEvent("onpropertychange",function(){event.propertyName==="location"&&c.check()}),window.setInterval(function(){c.check()},50),this.onHashChanged=d,this.mode="legacy"}e.listeners.push(a);return this.mode},destroy:function(a){if(!!e&&!!e.listeners){var b=e.listeners;for(var c=b.length-1;c>=0;c--)b[c]===a&&b.splice(c,1)}},setHash:function(a){this.mode==="legacy"&&this.writeFrame(a),this.history===!0?(window.history.pushState({},document.title,a),this.fire()):b.hash=a[0]==="/"?a:"/"+a;return this},writeFrame:function(a){var b=document.getElementById("state-frame"),c=b.contentDocument||b.contentWindow.document;c.open(),c.write("<script>_hash = '"+a+"'; onload = parent.listener.syncHash;<script>"),c.close()},syncHash:function(){var a=this._hash;a!=b.hash&&(b.hash=a);return this},onHashChanged:function(){}},e=a.Router=function(a){if(this instanceof e)this.params={},this.routes={},this.methods=["on","once","after","before"],this.scope=[],this._methods={},this._insert=this.insert,this.insert=this.insertEx,this.historySupport=(window.history!=null?window.history.pushState:null)!=null,this.configure(),this.mount(a||{});else return new e(a)};e.prototype.init=function(a){var e=this;this.handler=function(a){var b=a&&a.newURL||window.location.hash,c=e.history===!0?e.getPath():b.replace(/.*#/,"");e.dispatch("on",c[0]==="/"?c:"/"+c)},d.init(this.handler,this.history);if(this.history===!1)c()&&a?b.hash=a:c()||e.dispatch("on","/"+b.hash.replace(/^#/,""));else{var f=c()&&a?a:c()?null:b.hash.replace(/^#/,"");f&&window.history.replaceState({},document.title,f),(f||this.run_in_init===!0)&&this.handler()}return this},e.prototype.explode=function(){var a=this.history===!0?this.getPath():b.hash;a.charAt(1)==="/"&&(a=a.slice(1));return a.slice(1,a.length).split("/")},e.prototype.setRoute=function(a,b,c){var e=this.explode();typeof a=="number"&&typeof b=="string"?e[a]=b:typeof c=="string"?e.splice(a,b,s):e=[a],d.setHash(e.join("/"));return e},e.prototype.insertEx=function(a,b,c,d){a==="once"&&(a="on",c=function(a){var b=!1;return function(){if(!b){b=!0;return a.apply(this,arguments)}}}(c));return this._insert(a,b,c,d)},e.prototype.getRoute=function(a){var b=a;if(typeof a=="number")b=this.explode()[a];else if(typeof a=="string"){var c=this.explode();b=c.indexOf(a)}else b=this.explode();return b},e.prototype.destroy=function(){d.destroy(this.handler);return this},e.prototype.getPath=function(){var a=window.location.pathname;a.substr(0,1)!=="/"&&(a="/"+a);return a},e.prototype.configure=function(a){a=a||{};for(var b=0;b<this.methods.length;b++)this._methods[this.methods[b]]=!0;this.recurse=a.recurse||this.recurse||!1,this.async=a.async||!1,this.delimiter=a.delimiter||"/",this.strict=typeof a.strict=="undefined"?!0:a.strict,this.notfound=a.notfound,this.resource=a.resource,this.history=a.html5history&&this.historySupport||!1,this.run_in_init=this.history===!0&&a.run_handler_in_init!==!1,this.every={after:a.after||null,before:a.before||null,on:a.on||null};return this},e.prototype.param=function(a,b){a[0]!==":"&&(a=":"+a);var c=new RegExp(a,"g");this.params[a]=function(a){return a.replace(c,b.source||b)}},e.prototype.on=e.prototype.route=function(a,b,c){var d=this;!c&&typeof b=="function"&&(c=b,b=a,a="on");if(Array.isArray(b))return b.forEach(function(b){d.on(a,b,c)});b.source&&(b=b.source.replace(/\\\//ig,"/"));if(Array.isArray(a))return a.forEach(function(a){d.on(a.toLowerCase(),b,c)});b=b.split(new RegExp(this.delimiter)),b=k(b,this.delimiter),this.insert(a,this.scope.concat(b),c)},e.prototype.dispatch=function(a,b,c){function h(){d.last=e.after,d.invoke(d.runlist(e),d,c)}var d=this,e=this.traverse(a,b,this.routes,""),f=this._invoked,g;this._invoked=!0;if(!e||e.length===0){this.last=[],typeof this.notfound=="function"&&this.invoke([this.notfound],{method:a,path:b},c);return!1}this.recurse==="forward"&&(e=e.reverse()),g=this.every&&this.every.after?[this.every.after].concat(this.last):[this.last];if(g&&g.length>0&&f){this.async?this.invoke(g,this,h):(this.invoke(g,this),h());return!0}h();return!0},e.prototype.invoke=function(a,b,c){var d=this;this.async?h(a,function e(c,d){if(Array.isArray(c))return h(c,e,d);typeof c=="function"&&c.apply(b,a.captures.concat(d))},function(){c&&c.apply(b,arguments)}):f(a,function g(c){if(Array.isArray(c))return f(c,g);if(typeof c=="function")return c.apply(b,a.captures||[]);typeof c=="string"&&d.resource&&d.resource[c].apply(b,a.captures||[])})},e.prototype.traverse=function(a,b,c,d,e){function l(a){function c(a){for(var b=a.length-1;b>=0;b--)Array.isArray(a[b])?(c(a[b]),a[b].length===0&&a.splice(b,1)):e(a[b])||a.splice(b,1)}function b(a){var c=[];for(var d=0;d<a.length;d++)c[d]=Array.isArray(a[d])?b(a[d]):a[d];return c}if(!e)return a;var d=b(a);d.matched=a.matched,d.captures=a.captures,d.after=a.after.filter(e),c(d);return d}var f=[],g,h,i,j,k;if(b===this.delimiter&&c[a]){j=[[c.before,c[a]].filter(Boolean)],j.after=[c.after].filter(Boolean),j.matched=!0,j.captures=[];return l(j)}for(var m in c)if(c.hasOwnProperty(m)&&(!this._methods[m]||this._methods[m]&&typeof c[m]=="object"&&!Array.isArray(c[m]))){g=h=d+this.delimiter+m,this.strict||(h+="["+this.delimiter+"]?"),i=b.match(new RegExp("^"+h));if(!i)continue;if(i[0]&&i[0]==b&&c[m][a]){j=[[c[m].before,c[m][a]].filter(Boolean)],j.after=[c[m].after].filter(Boolean),j.matched=!0,j.captures=i.slice(1),this.recurse&&c===this.routes&&(j.push([c.before,c.on].filter(Boolean)),j.after=j.after.concat([c.after].filter(Boolean)));return l(j)}j=this.traverse(a,b,c[m],g);if(j.matched){j.length>0&&(f=f.concat(j)),this.recurse&&(f.push([c[m].before,c[m].on].filter(Boolean)),j.after=j.after.concat([c[m].after].filter(Boolean)),c===this.routes&&(f.push([c.before,c.on].filter(Boolean)),j.after=j.after.concat([c.after].filter(Boolean)))),f.matched=!0,f.captures=j.captures,f.after=j.after;return l(f)}}return!1},e.prototype.insert=function(a,b,c,d){var e,f,g,h,i;b=b.filter(function(a){return a&&a.length>0}),d=d||this.routes,i=b.shift(),/\:|\*/.test(i)&&!/\\d|\\w/.test(i)&&(i=j(i,this.params));if(b.length>0){d[i]=d[i]||{};return this.insert(a,b,c,d[i])}{if(!!i||!!b.length||d!==this.routes){f=typeof d[i],g=Array.isArray(d[i]);if(d[i]&&!g&&f=="object"){e=typeof d[i][a];switch(e){case"function":d[i][a]=[d[i][a],c];return;case"object":d[i][a].push(c);return;case"undefined":d[i][a]=c;return}}else if(f=="undefined"){h={},h[a]=c,d[i]=h;return}throw new Error("Invalid route context: "+f)}e=typeof d[a];switch(e){case"function":d[a]=[d[a],c];return;case"object":d[a].push(c);return;case"undefined":d[a]=c;return}}},e.prototype.extend=function(a){function e(a){b._methods[a]=!0,b[a]=function(){var c=arguments.length===1?[a,""]:[a];b.on.apply(b,c.concat(Array.prototype.slice.call(arguments)))}}var b=this,c=a.length,d;for(d=0;d<c;d++)e(a[d])},e.prototype.runlist=function(a){var b=this.every&&this.every.before?[this.every.before].concat(g(a)):g(a);this.every&&this.every.on&&b.push(this.every.on),b.captures=a.captures,b.source=a.source;return b},e.prototype.mount=function(a,b){function d(b,d){var e=b,f=b.split(c.delimiter),g=typeof a[b],h=f[0]===""||!c._methods[f[0]],i=h?"on":e;h&&(e=e.slice((e.match(new RegExp("^"+c.delimiter))||[""])[0].length),f.shift());h&&g==="object"&&!Array.isArray(a[b])?(d=d.concat(f),c.mount(a[b],d)):(h&&(d=d.concat(e.split(c.delimiter)),d=k(d,c.delimiter)),c.insert(i,d,a[b]))}if(!!a&&typeof a=="object"&&!Array.isArray(a)){var c=this;b=b||[],Array.isArray(b)||(b=b.split(c.delimiter));for(var e in a)a.hasOwnProperty(e)&&d(e,b.slice(0))}}})(typeof exports=="object"?exports:window);
/*
 * HTML Parser By John Resig (ejohn.org)
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * // Use like so:
 * htmlParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * // or to get an XML string:
 * HTMLtoXML(htmlString);
 *
 * // or to get an XML DOM Document
 * HTMLtoDOM(htmlString);
 *
 * // or to inject into an existing document/DOM node
 * HTMLtoDOM(htmlString, document);
 * HTMLtoDOM(htmlString, document.body);
 *
 */

(function(){

  // Regular Expressions for parsing tags and attributes
  var startTag = /^<([a-zA-Z0-9\-]+)((?:\s+[a-zA-Z0-9\-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
    endTag = /^<\/([a-zA-Z0-9\-]+)[^>]*>/,
    attr = /([a-zA-Z0-9\-]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

  // Empty Elements - HTML 4.01
  var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");

  // Block Elements - HTML 4.01
  var block = makeMap("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul,h1,h2,h3,h4,h5,h6");

  // Inline Elements - HTML 4.01
  var inline = makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

  // Attributes that have their values filled in disabled="disabled"
  var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

  // Special Elements (can contain anything)
  var special = makeMap("script,style");

  var htmlParser = this.htmlParser = function( html, handler ) {
    var index, chars, match, stack = [], last = html;
    stack.last = function(){
      return this[ this.length - 1 ];
    };

    while ( html ) {
      chars = true;

      // Make sure we're not in a script or style element
      if ( !stack.last() || !special[ stack.last() ] ) {

        // Comment
        if ( html.indexOf("<!--") == 0 ) {
          index = html.indexOf("-->");

          if ( index >= 0 ) {
            if ( handler.comment )
              handler.comment( html.substring( 4, index ) );
            html = html.substring( index + 3 );
            chars = false;
          }

        // end tag
        } else if ( html.indexOf("</") == 0 ) {
          match = html.match( endTag );

          if ( match ) {
            html = html.substring( match[0].length );
            match[0].replace( endTag, parseEndTag );
            chars = false;
          }

        // start tag
        } else if ( html.indexOf("<") == 0 ) {
          match = html.match( startTag );

          if ( match ) {
            html = html.substring( match[0].length );
            match[0].replace( startTag, parseStartTag );
            chars = false;
          }
        }

        if ( chars ) {
          index = html.indexOf("<");

          var text = index < 0 ? html : html.substring( 0, index );
          html = index < 0 ? "" : html.substring( index );

          if ( handler.chars )
            handler.chars( text );
        }

      } else {
        html = html.replace(new RegExp("(.*)<\/" + stack.last() + "[^>]*>"), function(all, text){
          text = text.replace(/<!--(.*?)-->/g, "$1")
            .replace(/<!\[CDATA\[(.*?)]]>/g, "$1");

          if ( handler.chars )
            handler.chars( text );

          return "";
        });

        parseEndTag( "", stack.last() );
      }

      if ( html == last )
        throw "Parse Error: " + html;
      last = html;
    }

    // Clean up any remaining tags
    parseEndTag();

    function parseStartTag( tag, tagName, rest, unary ) {
      if ( block[ tagName ] ) {
        while ( stack.last() && inline[ stack.last() ] ) {
          parseEndTag( "", stack.last() );
        }
      }

      if ( closeSelf[ tagName ] && stack.last() == tagName ) {
        parseEndTag( "", tagName );
      }

      unary = empty[ tagName ] || !!unary;

      if ( !unary )
        stack.push( tagName );

      if ( handler.start ) {
        var attrs = [];

        rest.replace(attr, function(match, name) {
          var value = arguments[2] ? arguments[2] :
            arguments[3] ? arguments[3] :
            arguments[4] ? arguments[4] :
            fillAttrs[name] ? name : "";

          attrs.push({
            name: name,
            value: value,
            escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
          });
        });

        if ( handler.start )
          handler.start( tagName, attrs, unary );
      }
    }

    function parseEndTag( tag, tagName ) {
      // If no tag name is provided, clean shop
      if ( !tagName )
        var pos = 0;

      // Find the closest opened tag of the same type
      else
        for ( var pos = stack.length - 1; pos >= 0; pos-- )
          if ( stack[ pos ] == tagName )
            break;

      if ( pos >= 0 ) {
        // Close all the open elements, up the stack
        for ( var i = stack.length - 1; i >= pos; i-- )
          if ( handler.end )
            handler.end( stack[ i ] );

        // Remove the open elements from the stack
        stack.length = pos;
      }
    }
  };

  this.HTMLtoXML = function( html ) {
    var results = "";

    htmlParser(html, {
      start: function( tag, attrs, unary ) {
        results += "<" + tag;

        for ( var i = 0; i < attrs.length; i++ )
          results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';

        results += (unary ? "/" : "") + ">";
      },
      end: function( tag ) {
        results += "</" + tag + ">";
      },
      chars: function( text ) {
        results += text;
      },
      comment: function( text ) {
        results += "<!--" + text + "-->";
      }
    });

    return results;
  };

  this.HTMLtoDOM = function( html, doc ) {
    // There can be only one of these elements
    var one = makeMap("html,head,body,title");

    // Enforce a structure for the document
    var structure = {
      link: "head",
      base: "head"
    };

    if ( !doc ) {
      if ( typeof DOMDocument != "undefined" )
        doc = new DOMDocument();
      else if ( typeof document != "undefined" && document.implementation && document.implementation.createDocument )
        doc = document.implementation.createDocument("", "", null);
      else if ( typeof ActiveX != "undefined" )
        doc = new ActiveXObject("Msxml.DOMDocument");

    } else
      doc = doc.ownerDocument ||
        doc.getOwnerDocument && doc.getOwnerDocument() ||
        doc;

    var elems = [],
      documentElement = doc.documentElement ||
        doc.getDocumentElement && doc.getDocumentElement();

    // If we're dealing with an empty document then we
    // need to pre-populate it with the HTML document structure
    if ( !documentElement && doc.createElement ) (function(){
      var html = doc.createElement("html");
      var head = doc.createElement("head");
      head.appendChild( doc.createElement("title") );
      html.appendChild( head );
      html.appendChild( doc.createElement("body") );
      doc.appendChild( html );
    })();

    // Find all the unique elements
    if ( doc.getElementsByTagName )
      for ( var i in one )
        one[ i ] = doc.getElementsByTagName( i )[0];

    // If we're working with a document, inject contents into
    // the body element
    var curParentNode = one.body;

    htmlParser( html, {
      start: function( tagName, attrs, unary ) {
        // If it's a pre-built element, then we can ignore
        // its construction
        if ( one[ tagName ] ) {
          curParentNode = one[ tagName ];
          return;
        }

        var elem = doc.createElement( tagName );

        for ( var attr in attrs )
          elem.setAttribute( attrs[ attr ].name, attrs[ attr ].value );

        if ( structure[ tagName ] && typeof one[ structure[ tagName ] ] != "boolean" )
          one[ structure[ tagName ] ].appendChild( elem );

        else if ( curParentNode && curParentNode.appendChild )
          curParentNode.appendChild( elem );

        if ( !unary ) {
          elems.push( elem );
          curParentNode = elem;
        }
      },
      end: function( tag ) {
        elems.length -= 1;

        // Init the new parentNode
        curParentNode = elems[ elems.length - 1 ];
      },
      chars: function( text ) {
        curParentNode.appendChild( doc.createTextNode( text ) );
      },
      comment: function( text ) {
        // create comment node
      }
    });

    return doc;
  };

  function makeMap(str){
    var obj = {}, items = str.split(",");
    for ( var i = 0; i < items.length; i++ )
      obj[ items[i] ] = true;
    return obj;
  }
})();
var udare = udare || {};

var udare = (function(undefined) {
  var Udare = function() {
    this.modules = {};

    this.controllers = {};
    this.services = {};
    this.controllersScopes = {};
    this.filters = {};
    this.formatters = {};
    this.components = {};
  };
  Udare.prototype.bootstrap = function(dom, app) {
    //console.log('Udare.prototype.bootstrap', arguments);

    //console.log(dom, app);
  };

  return new Udare();
})();
udare.logProvider = (function(undefined) {
  var LogProvider = function() {
    this.enabled = true;
  };
  LogProvider.prototype.setEnabled = function(enabled) {
    this.enabled = enabled;
  };
  LogProvider.prototype.debug = function() {
    !!this.enabled && console.debug(arguments);
  };
  LogProvider.prototype.error = function() {
    !!this.enabled && console.error(arguments);
  };
  LogProvider.prototype.info = function() {
    !!this.enabled && console.info(arguments);
  };
  LogProvider.prototype.log = function() {
    !!this.enabled && console.log(arguments);
  };
  LogProvider.prototype.warn = function() {
    !!this.enabled && console.warn(arguments);
  };

  var provider = new LogProvider();
  provider.info('udare.logProvider');

  return provider;
})();

udare.log = udare.logProvider;
udare.q = (function(q, log, undefined) {
  log.info('udare.q');
  
  return Q;
})(Q, udare.log);
udare.utils = (function(log, undefined) {
  log.info('udare.utils');

  return {
    STRIP_COMMENTS : /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,

    ucfirst : function(str) {
      return str.charAt(0).toUpperCase() + str.substr(1);
    },

    camelCase : function(str) {
      return str.replace(/-+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    },

    getFuncName : function(func) {
      var fnStr  = func.toString().replace(this.STRIP_COMMENTS, '');
      var fnName = fnStr.match(/function\s+(.*)\(/m)[1];

      return fnName;
    },

    getParamNames : function(func) {
      var fnStr = func.toString().replace(this.STRIP_COMMENTS, '');
      var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(/([^\s,]+)/g);
      
      if(result === null)
        result = [];
      
      return result;
    },

    createUUID : function() {
      // http://www.ietf.org/rfc/rfc4122.txt
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";

      var uuid = s.join("");
      return uuid;
    },

    replace : function(source, object, regexp) {
      return String(source).replace(regexp || (/\\?\{{([^{}]+)\}}/g), function(match, name) {
        return object[name] ? object[name] : match;
      });
    },

    scopeVarsFromSource : function(source) {
      var vars = source.match(/\\?\{{([^{}]+)\}}/g);
      var out = [];
      for(var i = 0, l = vars.length; i < l; i++) {
        var scopeVar = vars[i].replace('{{', '').replace('}}', '');
        out.push(scopeVar);
      }

      return out;
    }
  };
})(udare.log);
udare.injector = (function(modules, utils, log, undefined) {
  log.info('udare.injector');

  var Injector = function() {};
  Injector.prototype.inject = function(fn, module) {
    var dependencies = [];
    var serviceDependencies = utils.getParamNames(fn);
    
    var others = [];
    var keys = ['controllers', 'services', 'filters', 'formatters', 'components'];
    for(var index in serviceDependencies) {
      var serviceDependency = serviceDependencies[index];

      for(var index in keys) {
        if(utils.ucfirst(serviceDependency) in udare[keys[index]]) {
          dependencies.push(udare[keys[index]][utils.ucfirst(serviceDependency)]);
        }
      }

      if(udare[serviceDependency] && serviceDependency !== 'scope') {
        dependencies.push(udare[serviceDependency]);
      } else if(serviceDependency !== 'scope') {
        others.push(serviceDependency);
      }
    }

    if(others.length > 0) {
      for(var i in others) {
        var other = others[i];
        for(var dep in modules[module].dependencies) {
          if(utils.ucfirst(utils.camelCase(other)) === utils.ucfirst(utils.camelCase(utils.getFuncName(modules[module].dependencies[dep])))) {
            var instance = new modules[module].dependencies[dep];
            dependencies.push(instance);
          }
        }
      }
    }

    return dependencies;
  };

  return new Injector();
})(udare.modules, udare.utils, udare.log);
udare.pubsub = (function(log, undefined) {
  log.info('udare.pubsub');

  var PubSub = {};
  var cache = PubSub.c_ || {};
  
  PubSub.publish = function(topic, args) {
    var subs = cache[topic], len = subs ? subs.length : 0;

    while(len--) {
      subs[len].apply(PubSub, args || []);
    }
  };

  PubSub.subscribe = function(topic, callback) {
    if(!cache[topic]) {
      cache[topic] = [];
    }

    cache[topic].push(callback);

    return [topic, callback];
  };

  PubSub.unsubscribe = function(topic) {
    delete cache[topic];
  };

  return PubSub;
})(udare.log);
udare.watcher = (function(utils, log, undefined) {
	log.info('udare.watcher');

	var watchers = {};

	var Watcher = function() {
	};
	Watcher.prototype.watch = function(obj, watcher) {
		var watcherId = utils.createUUID();

		var oldval = JSON.stringify(obj);
		watchers[watcherId] = setInterval(function() {
  		var newval = JSON.stringify(this);
  		if(oldval !== newval) {
    		oldval = newval;

    		watcher.call(watcher, this);
  		} 
  	}.bind(obj), 50);
	};
	Watcher.prototype.unwatch = function(id) {
		clearInterval(watchers[id]);
	};

	return new Watcher();
})(udare.utils, udare.log);
udare.scope = (function(utils, pubsub, watcher, log, undefined) {
  log.info('udare.scope');

  var Scope = function(vars) {
    try {
      this.id = utils.createUUID();
      
      for(var i = 0, l = vars.length; i < l; i++) {
        Object.defineProperty(this, vars[i], {
          enumerable: true,
          writable: true,
          configurable: true
        });
      }

      watcher.watch(this, function(obj) {
        pubsub.publish('executor.execute', [obj]);
      });
    } catch(e) {
      log.error(e.message);
    }
  };

  return function(vars) {
    return new Scope(vars);
  };
})(udare.utils, udare.pubsub, udare.watcher, udare.log);
/**
 * TODO
 *
 * use example: expressions.parse(expression)
 *
 * {{ 1 + 2 }}
 * {{ click() }}
 * {{ name.tal }}
 */
udare.expressions = (function(log, undefined) {
  log.info('udare.expressions');
  
	var parse = function(source) {
      var parts = {};      

      //var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
      //var FN_ARG_SPLIT = /,/;
      //var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;

      parts.name = source.match(/^(.*)\(/mi)[1];
      parts.arguments = source.match(/^\s*[^\(]*\(\s*([^\)]*)\)/m)[1].split(/,/);

      //console.log('udare.expressions', parts);
      
      return parts;
  };

  return {
  	parse : parse
  };
})(udare.log);
udare.events = (function(expressions, log, d, undefined) {
  log.info('udare.events');
  
  var events = 'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' ');
  
  var Events = function(node) {
    this.node = node;
  };
  Events.prototype.parse = function(context) {
    var nodes = this.node.querySelectorAll('*');
    
    for (var i = 0, max = nodes.length; i < max; i++) {
      var node = nodes[i];
      for(var j = 0, el = events.length; j < el; j++) {                    
        if(node.getAttribute('data-' + events[j])) {
          node.addEventListener(events[j], function(eventName, ctx, event) {
            var f = expressions.parse(event.target.getAttribute('data-' + eventName));
            f.arguments.push(event);

            var callbackParts = f.name.split('.');
            var ctrl  = callbackParts[0];
            var fname = callbackParts[1]

            ctx[ctrl][fname].apply(ctx[ctrl][fname], f.arguments);          
          }.bind(this, events[j], context), false);
        }
      }
    }
  };

  return function(node) {
    return new Events(node);
  }
})(udare.expressions, udare.log, document);
udare.dom = (function(utils, log, undefined) {
  log.info('udare.dom');

  var getNodeList = function(elem) {
    var l = new Array(elem), c = 1, ret = [];
    //var l = [].push(elem), c = 1, ret = [];
    for(var r = 0; r < c; r++) { 
      for(var z = 0; z < l[r].childNodes.length; z++) {
        ret.push(l[r].childNodes[z]);

        if(l[r].childNodes[z].childNodes[0]) {
          l.push(l[r].childNodes[z]);
          c++;
        }         
      }
    }

    return ret;
  };

  var DOM = function(container) {
    this.container = container;
    this.formElements = {};
    this.activeElement = document.activeElement;
  };
  DOM.prototype.listener = function(elements, events, scopes) {
    for(var elementIndex in elements) {
      var element = elements[elementIndex];

      if(element && element.getAttribute) {
        var model = element.getAttribute('data-model');

        if(model) {
          var modelParts = model.split('.');
          var modelController = modelParts[0];
          var modelName = modelParts[1];

          if(scopes[modelController][modelName]) {
            element.value = scopes[modelController][modelName];
          }

          for(var eventIndex in events) { 
            var evName = events[eventIndex];
            if(evName) {

              element.addEventListener(evName, function(s, c, n, e) {
                var input = e.target;
                this.activeElement = input;

                var value = input.value ? input.value : input.textContent;
                s[c][n] = value;
              }.bind(this, scopes, modelController, modelName));
            }
          }
        }
      }
    }
  };
  DOM.prototype.setHTML = function(html) {
    this.container.innerHTML = html;

    return this;
  };
  DOM.prototype.getHTML = function() {
    return this.container.innerHTML;
  };
  DOM.prototype.saveFormElementsStates = function() {
    this.formElements = {};
    var formElementsTypesAndAttributes = {
      //'input' : ['accept', 'accesskey', 'align', 'alt', 'checked', 'disabled', 'maxlength', 'name', 'readonly', 'size', 'src', 'tabindex', 'type', 'usemap', 'value'],
        /*
        'text' : ['']
        'button' : [], 
        'checkbox' : [],
        'file' : [],
        'hidden' : [],
        'image' : [], 
        'password' : [],
        'radio' : [], 
        'reset' : [],
        'submit' : []
        */
      //'textarea': ['accesskey', 'cols', 'disabled', 'name', 'readonly', 'rows', 'tabindex', 'value'],
      //'select': ['accesskey', 'disabled', 'multiple', 'name', 'size', 'tabindex'],
      //'option': ['disabled', 'label', 'selected', 'value']

      'input' : ['checked', 'disabled', 'maxlength', 'name', 'readonly', 'tabindex', 'type', 'value'],
      'textarea': ['accesskey', 'cols', 'disabled', 'name', 'readonly', 'rows', 'tabindex', 'value'],
      'select': ['accesskey', 'disabled', 'multiple', 'name', 'size', 'tabindex'],
      'option': ['disabled', 'selected', 'value']
    };
    var formElements = this.container.querySelectorAll(Object.keys(formElementsTypesAndAttributes).join(','));
    
    for(var i = 0, l = formElements.length; i < l; i++) {
      var formElement = formElements[i];
      var tagName = formElement.tagName.toLowerCase();
      var formElementState = {};

      if(tagName === 'input' || tagName === 'textarea' || tagName === 'select' || tagName === 'option') {
        for(var attrIndex in formElementsTypesAndAttributes[tagName]) {
          var attr = formElementsTypesAndAttributes[tagName][attrIndex];
          formElementState[attr] = formElement[attr]; // file value change
        }

        var formElementId = formElement.offsetTop + '-' + formElement.offsetLeft;

        this.formElements[formElementId] = {
          element: formElement,
          state: formElementState
        };
      }
    }

    return this;
  };
  DOM.prototype.loadFormElementsStates = function() {
    var formElements = this.container.querySelectorAll('input,textarea,select,option');

    for(var id in formElements) {
      var element = formElements[id];
      var elementId = element.offsetTop + '-' + element.offsetLeft;

      if(Object.keys(this.formElements).indexOf(elementId) > -1) {
        var state = this.formElements[elementId].state;
        for(var attr in state) {
          element[attr] = state[attr];
        }
      }
    }

    return this;
  };
  DOM.prototype.inputs = function(scopes) {
    this.listener(
      document.getElementsByTagName('input'), 
      ['keypress', 'keyup', 'keydown', 'change'],
      scopes
    );

    return this;
  };
  DOM.prototype.textareas = function(scopes) {
    this.listener(
      document.getElementsByTagName('textarea'), 
      ['keypress', 'keyup', 'keydown', 'change'], 
      scopes
    );

    return this;
  };
  DOM.prototype.setActiveElement = function() {    
    var nodeList = getNodeList(this.container);

    for(var key in nodeList) {
      var node = nodeList[key];

      if(node.outerHTML === this.activeElement.outerHTML) {
        if(node.setSelectionRange) {
          node.focus();
          var l = node.value.length * 2;
          node.setSelectionRange(l, l);
        }
      }
    };

    return this;
  };

  return function(container) {
    return new DOM(container);
  };
})(udare.utils, udare.log);
udare.compiler = (function(componentsRepository, controllersRepository, utils, scope, filters, q, log, undefined) {
  log.info('udare.compiler');

  var Compiler = function() {};
  Compiler.prototype.replace = function(html, matches) {
    var output = html;
    for(var i = 0, l = matches.length; i < l; i++) {
      var match = matches[i];
      output = output.replace(match.oldtext, match.newtext);
    }

    return output;
  };
  Compiler.prototype.compile = function(html, mainCrtl, callback) {
    html = html.split("\n").join("");

    (function() {
      var controllers = {};

      if(mainCrtl) {
        controllers[mainCrtl] = {
          vars : []
        };
      }

      var deferred = q.defer();
      var ctrlIndex = 0;
      var tagCtrl = null;
      var output = [];

      var intoList = false;

      var events = 'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' ');

      htmlParser(html, {
        start: function(tag, attrs, unary) {
          var ctrlName;
          for(var i = 0, l = attrs.length; i < l; i++) {
            var attr = attrs[i];

            if(attr.name === 'data-controller') {
              ctrlIndex++;
              tagCtrl = tag;
              controllers[attr.value] = {
                vars : []
              };
            }

            if(attr.name === 'data-model') {
              ctrlName = Object.keys(controllers)[ctrlIndex];
              controllers[ctrlName].vars.push(attr.value);
            }

            if(attr.name.substring(0, 4) === 'data' && attr.name !== 'data-controller') {
              ctrlName = Object.keys(controllers)[ctrlIndex];

              output.push({
                oldtext : attr.name + '="' + attr.value + '"',
                newtext : attr.name + '="' + ctrlName + '.' + attr.value + '"'
              });
            }

            /*
            if(attr.name.substring(0, 4) === 'data') {
              var eventName = attr.name.split('-')[1];
              if(events.indexOf(eventName) > -1) {              
                var ctrlName = Object.keys(controllers)[ctrlIndex];

                output.push({
                  oldtext : attr.name + '="' + attr.value + '"',
                  newtext : attr.name + '="' + ctrlName + '.' + attr.value + '"'
                });
              }
            }
            */
          }
        },
        end: function(tag) {
          if(tagCtrl === tag) {
            --ctrlIndex;
          }
        },
        chars: function(text) {
          var ctrlName = Object.keys(controllers)[ctrlIndex];
          
          var testPattern = /{{.*}}/;
          var matchPattern = /{{([^}}]+)}}/g;

          if(testPattern.test(text)) {
            var newtext = text.replace(matchPattern, function(match, name) {
              if(name !== '.') {
                if(name.charAt(0) === '#') {
                  intoList = true;

                  var parts = name.split(" ");
                  if(parts.length > 1) {
                    return '{{' + parts[0] + " " + ctrlName + '.' + parts[1]  + ' ' + parts.splice(2, parts.length).join(" ") + '}}';
                  }

                  return '{{#' + ctrlName + '.' + name.substring(1, name.length) + '}}';
                }

                if(name.charAt(0) === '/') {
                  intoList = false;

                  if(Object.keys(filters).indexOf(name.substring(1, name.length)) === -1) {
                    return '{{/' + ctrlName + '.' + name.substring(1, name.length) + '}}';
                  } else {
                    return '{{' + name + '}}'; 
                  }
                }

                if(name.charAt(0) === '@') {
                  return '{{@' + name.substring(1, name.length) + '}}';
                }

                if(intoList) {
                  return '{{' + name + '}}';
                } else {
                  return '{{' + ctrlName + '.' + name + '}}';
                }
              }

              if(name === '.') {
                return match;
              }
            });

            output.push({
              oldtext : text,
              newtext : newtext
            });
          }
        }
      });

      deferred.resolve({
        c : controllers, 
        o : output
      });

      return deferred.promise;
    })().then(function(html, obj) {
      var ctrls = {};
      for(var ctrlName in obj.c) {
        var scopeVars = obj.c[ctrlName].vars;
        var ctrlScope = scope(scopeVars);

        controllersRepository[ctrlName].init(ctrlScope);
        ctrls[ctrlName] = controllersRepository[ctrlName];
      }

      if(callback) {
        callback.call(callback, ctrls, this.replace(html, obj.o), mainCrtl);
      }
    }.bind(this, html));
  };

  return new Compiler();
})(udare.components, udare.controllers, udare.utils, udare.scope, udare.filters, udare.q, udare.log);
udare.executor = (function(controllersRepository, componentsRepository, pubsub, events, dom, utils, q, log, H, undefined) {
  log.info('udare.executor');

  var Executor = function() {
    this.controllers = null;
    this.html = null;
    this.container = null;
  };
  Executor.prototype.setControllers = function(controllers) {
    this.controllers = controllers;
  };
  Executor.prototype.getControllers = function() {
    return this.controllers;
  };
  Executor.prototype.setHTML = function(html) {
    this.html = html;
  };
  Executor.prototype.getHTML = function() {
    return this.html;
  };
  Executor.prototype.setContainer = function(container) {
    this.container = container;
  };
  Executor.prototype.getContainer = function() {
    return this.container;
  };
  Executor.prototype.execute = function(mainCrtl) {
    
    var execute = function(changedScope) {
      var controllers = this.getControllers();

      for(var ctrlName in controllers) {
        var ctrl = controllers[ctrlName];

        if(changedScope && ctrl.scope && ctrl.scope.id === changedScope.id) {
          ctrl.scope = changedScope;
        }
      }

      var context = {};
      for(var ctrlName in controllers) {
        var ctrl = controllers[ctrlName];
        context[ctrlName] = ctrl.scope;
      }

      var template = H.compile(this.getHTML());
      var output = template(context);

      var container = this.getContainer();

      var domInstance = dom(container)
        .saveFormElementsStates()
        .setHTML(output);//.setActiveElement();

      var ctrlIndex = 0;
      var tagCtrl = null;
      controllers = {};
      
      if(mainCrtl) {
        controllers[mainCrtl] = {};
      }

      var tagScopesMap = {};

      var index = 0;
      htmlParser(dom(container).getHTML(), {
        start: function(tag, attrs, unary) {
          var componentName;

          var controllerKeys = Object.keys(controllers);

          if(controllerKeys.length > 0) {
            var ctrlName = Object.keys(controllers)[ctrlIndex].split('.')[0];

            tagScopesMap[index + tag.toLowerCase()] = {
              name : ctrlName,
              scope : controllersRepository[ctrlName].scope
            };
            index++;
          
            for(var i = 0, l = attrs.length; i < l; i++) {
              var attr = attrs[i];

              if(attr.name === 'data-controller') {
                ctrlIndex++
                tagCtrl = tag;
                controllers[attr.value] = {}
              }
            }
          }
        },
        end: function(tag) {
          if(tagCtrl === tag) {
            --ctrlIndex;
          }
        }
      });

      var componentName;
      var tags = Array.prototype.slice.call(container.getElementsByTagName('*'));

      for(var index in tags) {
        var tag = tags[index];
        var attrs = tag.attributes ? Array.prototype.slice.call(tag.attributes) : [];
        attrs = attrs.map(function(attr) {
          return {
            name : attr.name,
            value : attr.value
          };
        });

        if(tag.tagName && (componentName = utils.components.isElementComponent(tag.tagName.toLowerCase()))) {
          var tagScope = tagScopesMap[index + tag.tagName.toLowerCase()];
          componentsRepository[componentName].compose(tagScope.name, tagScope.scope, tag, attrs, 'E');
        }

        if(attrs.length > 0 && (componentName = utils.components.isAttributeComponent(attrs))) {
          var tagScope = tagScopesMap[index + tag.tagName.toLowerCase()];
          componentsRepository[componentName].compose(tagScope.name, tagScope.scope, tag, attrs, 'A');
        }

        if(attrs.length > 0 && (componentName = utils.components.isClassComponent(attrs))) {
          var tagScope = tagScopesMap[index + tag.tagName.toLowerCase()];
          componentsRepository[componentName].compose(tagScope.name, tagScope.scope, tag, attrs, 'C');
        }
      }

      domInstance
        .loadFormElementsStates()
        .inputs(context) // TODO
        .setActiveElement();

      events(container).parse(context);
    };
    
    pubsub.unsubscribe('executor.execute');
    pubsub.subscribe('executor.execute', execute.bind(this));   
    pubsub.publish('executor.execute', []);
  };

  return Executor;
})(udare.controllers, udare.components, udare.pubsub, udare.events, udare.dom, udare.utils, udare.q, udare.log, Handlebars);
udare.module = (function(modules, injector, log, undefined) {
  log.info('udare.module');
  
  var Module = function(name, dependencies) {
    /*
    if(dependencies.length > 0)
      console.log('module', dependencies);
    */

    this.name = name;
    this.dependencies = dependencies;

    /*
    this.controllers = {};
    this.services = {};
    this.filters = {};
    this.formatters = {};
    this.components = {};
    */
  };
  Module.prototype.config = function(f) {
    f.apply(f, injector.inject(f));
  };
  Module.prototype.run = function(f) {
    f.apply(f, injector.inject(f));
  };
  Module.prototype.filter = function(name, filter) {
    udare.filter(name, filter);
  };
  Module.prototype.formatter = function(name, formatter) {
    udare.formatter(name, formatter);
  };
  Module.prototype.controller = function(name, controller) {
    udare.controller(name, controller, this.name);
  };
  Module.prototype.service = function(name, service) {
    udare.service(name, service, this.name);
  };
  Module.prototype.component = function(name, component) {
    udare.component(name, component);
  };

  return function(name, dependencies) {
    return modules[name] = new Module(name, dependencies);
  };
})(udare.modules, udare.injector, udare.log);
udare.filter = (function(filters, log, H, undefined) {
  log.info('udare.filter');

	var Filter = function(name, filter) {
    H.registerHelper(name, function() {
      return filter.apply(this, arguments);
    }.bind(this));
	};
  Filter.prototype.filter = function(data, options) {
    var o = [];

    for(var i = 0, l = data.length; i < l; i++) {
      options.data.index = i;
      o.push(options.fn(data[i], options.data));
    }

    return o.join("");
  };
  
	return function(name, filter) {
		return filters[name] = new Filter(name, filter);
	}
})(udare.filters, udare.log, Handlebars);
udare.formatter = (function(formatters, log, H, undefined) {
  log.info('udare.formatter');

	var Formatter = function(name, formatter) {
    H.registerHelper(name, function() {
      return formatter.apply(this, arguments);
    }.bind(this));
	};
  
	return function(name, formatter) {
		return formatters[name] = new Formatter(name, formatter);
	}
})(udare.formatters, udare.log, Handlebars);
udare.service = (function(services, injector, log, undefined) {
  log.info('udare.service');

  var Service = function(name, service, module) {
    this.name = name;
    service.apply(this, injector.inject(service, module));
  };

  return function(name, service, module) {
    return services[name] = new Service(name, service, module);
  };  
})(udare.services, udare.injector, udare.log);
udare.controller = (function(controllers, scope, injector, q, log, undefined) {
  log.info('udare.controller');
  
  var Controller = function(name, controller, module) {
    this.name = name;
    this.controller = controller;

    this.dependencies = injector.inject(controller, module);
  };
  Controller.prototype.init = function(scope) {
    this.scope  = scope;

    var dependencies = [];
    
    dependencies.unshift(scope);
    dependencies = dependencies.concat(this.dependencies);

    this.controller.apply(this.controller, dependencies);
  };

  return function(name, controller, module) {
    return controllers[name] = new Controller(name, controller, module);
  };
})(udare.controllers, udare.scope, udare.injector, udare.q, udare.log);
udare.component = (function(components, injector, utils, log, H, undefined) {
  log.info('udare.component');

  if(!utils.components) {
    utils.components = {};
  }

  var Component = function(name, component) {
    this.name = name;
    this.component = component;
  };
  Component.prototype.compose = function(ctrlName, scope, tag, attrs, composeBy) {
    var component = this.component.apply(this.component);

    var replace = function(component, tag) {
      var matches = [];
      htmlParser(component.template, {
        start : function(tag, attrs, unary) {
          for(var i = 0, l = attrs.length; i < l; i++) {
            var attr = attrs[i];
            if(attr.name.substring(0, 4) === 'data') {
              matches.push({
                oldtext : attr.name + '="' + attr.value + '"',
                newtext : attr.name + '="' + ctrlName + '.' + attr.value + '"'
              });
            }
          }
        }
      });

      var outputTemplate = component.template;
      for(var i = 0, l = matches.length; i < l; i++) {
        var match = matches[i];
        outputTemplate = outputTemplate.replace(match.oldtext, match.newtext);
      }

      var template = H.compile(outputTemplate);
      var output = template(scope);

      var wrapper = document.createElement('div');
      wrapper.innerHTML = output;

      if(component.replace === true) {
        var copy = wrapper.firstChild;
        tag.parentNode.replaceChild(wrapper.firstChild, tag);

        return copy;
      }

      return tag;
    };  

    var _attrs = {};
    for(var index in attrs) {
      var attr = attrs[index];
      _attrs[attr.name] = attr.value;
    }

    if(composeBy === 'E' && component.restrict.indexOf('E') > -1) {
      component.link.apply(component.link, [scope, replace(component, tag), _attrs]);
    }

    if(composeBy === 'A' && component.restrict.indexOf('A') > -1) {
      component.link.apply(component.link, [scope, replace(component, tag), _attrs]);
    }

    if(composeBy === 'C' && component.restrict.indexOf('C') > -1) {
      component.link.apply(component.link, [scope, replace(component, tag), _attrs]);
    }
  };

  utils.components.isElementComponent = function(name) {
    return components[name] ? name : false;
  };

  utils.components.isAttributeComponent = function(attrs) {
    for( var index in attrs) {
      var attrName = attrs[index].name;
      if(components[attrName]) {
        return attrName;
      }
    }

    return false;
  };

  utils.components.isClassComponent = function(attrs) {
    for( var index in attrs) {
      var attrName = attrs[index].name;
      if(attrName === 'class') {
        var classNames = attrs[index].value.split(' ');

        for(var classIndex in classNames) {
          var className = classNames[classIndex];
          if(components[className]) {
            return className;
          }
        }
      }
    }

    return false;
  };

  return function(name, component) {
    return components[name] = new Component(name, component);
  };  
})(udare.components, udare.injector, udare.utils, udare.log, Handlebars);
udare.requestProvider = (function(q, log, undefined) {
  log.info('udare.request');

  q.stopUnhandledRejectionTracking();

  var Request = function() {
    this.withCredentials = false;
  };
  Request.prototype.enableCredentials = function() {
    this.withCredentials = true;
  };
  Request.prototype.init = function(options) {
    options = options || {};
    options.method  = options.method || 'GET';
    options.headers = options.headers || {};
    options.cache   = options.cache || false;
    options.async   = options.async && options.async === false ? false : true;
    options.timeout = options.timeout || 0;

    var deferred = q.defer();

    if(!options.url) {
      throw new Error("Url is needed");
    }

    var toQueryString = function(obj) {
      var parts = [];
      for (var i in obj) {
        if(obj.hasOwnProperty(i)) {
          parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
      }
      return parts.join("&");
    };

    var appendQuery = function(url, query) {
      if (query == '') return url;
      return (url + '&' + query).replace(/[&?]{1,2}/, '?');
    };

    var createCORSRequest = function(method, url) {
      var xhr = new XMLHttpRequest();

      if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);

      } else {
        xhr = null;
      }
      
      return xhr;
    };

    if(options.params) {
      options.url = appendQuery(options.url, toQueryString(options.params));
    }

    if(options && options.data) {
      options.headers['Content-Type'] = (options.headers['Content-Type'] || 'application/x-www-form-urlencoded');
      var queryString = options.data ? toQueryString(options.data) : null;
      if(queryString) {
        options.headers["Content-length"] = queryString.length;
      }
    }

    if(options.cache) {
      options.url = appendQuery(options.url, '_=' + +new Date());
    }

    var request = createCORSRequest(options.method, options.url);

    if(options && options.headers) {
      Object.keys(options.headers).forEach(function (key) {
        request.setRequestHeader(key, options.headers[key]);
      });       
    }

    if(this.withCredentials) {
      request.withCredentials = true;
    }

    request.onload = function() {
      if(request.status === 200) {
        deferred.resolve(request.responseText);
      } else {
        deferred.reject(new Error("Status code was " + request.status));
      }
    };
    request.onerror = function() {
      deferred.reject(new Error("Can't XHR " + JSON.stringify(options.url)));
    };
    request.onprogress = function(event) {
      deferred.notify(event.loaded / event.total);
    };

    if(options.timeout > 0) {
      var timeout = setTimeout(function() {
        xhr.onreadystatechange = function() {};
        xhr.abort();
        clearTimeout(timeout);
      }, options.timeout);
    }

    request.send(options && options.data ? toQueryString(options.data) : null);

    return deferred.promise;
  };
  Request.prototype.get = function(url, options) {
    options = options || {};
    options.method = 'GET';
    options.url = url;    
    
    return this.init(options);
  };
  Request.prototype.post = function(url, options) {
    options = options || {};
    options.method = 'POST';
    options.url = url;    
    
    return this.init(options);
  };
  Request.prototype.put = function(url, options) {
    options = options || {};
    options.method = 'PUT';
    options.url = url;    
    
    return this.init(options);
  };
  Request.prototype.delete = function(url, options) {
    options = options || {};
    options.method = 'DELETE';
    options.url = url;    
    
    return this.init(options);
  };
  Request.prototype.head = function(url, options) {
    /*
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("HEAD", url, true);
    return this.init(options);
    */
    throw new Error('Unimplemented');
  };
  Request.prototype.trace = function(url, options) {
    /*
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("TRACE", url, true);
    return this.init(options);
    */
    throw new Error('Unimplemented');
  };
  Request.prototype.options = function(url, options) {
    /*
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("OPTIONS", url, true);
    return this.init(options);
    */
    throw new Error('Unimplemented');
  };
  Request.prototype.patch = function(url, options) {
    /*
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("PATCH", url, true);
    return this.init(options);
    */
    throw new Error('Unimplemented');
  };

  return new Request();
})(udare.q, udare.log);

udare.request = udare.requestProvider;
udare.restfulProvider = (function(q, request, log, undefined) {
  log.info('udare.restfulProvider');

  var Restful = function() {
    this.baseUrl = null;
    this.requestInterceptor = null;
    this.errorInterceptor = null;
    
    this.uriRoutes = [];
    
    this.route = null;
    this.routeId = null;
    
    this.separator = '/';
  };
  Restful.prototype.reset = function() {
    this.uriRoutes = [];
    this.setBaseUrl(this.baseUrl);
  };
  Restful.prototype.setBaseUrl = function(baseUrl) {
    this.baseUrl = baseUrl;
    this.uriRoutes.unshift(baseUrl);

    return this;
  };
  Restful.prototype.setRequestInterceptor = function(requestInterceptor) {
    this.requestInterceptor = requestInterceptor;

    return this;
  };
  Restful.prototype.setErrorInterceptor = function(errorInterceptor) {
    this.errorInterceptor = errorInterceptor;

    return this;
  };
  Restful.prototype.all = function(route) {
    this.route = route;
    this.uriRoutes.push(route);

    return this;
  };
  Restful.prototype.one = function(route, id) {
    this.route = route;
    this.routeId = id;

    this.uriRoutes.push(route);
    this.uriRoutes.push(id);

    return this;
  };
  Restful.prototype.several = function(route) {};
  Restful.prototype.get = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);    
    
    request.get(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.getList = function(/*id, queryParams, headers*/) {
    var id, queryParams, headers;
    var deferred = q.defer();

    if(arguments.length === 1 && typeof arguments[0] === 'string') {
      this.uriRoutes.push(arguments[0]);
    }

    if(arguments.length === 1 && typeof arguments[0] !== 'string') {
      queryParams = arguments[0];
    }

    if(arguments.length === 2 && typeof arguments[0] !== 'string' 
      && typeof arguments[1] !== 'string') {
      queryParams = arguments[0];
      headers = arguments[1];
    }

    if(arguments.length === 2 && typeof arguments[0] === 'string' 
      && typeof arguments[1] !== 'string') {
      id = arguments[0];
      queryParams = arguments[1];      
    }

    var url = this.uriRoutes.join(this.separator);    

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers); 

    request.get(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.put = function(/*putData, queryParams, headers*/) {
    var putData, queryParams, headers;

    // putData
    if(arguments.length === 1 && typeof arguments[0] !== 'string') {
      putData = arguments[0];
    }

    // putData && queryParams
    if(arguments.length === 2 && typeof arguments[0] !== 'string' 
      && typeof arguments[1] !== 'string') {
      putData = arguments[0];
      queryParams = arguments[1];
    }

    // putData && queryParams && headers
    if(arguments.length === 3 && typeof arguments[0] !== 'string' 
      && typeof arguments[1] !== 'string'
      && typeof arguments[2] !== 'string') {
      putData = arguments[0];
      queryParams = arguments[1];
      headers = arguments[2];
    }

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);
    !!putData && (options.data = putData);

    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);
    
    request.put(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.post = function(/*route, postData, queryParams, headers*/) {
    var route, postData, queryParams, headers;

    // route
    if(arguments.length === 1 && typeof arguments[0] === 'string') {
      this.uriRoutes.push(arguments[0]);
    }

    // postDara
    if(arguments.length === 1 && typeof arguments[0] !== 'string') {
      postData = arguments[0];
    }

    // route && postData
    if(arguments.length === 2 && typeof arguments[0] === 'string' 
      && typeof arguments[1] !== 'string') {
      this.uriRoutes.push(arguments[0]);
      postData = arguments[1];
    }

    // route && postData && queryParams
    if(arguments.length === 3 && typeof arguments[0] === 'string' 
      && typeof arguments[1] !== 'string' 
      && typeof arguments[2] !== 'string') {
      this.uriRoutes.push(arguments[0]);
      postData = arguments[1];
      queryParams = arguments[2];
    }

    // route && postData && queryParams
    if(arguments.length === 3 && typeof arguments[0] !== 'string' 
      && typeof arguments[1] !== 'string' 
      && typeof arguments[2] !== 'string') {
      postData = arguments[0];
      queryParams = arguments[1];
      headers = arguments[2];
    }

    // route && postData && queryParams && headers
    if(arguments.length === 4 && typeof arguments[0] === 'string' 
      && typeof arguments[1] !== 'string' 
      && typeof arguments[2] !== 'string'
      && typeof arguments[3] !== 'string') {
      this.uriRoutes.push(arguments[0]);
      postData = arguments[1];
      queryParams = arguments[2];
      headers = arguments[2];
    }

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);
    !!postData && (options.data = postData);

    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);
    
    request.post(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.remove = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);
    
    request.delete(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.head = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);    
    
    request.head(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.trace = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);    
    
    request.trace(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.options = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);    
    
    request.options(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.patch = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);    
    
    request.patch(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  }; 

  return new Restful();
})(udare.q, udare.request, udare.log);

udare.restful = udare.restfulProvider;
udare.routerProvider = (function(q, request, compiler, executor, log, undefined) {
  log.info('udare.routerProvider');

  var RouterProvider = function() {
    this.routes = [];

    window.onhashchange = function() {
      this.change();
    }.bind(this);
  };
  RouterProvider.prototype = {
    when : function(route, options) {
      this.routes.push({
        route : route,
        options : options
      });

      return this;
    },

    otherwise : function() {},

    change : function() {
      var path = document.location.hash.substring(1); // remove # char

      for(var i = 0, l = this.routes.length; i < l; i++) {
        var route = this.routes[i];
        var pattern = '^' + route.route + '$';

        var r = new RegExp(pattern);
        if(r.test(path) === true) {
          this.route(
            route.options.view.template, 
            route.options.view.id,
            route.options.controller
          );
        }
      }
    },

    route : function(template, container, controller) { 
      request.get(template)
        .then(function(response) {
          (function() {
            var deferred = q.defer();

            compiler.compile(response, controller, function(d, controllers, html, mainCrtl) {
              d.resolve({
                c: controllers, 
                h : html,
                m : mainCrtl
              });
            }.bind(this, deferred));

            return deferred.promise;
          })().then(function(obj) {
            var executorInstance = new executor();
            executorInstance.setHTML(obj.h);
            executorInstance.setControllers(obj.c);
            //executorInstance.setContainer(container);
            executorInstance.setContainer(document.getElementById(container));
            executorInstance.execute(obj.m);  
          });
        }, function(error) {
          console.log('Error!', error);
        });
    }
  };

  return new RouterProvider();
})(udare.q, udare.request, udare.compiler, udare.executor, udare.log);
udare.state = (function(undefined) {
  var State = function() {
  };
  State.prototype.setState = function(state) {
    this.state = state;
  };
  State.prototype.getState = function() {
    return this.state;
  };
  State.prototype.setParams = function(params) {
    this.params = params;
  };
  State.prototype.getParams = function() {
    return this.params;
  };
  
  return new State();
})();

udare.stateProvider = (function(state, q, request, compiler, executor, log, router, undefined) {
  log.info('udate.stateProvider');

  var isAbstractState = function(state) {
    return "abstract" in state;
  };

  var mergeViewsAndAbstractStates = function(views, states) {
    var merge = views || {};

    for(var index in states) {
      var state = states[index];

      if(state) {
        merge[index] = {
          template : state.template,
          controller : 'controller' in state ? state.controller : null
        };
      }
    }

    return merge;
  };

  var resolveView = function(id, response, controller) {
    (function() {
      var deferred = q.defer();

      compiler.compile(response, controller, function(d, controllers, html, mainCrtl) {
        d.resolve({
          c: controllers, 
          h : html,
          m : mainCrtl
        });
      }.bind(this, deferred));

      return deferred.promise;
    })().then(function(obj) {   
      var executorInstance = new executor();
      executorInstance.setHTML(obj.h);
      executorInstance.setControllers(obj.c);
      executorInstance.setContainer(document.querySelector('[data-view=' + id + ']'));
      executorInstance.execute(obj.m); 

      deferred.resolve('') ;
    });
  };

  var getStateViews = function(id, element, template, stateViews) {
    var deferred = q.defer();

    request.get(template).then(function(response) {
      element.innerHTML = response;

      var views = Array.prototype.slice.call(element.querySelectorAll('[data-view]')).map(function(view) {
        return {
          id : view.getAttribute('data-view'),
          element : view
        };
      });

      if(views.length > 0) {
        for(var index in views) {
          var view = views[index];

          if(stateViews[view.id]) {
            getStateViews(view.id, view.element, stateViews[view.id].template, stateViews);
          }
        }
      } else {
        resolveView(id, response, stateViews[id].controller);

        deferred.resolve('');
      }
    });

    return deferred.promise;
  };

  var getStateController = function(id, element, state) {
    var deferred = q.defer();

    request.get(state.template).then(function(response) {
      element.innerHTML = response;
      
      resolveView(id, response, state.controller);
      deferred.resolve('');
    });

    return deferred.promise;
  };

  var StateProvider = function() {
    this.states = [];
    this.abstractStates = [];
    this.mainView = null;
  };
  StateProvider.prototype.state = function(name, state) {
    if(!this.state[name]) {
      if(isAbstractState(state)) {
        this.abstractStates[name] = state;
      } else {
        this.states[name] = state;
      }
    }

    return this;
  };
  StateProvider.prototype.change = function(currentState) {
    var params = {};
    
    if(arguments.length > 1) {
      keys = currentState.url.match(/:[a-zA-Z0-9\-]+/g).map(function(match) {
        return match.substring(1);
      });
      values = Array.prototype.slice.call(arguments, 1);

      for(var i = 0, l = values.length; i < l; i++) {
        params[keys[i]] = values[i];
      }
    }

    state.setState(currentState);
    state.setParams(params);

    var requestPromises = [];

    var view = Array.prototype.slice.call(document.querySelectorAll('[data-view=main]')).map(function(view) {
      return {
        id : view.getAttribute('data-view'),
        element : view
      };
    })[0];

    if(!this.mainView) {
      this.mainView = view;
    }

    var promise;
    var layout = this.abstractStates[currentState.layout] ? this.abstractStates[currentState.layout] : false;

    if(layout) {
      var stateViews = mergeViewsAndAbstractStates(currentState.views, this.abstractStates);
      promise = getStateViews(this.mainView.id, this.mainView.element, layout.template, stateViews);
    } else {
      promise = getStateController(this.mainView.id, this.mainView.element, currentState);      
    }
    requestPromises.push(request);

    if(requestPromises.length > 0) {
      q.all(requestPromises).then(function() {
      });
    }
  };
  StateProvider.prototype.init = function() {
    var routes = {};
    for(var name in this.states) {
      var state = this.states[name];

      if(state.url) {
        routes[state.url] = this.change.bind(this, state);
      }
    }

    this.router = router(routes).configure({
      recurse: 'backward'
      /*after: function() {
        console.log('after');
      },
      notfound : function() {
        console.log('route not found');
      }*/
    }).init();
  };

  StateProvider.prototype.goTo = function(name, params) {
    var state = this.states[name];

    if(state.url) {
      var url = state.url.replace(/:[a-zA-Z0-9\-]+/g, function(m) {
        return params[m.substring(1)];
      });

      document.location = '#' + url;
    }
  };

  return new StateProvider();
})(udare.state, udare.q, udare.request, udare.compiler, udare.executor, udare.log, Router);