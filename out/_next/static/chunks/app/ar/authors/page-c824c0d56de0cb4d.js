(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3533],{7578:function(e,t,r){Promise.resolve().then(r.t.bind(r,65878,23)),Promise.resolve().then(r.t.bind(r,72972,23)),Promise.resolve().then(r.bind(r,93094)),Promise.resolve().then(r.bind(r,52434))},33145:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(48461),o=r.n(n)},27648:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(72972),o=r.n(n)},99376:function(e,t,r){"use strict";var n=r(35475);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}}),r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},40257:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(44227)},44227:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c=[],l=!1,s=-1;function f(){l&&n&&(l=!1,n.length?c=n.concat(c):s=-1,c.length&&d())}function d(){if(!l){var e=u(f);l=!0;for(var t=c.length;t;){for(n=c,c=[];++s<t;)n&&n[s].run();s=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||l||u(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},48461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},getImageProps:function(){return u}});let n=r(47043),o=r(55346),i=r(65878),a=n._(r(5084));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=i.Image},93094:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var n=r(57437),o=r(2265),i=r(20911),a=r(81131),u=r(99376),c=r(40257),l=()=>((0,o.useEffect)(()=>{window.location.hostname.includes("vercel.app")||c.env.NEXT_PUBLIC_VERCEL_ENV;let e=()=>{document.querySelectorAll("img").forEach(e=>{let t=e.getAttribute("src");if(t){if(t.includes("${")&&t.includes("}")){console.warn("Found unprocessed template literal in image:",t),e.setAttribute("data-original-src",t);let r=t.split("${")[0];e.setAttribute("src","".concat(r,"default-placeholder.jpg"))}if(t.includes("undefined")){console.warn("Found undefined in image path:",t),e.setAttribute("data-original-src",t);let r=t.replace(/undefined/g,"");e.setAttribute("src",r)}}})};e();let t=new MutationObserver(t=>{t.forEach(t=>{"childList"===t.type&&t.addedNodes.length>0&&e()})});return t.observe(document.body,{childList:!0,subtree:!0}),()=>{t.disconnect()}},[]),null),s=r(49089),f=e=>{let{phoneNumber:t,message:r="",position:o="right",locale:i="en"}=e,a="https://wa.me/".concat(t).concat(r?"?text=".concat(encodeURIComponent(r)):"");return(0,n.jsxs)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 ".concat("left"===o||"ar"===i?"left-6":"right-6"," z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"),style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)"},"aria-label":"ar"===i?"تواصل معنا عبر واتساب":"Contact us via WhatsApp",children:[(0,n.jsx)("span",{className:"absolute inset-0 rounded-full animate-ping opacity-70",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)",animationDuration:"1.5s"}}),(0,n.jsx)(s.xpo,{className:"relative z-10 text-white w-7 h-7"})]})},d=e=>{let{children:t,locale:r="en"}=e,o="ar"===r,c=(0,u.usePathname)();return(0,n.jsxs)("div",{className:"min-h-screen flex flex-col",dir:o?"rtl":"ltr",children:[(0,n.jsx)(l,{}),(0,n.jsx)(i.Z,{locale:r}),(0,n.jsx)("main",{className:"flex-grow ".concat("/"===c||"/ar"===c?"pt-0":"pt-24"),children:t}),(0,n.jsx)(a.Z,{locale:r}),(0,n.jsx)(f,{phoneNumber:"971558164922",locale:r,position:o?"left":"right"})]})}},52434:function(e,t,r){"use strict";var n=r(57437);r(2265),t.default=e=>{let{children:t,className:r="",size:o="lg"}=e;return(0,n.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[o]," ").concat(r),children:t})}},46231:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=["attr","size","title"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e){return t=>n.createElement(f,u({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:i,title:c}=e,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[7699,1694,8422,2972,5878,8335,7065,2971,2117,1744],function(){return e(e.s=7578)}),_N_E=e.O()}]);