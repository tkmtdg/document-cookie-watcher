eval('var DocumentCookieWatcher=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}'+
'};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.def'+
'ineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.definePro'+
'perty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&'+
'&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.d'+
'efineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e'+
']}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};retur'+
'n n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){'+
'(function(e){var n=/^\\s+|\\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof e&&e'+
'&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,c=a||s||Function("return this")(),l=Obj'+
'ect.prototype.toString,f=Math.max,d=Math.min,h=function(){return c.Date.now()};function g(t,e,n){var i,r,o,u,a,s,c=0,l=!'+
'1,g=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=i,o=r;return i=r=void'+
' 0,c=e,u=t.apply(o,n)}function y(t){return c=t,a=setTimeout(j,e),l?m(t):u}function w(t){var n=t-s;return void 0===s||n>='+
'e||n<0||g&&t-c>=o}function j(){var t=h();if(w(t))return O(t);a=setTimeout(j,function(t){var n=e-(t-s);return g?d(n,o-(t-'+
'c)):n}(t))}function O(t){return a=void 0,v&&i?m(t):(i=r=void 0,u)}function k(){var t=h(),n=w(t);if(i=arguments,r=this,s='+
't,n){if(void 0===a)return y(s);if(g)return a=setTimeout(j,e),m(s)}return void 0===a&&(a=setTimeout(j,e)),u}return e=b(e)'+
'||0,p(n)&&(l=!!n.leading,o=(g="maxWait"in n)?f(b(n.maxWait)||0,e):o,v="trailing"in n?!!n.trailing:v),k.cancel=function()'+
'{void 0!==a&&clearTimeout(a),c=0,i=s=r=a=void 0},k.flush=function(){return void 0===a?u:O(h())},k}function p(t){var e=ty'+
'peof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol'+
'"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(p(t)){var e="'+
'function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a='+
'r.test(t);return a||o.test(t)?u(t.slice(2),a?2:8):i.test(t)?NaN:+t}t.exports=function(t,e,n){var i=!0,r=!0;if("function"'+
'!=typeof t)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.t'+
'railing:r),g(t,e,{leading:i,maxWait:e,trailing:r})}}).call(this,n(1))},function(t,e){var n;n=function(){return this}();t'+
'ry{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use str'+
'ict";n.r(e);'+
'/*! (c) Andrea Giammarchi - ISC */'+
'var i={};try{i.EventTarget=(new EventTarget).constructor}catch(t){!function(t,e){var n=t.create,r=t.defineProperty,o=u.p'+
'rototype;function u(){e.set(this,n(null))}function a(t,e,n){r(t,e,{configurable:!0,writable:!0,value:n})}function s(t){v'+
'ar e=t.options;e&&e.once&&t.target.removeEventListener(this.type,t.listener),"function"==typeof t.listener?t.listener.ca'+
'll(t.target,this):t.listener.handleEvent(this)}a(o,"addEventListener",(function(t,n,i){for(var r=e.get(this),o=r[t]||(r['+
't]=[]),u=0,a=o.length;u<a;u++)if(o[u].listener===n)return;o.push({target:this,listener:n,options:i})})),a(o,"dispatchEve'+
'nt",(function(t){var n=e.get(this)[t.type];return n&&(a(t,"target",this),a(t,"currentTarget",this),n.slice(0).forEach(s,'+
't),delete t.currentTarget,delete t.target),!0})),a(o,"removeEventListener",(function(t,n){for(var i=e.get(this),r=i[t]||'+
'(i[t]=[]),o=0,u=r.length;o<u;o++)if(r[o].listener===n)return void r.splice(o,1)})),i.EventTarget=u}(Object,new WeakMap)}'+
'var r=i.EventTarget,o=n(0),u=n.n(o);e.default=class extends r{constructor({debug:t=!1,handler:e=(()=>{this.log("handler '+
'not set")}),interval:n=1e3,leading:i=!1,trailing:r=!0,timeout:o=0}={}){super(),this.debug=t,this.interval=n,this.enabled'+
'=!1,this.rawCookies=[],this.descriptor=Object.getOwnPropertyDescriptor(Document.prototype,"cookie")||Object.getOwnProper'+
'tyDescriptor(HTMLDocument.prototype,"cookie");const a=u()(e,this.interval,{leading:i,trailing:r});this.addEventListener('+
'"DocumentCookieSet",t=>{this.log("DocumentCookieSet event",t.detail),a(this,t)}),this.timeout=o,this.log("created",{desc'+
'riptor:this.descriptor,debug:this.debug,handler:this.handler,interval:this.interval,leading:this.leading,trailing:this.t'+
'railing,timeout:this.timeout})}log(...t){this.debug&&console.log("[dcw]",...t)}configurable(){return this.descriptor&&th'+
'is.descriptor.configurable}enable(){this.configurable()?this.enabled?this.log("already enabled"):(this.startAt=new Date,'+
'Object.defineProperty(document,"cookie",{configurable:!0,enumerable:!0,get:()=>this.descriptor.get.call(document),set:t='+
'>{if(this.descriptor.set.call(document,t),this.log("document.cookie set",t),this.rawCookies.push(t),this.timeout>0){if(('+
'(new Date).getTime()-this.startAt.getTime())/1e3>=this.timeout)return this.log("timed out"),void this.disable()}this.dis'+
'patchEvent(new CustomEvent("DocumentCookieSet",{detail:{rawCookie:t}}))}}),this.enabled=!0,this.log("enabled")):this.log'+
'("document.cookie not configurable")}disable(){this.configurable()?this.enabled?(Object.defineProperty(document,"cookie"'+
',{configurable:!0,enumerable:!0,get:()=>this.descriptor.get.call(document),set:t=>{this.descriptor.set.call(document,t)}'+
'}),this.enabled=!1,this.log("disabled")):this.log("already disabled"):this.log("document.cookie not configurable")}flush'+
'(){const t=this.rawCookies;return this.rawCookies=[],this.log("flush",t),{rawCookies:t}}}}]).default;');
