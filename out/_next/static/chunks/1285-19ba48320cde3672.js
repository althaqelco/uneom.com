(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1285],{99376:function(e,t,r){"use strict";var n=r(35475);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}}),r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},48667:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var n=r(88003),a=r.n(n)},40257:function(e,t,r){"use strict";var n,a;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(44227)},44227:function(e){!function(){var t={229:function(e){var t,r,n,a=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c=[],l=!1,u=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):u=-1,c.length&&m())}function m(){if(!l){var e=i(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++u<t;)n&&n[u].run();u=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||i(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var a=n(229);e.exports=a}()},98605:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(27648),s=r(99376),o=r(48667),i=r(40257);t.default=e=>{let{locale:t="en",items:r,className:c="",homeLabel:l,includeHome:u=!0,maxItems:d=0,separator:m="/"}=e,h=(0,s.usePathname)(),f="ar"===t,p=r||(()=>{if("/"===h||"/ar"===h)return[];let e=h;"ar"===t&&h.startsWith("/ar")&&(e=h.replace(/^\/ar/,""));let r=e.split("/").filter(Boolean);return r.map((e,n)=>({label:e.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase()),href:"".concat("ar"===t?"/ar":"","/").concat(r.slice(0,n+1).join("/"))}))})(),x=u?[{label:l||("ar"===t?"الرئيسية":"Home"),href:"ar"===t?"/ar":"/"},...p]:p,v=d>0&&x.length>d?[...x.slice(0,d-1),x[x.length-1]]:x;if(0===v.length)return null;let b={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:x.map((e,t)=>({"@type":"ListItem",position:t+1,name:e.label,item:"".concat(i.env.NEXT_PUBLIC_SITE_URL||"https://uneom.com").concat(e.href)}))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("nav",{"aria-label":"ar"===t?"مسار التنقل":"Breadcrumb",className:"text-sm ".concat(c),children:(0,n.jsx)("ol",{className:"flex flex-wrap items-center ".concat(f?"flex-row-reverse":""),children:v.map((e,t)=>{let r=t===v.length-1;return(0,n.jsxs)("li",{className:"flex items-center ".concat(r?"text-neutral-700 font-medium":"text-neutral-500"),children:[t>0&&(0,n.jsx)("span",{className:"mx-2 text-neutral-400 ".concat(f?"transform rotate-180":""),"aria-hidden":"true",children:m}),r?(0,n.jsx)("span",{className:"text-neutral-700 font-medium",children:e.label}):(0,n.jsx)(a.default,{href:e.href,className:"hover:text-primary-600 transition-colors duration-200",children:e.label})]},e.href)})})}),(0,n.jsx)(o.default,{id:"breadcrumb-schema",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(b)}})]})}},30664:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(27648),s=r(33145),o=r(99751);t.Z=e=>{let{product:t,locale:r="en",showAddToQuote:i=!1,className:c=""}=e,{name:l,image:u,price:d,category:m,href:h,discountPercentage:f,isNew:p,isFeatured:x}=t,v="ar"===r,b=(0,o.aK)(u,r);return(0,n.jsx)("div",{className:"group bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ".concat(c),dir:v?"rtl":"ltr",children:(0,n.jsxs)(a.default,{href:h,className:"block",children:[(0,n.jsxs)("div",{className:"relative aspect-square overflow-hidden",children:[(0,n.jsx)(s.default,{src:b,alt:l,fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",className:"object-cover transition-transform duration-300 group-hover:scale-105"}),(0,n.jsxs)("div",{className:"absolute top-2 ".concat(v?"right-2":"left-2"," flex flex-col gap-2"),children:[p&&(0,n.jsx)("span",{className:"bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-md",children:"ar"===r?"جديد":"NEW"}),x&&(0,n.jsx)("span",{className:"bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded-md",children:"ar"===r?"مميز":"FEATURED"})]}),f&&(0,n.jsx)("div",{className:"absolute top-2 ".concat(v?"left-2":"right-2"),children:(0,n.jsx)("span",{className:"bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md",children:"ar"===r?"خصم ".concat(f,"%"):"".concat(f,"% OFF")})})]}),(0,n.jsxs)("div",{className:"p-4",children:[m&&(0,n.jsx)("div",{className:"text-sm text-primary-600 font-medium mb-1",children:m}),(0,n.jsx)("h3",{className:"text-lg font-bold mb-1 transition-colors duration-200 group-hover:text-primary-600",children:l}),d&&(0,n.jsx)("div",{className:"text-neutral-900 font-semibold",children:d}),i&&(0,n.jsx)("button",{className:"mt-3 w-full bg-primary-100 text-primary-800 hover:bg-primary-200 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200",children:"ar"===r?"أضف إلى عرض السعر":"Add to Quote"})]})]})})}},99751:function(e,t,r){"use strict";function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";if("en"===t||e.startsWith("http")||e.startsWith("https"))return e;if(e.includes(".")){let r=e.lastIndexOf("."),n=e.substring(0,r),a=e.substring(r);return n.endsWith("-".concat(t))?e:"".concat(n,"-").concat(t).concat(a)}return"".concat(e,"-").concat(t)}r.d(t,{aK:function(){return n}})}}]);