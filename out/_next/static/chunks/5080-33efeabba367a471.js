"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5080],{33145:function(e,a,r){r.d(a,{default:function(){return t.a}});var l=r(48461),t=r.n(l)},27648:function(e,a,r){r.d(a,{default:function(){return t.a}});var l=r(72972),t=r.n(l)},48461:function(e,a,r){Object.defineProperty(a,"__esModule",{value:!0}),function(e,a){for(var r in a)Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}(a,{default:function(){return c},getImageProps:function(){return i}});let l=r(47043),t=r(55346),s=r(65878),n=l._(r(5084));function i(e){let{props:a}=(0,t.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[e,r]of Object.entries(a))void 0===r&&delete a[e];return{props:a}}let c=s.Image},55080:function(e,a,r){r.d(a,{default:function(){return o}});var l=r(57437),t=r(2265),s=r(33145),n=r(27648),i=r(52434),c=r(3377),d=r(56334);function o(e){var a,r;let{product:o,relatedProducts:m,locale:x}=e,[h,u]=(0,t.useState)((null==o?void 0:null===(a=o.colors)||void 0===a?void 0:a[0])||""),[f,p]=(0,t.useState)((null==o?void 0:null===(r=o.sizes)||void 0===r?void 0:r[0])||""),[b,j]=(0,t.useState)(1),[g,v]=(0,t.useState)(0);return o?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"bg-neutral-100 py-4",children:(0,l.jsx)(i.default,{children:(0,l.jsxs)("div",{className:"flex items-center justify-end text-sm",children:[(0,l.jsx)(n.default,{href:"/ar",className:"text-neutral-600 hover:text-primary-600",children:"الرئيسية"}),(0,l.jsx)("span",{className:"mx-2",children:"/"}),(0,l.jsx)(n.default,{href:"/ar/shop",className:"text-neutral-600 hover:text-primary-600",children:"المتجر"}),(0,l.jsx)("span",{className:"mx-2",children:"/"}),(0,l.jsx)(n.default,{href:"/ar/shop/".concat(o.category),className:"text-neutral-600 hover:text-primary-600",children:o.category}),(0,l.jsx)("span",{className:"mx-2",children:"/"}),(0,l.jsx)("span",{className:"text-primary-600",children:o.name})]})})}),(0,l.jsx)("section",{className:"py-12",children:(0,l.jsx)(i.default,{children:(0,l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[(0,l.jsxs)("div",{className:"order-2 lg:order-1",children:[(0,l.jsx)("div",{className:"relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-4",children:(0,l.jsx)(s.default,{src:o.images[g],alt:o.name,fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, 50vw"})}),(0,l.jsx)("div",{className:"grid grid-cols-5 gap-2",children:o.images.map((e,a)=>(0,l.jsx)("div",{className:"relative h-20 rounded-md overflow-hidden cursor-pointer border-2 ".concat(g===a?"border-primary-600":"border-transparent"),onClick:()=>v(a),children:(0,l.jsx)(s.default,{src:e,alt:"".concat(o.name," - صورة ").concat(a+1),fill:!0,className:"object-cover"})},a))})]}),(0,l.jsxs)("div",{className:"order-1 lg:order-2 text-right",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold mb-4",children:o.name}),(0,l.jsxs)("div",{className:"flex items-center justify-end mb-4",children:[(0,l.jsx)("div",{className:"flex items-center ml-4",children:[void 0,void 0,void 0,void 0,void 0].map((e,a)=>(0,l.jsx)("svg",{className:"w-5 h-5 ".concat(a<o.rating?"text-yellow-400":"text-neutral-300"),fill:"currentColor",viewBox:"0 0 20 20",children:(0,l.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},a))}),(0,l.jsxs)("span",{className:"text-neutral-600",children:[o.reviews," تقييمات"]})]}),(0,l.jsxs)("div",{className:"text-2xl font-bold text-primary-600 mb-6",children:[o.price.toLocaleString("ar-SA")," ريال سعودي"]}),(0,l.jsx)("div",{className:"mb-6",children:(0,l.jsx)("p",{className:"text-neutral-600",children:o.description})}),(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsx)("h3",{className:"font-bold mb-2",children:"اللون"}),(0,l.jsx)("div",{className:"flex flex-wrap justify-end gap-2",children:o.colors.map(e=>(0,l.jsx)("button",{className:"w-8 h-8 rounded-full border-2 ".concat(h===e?"border-primary-600":"border-neutral-300"),style:{backgroundColor:e},onClick:()=>u(e),"aria-label":"اللون ".concat(e)},e))})]}),(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsx)("h3",{className:"font-bold mb-2",children:"المقاس"}),(0,l.jsx)("div",{className:"flex flex-wrap justify-end gap-2",children:o.sizes.map(e=>(0,l.jsx)("button",{className:"w-10 h-10 flex items-center justify-center rounded-md border ".concat(f===e?"bg-primary-600 text-white border-primary-600":"bg-white text-neutral-800 border-neutral-300 hover:border-primary-600"),onClick:()=>p(e),children:e},e))})]}),(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("h3",{className:"font-bold mb-2",children:"الكمية"}),(0,l.jsxs)("div",{className:"flex items-center justify-end",children:[(0,l.jsx)("button",{className:"w-10 h-10 flex items-center justify-center rounded-l-md bg-neutral-100 hover:bg-neutral-200",onClick:()=>{b>1&&j(b-1)},children:"-"}),(0,l.jsx)("input",{type:"number",min:"1",value:b,onChange:e=>{let a=parseInt(e.target.value);!isNaN(a)&&a>0&&j(a)},className:"w-16 h-10 text-center border-y border-neutral-300"}),(0,l.jsx)("button",{className:"w-10 h-10 flex items-center justify-center rounded-r-md bg-neutral-100 hover:bg-neutral-200",onClick:()=>{j(b+1)},children:"+"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[(0,l.jsx)(d.default,{variant:"primary",size:"lg",className:"flex-1 justify-center",children:"أضف إلى السلة"}),(0,l.jsx)(d.default,{variant:"outline",size:"lg",className:"flex-1 justify-center",children:"اطلب عينة"})]}),(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("h3",{className:"font-bold mb-4",children:"المميزات"}),(0,l.jsx)("ul",{className:"space-y-2 text-right",children:o.features.map((e,a)=>(0,l.jsxs)("li",{className:"flex items-center justify-end",children:[(0,l.jsx)("span",{children:e}),(0,l.jsx)("svg",{className:"w-5 h-5 text-primary-600 ml-2 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})]},a))})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-bold mb-2",children:"الوسوم"}),(0,l.jsx)("div",{className:"flex flex-wrap justify-end gap-2",children:o.tags.map(e=>(0,l.jsx)(n.default,{href:"/ar/shop/tag/".concat(e),className:"px-3 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm",children:e},e))})]})]})]})})}),(0,l.jsx)("section",{className:"py-12 bg-neutral-50",children:(0,l.jsxs)(i.default,{children:[(0,l.jsx)(c.default,{centered:!0,subtitle:"منتجات تناسب احتياجاتك",children:"منتجات مشابهة"}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8",children:m.map(e=>(0,l.jsx)("div",{className:"bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300",children:(0,l.jsxs)(n.default,{href:"/ar/shop/".concat(e.category,"/").concat(e.id),children:[(0,l.jsx)("div",{className:"relative h-64 overflow-hidden",children:(0,l.jsx)(s.default,{src:e.images[0],alt:e.name,fill:!0,className:"object-cover transition-transform duration-300 hover:scale-105"})}),(0,l.jsxs)("div",{className:"p-4 text-right",children:[(0,l.jsx)("h3",{className:"font-bold text-lg mb-2",children:e.name}),(0,l.jsxs)("p",{className:"text-primary-600 font-bold",children:[e.price.toLocaleString("ar-SA")," ريال سعودي"]})]})]})},e.id))})]})}),(0,l.jsx)("section",{className:"py-16 bg-primary-50",children:(0,l.jsx)(i.default,{children:(0,l.jsxs)("div",{className:"text-center max-w-3xl mx-auto",children:[(0,l.jsx)("h2",{className:"text-3xl font-bold mb-6",children:"هل تحتاج إلى حلول مخصصة للأزياء الموحدة؟"}),(0,l.jsx)("p",{className:"text-lg text-neutral-600 mb-8",children:"نحن نقدم خدمات تصميم وتصنيع مخصصة للأزياء الموحدة لتلبية احتياجات مؤسستك بالضبط."}),(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[(0,l.jsx)(n.default,{href:"/ar/contact",className:"inline-block bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors duration-200",children:"تواصل معنا"}),(0,l.jsx)(n.default,{href:"/ar/services/custom-uniforms",className:"inline-block bg-white text-primary-600 border border-primary-600 px-8 py-3 rounded-md hover:bg-neutral-50 transition-colors duration-200",children:"اكتشف خدماتنا المخصصة"})]})]})})})]}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.default,{children:(0,l.jsxs)("div",{className:"py-20 text-center",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"المنتج غير متوفر"}),(0,l.jsx)("p",{className:"mb-6",children:"عذراً، لا يمكن العثور على هذا المنتج."}),(0,l.jsx)(n.default,{href:"/ar/shop",className:"inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700",children:"العودة إلى المتجر"})]})})})}},56334:function(e,a,r){var l=r(57437);r(2265);var t=r(27648);a.default=e=>{let{children:a,variant:r="primary",size:s="md",href:n,target:i,onClick:c,fullWidth:d=!1,className:o="",disabled:m=!1,ariaLabel:x,type:h="button"}=e,u="\n    ".concat("inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"," \n    ").concat({sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"}[s]," \n    ").concat({primary:"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-300",secondary:"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300",outline:"bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300 disabled:border-primary-300",ghost:"bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300"}[r]," \n    ").concat(d?"w-full":""," \n    ").concat(o,"\n  ").trim();return n?(0,l.jsx)(t.default,{href:n,className:u,target:i,"aria-label":x,onClick:c,children:a}):(0,l.jsx)("button",{type:h,className:u,onClick:c,disabled:m,"aria-label":x,children:a})}},52434:function(e,a,r){var l=r(57437);r(2265),a.default=e=>{let{children:a,className:r="",size:t="lg"}=e;return(0,l.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[t]," ").concat(r),children:a})}},3377:function(e,a,r){var l=r(57437);r(2265),a.default=e=>{let{children:a,subtitle:r,centered:t=!1,className:s="",as:n="h2",decoration:i=!0}=e,c=t?"text-center":"text-left";return(0,l.jsxs)("div",{className:"mb-8 ".concat(c," ").concat(s),children:[(0,l.jsxs)(n,{className:"".concat("font-heading font-bold text-neutral-900"," ").concat({h1:"text-4xl sm:text-5xl lg:text-6xl",h2:"text-3xl sm:text-4xl",h3:"text-2xl sm:text-3xl",h4:"text-xl sm:text-2xl"}[n]," relative"),children:[a,i&&t&&(0,l.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mx-auto mt-4"}),i&&!t&&(0,l.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mt-4"})]}),r&&(0,l.jsx)("p",{className:"mt-4 text-lg text-neutral-600 max-w-3xl mx-auto",children:r})]})}}}]);