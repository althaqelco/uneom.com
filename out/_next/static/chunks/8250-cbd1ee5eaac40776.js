(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8250],{33145:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(48461),o=r.n(n)},27648:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(72972),o=r.n(n)},99376:function(e,t,r){"use strict";var n=r(35475);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}}),r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},40257:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(44227)},44227:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l=[],s=!1,u=-1;function f(){s&&n&&(s=!1,n.length?l=n.concat(l):u=-1,l.length&&d())}function d(){if(!s){var e=c(f);s=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||s||c(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,n),i=!1}finally{i&&delete r[e]}return a.exports}n.ab="//";var o=n(229);e.exports=o}()},48461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return c}});let n=r(47043),o=r(55346),a=r(65878),i=n._(r(5084));function c(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=a.Image},93094:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var n=r(57437),o=r(2265),a=r(20911),i=r(81131),c=r(99376),l=r(40257),s=()=>((0,o.useEffect)(()=>{window.location.hostname.includes("vercel.app")||l.env.NEXT_PUBLIC_VERCEL_ENV;let e=()=>{document.querySelectorAll("img").forEach(e=>{let t=e.getAttribute("src");if(t){if(t.includes("${")&&t.includes("}")){console.warn("Found unprocessed template literal in image:",t),e.setAttribute("data-original-src",t);let r=t.split("${")[0];e.setAttribute("src","".concat(r,"default-placeholder.jpg"))}if(t.includes("undefined")){console.warn("Found undefined in image path:",t),e.setAttribute("data-original-src",t);let r=t.replace(/undefined/g,"");e.setAttribute("src",r)}}})};e();let t=new MutationObserver(t=>{t.forEach(t=>{"childList"===t.type&&t.addedNodes.length>0&&e()})});return t.observe(document.body,{childList:!0,subtree:!0}),()=>{t.disconnect()}},[]),null),u=r(49089),f=e=>{let{phoneNumber:t,message:r="",position:o="right",locale:a="en"}=e,i="https://wa.me/".concat(t).concat(r?"?text=".concat(encodeURIComponent(r)):"");return(0,n.jsxs)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 ".concat("left"===o||"ar"===a?"left-6":"right-6"," z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"),style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)"},"aria-label":"ar"===a?"تواصل معنا عبر واتساب":"Contact us via WhatsApp",children:[(0,n.jsx)("span",{className:"absolute inset-0 rounded-full animate-ping opacity-70",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)",animationDuration:"1.5s"}}),(0,n.jsx)(u.xpo,{className:"relative z-10 text-white w-7 h-7"})]})},d=e=>{let{children:t,locale:r="en"}=e,o="ar"===r,l=(0,c.usePathname)();return(0,n.jsxs)("div",{className:"min-h-screen flex flex-col",dir:o?"rtl":"ltr",children:[(0,n.jsx)(s,{}),(0,n.jsx)(a.Z,{locale:r}),(0,n.jsx)("main",{className:"flex-grow ".concat("/"===l||"/ar"===l?"pt-0":"pt-24"),children:t}),(0,n.jsx)(i.Z,{locale:r}),(0,n.jsx)(f,{phoneNumber:"971558164922",locale:r,position:o?"left":"right"})]})}},56334:function(e,t,r){"use strict";var n=r(57437);r(2265);var o=r(27648);t.Z=e=>{let{children:t,variant:r="primary",size:a="md",href:i,target:c,onClick:l,fullWidth:s=!1,className:u="",disabled:f=!1,ariaLabel:d,type:m="button"}=e,p="\n    ".concat("inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"," \n    ").concat({sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"}[a]," \n    ").concat({primary:"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-300",secondary:"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300",outline:"bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300 disabled:border-primary-300",ghost:"bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300"}[r]," \n    ").concat(s?"w-full":""," \n    ").concat(u,"\n  ").trim();return i?(0,n.jsx)(o.default,{href:i,className:p,target:c,"aria-label":d,onClick:l,children:t}):(0,n.jsx)("button",{type:m,className:p,onClick:l,disabled:f,"aria-label":d,children:t})}},52434:function(e,t,r){"use strict";var n=r(57437);r(2265),t.default=e=>{let{children:t,className:r="",size:o="lg"}=e;return(0,n.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[o]," ").concat(r),children:t})}},3377:function(e,t,r){"use strict";var n=r(57437);r(2265),t.default=e=>{let{children:t,subtitle:r,centered:o=!1,className:a="",as:i="h2",decoration:c=!0}=e,l=o?"text-center":"text-left";return(0,n.jsxs)("div",{className:"mb-8 ".concat(l," ").concat(a),children:[(0,n.jsxs)(i,{className:"".concat("font-heading font-bold text-neutral-900"," ").concat({h1:"text-4xl sm:text-5xl lg:text-6xl",h2:"text-3xl sm:text-4xl",h3:"text-2xl sm:text-3xl",h4:"text-xl sm:text-2xl"}[i]," relative"),children:[t,c&&o&&(0,n.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mx-auto mt-4"}),c&&!o&&(0,n.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mt-4"})]}),r&&(0,n.jsx)("p",{className:"mt-4 text-lg text-neutral-600 max-w-3xl mx-auto",children:r})]})}},46231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,c({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:a,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(o)}}}]);