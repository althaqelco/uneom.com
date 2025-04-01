"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4266],{84266:function(e,t,i){i.d(t,{default:function(){return m}});var a=i(57437),r=i(2265),l=i(33145),s=i(27648),n=i(28335),c=i(78640),d=i(52434),o=i(3377),x=i(56334);function m(e){let{resourceData:t,skipMainLayout:i=!1}=e,m="ar"===t.locale,h={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},p={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},u=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24",children:[(0,a.jsx)("div",{className:"absolute inset-0 overflow-hidden opacity-40",children:(0,a.jsx)(l.default,{src:t.heroImage||"/images/banner-placeholder.jpg",alt:t.title,fill:!0,className:"object-cover",priority:!0})}),(0,a.jsx)(d.default,{children:(0,a.jsxs)(n.E.div,{className:"relative z-10 max-w-3xl",initial:"hidden",animate:"visible",variants:h,style:{direction:m?"rtl":"ltr"},children:[(0,a.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:t.title}),(0,a.jsx)("p",{className:"text-xl opacity-90 mb-8",children:t.subtitle})]})})]}),(0,a.jsx)("section",{className:"py-16 bg-white",children:(0,a.jsx)(d.default,{children:(0,a.jsx)("div",{className:"max-w-3xl mx-auto text-center",style:{direction:m?"rtl":"ltr"},children:(0,a.jsxs)(n.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:h,children:[(0,a.jsx)(o.default,{centered:!0,children:t.overview.title}),(0,a.jsx)("div",{className:"prose max-w-none mx-auto",dangerouslySetInnerHTML:{__html:t.overview.content}})]})})})}),t.sections.map((e,t)=>(0,a.jsx)("section",{className:"py-16 ".concat(t%2==0?"bg-white":"bg-neutral-50"),children:(0,a.jsx)(d.default,{children:(0,a.jsxs)("div",{className:"grid grid-cols-1 ".concat(e.image?"md:grid-cols-2 gap-12 items-center":""),style:{direction:m?"rtl":"ltr"},children:[(0,a.jsxs)(n.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:h,className:e.image&&t%2!=0?"md:order-2":"",children:[(0,a.jsx)(o.default,{centered:!e.image,children:e.title}),(0,a.jsx)("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:e.content}})]}),e.image&&(0,a.jsx)(n.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:h,className:t%2!=0?"md:order-1":"",children:(0,a.jsx)("div",{className:"rounded-lg overflow-hidden shadow-xl",children:(0,a.jsx)(l.default,{src:e.image||"/images/default-placeholder.jpg",alt:e.title,width:600,height:450,className:"w-full h-auto object-cover"})})})]})})},t)),t.items&&t.items.length>0&&(0,a.jsx)("section",{className:"py-16 bg-white",children:(0,a.jsx)(d.default,{children:(0,a.jsxs)(n.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:p,children:[(0,a.jsx)(o.default,{centered:!0,children:m?"الموارد المتاحة":"Available Resources"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12",children:t.items.map((e,t)=>(0,a.jsxs)(n.E.div,{variants:h,className:"bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100",children:[e.image&&(0,a.jsx)("div",{className:"h-48 relative overflow-hidden",children:(0,a.jsx)(l.default,{src:e.image||"/images/product-placeholder.jpg",alt:e.title,fill:!0,className:"object-cover"})}),(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-3",children:e.title}),(0,a.jsx)("p",{className:"text-neutral-600 mb-4",children:e.description}),e.properties&&Object.keys(e.properties).length>0&&(0,a.jsxs)("div",{className:"mt-4 pt-4 border-t border-neutral-100",children:[(0,a.jsx)("h4",{className:"font-medium text-sm text-neutral-500 mb-2",children:m?"الخصائص":"Properties"}),(0,a.jsx)("dl",{className:"grid grid-cols-2 gap-x-4 gap-y-2",children:Object.entries(e.properties).map(e=>{let[t,i]=e;return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("dt",{className:"text-sm font-medium text-neutral-500",children:t}),(0,a.jsx)("dd",{className:"text-sm text-neutral-800",children:i})]},t)})})]})]})]},e.id))})]})})}),t.relatedResources&&t.relatedResources.length>0&&(0,a.jsx)("section",{className:"py-16 bg-neutral-50",children:(0,a.jsx)(d.default,{children:(0,a.jsxs)(n.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:p,children:[(0,a.jsx)(o.default,{centered:!0,children:m?"موارد ذات صلة":"Related Resources"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-12",children:t.relatedResources.map((e,t)=>(0,a.jsxs)(n.E.div,{variants:h,className:"bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center",children:[(0,a.jsx)("div",{className:"w-16 h-16 mx-auto mb-4 text-primary-600",children:(0,a.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:e.icon})})}),(0,a.jsx)("h3",{className:"text-xl font-bold mb-3",children:e.title}),(0,a.jsx)("p",{className:"text-neutral-600 mb-6",children:e.description}),(0,a.jsx)(s.default,{href:e.link||"/resources",className:"inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200",children:m?"عرض المزيد":"Learn More"})]},t))})]})})}),(0,a.jsx)("section",{className:"py-16 bg-primary-900 text-white",children:(0,a.jsx)(d.default,{children:(0,a.jsxs)(n.E.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:h,className:"text-center max-w-3xl mx-auto",style:{direction:m?"rtl":"ltr"},children:[(0,a.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:t.cta.title}),(0,a.jsx)("p",{className:"text-xl opacity-90 mb-8",children:t.cta.description}),(0,a.jsx)(x.Z,{href:t.cta.buttonUrl||"/contact?resource=".concat(encodeURIComponent(t.title)),variant:"secondary",size:"lg",children:t.cta.buttonText})]})})})]});return i?u():(0,a.jsx)(c.default,{locale:t.locale,children:u()})}},56334:function(e,t,i){var a=i(57437);i(2265);var r=i(27648);t.Z=e=>{let{children:t,variant:i="primary",size:l="md",href:s,target:n,onClick:c,fullWidth:d=!1,className:o="",disabled:x=!1,ariaLabel:m,type:h="button"}=e,p="\n    ".concat("inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"," \n    ").concat({sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"}[l]," \n    ").concat({primary:"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-300",secondary:"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300",outline:"bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300 disabled:border-primary-300",ghost:"bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300"}[i]," \n    ").concat(d?"w-full":""," \n    ").concat(o,"\n  ").trim();return s?(0,a.jsx)(r.default,{href:s,className:p,target:n,"aria-label":m,onClick:c,children:t}):(0,a.jsx)("button",{type:h,className:p,onClick:c,disabled:x,"aria-label":m,children:t})}},52434:function(e,t,i){var a=i(57437);i(2265),t.default=e=>{let{children:t,className:i="",size:r="lg"}=e;return(0,a.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 ".concat({sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",xl:"max-w-screen-2xl",full:"max-w-full"}[r]," ").concat(i),children:t})}},3377:function(e,t,i){var a=i(57437);i(2265),t.default=e=>{let{children:t,subtitle:i,centered:r=!1,className:l="",as:s="h2",decoration:n=!0}=e,c=r?"text-center":"text-left";return(0,a.jsxs)("div",{className:"mb-8 ".concat(c," ").concat(l),children:[(0,a.jsxs)(s,{className:"".concat("font-heading font-bold text-neutral-900"," ").concat({h1:"text-4xl sm:text-5xl lg:text-6xl",h2:"text-3xl sm:text-4xl",h3:"text-2xl sm:text-3xl",h4:"text-xl sm:text-2xl"}[s]," relative"),children:[t,n&&r&&(0,a.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mx-auto mt-4"}),n&&!r&&(0,a.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mt-4"})]}),i&&(0,a.jsx)("p",{className:"mt-4 text-lg text-neutral-600 max-w-3xl mx-auto",children:i})]})}}}]);