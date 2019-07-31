/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/core/assets/vendor/jquery-once/jquery.once.min.js. */
/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/core/assets/vendor/jquery-once/jquery.once.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/core/misc/drupalSettingsLoader.js. */
(function(){var t=document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');window.drupalSettings={};if(t!==null){window.drupalSettings=JSON.parse(t.textContent)}})();
/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/core/misc/drupalSettingsLoader.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/sites/default/files/languages/zh-hans_UIfCn-3j4xW8ycs2vwfYDPDjLKjrYJspbH_sL-weLyI.js. */
window.drupalTranslations = {"strings":{"":{"Search":"Search","@count contextual link\u0003@count contextual links":"\u0003","1 block is available in the modified list.\u0003@count blocks are available in the modified list.":"\u0003"}},"pluralFormula":{"0":0,"1":0,"default":1}};
/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/sites/default/files/languages/zh-hans_UIfCn-3j4xW8ycs2vwfYDPDjLKjrYJspbH_sL-weLyI.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/core/misc/drupal.js. */
;window.Drupal={behaviors:{},locale:{}};(function(t,r,e){t.throwError=function(t){setTimeout(function(){throw t},0)};t.attachBehaviors=function(e,n){e=e||document;n=n||r;var o=t.behaviors;Object.keys(o||{}).forEach(function(r){if(typeof o[r].attach==='function'){try{o[r].attach(e,n)}catch(a){t.throwError(a)}}})};t.detachBehaviors=function(e,n,o){e=e||document;n=n||r;o=o||'unload';var a=t.behaviors;Object.keys(a||{}).forEach(function(r){if(typeof a[r].detach==='function'){try{a[r].detach(e,n,o)}catch(c){t.throwError(c)}}})};t.checkPlain=function(t){t=t.toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');return t};t.formatString=function(e,r){var n={};Object.keys(r||{}).forEach(function(e){switch(e.charAt(0)){case'@':n[e]=t.checkPlain(r[e]);break;case'!':n[e]=r[e];break;default:n[e]=t.theme('placeholder',r[e]);break}});return t.stringReplace(e,n,null)};t.stringReplace=function(e,n,r){if(e.length===0){return e};if(!Array.isArray(r)){r=Object.keys(n||{});r.sort(function(t,e){return t.length-e.length})};if(r.length===0){return e};var c=r.pop(),a=e.split(c);if(r.length){for(var o=0;o<a.length;o++){a[o]=t.stringReplace(a[o],n,r.slice(0))}};return a.join(n[c])};t.t=function(r,o,n){n=n||{};n.context=n.context||'';if(typeof e!=='undefined'&&e.strings&&e.strings[n.context]&&e.strings[n.context][r]){r=e.strings[n.context][r]};if(o){r=t.formatString(r,o)};return r};t.url=function(t){return r.path.baseUrl+r.path.pathPrefix+t};t.url.toAbsolute=function(t){var r=document.createElement('a');try{t=decodeURIComponent(t)}catch(e){};r.setAttribute('href',t);return r.cloneNode(!1).href};t.url.isLocal=function(e){var n=t.url.toAbsolute(e),c=location.protocol;if(c==='http:'&&n.indexOf('https:')===0){c='https:'};var o=c+'//'+location.host+r.path.baseUrl.slice(0,-1);try{n=decodeURIComponent(n)}catch(a){};try{o=decodeURIComponent(o)}catch(a){};return n===o||n.indexOf(o+'/')===0};t.formatPlural=function(n,o,a,c,u){c=c||{};c['@count']=n;var l=r.pluralDelimiter,f=t.t(o+l+a,c,u).split(l),i=0;if(typeof e!=='undefined'&&e.pluralFormula){i=n in e.pluralFormula?e.pluralFormula[n]:e.pluralFormula.default}
else if(c['@count']!==1){i=1};return f[i]};t.encodePath=function(t){return window.encodeURIComponent(t).replace(/%2F/g,'/')};t.theme=function(e){if(e in t.theme){var a;for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++){o[r-1]=arguments[r]};return(a=t.theme)[e].apply(a,o)}};t.theme.placeholder=function(e){return'<em class="placeholder">'+t.checkPlain(e)+'</em>'}})(Drupal,window.drupalSettings,window.drupalTranslations);
/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/core/misc/drupal.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/core/misc/drupal.init.js. */
;if(window.jQuery){jQuery.noConflict()};document.documentElement.className+=' js';(function(n,e,o){n(function(){e.attachBehaviors(document,o)})})(domready,Drupal,window.drupalSettings);
/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/core/misc/drupal.init.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/data-min.js. */
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}})});
/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/data-min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/disable-selection-min.js. */
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});
/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/disable-selection-min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/form-min.js. */
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)}});
/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/form-min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/labels-min.js. */
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],a):a(jQuery)}(function(a){return a.fn.labels=function(){var b,c,d,e,f;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))}});
/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/labels-min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/jquery-1-7-min.js. */
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){"1.7"===a.fn.jquery.substring(0,3)&&(a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))})});
/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/jquery-1-7-min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/scroll-parent-min.js. */
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)}});
/* Source and licensing information for the above line(s) can be found at https://www.nokia.com/core/assets/vendor/jquery.ui/ui/scroll-parent-min.js. */;
