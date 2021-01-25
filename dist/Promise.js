"use strict";if(!self.Promise){self.Promise=o;var e=setTimeout;function t(e){return!(!e||void 0===e.length)}function n(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],a(e,this)}function r(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(r){return void f(t.promise,r)}i(t.promise,o)}else(1===e._state?i:f)(t.promise,e._value)}))):e._deferreds.push(t)}function i(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void a((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,c(e)}catch(u){f(e,u)}var r,i}function f(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&o._immediateFn((function(){e._handled||o._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;n>t;t++)r(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function a(e,t){var n=!1;try{e((function(e){n||(n=!0,i(t,e))}),(function(e){n||(n=!0,f(t,e))}))}catch(o){if(n)return;n=!0,f(t,o)}}o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var o=new this.constructor(n);return r(this,new u(e,t,o)),o},o.all=function(e){return new o((function(n,o){if(!t(e))return o(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);var i=r.length;function f(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var c=t.then;if("function"==typeof c)return void c.call(t,(function(t){f(e,t)}),o)}r[e]=t,0==--i&&n(r)}catch(u){o(u)}}for(var c=0;r.length>c;c++)f(c,r[c])}))},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o((function(t){t(e)}))},o.reject=function(e){return new o((function(t,n){n(e)}))},o.race=function(e){return new o((function(n,r){if(!t(e))return r(new TypeError("Promise.race accepts an array"));for(var i=0,f=e.length;f>i;i++)o.resolve(e[i]).then(n,r)}))},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(t){e(t,0)},o._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)}}
