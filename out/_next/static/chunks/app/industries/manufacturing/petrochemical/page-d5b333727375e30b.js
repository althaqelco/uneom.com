(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4839],{96166:function(e,t,r){Promise.resolve().then(r.bind(r,53154))},48667:function(e,t,r){"use strict";r.d(t,{default:function(){return i.a}});var a=r(88003),i=r.n(a)},40257:function(e,t,r){"use strict";var a,i;e.exports=(null==(a=r.g.process)?void 0:a.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(44227)},44227:function(e){!function(){var t={229:function(e){var t,r,a,i=e.exports={};function n(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===n||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:n}catch(e){t=n}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c=[],o=!1,u=-1;function m(){o&&a&&(o=!1,a.length?c=a.concat(c):u=-1,c.length&&d())}function d(){if(!o){var e=l(m);o=!0;for(var t=c.length;t;){for(a=c,c=[];++u<t;)a&&a[u].run();u=-1,t=c.length}a=null,o=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new f(e,t)),1!==c.length||o||l(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function a(e){var i=r[e];if(void 0!==i)return i.exports;var n=r[e]={exports:{}},s=!0;try{t[e](n,n.exports,a),s=!1}finally{s&&delete r[e]}return n.exports}a.ab="//";var i=a(229);e.exports=i}()},53154:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(57437);r(2265);var i=r(33145),n=r(44516),s=r(49089),l=r(52434),c=r(56334),o=r(98605),u=r(3377);let m={hero:{title:"Petrochemical Industry Solutions",subtitle:"Advanced Safety Workwear for Saudi Arabia's Petrochemical Sector",image:"/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg"},stats:[{value:"ISO 11612",label:"Fire Protection"},{value:"NFPA 2112",label:"FR Standards"},{value:"EN 13034",label:"Chemical Protection"},{value:"24/7",label:"Support"}],features:[{icon:(0,a.jsx)(s.bri,{className:"w-6 h-6"}),title:"Chemical Resistance",description:"Advanced fabric technology providing protection against harsh chemicals and corrosive substances."},{icon:(0,a.jsx)(s.SjQ,{className:"w-6 h-6"}),title:"Flame Resistant",description:"FR-rated materials meeting international safety standards for petrochemical environments."},{icon:(0,a.jsx)(s.FJM,{className:"w-6 h-6"}),title:"Comfort Focus",description:"Engineered for extended wear in high-temperature petrochemical facilities."}],products:[{name:"Premium FR Coverall",image:"/images/industries/manufacturing/manufacturing_uniform_product2.jpg",features:["Chemical Splash Protection","Anti-Static Properties","High Visibility Elements"]},{name:"Chemical Resistant Set",image:"/images/industries/manufacturing/manufacturing_uniform_product1.jpg",features:["Acid Resistant Fabric","Reinforced Seams","Moisture Management"]}]};function d(){let e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.default,{className:"py-8 md:py-12",children:[(0,a.jsx)(o.Z,{items:[{label:"Home",href:"/"},{label:"Industries",href:"/industries"},{label:"Manufacturing",href:"/industries/manufacturing"},{label:"Petrochemical",href:"/industries/manufacturing/petrochemical"}]}),(0,a.jsxs)(n.E.div,{className:"mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",initial:"hidden",animate:"visible",variants:t,children:[(0,a.jsxs)(n.E.div,{variants:e,className:"space-y-6",children:[(0,a.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-primary-800 font-heading",children:m.hero.title}),(0,a.jsx)("p",{className:"text-xl text-neutral-600",children:m.hero.subtitle}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,a.jsxs)(c.Z,{href:"/contact",variant:"primary",size:"lg",className:"flex items-center justify-center gap-2",children:["Request Consultation ",(0,a.jsx)(s.Z1Y,{})]}),(0,a.jsx)(c.Z,{href:"/products/petrochemical",variant:"outline",size:"lg",children:"View Products"})]})]}),(0,a.jsx)(n.E.div,{variants:e,className:"relative h-[400px] rounded-lg overflow-hidden shadow-xl",children:(0,a.jsx)(i.default,{src:m.hero.image,alt:"Petrochemical Industry Workwear",fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, 50vw",priority:!0})})]}),(0,a.jsx)(n.E.div,{className:"mt-16 grid grid-cols-2 md:grid-cols-4 gap-8",initial:"hidden",animate:"visible",variants:t,children:m.stats.map((t,r)=>(0,a.jsxs)(n.E.div,{variants:e,className:"text-center space-y-2",children:[(0,a.jsx)("div",{className:"text-2xl font-bold text-primary-700",children:t.value}),(0,a.jsx)("div",{className:"text-neutral-600",children:t.label})]},r))}),(0,a.jsxs)(n.E.div,{className:"mt-20",initial:"hidden",animate:"visible",variants:t,children:[(0,a.jsx)(u.default,{subtitle:"Engineered for Petrochemical Safety",centered:!0,children:"Industry-Specific Features"}),(0,a.jsx)("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-3 gap-8",children:m.features.map((t,r)=>(0,a.jsxs)(n.E.div,{variants:e,className:"p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow",children:[(0,a.jsx)("div",{className:"text-primary-600 mb-4",children:t.icon}),(0,a.jsx)("h3",{className:"text-xl font-semibold text-neutral-800 mb-2",children:t.title}),(0,a.jsx)("p",{className:"text-neutral-600",children:t.description})]},r))})]}),(0,a.jsxs)(n.E.div,{className:"mt-20",initial:"hidden",animate:"visible",variants:t,children:[(0,a.jsx)(u.default,{subtitle:"Specialized for Petrochemical Industry",centered:!0,children:"Featured Products"}),(0,a.jsx)("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-2 gap-8",children:m.products.map((t,r)=>(0,a.jsxs)(n.E.div,{variants:e,className:"group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow",children:[(0,a.jsx)("div",{className:"aspect-video relative",children:(0,a.jsx)(i.default,{src:t.image,alt:t.name,fill:!0,className:"object-cover group-hover:scale-105 transition-transform duration-300",sizes:"(max-width: 768px) 100vw, 50vw"})}),(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold text-neutral-800 mb-4",children:t.name}),(0,a.jsx)("ul",{className:"space-y-2",children:t.features.map((e,t)=>(0,a.jsxs)("li",{className:"flex items-center gap-2 text-neutral-600",children:[(0,a.jsx)(s.FJM,{className:"text-green-500 flex-shrink-0"}),e]},t))})]})]},r))})]}),(0,a.jsx)(n.E.div,{className:"mt-20 bg-primary-50 rounded-2xl p-8 md:p-12",initial:"hidden",animate:"visible",variants:e,children:(0,a.jsxs)("div",{className:"text-center max-w-3xl mx-auto space-y-6",children:[(0,a.jsx)("h2",{className:"text-3xl md:text-4xl font-bold text-primary-800 font-heading",children:"Ready to Enhance Your Petrochemical Safety?"}),(0,a.jsx)("p",{className:"text-lg text-neutral-600",children:"Contact us for a customized solution that meets your specific requirements and safety standards."}),(0,a.jsx)(c.Z,{href:"/contact",variant:"primary",size:"lg",className:"mt-4",children:"Schedule a Consultation"})]})})]})})}},98605:function(e,t,r){"use strict";var a=r(57437);r(2265);var i=r(27648),n=r(99376),s=r(48667),l=r(40257);t.Z=e=>{let{locale:t="en",items:r,className:c="",homeLabel:o,includeHome:u=!0,maxItems:m=0,separator:d="/"}=e,f=(0,n.usePathname)(),h="ar"===t,p=r||(()=>{if("/"===f||"/ar"===f)return[];let e=f;"ar"===t&&f.startsWith("/ar")&&(e=f.replace(/^\/ar/,""));let r=e.split("/").filter(Boolean);return r.map((e,a)=>({label:e.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase()),href:"".concat("ar"===t?"/ar":"","/").concat(r.slice(0,a+1).join("/"))}))})(),x=u?[{label:o||("ar"===t?"الرئيسية":"Home"),href:"ar"===t?"/ar":"/"},...p]:p,g=m>0&&x.length>m?[...x.slice(0,m-1),x[x.length-1]]:x;if(0===g.length)return null;let v={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:x.map((e,t)=>({"@type":"ListItem",position:t+1,name:e.label,item:"".concat(l.env.NEXT_PUBLIC_SITE_URL||"https://uneom.com").concat(e.href)}))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("nav",{"aria-label":"ar"===t?"مسار التنقل":"Breadcrumb",className:"text-sm ".concat(c),children:(0,a.jsx)("ol",{className:"flex flex-wrap items-center ".concat(h?"flex-row-reverse":""),children:g.map((e,t)=>{let r=t===g.length-1;return(0,a.jsxs)("li",{className:"flex items-center ".concat(r?"text-neutral-700 font-medium":"text-neutral-500"),children:[t>0&&(0,a.jsx)("span",{className:"mx-2 text-neutral-400 ".concat(h?"transform rotate-180":""),"aria-hidden":"true",children:d}),r?(0,a.jsx)("span",{className:"text-neutral-700 font-medium",children:e.label}):(0,a.jsx)(i.default,{href:e.href,className:"hover:text-primary-600 transition-colors duration-200",children:e.label})]},e.href)})})}),(0,a.jsx)(s.default,{id:"breadcrumb-schema",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}})]})}},56334:function(e,t,r){"use strict";var a=r(57437);r(2265);var i=r(27648);t.Z=e=>{let{children:t,variant:r="primary",size:n="md",href:s,target:l,onClick:c,fullWidth:o=!1,className:u="",disabled:m=!1,ariaLabel:d,type:f="button"}=e,h="\n    ".concat("inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"," \n    ").concat({sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"}[n]," \n    ").concat({primary:"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-300",secondary:"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300",outline:"bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300 disabled:border-primary-300",ghost:"bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300"}[r]," \n    ").concat(o?"w-full":""," \n    ").concat(u,"\n  ").trim();return s?(0,a.jsx)(i.default,{href:s,className:h,target:l,"aria-label":d,onClick:c,children:t}):(0,a.jsx)("button",{type:f,className:h,onClick:c,disabled:m,"aria-label":d,children:t})}},52434:function(e,t,r){"use strict";var a=r(57437);r(2265),t.default=e=>{let{children:t,className:r="",size:i="lg"}=e;return(0,a.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[i]," ").concat(r),children:t})}},3377:function(e,t,r){"use strict";var a=r(57437);r(2265),t.default=e=>{let{children:t,subtitle:r,centered:i=!1,className:n="",as:s="h2",decoration:l=!0}=e,c=i?"text-center":"text-left";return(0,a.jsxs)("div",{className:"mb-8 ".concat(c," ").concat(n),children:[(0,a.jsxs)(s,{className:"".concat("font-heading font-bold text-neutral-900"," ").concat({h1:"text-4xl sm:text-5xl lg:text-6xl",h2:"text-3xl sm:text-4xl",h3:"text-2xl sm:text-3xl",h4:"text-xl sm:text-2xl"}[s]," relative"),children:[t,l&&i&&(0,a.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mx-auto mt-4"}),l&&!i&&(0,a.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mt-4"})]}),r&&(0,a.jsx)("p",{className:"mt-4 text-lg text-neutral-600 max-w-3xl mx-auto",children:r})]})}},46231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var a=r(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(i),s=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var a,i;a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>a.createElement(m,l({attr:o({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,o({key:r},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var r,{attr:i,size:n,title:c}=e,u=function(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,s),m=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==n?a.createElement(n.Consumer,null,e=>t(e)):t(i)}}},function(e){e.O(0,[7699,2972,5878,4516,8936,2971,2117,1744],function(){return e(e.s=96166)}),_N_E=e.O()}]);