"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{99376:function(e,t,n){var r=n(35475);n.o(r,"notFound")&&n.d(t,{notFound:function(){return r.notFound}}),n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},81906:function(e,t,n){n.d(t,{c:function(){return l}});var r=n(2265),o=n(3078),i=n(45750),s=n(53576);function l(e){let t=(0,s.h)(()=>(0,o.BX)(e)),{isStatic:n}=(0,r.useContext)(i._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}},45447:function(e,t,n){let r,o;n.d(t,{v:function(){return G}});var i=n(3078),s=n(53576),l=n(2265),u=n(62035),f=n(85350),c=n(56277),a=n(45414);function d(e,t){let n;let r=()=>{let{currentTime:r}=t,o=(null===r?0:r.value)/100;n!==o&&e(o),n=o};return a.Wi.update(r,!0),()=>(0,a.Pn)(r)}let g=new WeakMap;function h({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=g.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function p(e){e.forEach(h)}let m=new Set;var y=n(81645),v=n(14438);let w=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),E=()=>({time:0,x:w(),y:w()}),x={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function W(e,t,n,r){let o=n[t],{length:i,position:s}=x[t],l=o.current,u=n.time;o.current=e[`scroll${s}`],o.scrollLength=e[`scroll${i}`]-e[`client${i}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,y.Y)(0,o.scrollLength,o.current);let f=r-u;o.velocity=f>50?0:(0,v.R)(o.current-l,f)}var L=n(59111),S=n(88843),P=n(8913);let B={start:0,center:.5,end:1};function b(e,t,n=0){let r=0;if(e in B&&(e=B[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let R=[0,0],H=[[0,0],[1,1]],z={x:0,y:0},O=new WeakMap,k=new WeakMap,N=new WeakMap,X=e=>e===document.documentElement?window:e;function T(e,{container:t=document.documentElement,...n}={}){let i=N.get(t);i||(i=new Set,N.set(t,i));let s=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{W(e,"x",n,t),W(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=H}=n,{target:o=e,axis:i="y"}=n,s="y"===i?"height":"width",l=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}else break;return n}(o,e):z,u=o===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in o&&"svg"!==o.tagName?o.getBBox():{width:o.clientWidth,height:o.clientHeight},f={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let c=!t[i].interpolate,a=r.length;for(let e=0;e<a;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:R,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,B[e]?e:"0"]),b(o[0],n,r)-b(o[1],t)}(r[e],f[s],u[s],l[i]);c||n===t[i].interpolatorOffsets[e]||(c=!0),t[i].offset[e]=n}c&&(t[i].interpolate=(0,S.s)(t[i].offset,(0,P.Y)(r),{clamp:!1}),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=(0,L.u)(0,1,t[i].interpolate(t[i].current))}(e,n,r)},notify:()=>t(n)}}(t,e,E(),n);if(i.add(s),!O.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(a.frameData.timestamp)},s=()=>{for(let e of i)e.notify()},l=()=>{a.Wi.read(e,!1,!0),a.Wi.read(n,!1,!0),a.Wi.update(s,!1,!0)};O.set(t,l);let u=X(t);window.addEventListener("resize",l,{passive:!0}),t!==document.documentElement&&k.set(t,"function"==typeof t?(m.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};m.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{m.delete(t),!m.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(p));let n=(0,f.IG)(e);return n.forEach(e=>{let n=g.get(e);n||(n=new Set,g.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=g.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,l)),u.addEventListener("scroll",l,{passive:!0})}let l=O.get(t);return a.Wi.read(l,!1,!0),()=>{var e;(0,a.Pn)(l);let n=N.get(t);if(!n||(n.delete(s),n.size))return;let r=O.get(t);O.delete(t),r&&(X(t).removeEventListener("scroll",r),null===(e=k.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}let Y=new Map;function A({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Y.has(t)||Y.set(t,{});let r=Y.get(t);return r[n]||(r[n]=(0,f.tn)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);let r={value:0},o=T(e=>{r.value=100*e[n].progress},{container:t,axis:n});return{currentTime:r,cancel:o}}({source:t,axis:n})),r[n]}function C(e){return e&&(e.target||e.offset)}var M=n(11534);function _(e,t){(0,u.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let F=()=>({scrollX:(0,i.BX)(0),scrollY:(0,i.BX)(0),scrollXProgress:(0,i.BX)(0),scrollYProgress:(0,i.BX)(0)});function G({container:e,target:t,layoutEffect:n=!0,...r}={}){let o=(0,s.h)(F);return(n?M.L:l.useEffect)(()=>(_("target",t),_("container",e),function(e,{axis:t="y",...n}={}){let r={axis:t,...n};return"function"==typeof e?2===e.length||C(r)?T(t=>{e(t[r.axis].progress,t)},r):d(e,A(r)):function(e,t){if(e.flatten(),C(t))return e.pause(),T(n=>{e.time=e.duration*n[t.axis].progress},t);{let n=A(t);return e.attachTimeline?e.attachTimeline(n,e=>(e.pause(),d(t=>{e.time=e.duration*t},n))):c.Z}}(e,r)}((e,{x:t,y:n})=>{o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(n.current),o.scrollYProgress.set(n.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),o}},85318:function(e,t,n){n.d(t,{q:function(){return d}});var r=n(56277),o=n(2265),i=n(20768),s=n(45750),l=n(53576),u=n(11534),f=n(81906),c=n(23999),a=n(45414);function d(e,t={}){let{isStatic:n}=(0,o.useContext)(s._),d=(0,o.useRef)(null),h=(0,l.h)(()=>(0,c.i)(e)?e.get():e),p=(0,l.h)(()=>"string"==typeof h?h.replace(/[\d.-]/g,""):void 0),m=(0,f.c)(h),y=(0,o.useRef)(h),v=(0,o.useRef)(r.Z),w=()=>{E(),d.current=(0,i.y)({keyframes:[g(m.get()),g(y.current)],velocity:m.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:v.current})},E=()=>{d.current&&d.current.stop()};return(0,o.useInsertionEffect)(()=>m.attach((e,t)=>n?t(e):(y.current=e,v.current=e=>t(p?e+p:e),a.Wi.postRender(w),m.get()),E),[JSON.stringify(t)]),(0,u.L)(()=>{if((0,c.i)(e))return e.on("change",e=>m.set(p?e+p:e))},[m,p]),m}function g(e){return"number"==typeof e?e:parseFloat(e)}},13812:function(e,t,n){n.d(t,{H:function(){return d}});var r=n(88843);let o=e=>e&&"object"==typeof e&&e.mix,i=e=>o(e)?e.mix:void 0;var s=n(81906),l=n(11534),u=n(45414);function f(e,t){let n=(0,s.c)(t()),r=()=>n.set(t());return r(),(0,l.L)(()=>{let t=()=>u.Wi.preRender(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,u.Pn)(r)}}),n}var c=n(53576),a=n(3078);function d(e,t,n,o){if("function"==typeof e)return function(e){a.S1.current=[],e();let t=f(a.S1.current,e);return a.S1.current=void 0,t}(e);let s="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,o=e[0+n],s=e[1+n],l=e[2+n],u=e[3+n],f=(0,r.s)(s,l,{mixer:i(l[0]),...u});return t?f(o):f}(t,n,o);return Array.isArray(e)?g(e,s):g([e],([e])=>s(e))}function g(e,t){let n=(0,c.h)(()=>[]);return f(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);