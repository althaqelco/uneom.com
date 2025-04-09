(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8727],{86910:function(e,t,r){Promise.resolve().then(r.bind(r,17714))},33145:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var n=r(48461),a=r.n(n)},99376:function(e,t,r){"use strict";var n=r(35475);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}}),r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},48667:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var n=r(88003),a=r.n(n)},40257:function(e,t,r){"use strict";var n,a;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(44227)},44227:function(e){!function(){var t={229:function(e){var t,r,n,a=e.exports={};function s(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&m())}function m(){if(!c){var e=o(d);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||c||o(m)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var s=r[e]={exports:{}},i=!0;try{t[e](s,s.exports,n),i=!1}finally{i&&delete r[e]}return s.exports}n.ab="//";var a=n(229);e.exports=a}()},48461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let n=r(47043),a=r(55346),s=r(65878),i=n._(r(5084));function o(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},17714:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(57437);r(2265);var a=r(27648),s=r(71924),i=r(99376),o=r(52434),l=r(98605),c=r(33145),u=r(56334);function d(){let e=(0,i.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"bg-neutral-50 py-8",children:(0,n.jsxs)(o.default,{children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)(l.default,{items:[{label:"Home",href:"/"},{label:"Shop",href:"/shop"},{label:"Industrial Uniforms",href:"/shop/industrial-uniforms"},{label:"Flame Resistant Workwear",href:"#"}],locale:"en"})}),(0,n.jsxs)("button",{onClick:()=>{e.back()},className:"flex items-center text-neutral-600 hover:text-primary-600 transition-colors mb-6",children:[(0,n.jsx)(s.Z,{className:"h-4 w-4 mr-1"}),(0,n.jsx)("span",{children:"Back"})]})]})}),(0,n.jsxs)(o.default,{className:"py-12",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",children:[(0,n.jsx)("div",{className:"space-y-4",children:(0,n.jsx)("div",{className:"relative aspect-square rounded-xl overflow-hidden bg-white border border-neutral-200",children:(0,n.jsx)(c.default,{src:"/images/products/flame-resistant-workwear.webp",alt:"Flame Resistant Workwear",fill:!0,className:"object-cover"})})}),(0,n.jsxs)("div",{className:"space-y-8",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{className:"text-primary-600 font-medium mb-2",children:"Advanced Protection for Hazardous Environments"}),(0,n.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"Flame Resistant Workwear Set"}),(0,n.jsx)("p",{className:"text-xl font-semibold text-neutral-900 mb-4",children:"SAR 549 - 749"}),(0,n.jsx)("p",{className:"text-neutral-600",children:"High-quality flame and heat-resistant workwear set, specifically designed for workers in petroleum and electrical industries. Provides maximum protection while maintaining comfort and performance."})]}),(0,n.jsx)("div",{className:"py-4 border-t border-b border-neutral-200",children:(0,n.jsxs)("p",{className:"text-neutral-600",children:[(0,n.jsx)("span",{className:"font-medium",children:"Product Code:"})," FR-SET-2023"]})}),(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,n.jsx)(u.default,{variant:"primary",className:"w-full sm:w-auto",children:"Add to Quote"}),(0,n.jsx)(a.default,{href:"/contact",passHref:!0,children:(0,n.jsx)(u.default,{variant:"outline",className:"w-full sm:w-auto",children:"Request Information"})})]})]})]}),(0,n.jsx)("div",{className:"mt-16 border-t border-neutral-200 pt-10",children:(0,n.jsxs)("div",{className:"prose max-w-none",children:[(0,n.jsx)("h2",{children:"Product Description"}),(0,n.jsx)("p",{children:"The Flame Resistant Workwear Set is the optimal solution for workers in industrial environments exposed to flame and high heat hazards. Specifically designed according to the highest global safety standards to ensure protection for workers in oil, gas, petrochemical, and electrical industries in Saudi Arabia."}),(0,n.jsx)("p",{children:"This set is manufactured from advanced inherently flame-resistant materials that self-extinguish when the flame source is removed. The set provides superior protection against thermal flash and radiant heat hazards, while maintaining flame-resistant properties even after repeated washing."})]})})]})]})}},98605:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(27648),s=r(99376),i=r(48667),o=r(40257);t.default=e=>{let{locale:t="en",items:r,className:l="",homeLabel:c,includeHome:u=!0,maxItems:d=0,separator:m="/"}=e,f=(0,s.usePathname)(),h="ar"===t,p=r||(()=>{if("/"===f||"/ar"===f)return[];let e=f;"ar"===t&&f.startsWith("/ar")&&(e=f.replace(/^\/ar/,""));let r=e.split("/").filter(Boolean);return r.map((e,n)=>({label:e.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase()),href:"".concat("ar"===t?"/ar":"","/").concat(r.slice(0,n+1).join("/"))}))})(),x=u?[{label:c||("ar"===t?"الرئيسية":"Home"),href:"ar"===t?"/ar":"/"},...p]:p,g=d>0&&x.length>d?[...x.slice(0,d-1),x[x.length-1]]:x;if(0===g.length)return null;let b={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:x.map((e,t)=>({"@type":"ListItem",position:t+1,name:e.label,item:"".concat(o.env.NEXT_PUBLIC_SITE_URL||"https://uneom.com").concat(e.href)}))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("nav",{"aria-label":"ar"===t?"مسار التنقل":"Breadcrumb",className:"text-sm ".concat(l),children:(0,n.jsx)("ol",{className:"flex flex-wrap items-center ".concat(h?"flex-row-reverse":""),children:g.map((e,t)=>{let r=t===g.length-1;return(0,n.jsxs)("li",{className:"flex items-center ".concat(r?"text-neutral-700 font-medium":"text-neutral-500"),children:[t>0&&(0,n.jsx)("span",{className:"mx-2 text-neutral-400 ".concat(h?"transform rotate-180":""),"aria-hidden":"true",children:m}),r?(0,n.jsx)("span",{className:"text-neutral-700 font-medium",children:e.label}):(0,n.jsx)(a.default,{href:e.href,className:"hover:text-primary-600 transition-colors duration-200",children:e.label})]},e.href)})})}),(0,n.jsx)(i.default,{id:"breadcrumb-schema",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(b)}})]})}},56334:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(27648);t.default=e=>{let{children:t,variant:r="primary",size:s="md",href:i,target:o,onClick:l,fullWidth:c=!1,className:u="",disabled:d=!1,ariaLabel:m,type:f="button"}=e,h="\n    ".concat("inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"," \n    ").concat({sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"}[s]," \n    ").concat({primary:"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-300",secondary:"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300",outline:"bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300 disabled:border-primary-300",ghost:"bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300"}[r]," \n    ").concat(c?"w-full":""," \n    ").concat(u,"\n  ").trim();return i?(0,n.jsx)(a.default,{href:i,className:h,target:o,"aria-label":m,onClick:l,children:t}):(0,n.jsx)("button",{type:f,className:h,onClick:l,disabled:d,"aria-label":m,children:t})}},52434:function(e,t,r){"use strict";var n=r(57437);r(2265),t.default=e=>{let{children:t,className:r="",size:a="lg"}=e;return(0,n.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[a]," ").concat(r),children:t})}},71924:function(e,t,r){"use strict";var n=r(2265);let a=n.forwardRef(function(e,t){let{title:r,titleId:a,...s}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},s),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=a}},function(e){e.O(0,[2972,5878,3255,2971,2117,1744],function(){return e(e.s=86910)}),_N_E=e.O()}]);