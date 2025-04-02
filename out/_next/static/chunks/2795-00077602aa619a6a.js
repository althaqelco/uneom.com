(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2795],{36725:function(e,s,r){Promise.resolve().then(r.bind(r,45679))},99376:function(e,s,r){"use strict";var t=r(35475);r.o(t,"notFound")&&r.d(s,{notFound:function(){return t.notFound}}),r.o(t,"useParams")&&r.d(s,{useParams:function(){return t.useParams}}),r.o(t,"usePathname")&&r.d(s,{usePathname:function(){return t.usePathname}}),r.o(t,"useRouter")&&r.d(s,{useRouter:function(){return t.useRouter}}),r.o(t,"useSearchParams")&&r.d(s,{useSearchParams:function(){return t.useSearchParams}})},45679:function(e,s,r){"use strict";r.d(s,{default:function(){return h}});var t=r(57437),a=r(2265),i=r(33145),l=r(27648),n=r(99376),c=r(52434),d=r(3377),o=r(56334),x=r(16105);let m=(e,s)=>{let r=x.RB.find(r=>r.category===e&&r.id===s);if(!r)return null;let t=x.RB.filter(r=>r.category===e&&r.id!==s).slice(0,3).map(e=>({id:e.id,name:e.name,image:e.images[0].src,price:e.price,href:"/shop/".concat(e.category,"/").concat(e.id)}));return{...r,relatedProducts:t}};function h(e){let{params:s}=e,{category:r,product:x}=s,[h,p]=(0,a.useState)(0),[u,j]=(0,a.useState)(null),[g,N]=(0,a.useState)(null),[f,y]=(0,a.useState)(5),[b,v]=(0,a.useState)(!1),w=m(r,x);return w?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"bg-gray-100 py-4",children:(0,t.jsx)(c.default,{children:(0,t.jsx)("nav",{className:"flex","aria-label":"Breadcrumb",children:(0,t.jsxs)("ol",{className:"inline-flex items-center space-x-1 md:space-x-3",children:[(0,t.jsx)("li",{className:"inline-flex items-center",children:(0,t.jsx)(l.default,{href:"/",className:"text-sm text-gray-700 hover:text-primary-600",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("svg",{className:"w-3 h-3 text-gray-400 mx-1","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:(0,t.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})}),(0,t.jsx)(l.default,{href:"/shop",className:"text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2",children:"Shop"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("svg",{className:"w-3 h-3 text-gray-400 mx-1","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:(0,t.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})}),(0,t.jsx)(l.default,{href:"/shop/".concat(r),className:"text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2",children:w.categoryName})]})}),(0,t.jsx)("li",{"aria-current":"page",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("svg",{className:"w-3 h-3 text-gray-400 mx-1","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:(0,t.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})}),(0,t.jsx)("span",{className:"text-sm text-gray-500 ml-1 md:ml-2",children:w.name})]})})]})})})}),(0,t.jsx)("section",{className:"py-12",children:(0,t.jsx)(c.default,{children:(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"relative h-96 rounded-lg overflow-hidden mb-4 bg-gray-100",children:(0,t.jsx)(i.default,{src:w.images[h].src,alt:w.images[h].alt,fill:!0,className:"object-cover",priority:!0})}),(0,t.jsx)("div",{className:"grid grid-cols-4 gap-4",children:w.images.map((e,s)=>(0,t.jsx)("div",{className:"relative h-24 rounded-md overflow-hidden cursor-pointer border-2 transition-colors\n                      ".concat(h===s?"border-primary-600":"border-transparent hover:border-primary-400"),onClick:()=>p(s),children:(0,t.jsx)(i.default,{src:e.src,alt:e.alt,fill:!0,className:"object-cover"})},s))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-sm text-primary-600 font-medium",children:w.categoryName}),(0,t.jsx)("h1",{className:"text-3xl font-bold text-gray-900 mt-1 mb-2",children:w.name}),(0,t.jsx)("p",{className:"text-2xl font-bold text-gray-900 mb-4",children:w.price}),(0,t.jsx)("div",{className:"prose prose-sm mb-8",children:(0,t.jsx)("p",{children:w.description})}),w.colors&&w.colors.length>0&&(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("h3",{className:"text-sm font-medium text-gray-900 mb-3",children:"Color"}),(0,t.jsx)("div",{className:"flex flex-wrap gap-3",children:w.colors.map((e,s)=>(0,t.jsx)("button",{onClick:()=>j(e.name),className:"w-10 h-10 rounded-full border-2 focus:outline-none\n                          ".concat(u===e.name?"border-primary-600":"border-gray-300"),style:{backgroundColor:e.value},title:e.name},s))})]}),w.sizes&&w.sizes.length>0&&(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-3",children:[(0,t.jsx)("h3",{className:"text-sm font-medium text-gray-900",children:"Size"}),(0,t.jsx)("button",{onClick:()=>v(!b),className:"text-sm text-primary-600 hover:text-primary-700",children:"Size chart"})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:w.sizes.map((e,s)=>(0,t.jsx)("button",{onClick:()=>N(e),className:"px-4 py-2 text-sm font-medium rounded-md border focus:outline-none\n                          ".concat(g===e?"border-primary-600 bg-primary-50 text-primary-700":"border-gray-300 text-gray-700 hover:border-gray-400"),children:e},s))}),b&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",children:(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,t.jsx)("h2",{className:"text-xl font-bold",children:"Size Chart"}),(0,t.jsx)("button",{onClick:()=>v(!1),className:"text-gray-500 hover:text-gray-700",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-sm text-gray-700",children:[(0,t.jsx)("thead",{className:"bg-gray-50",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"px-4 py-2 border",children:"Size"}),(0,t.jsx)("th",{className:"px-4 py-2 border",children:"Chest"}),(0,t.jsx)("th",{className:"px-4 py-2 border",children:"Waist"}),(0,t.jsx)("th",{className:"px-4 py-2 border",children:"Hip"}),(0,t.jsx)("th",{className:"px-4 py-2 border",children:"Inseam"})]})}),(0,t.jsx)("tbody",{children:[{size:"XS",chest:'34"',waist:'28"',hip:'36"',inseam:'30"'},{size:"S",chest:'36"',waist:'30"',hip:'38"',inseam:'30"'},{size:"M",chest:'38"',waist:'32"',hip:'40"',inseam:'31"'},{size:"L",chest:'40"',waist:'34"',hip:'42"',inseam:'31"'},{size:"XL",chest:'42"',waist:'36"',hip:'44"',inseam:'32"'},{size:"2XL",chest:'44"',waist:'38"',hip:'46"',inseam:'32"'},{size:"3XL",chest:'46"',waist:'40"',hip:'48"',inseam:'32"'},{size:"4XL",chest:'48"',waist:'42"',hip:'50"',inseam:'33"'}].map((e,s)=>(0,t.jsxs)("tr",{className:s%2==0?"bg-white":"bg-gray-50",children:[(0,t.jsx)("td",{className:"px-4 py-2 border font-medium",children:e.size}),(0,t.jsx)("td",{className:"px-4 py-2 border",children:e.chest}),(0,t.jsx)("td",{className:"px-4 py-2 border",children:e.waist}),(0,t.jsx)("td",{className:"px-4 py-2 border",children:e.hip}),(0,t.jsx)("td",{className:"px-4 py-2 border",children:e.inseam})]},s))})]})}),(0,t.jsx)("div",{className:"mt-6 text-sm text-gray-500",children:(0,t.jsx)("p",{children:"All measurements are in inches. For best results, take your measurements over undergarments similar to those you will wear with your uniform."})})]})})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("h3",{className:"text-sm font-medium text-gray-900 mb-3",children:"Quantity"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("input",{type:"number",value:f,onChange:e=>{let s=parseInt(e.target.value);!isNaN(s)&&s>=1&&y(s)},min:"1",className:"w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"}),(0,t.jsxs)("span",{className:"ml-3 text-sm text-gray-500",children:["Minimum order: ",w.minOrder||5," units"]})]})]}),(0,t.jsxs)("div",{className:"mb-8 p-4 bg-gray-50 rounded-lg",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("span",{className:"text-gray-700",children:"Total Price (estimated):"}),(0,t.jsx)("span",{className:"text-xl font-bold text-primary-700",children:f>=500?"SAR "+(.75*parseFloat(w.price.replace("SAR ",""))*f).toLocaleString():f>=100?"SAR "+(.85*parseFloat(w.price.replace("SAR ",""))*f).toLocaleString():f>=25?"SAR "+(.92*parseFloat(w.price.replace("SAR ",""))*f).toLocaleString():"SAR "+(parseFloat(w.price.replace("SAR ",""))*f).toLocaleString()})]}),(0,t.jsx)("p",{className:"text-xs text-gray-500 mt-1",children:"Final price will be confirmed in quote"})]}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,t.jsx)(o.Z,{onClick:()=>{console.log("Added to quote:",{product:w.id,color:u,size:g,quantity:f}),alert("Product added to your quote request.")},variant:"primary",size:"lg",className:"flex-1",children:"Add to Quote"}),(0,t.jsx)(l.default,{href:"/contact",className:"flex-1",children:(0,t.jsx)(o.Z,{variant:"outline",size:"lg",className:"w-full",children:"Request Consultation"})})]}),w.customizationOptions&&w.customizationOptions.length>0&&(0,t.jsxs)("div",{className:"mt-8 pt-6 border-t border-gray-200",children:[(0,t.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Customization Options"}),(0,t.jsx)("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:w.customizationOptions.map((e,s)=>(0,t.jsx)("li",{children:e},s))}),(0,t.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:"Contact us for pricing on customization options."})]})]})]})})}),(0,t.jsx)("section",{className:"py-12 bg-gray-50",children:(0,t.jsx)(c.default,{children:(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow",children:[(0,t.jsx)("div",{className:"border-b border-gray-200",children:(0,t.jsx)("div",{className:"px-6 py-4",children:(0,t.jsx)("h2",{className:"text-xl font-bold text-gray-900",children:"Product Details"})})}),(0,t.jsx)("div",{className:"p-6",children:(0,t.jsxs)("div",{className:"prose max-w-none",children:[(0,t.jsx)("h3",{children:"Description"}),(0,t.jsx)("p",{children:w.description}),w.features&&w.features.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:"Key Features"}),(0,t.jsx)("ul",{children:w.features.map((e,s)=>(0,t.jsx)("li",{children:e},s))})]}),w.fabricDetails&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:"Fabric Details"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Composition:"})," ",w.fabricDetails.composition]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Weight:"})," ",w.fabricDetails.gsm," GSM"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Features:"})," ",w.fabricDetails.features.join(", ")]})]})]})})]})})}),(0,t.jsx)("section",{className:"py-12",children:(0,t.jsxs)(c.default,{children:[(0,t.jsx)(d.default,{centered:!0,children:"Volume Pricing"}),(0,t.jsx)("p",{className:"text-center text-gray-700 mb-8",children:"Benefit from significant savings with our volume pricing structure."}),(0,t.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-sm text-gray-700",children:[(0,t.jsx)("thead",{className:"bg-primary-50",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"px-6 py-3 border text-left",children:"Quantity"}),(0,t.jsx)("th",{className:"px-6 py-3 border text-right",children:"Price Per Unit"}),(0,t.jsx)("th",{className:"px-6 py-3 border text-right",children:"Savings"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{className:"bg-white",children:[(0,t.jsx)("td",{className:"px-6 py-3 border",children:"5-24 units"}),(0,t.jsx)("td",{className:"px-6 py-3 border text-right",children:w.price}),(0,t.jsx)("td",{className:"px-6 py-3 border text-right",children:"-"})]}),(0,t.jsxs)("tr",{className:"bg-gray-50",children:[(0,t.jsx)("td",{className:"px-6 py-3 border",children:"25-99 units"}),(0,t.jsxs)("td",{className:"px-6 py-3 border text-right",children:["SAR ",(.92*parseFloat(w.price.replace("SAR ",""))).toFixed(0)]}),(0,t.jsx)("td",{className:"px-6 py-3 border text-right text-green-600",children:"8%"})]}),(0,t.jsxs)("tr",{className:"bg-white",children:[(0,t.jsx)("td",{className:"px-6 py-3 border",children:"100-499 units"}),(0,t.jsxs)("td",{className:"px-6 py-3 border text-right",children:["SAR ",(.85*parseFloat(w.price.replace("SAR ",""))).toFixed(0)]}),(0,t.jsx)("td",{className:"px-6 py-3 border text-right text-green-600",children:"15%"})]}),(0,t.jsxs)("tr",{className:"bg-gray-50",children:[(0,t.jsx)("td",{className:"px-6 py-3 border",children:"500+ units"}),(0,t.jsxs)("td",{className:"px-6 py-3 border text-right",children:["SAR ",(.75*parseFloat(w.price.replace("SAR ",""))).toFixed(0)]}),(0,t.jsx)("td",{className:"px-6 py-3 border text-right text-green-600",children:"25%"})]})]})]})}),(0,t.jsx)("p",{className:"text-sm text-gray-500 mt-4",children:"All prices are in Saudi Riyal (SAR). Contact us for custom quotes on orders exceeding 1,000 units."})]})]})}),w.relatedProducts&&w.relatedProducts.length>0&&(0,t.jsx)("section",{className:"py-12 bg-gray-50",children:(0,t.jsxs)(c.default,{children:[(0,t.jsx)(d.default,{centered:!0,children:"Related Products"}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-8",children:w.relatedProducts.map((e,s)=>(0,t.jsx)(l.default,{href:e.href,className:"group",children:(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200",children:[(0,t.jsx)("div",{className:"relative h-64 overflow-hidden",children:(0,t.jsx)(i.default,{src:e.image,alt:e.name,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-110"})}),(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("h3",{className:"text-lg font-bold mt-1 group-hover:text-primary-600 transition-colors duration-200",children:e.name}),(0,t.jsx)("p",{className:"text-primary-600 font-medium mt-2",children:e.price}),(0,t.jsxs)("span",{className:"text-sm text-primary-600 group-hover:text-primary-500 transition-colors duration-200 flex items-center mt-3",children:["View Details",(0,t.jsx)("svg",{className:"w-4 h-4 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})]})]})},s))})]})}),(0,t.jsx)("section",{className:"py-12",children:(0,t.jsx)(c.default,{children:(0,t.jsx)("div",{className:"bg-primary-50 rounded-lg p-8",children:(0,t.jsxs)("div",{className:"max-w-3xl mx-auto text-center",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Need a Custom Quote?"}),(0,t.jsx)("p",{className:"text-gray-700 mb-6",children:"Get a personalized quote for your bulk order, including custom branding options and delivery schedule."}),(0,t.jsx)(l.default,{href:"/contact",children:(0,t.jsx)(o.Z,{variant:"primary",size:"lg",children:"Request a Quote"})})]})})})})]}):(0,n.notFound)()}},3377:function(e,s,r){"use strict";var t=r(57437);r(2265),s.default=e=>{let{children:s,subtitle:r,centered:a=!1,className:i="",as:l="h2",decoration:n=!0}=e,c=a?"text-center":"text-left";return(0,t.jsxs)("div",{className:"mb-8 ".concat(c," ").concat(i),children:[(0,t.jsxs)(l,{className:"".concat("font-heading font-bold text-neutral-900"," ").concat({h1:"text-4xl sm:text-5xl lg:text-6xl",h2:"text-3xl sm:text-4xl",h3:"text-2xl sm:text-3xl",h4:"text-xl sm:text-2xl"}[l]," relative"),children:[s,n&&a&&(0,t.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mx-auto mt-4"}),n&&!a&&(0,t.jsx)("span",{className:"block h-1 w-24 bg-primary-500 mt-4"})]}),r&&(0,t.jsx)("p",{className:"mt-4 text-lg text-neutral-600 max-w-3xl mx-auto",children:r})]})}}}]);