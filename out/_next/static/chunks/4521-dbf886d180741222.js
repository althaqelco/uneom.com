(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4521],{40257:function(e,r,t){"use strict";var s,n;e.exports=(null==(s=t.g.process)?void 0:s.env)&&"object"==typeof(null==(n=t.g.process)?void 0:n.env)?t.g.process:t(44227)},44227:function(e){!function(){var r={229:function(e){var r,t,s,n=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function o(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{t="function"==typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var l=[],c=!1,d=-1;function u(){c&&s&&(c=!1,s.length?l=s.concat(l):d=-1,l.length&&h())}function h(){if(!c){var e=o(u);c=!0;for(var r=l.length;r;){for(s=l,l=[];++d<r;)s&&s[d].run();d=-1,r=l.length}s=null,c=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function m(e,r){this.fun=e,this.array=r}function x(){}n.nextTick=function(e){var r=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];l.push(new m(e,r)),1!==l.length||c||o(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=x,n.addListener=x,n.once=x,n.off=x,n.removeListener=x,n.removeAllListeners=x,n.emit=x,n.prependListener=x,n.prependOnceListener=x,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},t={};function s(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}},i=!0;try{r[e](a,a.exports,s),i=!1}finally{i&&delete t[e]}return a.exports}s.ab="//";var n=s(229);e.exports=n}()},94521:function(e,r,t){"use strict";t.d(r,{default:function(){return j}});var s=t(57437),n=t(2265),a=t(27648),i=t(99376),o=t(95256),l=t(37053),c=t(80236),d=t(49089),u=t(62947),h=e=>{let{locale:r="en"}=e,[t,h]=(0,n.useState)(!1),[m,x]=(0,n.useState)(!1),[f,p]=(0,n.useState)(!1),g=(0,i.usePathname)(),j="ar"===r;(0,n.useEffect)(()=>{p(!0);let e=()=>{window.scrollY>20?x(!0):x(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let v="fixed w-full transition-all duration-300 z-50 ".concat(f&&m?"bg-white shadow-md py-2":"/"===g||"/ar"===g?"bg-transparent backdrop-blur-sm bg-white/40 py-3":"bg-white shadow-md py-3");return(0,s.jsxs)("header",{className:v,children:[(0,s.jsx)("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center ".concat("flex-row"),children:[(0,s.jsx)(c.Z,{locale:r,className:"h-10 w-auto",width:160,height:45}),(0,s.jsx)("div",{className:"hidden lg:block ".concat(j?"mr-8":"ml-8"),children:(0,s.jsx)(o.Z,{locale:r})})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"hidden lg:flex items-center ".concat(j?"space-x-reverse space-x-6":"space-x-6"),children:j?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.default,{href:"/ar/quote",className:"bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition duration-300 shadow-sm hover:shadow-md flex items-center flex-row-reverse",children:[(0,s.jsx)(d.tLl,{className:"ml-2 h-4 w-4"}),"طلب عرض سعر"]}),(0,s.jsx)(u.Z,{currentLocale:r})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.default,{href:"/quote",className:"bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition duration-300 shadow-sm hover:shadow-md flex items-center",children:[(0,s.jsx)(d.tLl,{className:"mr-2 h-4 w-4"}),"Request Quote"]}),(0,s.jsx)(u.Z,{currentLocale:r})]})}),(0,s.jsxs)("div",{className:"lg:hidden flex items-center",children:[(0,s.jsx)(u.Z,{currentLocale:r,className:"mr-3"}),(0,s.jsx)("button",{className:"p-2 text-neutral-700 hover:text-primary-600",onClick:()=>{h(!t)},"aria-label":j?"فتح القائمة":"Toggle menu",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 stroke-current",fill:"none",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:t?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})})]})]})]})}),f&&t&&(0,s.jsx)(l.Z,{locale:r,onClose:()=>h(!1)})]})},m=t(33145),x=e=>{let{locale:r="en"}=e,t="ar"===r,n={en:{about:"About UNEOM",aboutContent:"UNEOM is Saudi Arabia's leading provider of professional uniforms and scrubs for businesses across healthcare, aviation, hospitality, and corporate sectors.",contactUs:"Contact Us",address:"King Fahd Road, Riyadh, Saudi Arabia",quickLinks:"Quick Links",industries:"Industries",products:"Products",services:"Services",blog:"Blog",resources:"Resources",aboutUs:"About Us",contactUsLink:"Contact Us",followUs:"Follow Us",copyright:"\xa9 2025 UNEOM. All rights reserved.",certifications:"Quality Certifications"},ar:{about:"عن يونيوم",aboutContent:"يونيوم هي الشركة الرائدة في المملكة العربية السعودية في توفير الأزياء المهنية والملابس الرسمية للقطاعات المختلفة بما في ذلك الرعاية الصحية والطيران والضيافة والشركات.",contactUs:"اتصل بنا",address:"طريق الملك فهد، الرياض، المملكة العربية السعودية",quickLinks:"روابط سريعة",industries:"القطاعات",products:"المنتجات",services:"الخدمات",blog:"المدونة",resources:"الموارد",aboutUs:"من نحن",contactUsLink:"تواصل معنا",followUs:"تابعنا",copyright:"\xa9 2025 يونيوم. جميع الحقوق محفوظة.",certifications:"شهادات الجودة"}},i="en"===r?n.en:n.ar;return(0,s.jsx)("footer",{className:"bg-neutral-900 text-white pt-16 pb-8",children:(0,s.jsxs)("div",{className:"container mx-auto px-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ".concat(t?"lg:dir-rtl":""),children:[(0,s.jsxs)("div",{className:t?"text-right":"",children:[(0,s.jsx)("h3",{className:"font-heading text-xl font-bold mb-4",children:i.about}),(0,s.jsx)(c.Z,{locale:r,inverted:!0,withLink:!1,className:"h-12 w-auto mb-4",width:200,height:60}),(0,s.jsx)("p",{className:"text-neutral-300 mb-4",children:i.aboutContent}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)("div",{className:"flex flex-wrap gap-3 items-center mb-2",children:[{name:"ISO 9001:2015",logo:"/images/certificate/ISO_90012015.png"},{name:"OEKO-TEX\xae Standard 100",logo:"/images/certificate/OEKO-TEX.png"},{name:"Saudi Quality Mark",logo:"/images/certificate/Saudi_Quality_Mark.png"},{name:"GOTS Certified",logo:"/images/certificate/GOTS_Certified.png"}].map(e=>(0,s.jsx)("div",{className:"flex items-center justify-center ".concat(t?"ml-2":"mr-2"," last:m-0"),children:(0,s.jsx)(m.default,{src:e.logo,alt:e.name,width:45,height:45,className:"opacity-80 hover:opacity-100 transition-opacity duration-300"})},e.name))})})]}),(0,s.jsxs)("div",{className:t?"text-right":"",children:[(0,s.jsx)("h3",{className:"font-heading text-xl font-bold mb-4",children:i.contactUs}),(0,s.jsxs)("ul",{className:"space-y-3 text-neutral-300",children:[(0,s.jsxs)("li",{className:"flex items-center ".concat(t?"flex-row-reverse justify-end space-x-0":""),children:[(0,s.jsxs)("svg",{className:"w-5 h-5 ".concat(t?"ml-2":"mr-2"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),(0,s.jsx)("span",{children:i.address})]}),(0,s.jsxs)("li",{className:"flex items-center ".concat(t?"flex-row-reverse justify-end space-x-0":""),children:[(0,s.jsx)("svg",{className:"w-5 h-5 ".concat(t?"ml-2":"mr-2"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),(0,s.jsx)("span",{children:"info@uneom.com"})]}),(0,s.jsxs)("li",{className:"flex items-center ".concat(t?"flex-row-reverse justify-end space-x-0":""),children:[(0,s.jsx)("svg",{className:"w-5 h-5 ".concat(t?"ml-2":"mr-2"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),(0,s.jsx)("span",{dir:"ltr",children:"+971558164922"})]})]})]}),(0,s.jsxs)("div",{className:t?"text-right":"",children:[(0,s.jsx)("h3",{className:"font-heading text-xl font-bold mb-4",children:i.quickLinks}),(0,s.jsxs)("ul",{className:"space-y-2 text-neutral-300",children:[(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"en"===r?"/industries":"/ar/industries",className:"hover:text-primary-400 transition duration-300",children:i.industries})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"en"===r?"/shop":"/ar/shop",className:"hover:text-primary-400 transition duration-300",children:i.products})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"en"===r?"/services":"/ar/services",className:"hover:text-primary-400 transition duration-300",children:i.services})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"en"===r?"/resources":"/ar/resources",className:"hover:text-primary-400 transition duration-300",children:i.resources})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"en"===r?"/blog":"/ar/blog",className:"hover:text-primary-400 transition duration-300",children:i.blog})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"en"===r?"/about":"/ar/about",className:"hover:text-primary-400 transition duration-300",children:i.aboutUs})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"en"===r?"/contact":"/ar/contact",className:"hover:text-primary-400 transition duration-300",children:i.contactUsLink})})]})]}),(0,s.jsxs)("div",{className:t?"text-right":"",children:[(0,s.jsx)("h3",{className:"font-heading text-xl font-bold mb-4",children:i.followUs}),(0,s.jsxs)("div",{className:"flex flex-wrap ".concat(t?"justify-end":""," gap-3"),children:[(0,s.jsx)("a",{href:"https://www.facebook.com/uneomuniforms/",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,s.jsx)(d.Am9,{className:"w-5 h-5"})}),(0,s.jsx)("a",{href:"https://x.com/uneomcom",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,s.jsx)(d.fWC,{className:"w-5 h-5"})}),(0,s.jsx)("a",{href:"https://www.instagram.com/uneomuniforms/",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,s.jsx)(d.Zf_,{className:"w-5 h-5"})}),(0,s.jsx)("a",{href:"https://www.tiktok.com/@uneomcom",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,s.jsx)(d.nTm,{className:"w-5 h-5"})}),(0,s.jsx)("a",{href:"https://www.pinterest.com/uneomcompany/",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,s.jsx)(d.oIN,{className:"w-5 h-5"})}),(0,s.jsx)("a",{href:"https://www.youtube.com/@uneom-uniforms",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,s.jsx)(d.V2E,{className:"w-5 h-5"})}),(0,s.jsxs)("a",{href:"https://wa.me/+971558164922",target:"_blank",rel:"noopener noreferrer",className:"relative p-3 rounded-full overflow-hidden group",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)"},children:[(0,s.jsx)("span",{className:"absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-70",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)",animationDuration:"1.5s"}}),(0,s.jsx)("span",{className:"absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-50",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)",animationDuration:"2s",animationDelay:"0.3s"}}),(0,s.jsx)("span",{className:"absolute inset-1 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 animate-pulse",style:{animationDuration:"1.2s"}}),(0,s.jsx)("div",{className:"relative z-10 group-hover:rotate-12 transform transition-transform duration-300",children:(0,s.jsx)(d.xpo,{className:"w-5 h-5"})})]})]}),(0,s.jsx)("div",{className:"mt-6",children:(0,s.jsx)(a.default,{href:"en"===r?"/quote":"/ar/quote",className:"inline-flex items-center ".concat(t?"flex-row-reverse":""," px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition duration-300"),children:"en"===r?"Request a Quote":"طلب عرض سعر"})})]})]}),(0,s.jsx)("div",{className:"border-t border-neutral-800 pt-8 text-center text-neutral-400",children:(0,s.jsx)("p",{children:i.copyright})})]})})},f=t(40257),p=()=>((0,n.useEffect)(()=>{window.location.hostname.includes("vercel.app")||f.env.NEXT_PUBLIC_VERCEL_ENV;let e=()=>{document.querySelectorAll("img").forEach(e=>{let r=e.getAttribute("src");if(r){if(r.includes("${")&&r.includes("}")){console.warn("Found unprocessed template literal in image:",r),e.setAttribute("data-original-src",r);let t=r.split("${")[0];e.setAttribute("src","".concat(t,"default-placeholder.jpg"))}if(r.includes("undefined")){console.warn("Found undefined in image path:",r),e.setAttribute("data-original-src",r);let t=r.replace(/undefined/g,"");e.setAttribute("src",t)}}})};e();let r=new MutationObserver(r=>{r.forEach(r=>{"childList"===r.type&&r.addedNodes.length>0&&e()})});return r.observe(document.body,{childList:!0,subtree:!0}),()=>{r.disconnect()}},[]),null),g=e=>{let{phoneNumber:r,message:t="",position:n="right",locale:a="en"}=e,i="https://wa.me/".concat(r).concat(t?"?text=".concat(encodeURIComponent(t)):"");return(0,s.jsxs)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 ".concat("left"===n||"ar"===a?"left-6":"right-6"," z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"),style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)"},"aria-label":"ar"===a?"تواصل معنا عبر واتساب":"Contact us via WhatsApp",children:[(0,s.jsx)("span",{className:"absolute inset-0 rounded-full animate-ping opacity-70",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)",animationDuration:"1.5s"}}),(0,s.jsx)(d.xpo,{className:"relative z-10 text-white w-7 h-7"})]})},j=e=>{let{children:r,locale:t="en"}=e,n="ar"===t,a=(0,i.usePathname)(),o=null==a?void 0:a.startsWith("/ar");return(0,s.jsxs)("div",{className:"min-h-screen flex flex-col",dir:n?"rtl":"ltr",children:[(0,s.jsx)(p,{}),!o&&(0,s.jsx)(h,{locale:t}),(0,s.jsx)("main",{className:"flex-grow ".concat("/"===a||"/ar"===a?"pt-0":o?"pt-0":"pt-24"),children:r}),!o&&(0,s.jsx)(x,{locale:t}),(0,s.jsx)(g,{phoneNumber:"971558164922",locale:t,position:n?"left":"right"})]})}}}]);