(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9026],{33145:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(48461),o=r.n(n)},27648:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(72972),o=r.n(n)},48667:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(88003),o=r.n(n)},40257:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(44227)},44227:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l=[],u=!1,s=-1;function f(){u&&n&&(u=!1,n.length?l=n.concat(l):s=-1,l.length&&m())}function m(){if(!u){var e=c(f);u=!0;for(var t=l.length;t;){for(n=l,l=[];++s<t;)n&&n[s].run();s=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||u||c(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,n),i=!1}finally{i&&delete r[e]}return a.exports}n.ab="//";var o=n(229);e.exports=o}()},48461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return c}});let n=r(47043),o=r(55346),a=r(65878),i=n._(r(5084));function c(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=a.Image},98605:function(e,t,r){"use strict";var n=r(57437);r(2265);var o=r(27648),a=r(99376),i=r(48667),c=r(40257);t.Z=e=>{let{locale:t="en",items:r,className:l="",homeLabel:u,includeHome:s=!0,maxItems:f=0,separator:m="/"}=e,p=(0,a.usePathname)(),d="ar"===t,h=r||(()=>{if("/"===p||"/ar"===p)return[];let e=p;"ar"===t&&p.startsWith("/ar")&&(e=p.replace(/^\/ar/,""));let r=e.split("/").filter(Boolean);return r.map((e,n)=>({label:e.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase()),href:"".concat("ar"===t?"/ar":"","/").concat(r.slice(0,n+1).join("/"))}))})(),b=s?[{label:u||("ar"===t?"الرئيسية":"Home"),href:"ar"===t?"/ar":"/"},...h]:h,y=f>0&&b.length>f?[...b.slice(0,f-1),b[b.length-1]]:b;if(0===y.length)return null;let v={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:b.map((e,t)=>({"@type":"ListItem",position:t+1,name:e.label,item:"".concat(c.env.NEXT_PUBLIC_SITE_URL||"https://uneom.com").concat(e.href)}))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("nav",{"aria-label":"ar"===t?"مسار التنقل":"Breadcrumb",className:"text-sm ".concat(l),children:(0,n.jsx)("ol",{className:"flex flex-wrap items-center ".concat(d?"flex-row-reverse":""),children:y.map((e,t)=>{let r=t===y.length-1;return(0,n.jsxs)("li",{className:"flex items-center ".concat(r?"text-neutral-700 font-medium":"text-neutral-500"),children:[t>0&&(0,n.jsx)("span",{className:"mx-2 text-neutral-400 ".concat(d?"transform rotate-180":""),"aria-hidden":"true",children:m}),r?(0,n.jsx)("span",{className:"text-neutral-700 font-medium",children:e.label}):(0,n.jsx)(o.default,{href:e.href,className:"hover:text-primary-600 transition-colors duration-200",children:e.label})]},e.href)})})}),(0,n.jsx)(i.default,{id:"breadcrumb-schema",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}})]})}},56334:function(e,t,r){"use strict";var n=r(57437);r(2265);var o=r(27648);t.Z=e=>{let{children:t,variant:r="primary",size:a="md",href:i,target:c,onClick:l,fullWidth:u=!1,className:s="",disabled:f=!1,ariaLabel:m,type:p="button"}=e,d="\n    ".concat("inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"," \n    ").concat({sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"}[a]," \n    ").concat({primary:"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-300",secondary:"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300",outline:"bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300 disabled:border-primary-300",ghost:"bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300"}[r]," \n    ").concat(u?"w-full":""," \n    ").concat(s,"\n  ").trim();return i?(0,n.jsx)(o.default,{href:i,className:d,target:c,"aria-label":m,onClick:l,children:t}):(0,n.jsx)("button",{type:p,className:d,onClick:l,disabled:f,"aria-label":m,children:t})}},52434:function(e,t,r){"use strict";var n=r(57437);r(2265),t.default=e=>{let{children:t,className:r="",size:o="lg"}=e;return(0,n.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[o]," ").concat(r),children:t})}},8038:function(e,t,r){"use strict";r.d(t,{Eu:function(){return o},lv:function(){return a},qw:function(){return i}});let n="+971558164922";function o(e,t,r){let o="Hello, I'm interested in the *".concat(e,"*").concat(t?" (".concat(t,")"):"").concat(r?" - Quantity: ".concat(r):"",". Please provide more information.");return"https://wa.me/".concat(n,"?text=").concat(encodeURIComponent(o))}function a(e){return"https://wa.me/".concat(n,"?text=").concat(encodeURIComponent("Hello, I have a question about ".concat(e,". Can you provide more information?")))}function i(e,t){let r="Hello, I would like to request a quote for *".concat(e,"*").concat(t?"\n\nDetails: ".concat(t):"");return"https://wa.me/".concat(n,"?text=").concat(encodeURIComponent(r))}},46231:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e){return t=>n.createElement(f,c({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,u({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:a,title:l}=e,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(o)}}}]);