eval('var ITPTargetDetector=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};re'+
'turn e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineP'+
'roperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.definePropert'+
'y(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e='+
'r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defin'+
'eProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.b'+
'ind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.'+
'd(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){var '+
'n,i,o;i=[],void 0===(o="function"==typeof(n=function(){var e=/^v?(?:\\d+)(\\.(?:[x*]|\\d+)(\\.(?:[x*]|\\d+)(\\.(?:[x*]|\\d+))?('+
'?:-[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?)?)?$/i;function t(e){var t,r,n=e.replace(/^v/,"").rep'+
'lace(/\\+.*$/,""),i=(r="-",-1===(t=n).indexOf(r)?t.length:t.indexOf(r)),o=n.substring(0,i).split(".");return o.push(n.sub'+
'string(i+1)),o}function r(e){return isNaN(Number(e))?e:Number(e)}function n(t){if("string"!=typeof t)throw new TypeError'+
'("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver (\'"+t+"\' received)'+
'")}return function(e,i){[e,i].forEach(n);for(var o=t(e),a=t(i),s=0;s<Math.max(o.length-1,a.length-1);s++){var u=parseInt'+
'(o[s]||0,10),f=parseInt(a[s]||0,10);if(u>f)return 1;if(f>u)return-1}var c=o[o.length-1],l=a[a.length-1];if(c&&l){var d=c'+
'.split(".").map(r),p=l.split(".").map(r);for(s=0;s<Math.max(d.length,p.length);s++){if(void 0===d[s]||"string"==typeof p'+
'[s]&&"number"==typeof d[s])return-1;if(void 0===p[s]||"string"==typeof d[s]&&"number"==typeof p[s])return 1;if(d[s]>p[s]'+
')return 1;if(p[s]>d[s])return-1}}else if(c||l)return c?-1:1;return 0}})?n.apply(t,i):n)||(e.exports=o)},function(e,t,r){'+
'"use strict";r.r(t);var n=r(0);t.default=class{constructor(){}getFirstMatch(e,t){const r=t.match(e);return r&&r.length>0'+
'&&r[1]||""}getTargetPlatform(e){const t={isIOS:!1,isMac:!1,osVersion:null,isSafari:!1,safariVersion:null};return/macinto'+
'sh/i.test(e)?(t.isMac=!0,t.osVersion=this.getFirstMatch(/mac os x (\\d+(\\.?_?\\d+)+)/i,e).replace(/[_\\s]/g,".")):/(ipod|ip'+
'hone|ipad)/i.test(e)&&(t.isIOS=!0,t.osVersion=this.getFirstMatch(/os (\\d+([_\\s]\\d+)*) like mac os x/i,e).replace(/[_\\s]/'+
'g,".")),/safari/i.test(e)&&!/chrom(e|ium)/i.test(e)&&(t.isSafari=!0,t.safariVersion=this.getFirstMatch(/version\\/(\\d+(\\.'+
'?_?\\d+)+)/i,e).replace(/[_\\s]/g,".")),t}isTarget(e){const t=this.getTargetPlatform(e);return!!(t.isIOS&&n(t.osVersion,"1'+
'2.2")>=0)||!!(t.isMac&&t.isSafari&&n(t.safariVersion,"12.1")>=0)}}}]).default;');
