"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{33145:function(e,t,n){n.d(t,{default:function(){return a.a}});var r=n(48461),a=n.n(r)},27648:function(e,t,n){n.d(t,{default:function(){return a.a}});var r=n(72972),a=n.n(r)},48667:function(e,t,n){n.d(t,{default:function(){return a.a}});var r=n(88003),a=n.n(r)},26225:function(e,t){function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48461:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return l}});let r=n(47043),a=n(55346),o=n(65878),i=r._(n(5084));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=o.Image},2819:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(57437),a=n(99376),o=n(26225),i=n.n(o),l=n(57577),s=n(48667);let c={en:"https://uneom.com",ar:"https://uneom.com/ar"},u=(e,t)=>({title:"",description:"",keywords:""});function m(e){let{title:t,description:n,keywords:o,ogImage:m,ogType:d="website",twitterCard:p="summary_large_image",canonicalUrl:f,noIndex:x=!1,breadcrumbs:y,pageType:g,structuredData:h}=e,b=(0,l.bU)(),j=(0,a.usePathname)()||"",v=u(b,j),_=t||v.title||"UNEOM",E=n||v.description||"",w=o||v.keywords||"",N=_.includes("UNEOM")||_.includes("يونيوم")?_:"%s | UNEOM".replace("%s",_),O="ar"===b?"https://uneom.com/ar":"https://uneom.com",I=j.replace("/".concat(b),""),M=f||"".concat(O).concat(I),A=m||"https://uneom.com/images/default-placeholder.jpg",S=[];S.push(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t="ar"===e;return{"@context":"https://schema.org","@type":"WebSite","@id":"https://uneom.com/#website",url:t?"https://uneom.com/ar":"https://uneom.com",name:t?"يونيوم":"UNEOM",description:t?"نحن نقدم حلول الزي الموحد المتكاملة المصممة خصيصًا للشركات في جميع أنحاء المملكة العربية السعودية والشرق الأوسط":"We provide integrated uniform solutions tailored specifically for businesses across Saudi Arabia and the Middle East",potentialAction:[{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:t?"https://uneom.com/ar/search?q={search_term_string}":"https://uneom.com/search?q={search_term_string}"},"query-input":"required name=search_term_string"}],inLanguage:t?"ar-SA":"en"}}(b)),y&&y.length>0&&S.push(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n="ar"===t?"https://uneom.com/ar":"https://uneom.com";return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:e.map((e,t)=>({"@type":"ListItem",position:t+1,name:e.name,item:e.url.startsWith("http")?e.url:"".concat(n).concat(e.url)}))}}(y,b)),h&&S.push(h);let k=Object.entries(c).map(e=>{let[t,n]=e;return"/"===j?{lang:t,url:n}:{lang:t,url:"".concat(n).concat(I)}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:N}),(0,r.jsx)("meta",{name:"description",content:E}),w&&(0,r.jsx)("meta",{name:"keywords",content:w}),(0,r.jsx)("link",{rel:"canonical",href:M}),k.map(e=>{let{lang:t,url:n}=e;return(0,r.jsx)("link",{rel:"alternate",hrefLang:"ar"===t?"ar-SA":"en",href:n},t)}),(0,r.jsx)("link",{rel:"alternate",hrefLang:"x-default",href:c.en}),(0,r.jsx)("meta",{property:"og:title",content:N}),(0,r.jsx)("meta",{property:"og:description",content:E}),(0,r.jsx)("meta",{property:"og:type",content:d}),(0,r.jsx)("meta",{property:"og:url",content:M}),(0,r.jsx)("meta",{property:"og:image",content:A}),(0,r.jsx)("meta",{property:"og:locale",content:"ar"===b?"ar_SA":"en_US"}),(0,r.jsx)("meta",{property:"og:site_name",content:"ar"===b?"يونيوم":"UNEOM"}),(0,r.jsx)("meta",{name:"twitter:card",content:p}),(0,r.jsx)("meta",{name:"twitter:title",content:N}),(0,r.jsx)("meta",{name:"twitter:description",content:E}),(0,r.jsx)("meta",{name:"twitter:image",content:A}),x&&(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),S.map((e,t)=>(0,r.jsx)(s.default,{id:"schema-".concat(t),type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)},strategy:"afterInteractive"},"schema-".concat(t)))]})}},56334:function(e,t,n){var r=n(57437);n(2265);var a=n(27648);t.Z=e=>{let{children:t,variant:n="primary",size:o="md",href:i,target:l,onClick:s,fullWidth:c=!1,className:u="",disabled:m=!1,ariaLabel:d,type:p="button"}=e,f="\n    ".concat("inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"," \n    ").concat({sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"}[o]," \n    ").concat({primary:"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-300",secondary:"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300",outline:"bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300 disabled:border-primary-300",ghost:"bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300"}[n]," \n    ").concat(c?"w-full":""," \n    ").concat(u,"\n  ").trim();return i?(0,r.jsx)(a.default,{href:i,className:f,target:l,"aria-label":d,onClick:s,children:t}):(0,r.jsx)("button",{type:p,className:f,onClick:s,disabled:m,"aria-label":d,children:t})}},52434:function(e,t,n){var r=n(57437);n(2265),t.default=e=>{let{children:t,className:n="",size:a="lg"}=e;return(0,r.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[a]," ").concat(n),children:t})}},3377:function(e,t,n){var r=n(57437);n(2265),t.default=e=>{let{children:t,subtitle:n,centered:a=!1,className:o="",as:i="h2",decoration:l=!0}=e,s=a?"text-center":"text-left";return(0,r.jsxs)("div",{className:"mb-8 ".concat(s," ").concat(o),children:[(0,r.jsxs)(i,{className:"".concat("font-heading font-bold text-neutral-900"," ").concat({h1:"text-4xl sm:text-5xl lg:text-6xl",h2:"text-3xl sm:text-4xl",h3:"text-2xl sm:text-3xl",h4:"text-xl sm:text-2xl"}[i]," relative"),children:[t,l&&a&&(0,r.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mx-auto mt-4"}),l&&!a&&(0,r.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mt-4"})]}),n&&(0,r.jsx)("p",{className:"mt-4 text-lg text-neutral-600 max-w-3xl mx-auto",children:n})]})}},92184:function(e,t,n){n.d(t,{F:function(){return c},QuoteProvider:function(){return s}});var r=n(57437),a=n(2265);let o={items:[],itemCount:0},i=(0,a.createContext)(void 0),l=(e,t)=>{switch(t.type){case"ADD_ITEM":{let n=e.items.findIndex(e=>e.id===t.payload.id);if(-1!==n){let r=[...e.items];return r[n]={...r[n],quantity:r[n].quantity+t.payload.quantity},{...e,items:r}}return{...e,items:[...e.items,t.payload],itemCount:e.itemCount+1}}case"REMOVE_ITEM":{let n=e.items.filter(e=>e.id!==t.payload.id);return{...e,items:n,itemCount:n.length}}case"UPDATE_QUANTITY":{let n=e.items.map(e=>e.id===t.payload.id?{...e,quantity:t.payload.quantity}:e);return{...e,items:n}}case"CLEAR_QUOTE":return o;default:return e}},s=e=>{let{children:t}=e,[n,s]=(0,a.useReducer)(l,o);return(0,a.useEffect)(()=>{let e=localStorage.getItem("quote");e&&JSON.parse(e).items.forEach(e=>{s({type:"ADD_ITEM",payload:e})})},[]),(0,a.useEffect)(()=>{localStorage.setItem("quote",JSON.stringify(n))},[n]),(0,r.jsx)(i.Provider,{value:{state:n,addItem:e=>{s({type:"ADD_ITEM",payload:e})},removeItem:e=>{s({type:"REMOVE_ITEM",payload:{id:e}})},updateQuantity:(e,t)=>{s({type:"UPDATE_QUANTITY",payload:{id:e,quantity:t}})},clearQuote:()=>{s({type:"CLEAR_QUOTE"})}},children:t})},c=()=>{let e=(0,a.useContext)(i);if(void 0===e)throw Error("useQuote must be used within a QuoteProvider");return e}},57577:function(e,t,n){n.d(t,{bU:function(){return o}});var r=n(99376),a=n(33134);function o(){let e=(0,r.useParams)();if(e&&e.locale&&"string"==typeof e.locale){let t=e.locale;if("en"===t||"ar"===t)return t}return a.al}}}]);