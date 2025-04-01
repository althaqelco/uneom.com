"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8640],{78640:function(e,r,t){t.d(r,{default:function(){return M}});var a=t(57437),n=t(2265),s=t(27648),i=t(99376),o=e=>{let{locale:r="en"}=e,[t,o]=(0,n.useState)(null),c=(0,n.useRef)({}),l=(0,n.useRef)(null),u=(0,i.usePathname)(),d="ar"===r,m={en:[{name:"Industries",href:"/industries",dropdown:[{name:"Healthcare",href:"/industries/healthcare"},{name:"Aviation",href:"/industries/aviation"},{name:"Hospitality",href:"/industries/hospitality"},{name:"Corporate",href:"/industries/corporate"},{name:"Education",href:"/industries/education"},{name:"Manufacturing",href:"/industries/manufacturing"},{name:"Security",href:"/industries/security"},{name:"Factory Industry",href:"/industries/factory-industry"},{name:"Retail Shops",href:"/industries/retail-shops"},{name:"Supply Manufacturing",href:"/industries/supply-manufacturing"}]},{name:"Services",href:"/services",dropdown:[{name:"Uniform Program Management",href:"/services/program-management"},{name:"Custom Design & Branding",href:"/services/custom-design"},{name:"Bulk Ordering",href:"/services/bulk-ordering"},{name:"Measurement Services",href:"/services/measurement-services"},{name:"Corporate Uniform Policies",href:"/services/uniform-policies"}]},{name:"Resources",href:"/resources",dropdown:[{name:"Fabric Guide",href:"/resources/fabric-guide"},{name:"Size Guide",href:"/resources/size-guide"},{name:"Procurement Guide",href:"/resources/procurement-guide"},{name:"Uniform Policy Templates",href:"/resources/policy-templates"},{name:"Blog",href:"/blog"}]},{name:"About Us",href:"/about"},{name:"Contact",href:"/contact"},{name:"Shop",href:"/shop"}],ar:[{name:"الصناعات",href:"/ar/industries",dropdown:[{name:"الرعاية الصحية",href:"/ar/industries/healthcare"},{name:"الطيران",href:"/ar/industries/aviation"},{name:"الضيافة",href:"/ar/industries/hospitality"},{name:"الشركات",href:"/ar/industries/corporate"},{name:"التعليم",href:"/ar/industries/education"},{name:"التصنيع",href:"/ar/industries/manufacturing"},{name:"الأمن",href:"/ar/industries/security"},{name:"الصناعة المصنعية",href:"/ar/industries/factory-industry"},{name:"المحلات التجارية",href:"/ar/industries/retail-shops"},{name:"تصنيع التوريدات",href:"/ar/industries/supply-manufacturing"}]},{name:"الخدمات",href:"/ar/services",dropdown:[{name:"إدارة برامج الزي الموحد",href:"/ar/services/program-management"},{name:"تصميم مخصص وعلامات تجارية",href:"/ar/services/custom-design"},{name:"طلبات بالجملة",href:"/ar/services/bulk-ordering"},{name:"خدمات القياس",href:"/ar/services/measurement-services"},{name:"سياسات الزي الرسمي للشركات",href:"/ar/services/uniform-policies"}]},{name:"الموارد",href:"/ar/resources",dropdown:[{name:"دليل الأقمشة",href:"/ar/resources/fabric-guide"},{name:"دليل المقاسات",href:"/ar/resources/size-guide"},{name:"دليل المشتريات",href:"/ar/resources/procurement-guide"},{name:"نماذج سياسة الزي الموحد",href:"/ar/resources/policy-templates"},{name:"المدونة",href:"/ar/blog"}]},{name:"من نحن",href:"/ar/about"},{name:"اتصل بنا",href:"/ar/contact"},{name:"المتجر",href:"/ar/shop"}]}[r];(0,n.useEffect)(()=>{m.forEach((e,r)=>{if(e.dropdown){let e="dropdown-".concat(r);c.current[e]||(c.current[e]=n.createRef())}})},[m]),(0,n.useEffect)(()=>{function e(e){t&&!Object.values(c.current).some(r=>r.current&&r.current.contains(e.target))&&o(null)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t]);let h=e=>{l.current&&(clearTimeout(l.current),l.current=null),o("dropdown-".concat(e))},f=()=>{l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{o(null)},300)},p=e=>{let r="dropdown-".concat(e);o(e=>e===r?null:r)},g=e=>t===e,x=e=>"/"===e?u===e:null==u?void 0:u.startsWith(e);return(0,a.jsx)("nav",{className:"flex ".concat(d?"space-x-0 space-x-reverse space-x-6":"space-x-6"),children:m.map((e,r)=>{let t="dropdown-".concat(r);return(0,a.jsx)("div",{className:"relative group",onMouseEnter:()=>e.dropdown&&h(r),onMouseLeave:f,ref:e.dropdown?c.current[t]:void 0,children:e.dropdown?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{className:"inline-flex items-center px-1 py-2 text-base font-medium transition-colors duration-200 ".concat(x(e.href)||g(t)?"text-primary-700 font-semibold":"text-neutral-800 hover:text-primary-600"),onClick:()=>p(r),"aria-expanded":g(t),"aria-controls":t,children:[e.name,(0,a.jsx)("svg",{className:"h-4 w-4 ".concat(d?"mr-1":"ml-1"," transform transition-transform duration-200 ").concat(g(t)?"rotate-180":""),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),(0,a.jsx)("div",{id:t,className:"absolute z-50 ".concat(d?"-right-4":"-left-4"," mt-1 w-64 rounded-md shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black/5 focus:outline-none overflow-hidden transform transition-all duration-200 ease-in-out ").concat(d?"origin-top-right":"origin-top-left"," ").concat(g(t)?"opacity-100 translate-y-0 visible block":"opacity-0 -translate-y-2 invisible hidden"),children:(0,a.jsx)("div",{className:"py-2",children:e.dropdown.map((e,r)=>(0,a.jsx)(s.default,{href:e.href,className:"block px-6 py-2.5 text-sm ".concat(d?"text-right":"text-left"," text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"),onClick:()=>o(null),children:e.name},r))})})]}):(0,a.jsx)(s.default,{href:e.href,className:"inline-flex items-center px-1 py-2 text-base transition-colors duration-200 ".concat("Shop"===e.name||"المتجر"===e.name?"text-primary-600 font-bold":x(e.href)?"text-primary-700 font-semibold":"text-neutral-800 hover:text-primary-600 font-medium"),children:e.name})},r)})})},c=t(48614),l=t(28335),u=t(49089);let d=e=>{let{item:r,locale:t,isActive:i,onClose:o}=e,[d,m]=(0,n.useState)(!1),h="ar"===t;return r.children?(0,a.jsxs)("div",{children:[(0,a.jsxs)("button",{onClick:()=>m(!d),className:"flex items-center justify-between w-full py-3 px-2 rounded-md text-lg font-medium ".concat(h?"flex-row-reverse text-right":"text-left"," ").concat(i(r.href)?"text-primary-700 bg-primary-50":"text-neutral-800 hover:bg-neutral-50"," transition-colors duration-200"),children:[(0,a.jsx)("span",{children:r.name}),(0,a.jsx)(u.RiI,{className:"h-4 w-4 transform transition-transform duration-200 ".concat(d?"rotate-180":""," ").concat(h?"mr-auto":"ml-auto")})]}),(0,a.jsx)(c.M,{children:d&&(0,a.jsx)(l.E.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden ".concat(h?"pr-4 border-r-2":"pl-4 border-l-2"," border-neutral-200 ml-2 mr-2 mt-1 space-y-1"),children:r.children.map(e=>(0,a.jsx)(s.default,{href:e.href,onClick:o,className:"block py-2 px-2 text-base rounded ".concat(h?"text-right":"text-left"," ").concat(i(e.href)?"text-primary-600 font-medium bg-primary-50":"text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"," transition-colors duration-150"),children:e.name},e.name))})})]}):(0,a.jsx)(s.default,{href:r.href,onClick:o,className:"block py-3 px-2 rounded-md text-lg ".concat(h?"text-right":"text-left"," ").concat(i(r.href)?"text-primary-700 font-semibold bg-primary-50":"text-neutral-800 hover:bg-neutral-50"," transition-colors duration-200"),children:r.name})};var m=e=>{let{locale:r="en",onClose:t}=e,n=(0,i.usePathname)(),o="ar"===r,c=e=>!!n&&("/"===e&&"/"===n||"/ar"===e&&"/ar"===n||"/"!==e&&"/ar"!==e&&n.startsWith(e)),m="ar"===r?[{name:"الرئيسية",href:"/ar"},{name:"من نحن",href:"/ar/about"},{name:"المتجر",href:"/ar/shop",children:[{name:"أزياء المستشفيات",href:"/ar/shop/healthcare"},{name:"الأزياء الفندقية",href:"/ar/shop/hospitality-attire"},{name:"الزي الرسمي للشركات",href:"/ar/shop/corporate-workwear"},{name:"أزياء الطيران",href:"/ar/shop/aviation-uniforms"},{name:"ملابس العمل الصناعية",href:"/ar/shop/industrial-uniforms"},{name:"أزياء تعليمية",href:"/ar/shop/education-uniforms"},{name:"ملابس مطاعم",href:"/ar/shop/culinary-uniforms"},{name:"أزياء أمنية",href:"/ar/shop/security-uniforms"}]},{name:"خدماتنا",href:"/ar/services",children:[{name:"تصميم مخصص",href:"/ar/services/custom-design"},{name:"إدارة برامج الزي الموحد",href:"/ar/services/program-management"},{name:"الطلبات الجماعية",href:"/ar/services/bulk-ordering"},{name:"اختيار الأقمشة",href:"/ar/services/fabric-selection"},{name:"خدمات القياس",href:"/ar/services/measurement-services"},{name:"ضمان الجودة",href:"/ar/services/quality-assurance"},{name:"التصنيع",href:"/ar/services/manufacturing"},{name:"التشطيبات الفنية",href:"/ar/services/technical-finishes"},{name:"سياسات الزي الموحد",href:"/ar/services/uniform-policies"},{name:"البرامج المؤسسية",href:"/ar/services/corporate-programs"}]},{name:"القطاعات",href:"/ar/industries",children:[{name:"الرعاية الصحية",href:"/ar/industries/healthcare"},{name:"الضيافة",href:"/ar/industries/hospitality"},{name:"الشركات",href:"/ar/industries/corporate"},{name:"التعليم",href:"/ar/industries/education"},{name:"الطيران",href:"/ar/industries/aviation"},{name:"المتاجر",href:"/ar/industries/retail-shops"},{name:"التصنيع",href:"/ar/industries/manufacturing"},{name:"المصانع",href:"/ar/industries/factory-industry"},{name:"توريد وتصنيع",href:"/ar/industries/supply-manufacturing"},{name:"الأمن",href:"/ar/industries/security"}]},{name:"الموارد",href:"/ar/resources",children:[{name:"دليل الأقمشة",href:"/ar/resources/fabric-guide"},{name:"دليل المقاسات",href:"/ar/resources/size-guide"},{name:"دليل المشتريات",href:"/ar/resources/procurement-guide"},{name:"قوالب السياسات",href:"/ar/resources/policy-templates"},{name:"أدلة إرشادية",href:"/ar/resources/guides"},{name:"دراسات حالة",href:"/ar/resources/case-studies"},{name:"أحداث",href:"/ar/resources/events"}]},{name:"المدونة",href:"/ar/blog"},{name:"اتصل بنا",href:"/ar/contact"}]:[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Shop",href:"/shop",children:[{name:"Healthcare Uniforms",href:"/shop/healthcare"},{name:"Hospitality Attire",href:"/shop/hospitality-attire"},{name:"Corporate Workwear",href:"/shop/corporate-workwear"},{name:"Aviation Uniforms",href:"/shop/aviation-uniforms"},{name:"Industrial Uniforms",href:"/shop/industrial-uniforms"},{name:"Education Uniforms",href:"/shop/education-uniforms"},{name:"Culinary Uniforms",href:"/shop/culinary-uniforms"},{name:"Security Uniforms",href:"/shop/security-uniforms"}]},{name:"Services",href:"/services",children:[{name:"Custom Design",href:"/services/custom-design"},{name:"Program Management",href:"/services/program-management"},{name:"Bulk Ordering",href:"/services/bulk-ordering"},{name:"Fabric Selection",href:"/services/fabric-selection"},{name:"Measurement Services",href:"/services/measurement-services"},{name:"Quality Assurance",href:"/services/quality-assurance"},{name:"Manufacturing",href:"/services/manufacturing"},{name:"Technical Finishes",href:"/services/technical-finishes"},{name:"Uniform Policies",href:"/services/uniform-policies"},{name:"Corporate Programs",href:"/services/corporate-programs"}]},{name:"Industries",href:"/industries",children:[{name:"Healthcare",href:"/industries/healthcare"},{name:"Hospitality",href:"/industries/hospitality"},{name:"Corporate",href:"/industries/corporate"},{name:"Education",href:"/industries/education"},{name:"Aviation",href:"/industries/aviation"},{name:"Retail Shops",href:"/industries/retail-shops"},{name:"Manufacturing",href:"/industries/manufacturing"},{name:"Factory Industry",href:"/industries/factory-industry"},{name:"Supply Manufacturing",href:"/industries/supply-manufacturing"},{name:"Security",href:"/industries/security"}]},{name:"Resources",href:"/resources",children:[{name:"Fabric Guide",href:"/resources/fabric-guide"},{name:"Size Guide",href:"/resources/size-guide"},{name:"Procurement Guide",href:"/resources/procurement-guide"},{name:"Policy Templates",href:"/resources/policy-templates"},{name:"Guides",href:"/resources/guides"},{name:"Case Studies",href:"/resources/case-studies"},{name:"Events",href:"/resources/events"}]},{name:"Blog",href:"/blog"},{name:"Contact",href:"/contact"}];return(0,a.jsx)(l.E.div,{className:"fixed inset-0 z-[9999] flex",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.15}}},initial:"hidden",animate:"visible",exit:"exit",onClick:t,style:{direction:o?"rtl":"ltr"},children:(0,a.jsx)(l.E.div,{className:"fixed top-0 bottom-0 ".concat(o?"right-0":"left-0"," w-full max-w-xs sm:max-w-sm bg-white shadow-xl overflow-y-auto h-screen"),style:{position:"fixed",top:0,height:"100vh",visibility:"visible",display:"block"},variants:{hidden:{x:o?"100%":"-100%"},visible:{x:0,transition:{type:"spring",stiffness:400,damping:30,duration:.2}},exit:{x:o?"100%":"-100%",transition:{duration:.15,ease:"easeIn"}}},initial:"hidden",animate:"visible",exit:"exit",onClick:e=>e.stopPropagation(),children:(0,a.jsxs)("div",{className:"p-4 sm:p-6 flex flex-col h-full",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-6 pb-4 border-b border-neutral-200 ".concat(o?"flex-row-reverse":"flex-row"),children:[(0,a.jsx)(s.default,{href:"ar"===r?"/ar":"/",onClick:t,className:"inline-block",children:(0,a.jsx)("img",{src:"ar"===r?"/images/uneom-logo.png":"/images/uneom-logo-en.png",alt:"UNEOM Logo",className:"h-8 sm:h-9 w-auto ".concat(o?"ml-1":"mr-1")})}),(0,a.jsx)("button",{className:"p-2 text-neutral-500 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors",onClick:t,"aria-label":o?"إغلاق القائمة":"Close menu",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,a.jsx)("nav",{className:"flex-grow overflow-y-auto pr-2 -mr-2",children:(0,a.jsx)("ul",{className:"space-y-1 pb-4",children:m.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(d,{item:e,locale:r||"en",isActive:c,onClose:t})},e.name))})}),(0,a.jsx)("div",{className:"mt-auto pt-4 border-t border-neutral-200",children:(0,a.jsxs)(s.default,{href:"ar"===r?"/ar/quote":"/quote",onClick:t,className:"flex items-center justify-center w-full text-center py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition duration-200 shadow-sm hover:shadow-md ".concat(o?"flex-row-reverse":"flex-row"),children:[(0,a.jsx)(u.tLl,{className:"h-4 w-4 ".concat(o?"ml-2":"mr-2")}),"ar"===r?"طلب عرض سعر":"Request Quote"]})})]})})})},h=t(33145);let f=e=>{let{src:r,width:t,quality:a,locale:n,isVercel:s}=e;if(r.startsWith("http://")||r.startsWith("https://"))return r;if(s){let e=r.startsWith("/")?r:"/".concat(r);if(n&&"en"!==n){if(e.includes("-".concat(n,".")))return e;if(!e.includes("."))return"".concat(e,"-").concat(n);{let r=e.lastIndexOf("."),t=e.substring(0,r),a=e.substring(r);return"".concat(t,"-").concat(n).concat(a)}}return e}if(n&&"en"!==n){if(r.includes("-".concat(n,".")))return"".concat(r,"?w=").concat(t,"&q=").concat(a||75);if(!r.includes("."))return"".concat(r,"-").concat(n,"?w=").concat(t,"&q=").concat(a||75);{let e=r.lastIndexOf("."),s=r.substring(0,e),i=r.substring(e);return"".concat(s,"-").concat(n).concat(i,"?w=").concat(t,"&q=").concat(a||75)}}return"".concat(r,"?w=").concat(t,"&q=").concat(a||75)},p=e=>{let{src:r,width:t,quality:a=75}=e;if(r.startsWith("http://")||r.startsWith("https://"))return r;let n=r.startsWith("/")?r:"/".concat(r);return n.startsWith("/images/")?n:"/_next/image?url=".concat(encodeURIComponent(n),"&w=").concat(t,"&q=").concat(a)},g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#f3f4f6";return"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='".concat(e.replace("#","%23"),"'/%3E%3C/svg%3E")},x=e=>e?"eager":"lazy";var v=e=>{let{src:r,alt:t,width:s,height:i,className:o="",priority:c=!1,style:l={},onLoad:u,onError:d}=e,[m,h]=(0,n.useState)(r),[f,p]=(0,n.useState)(0),[g,x]=(0,n.useState)(!1),[v,w]=(0,n.useState)(!1),[b,y]=(0,n.useState)(!1);(0,n.useEffect)(()=>{{let e=window.location.hostname;y(e.includes("vercel.app")||"uneom.com"===e||e.endsWith(".uneom.com"))}},[]),(0,n.useEffect)(()=>{h(r),p(0),x(!1),w(!1)},[r]);let j=e=>e.startsWith("http")||e.startsWith("data:")?e:b&&!e.startsWith("/")?"/"+e:e;return(0,n.useEffect)(()=>{if(b){let e=j(r);e!==m&&h(e)}},[b,r]),(0,a.jsx)("img",{src:m,alt:t,width:s,height:i,className:"direct-image ".concat(v?"direct-image-error":""," ").concat(g?"direct-image-loaded":"direct-image-loading"," ").concat(o),style:{...l,minHeight:"1px",minWidth:"1px"},loading:c?"eager":"lazy",fetchPriority:c?"high":"auto",onError:()=>{if(f>=5){h("/images/default-placeholder.jpg"),w(!0),d&&d();return}let e=f+1;switch(p(e),e){case 1:if(r&&!r.startsWith("http")&&!r.startsWith("data:")){let e=window.location.origin;h(r.startsWith("/")?e+r:e+"/"+r)}break;case 2:if(r.includes("/_next/image"))try{let e=new URLSearchParams(r.split("?")[1]).get("url");e&&h(decodeURIComponent(e))}catch(e){console.error("خطأ في استخراج URL من صورة Next.js:",e)}else r.startsWith("/")&&h(r.substring(1));break;case 3:r.includes("/_next/")?h(r.replace("/_next/","/")):r.startsWith("/")||h("/"+r);break;case 4:if(r.includes("/images/"))h("/images/".concat(r.split("/images/")[1]));else{let e=r.split("/").pop();e&&h("/images/".concat(e))}break;case 5:h("/images/default-placeholder.jpg");break;default:window.fallbackImageDataUrl?h(window.fallbackImageDataUrl):h("/images/default-placeholder.svg")}},onLoad:()=>{x(!0),u&&u()},"data-src":r,"data-attempts":f})};function w(e){let{src:r,alt:t,fallbackSrc:s="/images/default-placeholder.jpg",defaultAlt:i="Image",isCritical:o=!1,blurColor:c,priority:l,loading:u,placeholder:d,blurDataURL:m,locale:w,...b}=e,[y,j]=(0,n.useState)(r),[N,k]=(0,n.useState)(t||i),[E,C]=(0,n.useState)(!1),[S,L]=(0,n.useState)(0),[U,M]=(0,n.useState)(!1),[W,R]=(0,n.useState)(!1),[A,I]=(0,n.useState)(!1);(0,n.useEffect)(()=>{j(r),C(!1),L(0),M(!1)},[r]),(0,n.useEffect)(()=>{I(!0);{let e=window.location.hostname;R(e.includes("vercel.app")||"uneom.com"===e||e.endsWith(".uneom.com"))}},[]);let _=()=>{if(S>=3){console.warn("Image failed to load after maximum retries: ".concat(y)),j(s),t||k("Image not available"),C(!0),M(!0);return}if(console.warn("Image failed to load: ".concat(y,", retry #").concat(S+1)),0===S){if("string"==typeof y&&y.startsWith("/")&&y!==s){let e=y.substring(1);console.log("Trying alternative image path without leading slash: ".concat(e)),j(e)}else console.log("Trying with unoptimized image loading"),j("string"!=typeof y||y.includes("?")?y:"".concat(y,"?unoptimized=true"))}else if(1===S){if(W){let e=window.location.origin;if("string"!=typeof y||y.startsWith("http"))j("".concat(r,"?v=").concat(new Date().getTime()));else{let r=y.startsWith("/")?"".concat(e).concat(y):"".concat(e,"/").concat(y);console.log("Trying with full URL path: ".concat(r)),j(r)}}else"string"==typeof y&&j("".concat(y,"?nocache=").concat(new Date().getTime()))}else 2===S&&(console.log("Final retry: switching to regular img tag"),M(!0));L(e=>e+1)},z=u||x(l||o),q=m||("blur"===d?g(c):void 0);if(U){let{width:e,height:r,layout:t,objectFit:n,...s}=b;return(0,a.jsx)("img",{src:y,alt:N,className:"".concat(b.className||""," ").concat(E?"opacity-80":""),style:{maxWidth:"100%",height:r?"".concat(r,"px"):"auto",width:e?"".concat(e,"px"):"100%",objectFit:n||"cover"},loading:"eager"===z?"eager":"lazy",onError:_,...s})}return A&&W?(0,a.jsx)(v,{src:"string"==typeof y?y:"",alt:N,width:"number"==typeof b.width?b.width:void 0,height:"number"==typeof b.height?b.height:void 0,className:"".concat(b.className||""," ").concat(E?"opacity-80":""),priority:l,style:b.style,onError:_}):(0,a.jsx)(h.default,{...b,src:y,alt:N,onError:_,loading:z,placeholder:d||(q?"blur":void 0),blurDataURL:q,className:"".concat(b.className||""," ").concat(E?"opacity-80":""),loader:e=>W?p(e):f({...e,locale:w,isVercel:W})})}function b(e){let{locale:r="en",inverted:t=!1,width:n=170,height:i=52,className:o="h-10 w-auto",linkClassName:c="flex items-center",withLink:l=!0}=e,u="ar"===r,d=(0,a.jsx)(w,{src:u?"/images/uneom-logo.png":"/images/uneom-logo-en.png",alt:u?"يونيوم":"UNEOM",width:n,height:i,className:"".concat(o," ").concat(t?"invert":""),fallbackSrc:"/images/logos/default-logo.png",priority:!0});return l?(0,a.jsx)(s.default,{href:u?"/ar":"/",className:"".concat(c," ").concat(u?"ml-auto mr-0":""),children:d}):d}var y=t(18913),j=t(76186),N=t(33134),k=e=>{let{className:r="",currentLocale:t}=e,[s,o]=(0,n.useState)(!1),[c,l]=(0,n.useState)(!1);(0,i.useRouter)(),(0,n.useEffect)(()=>{l(!0),"undefined"!=typeof document&&document.documentElement.classList.contains("language-transition")&&document.documentElement.classList.remove("language-transition");try{"undefined"!=typeof sessionStorage&&sessionStorage.removeItem("isLanguageSwitch")}catch(e){}},[]),t===N.a2.AR?N.a2.EN:N.a2.AR;let u=t===N.a2.AR?"English":"العربية";return c?(0,a.jsxs)("button",{onClick:()=>{if(c&&!s){o(!0);try{let e=window.location.pathname,r=window.location.search,a="";t===N.a2.AR?(a=e.replace(/^\/ar(?=\/|$)/,""),""===a&&(a="/")):a="/ar".concat("/"===e?"":e),r&&(a+=r),document.documentElement.classList.add("language-transition"),window.location.href=a}catch(e){o(!1),console.error("Error during language switch:",e)}}},disabled:s,className:"language-switcher-button inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border border-neutral-200 hover:bg-neutral-50 transition-colors duration-300 ".concat(s?"opacity-70 cursor-wait":""," ").concat(r),"aria-label":"Switch to ".concat(u),children:[s?(0,a.jsx)(j.frZ,{className:"h-4 w-4 ".concat(t===N.a2.AR?"ml-1.5":"mr-1.5"," animate-spin")}):(0,a.jsx)(y.tAA,{className:"h-4 w-4 ".concat(t===N.a2.AR?"ml-1.5":"mr-1.5")}),(0,a.jsx)("span",{children:u})]}):(0,a.jsx)("span",{className:r})},E=e=>{let{locale:r="en"}=e,[t,c]=(0,n.useState)(!1),[l,d]=(0,n.useState)(!1),[h,f]=(0,n.useState)(!1),p=(0,i.usePathname)(),g="ar"===r;(0,n.useEffect)(()=>{f(!0);let e=()=>{window.scrollY>20?d(!0):d(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let x="fixed w-full transition-all duration-300 z-50 ".concat(h&&l?"bg-white shadow-md py-2":"/"===p||"/ar"===p?"bg-transparent backdrop-blur-sm bg-white/40 py-3":"bg-white shadow-md py-3");return(0,a.jsxs)("header",{className:x,children:[(0,a.jsx)("div",{className:"container mx-auto px-4",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center ".concat("flex-row"),children:[(0,a.jsx)(b,{locale:r,className:"h-10 w-auto",width:160,height:45}),(0,a.jsx)("div",{className:"hidden lg:block ".concat(g?"mr-8":"ml-8"),children:(0,a.jsx)(o,{locale:r})})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"hidden lg:flex items-center ".concat(g?"space-x-reverse space-x-6":"space-x-6"),children:g?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.default,{href:"/ar/quote",className:"bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition duration-300 shadow-sm hover:shadow-md flex items-center flex-row-reverse",children:[(0,a.jsx)(u.tLl,{className:"ml-2 h-4 w-4"}),"طلب عرض سعر"]}),(0,a.jsx)(k,{currentLocale:r})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.default,{href:"/quote",className:"bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition duration-300 shadow-sm hover:shadow-md flex items-center",children:[(0,a.jsx)(u.tLl,{className:"mr-2 h-4 w-4"}),"Request Quote"]}),(0,a.jsx)(k,{currentLocale:r})]})}),(0,a.jsxs)("div",{className:"lg:hidden flex items-center",children:[(0,a.jsx)(k,{currentLocale:r,className:"mr-3"}),(0,a.jsx)("button",{className:"p-2 text-neutral-700 hover:text-primary-600",onClick:()=>{c(!t)},"aria-label":g?"فتح القائمة":"Toggle menu",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 stroke-current",fill:"none",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:t?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})})]})]})]})}),h&&t&&(0,a.jsx)(m,{locale:r,onClose:()=>c(!1)})]})},C=e=>{let{locale:r="en"}=e,t="ar"===r,n={en:{about:"About UNEOM",aboutContent:"UNEOM is Saudi Arabia's leading provider of professional uniforms and scrubs for businesses across healthcare, aviation, hospitality, and corporate sectors.",contactUs:"Contact Us",address:"King Fahd Road, Riyadh, Saudi Arabia",quickLinks:"Quick Links",industries:"Industries",products:"Products",services:"Services",blog:"Blog",resources:"Resources",aboutUs:"About Us",contactUsLink:"Contact Us",followUs:"Follow Us",copyright:"\xa9 2025 UNEOM. All rights reserved.",certifications:"Quality Certifications"},ar:{about:"عن يونيوم",aboutContent:"يونيوم هي الشركة الرائدة في المملكة العربية السعودية في توفير الأزياء المهنية والملابس الرسمية للقطاعات المختلفة بما في ذلك الرعاية الصحية والطيران والضيافة والشركات.",contactUs:"اتصل بنا",address:"طريق الملك فهد، الرياض، المملكة العربية السعودية",quickLinks:"روابط سريعة",industries:"القطاعات",products:"المنتجات",services:"الخدمات",blog:"المدونة",resources:"الموارد",aboutUs:"من نحن",contactUsLink:"تواصل معنا",followUs:"تابعنا",copyright:"\xa9 2025 يونيوم. جميع الحقوق محفوظة.",certifications:"شهادات الجودة"}},i="en"===r?n.en:n.ar;return(0,a.jsx)("footer",{className:"bg-neutral-900 text-white pt-16 pb-8",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ".concat(t?"lg:dir-rtl":""),children:[(0,a.jsxs)("div",{className:t?"text-right":"",children:[(0,a.jsx)("h3",{className:"font-heading text-xl font-bold mb-4",children:i.about}),(0,a.jsx)(b,{locale:r,inverted:!0,withLink:!1,className:"h-12 w-auto mb-4",width:200,height:60}),(0,a.jsx)("p",{className:"text-neutral-300 mb-4",children:i.aboutContent}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-3 items-center mb-2",children:[{name:"ISO 9001:2015",logo:"/images/certificate/ISO_90012015.png"},{name:"OEKO-TEX\xae Standard 100",logo:"/images/certificate/OEKO-TEX.png"},{name:"Saudi Quality Mark",logo:"/images/certificate/Saudi_Quality_Mark.png"},{name:"GOTS Certified",logo:"/images/certificate/GOTS_Certified.png"}].map(e=>(0,a.jsx)("div",{className:"flex items-center justify-center ".concat(t?"ml-2":"mr-2"," last:m-0"),children:(0,a.jsx)(h.default,{src:e.logo,alt:e.name,width:45,height:45,className:"opacity-80 hover:opacity-100 transition-opacity duration-300"})},e.name))})})]}),(0,a.jsxs)("div",{className:t?"text-right":"",children:[(0,a.jsx)("h3",{className:"font-heading text-xl font-bold mb-4",children:i.contactUs}),(0,a.jsxs)("ul",{className:"space-y-3 text-neutral-300",children:[(0,a.jsxs)("li",{className:"flex items-center ".concat(t?"flex-row-reverse justify-end space-x-0":""),children:[(0,a.jsxs)("svg",{className:"w-5 h-5 ".concat(t?"ml-2":"mr-2"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),(0,a.jsx)("span",{children:i.address})]}),(0,a.jsxs)("li",{className:"flex items-center ".concat(t?"flex-row-reverse justify-end space-x-0":""),children:[(0,a.jsx)("svg",{className:"w-5 h-5 ".concat(t?"ml-2":"mr-2"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),(0,a.jsx)("span",{children:"info@uneom.com"})]}),(0,a.jsxs)("li",{className:"flex items-center ".concat(t?"flex-row-reverse justify-end space-x-0":""),children:[(0,a.jsx)("svg",{className:"w-5 h-5 ".concat(t?"ml-2":"mr-2"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),(0,a.jsx)("span",{dir:"ltr",children:"+971558164922"})]})]})]}),(0,a.jsxs)("div",{className:t?"text-right":"",children:[(0,a.jsx)("h3",{className:"font-heading text-xl font-bold mb-4",children:i.quickLinks}),(0,a.jsxs)("ul",{className:"space-y-2 text-neutral-300",children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"en"===r?"/industries":"/ar/industries",className:"hover:text-primary-400 transition duration-300",children:i.industries})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"en"===r?"/shop":"/ar/shop",className:"hover:text-primary-400 transition duration-300",children:i.products})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"en"===r?"/services":"/ar/services",className:"hover:text-primary-400 transition duration-300",children:i.services})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"en"===r?"/resources":"/ar/resources",className:"hover:text-primary-400 transition duration-300",children:i.resources})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"en"===r?"/blog":"/ar/blog",className:"hover:text-primary-400 transition duration-300",children:i.blog})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"en"===r?"/about":"/ar/about",className:"hover:text-primary-400 transition duration-300",children:i.aboutUs})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"en"===r?"/contact":"/ar/contact",className:"hover:text-primary-400 transition duration-300",children:i.contactUsLink})})]})]}),(0,a.jsxs)("div",{className:t?"text-right":"",children:[(0,a.jsx)("h3",{className:"font-heading text-xl font-bold mb-4",children:i.followUs}),(0,a.jsxs)("div",{className:"flex flex-wrap ".concat(t?"justify-end":""," gap-3"),children:[(0,a.jsx)("a",{href:"https://www.facebook.com/uneomuniforms/",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,a.jsx)(u.Am9,{className:"w-5 h-5"})}),(0,a.jsx)("a",{href:"https://x.com/uneomcom",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,a.jsx)(u.fWC,{className:"w-5 h-5"})}),(0,a.jsx)("a",{href:"https://www.instagram.com/uneomuniforms/",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,a.jsx)(u.Zf_,{className:"w-5 h-5"})}),(0,a.jsx)("a",{href:"https://www.tiktok.com/@uneomcom",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,a.jsx)(u.nTm,{className:"w-5 h-5"})}),(0,a.jsx)("a",{href:"https://www.pinterest.com/uneomcompany/",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,a.jsx)(u.oIN,{className:"w-5 h-5"})}),(0,a.jsx)("a",{href:"https://www.youtube.com/@uneom-uniforms",target:"_blank",rel:"noopener noreferrer",className:"bg-neutral-800 hover:bg-primary-600 transition duration-300 p-3 rounded-full",children:(0,a.jsx)(u.V2E,{className:"w-5 h-5"})}),(0,a.jsxs)("a",{href:"https://wa.me/+971558164922",target:"_blank",rel:"noopener noreferrer",className:"relative p-3 rounded-full overflow-hidden group",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)"},children:[(0,a.jsx)("span",{className:"absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-70",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)",animationDuration:"1.5s"}}),(0,a.jsx)("span",{className:"absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-50",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)",animationDuration:"2s",animationDelay:"0.3s"}}),(0,a.jsx)("span",{className:"absolute inset-1 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 animate-pulse",style:{animationDuration:"1.2s"}}),(0,a.jsx)("div",{className:"relative z-10 group-hover:rotate-12 transform transition-transform duration-300",children:(0,a.jsx)(u.xpo,{className:"w-5 h-5"})})]})]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)(s.default,{href:"en"===r?"/quote":"/ar/quote",className:"inline-flex items-center ".concat(t?"flex-row-reverse":""," px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition duration-300"),children:"en"===r?"Request a Quote":"طلب عرض سعر"})})]})]}),(0,a.jsx)("div",{className:"border-t border-neutral-800 pt-8 text-center text-neutral-400",children:(0,a.jsx)("p",{children:i.copyright})})]})})},S=t(40257),L=()=>((0,n.useEffect)(()=>{window.location.hostname.includes("vercel.app")||S.env.NEXT_PUBLIC_VERCEL_ENV;let e=()=>{document.querySelectorAll("img").forEach(e=>{let r=e.getAttribute("src");if(r){if(r.includes("${")&&r.includes("}")){console.warn("Found unprocessed template literal in image:",r),e.setAttribute("data-original-src",r);let t=r.split("${")[0];e.setAttribute("src","".concat(t,"default-placeholder.jpg"))}if(r.includes("undefined")){console.warn("Found undefined in image path:",r),e.setAttribute("data-original-src",r);let t=r.replace(/undefined/g,"");e.setAttribute("src",t)}}})};e();let r=new MutationObserver(r=>{r.forEach(r=>{"childList"===r.type&&r.addedNodes.length>0&&e()})});return r.observe(document.body,{childList:!0,subtree:!0}),()=>{r.disconnect()}},[]),null),U=e=>{let{phoneNumber:r,message:t="",position:n="right",locale:s="en"}=e,i="https://wa.me/".concat(r).concat(t?"?text=".concat(encodeURIComponent(t)):"");return(0,a.jsxs)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 ".concat("left"===n||"ar"===s?"left-6":"right-6"," z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"),style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)"},"aria-label":"ar"===s?"تواصل معنا عبر واتساب":"Contact us via WhatsApp",children:[(0,a.jsx)("span",{className:"absolute inset-0 rounded-full animate-ping opacity-70",style:{background:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)",animationDuration:"1.5s"}}),(0,a.jsx)(u.xpo,{className:"relative z-10 text-white w-7 h-7"})]})},M=e=>{let{children:r,locale:t="en"}=e,n="ar"===t,s=(0,i.usePathname)();return(0,a.jsxs)("div",{className:"min-h-screen flex flex-col",dir:n?"rtl":"ltr",children:[(0,a.jsx)(L,{}),(0,a.jsx)(E,{locale:t}),(0,a.jsx)("main",{className:"flex-grow ".concat("/"===s||"/ar"===s?"pt-0":"pt-24"),children:r}),(0,a.jsx)(C,{locale:t}),(0,a.jsx)(U,{phoneNumber:"971558164922",locale:t,position:n?"left":"right"})]})}},33134:function(e,r,t){t.d(r,{a2:function(){return n},al:function(){return a},dZ:function(){return o},k$:function(){return s}});let a="en",n={EN:"en",AR:"ar"},s=n.EN,i={en:"ltr",ar:"rtl"},o=e=>"rtl"===i[e]}}]);