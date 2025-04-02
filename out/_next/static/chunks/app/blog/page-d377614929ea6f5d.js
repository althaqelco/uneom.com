(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9404],{24009:function(e,t,s){Promise.resolve().then(s.bind(s,12141))},33145:function(e,t,s){"use strict";s.d(t,{default:function(){return a.a}});var r=s(48461),a=s.n(r)},27648:function(e,t,s){"use strict";s.d(t,{default:function(){return a.a}});var r=s(72972),a=s.n(r)},48461:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},getImageProps:function(){return i}});let r=s(47043),a=s(55346),l=s(65878),n=r._(s(5084));function i(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let o=l.Image},12141:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var r=s(57437);s(2265);var a=s(27648),l=s(33145),n=s(52434),i=s(3377),o=s(58135);function c(){let e=(0,o.SQ)("en").map(e=>({id:e.slug,title:e.title,excerpt:e.excerpt,date:new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),author:{name:e.author.name,image:e.author.avatar},category:e.tags[0]||"General",coverImage:e.featuredImage,readTime:Math.ceil(e.content.length/2e3)})),t=e[0],s=e.slice(1),c=new Set;e.forEach(e=>c.add(e.category));let d=Array.from(c);return(0,r.jsxs)("div",{className:"bg-white",children:[(0,r.jsx)("div",{className:"relative py-24 bg-primary-700 text-white",children:(0,r.jsx)(n.default,{children:(0,r.jsxs)("div",{className:"max-w-3xl",children:[(0,r.jsx)("h1",{className:"text-4xl md:text-5xl font-bold font-heading leading-tight mb-6",children:"UNEOM Insights"}),(0,r.jsx)("p",{className:"text-xl text-white/90 mb-8",children:"Expert insights, industry trends, and best practices in uniform design and management for Saudi Arabian businesses."})]})})}),(0,r.jsx)("section",{className:"py-16",children:(0,r.jsx)(n.default,{children:(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[(0,r.jsx)("div",{className:"lg:col-span-7 relative rounded-lg overflow-hidden h-96 lg:h-auto",children:(0,r.jsx)(l.default,{src:t.coverImage,alt:t.title,fill:!0,className:"object-cover"})}),(0,r.jsxs)("div",{className:"lg:col-span-5 flex flex-col justify-center",children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("span",{className:"inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full mb-2",children:t.category}),(0,r.jsxs)("span",{className:"text-neutral-500 text-sm ml-3",children:[t.date," • ",t.readTime," min read"]})]}),(0,r.jsx)("h2",{className:"text-3xl font-bold mb-4 hover:text-primary-600 transition-colors duration-200",children:(0,r.jsx)(a.default,{href:"/blog/".concat(t.id),children:t.title})}),(0,r.jsx)("p",{className:"text-neutral-600 mb-6",children:t.excerpt}),(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsxs)(a.default,{href:"/authors/".concat(t.author.name.toLowerCase().replace(/\s+/g,"-")),className:"flex items-center",children:[(0,r.jsx)("div",{className:"relative w-10 h-10 rounded-full overflow-hidden mr-3",children:(0,r.jsx)(l.default,{src:t.author.image,alt:t.author.name,fill:!0,className:"object-cover"})}),(0,r.jsx)("span",{className:"font-medium hover:text-primary-600 transition-colors",children:t.author.name})]})})]})]})})}),(0,r.jsx)("section",{className:"pb-8",children:(0,r.jsx)(n.default,{children:(0,r.jsxs)("div",{className:"flex flex-wrap gap-2 justify-center",children:[(0,r.jsx)("button",{className:"inline-block bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-primary-700",children:"All Posts"}),d.map((e,t)=>(0,r.jsx)("button",{className:"inline-block bg-neutral-100 text-neutral-800 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-neutral-200",children:e},t)),(0,r.jsx)(a.default,{href:"/authors",className:"inline-block bg-neutral-100 text-neutral-800 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-neutral-200",children:(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[(0,r.jsx)("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),"Authors"]})})]})})}),(0,r.jsx)("section",{className:"py-16",children:(0,r.jsx)(n.default,{children:(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:s.map((e,t)=>(0,r.jsxs)("article",{className:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200",children:[(0,r.jsx)(a.default,{href:"/blog/".concat(e.id),className:"block relative h-56",children:(0,r.jsx)(l.default,{src:e.coverImage,alt:e.title,fill:!0,className:"object-cover"})}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("span",{className:"inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full mr-2",children:e.category}),(0,r.jsxs)("span",{className:"text-neutral-500 text-xs",children:[e.readTime," min read"]})]}),(0,r.jsx)("h3",{className:"text-xl font-bold mb-3 hover:text-primary-600 transition-colors duration-200",children:(0,r.jsx)(a.default,{href:"/blog/".concat(e.id),children:e.title})}),(0,r.jsx)("p",{className:"text-neutral-600 mb-4 line-clamp-3",children:e.excerpt}),(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)(a.default,{href:"/authors/".concat(e.author.name.toLowerCase().replace(/\s+/g,"-")),className:"flex items-center",children:[(0,r.jsx)("div",{className:"relative w-8 h-8 rounded-full overflow-hidden mr-2",children:(0,r.jsx)(l.default,{src:e.author.image,alt:e.author.name,fill:!0,className:"object-cover"})}),(0,r.jsx)("span",{className:"text-sm font-medium hover:text-primary-600 transition-colors",children:e.author.name})]}),(0,r.jsx)("span",{className:"text-neutral-500 text-xs",children:e.date})]})]})]},t))})})}),(0,r.jsx)("section",{className:"py-16 bg-primary-50",children:(0,r.jsx)(n.default,{children:(0,r.jsxs)("div",{className:"max-w-3xl mx-auto text-center",children:[(0,r.jsx)(i.default,{centered:!0,children:"Stay Updated with UNEOM Insights"}),(0,r.jsx)("p",{className:"text-lg text-neutral-700 mb-8",children:"Subscribe to our newsletter to receive the latest industry trends, uniform best practices, and UNEOM news directly to your inbox."}),(0,r.jsxs)("form",{className:"flex flex-col sm:flex-row gap-4 max-w-lg mx-auto",children:[(0,r.jsx)("input",{type:"email",placeholder:"Your email address",className:"px-4 py-3 rounded-md border border-neutral-300 flex-grow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",required:!0}),(0,r.jsx)("button",{type:"submit",className:"px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200",children:"Subscribe"})]}),(0,r.jsx)("p",{className:"text-xs text-neutral-500 mt-4",children:"By subscribing, you agree to receive marketing emails from UNEOM. You can unsubscribe at any time."})]})})}),(0,r.jsx)("section",{className:"py-16",children:(0,r.jsxs)(n.default,{children:[(0,r.jsx)(i.default,{centered:!0,children:"Explore More Resources"}),(0,r.jsx)("p",{className:"text-center text-neutral-700 max-w-3xl mx-auto mb-12",children:"Discover more ways to optimize your uniform program and stay up-to-date with industry standards."}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,r.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center",children:[(0,r.jsx)("div",{className:"w-16 h-16 mx-auto mb-4 text-primary-600",children:(0,r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),(0,r.jsx)("h3",{className:"text-xl font-bold mb-3",children:"Case Studies"}),(0,r.jsx)("p",{className:"text-neutral-600 mb-6",children:"Real-world examples of how our uniform solutions have helped businesses across various industries."}),(0,r.jsx)(a.default,{href:"/resources/case-studies",className:"inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200",children:"View Case Studies"})]}),(0,r.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center",children:[(0,r.jsx)("div",{className:"w-16 h-16 mx-auto mb-4 text-primary-600",children:(0,r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),(0,r.jsx)("h3",{className:"text-xl font-bold mb-3",children:"Uniform Guides"}),(0,r.jsx)("p",{className:"text-neutral-600 mb-6",children:"Comprehensive industry-specific guides to help you develop effective uniform programs."}),(0,r.jsx)(a.default,{href:"/resources/guides",className:"inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200",children:"Download Guides"})]}),(0,r.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center",children:[(0,r.jsx)("div",{className:"w-16 h-16 mx-auto mb-4 text-primary-600",children:(0,r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),(0,r.jsx)("h3",{className:"text-xl font-bold mb-3",children:"Webinars & Events"}),(0,r.jsx)("p",{className:"text-neutral-600 mb-6",children:"Join our upcoming webinars and events to learn from industry experts and network with peers."}),(0,r.jsx)(a.default,{href:"/resources/events",className:"inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200",children:"View Schedule"})]})]})]})})]})}},3377:function(e,t,s){"use strict";var r=s(57437);s(2265),t.default=e=>{let{children:t,subtitle:s,centered:a=!1,className:l="",as:n="h2",decoration:i=!0}=e,o=a?"text-center":"text-left";return(0,r.jsxs)("div",{className:"mb-8 ".concat(o," ").concat(l),children:[(0,r.jsxs)(n,{className:"".concat("font-heading font-bold text-neutral-900"," ").concat({h1:"text-4xl sm:text-5xl lg:text-6xl",h2:"text-3xl sm:text-4xl",h3:"text-2xl sm:text-3xl",h4:"text-xl sm:text-2xl"}[n]," relative"),children:[t,i&&a&&(0,r.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mx-auto mt-4"}),i&&!a&&(0,r.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mt-4"})]}),s&&(0,r.jsx)("p",{className:"mt-4 text-lg text-neutral-600 max-w-3xl mx-auto",children:s})]})}}},function(e){e.O(0,[2972,5878,3151,2971,2117,1744],function(){return e(e.s=24009)}),_N_E=e.O()}]);