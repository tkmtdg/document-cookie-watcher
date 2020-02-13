eval('var ITPTargetDetector=function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};re'+
'turn t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineP'+
'roperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.definePropert'+
'y(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t='+
'e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defin'+
'eProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.b'+
'ind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.'+
'd(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=1)}([function(t,r,e){var '+
'n,i,o;i=[],void 0===(o="function"==typeof(n=function(){var t=/^v?(?:\\d+)(\\.(?:[x*]|\\d+)(\\.(?:[x*]|\\d+)(\\.(?:[x*]|\\d+))?('+
'?:-[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?)?)?$/i;function r(t){var r,e,n=t.replace(/^v/,"").rep'+
'lace(/\\+.*$/,""),i=(e="-",-1===(r=n).indexOf(e)?r.length:r.indexOf(e)),o=n.substring(0,i).split(".");return o.push(n.sub'+
'string(i+1)),o}function e(t){return isNaN(Number(t))?t:Number(t)}function n(r){if("string"!=typeof r)throw new TypeError'+
'("Invalid argument expected string");if(!t.test(r))throw new Error("Invalid argument not valid semver (\'"+r+"\' received)'+
'")}function i(t,i){[t,i].forEach(n);for(var o=r(t),a=r(i),s=0;s<Math.max(o.length-1,a.length-1);s++){var u=parseInt(o[s]'+
'||0,10),f=parseInt(a[s]||0,10);if(u>f)return 1;if(f>u)return-1}var c=o[o.length-1],l=a[a.length-1];if(c&&l){var p=c.spli'+
't(".").map(e),d=l.split(".").map(e);for(s=0;s<Math.max(p.length,d.length);s++){if(void 0===p[s]||"string"==typeof d[s]&&'+
'"number"==typeof p[s])return-1;if(void 0===d[s]||"string"==typeof p[s]&&"number"==typeof d[s])return 1;if(p[s]>d[s])retu'+
'rn 1;if(d[s]>p[s])return-1}}else if(c||l)return c?-1:1;return 0}var o=[">",">=","=","<","<="],a={">":[1],">=":[0,1],"=":'+
'[0],"<=":[-1,0],"<":[-1]};return i.compare=function(t,r,e){!function(t){if("string"!=typeof t)throw new TypeError("Inval'+
'id operator type, expected string but got "+typeof t);if(-1===o.indexOf(t))throw new TypeError("Invalid operator, expect'+
'ed one of "+o.join("|"))}(e);var n=i(t,r);return a[e].indexOf(n)>-1},i})?n.apply(r,i):n)||(t.exports=o)},function(t,r,e)'+
'{"use strict";e.r(r);var n=e(0);r.default=class{static getFirstMatch(t,r){if("string"!=typeof r)return"";const e=r.match'+
'(t);return e&&e.length>0&&e[1]||""}static getTargetPlatform(t){const r={isIOS:!1,isMac:!1,osVersion:null,isSafari:!1,saf'+
'ariVersion:null};return"string"!=typeof t?r:(/macintosh/i.test(t)?(r.isMac=!0,r.osVersion=this.getFirstMatch(/mac os x ('+
'\\d+(\\.?_?\\d+)+)/i,t).replace(/[_\\s]/g,".")):/(ipod|iphone|ipad)/i.test(t)&&(r.isIOS=!0,r.osVersion=this.getFirstMatch(/o'+
's (\\d+([_\\s]\\d+)*) like mac os x/i,t).replace(/[_\\s]/g,".")),/safari/i.test(t)&&!/chrom(e|ium)/i.test(t)&&(r.isSafari=!0'+
',r.safariVersion=this.getFirstMatch(/version\\/(\\d+(\\.?_?\\d+)+)/i,t).replace(/[_\\s]/g,".")),r)}static isITP_2_1(t){if("st'+
'ring"!=typeof t)return!1;const r=this.getTargetPlatform(t);try{if(r.isIOS&&null!==r.osVersion&&n(r.osVersion,"12.2")>=0)'+
'return!0;if(r.isMac&&r.isSafari&&null!==r.safariVersion&&n(r.safariVersion,"12.1")>=0)return!0}catch(t){return!1}return!'+
'1}}}]).default;');
