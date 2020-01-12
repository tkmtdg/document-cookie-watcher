eval('var DocumentCookieWatcher=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}'+
'};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.def'+
'ineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.definePro'+
'perty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&'+
'&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.d'+
'efineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e'+
']}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};retur'+
'n n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){'+
'(function(e){var n=/^\\s+|\\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e'+
'&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,s=c||u||Function("return this")(),l=Obj'+
'ect.prototype.toString,f=Math.max,d=Math.min,h=function(){return s.Date.now()};function g(t,e,n){var r,i,o,a,c,u,s=0,l=!'+
'1,g=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,o=i;return r=i=void'+
' 0,s=e,a=t.apply(o,n)}function m(t){return s=t,c=setTimeout(j,e),l?y(t):a}function w(t){var n=t-u;return void 0===u||n>='+
'e||n<0||g&&t-s>=o}function j(){var t=h();if(w(t))return O(t);c=setTimeout(j,function(t){var n=e-(t-u);return g?d(n,o-(t-'+
's)):n}(t))}function O(t){return c=void 0,v&&r?y(t):(r=i=void 0,a)}function k(){var t=h(),n=w(t);if(r=arguments,i=this,u='+
't,n){if(void 0===c)return m(u);if(g)return c=setTimeout(j,e),y(u)}return void 0===c&&(c=setTimeout(j,e)),a}return e=b(e)'+
'||0,p(n)&&(l=!!n.leading,o=(g="maxWait"in n)?f(b(n.maxWait)||0,e):o,v="trailing"in n?!!n.trailing:v),k.cancel=function()'+
'{void 0!==c&&clearTimeout(c),s=0,r=u=i=c=void 0},k.flush=function(){return void 0===c?a:O(h())},k}function p(t){var e=ty'+
'peof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol'+
'"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(p(t)){var e="'+
'function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c='+
'i.test(t);return c||o.test(t)?a(t.slice(2),c?2:8):r.test(t)?NaN:+t}t.exports=function(t,e,n){var r=!0,i=!0;if("function"'+
'!=typeof t)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.t'+
'railing:i),g(t,e,{leading:r,maxWait:e,trailing:i})}}).call(this,n(1))},function(t,e){var n;n=function(){return this}();t'+
'ry{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use str'+
'ict";n.r(e);'+
'/*! (c) Andrea Giammarchi - ISC */'+
'var r={};try{r.EventTarget=(new EventTarget).constructor}catch(t){!function(t,e){var n=t.create,i=t.defineProperty,o=a.p'+
'rototype;function a(){e.set(this,n(null))}function c(t,e,n){i(t,e,{configurable:!0,writable:!0,value:n})}function u(t){v'+
'ar e=t.options;e&&e.once&&t.target.removeEventListener(this.type,t.listener),"function"==typeof t.listener?t.listener.ca'+
'll(t.target,this):t.listener.handleEvent(this)}c(o,"addEventListener",(function(t,n,r){for(var i=e.get(this),o=i[t]||(i['+
't]=[]),a=0,c=o.length;a<c;a++)if(o[a].listener===n)return;o.push({target:this,listener:n,options:r})})),c(o,"dispatchEve'+
'nt",(function(t){var n=e.get(this)[t.type];return n&&(c(t,"target",this),c(t,"currentTarget",this),n.slice(0).forEach(u,'+
't),delete t.currentTarget,delete t.target),!0})),c(o,"removeEventListener",(function(t,n){for(var r=e.get(this),i=r[t]||'+
'(r[t]=[]),o=0,a=i.length;o<a;o++)if(i[o].listener===n)return void i.splice(o,1)})),r.EventTarget=a}(Object,new WeakMap)}'+
'var i=r.EventTarget,o=n(0),a=n.n(o);e.default=class extends i{constructor({debug:t=!1,handler:e=(()=>{this.log("handler '+
'not set")}),interval:n=1e3,leading:r=!1,trailing:i=!0}={}){super(),this.debug=t,this.interval=n,this.enabled=!1,this.raw'+
'Cookies=[],this.descriptor=Object.getOwnPropertyDescriptor(Document.prototype,"cookie")||Object.getOwnPropertyDescriptor'+
'(HTMLDocument.prototype,"cookie");const o=a()(e,this.interval,{leading:r,trailing:i});this.addEventListener("DocumentCoo'+
'kieSet",t=>{this.log("DocumentCookieSet event",t.detail),o(this,t)}),this.log("created",{descriptor:this.descriptor,debu'+
'g:this.debug,handler:this.handler,interval:this.interval,leading:this.leading,trailing:this.trailing})}log(...t){this.de'+
'bug&&console.log("[dcw]",...t)}configurable(){return this.descriptor&&this.descriptor.configurable}enable(){this.configu'+
'rable()?this.enabled?this.log("already enabled"):(Object.defineProperty(document,"cookie",{configurable:!0,enumerable:!0'+
',get:()=>this.descriptor.get.call(document),set:t=>{this.descriptor.set.call(document,t),this.log("document.cookie set",'+
't),this.rawCookies.push(t),this.dispatchEvent(new CustomEvent("DocumentCookieSet",{detail:{rawCookie:t}}))}}),this.enabl'+
'ed=!0,this.log("enabled")):this.log("document.cookie not configurable")}disable(){this.configurable()?this.enabled?(Obje'+
'ct.defineProperty(document,"cookie",{configurable:!0,enumerable:!0,get:()=>this.descriptor.get.call(document),set:t=>{th'+
'is.descriptor.set.call(document,t)}}),this.enabled=!1,this.log("disabled")):this.log("already disabled"):this.log("docum'+
'ent.cookie not configurable")}flush(){const t=this.rawCookies;return this.rawCookies=[],this.log("flush",t),{rawCookies:'+
't}}}}]).default;');
global.DocumentCookieWatcher = DocumentCookieWatcher;
