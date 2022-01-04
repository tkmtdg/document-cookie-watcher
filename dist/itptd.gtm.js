eval('var ITPTargetDetector=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};re'+
'turn t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineP'+
'roperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.definePropert'+
'y(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t='+
'r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defin'+
'eProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.b'+
'ind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.'+
'd(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){var '+
'n,i,o;i=[],void 0===(o="function"==typeof(n=function(){var t=/^v?(?:\\d+)(\\.(?:[x*]|\\d+)(\\.(?:[x*]|\\d+)(\\.(?:[x*]|\\d+))?('+
'?:-[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?)?)?$/i;function e(t){var e,r,n=t.replace(/^v/,"").rep'+
'lace(/\\+.*$/,""),i=(r="-",-1===(e=n).indexOf(r)?e.length:e.indexOf(r)),o=n.substring(0,i).split(".");return o.push(n.sub'+
'string(i+1)),o}function r(t){return isNaN(Number(t))?t:Number(t)}function n(e){if("string"!=typeof e)throw new TypeError'+
'("Invalid argument expected string");if(!t.test(e))throw new Error("Invalid argument not valid semver (\'"+e+"\' received)'+
'")}function i(t,i){[t,i].forEach(n);for(var o=e(t),a=e(i),s=0;s<Math.max(o.length-1,a.length-1);s++){var u=parseInt(o[s]'+
'||0,10),f=parseInt(a[s]||0,10);if(u>f)return 1;if(f>u)return-1}var c=o[o.length-1],l=a[a.length-1];if(c&&l){var p=c.spli'+
't(".").map(r),d=l.split(".").map(r);for(s=0;s<Math.max(p.length,d.length);s++){if(void 0===p[s]||"string"==typeof d[s]&&'+
'"number"==typeof p[s])return-1;if(void 0===d[s]||"string"==typeof p[s]&&"number"==typeof d[s])return 1;if(p[s]>d[s])retu'+
'rn 1;if(d[s]>p[s])return-1}}else if(c||l)return c?-1:1;return 0}var o=[">",">=","=","<","<="],a={">":[1],">=":[0,1],"=":'+
'[0],"<=":[-1,0],"<":[-1]};return i.validate=function(e){return"string"==typeof e&&t.test(e)},i.compare=function(t,e,r){!'+
'function(t){if("string"!=typeof t)throw new TypeError("Invalid operator type, expected string but got "+typeof t);if(-1='+
'==o.indexOf(t))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(r);var n=i(t,e);return a[r].indexO'+
'f(n)>-1},i})?n.apply(e,i):n)||(t.exports=o)},function(t,e,r){"use strict";r.r(e);var n=r(0);e.default=class{static getFi'+
'rstMatch(t,e){if("string"!=typeof e)return"";const r=e.match(t);return r&&r.length>0&&r[1]||""}static getTargetPlatform('+
't){const e={isIOS:!1,isMac:!1,osVersion:null,isSafari:!1,safariVersion:null};return"string"!=typeof t||(/macintosh/i.tes'+
't(t)?(e.isMac=!0,e.osVersion=this.getFirstMatch(/mac os x (\\d+(\\.?_?\\d+)+)/i,t).replace(/[_\\s]/g,".")):/(ipod|iphone|ipa'+
'd)/i.test(t)&&(e.isIOS=!0,e.osVersion=this.getFirstMatch(/os (\\d+([_\\s]\\d+)*) like mac os x/i,t).replace(/[_\\s]/g,".")),'+
'/safari/i.test(t)&&!/chrom(e|ium)/i.test(t)&&(e.isSafari=!0,e.safariVersion=this.getFirstMatch(/version\\/(\\d+(\\.?_?\\d+)+'+
')/i,t).replace(/[_\\s]/g,"."))),e}static isITP_2_1(t){if("string"!=typeof t)return!1;const e=this.getTargetPlatform(t);tr'+
'y{if(e.isIOS&&null!==e.osVersion&&n(e.osVersion,"12.2")>=0)return!0;if(e.isMac&&e.isSafari&&null!==e.safariVersion&&n(e.'+
'safariVersion,"12.1")>=0)return!0}catch(t){return!1}return!1}}}]).default;');if (global) { global.ITPTargetDetector = ITPTargetDetector; }
