eval('var DocumentCookieWatcher=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}'+
'};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.def'+
'ineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.definePro'+
'perty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&'+
'&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.d'+
'efineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e'+
']}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};retur'+
'n n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){'+
'(function(e){var n="Expected a function",r=NaN,i="[object Symbol]",o=/^\\s+|\\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,'+
'c=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Ob'+
'ject&&self,d=l||f||Function("return this")(),h=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return d.Dat'+
'e.now()};function v(t,e,r){var i,o,a,u,c,s,l=0,f=!1,d=!1,h=!0;if("function"!=typeof t)throw new TypeError(n);function v('+
'e){var n=i,r=o;return i=o=void 0,l=e,u=t.apply(r,n)}function w(t){var n=t-s;return void 0===s||n>=e||n<0||d&&t-l>=a}func'+
'tion j(){var t=b();if(w(t))return O(t);c=setTimeout(j,function(t){var n=e-(t-s);return d?p(n,a-(t-l)):n}(t))}function O('+
't){return c=void 0,h&&i?v(t):(i=o=void 0,u)}function k(){var t=b(),n=w(t);if(i=arguments,o=this,s=t,n){if(void 0===c)ret'+
'urn function(t){return l=t,c=setTimeout(j,e),f?v(t):u}(s);if(d)return c=setTimeout(j,e),v(s)}return void 0===c&&(c=setTi'+
'meout(j,e)),u}return e=m(e)||0,y(r)&&(f=!!r.leading,a=(d="maxWait"in r)?g(m(r.maxWait)||0,e):a,h="trailing"in r?!!r.trai'+
'ling:h),k.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=s=o=c=void 0},k.flush=function(){return void 0===c?u:O(b()'+
')},k}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;i'+
'f(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&h.call(t)==i}(t))return r;if(y(t)'+
'){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"'+
'");var n=u.test(t);return n||c.test(t)?s(t.slice(2),n?2:8):a.test(t)?r:+t}t.exports=function(t,e,r){var i=!0,o=!0;if("fu'+
'nction"!=typeof t)throw new TypeError(n);return y(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),v('+
't,e,{leading:i,maxWait:e,trailing:o})}}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new F'+
'unction("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);'+
'/*! (c) Andrea Giammarchi - ISC */'+
'var r={};try{r.EventTarget=(new EventTarget).constructor}catch(t){!function(t,e){var n=t.create,i=t.defineProperty,o=a.p'+
'rototype;function a(){e.set(this,n(null))}function u(t,e,n){i(t,e,{configurable:!0,writable:!0,value:n})}function c(t){v'+
'ar e=t.options;e&&e.once&&t.target.removeEventListener(this.type,t.listener),"function"==typeof t.listener?t.listener.ca'+
'll(t.target,this):t.listener.handleEvent(this)}u(o,"addEventListener",function(t,n,r){for(var i=e.get(this),o=i[t]||(i[t'+
']=[]),a=0,u=o.length;a<u;a++)if(o[a].listener===n)return;o.push({target:this,listener:n,options:r})}),u(o,"dispatchEvent'+
'",function(t){var n=e.get(this)[t.type];return n&&(u(t,"target",this),u(t,"currentTarget",this),n.slice(0).forEach(c,t),'+
'delete t.currentTarget,delete t.target),!0}),u(o,"removeEventListener",function(t,n){for(var r=e.get(this),i=r[t]||(r[t]'+
'=[]),o=0,a=i.length;o<a;o++)if(i[o].listener===n)return void i.splice(o,1)}),r.EventTarget=a}(Object,new WeakMap)}var i='+
'r.EventTarget,o=n(0),a=n.n(o);e.default=class extends i{constructor({debug:t=!1,handler:e=(()=>{this.log("handler not se'+
't")}),interval:n=1e3,leading:r=!1,trailing:i=!0}={}){super(),this.debug=t,this.interval=n,this.enabled=!1,this.rawCookie'+
's=[],this.descriptor=Object.getOwnPropertyDescriptor(Document.prototype,"cookie")||Object.getOwnPropertyDescriptor(HTMLD'+
'ocument.prototype,"cookie");const o=a()(e,this.interval,{leading:r,trailing:i});this.addEventListener("DocumentCookieSet'+
'",t=>{this.log("DocumentCookieSet event",t.detail),o(this,t)}),this.log("created",{descriptor:this.descriptor,debug:this'+
'.debug,handler:this.handler,interval:this.interval,leading:this.leading,trailing:this.trailing})}log(...t){this.debug&&c'+
'onsole.log("[dcw]",...t)}configurable(){return this.descriptor&&this.descriptor.configurable}enable(){this.configurable('+
')?this.enabled?this.log("already enabled"):(Object.defineProperty(document,"cookie",{configurable:!0,enumerable:!0,get:('+
')=>this.descriptor.get.call(document),set:t=>{this.descriptor.set.call(document,t),this.log("document.cookie set",t),thi'+
's.rawCookies.push(t),this.dispatchEvent(new CustomEvent("DocumentCookieSet",{detail:{rawCookie:t}}))}}),this.enabled=!0,'+
'this.log("enabled")):this.log("document.cookie not configurable")}disable(){this.configurable()?this.enabled?(Object.def'+
'ineProperty(document,"cookie",{configurable:!0,enumerable:!0,get:()=>this.descriptor.get.call(document),set:t=>{this.des'+
'criptor.set.call(document,t)}}),this.enabled=!1,this.log("disabled")):this.log("already disabled"):this.log("document.co'+
'okie not configurable")}flush(){const t=this.rawCookies;return this.rawCookies=[],this.log("flush",t),{rawCookies:t}}}}]'+
').default;');
