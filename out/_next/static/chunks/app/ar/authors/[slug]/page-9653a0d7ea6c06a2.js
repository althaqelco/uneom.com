(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4935],{70672:function(e,t,r){Promise.resolve().then(r.bind(r,34123))},33145:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var n=r(48461),s=r.n(n)},27648:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var n=r(72972),s=r.n(n)},99376:function(e,t,r){"use strict";var n=r(35475);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}}),r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},40257:function(e,t,r){"use strict";var n,s;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(44227)},44227:function(e){!function(){var t={229:function(e){var t,r,n,s=e.exports={};function a(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var o=[],c=!1,d=-1;function u(){c&&n&&(c=!1,n.length?o=n.concat(o):d=-1,o.length&&m())}function m(){if(!c){var e=i(u);c=!0;for(var t=o.length;t;){for(n=o,o=[];++d<t;)n&&n[d].run();d=-1,t=o.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];o.push(new h(e,t)),1!==o.length||c||i(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}},l=!0;try{t[e](a,a.exports,n),l=!1}finally{l&&delete r[e]}return a.exports}n.ab="//";var s=n(229);e.exports=s}()},48461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return i}});let n=r(47043),s=r(55346),a=r(65878),l=n._(r(5084));function i(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=a.Image},34123:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var n=r(57437);r(2265);var s=r(27648),a=r(33145),l=r(93094),i=r(52434);function o(e){let{author:t,authorPosts:r}=e;return(0,n.jsxs)(l.default,{locale:"ar",children:[(0,n.jsx)("div",{dir:"rtl",className:"relative py-24 bg-primary-700 text-white",children:(0,n.jsx)(i.default,{children:(0,n.jsxs)("div",{className:"flex flex-col lg:flex-row-reverse items-start lg:items-center gap-8",children:[(0,n.jsx)("div",{className:"relative w-32 h-32 lg:w-48 lg:h-48 rounded-lg overflow-hidden flex-shrink-0 border-4 border-white shadow-lg",children:(0,n.jsx)(a.default,{src:t.image,alt:t.name,fill:!0,className:"object-cover"})}),(0,n.jsxs)("div",{className:"text-right",children:[(0,n.jsx)("h1",{className:"text-4xl md:text-5xl font-bold font-heading leading-tight mb-3",children:t.name}),(0,n.jsx)("p",{className:"text-xl text-white/90 mb-4",children:t.title}),(0,n.jsx)("div",{className:"flex flex-wrap gap-2 mb-6 justify-end",children:t.expertise.map((e,t)=>(0,n.jsx)("span",{className:"bg-white/20 text-white text-sm px-3 py-1 rounded-full",children:e},t))}),t.socialMedia&&(0,n.jsxs)("div",{className:"flex gap-4 justify-end",children:[t.socialMedia.twitter&&(0,n.jsx)("a",{href:t.socialMedia.twitter,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-white/80 transition-colors",children:(0,n.jsx)(()=>(0,n.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})}),{})}),t.socialMedia.linkedin&&(0,n.jsx)("a",{href:t.socialMedia.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-white/80 transition-colors",children:(0,n.jsx)(()=>(0,n.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),{})}),t.socialMedia.instagram&&(0,n.jsx)("a",{href:t.socialMedia.instagram,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-white/80 transition-colors",children:(0,n.jsx)(()=>(0,n.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126-2.126-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"})}),{})})]})]})]})})}),(0,n.jsx)("section",{dir:"rtl",className:"py-16",children:(0,n.jsx)(i.default,{children:(0,n.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[(0,n.jsxs)("div",{className:"lg:col-span-1",children:[(0,n.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6 mb-8 text-right",children:[(0,n.jsxs)("h2",{className:"text-2xl font-bold mb-4",children:["عن ",t.name]}),(0,n.jsx)("p",{className:"text-neutral-600 mb-6",children:t.fullBio||t.bio}),t.education&&(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("h3",{className:"text-lg font-bold mb-3",children:"التعليم"}),(0,n.jsx)("ul",{className:"space-y-2",children:t.education.map((e,t)=>(0,n.jsxs)("li",{className:"flex items-start",children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("span",{className:"inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2"})]},t))})]}),t.experience&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-lg font-bold mb-3",children:"الخبرة العملية"}),(0,n.jsx)("div",{className:"space-y-4",children:t.experience.map((e,t)=>(0,n.jsxs)("div",{className:"border-r-2 border-primary-200 pr-4",children:[(0,n.jsx)("h4",{className:"font-bold",children:e.position}),(0,n.jsx)("div",{className:"text-primary-600 text-sm mb-1",children:e.company}),(0,n.jsx)("div",{className:"text-neutral-500 text-sm mb-2",children:e.period}),(0,n.jsx)("p",{className:"text-neutral-600 text-sm",children:e.description})]},t))})]})]}),(0,n.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6 text-right",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"المجالات"}),(0,n.jsx)("div",{className:"flex flex-wrap gap-2 justify-end",children:t.expertise.map((e,t)=>(0,n.jsx)("span",{className:"bg-primary-50 text-primary-700 text-sm px-3 py-1 rounded-full",children:e},t))})]})]}),(0,n.jsxs)("div",{className:"lg:col-span-2",children:[(0,n.jsxs)("h2",{className:"text-3xl font-bold mb-6 text-right",children:["أحدث المقالات بقلم ",t.name]}),(0,n.jsx)("div",{className:"space-y-8",children:r.map((e,t)=>(0,n.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row-reverse",children:[(0,n.jsx)("div",{className:"relative md:w-1/3 h-56 md:h-auto",children:(0,n.jsx)(a.default,{src:e.coverImage,alt:e.title,fill:!0,className:"object-cover"})}),(0,n.jsxs)("div",{className:"p-6 md:w-2/3 text-right",children:[(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("span",{className:"inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full ml-2",children:e.category}),(0,n.jsxs)("span",{className:"text-neutral-500 text-xs",children:[e.date," • ",e.readTime," دقائق قراءة"]})]}),(0,n.jsx)("h3",{className:"text-xl font-bold mb-2 hover:text-primary-600 transition-colors duration-200",children:(0,n.jsx)(s.default,{href:"/ar/blog/".concat(e.id),children:e.title})}),(0,n.jsx)("p",{className:"text-neutral-600 mb-4 line-clamp-2",children:e.excerpt}),(0,n.jsx)(s.default,{href:"/ar/blog/".concat(e.id),className:"text-primary-600 font-medium hover:text-primary-700 transition-colors text-right inline-block",children:"قراءة المقال ←"})]})]},t))}),(0,n.jsxs)("div",{className:"mt-12 bg-neutral-50 rounded-lg p-8 text-center",children:[(0,n.jsxs)("h3",{className:"text-2xl font-bold mb-4",children:["تعاون مع ",t.name]}),(0,n.jsx)("p",{className:"text-neutral-600 mb-6",children:"مهتم بفرص الاستشارة أو التعاون؟ تواصل مع فريقنا."}),(0,n.jsx)(s.default,{href:"/ar/contact",className:"inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200",children:"تواصل معنا"})]})]})]})})})]})}},93094:function(e,t,r){"use strict";r.d(t,{default:function(){return m}});var n=r(57437),s=r(2265),a=r(20911),l=r(81131),i=r(99376),o=r(40257),c=()=>((0,s.useEffect)(()=>{window.location.hostname.includes("vercel.app")||o.env.NEXT_PUBLIC_VERCEL_ENV;let e=()=>{document.querySelectorAll("img").forEach(e=>{let t=e.getAttribute("src");if(t){if(t.includes("${")&&t.includes("}")){console.warn("Found unprocessed template literal in image:",t),e.setAttribute("data-original-src",t);let r=t.split("${")[0];e.setAttribute("src","".concat(r,"default-placeholder.jpg"))}if(t.includes("undefined")){console.warn("Found undefined in image path:",t),e.setAttribute("data-original-src",t);let r=t.replace(/undefined/g,"");e.setAttribute("src",r)}}})};e();let t=new MutationObserver(t=>{t.forEach(t=>{"childList"===t.type&&t.addedNodes.length>0&&e()})});return t.observe(document.body,{childList:!0,subtree:!0}),()=>{t.disconnect()}},[]),null),d=r(49089),u=e=>{let{phoneNumber:t,message:r="",position:s="right",locale:a="en"}=e,l="https://wa.me/".concat(t).concat(r?"?text=".concat(encodeURIComponent(r)):"");return(0,n.jsxs)("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 ".concat("left"===s||"ar"===a?"left-6":"right-6"," z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"),style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)"},"aria-label":"ar"===a?"تواصل معنا عبر واتساب":"Contact us via WhatsApp",children:[(0,n.jsx)("span",{className:"absolute inset-0 rounded-full animate-ping opacity-70",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)",animationDuration:"1.5s"}}),(0,n.jsx)(d.xpo,{className:"relative z-10 text-white w-7 h-7"})]})},m=e=>{let{children:t,locale:r="en"}=e,s="ar"===r,o=(0,i.usePathname)();return(0,n.jsxs)("div",{className:"min-h-screen flex flex-col",dir:s?"rtl":"ltr",children:[(0,n.jsx)(c,{}),(0,n.jsx)(a.Z,{locale:r}),(0,n.jsx)("main",{className:"flex-grow ".concat("/"===o||"/ar"===o?"pt-0":"pt-24"),children:t}),(0,n.jsx)(l.Z,{locale:r}),(0,n.jsx)(u,{phoneNumber:"971558164922",locale:r,position:s?"left":"right"})]})}},52434:function(e,t,r){"use strict";var n=r(57437);r(2265),t.default=e=>{let{children:t,className:r="",size:s="lg"}=e;return(0,n.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[s]," ").concat(r),children:t})}},46231:function(e,t,r){"use strict";r.d(t,{w_:function(){return d}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(s),l=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,s;n=t,s=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>n.createElement(u,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:s,size:a,title:o}=e,d=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,l),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[7699,1694,8422,2972,5878,8335,7065,2971,2117,1744],function(){return e(e.s=70672)}),_N_E=e.O()}]);