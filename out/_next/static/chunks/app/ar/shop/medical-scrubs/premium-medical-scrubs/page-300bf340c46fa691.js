(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8132],{10046:function(e,t,r){Promise.resolve().then(r.bind(r,69282))},33145:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var s=r(48461),a=r.n(s)},27648:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var s=r(72972),a=r.n(s)},48667:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var s=r(88003),a=r.n(s)},40257:function(e,t,r){"use strict";var s,a;e.exports=(null==(s=r.g.process)?void 0:s.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(44227)},44227:function(e){!function(){var t={229:function(e){var t,r,s,a=e.exports={};function i(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function n(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var c=[],o=!1,d=-1;function m(){o&&s&&(o=!1,s.length?c=s.concat(c):d=-1,c.length&&u())}function u(){if(!o){var e=n(m);o=!0;for(var t=c.length;t;){for(s=c,c=[];++d<t;)s&&s[d].run();d=-1,t=c.length}s=null,o=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function x(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new x(e,t)),1!==c.length||o||n(u)},x.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function s(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}},l=!0;try{t[e](i,i.exports,s),l=!1}finally{l&&delete r[e]}return i.exports}s.ab="//";var a=s(229);e.exports=a}()},48461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},getImageProps:function(){return n}});let s=r(47043),a=r(55346),i=r(65878),l=s._(r(5084));function n(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=i.Image},69282:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(57437),a=r(2265),i=r(27648),l=r(33145),n=r(28335),c=r(52434),o=r(56334),d=r(3377),m=r(98605);function u(){let[e,t]=(0,a.useState)("أزرق سماوي"),[r,u]=(0,a.useState)("M"),[x,h]=(0,a.useState)("description"),[p,f]=(0,a.useState)(!1),g={categoryName:"ملابس الرعاية الصحية",name:"سكروب طبي ممتاز",tagline:"ملابس طبية عالية الأداء للمتخصصين في الرعاية الصحية",shortDescription:"سكروب طبي عالي الجودة بألوان متعددة للعاملين في مجال الرعاية الصحية",price:"ريال 179",minOrder:20,mainImage:"/images/default-placeholder.jpg",additionalImages:["/images/avatar-placeholder.jpg","/images/default-placeholder.jpg","/images/default-placeholder.jpg"],colors:[{name:"أزرق سماوي",value:"#87CEEB"},{name:"أخضر جراحي",value:"#168269"},{name:"كحلي",value:"#000080"},{name:"رمادي",value:"#808080"}],sizes:["XS","S","M","L","XL","XXL","3XL"],features:[{title:"نسيج مضاد للميكروبات",description:"خصائص مضادة للميكروبات مدمجة تمنع نمو البكتيريا وتقلل الرائحة",icon:"shield-check"},{title:"امتصاص الرطوبة",description:"تقنية نسيج متقدمة تسحب الرطوبة بعيدًا عن الجسم للراحة طوال اليوم",icon:"sparkles"},{title:"بناء متين",description:"خياطة مقواة ونسيج عالي الجودة يضمن أداءً طويل الأمد",icon:"check-badge"},{title:"تصميم عملي",description:"جيوب متعددة موضوعة بشكل استراتيجي للأدوات والملحقات الطبية الأساسية",icon:"inbox-stack"},{title:"راحة مثالية",description:"تصميم مريح مع لوحات مرنة تسمح بنطاق كامل من الحركة أثناء المناوبات",icon:"heart"},{title:"سهولة العناية",description:"نسيج مقاوم للتجعد وسهل العناية يتحمل الغسيل الصناعي المتكرر",icon:"check-circle"}],specifications:[{name:"المادة",value:"65% بوليستر، 35% قطن مع معالجة مضادة للميكروبات"},{name:"الوزن",value:"180 جرام/م\xb2"},{name:"الإغلاق",value:"بنطلون برباط، قميص بياقة V"},{name:"الجيوب",value:"6 جيوب وظيفية (3 علوية، 3 في البنطلون)"},{name:"العناية",value:"قابل للغسل في الغسالة، متوافق مع الغسيل الصناعي"},{name:"المميزات",value:"مضاد للميكروبات، يمتص الرطوبة، مقاوم للسوائل"}],customizationOptions:[{name:"شعار المستشفى/العيادة",description:"إضافة شعار مؤسستك مطرزًا على الصدر أو الكم",image:"/images/default-placeholder.jpg"},{name:"تطريز الاسم",description:"اسم الموظف ومؤهلاته مطرزة للتعريف",image:"/images/default-placeholder.jpg"},{name:"ترميز الألوان للأقسام",description:"خيارات الألوان لتمييز الأقسام المختلفة أو الأدوار",image:"/images/default-placeholder.jpg"},{name:"تكوين جيوب مخصص",description:"تعديل موضع الجيوب بناءً على احتياجات قسم معين",image:"/images/default-placeholder.jpg"}],relatedProducts:[{id:"surgical-scrubs",name:"طقم سكروب جراحي",image:"/images/product-placeholder.jpg",price:"ريال 199",href:"/ar/shop/medical-scrubs/surgical-scrubs"},{id:"lab-coats",name:"معطف مختبر احترافي",image:"/images/product-placeholder.jpg",price:"ريال 229",href:"/ar/shop/medical-scrubs/lab-coats"},{id:"nurse-uniform",name:"زي تمريض ممتاز",image:"/images/product-placeholder.jpg",price:"ريال 189",href:"/ar/shop/medical-scrubs/nurse-uniform"}],detailedDescription:"<p>يضع السكروب الطبي الممتاز الخاص بنا معيارًا جديدًا لملابس الرعاية الصحية في المرافق الطبية بالمملكة العربية السعودية. تم تطويره بمدخلات من المتخصصين في الرعاية الصحية، يجمع هذا السكروب بين أعلى جودة من المواد مع ميزات تصميم عملية لتلبية الاحتياجات المتطلبة للبيئات الطبية.</p>\n    \n    <p>توفر تقنية النسيج المضاد للميكروبات طبقة إضافية من الحماية في إعدادات الرعاية الصحية، بينما تضمن خصائص امتصاص الرطوبة الراحة أثناء المناوبات الطويلة. تم بناء كل طقم بخياطة مقواة في نقاط الضغط العالي لتحمل مشاق الاستخدام اليومي والغسيل المتكرر.</p>\n    \n    <p>يتضمن التصميم المدروس جيوبًا متعددة موضوعة بشكل استراتيجي للوصول المريح إلى الأدوات والأجهزة الأساسية. القص المريح يسمح بنطاق كامل من الحركة للمتخصصين الطبيين الذين يتنقلون باستمرار، مع الحفاظ على مظهر احترافي وأنيق.</p>\n    \n    <p>متوفر بمجموعة من الألوان المناسبة لترميز الأقسام المختلفة، يمكن تخصيص سكروب الطبي الممتاز بشعار مؤسستك وتعريف الموظفين. يلبي النسيج المعايير الصحية الدولية مع تكييفه خصيصًا لبيئات الرعاية الصحية في المملكة العربية السعودية.</p>"},j=e=>{let{color:t,selected:r,onClick:a}=e;return(0,s.jsxs)("button",{onClick:a,className:"w-10 h-10 rounded-full flex items-center justify-center ".concat(r?"ring-2 ring-offset-2 ring-primary-500":""),title:t.name,children:[(0,s.jsx)("span",{className:"sr-only",children:t.name}),(0,s.jsx)("span",{className:"w-6 h-6 rounded-full",style:{backgroundColor:t.value}})]})},b={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:'\n          <script type="application/ld+json">\n            '.concat(JSON.stringify({"@context":"https://schema.org/","@type":"Product",name:"ملابس طبية متميزة",image:"/images/default-placeholder.jpg",description:"ملابس طبية متميزة عالية الجودة مصنوعة من أقمشة متطورة للاستخدام في المستشفيات والمراكز الطبية بالمملكة العربية السعودية",sku:"MED-SCR-001",brand:{"@type":"Brand",name:"يونيوم"},offers:{"@type":"Offer",price:"349",priceCurrency:"SAR",availability:"https://schema.org/InStock"},aggregateRating:{"@type":"AggregateRating",ratingValue:"4.7",bestRating:"5",worstRating:"1",reviewCount:"112"}}),"\n          </script>\n        ")}}),(0,s.jsx)("div",{className:"bg-neutral-50 py-8",children:(0,s.jsxs)(c.default,{children:[(0,s.jsx)(m.Z,{items:[{label:"الرئيسية",href:"/ar"},{label:"المتجر",href:"/ar/shop"},{label:"ملابس طبية",href:"/ar/shop/medical-scrubs"},{label:"ملابس طبية متميزة",href:"#"}],className:"mb-6"}),(0,s.jsxs)("div",{className:"flex items-center text-sm text-neutral-600 justify-end",children:[(0,s.jsx)(i.default,{href:"/ar/shop",className:"hover:text-primary-600 transition-colors",children:"المتجر"}),(0,s.jsx)("span",{className:"mx-2",children:"•"}),(0,s.jsx)(i.default,{href:"/ar/shop/medical-scrubs",className:"hover:text-primary-600 transition-colors",children:"سكروب طبي"}),(0,s.jsx)("span",{className:"mx-2",children:"•"}),(0,s.jsx)("span",{className:"text-primary-700 font-medium",children:"سكروب طبي ممتاز"})]})]})}),(0,s.jsxs)(c.default,{className:"py-12",children:[(0,s.jsxs)(n.E.div,{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:flex-row-reverse",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:"visible",children:[(0,s.jsxs)(n.E.div,{variants:b,className:"space-y-4",children:[(0,s.jsx)("div",{className:"relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-neutral-200",children:(0,s.jsx)(l.default,{src:g.mainImage,alt:g.name,fill:!0,className:"object-contain",sizes:"(max-width: 768px) 100vw, 50vw",priority:!0})}),(0,s.jsx)("div",{className:"grid grid-cols-3 gap-4",children:g.additionalImages.map((e,t)=>(0,s.jsx)("div",{className:"relative aspect-square rounded-lg overflow-hidden bg-white border border-neutral-200 cursor-pointer hover:border-primary-300 transition-colors",children:(0,s.jsx)(l.default,{src:e,alt:"".concat(g.name," - عرض ").concat(t+1),fill:!0,className:"object-cover",sizes:"(max-width: 768px) 30vw, 15vw"})},t))})]}),(0,s.jsxs)(n.E.div,{variants:b,className:"space-y-8 text-right",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-sm text-primary-700 font-medium mb-2",children:g.categoryName}),(0,s.jsx)("h1",{className:"text-3xl md:text-4xl font-bold text-neutral-900 mb-2",children:g.name}),(0,s.jsx)("p",{className:"text-xl text-neutral-700",children:g.tagline})]}),(0,s.jsx)("p",{className:"text-lg text-neutral-800",children:g.shortDescription}),(0,s.jsxs)("div",{className:"pt-4 border-t border-neutral-200",children:[(0,s.jsxs)("div",{className:"flex justify-between items-end mb-6",children:[(0,s.jsxs)("div",{className:"text-sm text-neutral-600",children:["الحد الأدنى للطلب: ",(0,s.jsxs)("span",{className:"font-medium",children:[g.minOrder," قطعة"]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-sm text-neutral-600 mb-1",children:"السعر الأساسي"}),(0,s.jsx)("div",{className:"text-2xl font-bold text-neutral-900",children:g.price})]})]}),(0,s.jsxs)("div",{className:"mb-6 text-right",children:[(0,s.jsxs)("div",{className:"text-sm font-medium text-neutral-900 mb-3",children:["اللون: ",e]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2 justify-end",children:g.colors.map(r=>(0,s.jsx)(j,{color:r,selected:e===r.name,onClick:()=>t(r.name)},r.name))})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-3",children:[(0,s.jsx)("button",{className:"text-sm text-primary-600 hover:text-primary-700",children:"دليل المقاسات"}),(0,s.jsxs)("div",{className:"text-sm font-medium text-neutral-900",children:["المقاس: ",r]})]}),(0,s.jsx)(e=>{let{sizes:t,selectedSize:r,onChange:a}=e;return(0,s.jsx)("div",{className:"grid grid-cols-7 gap-2",children:t.map(e=>(0,s.jsx)("button",{onClick:()=>a(e),className:"py-2 border rounded-md ".concat(r===e?"bg-primary-50 border-primary-500 text-primary-700":"border-neutral-200 text-neutral-700 hover:border-neutral-300"),children:e},e))})},{sizes:g.sizes,selectedSize:r,onChange:u})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 mt-8",children:[(0,s.jsx)(o.Z,{variant:"secondary",className:"flex-1",onClick:()=>f(!0),children:"طلب معلومات"}),(0,s.jsx)(o.Z,{variant:"primary",className:"flex-1",children:"إضافة إلى طلب التسعير"})]})]})]})]}),(0,s.jsxs)("div",{className:"mt-16 border-t border-neutral-200 pt-8",children:[(0,s.jsxs)("div",{className:"flex space-x-8 border-b border-neutral-200 justify-end",children:[(0,s.jsx)("button",{onClick:()=>h("customization"),className:"pb-4 font-medium text-sm ".concat("customization"===x?"text-primary-600 border-b-2 border-primary-600":"text-neutral-600 hover:text-neutral-900"),children:"خيارات التخصيص"}),(0,s.jsx)("button",{onClick:()=>h("specifications"),className:"pb-4 font-medium text-sm ".concat("specifications"===x?"text-primary-600 border-b-2 border-primary-600":"text-neutral-600 hover:text-neutral-900"),children:"المواصفات"}),(0,s.jsx)("button",{onClick:()=>h("description"),className:"pb-4 font-medium text-sm ".concat("description"===x?"text-primary-600 border-b-2 border-primary-600":"text-neutral-600 hover:text-neutral-900"),children:"الوصف"})]}),(0,s.jsxs)("div",{className:"py-8 text-right",children:["description"===x&&(0,s.jsx)("div",{className:"prose max-w-none prose-headings:text-right prose-p:text-right",children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:g.detailedDescription},dir:"rtl"})}),"specifications"===x&&(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:g.specifications.map((e,t)=>(0,s.jsxs)("div",{className:"flex flex-row-reverse",children:[(0,s.jsx)("div",{className:"w-2/3 text-neutral-700 text-right",children:e.value}),(0,s.jsx)("div",{className:"w-1/3 font-medium text-neutral-900 text-right",children:e.name})]},t))}),"customization"===x&&(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsx)("p",{className:"text-neutral-700 text-right",children:"عزز ملابس السكروب الطبية الخاصة بك مع خيارات التخصيص هذه لتتناسب تمامًا مع متطلبات مؤسستك الصحية:"}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:g.customizationOptions.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-start space-x-4 flex-row-reverse",children:[(0,s.jsx)("div",{className:"w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100 mr-0 ml-4",children:e.image&&(0,s.jsx)(l.default,{src:e.image,alt:e.name,width:80,height:80,className:"object-cover w-full h-full"})}),(0,s.jsxs)("div",{className:"text-right",children:[(0,s.jsx)("h4",{className:"font-medium text-neutral-900",children:e.name}),(0,s.jsx)("p",{className:"text-sm text-neutral-600 mt-1",children:e.description})]})]},t))})]})]})]}),(0,s.jsxs)("div",{className:"mt-16 bg-neutral-50 rounded-2xl p-8",children:[(0,s.jsx)(d.default,{as:"h2",className:"text-center mb-12",children:"الميزات والفوائد الرئيسية"}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:g.features.map((e,t)=>(0,s.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,s.jsx)("div",{className:"w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-neutral-900 mb-2",children:e.title}),(0,s.jsx)("p",{className:"text-neutral-600",children:e.description})]},t))})]}),(0,s.jsxs)("div",{className:"mt-16 bg-neutral-50 rounded-2xl p-8",children:[(0,s.jsx)(d.default,{as:"h2",className:"mb-6 text-center",children:"معلومات الطلب"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,s.jsx)("div",{className:"w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})})}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-neutral-900 mb-2",children:"الحد الأدنى للطلب"}),(0,s.jsxs)("p",{className:"text-neutral-600",children:[g.minOrder," قطعة لكل نمط ولون"]})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,s.jsx)("div",{className:"w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-neutral-900 mb-2",children:"الجدول الزمني للإنتاج"}),(0,s.jsxs)("p",{className:"text-neutral-600",children:["2-3 أسابيع للطلبات العادية",(0,s.jsx)("br",{}),"1-2 أسبوع للطلبات العاجلة"]})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,s.jsx)("div",{className:"w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"})})}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-neutral-900 mb-2",children:"شروط الدفع"}),(0,s.jsxs)("p",{className:"text-neutral-600",children:["50% دفعة عند تأكيد الطلب",(0,s.jsx)("br",{}),"50% قبل الشحن"]})]})]}),(0,s.jsx)("div",{className:"mt-8 text-center",children:(0,s.jsx)(o.Z,{variant:"primary",children:"طلب عرض سعر"})})]}),(0,s.jsxs)("div",{className:"mt-16",children:[(0,s.jsx)(d.default,{as:"h2",className:"mb-8 text-center",children:"منتجات ذات صلة"}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:g.relatedProducts.map(e=>(0,s.jsxs)(i.default,{href:e.href,className:"group",children:[(0,s.jsx)("div",{className:"aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 mb-4",children:(0,s.jsx)("div",{className:"relative w-full h-full",children:(0,s.jsx)(l.default,{src:e.image,alt:e.name,fill:!0,className:"object-cover group-hover:scale-105 transition-transform duration-300",sizes:"(max-width: 768px) 100vw, 33vw"})})}),(0,s.jsxs)("div",{className:"text-right",children:[(0,s.jsx)("h3",{className:"font-medium text-neutral-900 group-hover:text-primary-600 transition-colors",children:e.name}),(0,s.jsx)("p",{className:"mt-1 text-sm text-neutral-500",children:e.price})]})]},e.id))})]})]}),p&&(0,s.jsx)("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:(0,s.jsx)("div",{className:"bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,s.jsxs)("button",{onClick:()=>f(!1),className:"text-neutral-500 hover:text-neutral-700",children:[(0,s.jsx)("span",{className:"sr-only",children:"إغلاق"}),(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]}),(0,s.jsx)("h3",{className:"text-xl font-bold",children:"طلب معلومات"})]}),(0,s.jsxs)("div",{className:"space-y-4 text-right",children:[(0,s.jsx)("p",{className:"text-neutral-700",children:"يرجى ملء النموذج أدناه لطلب المزيد من المعلومات حول سكروب طبي ممتاز. سيتواصل معك متخصصو الأزياء الطبية لدينا قريبًا."}),(0,s.jsxs)("form",{className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-neutral-700",children:"المنشأة الصحية"}),(0,s.jsx)("input",{type:"text",className:"mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-neutral-700",children:"الشخص المسؤول"}),(0,s.jsx)("input",{type:"text",className:"mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-neutral-700",children:"المنصب/القسم"}),(0,s.jsx)("input",{type:"text",className:"mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-neutral-700",children:"البريد الإلكتروني"}),(0,s.jsx)("input",{type:"email",className:"mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-neutral-700",children:"رقم الهاتف"}),(0,s.jsx)("input",{type:"tel",className:"mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-neutral-700",children:"الكمية المقدرة"}),(0,s.jsx)("input",{type:"number",className:"mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-sm font-medium text-neutral-700",children:"متطلبات محددة"}),(0,s.jsx)("textarea",{rows:4,className:"mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-right"})]}),(0,s.jsx)("div",{className:"flex justify-start",children:(0,s.jsx)(o.Z,{variant:"primary",children:"إرسال الطلب"})})]})]})]})})})]})}},98605:function(e,t,r){"use strict";var s=r(57437);r(2265);var a=r(27648),i=r(99376),l=r(48667),n=r(40257);t.Z=e=>{let{locale:t="en",items:r,className:c="",homeLabel:o,includeHome:d=!0,maxItems:m=0,separator:u="/"}=e,x=(0,i.usePathname)(),h="ar"===t,p=r||(()=>{if("/"===x||"/ar"===x)return[];let e=x;"ar"===t&&x.startsWith("/ar")&&(e=x.replace(/^\/ar/,""));let r=e.split("/").filter(Boolean);return r.map((e,s)=>({label:e.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase()),href:"".concat("ar"===t?"/ar":"","/").concat(r.slice(0,s+1).join("/"))}))})(),f=d?[{label:o||("ar"===t?"الرئيسية":"Home"),href:"ar"===t?"/ar":"/"},...p]:p,g=m>0&&f.length>m?[...f.slice(0,m-1),f[f.length-1]]:f;if(0===g.length)return null;let j={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:f.map((e,t)=>({"@type":"ListItem",position:t+1,name:e.label,item:"".concat(n.env.NEXT_PUBLIC_SITE_URL||"https://uneom.com").concat(e.href)}))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("nav",{"aria-label":"ar"===t?"مسار التنقل":"Breadcrumb",className:"text-sm ".concat(c),children:(0,s.jsx)("ol",{className:"flex flex-wrap items-center ".concat(h?"flex-row-reverse":""),children:g.map((e,t)=>{let r=t===g.length-1;return(0,s.jsxs)("li",{className:"flex items-center ".concat(r?"text-neutral-700 font-medium":"text-neutral-500"),children:[t>0&&(0,s.jsx)("span",{className:"mx-2 text-neutral-400 ".concat(h?"transform rotate-180":""),"aria-hidden":"true",children:u}),r?(0,s.jsx)("span",{className:"text-neutral-700 font-medium",children:e.label}):(0,s.jsx)(a.default,{href:e.href,className:"hover:text-primary-600 transition-colors duration-200",children:e.label})]},e.href)})})}),(0,s.jsx)(l.default,{id:"breadcrumb-schema",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(j)}})]})}},56334:function(e,t,r){"use strict";var s=r(57437);r(2265);var a=r(27648);t.Z=e=>{let{children:t,variant:r="primary",size:i="md",href:l,target:n,onClick:c,fullWidth:o=!1,className:d="",disabled:m=!1,ariaLabel:u,type:x="button"}=e,h="\n    ".concat("inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"," \n    ").concat({sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"}[i]," \n    ").concat({primary:"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-300",secondary:"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300",outline:"bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300 disabled:border-primary-300",ghost:"bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300"}[r]," \n    ").concat(o?"w-full":""," \n    ").concat(d,"\n  ").trim();return l?(0,s.jsx)(a.default,{href:l,className:h,target:n,"aria-label":u,onClick:c,children:t}):(0,s.jsx)("button",{type:x,className:h,onClick:c,disabled:m,"aria-label":u,children:t})}},52434:function(e,t,r){"use strict";var s=r(57437);r(2265),t.default=e=>{let{children:t,className:r="",size:a="lg"}=e;return(0,s.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[a]," ").concat(r),children:t})}},3377:function(e,t,r){"use strict";var s=r(57437);r(2265),t.default=e=>{let{children:t,subtitle:r,centered:a=!1,className:i="",as:l="h2",decoration:n=!0}=e,c=a?"text-center":"text-left";return(0,s.jsxs)("div",{className:"mb-8 ".concat(c," ").concat(i),children:[(0,s.jsxs)(l,{className:"".concat("font-heading font-bold text-neutral-900"," ").concat({h1:"text-4xl sm:text-5xl lg:text-6xl",h2:"text-3xl sm:text-4xl",h3:"text-2xl sm:text-3xl",h4:"text-xl sm:text-2xl"}[l]," relative"),children:[t,n&&a&&(0,s.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mx-auto mt-4"}),n&&!a&&(0,s.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mt-4"})]}),r&&(0,s.jsx)("p",{className:"mt-4 text-lg text-neutral-600 max-w-3xl mx-auto",children:r})]})}}},function(e){e.O(0,[2972,5878,8335,2223,2971,2117,1744],function(){return e(e.s=10046)}),_N_E=e.O()}]);