(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[885],{33145:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var n=r(48461),a=r.n(n)},27648:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var n=r(72972),a=r.n(n)},48667:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var n=r(88003),a=r.n(n)},40257:function(e,t,r){"use strict";var n,a;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(44227)},44227:function(e){!function(){var t={229:function(e){var t,r,n,a=e.exports={};function i(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var o=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?o=n.concat(o):u=-1,o.length&&m())}function m(){if(!c){var e=s(d);c=!0;for(var t=o.length;t;){for(n=o,o=[];++u<t;)n&&n[u].run();u=-1,t=o.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];o.push(new f(e,t)),1!==o.length||c||s(m)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}},l=!0;try{t[e](i,i.exports,n),l=!1}finally{l&&delete r[e]}return i.exports}n.ab="//";var a=n(229);e.exports=a}()},48461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return s}});let n=r(47043),a=r(55346),i=r(65878),l=n._(r(5084));function s(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=i.Image},10095:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(56334),i=r(99376);t.Z=e=>{let{product:t,quantity:r=1,color:l,size:s,className:o="",redirectToQuote:c=!1}=e,u=(0,i.useRouter)();return(0,n.jsx)(a.Z,{variant:"primary",onClick:()=>{let e={id:t.id,name:t.name,price:t.price,quantity:r,image:t.image,category:t.category,color:l,size:s},n=localStorage.getItem("quoteItems"),a=n?JSON.parse(n):[],i=a.findIndex(e=>e.id===t.id&&e.color===l&&e.size===s);i>=0?a[i].quantity+=r:a.push(e),localStorage.setItem("quoteItems",JSON.stringify(a)),c?u.push("/quote"):alert("".concat(t.name," added to your quote request."))},className:"w-full justify-center ".concat(o),children:"Add to Quote"})}},98605:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(27648),i=r(99376),l=r(48667),s=r(40257);t.Z=e=>{let{locale:t="en",items:r,className:o="",homeLabel:c,includeHome:u=!0,maxItems:d=0,separator:m="/"}=e,f=(0,i.usePathname)(),h="ar"===t,p=r||(()=>{if("/"===f||"/ar"===f)return[];let e=f;"ar"===t&&f.startsWith("/ar")&&(e=f.replace(/^\/ar/,""));let r=e.split("/").filter(Boolean);return r.map((e,n)=>({label:e.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase()),href:"".concat("ar"===t?"/ar":"","/").concat(r.slice(0,n+1).join("/"))}))})(),x=u?[{label:c||("ar"===t?"الرئيسية":"Home"),href:"ar"===t?"/ar":"/"},...p]:p,y=d>0&&x.length>d?[...x.slice(0,d-1),x[x.length-1]]:x;if(0===y.length)return null;let g={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:x.map((e,t)=>({"@type":"ListItem",position:t+1,name:e.label,item:"".concat(s.env.NEXT_PUBLIC_SITE_URL||"https://uneom.com").concat(e.href)}))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("nav",{"aria-label":"ar"===t?"مسار التنقل":"Breadcrumb",className:"text-sm ".concat(o),children:(0,n.jsx)("ol",{className:"flex flex-wrap items-center ".concat(h?"flex-row-reverse":""),children:y.map((e,t)=>{let r=t===y.length-1;return(0,n.jsxs)("li",{className:"flex items-center ".concat(r?"text-neutral-700 font-medium":"text-neutral-500"),children:[t>0&&(0,n.jsx)("span",{className:"mx-2 text-neutral-400 ".concat(h?"transform rotate-180":""),"aria-hidden":"true",children:m}),r?(0,n.jsx)("span",{className:"text-neutral-700 font-medium",children:e.label}):(0,n.jsx)(a.default,{href:e.href,className:"hover:text-primary-600 transition-colors duration-200",children:e.label})]},e.href)})})}),(0,n.jsx)(l.default,{id:"breadcrumb-schema",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(g)}})]})}},56334:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(27648);t.Z=e=>{let{children:t,variant:r="primary",size:i="md",href:l,target:s,onClick:o,fullWidth:c=!1,className:u="",disabled:d=!1,ariaLabel:m,type:f="button"}=e,h="\n    ".concat("inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"," \n    ").concat({sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"}[i]," \n    ").concat({primary:"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-300",secondary:"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300",outline:"bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300 disabled:border-primary-300",ghost:"bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300"}[r]," \n    ").concat(c?"w-full":""," \n    ").concat(u,"\n  ").trim();return l?(0,n.jsx)(a.default,{href:l,className:h,target:s,"aria-label":m,onClick:o,children:t}):(0,n.jsx)("button",{type:f,className:h,onClick:o,disabled:d,"aria-label":m,children:t})}},52434:function(e,t,r){"use strict";var n=r(57437);r(2265),t.default=e=>{let{children:t,className:r="",size:a="lg"}=e;return(0,n.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[a]," ").concat(r),children:t})}},3377:function(e,t,r){"use strict";var n=r(57437);r(2265),t.default=e=>{let{children:t,subtitle:r,centered:a=!1,className:i="",as:l="h2",decoration:s=!0}=e,o=a?"text-center":"text-left";return(0,n.jsxs)("div",{className:"mb-8 ".concat(o," ").concat(i),children:[(0,n.jsxs)(l,{className:"".concat("font-heading font-bold text-neutral-900"," ").concat({h1:"text-4xl sm:text-5xl lg:text-6xl",h2:"text-3xl sm:text-4xl",h3:"text-2xl sm:text-3xl",h4:"text-xl sm:text-2xl"}[l]," relative"),children:[t,s&&a&&(0,n.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mx-auto mt-4"}),s&&!a&&(0,n.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mt-4"})]}),r&&(0,n.jsx)("p",{className:"mt-4 text-lg text-neutral-600 max-w-3xl mx-auto",children:r})]})}},7406:function(e,t,r){"use strict";var n=r(57437);r(2265);var a=r(33145),i=r(99751);t.Z=e=>{let{name:t,role:r,company:l,quote:s,image:o,logo:c,locale:u="en"}=e,d="ar"===u,m=(0,i.aK)(o,u),f=c?(0,i.aK)(c,u):null;return(0,n.jsxs)("div",{className:"bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md p-6 h-full flex flex-col",dir:d?"rtl":"ltr",children:[(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("svg",{className:"h-8 w-8 text-primary-400 mb-4 ".concat(d?"transform rotate-180":""),fill:"currentColor",viewBox:"0 0 32 32","aria-hidden":"true",children:(0,n.jsx)("path",{d:"M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"})}),(0,n.jsx)("p",{className:"text-neutral-700 italic relative z-10 ".concat(d?"text-right":""),children:s})]}),(0,n.jsxs)("div",{className:"mt-auto flex items-center",children:[(0,n.jsx)("div",{className:"relative h-12 w-12 rounded-full overflow-hidden",children:(0,n.jsx)(a.default,{src:m,alt:t,fill:!0,className:"object-cover"})}),(0,n.jsxs)("div",{className:"".concat(d?"mr-4":"ml-4"),children:[(0,n.jsx)("h4",{className:"font-bold text-neutral-900",children:t}),(0,n.jsxs)("p",{className:"text-sm text-neutral-500",children:[r,l?", ".concat(l):""]})]}),f&&(0,n.jsx)("div",{className:"".concat(d?"mr-auto":"ml-auto"," flex-shrink-0"),children:(0,n.jsx)("div",{className:"relative h-8 w-auto",children:(0,n.jsx)(a.default,{src:f,alt:l,width:100,height:32,className:"object-contain h-8",style:{maxWidth:"100px"}})})})]})]})}},92184:function(e,t,r){"use strict";r.d(t,{F:function(){return c},QuoteProvider:function(){return o}});var n=r(57437),a=r(2265);let i={items:[],itemCount:0},l=(0,a.createContext)(void 0),s=(e,t)=>{switch(t.type){case"ADD_ITEM":{let r=e.items.findIndex(e=>e.id===t.payload.id);if(-1!==r){let n=[...e.items];return n[r]={...n[r],quantity:n[r].quantity+t.payload.quantity},{...e,items:n}}return{...e,items:[...e.items,t.payload],itemCount:e.itemCount+1}}case"REMOVE_ITEM":{let r=e.items.filter(e=>e.id!==t.payload.id);return{...e,items:r,itemCount:r.length}}case"UPDATE_QUANTITY":{let r=e.items.map(e=>e.id===t.payload.id?{...e,quantity:t.payload.quantity}:e);return{...e,items:r}}case"CLEAR_QUOTE":return i;default:return e}},o=e=>{let{children:t}=e,[r,o]=(0,a.useReducer)(s,i);return(0,a.useEffect)(()=>{let e=localStorage.getItem("quote");e&&JSON.parse(e).items.forEach(e=>{o({type:"ADD_ITEM",payload:e})})},[]),(0,a.useEffect)(()=>{localStorage.setItem("quote",JSON.stringify(r))},[r]),(0,n.jsx)(l.Provider,{value:{state:r,addItem:e=>{o({type:"ADD_ITEM",payload:e})},removeItem:e=>{o({type:"REMOVE_ITEM",payload:{id:e}})},updateQuantity:(e,t)=>{o({type:"UPDATE_QUANTITY",payload:{id:e,quantity:t}})},clearQuote:()=>{o({type:"CLEAR_QUOTE"})}},children:t})},c=()=>{let e=(0,a.useContext)(l);if(void 0===e)throw Error("useQuote must be used within a QuoteProvider");return e}},99751:function(e,t,r){"use strict";function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";if("en"===t||e.startsWith("http")||e.startsWith("https"))return e;if(e.includes(".")){let r=e.lastIndexOf("."),n=e.substring(0,r),a=e.substring(r);return n.endsWith("-".concat(t))?e:"".concat(n,"-").concat(t).concat(a)}return"".concat(e,"-").concat(t)}r.d(t,{aK:function(){return n}})}}]);