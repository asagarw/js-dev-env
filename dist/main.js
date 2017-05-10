webpackJsonp([0],[,function(e,t,r){"use strict";function n(){return i("users")}function o(e){return a("users/"+e)}function i(e){return fetch(f+e).then(u,l)}function a(e){var t=new Request(f+e,{method:"DELETE"});return fetch(t).then(u,l)}function u(e){return e.json()}function l(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=n,t.deleteUser=o,r(0);var s=r(5),c=function(e){return e&&e.__esModule?e:{default:e}}(s),f=(0,c.default)()},function(e,t,r){var n,o;/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
!function(i,a){n=a,void 0!==(o="function"==typeof n?n.call(t,r,t,e):n)&&(e.exports=o)}(0,function(){function e(e,t){this._input=e,this._value=t}var t,r,n={},o={},i={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},a={currentLocale:i.currentLocale,zeroFormat:i.zeroFormat,nullFormat:i.nullFormat,defaultFormat:i.defaultFormat,scalePercentBy100:i.scalePercentBy100};return t=function(o){var i,u,l,s;if(t.isNumeral(o))i=o.value();else if(0===o||void 0===o)i=0;else if(null===o||r.isNaN(o))i=null;else if("string"==typeof o)if(a.zeroFormat&&o===a.zeroFormat)i=0;else if(a.nullFormat&&o===a.nullFormat||!o.replace(/[^0-9]+/g,"").length)i=null;else{for(u in n)if((s="function"==typeof n[u].regexps.unformat?n[u].regexps.unformat():n[u].regexps.unformat)&&o.match(s)){l=n[u].unformat;break}l=l||t._.stringToNumber,i=l(o)}else i=Number(o)||null;return new e(o,i)},t.version="2.0.6",t.isNumeral=function(t){return t instanceof e},t._=r={numberToFormat:function(e,r,n){var i,a,u,l,s,c,f,d=o[t.options.currentLocale],m=!1,p=!1,h=0,b="",v="",g=!1;if(e=e||0,a=Math.abs(e),t._.includes(r,"(")?(m=!0,r=r.replace(/[\(|\)]/g,"")):(t._.includes(r,"+")||t._.includes(r,"-"))&&(s=t._.includes(r,"+")?r.indexOf("+"):e<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),t._.includes(r,"a")&&(i=r.match(/a(k|m|b|t)?/),i=!!i&&i[1],t._.includes(r," a")&&(b=" "),r=r.replace(new RegExp(b+"a[kmbt]?"),""),a>=1e12&&!i||"t"===i?(b+=d.abbreviations.trillion,e/=1e12):a<1e12&&a>=1e9&&!i||"b"===i?(b+=d.abbreviations.billion,e/=1e9):a<1e9&&a>=1e6&&!i||"m"===i?(b+=d.abbreviations.million,e/=1e6):(a<1e6&&a>=1e3&&!i||"k"===i)&&(b+=d.abbreviations.thousand,e/=1e3)),t._.includes(r,"[.]")&&(p=!0,r=r.replace("[.]",".")),u=e.toString().split(".")[0],l=r.split(".")[1],c=r.indexOf(","),h=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,l?(t._.includes(l,"[")?(l=l.replace("]",""),l=l.split("["),v=t._.toFixed(e,l[0].length+l[1].length,n,l[1].length)):v=t._.toFixed(e,l.length,n),u=v.split(".")[0],v=t._.includes(v,".")?d.delimiters.decimal+v.split(".")[1]:"",p&&0===Number(v.slice(1))&&(v="")):u=t._.toFixed(e,0,n),b&&!i&&Number(u)>=1e3&&b!==d.abbreviations.trillion)switch(u=String(Number(u)/1e3),b){case d.abbreviations.thousand:b=d.abbreviations.million;break;case d.abbreviations.million:b=d.abbreviations.billion;break;case d.abbreviations.billion:b=d.abbreviations.trillion}if(t._.includes(u,"-")&&(u=u.slice(1),g=!0),u.length<h)for(var y=h-u.length;y>0;y--)u="0"+u;return c>-1&&(u=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+d.delimiters.thousands)),0===r.indexOf(".")&&(u=""),f=u+v+(b||""),m?f=(m&&g?"(":"")+f+(m&&g?")":""):s>=0?f=0===s?(g?"-":"+")+f:f+(g?"-":"+"):g&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,i=o[a.currentLocale],u=e,l={thousand:3,million:6,billion:9,trillion:12};if(a.zeroFormat&&e===a.zeroFormat)r=0;else if(a.nullFormat&&e===a.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{r=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,"."));for(t in l)if(n=new RegExp("[^a-zA-Z]"+i.abbreviations[t]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),u.match(n)){r*=Math.pow(10,l[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),o=n.length>>>0,i=0;if(3===arguments.length)r=arguments[2];else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");r=n[i++]}for(;i<o;i++)i in n&&(r=t(r,n[i],i,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(e,t){var n=r.multiplier(t);return e>n?e:n},1)},toFixed:function(e,t,r,n){var o,i,a,u,l=e.toString().split("."),s=t-(n||0);return o=2===l.length?Math.min(Math.max(l[1].length,s),t):s,a=Math.pow(10,o),u=(r(e+"e+"+o)/a).toFixed(o),n>t-o&&(i=new RegExp("\\.?0{1,"+(n-(t-o))+"}$"),u=u.replace(i,"")),u}},t.options=a,t.formats=n,t.locales=o,t.locale=function(e){return e&&(a.currentLocale=e.toLowerCase()),a.currentLocale},t.localeData=function(e){if(!e)return o[a.currentLocale];if(e=e.toLowerCase(),!o[e])throw new Error("Unknown locale : "+e);return o[e]},t.reset=function(){for(var e in i)a[e]=i[e]},t.zeroFormat=function(e){a.zeroFormat="string"==typeof e?e:null},t.nullFormat=function(e){a.nullFormat="string"==typeof e?e:null},t.defaultFormat=function(e){a.defaultFormat="string"==typeof e?e:"0.0"},t.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},t.validate=function(e,r){var n,o,i,a,u,l,s,c;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),e=e.trim(),e.match(/^\d+$/))return!0;if(""===e)return!1;try{s=t.localeData(r)}catch(e){s=t.localeData(t.locale())}return i=s.currency.symbol,u=s.abbreviations,n=s.delimiters.decimal,o="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,(null===(c=e.match(/^[^\d]+/))||(e=e.substr(1),c[0]===i))&&((null===(c=e.match(/[^\d]+$/))||(e=e.slice(0,-1),c[0]===u.thousand||c[0]===u.million||c[0]===u.billion||c[0]===u.trillion))&&(l=new RegExp(o+"{2}"),!e.match(/[^\d.,]/g)&&(a=e.split(n),!(a.length>2)&&(a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(l):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(l)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(l)&&!!a[1].match(/^\d+$/)))))},t.fn=e.prototype={clone:function(){return t(this)},format:function(e,r){var o,i,u,l=this._value,s=e||a.defaultFormat;if(r=r||Math.round,0===l&&null!==a.zeroFormat)i=a.zeroFormat;else if(null===l&&null!==a.nullFormat)i=a.nullFormat;else{for(o in n)if(s.match(n[o].regexps.format)){u=n[o].format;break}u=u||t._.numberToFormat,i=u(l,s,r)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){function t(e,t,r,o){return e+Math.round(n*t)}var n=r.correctionFactor.call(null,this._value,e);return this._value=r.reduce([this._value,e],t,0)/n,this},subtract:function(e){function t(e,t,r,o){return e-Math.round(n*t)}var n=r.correctionFactor.call(null,this._value,e);return this._value=r.reduce([e],t,Math.round(this._value*n))/n,this},multiply:function(e){function t(e,t,n,o){var i=r.correctionFactor(e,t);return Math.round(e*i)*Math.round(t*i)/Math.round(i*i)}return this._value=r.reduce([this._value,e],t,1),this},divide:function(e){function t(e,t,n,o){var i=r.correctionFactor(e,t);return Math.round(e*i)/Math.round(t*i)}return this._value=r.reduce([this._value,e],t),this},difference:function(e){return Math.abs(t(this._value).subtract(e).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),function(){t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,r,n){var o,i=t._.includes(r," BPS")?" ":"";return e*=1e4,r=r.replace(/\s?BPS/,""),o=t._.numberToFormat(e,r,n),t._.includes(o,")")?(o=o.split(""),o.splice(-1,0,i+"BPS"),o=o.join("")):o=o+i+"BPS",o},unformat:function(e){return+(1e-4*t._.stringToNumber(e)).toFixed(15)}})}(),function(){var e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=e.suffixes.concat(r.suffixes.filter(function(t){return e.suffixes.indexOf(t)<0})),o=n.join("|");o="("+o.replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(o)},format:function(n,o,i){var a,u,l,s=t._.includes(o,"ib")?r:e,c=t._.includes(o," b")||t._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),a=0;a<=s.suffixes.length;a++)if(u=Math.pow(s.base,a),l=Math.pow(s.base,a+1),null===n||0===n||n>=u&&n<l){c+=s.suffixes[a],u>0&&(n/=u);break}return t._.numberToFormat(n,o,i)+c},unformat:function(n){var o,i,a=t._.stringToNumber(n);if(a){for(o=e.suffixes.length-1;o>=0;o--){if(t._.includes(n,e.suffixes[o])){i=Math.pow(e.base,o);break}if(t._.includes(n,r.suffixes[o])){i=Math.pow(r.base,o);break}}a*=i||1}return a}})}(),function(){t.register("format","currency",{regexps:{format:/(\$)/},format:function(e,r,n){var o,i,a=t.locales[t.options.currentLocale],u={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),o=t._.numberToFormat(e,r,n),e>=0?(u.before=u.before.replace(/[\-\(]/,""),u.after=u.after.replace(/[\-\)]/,"")):e<0&&!t._.includes(u.before,"-")&&!t._.includes(u.before,"(")&&(u.before="-"+u.before),i=0;i<u.before.length;i++)switch(u.before[i]){case"$":o=t._.insert(o,a.currency.symbol,i);break;case" ":o=t._.insert(o," ",i+a.currency.symbol.length-1)}for(i=u.after.length-1;i>=0;i--)switch(u.after[i]){case"$":o=i===u.after.length-1?o+a.currency.symbol:t._.insert(o,a.currency.symbol,-(u.after.length-(1+i)));break;case" ":o=i===u.after.length-1?o+" ":t._.insert(o," ",-(u.after.length-(1+i)+a.currency.symbol.length-1))}return o}})}(),function(){t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,r,n){var o="number"!=typeof e||t._.isNaN(e)?"0e+0":e.toExponential(),i=o.split("e");return r=r.replace(/e[\+|\-]{1}0/,""),t._.numberToFormat(Number(i[0]),r,n)+"e"+i[1]},unformat:function(e){function r(e,r,n,o){var i=t._.correctionFactor(e,r);return e*i*(r*i)/(i*i)}var n=t._.includes(e,"e+")?e.split("e+"):e.split("e-"),o=Number(n[0]),i=Number(n[1]);return i=t._.includes(e,"e-")?i*=-1:i,t._.reduce([o,Math.pow(10,i)],r,1)}})}(),function(){t.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,r,n){var o=t.locales[t.options.currentLocale],i=t._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),i+=o.ordinal(e),t._.numberToFormat(e,r,n)+i}})}(),function(){t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,r,n){var o,i=t._.includes(r," %")?" ":"";return t.options.scalePercentBy100&&(e*=100),r=r.replace(/\s?\%/,""),o=t._.numberToFormat(e,r,n),t._.includes(o,")")?(o=o.split(""),o.splice(-1,0,i+"%"),o=o.join("")):o=o+i+"%",o},unformat:function(e){var r=t._.stringToNumber(e);return t.options.scalePercentBy100?.01*r:r}})}(),function(){t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}})}(),t})},function(e,t,r){var n=r(8);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;r(10)(n,o);n.locals&&(e.exports=n.locals)},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";function n(){return o("useMockApi")?"http://localhost:3002/":"/"}function o(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),n=r.exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,r){"use strict";(function(e){r(3);var t=r(1),n=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=(0,o.default)(1e3).format("$0,0.00");console.log("I would pay "+i+" for this awesome course!"),(0,t.getUsers)().then(function(r){var n="";r.forEach(function(e){n+='<tr>\n      <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n      <td>'+e.id+"</td>\n      <td>"+e.firstName+"</td>\n      <td>"+e.lastName+"</td>\n      <td>"+e.email+"</td>\n    </tr>"}),e.document.getElementById("users").innerHTML=n;var o=e.document.getElementsByClassName("deleteUser");Array.from(o,function(e){e.onclick=function(e){var r=e.target;e.preventDefault(),(0,t.deleteUser)(r.attributes["data-id"].value);var n=r.parentNode.parentNode;n.parentNode.removeChild(n)}})})}).call(t,r(4))},,function(e,t,r){t=e.exports=r(9)(void 0),t.push([e.i,"body {\r\n  font-family: sans-serif;\r\n}\r\n\r\ntable th {\r\n  padding: 5px\r\n}\r\n",""])},function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=p[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(c(n.parts[i],t))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(c(n.parts[i],t));p[n.id]={id:n.id,refs:1,parts:a}}}}function o(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u=i[1],l=i[2],s=i[3],c={css:u,media:l,sourceMap:s};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]})}return r}function i(e,t){var r=b(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=y[y.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function u(e){var t=document.createElement("style");return e.attrs.type="text/css",s(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",s(t,e.attrs),i(e,t),t}function s(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function c(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=g++;r=v||(v=u(t)),n=f.bind(null,r,s,!1),o=f.bind(null,r,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(t),n=m.bind(null,r,t),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=u(t),n=d.bind(null,r),o=function(){a(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function f(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function m(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=_(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}var p={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e.call(this,r)),t[r]}}(function(e){return document.querySelector(e)}),v=null,g=0,y=[],_=r(11);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},void 0===t.singleton&&(t.singleton=h()),void 0===t.insertInto&&(t.insertInto="head"),void 0===t.insertAt&&(t.insertAt="bottom");var r=o(e,t);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var u=r[a],l=p[u.id];l.refs--,i.push(l)}if(e){n(o(e,t),t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete p[l.id]}}}};var w=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}],[6]);
//# sourceMappingURL=main.js.map