(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8143],{98329:function(e,t,i){Promise.resolve().then(i.t.bind(i,88003,23)),Promise.resolve().then(i.t.bind(i,56693,23)),Promise.resolve().then(i.bind(i,38823)),Promise.resolve().then(i.bind(i,78640)),Promise.resolve().then(i.bind(i,45491)),Promise.resolve().then(i.bind(i,33876)),Promise.resolve().then(i.bind(i,92184)),Promise.resolve().then(i.bind(i,49391)),Promise.resolve().then(i.bind(i,77850))},38823:function(e,t,i){"use strict";i.d(t,{default:function(){return c}});var a=i(2265);let r=e=>e.includes("/images/")?e.replace("/images/","/images/ar/"):e,n=e=>{"undefined"!=typeof document&&e.forEach(e=>{let t=r(e),i=document.createElement("link");i.rel="preload",i.as="image",i.href=t,document.head.appendChild(i)})},o=()=>{if("undefined"!=typeof document){let e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap",document.head.appendChild(e);let t=document.createElement("link");t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap",document.head.appendChild(t);let i=document.createElement("style");i.textContent='\n      .rtl-text {\n        font-family: \'Cairo\', \'Tajawal\', sans-serif;\n      }\n      \n      .rtl-flip {\n        transform: scaleX(-1);\n      }\n      \n      [dir="rtl"] svg[class*="arrow"],\n      [dir="rtl"] svg[class*="chevron"],\n      [dir="rtl"] svg[class*="direction"],\n      [dir="rtl"] svg[class*="navigation"] {\n        transform: scaleX(-1);\n      }\n    ',document.head.appendChild(i)}},s=()=>({"--text-align":"right","--direction":"rtl","--font-family":"Cairo, Tajawal, sans-serif","--reverse-flex":"row-reverse","--start-padding":"0","--end-padding":"1rem","--align-start":"flex-end","--align-end":"flex-start","--margin-start":"0","--margin-end":"auto"}),l=()=>{"undefined"!=typeof document&&(document.querySelectorAll("svg").forEach(e=>{let t=e.getAttribute("class")||"";(t.includes("arrow")||t.includes("chevron")||t.includes("direction")||t.includes("navigation"))&&e.classList.add("rtl-flip")}),document.querySelectorAll(".flex, .inline-flex").forEach(e=>{let t=window.getComputedStyle(e).justifyContent;"flex-start"===t?e.classList.add("rtl-justify-end"):"flex-end"===t&&e.classList.add("rtl-justify-start")}),document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, button, a, li, label, input, textarea").forEach(e=>{e.classList.add("rtl-text")}))},d=()=>{{o(),n(["/images/hero-ar.jpg","/images/logo-ar.svg","/images/icons/rtl-menu.svg"]);let e=s(),t=document.documentElement;Object.entries(e).forEach(e=>{let[i,a]=e;t.style.setProperty(i,a)}),document.body.classList.add("rtl-optimized"),l(),new MutationObserver(()=>{l()}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("load",()=>{l()})}},u=["/images/avatar-placeholder.jpg","/images/default-placeholder.jpg","/images/default-placeholder.jpg","/images/default-placeholder.jpg","/images/default-placeholder.jpg","/images/banner-placeholder.jpg","/images/default-placeholder.jpg"];var c=()=>((0,a.useEffect)(()=>{d();let e=window.location.hostname.includes("vercel.app")||"uneom.com"===window.location.hostname||window.location.hostname.endsWith(".uneom.com"),t=document.createElement("link");t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap",document.head.appendChild(t);let i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap",document.head.appendChild(i),document.querySelectorAll('link[rel="preload"][as="font"]').forEach(e=>{e.href.includes("/fonts/ar/")&&e.remove()}),u.forEach(t=>{let i=document.createElement("link");i.rel="preload",i.href=e?"https://uneom-com.vercel.app".concat(t):t,i.as="image",document.head.appendChild(i)});let a=document.createElement("style");return a.textContent='\n      /* Apply Arabic fonts to critical elements immediately */\n      html[lang="ar"] body {\n        font-family: \'Tajawal\', sans-serif !important;\n      }\n      \n      html[lang="ar"] h1,\n      html[lang="ar"] h2,\n      html[lang="ar"] h3,\n      html[lang="ar"] h4,\n      html[lang="ar"] h5,\n      html[lang="ar"] h6 {\n        font-family: \'Cairo\', sans-serif !important;\n      }\n      \n      /* Fix images in production */\n      .next-image-wrapper img {\n        object-fit: contain !important;\n        object-position: center !important;\n      }\n      \n      /* Force reveal hidden images */\n      img[style*="visibility: hidden"] {\n        visibility: visible !important;\n        opacity: 1 !important;\n      }\n    ',document.head.appendChild(a),document.documentElement.dir="rtl",document.documentElement.lang="ar",document.body.classList.add("rtl"),setTimeout(()=>{document.querySelectorAll("img").forEach(e=>{if(e.complete&&0===e.naturalWidth){let t=e.src;e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",setTimeout(()=>{e.src=t},10)}})},1e3),()=>{document.head.removeChild(t),document.head.removeChild(i)}},[]),null)},45491:function(e,t,i){"use strict";i.d(t,{default:function(){return u}});var a=i(2265);let r={immediate:!1,onVisible:!0,onHover:!0,hoverDelay:100,priority:"low"},n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"low";if("undefined"==typeof document||!e||document.querySelector('link[rel="preload"][href="'.concat(e,'"]')))return;let i=document.createElement("link");i.rel="preload",i.as="document",i.href=e,i.setAttribute("fetchpriority",t),document.head.appendChild(i)},o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={...r,...t},a=e.href;if(!(!a||a.startsWith("http")||a.startsWith("//")||a.startsWith("#"))){if(i.immediate&&n(a,i.priority),i.onHover){let t=null;e.addEventListener("mouseenter",()=>{t=setTimeout(()=>{n(a,i.priority)},i.hoverDelay)}),e.addEventListener("mouseleave",()=>{t&&(clearTimeout(t),t=null)})}if(i.onVisible&&"IntersectionObserver"in window){let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(n(a,i.priority),t.disconnect())})},{rootMargin:"200px"});t.observe(e)}}},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:'a[href^="/"]',t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"undefined"!=typeof document&&document.querySelectorAll(e).forEach(e=>{o(e,t)})},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"high";e.forEach(e=>{n(e,t)})},d=()=>{window.addEventListener("load",()=>{setTimeout(()=>{s()},300)})};function u(e){let{criticalPaths:t=[]}=e;return(0,a.useEffect)(()=>{d(),t.length>0&&l(t);let e=window.location.pathname.startsWith("/ar")?"/ar":"";l(["/services","/industries","/about","/contact","/shop","/blog"].map(t=>"".concat(e).concat(t)),"low")},[t]),null}},33876:function(e,t,i){"use strict";i.d(t,{default:function(){return l}});var a=i(57437),r=i(2265),n=i(99376);let o=e=>{let t=e.split("/").filter(Boolean)[0];return"en"===t||"ar"===t?t:"en"},s=(0,r.createContext)({locale:"en",isRTL:!1,dir:"ltr"});function l(e){let{children:t,initialLocale:i="en"}=e,l=(0,n.usePathname)(),[d,u]=(0,r.useState)(i),[c,m]=(0,r.useState)(!1);(0,r.useEffect)(()=>{m(!0),u(o(l))},[l]);let h="ar"===d,p={locale:c?d:i,isRTL:h,dir:h?"rtl":"ltr"};return(0,a.jsx)(s.Provider,{value:p,children:(0,a.jsx)("div",{dir:p.dir,lang:d,children:t})})}},92184:function(e,t,i){"use strict";i.d(t,{F:function(){return d},QuoteProvider:function(){return l}});var a=i(57437),r=i(2265);let n={items:[],itemCount:0},o=(0,r.createContext)(void 0),s=(e,t)=>{switch(t.type){case"ADD_ITEM":{let i=e.items.findIndex(e=>e.id===t.payload.id);if(-1!==i){let a=[...e.items];return a[i]={...a[i],quantity:a[i].quantity+t.payload.quantity},{...e,items:a}}return{...e,items:[...e.items,t.payload],itemCount:e.itemCount+1}}case"REMOVE_ITEM":{let i=e.items.filter(e=>e.id!==t.payload.id);return{...e,items:i,itemCount:i.length}}case"UPDATE_QUANTITY":{let i=e.items.map(e=>e.id===t.payload.id?{...e,quantity:t.payload.quantity}:e);return{...e,items:i}}case"CLEAR_QUOTE":return n;default:return e}},l=e=>{let{children:t}=e,[i,l]=(0,r.useReducer)(s,n);return(0,r.useEffect)(()=>{let e=localStorage.getItem("quote");e&&JSON.parse(e).items.forEach(e=>{l({type:"ADD_ITEM",payload:e})})},[]),(0,r.useEffect)(()=>{localStorage.setItem("quote",JSON.stringify(i))},[i]),(0,a.jsx)(o.Provider,{value:{state:i,addItem:e=>{l({type:"ADD_ITEM",payload:e})},removeItem:e=>{l({type:"REMOVE_ITEM",payload:{id:e}})},updateQuantity:(e,t)=>{l({type:"UPDATE_QUANTITY",payload:{id:e,quantity:t}})},clearQuote:()=>{l({type:"CLEAR_QUOTE"})}},children:t})},d=()=>{let e=(0,r.useContext)(o);if(void 0===e)throw Error("useQuote must be used within a QuoteProvider");return e}},49391:function(e,t){"use strict";t.default={navigation:{home:"الرئيسية",industries:"القطاعات",services:"الخدمات",resources:"الموارد",about:"من نحن",contact:"اتصل بنا",shop:"المتجر",requestQuote:"طلب عرض سعر",blog:"المدونة"},industries:{healthcare:"الرعاية الصحية",aviation:"الطيران",hospitality:"الضيافة",corporate:"الشركات",education:"التعليم",manufacturing:"التصنيع",security:"الأمن"},services:{programManagement:"إدارة برامج الزي الموحد",customDesign:"تصميم وتسويق الزي المخصص",bulkOrdering:"طلبات الجملة",measurementServices:"خدمات القياس",uniformPolicies:"سياسات الزي الموحد"},home:{hero:{title:"المزود الرائد للزي المهني والملابس الطبية في المملكة العربية السعودية",subtitle:"حلول مخصصة للشركات في قطاعات الرعاية الصحية والطيران والضيافة والقطاع المؤسسي",requestQuote:"طلب عرض سعر",exploreIndustries:"استكشف القطاعات"},trustSignals:{yearsInBusiness:"سنوات في العمل",clientsServed:"عملاء تمت خدمتهم",saudiMade:"خيارات صنع في السعودية",compliance:"امتثال كامل",delivery:"توصيل في جميع أنحاء المملكة"},featuredProducts:{title:"منتجات مميزة",viewAll:"عرض جميع المنتجات"},testimonials:{title:"ماذا يقول عملاؤنا"},quickQuote:{title:"طلب عرض سعر سريع",subtitle:"احصل على عرض سعر مخصص لاحتياجات مؤسستك من الزي الموحد",submit:"إرسال الطلب"},blog:{title:"أحدث المقالات",readMore:"اقرأ المزيد",allPosts:"عرض جميع المقالات"}},about:{title:"عن يونيوم",mission:"مهمتنا",values:"قيمنا",team:"فريقنا",expertise:"خبراتنا",partnerships:"شراكاتنا",quality:"معايير الجودة"},contact:{title:"اتصل بنا",subtitle:"نحن هنا للإجابة على أسئلتك ومساعدتك في العثور على حلول الزي الموحد المثالية",form:{name:"الاسم الكامل",email:"البريد الإلكتروني",phone:"رقم الهاتف",company:"اسم الشركة",subject:"الموضوع",message:"رسالتك",submit:"إرسال الرسالة",required:"مطلوب",privacy:"أوافق على سياسة الخصوصية وأسمح ليونيوم بالاتصال بي بخصوص استفساري."},locations:{title:"مواقعنا",riyadh:"الرياض",jeddah:"جدة",dammam:"الدمام"},hours:{title:"ساعات العمل",weekdays:"الأحد - الخميس",weekdayTimes:"9:00 صباحًا - 5:00 مساءً",friday:"الجمعة",fridayClosed:"مغلق",saturday:"السبت",saturdayTimes:"10:00 صباحًا - 2:00 مساءً"},followUs:"تابعنا"},forms:{required:"مطلوب",submit:"إرسال",sending:"جاري الإرسال...",success:"شكراً لك! تم استلام طلبك.",error:"عذراً! حدث خطأ ما. يرجى المحاولة مرة أخرى."},blog:{readMore:"قراءة المزيد",publishedOn:"نُشر في",by:"بواسطة",relatedPosts:"مقالات ذات صلة",sharePost:"شارك هذا المقال",tags:"الوسوم",newsletter:{title:"اشترك في نشرتنا الإخبارية",description:"احصل على آخر المستجدات والمعلومات حول الزي المهني والاتجاهات في المملكة",subscribe:"اشتراك"}},footer:{companyDescription:"يونيوم هي المزود الرائد للزي المهني وملابس العمل في المملكة العربية السعودية، ونقدم حلولاً مخصصة للشركات عبر قطاعات متعددة.",quickLinks:"روابط سريعة",contact:{title:"اتصل بنا",email:"البريد الإلكتروني: info@uneom.com",phone:"الهاتف: +971558164922",address:"الرياض، المملكة العربية السعودية"},copyright:"\xa9 2023 يونيوم. جميع الحقوق محفوظة.",privacyPolicy:"سياسة الخصوصية",termsOfService:"شروط الخدمة"},languageSwitcher:{arabic:"العربية",english:"English"}}},77850:function(e,t){"use strict";t.default={navigation:{home:"Home",industries:"Industries",services:"Services",resources:"Resources",about:"About Us",contact:"Contact",shop:"Shop",requestQuote:"Request a Quote",blog:"Blog"},industries:{healthcare:"Healthcare",aviation:"Aviation",hospitality:"Hospitality",corporate:"Corporate",education:"Education",manufacturing:"Manufacturing",security:"Security"},services:{programManagement:"Uniform Program Management",customDesign:"Custom Design & Branding",bulkOrdering:"Bulk Ordering",measurementServices:"Measurement Services",uniformPolicies:"Corporate Uniform Policies"},home:{hero:{title:"Saudi Arabia's Leading Provider of Professional Uniforms & Scrubs",subtitle:"Tailored B2B Solutions for Healthcare, Aviation, Hospitality & Corporate Sectors",requestQuote:"Request a Quote",exploreIndustries:"Explore Industries"},trustSignals:{yearsInBusiness:"Years in business",clientsServed:"Clients served",saudiMade:"Saudi-made options",compliance:"Compliance",delivery:"Kingdom-wide delivery"},featuredProducts:{title:"Featured Products",viewAll:"View All Products"},testimonials:{title:"What Our Clients Say"},quickQuote:{title:"Request a Quick Quote",subtitle:"Get a custom quote for your organization's uniform needs",submit:"Submit Request"},blog:{title:"Latest Articles",readMore:"Read More",allPosts:"View All Articles"}},about:{title:"About UNEOM",mission:"Our Mission",values:"Our Values",team:"Our Team",expertise:"Our Expertise",partnerships:"Our Partnerships",quality:"Quality Standards"},contact:{title:"Contact Us",subtitle:"We're here to answer your questions and help you find the perfect uniform solution",form:{name:"Full Name",email:"Email Address",phone:"Phone Number",company:"Company Name",subject:"Subject",message:"Your Message",submit:"Send Message",required:"Required",privacy:"I agree to the privacy policy and allow UNEOM to contact me regarding my inquiry."},locations:{title:"Our Locations",riyadh:"Riyadh",jeddah:"Jeddah",dammam:"Dammam"},hours:{title:"Business Hours",weekdays:"Sunday - Thursday",weekdayTimes:"9:00 AM - 5:00 PM",friday:"Friday",fridayClosed:"Closed",saturday:"Saturday",saturdayTimes:"10:00 AM - 2:00 PM"},followUs:"Follow Us",email:"Email: info@uneom.com",phone:"Phone: +971558164922",address:"Riyadh, Saudi Arabia"},forms:{required:"Required",submit:"Submit",sending:"Sending...",success:"Thank you! Your submission has been received.",error:"Oops! Something went wrong. Please try again."},blog:{readMore:"Read More",publishedOn:"Published on",by:"by",relatedPosts:"Related Posts",sharePost:"Share this post",tags:"Tags",newsletter:{title:"Subscribe to Our Newsletter",description:"Get the latest updates and information about professional uniforms and trends in Saudi Arabia",subscribe:"Subscribe"}},footer:{companyDescription:"UNEOM is Saudi Arabia's leading provider of professional uniforms and workwear, offering customized B2B solutions across multiple industries.",quickLinks:"Quick Links",contact:{title:"Contact Us",email:"Email: info@uneom.com",phone:"Phone: +971558164922",address:"Riyadh, Saudi Arabia"},copyright:"\xa9 2023 UNEOM. All rights reserved.",privacyPolicy:"Privacy Policy",termsOfService:"Terms of Service"},languageSwitcher:{arabic:"العربية",english:"English"}}},56693:function(e){e.exports={style:{fontFamily:"'__Inter_838c52', '__Inter_Fallback_838c52'",fontStyle:"normal"},className:"__className_838c52",variable:"__variable_838c52"}}},function(e){e.O(0,[952,7699,1694,8422,2972,5878,8335,8802,8003,8640,2971,2117,1744],function(){return e(e.s=98329)}),_N_E=e.O()}]);