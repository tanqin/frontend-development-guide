import{d as mt,r as tt,a as Al,b as qc,i as Qt,c as Zr,e as $c,f as wl,g as Ke,o as kt,h as be,j as Je,k as or,l as Rl,m as Tn,u as si,n as io,T as ro,p as pe,q as Re,s as nt,t as Ni,v as gt,w as en,x as Cl,_ as rt,y as Yc,z as Fe,A as oi,B as jc,C as so,D as Kc,E as Zc,F as Jc,G as Qc,H as oo,I as ao,J as eu,K as lo,L as ai,M as bn,N as ot,O as Wt,P as On,Q as ht,R as Qe,S as Jr,U as yt,V as wt,W as Io,X as tu,Y as nu,Z as Wr,$ as Xr,a0 as Ll,a1 as iu,a2 as ru,a3 as su,a4 as ou,a5 as au,a6 as lu,a7 as cu}from"./framework-a44ba987.js";const uu="modulepreload",hu=function(i){return"/frontend-development-guide/"+i},Uo={},Ge=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=hu(s),s in Uo)return;Uo[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!n)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===s&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":uu,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},du={"v-8daa1a0e":()=>Ge(()=>import("./index.html-d259131e.js"),[]).then(({data:i})=>i),"v-1d8755e3":()=>Ge(()=>import("./index.html-226929c0.js"),[]).then(({data:i})=>i),"v-25f247c9":()=>Ge(()=>import("./index.html-a6795127.js"),[]).then(({data:i})=>i),"v-16d350a3":()=>Ge(()=>import("./javascript.html-b54ad9e4.js"),[]).then(({data:i})=>i),"v-16505f43":()=>Ge(()=>import("./react.html-47a0f1dc.js"),[]).then(({data:i})=>i),"v-4de4cc8b":()=>Ge(()=>import("./typescript.html-1189854a.js"),[]).then(({data:i})=>i),"v-6a2021de":()=>Ge(()=>import("./uni-app.html-a40b6599.js"),[]).then(({data:i})=>i),"v-368ce9dc":()=>Ge(()=>import("./vue.html-ea3e6260.js"),[]).then(({data:i})=>i),"v-8a459346":()=>Ge(()=>import("./index.html-eb202019.js"),[]).then(({data:i})=>i),"v-49e0da1e":()=>Ge(()=>import("./hbuilderx.html-071be5fb.js"),[]).then(({data:i})=>i),"v-69705532":()=>Ge(()=>import("./node-and-npm.html-736d0ddf.js"),[]).then(({data:i})=>i),"v-f94cb34c":()=>Ge(()=>import("./node.html-b9032af9.js"),[]).then(({data:i})=>i),"v-c84bb1d0":()=>Ge(()=>import("./other-tools.html-41727b70.js"),[]).then(({data:i})=>i),"v-b64f52aa":()=>Ge(()=>import("./svn.html-78ed0457.js"),[]).then(({data:i})=>i),"v-5794b970":()=>Ge(()=>import("./todesk.html-4fe51fcd.js"),[]).then(({data:i})=>i),"v-25f19272":()=>Ge(()=>import("./vscode.html-42926afb.js"),[]).then(({data:i})=>i),"v-ebd5c936":()=>Ge(()=>import("./weixin-devtools.html-fc27e469.js"),[]).then(({data:i})=>i),"v-7b28dbcc":()=>Ge(()=>import("./index.html-5e58d0a0.js"),[]).then(({data:i})=>i),"v-3706649a":()=>Ge(()=>import("./404.html-f9875e7b.js"),[]).then(({data:i})=>i)},fu=JSON.parse('{"base":"/frontend-development-guide/","lang":"zh-CN","title":"前端开发指南","description":"前端开发指南","head":[["link",{"rel":"icon","href":"/frontend-development-guide/images/logo.svg"}]],"locales":{}}'),Pl={"v-8daa1a0e":mt(()=>Ge(()=>import("./index.html-14d7dd25.js"),["assets/index.html-14d7dd25.js","assets/framework-a44ba987.js"])),"v-1d8755e3":mt(()=>Ge(()=>import("./index.html-6aa06bc8.js"),["assets/index.html-6aa06bc8.js","assets/framework-a44ba987.js"])),"v-25f247c9":mt(()=>Ge(()=>import("./index.html-6e13ec8a.js"),["assets/index.html-6e13ec8a.js","assets/framework-a44ba987.js"])),"v-16d350a3":mt(()=>Ge(()=>import("./javascript.html-58ef4ed0.js"),["assets/javascript.html-58ef4ed0.js","assets/framework-a44ba987.js"])),"v-16505f43":mt(()=>Ge(()=>import("./react.html-d6fecfe1.js"),["assets/react.html-d6fecfe1.js","assets/framework-a44ba987.js"])),"v-4de4cc8b":mt(()=>Ge(()=>import("./typescript.html-6e08e6cd.js"),["assets/typescript.html-6e08e6cd.js","assets/framework-a44ba987.js"])),"v-6a2021de":mt(()=>Ge(()=>import("./uni-app.html-7a00fa8a.js"),["assets/uni-app.html-7a00fa8a.js","assets/framework-a44ba987.js"])),"v-368ce9dc":mt(()=>Ge(()=>import("./vue.html-4599826c.js"),["assets/vue.html-4599826c.js","assets/framework-a44ba987.js"])),"v-8a459346":mt(()=>Ge(()=>import("./index.html-9b7647f0.js"),["assets/index.html-9b7647f0.js","assets/framework-a44ba987.js"])),"v-49e0da1e":mt(()=>Ge(()=>import("./hbuilderx.html-d26de7a2.js"),["assets/hbuilderx.html-d26de7a2.js","assets/framework-a44ba987.js"])),"v-69705532":mt(()=>Ge(()=>import("./node-and-npm.html-d513a852.js"),["assets/node-and-npm.html-d513a852.js","assets/framework-a44ba987.js"])),"v-f94cb34c":mt(()=>Ge(()=>import("./node.html-975ae645.js"),["assets/node.html-975ae645.js","assets/framework-a44ba987.js"])),"v-c84bb1d0":mt(()=>Ge(()=>import("./other-tools.html-cfe51b2c.js"),["assets/other-tools.html-cfe51b2c.js","assets/framework-a44ba987.js"])),"v-b64f52aa":mt(()=>Ge(()=>import("./svn.html-ffd25794.js"),["assets/svn.html-ffd25794.js","assets/framework-a44ba987.js"])),"v-5794b970":mt(()=>Ge(()=>import("./todesk.html-4fae30ed.js"),["assets/todesk.html-4fae30ed.js","assets/framework-a44ba987.js"])),"v-25f19272":mt(()=>Ge(()=>import("./vscode.html-a445309c.js"),["assets/vscode.html-a445309c.js","assets/framework-a44ba987.js"])),"v-ebd5c936":mt(()=>Ge(()=>import("./weixin-devtools.html-8c7e9100.js"),["assets/weixin-devtools.html-8c7e9100.js","assets/framework-a44ba987.js"])),"v-7b28dbcc":mt(()=>Ge(()=>import("./index.html-b2abd9f1.js"),["assets/index.html-b2abd9f1.js","assets/framework-a44ba987.js"])),"v-3706649a":mt(()=>Ge(()=>import("./404.html-02e786a6.js"),["assets/404.html-02e786a6.js","assets/framework-a44ba987.js"]))};var pu=Symbol(""),mu=tt(du),Dl=Al({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),Pn=tt(Dl),Kn=()=>Pn,Il=Symbol(""),Mn=()=>{const i=Tn(Il);if(!i)throw new Error("usePageFrontmatter() is called without provider.");return i},Ul=Symbol(""),gu=()=>{const i=Tn(Ul);if(!i)throw new Error("usePageHead() is called without provider.");return i},_u=Symbol(""),Nl=Symbol(""),vu=()=>{const i=Tn(Nl);if(!i)throw new Error("usePageLang() is called without provider.");return i},Ol=Symbol(""),xu=()=>{const i=Tn(Ol);if(!i)throw new Error("usePageLayout() is called without provider.");return i},co=Symbol(""),ar=()=>{const i=Tn(co);if(!i)throw new Error("useRouteLocale() is called without provider.");return i},Ci=tt(fu),Mu=()=>Ci,Fl=Symbol(""),uo=()=>{const i=Tn(Fl);if(!i)throw new Error("useSiteLocaleData() is called without provider.");return i},Su=Symbol(""),yu="Layout",Eu="NotFound",gn=qc({resolveLayouts:i=>i.reduce((e,t)=>({...e,...t.layouts}),{}),resolvePageData:async i=>{const e=mu.value[i];return await(e==null?void 0:e())??Dl},resolvePageFrontmatter:i=>i.frontmatter,resolvePageHead:(i,e,t)=>{const n=Qt(e.description)?e.description:t.description,r=[...Zr(e.head)?e.head:[],...t.head,["title",{},i],["meta",{name:"description",content:n}]];return $c(r)},resolvePageHeadTitle:(i,e)=>[i.title,e.title].filter(t=>!!t).join(" | "),resolvePageLang:i=>i.lang||"en",resolvePageLayout:(i,e)=>{let t;if(i.path){const n=i.frontmatter.layout;Qt(n)?t=n:t=yu}else t=Eu;return e[t]},resolveRouteLocale:(i,e)=>wl(i,e),resolveSiteLocaleData:(i,e)=>({...i,...i.locales[e]})}),ho=Ke({name:"ClientOnly",setup(i,e){const t=tt(!1);return kt(()=>{t.value=!0}),()=>{var n,r;return t.value?(r=(n=e.slots).default)==null?void 0:r.call(n):null}}}),bu=Ke({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(i){const e=Kn(),t=be(()=>Pl[i.pageKey||e.value.key]);return()=>t.value?Je(t.value):Je("div","404 Not Found")}}),An=(i={})=>i,Ji=i=>or(i)?i:`/frontend-development-guide/${Rl(i)}`;function Bl(i,e,t){var n,r,s;e===void 0&&(e=50),t===void 0&&(t={});var a=(n=t.isImmediate)!=null&&n,o=(r=t.callback)!=null&&r,l=t.maxWait,c=Date.now(),u=[];function h(){if(l!==void 0){var p=Date.now()-c;if(p+e>=l)return l-p}return e}var d=function(){var p=[].slice.call(arguments),g=this;return new Promise(function(v,m){var f=a&&s===void 0;if(s!==void 0&&clearTimeout(s),s=setTimeout(function(){if(s=void 0,c=Date.now(),!a){var _=i.apply(g,p);o&&o(_),u.forEach(function(T){return(0,T.resolve)(_)}),u=[]}},h()),f){var b=i.apply(g,p);return o&&o(b),v(b)}u.push({resolve:v,reject:m})})};return d.cancel=function(p){s!==void 0&&clearTimeout(s),u.forEach(function(g){return(0,g.reject)(p)}),u=[]},d}const Tu=({headerLinkSelector:i,headerAnchorSelector:e,delay:t,offset:n=5})=>{const r=si(),a=Bl(()=>{var v,m;const o=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(o-0)<n){No(r,"");return}const c=window.innerHeight+o,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),h=Math.abs(u-c)<n,d=Array.from(document.querySelectorAll(i)),g=Array.from(document.querySelectorAll(e)).filter(f=>d.some(b=>b.hash===f.hash));for(let f=0;f<g.length;f++){const b=g[f],_=g[f+1],T=o>=(((v=b.parentElement)==null?void 0:v.offsetTop)??0)-n,A=!_||o<(((m=_.parentElement)==null?void 0:m.offsetTop)??0)-n;if(!(T&&A))continue;const L=decodeURIComponent(r.currentRoute.value.hash),y=decodeURIComponent(b.hash);if(L===y)return;if(h){for(let x=f+1;x<g.length;x++)if(L===decodeURIComponent(g[x].hash))return}No(r,y);return}},t);kt(()=>{window.addEventListener("scroll",a)}),io(()=>{window.removeEventListener("scroll",a)})},No=async(i,e)=>{const{scrollBehavior:t}=i.options;i.options.scrollBehavior=void 0,await i.replace({query:i.currentRoute.value.query,hash:e,force:!0}).finally(()=>i.options.scrollBehavior=t)},Au="a.sidebar-item",wu=".header-anchor",Ru=300,Cu=5,Lu=An({setup(){Tu({headerLinkSelector:Au,headerAnchorSelector:wu,delay:Ru,offset:Cu})}}),Oo=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,Pu=()=>window.scrollTo({top:0,behavior:"smooth"});const Du=Ke({name:"BackToTop",setup(){const i=tt(0),e=be(()=>i.value>300),t=Bl(()=>{i.value=Oo()},100);kt(()=>{i.value=Oo(),window.addEventListener("scroll",()=>t())});const n=Je("div",{class:"back-to-top",onClick:Pu});return()=>Je(ro,{name:"back-to-top"},()=>e.value?n:null)}}),Iu=An({rootComponents:[Du]});const Uu=Je("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[Je("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),Je("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Nu=Ke({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(i){const e=ar(),t=be(()=>i.locales[e.value]??{openInNewWindow:"open in new window"});return()=>Je("span",[Uu,Je("span",{class:"external-link-icon-sr-only"},t.value.openInNewWindow)])}}),Ou={"/":{openInNewWindow:"open in new window"}},Fu=An({enhance({app:i}){i.component("ExternalLinkIcon",Je(Nu,{locales:Ou}))}});/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var qn=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},fr=function(e){return e.tagName==="IMG"},Bu=function(e){return NodeList.prototype.isPrototypeOf(e)},Hr=function(e){return e&&e.nodeType===1},Fo=function(e){var t=e.currentSrc||e.src;return t.substr(-4).toLowerCase()===".svg"},Bo=function(e){try{return Array.isArray(e)?e.filter(fr):Bu(e)?[].slice.call(e).filter(fr):Hr(e)?[e].filter(fr):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(fr):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},zu=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},ku=function(e){var t=e.getBoundingClientRect(),n=t.top,r=t.left,s=t.width,a=t.height,o=e.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return o.removeAttribute("id"),o.style.position="absolute",o.style.top=n+l+"px",o.style.left=r+c+"px",o.style.width=s+"px",o.style.height=a+"px",o.style.transform="",o},ci=function(e,t){var n=qn({bubbles:!1,cancelable:!1,detail:void 0},t);if(typeof window.CustomEvent=="function")return new CustomEvent(e,n);var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),r},Hu=function i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=window.Promise||function($){function I(){}$(I,I)},r=function($){var I=$.target;if(I===x){g();return}_.indexOf(I)!==-1&&v({target:I})},s=function(){if(!(A||!y.original)){var $=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(P-$)>L.scrollOffset&&setTimeout(g,150)}},a=function($){var I=$.key||$.keyCode;(I==="Escape"||I==="Esc"||I===27)&&g()},o=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=$;if($.background&&(x.style.background=$.background),$.container&&$.container instanceof Object&&(I.container=qn({},L.container,$.container)),$.template){var N=Hr($.template)?$.template:document.querySelector($.template);I.template=N}return L=qn({},L,I),_.forEach(function(F){F.dispatchEvent(ci("medium-zoom:update",{detail:{zoom:E}}))}),E},l=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i(qn({},L,$))},c=function(){for(var $=arguments.length,I=Array($),N=0;N<$;N++)I[N]=arguments[N];var F=I.reduce(function(W,G){return[].concat(W,Bo(G))},[]);return F.filter(function(W){return _.indexOf(W)===-1}).forEach(function(W){_.push(W),W.classList.add("medium-zoom-image")}),T.forEach(function(W){var G=W.type,q=W.listener,Z=W.options;F.forEach(function(Q){Q.addEventListener(G,q,Z)})}),E},u=function(){for(var $=arguments.length,I=Array($),N=0;N<$;N++)I[N]=arguments[N];y.zoomed&&g();var F=I.length>0?I.reduce(function(W,G){return[].concat(W,Bo(G))},[]):_;return F.forEach(function(W){W.classList.remove("medium-zoom-image"),W.dispatchEvent(ci("medium-zoom:detach",{detail:{zoom:E}}))}),_=_.filter(function(W){return F.indexOf(W)===-1}),E},h=function($,I){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return _.forEach(function(F){F.addEventListener("medium-zoom:"+$,I,N)}),T.push({type:"medium-zoom:"+$,listener:I,options:N}),E},d=function($,I){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return _.forEach(function(F){F.removeEventListener("medium-zoom:"+$,I,N)}),T=T.filter(function(F){return!(F.type==="medium-zoom:"+$&&F.listener.toString()===I.toString())}),E},p=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=$.target,N=function(){var W={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},G=void 0,q=void 0;if(L.container)if(L.container instanceof Object)W=qn({},W,L.container),G=W.width-W.left-W.right-L.margin*2,q=W.height-W.top-W.bottom-L.margin*2;else{var Z=Hr(L.container)?L.container:document.querySelector(L.container),Q=Z.getBoundingClientRect(),he=Q.width,k=Q.height,te=Q.left,ne=Q.top;W=qn({},W,{width:he,height:k,left:te,top:ne})}G=G||W.width-L.margin*2,q=q||W.height-L.margin*2;var de=y.zoomedHd||y.original,_e=Fo(de)?G:de.naturalWidth||G,xe=Fo(de)?q:de.naturalHeight||q,De=de.getBoundingClientRect(),Ce=De.top,Ye=De.left,Le=De.width,C=De.height,ae=Math.min(Math.max(Le,_e),G)/Le,K=Math.min(Math.max(C,xe),q)/C,se=Math.min(ae,K),J=(-Ye+(G-Le)/2+L.margin+W.left)/se,Te=(-Ce+(q-C)/2+L.margin+W.top)/se,me="scale("+se+") translate3d("+J+"px, "+Te+"px, 0)";y.zoomed.style.transform=me,y.zoomedHd&&(y.zoomedHd.style.transform=me)};return new n(function(F){if(I&&_.indexOf(I)===-1){F(E);return}var W=function he(){A=!1,y.zoomed.removeEventListener("transitionend",he),y.original.dispatchEvent(ci("medium-zoom:opened",{detail:{zoom:E}})),F(E)};if(y.zoomed){F(E);return}if(I)y.original=I;else if(_.length>0){var G=_;y.original=G[0]}else{F(E);return}if(y.original.dispatchEvent(ci("medium-zoom:open",{detail:{zoom:E}})),P=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=!0,y.zoomed=ku(y.original),document.body.appendChild(x),L.template){var q=Hr(L.template)?L.template:document.querySelector(L.template);y.template=document.createElement("div"),y.template.appendChild(q.content.cloneNode(!0)),document.body.appendChild(y.template)}if(y.original.parentElement&&y.original.parentElement.tagName==="PICTURE"&&y.original.currentSrc&&(y.zoomed.src=y.original.currentSrc),document.body.appendChild(y.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),y.original.classList.add("medium-zoom-image--hidden"),y.zoomed.classList.add("medium-zoom-image--opened"),y.zoomed.addEventListener("click",g),y.zoomed.addEventListener("transitionend",W),y.original.getAttribute("data-zoom-src")){y.zoomedHd=y.zoomed.cloneNode(),y.zoomedHd.removeAttribute("srcset"),y.zoomedHd.removeAttribute("sizes"),y.zoomedHd.removeAttribute("loading"),y.zoomedHd.src=y.zoomed.getAttribute("data-zoom-src"),y.zoomedHd.onerror=function(){clearInterval(Z),console.warn("Unable to reach the zoom image target "+y.zoomedHd.src),y.zoomedHd=null,N()};var Z=setInterval(function(){y.zoomedHd.complete&&(clearInterval(Z),y.zoomedHd.classList.add("medium-zoom-image--opened"),y.zoomedHd.addEventListener("click",g),document.body.appendChild(y.zoomedHd),N())},10)}else if(y.original.hasAttribute("srcset")){y.zoomedHd=y.zoomed.cloneNode(),y.zoomedHd.removeAttribute("sizes"),y.zoomedHd.removeAttribute("loading");var Q=y.zoomedHd.addEventListener("load",function(){y.zoomedHd.removeEventListener("load",Q),y.zoomedHd.classList.add("medium-zoom-image--opened"),y.zoomedHd.addEventListener("click",g),document.body.appendChild(y.zoomedHd),N()})}else N()})},g=function(){return new n(function($){if(A||!y.original){$(E);return}var I=function N(){y.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(y.zoomed),y.zoomedHd&&document.body.removeChild(y.zoomedHd),document.body.removeChild(x),y.zoomed.classList.remove("medium-zoom-image--opened"),y.template&&document.body.removeChild(y.template),A=!1,y.zoomed.removeEventListener("transitionend",N),y.original.dispatchEvent(ci("medium-zoom:closed",{detail:{zoom:E}})),y.original=null,y.zoomed=null,y.zoomedHd=null,y.template=null,$(E)};A=!0,document.body.classList.remove("medium-zoom--opened"),y.zoomed.style.transform="",y.zoomedHd&&(y.zoomedHd.style.transform=""),y.template&&(y.template.style.transition="opacity 150ms",y.template.style.opacity=0),y.original.dispatchEvent(ci("medium-zoom:close",{detail:{zoom:E}})),y.zoomed.addEventListener("transitionend",I)})},v=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=$.target;return y.original?g():p({target:I})},m=function(){return L},f=function(){return _},b=function(){return y.original},_=[],T=[],A=!1,P=0,L=t,y={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?L=e:(e||typeof e=="string")&&c(e),L=qn({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},L);var x=zu(L.background);document.addEventListener("click",r),document.addEventListener("keyup",a),document.addEventListener("scroll",s),window.addEventListener("resize",g);var E={open:p,close:g,toggle:v,update:o,clone:l,attach:c,detach:u,on:h,off:d,getOptions:m,getImages:f,getZoomedImage:b};return E};function Gu(i,e){e===void 0&&(e={});var t=e.insertAt;if(!(!i||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}var Vu=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Gu(Vu);const Wu=Hu,Xu=Symbol("mediumZoom");const qu=".theme-default-content > img, .theme-default-content :not(a) > img",$u={},Yu=300,ju=An({enhance({app:i,router:e}){const t=Wu($u);t.refresh=(n=qu)=>{t.detach(),t.attach(n)},i.provide(Xu,t),e.afterEach(()=>{setTimeout(()=>t.refresh(),Yu)})}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const je={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:i=>{const e=je.isStarted();i=ls(i,je.settings.minimum,1),je.status=i===1?null:i;const t=je.render(!e),n=t.querySelector(je.settings.barSelector),r=je.settings.speed,s=je.settings.easing;return t.offsetWidth,Ku(a=>{pr(n,{transform:"translate3d("+zo(i)+"%,0,0)",transition:"all "+r+"ms "+s}),i===1?(pr(t,{transition:"none",opacity:"1"}),t.offsetWidth,setTimeout(function(){pr(t,{transition:"all "+r+"ms linear",opacity:"0"}),setTimeout(function(){je.remove(),a()},r)},r)):setTimeout(()=>a(),r)}),je},isStarted:()=>typeof je.status=="number",start:()=>{je.status||je.set(0);const i=()=>{setTimeout(()=>{je.status&&(je.trickle(),i())},je.settings.trickleSpeed)};return je.settings.trickle&&i(),je},done:i=>!i&&!je.status?je:je.inc(.3+.5*Math.random()).set(1),inc:i=>{let e=je.status;return e?(typeof i!="number"&&(i=(1-e)*ls(Math.random()*e,.1,.95)),e=ls(e+i,0,.994),je.set(e)):je.start()},trickle:()=>je.inc(Math.random()*je.settings.trickleRate),render:i=>{if(je.isRendered())return document.getElementById("nprogress");ko(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=je.settings.template;const t=e.querySelector(je.settings.barSelector),n=i?"-100":zo(je.status||0),r=document.querySelector(je.settings.parent);return pr(t,{transition:"all 0 linear",transform:"translate3d("+n+"%,0,0)"}),r!==document.body&&ko(r,"nprogress-custom-parent"),r==null||r.appendChild(e),e},remove:()=>{Ho(document.documentElement,"nprogress-busy"),Ho(document.querySelector(je.settings.parent),"nprogress-custom-parent");const i=document.getElementById("nprogress");i&&Zu(i)},isRendered:()=>!!document.getElementById("nprogress")},ls=(i,e,t)=>i<e?e:i>t?t:i,zo=i=>(-1+i)*100,Ku=function(){const i=[];function e(){const t=i.shift();t&&t(e)}return function(t){i.push(t),i.length===1&&e()}}(),pr=function(){const i=["Webkit","O","Moz","ms"],e={};function t(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(o,l){return l.toUpperCase()})}function n(a){const o=document.body.style;if(a in o)return a;let l=i.length;const c=a.charAt(0).toUpperCase()+a.slice(1);let u;for(;l--;)if(u=i[l]+c,u in o)return u;return a}function r(a){return a=t(a),e[a]||(e[a]=n(a))}function s(a,o,l){o=r(o),a.style[o]=l}return function(a,o){for(const l in o){const c=o[l];c!==void 0&&Object.prototype.hasOwnProperty.call(o,l)&&s(a,l,c)}}}(),zl=(i,e)=>(typeof i=="string"?i:fo(i)).indexOf(" "+e+" ")>=0,ko=(i,e)=>{const t=fo(i),n=t+e;zl(t,e)||(i.className=n.substring(1))},Ho=(i,e)=>{const t=fo(i);if(!zl(i,e))return;const n=t.replace(" "+e+" "," ");i.className=n.substring(1,n.length-1)},fo=i=>(" "+(i.className||"")+" ").replace(/\s+/gi," "),Zu=i=>{i&&i.parentNode&&i.parentNode.removeChild(i)};const Ju=()=>{kt(()=>{const i=si(),e=new Set;e.add(i.currentRoute.value.path),i.beforeEach(t=>{e.has(t.path)||je.start()}),i.afterEach(t=>{e.add(t.path),je.done()})})},Qu=An({setup(){Ju()}}),eh=JSON.parse(`{"logo":"/images/logo.svg","editLink":false,"lastUpdated":false,"navbar":[{"text":"开发工具","children":[{"text":"nvm","link":"/develop-tools/","activeMatch":"^/develop-tools/$"},"/develop-tools/node-and-npm.md","/develop-tools/svn.md","/develop-tools/vscode.md","/develop-tools/hbuilderx.md","/develop-tools/weixin-devtools.md","/develop-tools/other-tools.md"]},{"text":"开发规范","children":[{"text":"样式规范","link":"/develop-standard/","activeMatch":"^/develop-standard/$"},"/develop-standard/javascript.md","/develop-standard/typescript.md","/develop-standard/vue.md","/develop-standard/uni-app.md","/develop-standard/react.md"]},{"text":"技巧分享","link":"/tips-share/"}],"contributors":false,"sidebarDepth":3,"colorMode":"auto","locales":{"/":{"sidebar":{"/develop-tools/":[{"text":"开发工具","children":["/develop-tools/README.md","/develop-tools/node-and-npm.md","/develop-tools/svn.md","/develop-tools/vscode.md","/develop-tools/hbuilderx.md","/develop-tools/weixin-devtools.md","/develop-tools/other-tools.md"]}],"/develop-standard/":[{"text":"开发规范","collapsible":true,"children":["/develop-standard/README.md","/develop-standard/javascript.md","/develop-standard/typescript.md","/develop-standard/vue.md","/develop-standard/uni-app.md","/develop-standard/react.md"]}],"/tips-share/":[{"text":"技巧分享","children":["/tips-share/README.md"]}]},"selectLanguageName":"English"}},"colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"auto","editLinkText":"Edit this page","lastUpdatedText":"Last Updated","contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),th=tt(eh),nh=()=>th,kl=Symbol(""),ih=()=>{const i=Tn(kl);if(!i)throw new Error("useThemeLocaleData() is called without provider.");return i},rh=(i,e)=>{var t;return{...i,...(t=i.locales)==null?void 0:t[e]}},sh=An({enhance({app:i}){const e=nh(),t=i._context.provides[co],n=be(()=>rh(e.value,t.value));i.provide(kl,n),Object.defineProperties(i.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return n.value}}})}}),oh=Ke({__name:"Badge",props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(i){return(e,t)=>(pe(),Re("span",{class:en(["badge",i.type]),style:Cl({verticalAlign:i.vertical})},[nt(e.$slots,"default",{},()=>[Ni(gt(i.text),1)])],6))}}),ah=rt(oh,[["__file","Badge.vue"]]),lh=Ke({name:"CodeGroup",setup(i,{slots:e}){const t=tt(-1),n=tt([]),r=(o=t.value)=>{o<n.value.length-1?t.value=o+1:t.value=0,n.value[t.value].focus()},s=(o=t.value)=>{o>0?t.value=o-1:t.value=n.value.length-1,n.value[t.value].focus()},a=(o,l)=>{o.key===" "||o.key==="Enter"?(o.preventDefault(),t.value=l):o.key==="ArrowRight"?(o.preventDefault(),r(l)):o.key==="ArrowLeft"&&(o.preventDefault(),s(l))};return()=>{var l;const o=(((l=e.default)==null?void 0:l.call(e))||[]).filter(c=>c.type.name==="CodeGroupItem").map(c=>(c.props===null&&(c.props={}),c));return o.length===0?null:(t.value<0||t.value>o.length-1?(t.value=o.findIndex(c=>c.props.active===""||c.props.active===!0),t.value===-1&&(t.value=0)):o.forEach((c,u)=>{c.props.active=u===t.value}),Je("div",{class:"code-group"},[Je("div",{class:"code-group__nav"},Je("ul",{class:"code-group__ul"},o.map((c,u)=>{const h=u===t.value;return Je("li",{class:"code-group__li"},Je("button",{ref:d=>{d&&(n.value[u]=d)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":h},ariaPressed:h,ariaExpanded:h,onClick:()=>t.value=u,onKeydown:d=>a(d,u)},c.props.title))}))),o]))}}}),ch=["aria-selected"],uh=Ke({name:"CodeGroupItem"}),hh=Ke({...uh,props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(i){return(e,t)=>(pe(),Re("div",{class:en(["code-group-item",{"code-group-item__active":i.active}]),"aria-selected":i.active},[nt(e.$slots,"default")],10,ch))}}),dh=rt(hh,[["__file","CodeGroupItem.vue"]]);var Go;const Hl=typeof window<"u",fh=i=>typeof i=="function",ph=i=>typeof i=="string",mh=()=>{};Hl&&((Go=window==null?void 0:window.navigator)!=null&&Go.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Qi(i){return typeof i=="function"?i():Fe(i)}function gh(i,e){function t(...n){return new Promise((r,s)=>{Promise.resolve(i(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(r).catch(s)})}return t}const Gl=i=>i();function _h(i=Gl){const e=tt(!0);function t(){e.value=!1}function n(){e.value=!0}const r=(...s)=>{e.value&&i(...s)};return{isActive:Al(e),pause:t,resume:n,eventFilter:r}}function vh(i){return i}function Vl(i){return Kc()?(Zc(i),!0):!1}function xh(i){return typeof i=="function"?be(i):tt(i)}function Mh(i,e=!0){jc()?kt(i):e?i():so(i)}function Sh(i=!1,e={}){const{truthyValue:t=!0,falsyValue:n=!1}=e,r=Yc(i),s=tt(i);function a(o){if(arguments.length)return s.value=o,s.value;{const l=Qi(t);return s.value=s.value===l?Qi(n):l,s.value}}return r?a:[s,a]}var Vo=Object.getOwnPropertySymbols,yh=Object.prototype.hasOwnProperty,Eh=Object.prototype.propertyIsEnumerable,bh=(i,e)=>{var t={};for(var n in i)yh.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&Vo)for(var n of Vo(i))e.indexOf(n)<0&&Eh.call(i,n)&&(t[n]=i[n]);return t};function Th(i,e,t={}){const n=t,{eventFilter:r=Gl}=n,s=bh(n,["eventFilter"]);return oi(i,gh(r,e),s)}var Ah=Object.defineProperty,wh=Object.defineProperties,Rh=Object.getOwnPropertyDescriptors,qr=Object.getOwnPropertySymbols,Wl=Object.prototype.hasOwnProperty,Xl=Object.prototype.propertyIsEnumerable,Wo=(i,e,t)=>e in i?Ah(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Ch=(i,e)=>{for(var t in e||(e={}))Wl.call(e,t)&&Wo(i,t,e[t]);if(qr)for(var t of qr(e))Xl.call(e,t)&&Wo(i,t,e[t]);return i},Lh=(i,e)=>wh(i,Rh(e)),Ph=(i,e)=>{var t={};for(var n in i)Wl.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&qr)for(var n of qr(i))e.indexOf(n)<0&&Xl.call(i,n)&&(t[n]=i[n]);return t};function Dh(i,e,t={}){const n=t,{eventFilter:r}=n,s=Ph(n,["eventFilter"]),{eventFilter:a,pause:o,resume:l,isActive:c}=_h(r);return{stop:Th(i,e,Lh(Ch({},s),{eventFilter:a})),pause:o,resume:l,isActive:c}}function Ih(i){var e;const t=Qi(i);return(e=t==null?void 0:t.$el)!=null?e:t}const $r=Hl?window:void 0;function Xo(...i){let e,t,n,r;if(ph(i[0])||Array.isArray(i[0])?([t,n,r]=i,e=$r):[e,t,n,r]=i,!e)return mh;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const s=[],a=()=>{s.forEach(u=>u()),s.length=0},o=(u,h,d,p)=>(u.addEventListener(h,d,p),()=>u.removeEventListener(h,d,p)),l=oi(()=>[Ih(e),Qi(r)],([u,h])=>{a(),u&&s.push(...t.flatMap(d=>n.map(p=>o(u,d,p,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),a()};return Vl(c),c}function Uh(i,e=!1){const t=tt(),n=()=>t.value=Boolean(i());return n(),Mh(n,e),t}function Nh(i,e={}){const{window:t=$r}=e,n=Uh(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const s=tt(!1),a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},o=()=>{n.value&&(a(),r=t.matchMedia(xh(i).value),s.value=r.matches,"addEventListener"in r?r.addEventListener("change",o):r.addListener(o))};return Qc(o),Vl(()=>a()),s}const Ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xs="__vueuse_ssr_handlers__";Ws[Xs]=Ws[Xs]||{};const Oh=Ws[Xs];function Fh(i,e){return Oh[i]||e}function Bh(i){return i==null?"any":i instanceof Set?"set":i instanceof Map?"map":i instanceof Date?"date":typeof i=="boolean"?"boolean":typeof i=="string"?"string":typeof i=="object"?"object":Number.isNaN(i)?"any":"number"}var zh=Object.defineProperty,qo=Object.getOwnPropertySymbols,kh=Object.prototype.hasOwnProperty,Hh=Object.prototype.propertyIsEnumerable,$o=(i,e,t)=>e in i?zh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Yo=(i,e)=>{for(var t in e||(e={}))kh.call(e,t)&&$o(i,t,e[t]);if(qo)for(var t of qo(e))Hh.call(e,t)&&$o(i,t,e[t]);return i};const Gh={boolean:{read:i=>i==="true",write:i=>String(i)},object:{read:i=>JSON.parse(i),write:i=>JSON.stringify(i)},number:{read:i=>Number.parseFloat(i),write:i=>String(i)},any:{read:i=>i,write:i=>String(i)},string:{read:i=>i,write:i=>String(i)},map:{read:i=>new Map(JSON.parse(i)),write:i=>JSON.stringify(Array.from(i.entries()))},set:{read:i=>new Set(JSON.parse(i)),write:i=>JSON.stringify(Array.from(i))},date:{read:i=>new Date(i),write:i=>i.toISOString()}},jo="vueuse-storage";function Vh(i,e,t,n={}){var r;const{flush:s="pre",deep:a=!0,listenToStorageChanges:o=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:h=$r,eventFilter:d,onError:p=y=>{console.error(y)}}=n,g=(u?Jc:tt)(e);if(!t)try{t=Fh("getDefaultStorage",()=>{var y;return(y=$r)==null?void 0:y.localStorage})()}catch(y){p(y)}if(!t)return g;const v=Qi(e),m=Bh(v),f=(r=n.serializer)!=null?r:Gh[m],{pause:b,resume:_}=Dh(g,()=>T(g.value),{flush:s,deep:a,eventFilter:d});return h&&o&&(Xo(h,"storage",L),Xo(h,jo,P)),L(),g;function T(y){try{if(y==null)t.removeItem(i);else{const x=f.write(y),E=t.getItem(i);E!==x&&(t.setItem(i,x),h&&h.dispatchEvent(new CustomEvent(jo,{detail:{key:i,oldValue:E,newValue:x,storageArea:t}})))}}catch(x){p(x)}}function A(y){const x=y?y.newValue:t.getItem(i);if(x==null)return l&&v!==null&&t.setItem(i,f.write(v)),v;if(!y&&c){const E=f.read(x);return fh(c)?c(E,v):m==="object"&&!Array.isArray(E)?Yo(Yo({},v),E):E}else return typeof x!="string"?x:f.read(x)}function P(y){L(y.detail)}function L(y){if(!(y&&y.storageArea!==t)){if(y&&y.key==null){g.value=v;return}if(!(y&&y.key!==i)){b();try{g.value=A(y)}catch(x){p(x)}finally{y?so(_):_()}}}}}function Wh(i){return Nh("(prefers-color-scheme: dark)",i)}var Ko;(function(i){i.UP="UP",i.RIGHT="RIGHT",i.DOWN="DOWN",i.LEFT="LEFT",i.NONE="NONE"})(Ko||(Ko={}));var Xh=Object.defineProperty,Zo=Object.getOwnPropertySymbols,qh=Object.prototype.hasOwnProperty,$h=Object.prototype.propertyIsEnumerable,Jo=(i,e,t)=>e in i?Xh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Yh=(i,e)=>{for(var t in e||(e={}))qh.call(e,t)&&Jo(i,t,e[t]);if(Zo)for(var t of Zo(e))$h.call(e,t)&&Jo(i,t,e[t]);return i};const jh={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Yh({linear:vh},jh);const Dt=()=>ih(),ql=Symbol(""),po=()=>{const i=Tn(ql);if(!i)throw new Error("useDarkMode() is called without provider.");return i},Kh=()=>{const i=Dt(),e=Wh(),t=Vh("vuepress-color-scheme",i.value.colorMode),n=be({get(){return i.value.colorModeSwitch?t.value==="auto"?e.value:t.value==="dark":i.value.colorMode==="dark"},set(r){r===e.value?t.value="auto":t.value=r?"dark":"light"}});oo(ql,n),Zh(n)},Zh=i=>{const e=(t=i.value)=>{const n=window==null?void 0:window.document.querySelector("html");n==null||n.classList.toggle("dark",t)};kt(()=>{oi(i,e,{immediate:!0})}),ao(()=>e())},$l=(...i)=>{const t=si().resolve(...i),n=t.matched[t.matched.length-1];if(!(n!=null&&n.redirect))return t;const{redirect:r}=n,s=eu(r)?r(t):r,a=Qt(s)?{path:s}:s;return $l({hash:t.hash,query:t.query,params:t.params,...a})},mo=i=>{const e=$l(encodeURI(i));return{text:e.meta.title||i,link:e.name==="404"?i:e.fullPath}};let cs=null,Vi=null;const Jh={wait:()=>cs,pending:()=>{cs=new Promise(i=>Vi=i)},resolve:()=>{Vi==null||Vi(),cs=null,Vi=null}},Yl=()=>Jh,jl=Symbol("sidebarItems"),go=()=>{const i=Tn(jl);if(!i)throw new Error("useSidebarItems() is called without provider.");return i},Qh=()=>{const i=Dt(),e=Mn(),t=be(()=>ed(e.value,i.value));oo(jl,t)},ed=(i,e)=>{const t=i.sidebar??e.sidebar??"auto",n=i.sidebarDepth??e.sidebarDepth??2;return i.home||t===!1?[]:t==="auto"?nd(n):Zr(t)?Kl(t,n):lo(t)?id(t,n):[]},td=(i,e)=>({text:i.title,link:i.link,children:_o(i.children,e)}),_o=(i,e)=>e>0?i.map(t=>td(t,e-1)):[],nd=i=>{const e=Kn();return[{text:e.value.title,children:_o(e.value.headers,i)}]},Kl=(i,e)=>{const t=ai(),n=Kn(),r=s=>{var o;let a;if(Qt(s)?a=mo(s):a=s,a.children)return{...a,children:a.children.map(l=>r(l))};if(a.link===t.path){const l=((o=n.value.headers[0])==null?void 0:o.level)===1?n.value.headers[0].children:n.value.headers;return{...a,children:_o(l,e)}}return a};return i.map(s=>r(s))},id=(i,e)=>{const t=ai(),n=wl(i,t.path),r=i[n]??[];return Kl(r,e)},rd={},sd={class:"theme-default-content"};function od(i,e){const t=bn("Content");return pe(),Re("div",sd,[ot(t)])}const ad=rt(rd,[["render",od],["__file","HomeContent.vue"]]),ld={key:0,class:"features"},cd=Ke({__name:"HomeFeatures",setup(i){const e=Mn(),t=be(()=>Zr(e.value.features)?e.value.features:[]);return(n,r)=>t.value.length?(pe(),Re("div",ld,[(pe(!0),Re(Wt,null,On(t.value,s=>(pe(),Re("div",{key:s.title,class:"feature"},[Qe("h2",null,gt(s.title),1),Qe("p",null,gt(s.details),1)]))),128))])):ht("v-if",!0)}}),ud=rt(cd,[["__file","HomeFeatures.vue"]]),hd=["innerHTML"],dd=["textContent"],fd=Ke({__name:"HomeFooter",setup(i){const e=Mn(),t=be(()=>e.value.footer),n=be(()=>e.value.footerHtml);return(r,s)=>t.value?(pe(),Re(Wt,{key:0},[ht(" eslint-disable-next-line vue/no-v-html "),n.value?(pe(),Re("div",{key:0,class:"footer",innerHTML:t.value},null,8,hd)):(pe(),Re("div",{key:1,class:"footer",textContent:gt(t.value)},null,8,dd))],64)):ht("v-if",!0)}}),pd=rt(fd,[["__file","HomeFooter.vue"]]),md=["href","rel","target","aria-label"],gd=Ke({inheritAttrs:!1}),_d=Ke({...gd,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(i){const e=i,t=ai(),n=Mu(),{item:r}=Jr(e),s=be(()=>or(r.value.link)),a=be(()=>tu(r.value.link)||nu(r.value.link)),o=be(()=>{if(!a.value){if(r.value.target)return r.value.target;if(s.value)return"_blank"}}),l=be(()=>o.value==="_blank"),c=be(()=>!s.value&&!a.value&&!l.value),u=be(()=>{if(!a.value){if(r.value.rel)return r.value.rel;if(l.value)return"noopener noreferrer"}}),h=be(()=>r.value.ariaLabel||r.value.text),d=be(()=>{const v=Object.keys(n.value.locales);return v.length?!v.some(m=>m===r.value.link):r.value.link!=="/"}),p=be(()=>d.value?t.path.startsWith(r.value.link):!1),g=be(()=>c.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(t.path):p.value:!1);return(v,m)=>{const f=bn("RouterLink"),b=bn("AutoLinkExternalIcon");return c.value?(pe(),yt(f,Io({key:0,class:{"router-link-active":g.value},to:Fe(r).link,"aria-label":h.value},v.$attrs),{default:wt(()=>[nt(v.$slots,"before"),Ni(" "+gt(Fe(r).text)+" ",1),nt(v.$slots,"after")]),_:3},16,["class","to","aria-label"])):(pe(),Re("a",Io({key:1,class:"external-link",href:Fe(r).link,rel:u.value,target:o.value,"aria-label":h.value},v.$attrs),[nt(v.$slots,"before"),Ni(" "+gt(Fe(r).text)+" ",1),l.value?(pe(),yt(b,{key:0})):ht("v-if",!0),nt(v.$slots,"after")],16,md))}}}),Sn=rt(_d,[["__file","AutoLink.vue"]]),vd={class:"hero"},xd={key:0,id:"main-title"},Md={key:1,class:"description"},Sd={key:2,class:"actions"},yd=Ke({__name:"HomeHero",setup(i){const e=Mn(),t=uo(),n=po(),r=be(()=>n.value&&e.value.heroImageDark!==void 0?e.value.heroImageDark:e.value.heroImage),s=be(()=>e.value.heroAlt||o.value||"hero"),a=be(()=>e.value.heroHeight||280),o=be(()=>e.value.heroText===null?null:e.value.heroText||t.value.title||"Hello"),l=be(()=>e.value.tagline===null?null:e.value.tagline||t.value.description||"Welcome to your VuePress site"),c=be(()=>Zr(e.value.actions)?e.value.actions.map(({text:h,link:d,type:p="primary"})=>({text:h,link:d,type:p})):[]),u=()=>{if(!r.value)return null;const h=Je("img",{src:Ji(r.value),alt:s.value,height:a.value});return e.value.heroImageDark===void 0?h:Je(ho,()=>h)};return(h,d)=>(pe(),Re("header",vd,[ot(u),o.value?(pe(),Re("h1",xd,gt(o.value),1)):ht("v-if",!0),l.value?(pe(),Re("p",Md,gt(l.value),1)):ht("v-if",!0),c.value.length?(pe(),Re("p",Sd,[(pe(!0),Re(Wt,null,On(c.value,p=>(pe(),yt(Sn,{key:p.text,class:en(["action-button",[p.type]]),item:p},null,8,["class","item"]))),128))])):ht("v-if",!0)]))}}),Ed=rt(yd,[["__file","HomeHero.vue"]]),bd={class:"home"},Td=Ke({__name:"Home",setup(i){return(e,t)=>(pe(),Re("main",bd,[ot(Ed),ot(ud),ot(ad),ot(pd)]))}}),Ad=rt(Td,[["__file","Home.vue"]]),wd=Ke({__name:"NavbarBrand",setup(i){const e=ar(),t=uo(),n=Dt(),r=po(),s=be(()=>n.value.home||e.value),a=be(()=>t.value.title),o=be(()=>r.value&&n.value.logoDark!==void 0?n.value.logoDark:n.value.logo),l=()=>{if(!o.value)return null;const c=Je("img",{class:"logo",src:Ji(o.value),alt:a.value});return n.value.logoDark===void 0?c:Je(ho,()=>c)};return(c,u)=>{const h=bn("RouterLink");return pe(),yt(h,{to:s.value},{default:wt(()=>[ot(l),a.value?(pe(),Re("span",{key:0,class:en(["site-name",{"can-hide":o.value}])},gt(a.value),3)):ht("v-if",!0)]),_:1},8,["to"])}}}),Rd=rt(wd,[["__file","NavbarBrand.vue"]]),Cd=Ke({__name:"DropdownTransition",setup(i){const e=n=>{n.style.height=n.scrollHeight+"px"},t=n=>{n.style.height=""};return(n,r)=>(pe(),yt(ro,{name:"dropdown",onEnter:e,onAfterEnter:t,onBeforeLeave:e},{default:wt(()=>[nt(n.$slots,"default")]),_:3}))}}),Zl=rt(Cd,[["__file","DropdownTransition.vue"]]),Ld=["aria-label"],Pd={class:"title"},Dd=["aria-label"],Id={class:"title"},Ud={class:"navbar-dropdown"},Nd={class:"navbar-dropdown-subtitle"},Od={key:1},Fd={class:"navbar-dropdown-subitem-wrapper"},Bd=Ke({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(i){const e=i,{item:t}=Jr(e),n=be(()=>t.value.ariaLabel||t.value.text),r=tt(!1),s=ai();oi(()=>s.path,()=>{r.value=!1});const a=l=>{l.detail===0?r.value=!r.value:r.value=!1},o=(l,c)=>c[c.length-1]===l;return(l,c)=>(pe(),Re("div",{class:en(["navbar-dropdown-wrapper",{open:r.value}])},[Qe("button",{class:"navbar-dropdown-title",type:"button","aria-label":n.value,onClick:a},[Qe("span",Pd,gt(Fe(t).text),1),c[1]||(c[1]=Qe("span",{class:"arrow down"},null,-1))],8,Ld),Qe("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":n.value,onClick:c[0]||(c[0]=u=>r.value=!r.value)},[Qe("span",Id,gt(Fe(t).text),1),Qe("span",{class:en(["arrow",r.value?"down":"right"])},null,2)],8,Dd),ot(Zl,null,{default:wt(()=>[Wr(Qe("ul",Ud,[(pe(!0),Re(Wt,null,On(Fe(t).children,u=>(pe(),Re("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(pe(),Re(Wt,{key:0},[Qe("h4",Nd,[u.link?(pe(),yt(Sn,{key:0,item:u,onFocusout:h=>o(u,Fe(t).children)&&u.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(pe(),Re("span",Od,gt(u.text),1))]),Qe("ul",Fd,[(pe(!0),Re(Wt,null,On(u.children,h=>(pe(),Re("li",{key:h.link,class:"navbar-dropdown-subitem"},[ot(Sn,{item:h,onFocusout:d=>o(h,u.children)&&o(u,Fe(t).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(pe(),yt(Sn,{key:1,item:u,onFocusout:h=>o(u,Fe(t).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[Xr,r.value]])]),_:1})],2))}}),zd=rt(Bd,[["__file","NavbarDropdown.vue"]]),Qo=i=>decodeURI(i).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),kd=(i,e)=>{if(e.hash===i)return!0;const t=Qo(e.path),n=Qo(i);return t===n},Jl=(i,e)=>i.link&&kd(i.link,e)?!0:i.children?i.children.some(t=>Jl(t,e)):!1,Ql=i=>!or(i)||/github\.com/.test(i)?"GitHub":/bitbucket\.org/.test(i)?"Bitbucket":/gitlab\.com/.test(i)?"GitLab":/gitee\.com/.test(i)?"Gitee":null,Hd={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Gd=({docsRepo:i,editLinkPattern:e})=>{if(e)return e;const t=Ql(i);return t!==null?Hd[t]:null},Vd=({docsRepo:i,docsBranch:e,docsDir:t,filePathRelative:n,editLinkPattern:r})=>{if(!n)return null;const s=Gd({docsRepo:i,editLinkPattern:r});return s?s.replace(/:repo/,or(i)?i:`https://github.com/${i}`).replace(/:branch/,e).replace(/:path/,Rl(`${Ll(t)}/${n}`)):null},Wd={key:0,class:"navbar-items"},Xd=Ke({__name:"NavbarItems",setup(i){const e=()=>{const u=si(),h=ar(),d=uo(),p=Dt();return be(()=>{const g=Object.keys(d.value.locales);if(g.length<2)return[];const v=u.currentRoute.value.path,m=u.currentRoute.value.fullPath;return[{text:p.value.selectLanguageText??"unknown language",ariaLabel:p.value.selectLanguageAriaLabel??p.value.selectLanguageText??"unknown language",children:g.map(b=>{var y,x;const _=((y=d.value.locales)==null?void 0:y[b])??{},T=((x=p.value.locales)==null?void 0:x[b])??{},A=`${_.lang}`,P=T.selectLanguageName??A;let L;if(A===d.value.lang)L=m;else{const E=v.replace(h.value,b);u.getRoutes().some(z=>z.path===E)?L=m.replace(v,E):L=T.home??b}return{text:P,link:L}})}]})},t=()=>{const u=Dt(),h=be(()=>u.value.repo),d=be(()=>h.value?Ql(h.value):null),p=be(()=>h.value&&!or(h.value)?`https://github.com/${h.value}`:h.value),g=be(()=>p.value?u.value.repoLabel?u.value.repoLabel:d.value===null?"Source":d.value:null);return be(()=>!p.value||!g.value?[]:[{text:g.value,link:p.value}])},n=u=>Qt(u)?mo(u):u.children?{...u,children:u.children.map(n)}:u,r=()=>{const u=Dt();return be(()=>(u.value.navbar||[]).map(n))},s=tt(!1),a=r(),o=e(),l=t(),c=be(()=>[...a.value,...o.value,...l.value]);return kt(()=>{const h=()=>{window.innerWidth<719?s.value=!0:s.value=!1};h(),window.addEventListener("resize",h,!1),window.addEventListener("orientationchange",h,!1)}),(u,h)=>c.value.length?(pe(),Re("nav",Wd,[(pe(!0),Re(Wt,null,On(c.value,d=>(pe(),Re("div",{key:d.text,class:"navbar-item"},[d.children?(pe(),yt(zd,{key:0,item:d,class:en(s.value?"mobile":"")},null,8,["item","class"])):(pe(),yt(Sn,{key:1,item:d},null,8,["item"]))]))),128))])):ht("v-if",!0)}}),ec=rt(Xd,[["__file","NavbarItems.vue"]]),qd=["title"],$d={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Yd={class:"icon",focusable:"false",viewBox:"0 0 32 32"},jd=Ke({__name:"ToggleColorModeButton",setup(i){const e=Dt(),t=po(),n=()=>{t.value=!t.value};return(r,s)=>(pe(),Re("button",{class:"toggle-color-mode-button",title:Fe(e).toggleColorMode,onClick:n},[Wr((pe(),Re("svg",$d,s[0]||(s[0]=[iu('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)]),512)),[[Xr,!Fe(t)]]),Wr((pe(),Re("svg",Yd,s[1]||(s[1]=[Qe("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)]),512)),[[Xr,Fe(t)]])],8,qd))}}),Kd=rt(jd,[["__file","ToggleColorModeButton.vue"]]),Zd=["title"],Jd=Ke({__name:"ToggleSidebarButton",emits:["toggle"],setup(i){const e=Dt();return(t,n)=>(pe(),Re("div",{class:"toggle-sidebar-button",title:Fe(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:n[0]||(n[0]=r=>t.$emit("toggle"))},n[1]||(n[1]=[Qe("div",{class:"icon","aria-hidden":"true"},[Qe("span"),Qe("span"),Qe("span")],-1)]),8,Zd))}}),Qd=rt(Jd,[["__file","ToggleSidebarButton.vue"]]),ef=Ke({__name:"Navbar",emits:["toggle-sidebar"],setup(i){const e=Dt(),t=tt(null),n=tt(null),r=tt(0),s=be(()=>r.value?{maxWidth:r.value+"px"}:{});kt(()=>{const l=a(t.value,"paddingLeft")+a(t.value,"paddingRight"),c=()=>{var u;window.innerWidth<719?r.value=0:r.value=t.value.offsetWidth-l-(((u=n.value)==null?void 0:u.offsetWidth)||0)};c(),window.addEventListener("resize",c,!1),window.addEventListener("orientationchange",c,!1)});function a(o,l){var h,d,p;const c=(p=(d=(h=o==null?void 0:o.ownerDocument)==null?void 0:h.defaultView)==null?void 0:d.getComputedStyle(o,null))==null?void 0:p[l],u=Number.parseInt(c,10);return Number.isNaN(u)?0:u}return(o,l)=>{const c=bn("NavbarSearch");return pe(),Re("header",{ref_key:"navbar",ref:t,class:"navbar"},[ot(Qd,{onToggle:l[0]||(l[0]=u=>o.$emit("toggle-sidebar"))}),Qe("span",{ref_key:"navbarBrand",ref:n},[ot(Rd)],512),Qe("div",{class:"navbar-items-wrapper",style:Cl(s.value)},[nt(o.$slots,"before"),ot(ec,{class:"can-hide"}),nt(o.$slots,"after"),Fe(e).colorModeSwitch?(pe(),yt(Kd,{key:0})):ht("v-if",!0),ot(c)],4)],512)}}}),tf=rt(ef,[["__file","Navbar.vue"]]),nf={class:"page-meta"},rf={key:0,class:"meta-item edit-link"},sf={key:1,class:"meta-item last-updated"},of={class:"meta-item-label"},af={class:"meta-item-info"},lf={key:2,class:"meta-item contributors"},cf={class:"meta-item-label"},uf={class:"meta-item-info"},hf=["title"],df=Ke({__name:"PageMeta",setup(i){const e=()=>{const l=Dt(),c=Kn(),u=Mn();return be(()=>{if(!(u.value.editLink??l.value.editLink??!0))return null;const{repo:d,docsRepo:p=d,docsBranch:g="main",docsDir:v="",editLinkText:m}=l.value;if(!p)return null;const f=Vd({docsRepo:p,docsBranch:g,docsDir:v,filePathRelative:c.value.filePathRelative,editLinkPattern:u.value.editLinkPattern??l.value.editLinkPattern});return f?{text:m??"Edit this page",link:f}:null})},t=()=>{const l=Dt(),c=Kn(),u=Mn();return be(()=>{var p,g;return!(u.value.lastUpdated??l.value.lastUpdated??!0)||!((p=c.value.git)!=null&&p.updatedTime)?null:new Date((g=c.value.git)==null?void 0:g.updatedTime).toLocaleString()})},n=()=>{const l=Dt(),c=Kn(),u=Mn();return be(()=>{var d;return u.value.contributors??l.value.contributors??!0?((d=c.value.git)==null?void 0:d.contributors)??null:null})},r=Dt(),s=e(),a=t(),o=n();return(l,c)=>{const u=bn("ClientOnly");return pe(),Re("footer",nf,[Fe(s)?(pe(),Re("div",rf,[ot(Sn,{class:"meta-item-label",item:Fe(s)},null,8,["item"])])):ht("v-if",!0),Fe(a)?(pe(),Re("div",sf,[Qe("span",of,gt(Fe(r).lastUpdatedText)+": ",1),ot(u,null,{default:wt(()=>[Qe("span",af,gt(Fe(a)),1)]),_:1})])):ht("v-if",!0),Fe(o)&&Fe(o).length?(pe(),Re("div",lf,[Qe("span",cf,gt(Fe(r).contributorsText)+": ",1),Qe("span",uf,[(pe(!0),Re(Wt,null,On(Fe(o),(h,d)=>(pe(),Re(Wt,{key:d},[Qe("span",{class:"contributor",title:`email: ${h.email}`},gt(h.name),9,hf),d!==Fe(o).length-1?(pe(),Re(Wt,{key:0},[Ni(", ")],64)):ht("v-if",!0)],64))),128))])])):ht("v-if",!0)])}}}),ff=rt(df,[["__file","PageMeta.vue"]]),pf={key:0,class:"page-nav"},mf={class:"inner"},gf={key:0,class:"prev"},_f={key:1,class:"next"},vf=Ke({__name:"PageNav",setup(i){const e=l=>l===!1?null:Qt(l)?mo(l):lo(l)?l:!1,t=(l,c,u)=>{const h=l.findIndex(d=>d.link===c);if(h!==-1){const d=l[h+u];return d!=null&&d.link?d:null}for(const d of l)if(d.children){const p=t(d.children,c,u);if(p)return p}return null},n=Mn(),r=go(),s=ai(),a=be(()=>{const l=e(n.value.prev);return l!==!1?l:t(r.value,s.path,-1)}),o=be(()=>{const l=e(n.value.next);return l!==!1?l:t(r.value,s.path,1)});return(l,c)=>a.value||o.value?(pe(),Re("nav",pf,[Qe("p",mf,[a.value?(pe(),Re("span",gf,[ot(Sn,{item:a.value},null,8,["item"])])):ht("v-if",!0),o.value?(pe(),Re("span",_f,[ot(Sn,{item:o.value},null,8,["item"])])):ht("v-if",!0)])])):ht("v-if",!0)}}),xf=rt(vf,[["__file","PageNav.vue"]]),Mf={class:"page"},Sf={class:"theme-default-content"},yf=Ke({__name:"Page",setup(i){return(e,t)=>{const n=bn("Content");return pe(),Re("main",Mf,[nt(e.$slots,"top"),Qe("div",Sf,[nt(e.$slots,"content-top"),ot(n),nt(e.$slots,"content-bottom")]),ot(ff),ot(xf),nt(e.$slots,"bottom")])}}}),Ef=rt(yf,[["__file","Page.vue"]]),bf={class:"sidebar-item-children"},Tf=Ke({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(i){const e=i,{item:t,depth:n}=Jr(e),r=ai(),s=si(),a=be(()=>Jl(t.value,r)),o=be(()=>({"sidebar-item":!0,"sidebar-heading":n.value===0,active:a.value,collapsible:t.value.collapsible})),l=be(()=>t.value.collapsible?a.value:!0),[c,u]=Sh(l.value),h=p=>{t.value.collapsible&&(p.preventDefault(),u())},d=s.afterEach(p=>{so(()=>{c.value=l.value})});return io(()=>{d()}),(p,g)=>{var m;const v=bn("SidebarItem",!0);return pe(),Re("li",null,[Fe(t).link?(pe(),yt(Sn,{key:0,class:en(o.value),item:Fe(t)},null,8,["class","item"])):(pe(),Re("p",{key:1,tabindex:"0",class:en(o.value),onClick:h,onKeydown:ru(h,["enter"])},[Ni(gt(Fe(t).text)+" ",1),Fe(t).collapsible?(pe(),Re("span",{key:0,class:en(["arrow",Fe(c)?"down":"right"])},null,2)):ht("v-if",!0)],34)),(m=Fe(t).children)!=null&&m.length?(pe(),yt(Zl,{key:2},{default:wt(()=>[Wr(Qe("ul",bf,[(pe(!0),Re(Wt,null,On(Fe(t).children,f=>(pe(),yt(v,{key:`${Fe(n)}${f.text}${f.link}`,item:f,depth:Fe(n)+1},null,8,["item","depth"]))),128))],512),[[Xr,Fe(c)]])]),_:1})):ht("v-if",!0)])}}}),Af=rt(Tf,[["__file","SidebarItem.vue"]]),wf={key:0,class:"sidebar-items"},Rf=Ke({__name:"SidebarItems",setup(i){const e=ai(),t=go();return kt(()=>{oi(()=>e.hash,n=>{const r=document.querySelector(".sidebar");if(!r)return;const s=document.querySelector(`.sidebar a.sidebar-item[href="${e.path}${n}"]`);if(!s)return;const{top:a,height:o}=r.getBoundingClientRect(),{top:l,height:c}=s.getBoundingClientRect();l<a?s.scrollIntoView(!0):l+c>a+o&&s.scrollIntoView(!1)})}),(n,r)=>Fe(t).length?(pe(),Re("ul",wf,[(pe(!0),Re(Wt,null,On(Fe(t),s=>(pe(),yt(Af,{key:`${s.text}${s.link}`,item:s},null,8,["item"]))),128))])):ht("v-if",!0)}}),Cf=rt(Rf,[["__file","SidebarItems.vue"]]),Lf={class:"sidebar"},Pf=Ke({__name:"Sidebar",setup(i){return(e,t)=>(pe(),Re("aside",Lf,[ot(ec),nt(e.$slots,"top"),ot(Cf),nt(e.$slots,"bottom")]))}}),Df=rt(Pf,[["__file","Sidebar.vue"]]),If=Ke({__name:"Layout",setup(i){const e=Kn(),t=Mn(),n=Dt(),r=be(()=>t.value.navbar!==!1&&n.value.navbar!==!1),s=go(),a=tt(!1),o=m=>{a.value=typeof m=="boolean"?m:!a.value},l={x:0,y:0},c=m=>{l.x=m.changedTouches[0].clientX,l.y=m.changedTouches[0].clientY},u=m=>{const f=m.changedTouches[0].clientX-l.x,b=m.changedTouches[0].clientY-l.y;Math.abs(f)>Math.abs(b)&&Math.abs(f)>40&&(f>0&&l.x<=80?o(!0):o(!1))},h=be(()=>[{"no-navbar":!r.value,"no-sidebar":!s.value.length,"sidebar-open":a.value},t.value.pageClass]);let d;kt(()=>{d=si().afterEach(()=>{o(!1)})}),ao(()=>{d()});const p=Yl(),g=p.resolve,v=p.pending;return(m,f)=>(pe(),Re("div",{class:en(["theme-container",h.value]),onTouchstart:c,onTouchend:u},[nt(m.$slots,"navbar",{},()=>[r.value?(pe(),yt(tf,{key:0,onToggleSidebar:o},{before:wt(()=>[nt(m.$slots,"navbar-before")]),after:wt(()=>[nt(m.$slots,"navbar-after")]),_:3})):ht("v-if",!0)]),Qe("div",{class:"sidebar-mask",onClick:f[0]||(f[0]=b=>o(!1))}),nt(m.$slots,"sidebar",{},()=>[ot(Df,null,{top:wt(()=>[nt(m.$slots,"sidebar-top")]),bottom:wt(()=>[nt(m.$slots,"sidebar-bottom")]),_:3})]),nt(m.$slots,"page",{},()=>[Fe(t).home?(pe(),yt(Ad,{key:0})):(pe(),yt(ro,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:Fe(g),onBeforeLeave:Fe(v)},{default:wt(()=>[(pe(),yt(Ef,{key:Fe(e).path},{top:wt(()=>[nt(m.$slots,"page-top")]),"content-top":wt(()=>[nt(m.$slots,"page-content-top")]),"content-bottom":wt(()=>[nt(m.$slots,"page-content-bottom")]),bottom:wt(()=>[nt(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}}),Uf=rt(If,[["__file","Layout.vue"]]),Nf={class:"theme-container"},Of={class:"page"},Ff={class:"theme-default-content"},Bf=Ke({__name:"NotFound",setup(i){const e=ar(),t=Dt(),n=t.value.notFound??["Not Found"],r=()=>n[Math.floor(Math.random()*n.length)],s=t.value.home??e.value,a=t.value.backToHome??"Back to home";return(o,l)=>{const c=bn("RouterLink");return pe(),Re("div",Nf,[Qe("main",Of,[Qe("div",Ff,[l[0]||(l[0]=Qe("h1",null,"404",-1)),Qe("blockquote",null,gt(r()),1),ot(c,{to:Fe(s)},{default:wt(()=>[Ni(gt(Fe(a)),1)]),_:1},8,["to"])])])])}}}),zf=rt(Bf,[["__file","NotFound.vue"]]);const kf=An({enhance({app:i,router:e}){i.component("Badge",ah),i.component("CodeGroup",lh),i.component("CodeGroupItem",dh),i.component("AutoLinkExternalIcon",()=>{const n=i.component("ExternalLinkIcon");return n?Je(n):null}),i.component("NavbarSearch",()=>{const n=i.component("Docsearch")||i.component("SearchBox");return n?Je(n):null});const t=e.options.scrollBehavior;e.options.scrollBehavior=async(...n)=>(await Yl().wait(),t(...n))},setup(){Kh(),Qh()},layouts:{Layout:Uf,NotFound:zf}}),Hf=i=>i instanceof Element?document.activeElement===i&&(["TEXTAREA","SELECT","INPUT"].includes(i.tagName)||i.hasAttribute("contenteditable")):!1,Gf=(i,e)=>e.some(t=>{if(Qt(t))return t===i.key;const{key:n,ctrl:r=!1,shift:s=!1,alt:a=!1}=t;return n===i.key&&r===i.ctrlKey&&s===i.shiftKey&&a===i.altKey}),Vf=/[^\x00-\x7F]/,Wf=i=>i.split(/\s+/g).map(e=>e.trim()).filter(e=>!!e),ea=i=>i.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),ta=(i,e)=>{const t=e.join(" "),n=Wf(i);if(Vf.test(i))return n.some(a=>t.toLowerCase().indexOf(a)>-1);const r=i.endsWith(" ");return new RegExp(n.map((a,o)=>n.length===o+1&&!r?`(?=.*\\b${ea(a)})`:`(?=.*\\b${ea(a)}\\b)`).join("")+".+","gi").test(t)},Xf=({input:i,hotKeys:e})=>{if(e.value.length===0)return;const t=n=>{i.value&&Gf(n,e.value)&&!Hf(n.target)&&(n.preventDefault(),i.value.focus())};kt(()=>{document.addEventListener("keydown",t)}),io(()=>{document.removeEventListener("keydown",t)})},qf=[{title:"",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"技术选型",headers:[{level:2,title:"Web 端技术选型",slug:"web-端技术选型",link:"#web-端技术选型",children:[]},{level:2,title:"APP 端技术选型",slug:"app-端技术选型",link:"#app-端技术选型",children:[]}],path:"/choosing-technology/",pathLocale:"/",extraFields:[]},{title:"样式规范",headers:[{level:2,title:"类选择器",slug:"类选择器",link:"#类选择器",children:[]},{level:2,title:"变量",slug:"变量",link:"#变量",children:[]},{level:2,title:"书写顺序",slug:"书写顺序",link:"#书写顺序",children:[]}],path:"/develop-standard/",pathLocale:"/",extraFields:[]},{title:"JavaScript 规范",headers:[{level:2,title:"变量声明",slug:"变量声明",link:"#变量声明",children:[]},{level:2,title:"命名规范",slug:"命名规范",link:"#命名规范",children:[]},{level:2,title:"对象",slug:"对象",link:"#对象",children:[]},{level:2,title:"逻辑运算",slug:"逻辑运算",link:"#逻辑运算",children:[]}],path:"/develop-standard/javascript.html",pathLocale:"/",extraFields:[]},{title:"React 规范",headers:[{level:2,title:"前提",slug:"前提",link:"#前提",children:[]},{level:2,title:"命名规则",slug:"命名规则",link:"#命名规则",children:[]},{level:2,title:"属性",slug:"属性",link:"#属性",children:[]}],path:"/develop-standard/react.html",pathLocale:"/",extraFields:[]},{title:"TypeScript 规范",headers:[{level:2,title:"类型或接口定义",slug:"类型或接口定义",link:"#类型或接口定义",children:[]}],path:"/develop-standard/typescript.html",pathLocale:"/",extraFields:[]},{title:"uni-app 规范",headers:[{level:2,title:"前提",slug:"前提",link:"#前提",children:[]}],path:"/develop-standard/uni-app.html",pathLocale:"/",extraFields:[]},{title:"Vue 规范",headers:[{level:2,title:"前提",slug:"前提",link:"#前提",children:[]},{level:2,title:"项目命名",slug:"项目命名",link:"#项目命名",children:[]},{level:2,title:"常用搭配词",slug:"常用搭配词",link:"#常用搭配词",children:[]},{level:2,title:"全局方法",slug:"全局方法",link:"#全局方法",children:[]},{level:2,title:"公共组件",slug:"公共组件",link:"#公共组件",children:[]},{level:2,title:"API 接口",slug:"api-接口",link:"#api-接口",children:[]},{level:2,title:"枚举数据",slug:"枚举数据",link:"#枚举数据",children:[]},{level:2,title:"TypeScript 类型或接口定义",slug:"typescript-类型或接口定义",link:"#typescript-类型或接口定义",children:[]},{level:2,title:"移除打印",slug:"移除打印",link:"#移除打印",children:[]},{level:2,title:"移除冗余注释",slug:"移除冗余注释",link:"#移除冗余注释",children:[]}],path:"/develop-standard/vue.html",pathLocale:"/",extraFields:[]},{title:"NVM",headers:[{level:2,title:"它是什么？",slug:"它是什么",link:"#它是什么",children:[]},{level:2,title:"为什么需要它？",slug:"为什么需要它",link:"#为什么需要它",children:[]},{level:2,title:"如何使用它？",slug:"如何使用它",link:"#如何使用它",children:[]}],path:"/develop-tools/",pathLocale:"/",extraFields:[]},{title:"HBuilderX",headers:[{level:2,title:"插件安装",slug:"插件安装",link:"#插件安装",children:[]}],path:"/develop-tools/hbuilderx.html",pathLocale:"/",extraFields:[]},{title:"Node 和 NPM",headers:[{level:2,title:"它是什么？",slug:"它是什么",link:"#它是什么",children:[]},{level:2,title:"为什么需要它？",slug:"为什么需要它",link:"#为什么需要它",children:[]},{level:2,title:"如何使用它？",slug:"如何使用它",link:"#如何使用它",children:[]},{level:2,title:"NPM 全局包",slug:"npm-全局包",link:"#npm-全局包",children:[]}],path:"/develop-tools/node-and-npm.html",pathLocale:"/",extraFields:[]},{title:"Node",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/develop-tools/node.html",pathLocale:"/",extraFields:[]},{title:"其他工具",headers:[],path:"/develop-tools/other-tools.html",pathLocale:"/",extraFields:[]},{title:"SVN",headers:[{level:2,title:"它是什么？",slug:"它是什么",link:"#它是什么",children:[]},{level:2,title:"为什么需要它？",slug:"为什么需要它",link:"#为什么需要它",children:[]},{level:2,title:"如何使用它？",slug:"如何使用它",link:"#如何使用它",children:[]}],path:"/develop-tools/svn.html",pathLocale:"/",extraFields:[]},{title:"ToDesk",headers:[],path:"/develop-tools/todesk.html",pathLocale:"/",extraFields:[]},{title:"VSCode",headers:[{level:2,title:"插件安装",slug:"插件安装",link:"#插件安装",children:[]},{level:2,title:"插件配置",slug:"插件配置",link:"#插件配置",children:[]},{level:2,title:"代码片段",slug:"代码片段",link:"#代码片段",children:[]}],path:"/develop-tools/vscode.html",pathLocale:"/",extraFields:[]},{title:"微信开发者工具",headers:[],path:"/develop-tools/weixin-devtools.html",pathLocale:"/",extraFields:[]},{title:"编程 Tips",headers:[{level:2,title:"在线 VSCode 查看 GitHub 项目",slug:"在线-vscode-查看-github-项目",link:"#在线-vscode-查看-github-项目",children:[]}],path:"/tips-share/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]}],$f=tt(qf),Yf=()=>$f,jf=({searchIndex:i,routeLocale:e,query:t,maxSuggestions:n})=>{const r=be(()=>i.value.filter(s=>s.pathLocale===e.value));return be(()=>{const s=t.value.trim().toLowerCase();if(!s)return[];const a=[],o=(l,c)=>{ta(s,[c.title])&&a.push({link:`${l.path}#${c.slug}`,title:l.title,header:c.title});for(const u of c.children){if(a.length>=n.value)return;o(l,u)}};for(const l of r.value){if(a.length>=n.value)break;if(ta(s,[l.title,...l.extraFields])){a.push({link:l.path,title:l.title});continue}for(const c of l.headers){if(a.length>=n.value)break;o(l,c)}}return a})},Kf=i=>{const e=tt(0);return{focusIndex:e,focusNext:()=>{e.value<i.value.length-1?e.value+=1:e.value=0},focusPrev:()=>{e.value>0?e.value-=1:e.value=i.value.length-1}}},Zf=Ke({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(i){const{locales:e,hotKeys:t,maxSuggestions:n}=Jr(i),r=si(),s=ar(),a=Yf(),o=tt(null),l=tt(!1),c=tt(""),u=be(()=>e.value[s.value]??{}),h=jf({searchIndex:a,routeLocale:s,query:c,maxSuggestions:n}),{focusIndex:d,focusNext:p,focusPrev:g}=Kf(h);Xf({input:o,hotKeys:t});const v=be(()=>l.value&&!!h.value.length),m=()=>{v.value&&g()},f=()=>{v.value&&p()},b=_=>{if(!v.value)return;const T=h.value[_];T&&r.push(T.link).then(()=>{c.value="",d.value=0})};return()=>Je("form",{class:"search-box",role:"search"},[Je("input",{ref:o,type:"search",placeholder:u.value.placeholder,autocomplete:"off",spellcheck:!1,value:c.value,onFocus:()=>l.value=!0,onBlur:()=>l.value=!1,onInput:_=>c.value=_.target.value,onKeydown:_=>{switch(_.key){case"ArrowUp":{m();break}case"ArrowDown":{f();break}case"Enter":{_.preventDefault(),b(d.value);break}}}}),v.value&&Je("ul",{class:"suggestions",onMouseleave:()=>d.value=-1},h.value.map(({link:_,title:T,header:A},P)=>Je("li",{class:["suggestion",{focus:d.value===P}],onMouseenter:()=>d.value=P,onMousedown:()=>b(P)},Je("a",{href:_,onClick:L=>L.preventDefault()},[Je("span",{class:"page-title"},T),A&&Je("span",{class:"page-header"},`> ${A}`)]))))])}});const Jf={"/":{placeholder:"搜索（ctrl + k）"}},Qf=["ctrl","k"],ep=5,tp=An({enhance({app:i}){i.component("SearchBox",e=>Je(Zf,{locales:Jf,hotKeys:Qf,maxSuggestions:ep,...e}))}}),np=["src","alt"],ip=Ke({__name:"PluginIconCom",props:{url:{type:String,required:!0},alt:{type:String,default:"图片"}},setup(i){return(e,t)=>(pe(),Re("img",{class:"icon",src:i.url,alt:i.alt},null,8,np))}});const rp=rt(ip,[["__scopeId","data-v-13e2d31a"],["__file","PluginIconCom.vue"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vo="153",ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sp=0,na=1,op=2,tc=1,ap=2,_n=3,Fn=0,It=1,rn=2,Un=0,Di=1,ia=2,ra=3,sa=4,lp=5,Ri=100,cp=101,up=102,oa=103,aa=104,hp=200,dp=201,fp=202,pp=203,nc=204,ic=205,mp=206,gp=207,_p=208,vp=209,xp=210,Mp=0,Sp=1,yp=2,qs=3,Ep=4,bp=5,Tp=6,Ap=7,rc=0,wp=1,Rp=2,yn=0,Cp=1,Lp=2,Pp=3,Dp=4,Ip=5,sc=300,Oi=301,Fi=302,Yr=303,$s=304,Qr=306,Ys=1e3,Zt=1001,js=1002,Pt=1003,la=1004,us=1005,Gt=1006,Up=1007,er=1008,Nn=1009,Np=1010,Op=1011,xo=1012,oc=1013,Dn=1014,In=1015,tr=1016,ac=1017,lc=1018,Zn=1020,Fp=1021,Jt=1023,Bp=1024,zp=1025,Jn=1026,Bi=1027,kp=1028,cc=1029,Hp=1030,uc=1031,hc=1033,hs=33776,ds=33777,fs=33778,ps=33779,ca=35840,ua=35841,ha=35842,da=35843,Gp=36196,fa=37492,pa=37496,ma=37808,ga=37809,_a=37810,va=37811,xa=37812,Ma=37813,Sa=37814,ya=37815,Ea=37816,ba=37817,Ta=37818,Aa=37819,wa=37820,Ra=37821,ms=36492,Vp=36283,Ca=36284,La=36285,Pa=36286,dc=3e3,Qn=3001,Wp=3200,Xp=3201,fc=0,qp=1,ei="",ke="srgb",on="srgb-linear",pc="display-p3",gs=7680,$p=519,Yp=512,jp=513,Kp=514,Zp=515,Jp=516,Qp=517,em=518,tm=519,Da=35044,Ia="300 es",Ks=1035,vn=2e3,jr=2001;class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_s=Math.PI/180,Zs=180/Math.PI;function ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function nm(i,e){return(i%e+e)%e}function vs(i,e,t){return(1-t)*i+t*e}function Ua(i){return(i&i-1)===0&&i!==0}function Js(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=r[0],m=r[3],f=r[6],b=r[1],_=r[4],T=r[7],A=r[2],P=r[5],L=r[8];return s[0]=a*v+o*b+l*A,s[3]=a*m+o*_+l*P,s[6]=a*f+o*T+l*L,s[1]=c*v+u*b+h*A,s[4]=c*m+u*_+h*P,s[7]=c*f+u*T+h*L,s[2]=d*v+p*b+g*A,s[5]=d*m+p*_+g*P,s[8]=d*f+p*T+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xs.makeScale(e,t)),this}rotate(e){return this.premultiply(xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(xs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new Ve;function mc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Na={};function ji(i){i in Na||(Na[i]=!0,console.warn(i))}function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const im=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),rm=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function sm(i){return i.convertSRGBToLinear().applyMatrix3(rm)}function om(i){return i.applyMatrix3(im).convertLinearToSRGB()}const am={[on]:i=>i,[ke]:i=>i.convertSRGBToLinear(),[pc]:sm},lm={[on]:i=>i,[ke]:i=>i.convertLinearToSRGB(),[pc]:om},qt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return on},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=am[e],r=lm[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let di;class gc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=nr("canvas")),di.width=e.width,di.height=e.height;const n=di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cm=0;class _c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ss(r[a].image)):s.push(Ss(r[a]))}else s=Ss(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ss(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let um=0;class Ut extends li{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Zt,r=Zt,s=Gt,a=er,o=Jt,l=Nn,c=Ut.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=ki(),this.name="",this.source=new _c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Qn?ke:ei),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?Qn:dc}set encoding(e){ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qn?ke:ei}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=sc;Ut.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,T=(p+1)/2,A=(f+1)/2,P=(u+d)/4,L=(h+v)/4,y=(g+m)/4;return _>T&&_>A?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=P/n,s=L/n):T>A?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=P/r,s=y/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=L/s,r=y/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ti extends li{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qn?ke:ei),this.texture=new Ut(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _c(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vc extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hm extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*v,b=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const A=Math.sqrt(_),P=Math.atan2(A,f*b);m=Math.sin(m*P)/A,o=Math.sin(o*P)/A}const T=o*b;if(l=l*m+d*T,c=c*m+p*T,u=u*m+g*T,h=h*m+v*T,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,h=l*r+s*n-a*t,d=-s*t-a*n-o*r;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ys.copy(this).projectOnVector(e),this.sub(ys)}reflect(e){return this.sub(ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ys=new U,Oa=new ni;class lr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fi.copy(e.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)un.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(un)}else r.boundingBox===null&&r.computeBoundingBox(),fi.copy(r.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),gr.subVectors(this.max,Wi),pi.subVectors(e.a,Wi),mi.subVectors(e.b,Wi),gi.subVectors(e.c,Wi),wn.subVectors(mi,pi),Rn.subVectors(gi,mi),Gn.subVectors(pi,gi);let t=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-Gn.z,Gn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,Gn.z,0,-Gn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-Gn.y,Gn.x,0];return!Es(t,pi,mi,gi,gr)||(t=[1,0,0,0,1,0,0,0,1],!Es(t,pi,mi,gi,gr))?!1:(_r.crossVectors(wn,Rn),t=[_r.x,_r.y,_r.z],Es(t,pi,mi,gi,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new U,new U,new U,new U,new U,new U,new U,new U],un=new U,fi=new lr,pi=new U,mi=new U,gi=new U,wn=new U,Rn=new U,Gn=new U,Wi=new U,gr=new U,_r=new U,Vn=new U;function Es(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vn.fromArray(i,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const dm=new lr,Xi=new U,bs=new U;class Mo{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(bs)),this.expandByPoint(Xi.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new U,Ts=new U,vr=new U,Cn=new U,As=new U,xr=new U,ws=new U;class fm{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ts.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Ts);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vr),o=Cn.dot(this.direction),l=-Cn.dot(vr),c=Cn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ts).addScaledVector(vr,d),p}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),r=hn.dot(hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,r,s){As.subVectors(t,e),xr.subVectors(n,e),ws.crossVectors(As,xr);let a=this.direction.dot(ws),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(xr.crossVectors(Cn,xr));if(l<0)return null;const c=o*this.direction.dot(As.cross(Cn));if(c<0||l+c>a)return null;const u=-o*Cn.dot(ws);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,r,s,a,o,l,c,u,h,d,p,g,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,p,g,v,m)}set(e,t,n,r,s,a,o,l,c,u,h,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/_i.setFromMatrixColumn(e,0).length(),s=1/_i.setFromMatrixColumn(e,1).length(),a=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pm,e,mm)}lookAt(e,t,n){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Ln.crossVectors(n,Ft),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Ln.crossVectors(n,Ft)),Ln.normalize(),Mr.crossVectors(Ft,Ln),r[0]=Ln.x,r[4]=Mr.x,r[8]=Ft.x,r[1]=Ln.y,r[5]=Mr.y,r[9]=Ft.y,r[2]=Ln.z,r[6]=Mr.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],b=n[3],_=n[7],T=n[11],A=n[15],P=r[0],L=r[4],y=r[8],x=r[12],E=r[1],z=r[5],$=r[9],I=r[13],N=r[2],F=r[6],W=r[10],G=r[14],q=r[3],Z=r[7],Q=r[11],he=r[15];return s[0]=a*P+o*E+l*N+c*q,s[4]=a*L+o*z+l*F+c*Z,s[8]=a*y+o*$+l*W+c*Q,s[12]=a*x+o*I+l*G+c*he,s[1]=u*P+h*E+d*N+p*q,s[5]=u*L+h*z+d*F+p*Z,s[9]=u*y+h*$+d*W+p*Q,s[13]=u*x+h*I+d*G+p*he,s[2]=g*P+v*E+m*N+f*q,s[6]=g*L+v*z+m*F+f*Z,s[10]=g*y+v*$+m*W+f*Q,s[14]=g*x+v*I+m*G+f*he,s[3]=b*P+_*E+T*N+A*q,s[7]=b*L+_*z+T*F+A*Z,s[11]=b*y+_*$+T*W+A*Q,s[15]=b*x+_*I+T*G+A*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*p-n*l*p)+v*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],b=h*m*c-v*d*c+v*l*p-o*m*p-h*l*f+o*d*f,_=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,T=u*v*c-g*h*c+g*o*p-a*v*p-u*o*f+a*h*f,A=g*h*l-u*v*l-g*o*d+a*v*d+u*o*m-a*h*m,P=t*b+n*_+r*T+s*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=b*L,e[1]=(v*d*s-h*m*s-v*r*p+n*m*p+h*r*f-n*d*f)*L,e[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*f+n*l*f)*L,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*p-n*l*p)*L,e[4]=_*L,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*f+t*d*f)*L,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*f-t*l*f)*L,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*L,e[8]=T*L,e[9]=(g*h*s-u*v*s-g*n*p+t*v*p+u*n*f-t*h*f)*L,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*f+t*o*f)*L,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*L,e[12]=A*L,e[13]=(u*v*r-g*h*r+g*n*d-t*v*d-u*n*m+t*h*m)*L,e[14]=(g*o*r-a*v*r-g*n*l+t*v*l+a*n*m-t*o*m)*L,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,v=a*u,m=a*h,f=o*h,b=l*c,_=l*u,T=l*h,A=n.x,P=n.y,L=n.z;return r[0]=(1-(v+f))*A,r[1]=(p+T)*A,r[2]=(g-_)*A,r[3]=0,r[4]=(p-T)*P,r[5]=(1-(d+f))*P,r[6]=(m+b)*P,r[7]=0,r[8]=(g+_)*L,r[9]=(m-b)*L,r[10]=(1-(d+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=_i.set(r[0],r[1],r[2]).length();const a=_i.set(r[4],r[5],r[6]).length(),o=_i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);const c=1/s,u=1/a,h=1/o;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=vn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let p,g;if(o===vn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===jr)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=vn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,p=(n+r)*u;let g,v;if(o===vn)g=(a+s)*h,v=-2*h;else if(o===jr)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new U,$t=new Et,pm=new U(0,0,0),mm=new U(1,1,1),Ln=new U,Mr=new U,Ft=new U,Fa=new Et,Ba=new ni;class es{constructor(e=0,t=0,n=0,r=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gm=0;const za=new U,vi=new ni,dn=new Et,Sr=new U,qi=new U,_m=new U,vm=new ni,ka=new U(1,0,0),Ha=new U(0,1,0),Ga=new U(0,0,1),xm={type:"added"},Va={type:"removed"};class zt extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new U,t=new es,n=new ni,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ve}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(ka,e)}rotateY(e){return this.rotateOnAxis(Ha,e)}rotateZ(e){return this.rotateOnAxis(Ga,e)}translateOnAxis(e,t){return za.copy(e).applyQuaternion(this.quaternion),this.position.add(za.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ka,e)}translateY(e){return this.translateOnAxis(Ha,e)}translateZ(e){return this.translateOnAxis(Ga,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(qi,Sr,this.up):dn.lookAt(Sr,qi,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),vi.setFromRotationMatrix(dn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Va)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Va)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,_m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,vm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}zt.DEFAULT_UP=new U(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new U,fn=new U,Rs=new U,pn=new U,xi=new U,Mi=new U,Wa=new U,Cs=new U,Ls=new U,Ps=new U;let yr=!1;class Kt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),fn.subVectors(n,t),Rs.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(fn),l=Yt.dot(Rs),c=fn.dot(fn),u=fn.dot(Rs),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,n,r,s,a,o,l){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,pn),l.setScalar(0),l.addScaledVector(s,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),fn.subVectors(e,t),Yt.cross(fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Yt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;xi.subVectors(r,n),Mi.subVectors(s,n),Cs.subVectors(e,n);const l=xi.dot(Cs),c=Mi.dot(Cs);if(l<=0&&c<=0)return t.copy(n);Ls.subVectors(e,r);const u=xi.dot(Ls),h=Mi.dot(Ls);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xi,a);Ps.subVectors(e,s);const p=xi.dot(Ps),g=Mi.dot(Ps);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Mi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Wa.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Wa,o);const f=1/(m+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(xi,a).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Mm=0;class cr extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Di,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Ds(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=nm(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ds(a,s,e+1/3),this.g=Ds(a,s,e),this.b=Ds(a,s,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=ke){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){const n=Mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return qt.fromWorkingColorSpace(At.copy(this),e),Math.round(St(At.r*255,0,255))*65536+Math.round(St(At.g*255,0,255))*256+Math.round(St(At.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(At.copy(this),t);const n=At.r,r=At.g,s=At.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=ke){qt.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,r=At.b;return e!==ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(Er);const n=vs(jt.h,Er.h,t),r=vs(jt.s,Er.s,t),s=vs(jt.l,Er.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new et;et.NAMES=Mc;class Sc extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new U,br=new le;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this.updateRange={offset:0,count:-1},this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yc extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ec extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class En extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Sm=0;const Ht=new Et,Is=new zt,Si=new U,Bt=new lr,$i=new lr,Mt=new U;class Bn extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mc(e)?Ec:yc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return Is.lookAt(e),Is.updateMatrix(),this.applyMatrix4(Is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new En(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Bt.min,$i.min),Bt.expandByPoint(Mt),Mt.addVectors(Bt.max,$i.max),Bt.expandByPoint(Mt)):(Bt.expandByPoint($i.min),Bt.expandByPoint($i.max))}Bt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),Mt.add(Si)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<o;E++)c[E]=new U,u[E]=new U;const h=new U,d=new U,p=new U,g=new le,v=new le,m=new le,f=new U,b=new U;function _(E,z,$){h.fromArray(r,E*3),d.fromArray(r,z*3),p.fromArray(r,$*3),g.fromArray(a,E*2),v.fromArray(a,z*2),m.fromArray(a,$*2),d.sub(h),p.sub(h),v.sub(g),m.sub(g);const I=1/(v.x*m.y-m.x*v.y);isFinite(I)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(I),b.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(I),c[E].add(f),c[z].add(f),c[$].add(f),u[E].add(b),u[z].add(b),u[$].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let E=0,z=T.length;E<z;++E){const $=T[E],I=$.start,N=$.count;for(let F=I,W=I+N;F<W;F+=3)_(n[F+0],n[F+1],n[F+2])}const A=new U,P=new U,L=new U,y=new U;function x(E){L.fromArray(s,E*3),y.copy(L);const z=c[E];A.copy(z),A.sub(L.multiplyScalar(L.dot(z))).normalize(),P.crossVectors(y,z);const I=P.dot(u[E])<0?-1:1;l[E*4]=A.x,l[E*4+1]=A.y,l[E*4+2]=A.z,l[E*4+3]=I}for(let E=0,z=T.length;E<z;++E){const $=T[E],I=$.start,N=$.count;for(let F=I,W=I+N;F<W;F+=3)x(n[F+0]),x(n[F+1]),x(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new sn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new Et,Wn=new fm,Tr=new Mo,qa=new U,yi=new U,Ei=new U,bi=new U,Us=new U,Ar=new U,wr=new le,Rr=new le,Cr=new le,$a=new U,Ya=new U,ja=new U,Lr=new U,Pr=new U;class xn extends zt{constructor(e=new Bn,t=new Sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ar.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Us.fromBufferAttribute(h,e),a?Ar.addScaledVector(Us,u):Ar.addScaledVector(Us.sub(t),u))}t.add(Ar)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),!(Tr.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Tr,qa)===null||Wn.origin.distanceToSquared(qa)>(e.far-e.near)**2))&&(Xa.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(Xa),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,A=_;T<A;T+=3){const P=o.getX(T),L=o.getX(T+1),y=o.getX(T+2);r=Dr(this,f,e,n,c,u,h,P,L,y),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const b=o.getX(m),_=o.getX(m+1),T=o.getX(m+2);r=Dr(this,a,e,n,c,u,h,b,_,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,A=_;T<A;T+=3){const P=T,L=T+1,y=T+2;r=Dr(this,f,e,n,c,u,h,P,L,y),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const b=m,_=m+1,T=m+2;r=Dr(this,a,e,n,c,u,h,b,_,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ym(i,e,t,n,r,s,a,o){let l;if(e.side===It?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Fn,o),l===null)return null;Pr.copy(o),Pr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:i}}function Dr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,yi),i.getVertexPosition(l,Ei),i.getVertexPosition(c,bi);const u=ym(i,e,t,n,yi,Ei,bi,Lr);if(u){r&&(wr.fromBufferAttribute(r,o),Rr.fromBufferAttribute(r,l),Cr.fromBufferAttribute(r,c),u.uv=Kt.getInterpolation(Lr,yi,Ei,bi,wr,Rr,Cr,new le)),s&&(wr.fromBufferAttribute(s,o),Rr.fromBufferAttribute(s,l),Cr.fromBufferAttribute(s,c),u.uv1=Kt.getInterpolation(Lr,yi,Ei,bi,wr,Rr,Cr,new le),u.uv2=u.uv1),a&&($a.fromBufferAttribute(a,o),Ya.fromBufferAttribute(a,l),ja.fromBufferAttribute(a,c),u.normal=Kt.getInterpolation(Lr,yi,Ei,bi,$a,Ya,ja,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};Kt.getNormal(yi,Ei,bi,h.normal),u.face=h}return u}class ur extends Bn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(h,2));function g(v,m,f,b,_,T,A,P,L,y,x){const E=T/L,z=A/y,$=T/2,I=A/2,N=P/2,F=L+1,W=y+1;let G=0,q=0;const Z=new U;for(let Q=0;Q<W;Q++){const he=Q*z-I;for(let k=0;k<F;k++){const te=k*E-$;Z[v]=te*b,Z[m]=he*_,Z[f]=N,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[f]=P>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(k/L),h.push(1-Q/y),G+=1}}for(let Q=0;Q<y;Q++)for(let he=0;he<L;he++){const k=d+he+F*Q,te=d+he+F*(Q+1),ne=d+(he+1)+F*(Q+1),de=d+(he+1)+F*Q;l.push(k,te,de),l.push(te,ne,de),q+=6}o.addGroup(p,q,x),p+=q,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=zi(i[t]);for(const r in n)e[r]=n[r]}return e}function Em(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bc(i){return i.getRenderTarget()===null?i.outputColorSpace:on}const bm={clone:zi,merge:Lt};var Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Em(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tc extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Tc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ai=1;class wm extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Vt(Ti,Ai,e,t);r.layers=this.layers,this.add(r);const s=new Vt(Ti,Ai,e,t);s.layers=this.layers,this.add(s);const a=new Vt(Ti,Ai,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Ti,Ai,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Ti,Ai,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Ti,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=yn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ac extends Ut{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rm extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qn?ke:ei),this.texture=new Ac(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ur(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Un});s.uniforms.tEquirect.value=t;const a=new xn(r,s),o=t.minFilter;return t.minFilter===er&&(t.minFilter=Gt),new wm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ns=new U,Cm=new U,Lm=new Ve;class $n{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ns.subVectors(n,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ns),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lm.getNormalMatrix(e),r=this.coplanarPoint(Ns).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Mo,Ir=new U;class wc{constructor(e=new $n,t=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],f=r[12],b=r[13],_=r[14],T=r[15];if(n[0].setComponents(l-s,d-c,m-p,T-f).normalize(),n[1].setComponents(l+s,d+c,m+p,T+f).normalize(),n[2].setComponents(l+a,d+u,m+g,T+b).normalize(),n[3].setComponents(l-a,d-u,m-g,T-b).normalize(),n[4].setComponents(l-o,d-h,m-v,T-_).normalize(),t===vn)n[5].setComponents(l+o,d+h,m+v,T+_).normalize();else if(t===jr)n[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ir.x=r.normal.x>0?e.max.x:e.min.x,Ir.y=r.normal.y>0?e.max.y:e.min.y,Ir.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Pm(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,d=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class So extends Bn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const b=f*d-a;for(let _=0;_<c;_++){const T=_*h-s;g.push(T,-b,0),v.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const _=b+c*f,T=b+c*(f+1),A=b+1+c*(f+1),P=b+1+c*f;p.push(_,T,P),p.push(T,A,P)}this.setIndex(p),this.setAttribute("position",new En(g,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm="vec3 transformed = vec3( position );",zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,km=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,wg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ng=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,m_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,I_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,N_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:Dm,alphamap_pars_fragment:Im,alphatest_fragment:Um,alphatest_pars_fragment:Nm,aomap_fragment:Om,aomap_pars_fragment:Fm,begin_vertex:Bm,beginnormal_vertex:zm,bsdfs:km,iridescence_fragment:Hm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:Wm,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:qm,color_fragment:$m,color_pars_fragment:Ym,color_pars_vertex:jm,color_vertex:Km,common:Zm,cube_uv_reflection_fragment:Jm,defaultnormal_vertex:Qm,displacementmap_pars_vertex:eg,displacementmap_vertex:tg,emissivemap_fragment:ng,emissivemap_pars_fragment:ig,encodings_fragment:rg,encodings_pars_fragment:sg,envmap_fragment:og,envmap_common_pars_fragment:ag,envmap_pars_fragment:lg,envmap_pars_vertex:cg,envmap_physical_pars_fragment:Sg,envmap_vertex:ug,fog_vertex:hg,fog_pars_vertex:dg,fog_fragment:fg,fog_pars_fragment:pg,gradientmap_pars_fragment:mg,lightmap_fragment:gg,lightmap_pars_fragment:_g,lights_lambert_fragment:vg,lights_lambert_pars_fragment:xg,lights_pars_begin:Mg,lights_toon_fragment:yg,lights_toon_pars_fragment:Eg,lights_phong_fragment:bg,lights_phong_pars_fragment:Tg,lights_physical_fragment:Ag,lights_physical_pars_fragment:wg,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Lg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Ug,map_fragment:Ng,map_pars_fragment:Og,map_particle_fragment:Fg,map_particle_pars_fragment:Bg,metalnessmap_fragment:zg,metalnessmap_pars_fragment:kg,morphcolor_vertex:Hg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:qg,normal_pars_fragment:$g,normal_pars_vertex:Yg,normal_vertex:jg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:e_,output_fragment:t_,packing:n_,premultiplied_alpha_fragment:i_,project_vertex:r_,dithering_fragment:s_,dithering_pars_fragment:o_,roughnessmap_fragment:a_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:c_,shadowmap_pars_vertex:u_,shadowmap_vertex:h_,shadowmask_pars_fragment:d_,skinbase_vertex:f_,skinning_pars_vertex:p_,skinning_vertex:m_,skinnormal_vertex:g_,specularmap_fragment:__,specularmap_pars_fragment:v_,tonemapping_fragment:x_,tonemapping_pars_fragment:M_,transmission_fragment:S_,transmission_pars_fragment:y_,uv_pars_fragment:E_,uv_pars_vertex:b_,uv_vertex:T_,worldpos_vertex:A_,background_vert:w_,background_frag:R_,backgroundCube_vert:C_,backgroundCube_frag:L_,cube_vert:P_,cube_frag:D_,depth_vert:I_,depth_frag:U_,distanceRGBA_vert:N_,distanceRGBA_frag:O_,equirect_vert:F_,equirect_frag:B_,linedashed_vert:z_,linedashed_frag:k_,meshbasic_vert:H_,meshbasic_frag:G_,meshlambert_vert:V_,meshlambert_frag:W_,meshmatcap_vert:X_,meshmatcap_frag:q_,meshnormal_vert:$_,meshnormal_frag:Y_,meshphong_vert:j_,meshphong_frag:K_,meshphysical_vert:Z_,meshphysical_frag:J_,meshtoon_vert:Q_,meshtoon_frag:ev,points_vert:tv,points_frag:nv,shadow_vert:iv,shadow_frag:rv,sprite_vert:sv,sprite_frag:ov},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},nn={basic:{uniforms:Lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Lt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Lt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Lt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Lt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Lt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Lt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Lt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Lt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Lt([ue.common,ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Lt([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};nn.physical={uniforms:Lt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ur={r:0,b:0,g:0};function av(i,e,t,n,r,s,a){const o=new et(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let b=!1,_=f.isScene===!0?f.background:null;switch(_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),b=!0),i.xr.getEnvironmentBlendMode()){case"opaque":b=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),b=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),b=!0;break}(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Qr)?(u===void 0&&(u=new xn(new ur(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:zi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=_.colorSpace!==ke,(h!==_||d!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new xn(new So(2,2),new ii({name:"BackgroundMaterial",uniforms:zi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=_.colorSpace!==ke,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Ur,bc(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function lv(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(N,F,W,G,q){let Z=!1;if(a){const Q=v(G,W,F);c!==Q&&(c=Q,p(c.object)),Z=f(N,G,W,q),Z&&b(N,G,W,q)}else{const Q=F.wireframe===!0;(c.geometry!==G.id||c.program!==W.id||c.wireframe!==Q)&&(c.geometry=G.id,c.program=W.id,c.wireframe=Q,Z=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,y(N,F,W,G),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function v(N,F,W){const G=W.wireframe===!0;let q=o[N.id];q===void 0&&(q={},o[N.id]=q);let Z=q[F.id];Z===void 0&&(Z={},q[F.id]=Z);let Q=Z[G];return Q===void 0&&(Q=m(d()),Z[G]=Q),Q}function m(N){const F=[],W=[],G=[];for(let q=0;q<r;q++)F[q]=0,W[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:G,object:N,attributes:{},index:null}}function f(N,F,W,G){const q=c.attributes,Z=F.attributes;let Q=0;const he=W.getAttributes();for(const k in he)if(he[k].location>=0){const ne=q[k];let de=Z[k];if(de===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(de=N.instanceColor)),ne===void 0||ne.attribute!==de||de&&ne.data!==de.data)return!0;Q++}return c.attributesNum!==Q||c.index!==G}function b(N,F,W,G){const q={},Z=F.attributes;let Q=0;const he=W.getAttributes();for(const k in he)if(he[k].location>=0){let ne=Z[k];ne===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const de={};de.attribute=ne,ne&&ne.data&&(de.data=ne.data),q[k]=de,Q++}c.attributes=q,c.attributesNum=Q,c.index=G}function _(){const N=c.newAttributes;for(let F=0,W=N.length;F<W;F++)N[F]=0}function T(N){A(N,0)}function A(N,F){const W=c.newAttributes,G=c.enabledAttributes,q=c.attributeDivisors;W[N]=1,G[N]===0&&(i.enableVertexAttribArray(N),G[N]=1),q[N]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,F),q[N]=F)}function P(){const N=c.newAttributes,F=c.enabledAttributes;for(let W=0,G=F.length;W<G;W++)F[W]!==N[W]&&(i.disableVertexAttribArray(W),F[W]=0)}function L(N,F,W,G,q,Z,Q){Q===!0?i.vertexAttribIPointer(N,F,W,q,Z):i.vertexAttribPointer(N,F,W,G,q,Z)}function y(N,F,W,G){if(n.isWebGL2===!1&&(N.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const q=G.attributes,Z=W.getAttributes(),Q=F.defaultAttributeValues;for(const he in Z){const k=Z[he];if(k.location>=0){let te=q[he];if(te===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){const ne=te.normalized,de=te.itemSize,_e=t.get(te);if(_e===void 0)continue;const xe=_e.buffer,De=_e.type,Ce=_e.bytesPerElement,Ye=n.isWebGL2===!0&&(De===i.INT||De===i.UNSIGNED_INT||te.gpuType===oc);if(te.isInterleavedBufferAttribute){const Le=te.data,C=Le.stride,ae=te.offset;if(Le.isInstancedInterleavedBuffer){for(let K=0;K<k.locationSize;K++)A(k.location+K,Le.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let K=0;K<k.locationSize;K++)T(k.location+K);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let K=0;K<k.locationSize;K++)L(k.location+K,de/k.locationSize,De,ne,C*Ce,(ae+de/k.locationSize*K)*Ce,Ye)}else{if(te.isInstancedBufferAttribute){for(let Le=0;Le<k.locationSize;Le++)A(k.location+Le,te.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Le=0;Le<k.locationSize;Le++)T(k.location+Le);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Le=0;Le<k.locationSize;Le++)L(k.location+Le,de/k.locationSize,De,ne,de*Ce,de/k.locationSize*Le*Ce,Ye)}}else if(Q!==void 0){const ne=Q[he];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(k.location,ne);break;case 3:i.vertexAttrib3fv(k.location,ne);break;case 4:i.vertexAttrib4fv(k.location,ne);break;default:i.vertexAttrib1fv(k.location,ne)}}}}P()}function x(){$();for(const N in o){const F=o[N];for(const W in F){const G=F[W];for(const q in G)g(G[q].object),delete G[q];delete F[W]}delete o[N]}}function E(N){if(o[N.id]===void 0)return;const F=o[N.id];for(const W in F){const G=F[W];for(const q in G)g(G[q].object),delete G[q];delete F[W]}delete o[N.id]}function z(N){for(const F in o){const W=o[F];if(W[N.id]===void 0)continue;const G=W[N.id];for(const q in G)g(G[q].object),delete G[q];delete W[N.id]}}function $(){I(),u=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:I,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:T,disableUnusedAttributes:P}}function cv(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(r)d=i,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function uv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,T=a||e.has("OES_texture_float"),A=_&&T,P=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:P}}function hv(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new $n,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,_=b*4;let T=f.clippingState||null;l.value=T,T=u(g,d,_,p);for(let A=0;A!==_;++A)T[A]=t[A];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,T=p;_!==v;++_,T+=4)a.copy(h[_]).applyMatrix4(b,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function dv(i){let e=new WeakMap;function t(a,o){return o===Yr?a.mapping=Oi:o===$s&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Yr||o===$s)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rm(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fv extends Tc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,Ka=[.125,.215,.35,.446,.526,.582],jn=20,Os=new fv,Za=new et;let Fs=null;const Yn=(1+Math.sqrt(5))/2,wi=1/Yn,Ja=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Yn,wi),new U(0,Yn,-wi),new U(wi,0,Yn),new U(-wi,0,Yn),new U(Yn,wi,0),new U(-Yn,wi,0)];class Qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Fs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fs),e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:tr,format:Jt,colorSpace:on,depthBuffer:!1},r=el(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pv(s)),this._blurMaterial=mv(s,e,t)}return r}_compileMaterial(e){const t=new xn(this._lodPlanes[0],e);this._renderer.compile(t,Os)}_sceneToCubeUV(e,t,n,r){const o=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Za),u.toneMapping=yn,u.autoClear=!1;const p=new Sc({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new xn(new ur,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Za),v=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;Nr(r,b*_,f>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Oi||e.mapping===Fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new xn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Os)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ja[(r-1)%Ja.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*jn-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):jn;m>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const f=[];let b=0;for(let L=0;L<jn;++L){const y=L/v,x=Math.exp(-y*y/2);f.push(x),L===0?b+=x:L<m&&(b+=2*x)}for(let L=0;L<f.length;L++)f[L]=f[L]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const T=this._sizeLods[r],A=3*T*(r>_-Li?r-_+Li:0),P=4*(this._cubeSize-T);Nr(t,A,P,3*T,2*T),l.setRenderTarget(t),l.render(h,Os)}}function pv(i){const e=[],t=[],n=[];let r=i;const s=i-Li+1+Ka.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Li?l=Ka[a-i+Li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,b=new Float32Array(v*g*p),_=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,y=P>2?0:-1,x=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];b.set(x,v*g*P),_.set(d,m*g*P);const E=[P,P,P,P,P,P];T.set(E,f*g*P)}const A=new Bn;A.setAttribute("position",new sn(b,v)),A.setAttribute("uv",new sn(_,m)),A.setAttribute("faceIndex",new sn(T,f)),e.push(A),r>Li&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function el(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function mv(i,e,t){const n=new Float32Array(jn),r=new U(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function tl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function nl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function yo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Yr||l===$s,u=l===Oi||l===Fi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Qa(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Qa(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _v(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function vv(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let _=0,T=b.length;_<T;_+=3){const A=b[_+0],P=b[_+1],L=b[_+2];d.push(A,P,P,L,L,A)}}else{const b=g.array;v=g.version;for(let _=0,T=b.length/3-1;_<T;_+=3){const A=_+0,P=_+1,L=_+2;d.push(A,P,P,L,L,A)}}const m=new(mc(d)?Ec:yc)(d,1);m.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function xv(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){i.drawElements(s,p,o,d*l),t.update(p,s,1)}function h(d,p,g){if(g===0)return;let v,m;if(r)v=i,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,o,d*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Mv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Sv(i,e){return i[0]-e[0]}function yv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ev(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new bt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=s.get(u);if(v===void 0||v.count!==g){let N=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();const b=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let y=0;b===!0&&(y=1),_===!0&&(y=2),T===!0&&(y=3);let x=u.attributes.position.count*y,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const z=new Float32Array(x*E*4*g),$=new vc(z,x,E,g);$.type=In,$.needsUpdate=!0;const I=y*4;for(let F=0;F<g;F++){const W=A[F],G=P[F],q=L[F],Z=x*E*4*F;for(let Q=0;Q<W.count;Q++){const he=Q*I;b===!0&&(a.fromBufferAttribute(W,Q),z[Z+he+0]=a.x,z[Z+he+1]=a.y,z[Z+he+2]=a.z,z[Z+he+3]=0),_===!0&&(a.fromBufferAttribute(G,Q),z[Z+he+4]=a.x,z[Z+he+5]=a.y,z[Z+he+6]=a.z,z[Z+he+7]=0),T===!0&&(a.fromBufferAttribute(q,Q),z[Z+he+8]=a.x,z[Z+he+9]=a.y,z[Z+he+10]=a.z,z[Z+he+11]=q.itemSize===4?a.w:1)}}v={count:g,texture:$,size:new le(x,E)},s.set(u,v),u.addEventListener("dispose",N)}let m=0;for(let b=0;b<d.length;b++)m+=d[b];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",f),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const p=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<p;_++){const T=g[_];T[0]=_,T[1]=d[_]}g.sort(yv);for(let _=0;_<8;_++)_<p&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Sv);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let _=0;_<8;_++){const T=o[_],A=T[0],P=T[1];A!==Number.MAX_SAFE_INTEGER&&P?(v&&u.getAttribute("morphTarget"+_)!==v[A]&&u.setAttribute("morphTarget"+_,v[A]),m&&u.getAttribute("morphNormal"+_)!==m[A]&&u.setAttribute("morphNormal"+_,m[A]),r[_]=P,f+=P):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const b=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function bv(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER)),h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Cc=new Ut,Lc=new vc,Pc=new hm,Dc=new Ac,il=[],rl=[],sl=new Float32Array(16),ol=new Float32Array(9),al=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=il[r];if(s===void 0&&(s=new Float32Array(r),il[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ts(i,e){let t=rl[e];t===void 0&&(t=new Int32Array(e),rl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Cv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;al.set(n),i.uniformMatrix2fv(this.addr,!1,al),vt(t,n)}}function Lv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;ol.set(n),i.uniformMatrix3fv(this.addr,!1,ol),vt(t,n)}}function Pv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;sl.set(n),i.uniformMatrix4fv(this.addr,!1,sl),vt(t,n)}}function Dv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Ov(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function kv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Cc,r)}function Hv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pc,r)}function Gv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Dc,r)}function Vv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Lc,r)}function Wv(i){switch(i){case 5126:return Tv;case 35664:return Av;case 35665:return wv;case 35666:return Rv;case 35674:return Cv;case 35675:return Lv;case 35676:return Pv;case 5124:case 35670:return Dv;case 35667:case 35671:return Iv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return Ov;case 36294:return Fv;case 36295:return Bv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Vv}}function Xv(i,e){i.uniform1fv(this.addr,e)}function qv(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function $v(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function Yv(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function jv(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kv(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zv(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jv(i,e){i.uniform1iv(this.addr,e)}function Qv(i,e){i.uniform2iv(this.addr,e)}function e0(i,e){i.uniform3iv(this.addr,e)}function t0(i,e){i.uniform4iv(this.addr,e)}function n0(i,e){i.uniform1uiv(this.addr,e)}function i0(i,e){i.uniform2uiv(this.addr,e)}function r0(i,e){i.uniform3uiv(this.addr,e)}function s0(i,e){i.uniform4uiv(this.addr,e)}function o0(i,e,t){const n=this.cache,r=e.length,s=ts(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Cc,s[a])}function a0(i,e,t){const n=this.cache,r=e.length,s=ts(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Pc,s[a])}function l0(i,e,t){const n=this.cache,r=e.length,s=ts(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Dc,s[a])}function c0(i,e,t){const n=this.cache,r=e.length,s=ts(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Lc,s[a])}function u0(i){switch(i){case 5126:return Xv;case 35664:return qv;case 35665:return $v;case 35666:return Yv;case 35674:return jv;case 35675:return Kv;case 35676:return Zv;case 5124:case 35670:return Jv;case 35667:case 35671:return Qv;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}class h0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Wv(t.type)}}class d0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=u0(t.type)}}class f0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function ll(i,e){i.seq.push(e),i.map[e.id]=e}function p0(i,e,t){const n=i.name,r=n.length;for(Bs.lastIndex=0;;){const s=Bs.exec(n),a=Bs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ll(t,c===void 0?new h0(o,i,e):new d0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new f0(o),ll(t,h)),t=h}}}class Gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);p0(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function cl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let m0=0;function g0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function _0(i){switch(i){case on:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function ul(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+g0(i.getShaderSource(e),a)}else return r}function v0(i,e){const t=_0(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function x0(i,e){let t;switch(e){case Cp:t="Linear";break;case Lp:t="Reinhard";break;case Pp:t="OptimizedCineon";break;case Dp:t="ACESFilmic";break;case Ip:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function M0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function S0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Yi(i){return i!==""}function hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qs(i){return i.replace(E0,b0)}function b0(i,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Qs(t)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(T0,A0)}function A0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ap?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function R0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Fi:e="ENVMAP_TYPE_CUBE";break;case Qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function L0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rc:e="ENVMAP_BLENDING_MULTIPLY";break;case wp:e="ENVMAP_BLENDING_MIX";break;case Rp:e="ENVMAP_BLENDING_ADD";break}return e}function P0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function D0(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=w0(t),c=R0(t),u=C0(t),h=L0(t),d=P0(t),p=t.isWebGL2?"":M0(t),g=S0(s),v=r.createProgram();let m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yi).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yi).join(`
`),f.length>0&&(f+=`
`)):(m=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),f=[p,pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?He.tonemapping_pars_fragment:"",t.toneMapping!==yn?x0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,v0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),a=Qs(a),a=hl(a,t),a=dl(a,t),o=Qs(o),o=hl(o,t),o=dl(o,t),a=fl(a),o=fl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=b+m+a,T=b+f+o,A=cl(r,r.VERTEX_SHADER,_),P=cl(r,r.FRAGMENT_SHADER,T);if(r.attachShader(v,A),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),i.debug.checkShaderErrors){const x=r.getProgramInfoLog(v).trim(),E=r.getShaderInfoLog(A).trim(),z=r.getShaderInfoLog(P).trim();let $=!0,I=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,A,P);else{const N=ul(r,A,"vertex"),F=ul(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+N+`
`+F)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(E===""||z==="")&&(I=!1);I&&(this.diagnostics={runnable:$,programLog:x,vertexShader:{log:E,prefix:m},fragmentShader:{log:z,prefix:f}})}r.deleteShader(A),r.deleteShader(P);let L;this.getUniforms=function(){return L===void 0&&(L=new Gr(r,v)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=y0(r,v)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=P,this}let I0=0;class U0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new N0(e),t.set(e,n)),n}}class N0{constructor(e){this.id=I0++,this.code=e,this.usedTimes=0}}function O0(i,e,t,n,r,s,a){const o=new xc,l=new U0,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,E,z,$,I){const N=$.fog,F=I.geometry,W=x.isMeshStandardMaterial?$.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),q=G&&G.mapping===Qr?G.image.height:null,Z=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,he=Q!==void 0?Q.length:0;let k=0;F.morphAttributes.position!==void 0&&(k=1),F.morphAttributes.normal!==void 0&&(k=2),F.morphAttributes.color!==void 0&&(k=3);let te,ne,de,_e;if(Z){const dt=nn[Z];te=dt.vertexShader,ne=dt.fragmentShader}else te=x.vertexShader,ne=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const xe=i.getRenderTarget(),De=I.isInstancedMesh===!0,Ce=!!x.map,Ye=!!x.matcap,Le=!!G,C=!!x.aoMap,ae=!!x.lightMap,K=!!x.bumpMap,se=!!x.normalMap,J=!!x.displacementMap,Te=!!x.emissiveMap,me=!!x.metalnessMap,ve=!!x.roughnessMap,Ie=x.anisotropy>0,We=x.clearcoat>0,st=x.iridescence>0,w=x.sheen>0,M=x.transmission>0,X=Ie&&!!x.anisotropyMap,oe=We&&!!x.clearcoatMap,re=We&&!!x.clearcoatNormalMap,R=We&&!!x.clearcoatRoughnessMap,ee=st&&!!x.iridescenceMap,ie=st&&!!x.iridescenceThicknessMap,H=w&&!!x.sheenColorMap,ye=w&&!!x.sheenRoughnessMap,we=!!x.specularMap,Ae=!!x.specularColorMap,Ee=!!x.specularIntensityMap,Me=M&&!!x.transmissionMap,Ue=M&&!!x.thicknessMap,qe=!!x.gradientMap,D=!!x.alphaMap,fe=x.alphaTest>0,V=!!x.extensions,ce=!!F.attributes.uv1,ge=!!F.attributes.uv2,Ze=!!F.attributes.uv3;return{isWebGL2:u,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:te,fragmentShader:ne,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:De,instancingColor:De&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:on,map:Ce,matcap:Ye,envMap:Le,envMapMode:Le&&G.mapping,envMapCubeUVHeight:q,aoMap:C,lightMap:ae,bumpMap:K,normalMap:se,displacementMap:d&&J,emissiveMap:Te,normalMapObjectSpace:se&&x.normalMapType===qp,normalMapTangentSpace:se&&x.normalMapType===fc,metalnessMap:me,roughnessMap:ve,anisotropy:Ie,anisotropyMap:X,clearcoat:We,clearcoatMap:oe,clearcoatNormalMap:re,clearcoatRoughnessMap:R,iridescence:st,iridescenceMap:ee,iridescenceThicknessMap:ie,sheen:w,sheenColorMap:H,sheenRoughnessMap:ye,specularMap:we,specularColorMap:Ae,specularIntensityMap:Ee,transmission:M,transmissionMap:Me,thicknessMap:Ue,gradientMap:qe,opaque:x.transparent===!1&&x.blending===Di,alphaMap:D,alphaTest:fe,combine:x.combine,mapUv:Ce&&v(x.map.channel),aoMapUv:C&&v(x.aoMap.channel),lightMapUv:ae&&v(x.lightMap.channel),bumpMapUv:K&&v(x.bumpMap.channel),normalMapUv:se&&v(x.normalMap.channel),displacementMapUv:J&&v(x.displacementMap.channel),emissiveMapUv:Te&&v(x.emissiveMap.channel),metalnessMapUv:me&&v(x.metalnessMap.channel),roughnessMapUv:ve&&v(x.roughnessMap.channel),anisotropyMapUv:X&&v(x.anisotropyMap.channel),clearcoatMapUv:oe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:H&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(x.sheenRoughnessMap.channel),specularMapUv:we&&v(x.specularMap.channel),specularColorMapUv:Ae&&v(x.specularColorMap.channel),specularIntensityMapUv:Ee&&v(x.specularIntensityMap.channel),transmissionMapUv:Me&&v(x.transmissionMap.channel),thicknessMapUv:Ue&&v(x.thicknessMap.channel),alphaMapUv:D&&v(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(se||Ie),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:ge,vertexUv3s:Ze,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Ce||D),fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:k,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:yn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===It,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:V&&x.extensions.derivatives===!0,extensionFragDepth:V&&x.extensions.fragDepth===!0,extensionDrawBuffers:V&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:V&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)E.push(z),E.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(b(E,x),_(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function b(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function _(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),x.push(o.mask)}function T(x){const E=g[x.type];let z;if(E){const $=nn[E];z=bm.clone($.uniforms)}else z=x.uniforms;return z}function A(x,E){let z;for(let $=0,I=c.length;$<I;$++){const N=c[$];if(N.cacheKey===E){z=N,++z.usedTimes;break}}return z===void 0&&(z=new D0(i,E,x,s),c.push(z)),z}function P(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function y(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:A,releaseProgram:P,releaseShaderCache:L,programs:c,dispose:y}}function F0(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function B0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,p,g,v,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||B0),n.length>1&&n.sort(d||ml),r.length>1&&r.sort(d||ml)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function z0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new gl,i.set(n,[a])):r>=s.length?(a=new gl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function k0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new et};break;case"SpotLight":t={position:new U,direction:new U,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function H0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let G0=0;function V0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function W0(i,e){const t=new k0,n=H0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new Et,o=new Et;function l(u,h){let d=0,p=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let v=0,m=0,f=0,b=0,_=0,T=0,A=0,P=0,L=0,y=0;u.sort(V0);const x=h===!0?Math.PI:1;for(let z=0,$=u.length;z<$;z++){const I=u[z],N=I.color,F=I.intensity,W=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=N.r*F*x,p+=N.g*F*x,g+=N.b*F*x;else if(I.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(I.sh.coefficients[q],F);else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*x),I.castShadow){const Z=I.shadow,Q=n.get(I);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,r.directionalShadow[v]=Q,r.directionalShadowMap[v]=G,r.directionalShadowMatrix[v]=I.shadow.matrix,T++}r.directional[v]=q,v++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(N).multiplyScalar(F*x),q.distance=W,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,r.spot[f]=q;const Z=I.shadow;if(I.map&&(r.spotLightMap[L]=I.map,L++,Z.updateMatrices(I),I.castShadow&&y++),r.spotLightMatrix[f]=Z.matrix,I.castShadow){const Q=n.get(I);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,r.spotShadow[f]=Q,r.spotShadowMap[f]=G,P++}f++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(N).multiplyScalar(F),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),r.rectArea[b]=q,b++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*x),q.distance=I.distance,q.decay=I.decay,I.castShadow){const Z=I.shadow,Q=n.get(I);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,r.pointShadow[m]=Q,r.pointShadowMap[m]=G,r.pointShadowMatrix[m]=I.shadow.matrix,A++}r.point[m]=q,m++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(F*x),q.groundColor.copy(I.groundColor).multiplyScalar(F*x),r.hemi[_]=q,_++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==v||E.pointLength!==m||E.spotLength!==f||E.rectAreaLength!==b||E.hemiLength!==_||E.numDirectionalShadows!==T||E.numPointShadows!==A||E.numSpotShadows!==P||E.numSpotMaps!==L)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=b,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=P+L-y,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=y,E.directionalLength=v,E.pointLength=m,E.spotLength=f,E.rectAreaLength=b,E.hemiLength=_,E.numDirectionalShadows=T,E.numPointShadows=A,E.numSpotShadows=P,E.numSpotMaps=L,r.version=G0++)}function c(u,h){let d=0,p=0,g=0,v=0,m=0;const f=h.matrixWorldInverse;for(let b=0,_=u.length;b<_;b++){const T=u[b];if(T.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),d++}else if(T.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),g++}else if(T.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(f),o.identity(),a.copy(T.matrixWorld),a.premultiply(f),o.extractRotation(a),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function _l(i,e){const t=new W0(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function X0(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new _l(i,e),t.set(s,[l])):a>=o.length?(l=new _l(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class q0 extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $0 extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function K0(i,e,t){let n=new wc;const r=new le,s=new le,a=new bt,o=new q0({depthPacking:Xp}),l=new $0,c={},u=t.maxTextureSize,h={[Fn]:It,[It]:Fn,[rn]:rn},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Y0,fragmentShader:j0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bn;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let f=this.type;this.render=function(A,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Un),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const $=f!==_n&&this.type===_n,I=f===_n&&this.type!==_n;for(let N=0,F=A.length;N<F;N++){const W=A[N],G=W.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const q=G.getFrameExtents();if(r.multiply(q),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,G.mapSize.y=s.y)),G.map===null||$===!0||I===!0){const Q=this.type!==_n?{minFilter:Pt,magFilter:Pt}:{};G.map!==null&&G.map.dispose(),G.map=new ti(r.x,r.y,Q),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const Z=G.getViewportCount();for(let Q=0;Q<Z;Q++){const he=G.getViewport(Q);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),z.viewport(a),G.updateMatrices(W,Q),n=G.getFrustum(),T(P,L,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===_n&&b(G,L),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,E)};function b(A,P){const L=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,L,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,L,p,v,null)}function _(A,P,L,y){let x=null;const E=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)x=E;else if(x=L.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const z=x.uuid,$=P.uuid;let I=c[z];I===void 0&&(I={},c[z]=I);let N=I[$];N===void 0&&(N=x.clone(),I[$]=N),x=N}if(x.visible=P.visible,x.wireframe=P.wireframe,y===_n?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:h[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=i.properties.get(x);z.light=L}return x}function T(A,P,L,y,x){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===_n)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const $=e.update(A),I=A.material;if(Array.isArray(I)){const N=$.groups;for(let F=0,W=N.length;F<W;F++){const G=N[F],q=I[G.materialIndex];if(q&&q.visible){const Z=_(A,q,y,x);i.renderBufferDirect(L,null,$,Z,A,G)}}}else if(I.visible){const N=_(A,I,y,x);i.renderBufferDirect(L,null,$,N,A,null)}}const z=A.children;for(let $=0,I=z.length;$<I;$++)T(z[$],P,L,y,x)}}function Z0(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const fe=new bt;let V=null;const ce=new bt(0,0,0,0);return{setMask:function(ge){V!==ge&&!D&&(i.colorMask(ge,ge,ge,ge),V=ge)},setLocked:function(ge){D=ge},setClear:function(ge,Ze,lt,dt,zn){zn===!0&&(ge*=dt,Ze*=dt,lt*=dt),fe.set(ge,Ze,lt,dt),ce.equals(fe)===!1&&(i.clearColor(ge,Ze,lt,dt),ce.copy(fe))},reset:function(){D=!1,V=null,ce.set(-1,0,0,0)}}}function s(){let D=!1,fe=null,V=null,ce=null;return{setTest:function(ge){ge?xe(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(ge){fe!==ge&&!D&&(i.depthMask(ge),fe=ge)},setFunc:function(ge){if(V!==ge){switch(ge){case Mp:i.depthFunc(i.NEVER);break;case Sp:i.depthFunc(i.ALWAYS);break;case yp:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case Ep:i.depthFunc(i.EQUAL);break;case bp:i.depthFunc(i.GEQUAL);break;case Tp:i.depthFunc(i.GREATER);break;case Ap:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=ge}},setLocked:function(ge){D=ge},setClear:function(ge){ce!==ge&&(i.clearDepth(ge),ce=ge)},reset:function(){D=!1,fe=null,V=null,ce=null}}}function a(){let D=!1,fe=null,V=null,ce=null,ge=null,Ze=null,lt=null,dt=null,zn=null;return{setTest:function(ct){D||(ct?xe(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(ct){fe!==ct&&!D&&(i.stencilMask(ct),fe=ct)},setFunc:function(ct,tn,Rt){(V!==ct||ce!==tn||ge!==Rt)&&(i.stencilFunc(ct,tn,Rt),V=ct,ce=tn,ge=Rt)},setOp:function(ct,tn,Rt){(Ze!==ct||lt!==tn||dt!==Rt)&&(i.stencilOp(ct,tn,Rt),Ze=ct,lt=tn,dt=Rt)},setLocked:function(ct){D=ct},setClear:function(ct){zn!==ct&&(i.clearStencil(ct),zn=ct)},reset:function(){D=!1,fe=null,V=null,ce=null,ge=null,Ze=null,lt=null,dt=null,zn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,v=[],m=null,f=!1,b=null,_=null,T=null,A=null,P=null,L=null,y=null,x=!1,E=null,z=null,$=null,I=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=G>=2);let Z=null,Q={};const he=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),te=new bt().fromArray(he),ne=new bt().fromArray(k);function de(D,fe,V,ce){const ge=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(D,Ze),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<V;lt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(fe,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(fe+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return Ze}const _e={};_e[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(i.DEPTH_TEST),l.setFunc(qs),J(!1),Te(na),xe(i.CULL_FACE),K(Un);function xe(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function De(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ce(D,fe){return p[D]!==fe?(i.bindFramebuffer(D,fe),p[D]=fe,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=fe),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=fe)),!0):!1}function Ye(D,fe){let V=v,ce=!1;if(D)if(V=g.get(fe),V===void 0&&(V=[],g.set(fe,V)),D.isWebGLMultipleRenderTargets){const ge=D.texture;if(V.length!==ge.length||V[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,lt=ge.length;Ze<lt;Ze++)V[Ze]=i.COLOR_ATTACHMENT0+Ze;V.length=ge.length,ce=!0}}else V[0]!==i.COLOR_ATTACHMENT0&&(V[0]=i.COLOR_ATTACHMENT0,ce=!0);else V[0]!==i.BACK&&(V[0]=i.BACK,ce=!0);ce&&(t.isWebGL2?i.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Le(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const C={[Ri]:i.FUNC_ADD,[cp]:i.FUNC_SUBTRACT,[up]:i.FUNC_REVERSE_SUBTRACT};if(n)C[oa]=i.MIN,C[aa]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(C[oa]=D.MIN_EXT,C[aa]=D.MAX_EXT)}const ae={[hp]:i.ZERO,[dp]:i.ONE,[fp]:i.SRC_COLOR,[nc]:i.SRC_ALPHA,[xp]:i.SRC_ALPHA_SATURATE,[_p]:i.DST_COLOR,[mp]:i.DST_ALPHA,[pp]:i.ONE_MINUS_SRC_COLOR,[ic]:i.ONE_MINUS_SRC_ALPHA,[vp]:i.ONE_MINUS_DST_COLOR,[gp]:i.ONE_MINUS_DST_ALPHA};function K(D,fe,V,ce,ge,Ze,lt,dt){if(D===Un){f===!0&&(De(i.BLEND),f=!1);return}if(f===!1&&(xe(i.BLEND),f=!0),D!==lp){if(D!==b||dt!==x){if((_!==Ri||P!==Ri)&&(i.blendEquation(i.FUNC_ADD),_=Ri,P=Ri),dt)switch(D){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.ONE,i.ONE);break;case ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,A=null,L=null,y=null,b=D,x=dt}return}ge=ge||fe,Ze=Ze||V,lt=lt||ce,(fe!==_||ge!==P)&&(i.blendEquationSeparate(C[fe],C[ge]),_=fe,P=ge),(V!==T||ce!==A||Ze!==L||lt!==y)&&(i.blendFuncSeparate(ae[V],ae[ce],ae[Ze],ae[lt]),T=V,A=ce,L=Ze,y=lt),b=D,x=!1}function se(D,fe){D.side===rn?De(i.CULL_FACE):xe(i.CULL_FACE);let V=D.side===It;fe&&(V=!V),J(V),D.blending===Di&&D.transparent===!1?K(Un):K(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const ce=D.stencilWrite;c.setTest(ce),ce&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function Te(D){D!==sp?(xe(i.CULL_FACE),D!==z&&(D===na?i.cullFace(i.BACK):D===op?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),z=D}function me(D){D!==$&&(W&&i.lineWidth(D),$=D)}function ve(D,fe,V){D?(xe(i.POLYGON_OFFSET_FILL),(I!==fe||N!==V)&&(i.polygonOffset(fe,V),I=fe,N=V)):De(i.POLYGON_OFFSET_FILL)}function Ie(D){D?xe(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function We(D){D===void 0&&(D=i.TEXTURE0+F-1),Z!==D&&(i.activeTexture(D),Z=D)}function st(D,fe,V){V===void 0&&(Z===null?V=i.TEXTURE0+F-1:V=Z);let ce=Q[V];ce===void 0&&(ce={type:void 0,texture:void 0},Q[V]=ce),(ce.type!==D||ce.texture!==fe)&&(Z!==V&&(i.activeTexture(V),Z=V),i.bindTexture(D,fe||_e[D]),ce.type=D,ce.texture=fe)}function w(){const D=Q[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(D){te.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function Ee(D){ne.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function Me(D,fe){let V=h.get(fe);V===void 0&&(V=new WeakMap,h.set(fe,V));let ce=V.get(D);ce===void 0&&(ce=i.getUniformBlockIndex(fe,D.name),V.set(D,ce))}function Ue(D,fe){const ce=h.get(fe).get(D);u.get(fe)!==ce&&(i.uniformBlockBinding(fe,ce,D.__bindingPointIndex),u.set(fe,ce))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,Q={},p={},g=new WeakMap,v=[],m=null,f=!1,b=null,_=null,T=null,A=null,P=null,L=null,y=null,x=!1,E=null,z=null,$=null,I=null,N=null,te.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:xe,disable:De,bindFramebuffer:Ce,drawBuffers:Ye,useProgram:Le,setBlending:K,setMaterial:se,setFlipSided:J,setCullFace:Te,setLineWidth:me,setPolygonOffset:ve,setScissorTest:Ie,activeTexture:We,bindTexture:st,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:X,texImage2D:ye,texImage3D:we,updateUBOMapping:Me,uniformBlockBinding:Ue,texStorage2D:ie,texStorage3D:H,texSubImage2D:oe,texSubImage3D:re,compressedTexSubImage2D:R,compressedTexSubImage3D:ee,scissor:Ae,viewport:Ee,reset:qe}}function J0(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,M){return f?new OffscreenCanvas(w,M):nr("canvas")}function _(w,M,X,oe){let re=1;if((w.width>oe||w.height>oe)&&(re=oe/Math.max(w.width,w.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const R=M?Js:Math.floor,ee=R(re*w.width),ie=R(re*w.height);v===void 0&&(v=b(ee,ie));const H=X?b(ee,ie):v;return H.width=ee,H.height=ie,H.getContext("2d").drawImage(w,0,0,ee,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ee+"x"+ie+")."),H}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function T(w){return Ua(w.width)&&Ua(w.height)}function A(w){return o?!1:w.wrapS!==Zt||w.wrapT!==Zt||w.minFilter!==Pt&&w.minFilter!==Gt}function P(w,M){return w.generateMipmaps&&M&&w.minFilter!==Pt&&w.minFilter!==Gt}function L(w){i.generateMipmap(w)}function y(w,M,X,oe,re=!1){if(o===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let R=M;return M===i.RED&&(X===i.FLOAT&&(R=i.R32F),X===i.HALF_FLOAT&&(R=i.R16F),X===i.UNSIGNED_BYTE&&(R=i.R8)),M===i.RG&&(X===i.FLOAT&&(R=i.RG32F),X===i.HALF_FLOAT&&(R=i.RG16F),X===i.UNSIGNED_BYTE&&(R=i.RG8)),M===i.RGBA&&(X===i.FLOAT&&(R=i.RGBA32F),X===i.HALF_FLOAT&&(R=i.RGBA16F),X===i.UNSIGNED_BYTE&&(R=oe===ke&&re===!1?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(R=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(R=i.RGB5_A1)),(R===i.R16F||R===i.R32F||R===i.RG16F||R===i.RG32F||R===i.RGBA16F||R===i.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function x(w,M,X){return P(w,X)===!0||w.isFramebufferTexture&&w.minFilter!==Pt&&w.minFilter!==Gt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function E(w){return w===Pt||w===la||w===us?i.NEAREST:i.LINEAR}function z(w){const M=w.target;M.removeEventListener("dispose",z),I(M),M.isVideoTexture&&g.delete(M)}function $(w){const M=w.target;M.removeEventListener("dispose",$),F(M)}function I(w){const M=n.get(w);if(M.__webglInit===void 0)return;const X=w.source,oe=m.get(X);if(oe){const re=oe[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(w),Object.keys(oe).length===0&&m.delete(X)}n.remove(w)}function N(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const X=w.source,oe=m.get(X);delete oe[M.__cacheKey],a.memory.textures--}function F(w){const M=w.texture,X=n.get(w),oe=n.get(M);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)i.deleteFramebuffer(X.__webglFramebuffer[re]),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[re]);else{if(i.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let re=0,R=M.length;re<R;re++){const ee=n.get(M[re]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(M[re])}n.remove(M),n.remove(w)}let W=0;function G(){W=0}function q(){const w=W;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),W+=1,w}function Z(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function Q(w,M){const X=n.get(w);if(w.isVideoTexture&&We(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){const oe=w.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(X,w,M);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function he(w,M){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Ce(X,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function k(w,M){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Ce(X,w,M);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function te(w,M){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Ye(X,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}const ne={[Ys]:i.REPEAT,[Zt]:i.CLAMP_TO_EDGE,[js]:i.MIRRORED_REPEAT},de={[Pt]:i.NEAREST,[la]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[Up]:i.LINEAR_MIPMAP_NEAREST,[er]:i.LINEAR_MIPMAP_LINEAR},_e={[Yp]:i.NEVER,[tm]:i.ALWAYS,[jp]:i.LESS,[Zp]:i.LEQUAL,[Kp]:i.EQUAL,[em]:i.GEQUAL,[Jp]:i.GREATER,[Qp]:i.NOTEQUAL};function xe(w,M,X){if(X?(i.texParameteri(w,i.TEXTURE_WRAP_S,ne[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ne[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ne[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,de[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,de[M.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Zt||M.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,E(M.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==Pt&&M.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Pt||M.minFilter!==us&&M.minFilter!==er||M.type===In&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===tr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(w,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function De(w,M){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",z));const oe=M.source;let re=m.get(oe);re===void 0&&(re={},m.set(oe,re));const R=Z(M);if(R!==w.__cacheKey){re[R]===void 0&&(re[R]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),re[R].usedTimes++;const ee=re[w.__cacheKey];ee!==void 0&&(re[w.__cacheKey].usedTimes--,ee.usedTimes===0&&N(M)),w.__cacheKey=R,w.__webglTexture=re[R].texture}return X}function Ce(w,M,X){let oe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=i.TEXTURE_3D);const re=De(w,M),R=M.source;t.bindTexture(oe,w.__webglTexture,i.TEXTURE0+X);const ee=n.get(R);if(R.version!==ee.__version||re===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ie=A(M)&&T(M.image)===!1;let H=_(M.image,ie,!1,u);H=st(M,H);const ye=T(H)||o,we=s.convert(M.format,M.colorSpace);let Ae=s.convert(M.type),Ee=y(M.internalFormat,we,Ae,M.colorSpace);xe(oe,M,ye);let Me;const Ue=M.mipmaps,qe=o&&M.isVideoTexture!==!0,D=ee.__version===void 0||re===!0,fe=x(M,H,ye);if(M.isDepthTexture)Ee=i.DEPTH_COMPONENT,o?M.type===In?Ee=i.DEPTH_COMPONENT32F:M.type===Dn?Ee=i.DEPTH_COMPONENT24:M.type===Zn?Ee=i.DEPTH24_STENCIL8:Ee=i.DEPTH_COMPONENT16:M.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Jn&&Ee===i.DEPTH_COMPONENT&&M.type!==xo&&M.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Dn,Ae=s.convert(M.type)),M.format===Bi&&Ee===i.DEPTH_COMPONENT&&(Ee=i.DEPTH_STENCIL,M.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Zn,Ae=s.convert(M.type))),D&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ee,H.width,H.height):t.texImage2D(i.TEXTURE_2D,0,Ee,H.width,H.height,0,we,Ae,null));else if(M.isDataTexture)if(Ue.length>0&&ye){qe&&D&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,Ue[0].width,Ue[0].height);for(let V=0,ce=Ue.length;V<ce;V++)Me=Ue[V],qe?t.texSubImage2D(i.TEXTURE_2D,V,0,0,Me.width,Me.height,we,Ae,Me.data):t.texImage2D(i.TEXTURE_2D,V,Ee,Me.width,Me.height,0,we,Ae,Me.data);M.generateMipmaps=!1}else qe?(D&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,H.width,H.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,H.width,H.height,we,Ae,H.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,H.width,H.height,0,we,Ae,H.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&D&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ee,Ue[0].width,Ue[0].height,H.depth);for(let V=0,ce=Ue.length;V<ce;V++)Me=Ue[V],M.format!==Jt?we!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Me.width,Me.height,H.depth,we,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ee,Me.width,Me.height,H.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Me.width,Me.height,H.depth,we,Ae,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Ee,Me.width,Me.height,H.depth,0,we,Ae,Me.data)}else{qe&&D&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,Ue[0].width,Ue[0].height);for(let V=0,ce=Ue.length;V<ce;V++)Me=Ue[V],M.format!==Jt?we!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Ee,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,V,0,0,Me.width,Me.height,we,Ae,Me.data):t.texImage2D(i.TEXTURE_2D,V,Ee,Me.width,Me.height,0,we,Ae,Me.data)}else if(M.isDataArrayTexture)qe?(D&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ee,H.width,H.height,H.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,we,Ae,H.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,H.width,H.height,H.depth,0,we,Ae,H.data);else if(M.isData3DTexture)qe?(D&&t.texStorage3D(i.TEXTURE_3D,fe,Ee,H.width,H.height,H.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,we,Ae,H.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,H.width,H.height,H.depth,0,we,Ae,H.data);else if(M.isFramebufferTexture){if(D)if(qe)t.texStorage2D(i.TEXTURE_2D,fe,Ee,H.width,H.height);else{let V=H.width,ce=H.height;for(let ge=0;ge<fe;ge++)t.texImage2D(i.TEXTURE_2D,ge,Ee,V,ce,0,we,Ae,null),V>>=1,ce>>=1}}else if(Ue.length>0&&ye){qe&&D&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,Ue[0].width,Ue[0].height);for(let V=0,ce=Ue.length;V<ce;V++)Me=Ue[V],qe?t.texSubImage2D(i.TEXTURE_2D,V,0,0,we,Ae,Me):t.texImage2D(i.TEXTURE_2D,V,Ee,we,Ae,Me);M.generateMipmaps=!1}else qe?(D&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,H.width,H.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ae,H)):t.texImage2D(i.TEXTURE_2D,0,Ee,we,Ae,H);P(M,ye)&&L(oe),ee.__version=R.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Ye(w,M,X){if(M.image.length!==6)return;const oe=De(w,M),re=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+X);const R=n.get(re);if(re.version!==R.__version||oe===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ee=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,H=[];for(let V=0;V<6;V++)!ee&&!ie?H[V]=_(M.image[V],!1,!0,c):H[V]=ie?M.image[V].image:M.image[V],H[V]=st(M,H[V]);const ye=H[0],we=T(ye)||o,Ae=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),Me=y(M.internalFormat,Ae,Ee,M.colorSpace),Ue=o&&M.isVideoTexture!==!0,qe=R.__version===void 0||oe===!0;let D=x(M,ye,we);xe(i.TEXTURE_CUBE_MAP,M,we);let fe;if(ee){Ue&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,D,Me,ye.width,ye.height);for(let V=0;V<6;V++){fe=H[V].mipmaps;for(let ce=0;ce<fe.length;ce++){const ge=fe[ce];M.format!==Jt?Ae!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce,0,0,ge.width,ge.height,Ae,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce,Me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce,0,0,ge.width,ge.height,Ae,Ee,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce,Me,ge.width,ge.height,0,Ae,Ee,ge.data)}}}else{fe=M.mipmaps,Ue&&qe&&(fe.length>0&&D++,t.texStorage2D(i.TEXTURE_CUBE_MAP,D,Me,H[0].width,H[0].height));for(let V=0;V<6;V++)if(ie){Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,H[V].width,H[V].height,Ae,Ee,H[V].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Me,H[V].width,H[V].height,0,Ae,Ee,H[V].data);for(let ce=0;ce<fe.length;ce++){const Ze=fe[ce].image[V].image;Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce+1,0,0,Ze.width,Ze.height,Ae,Ee,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce+1,Me,Ze.width,Ze.height,0,Ae,Ee,Ze.data)}}else{Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Ae,Ee,H[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Me,Ae,Ee,H[V]);for(let ce=0;ce<fe.length;ce++){const ge=fe[ce];Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce+1,0,0,Ae,Ee,ge.image[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,ce+1,Me,Ae,Ee,ge.image[V])}}}P(M,we)&&L(i.TEXTURE_CUBE_MAP),R.__version=re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Le(w,M,X,oe,re){const R=s.convert(X.format,X.colorSpace),ee=s.convert(X.type),ie=y(X.internalFormat,R,ee,X.colorSpace);n.get(M).__hasExternalTextures||(re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,0,ie,M.width,M.height,M.depth,0,R,ee,null):t.texImage2D(re,0,ie,M.width,M.height,0,R,ee,null)),t.bindFramebuffer(i.FRAMEBUFFER,w),Ie(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,re,n.get(X).__webglTexture,0,ve(M)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,re,n.get(X).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function C(w,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let oe=i.DEPTH_COMPONENT16;if(X||Ie(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===In?oe=i.DEPTH_COMPONENT32F:re.type===Dn&&(oe=i.DEPTH_COMPONENT24));const R=ve(M);Ie(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R,oe,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,R,oe,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,oe,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const oe=ve(M);X&&Ie(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,M.width,M.height):Ie(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const oe=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let re=0;re<oe.length;re++){const R=oe[re],ee=s.convert(R.format,R.colorSpace),ie=s.convert(R.type),H=y(R.internalFormat,ee,ie,R.colorSpace),ye=ve(M);X&&Ie(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,H,M.width,M.height):Ie(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,H,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,H,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const oe=n.get(M.depthTexture).__webglTexture,re=ve(M);if(M.depthTexture.format===Jn)Ie(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Bi)Ie(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function K(w){const M=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,w)}else if(X){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=i.createRenderbuffer(),C(M.__webglDepthbuffer[oe],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),C(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(w,M,X){const oe=n.get(w);M!==void 0&&Le(oe.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),X!==void 0&&K(w)}function J(w){const M=w.texture,X=n.get(w),oe=n.get(M);w.addEventListener("dispose",$),w.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=M.version,a.memory.textures++);const re=w.isWebGLCubeRenderTarget===!0,R=w.isWebGLMultipleRenderTargets===!0,ee=T(w)||o;if(re){X.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)X.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(X.__webglFramebuffer=i.createFramebuffer(),R)if(r.drawBuffers){const ie=w.texture;for(let H=0,ye=ie.length;H<ye;H++){const we=n.get(ie[H]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Ie(w)===!1){const ie=R?M:[M];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let H=0;H<ie.length;H++){const ye=ie[H];X.__webglColorRenderbuffer[H]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[H]);const we=s.convert(ye.format,ye.colorSpace),Ae=s.convert(ye.type),Ee=y(ye.internalFormat,we,Ae,ye.colorSpace,w.isXRRenderTarget===!0),Me=ve(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,Ee,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,X.__webglColorRenderbuffer[H])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),C(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),xe(i.TEXTURE_CUBE_MAP,M,ee);for(let ie=0;ie<6;ie++)Le(X.__webglFramebuffer[ie],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie);P(M,ee)&&L(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(R){const ie=w.texture;for(let H=0,ye=ie.length;H<ye;H++){const we=ie[H],Ae=n.get(we);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),xe(i.TEXTURE_2D,we,ee),Le(X.__webglFramebuffer,w,we,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D),P(we,ee)&&L(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ie=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,oe.__webglTexture),xe(ie,M,ee),Le(X.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ie),P(M,ee)&&L(ie),t.unbindTexture()}w.depthBuffer&&K(w)}function Te(w){const M=T(w)||o,X=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let oe=0,re=X.length;oe<re;oe++){const R=X[oe];if(P(R,M)){const ee=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ie=n.get(R).__webglTexture;t.bindTexture(ee,ie),L(ee),t.unbindTexture()}}}function me(w){if(o&&w.samples>0&&Ie(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],X=w.width,oe=w.height;let re=i.COLOR_BUFFER_BIT;const R=[],ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(w),H=w.isWebGLMultipleRenderTargets===!0;if(H)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){R.push(i.COLOR_ATTACHMENT0+ye),w.depthBuffer&&R.push(ee);const we=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(we===!1&&(w.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),H&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ye]),we===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ee]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ee])),H){const Ae=n.get(M[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,X,oe,0,0,X,oe,re,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),H)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ye]);const we=n.get(M[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function ve(w){return Math.min(h,w.samples)}function Ie(w){const M=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function We(w){const M=a.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function st(w,M){const X=w.colorSpace,oe=w.format,re=w.type;return w.isCompressedTexture===!0||w.format===Ks||X!==on&&X!==ei&&(X===ke?o===!1?e.has("EXT_sRGB")===!0&&oe===Jt?(w.format=Ks,w.minFilter=Gt,w.generateMipmaps=!1):M=gc.sRGBToLinear(M):(oe!==Jt||re!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=he,this.setTexture3D=k,this.setTextureCube=te,this.rebindTextures=se,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ie}function Q0(i,e,t){const n=t.isWebGL2;function r(s,a=ei){let o;if(s===Nn)return i.UNSIGNED_BYTE;if(s===ac)return i.UNSIGNED_SHORT_4_4_4_4;if(s===lc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Np)return i.BYTE;if(s===Op)return i.SHORT;if(s===xo)return i.UNSIGNED_SHORT;if(s===oc)return i.INT;if(s===Dn)return i.UNSIGNED_INT;if(s===In)return i.FLOAT;if(s===tr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Fp)return i.ALPHA;if(s===Jt)return i.RGBA;if(s===Bp)return i.LUMINANCE;if(s===zp)return i.LUMINANCE_ALPHA;if(s===Jn)return i.DEPTH_COMPONENT;if(s===Bi)return i.DEPTH_STENCIL;if(s===Ks)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===kp)return i.RED;if(s===cc)return i.RED_INTEGER;if(s===Hp)return i.RG;if(s===uc)return i.RG_INTEGER;if(s===hc)return i.RGBA_INTEGER;if(s===hs||s===ds||s===fs||s===ps)if(a===ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===hs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===hs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ds)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ps)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ca||s===ua||s===ha||s===da)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ca)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ua)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ha)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===da)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fa||s===pa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===fa)return a===ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===pa)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ma||s===ga||s===_a||s===va||s===xa||s===Ma||s===Sa||s===ya||s===Ea||s===ba||s===Ta||s===Aa||s===wa||s===Ra)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ma)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ga)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_a)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===va)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xa)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ma)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sa)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ya)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ea)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ba)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ta)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Aa)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wa)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ra)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ms)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ms)return a===ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Vp||s===Ca||s===La||s===Pa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ms)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ca)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===La)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class ex extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Or extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tx={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class nx extends Ut{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:Jn,u!==Jn&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Jn&&(n=Dn),n===void 0&&u===Bi&&(n=Zn),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ix extends li{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=t.getContextAttributes();let m=null,f=null;const b=[],_=[];let T=null;const A=new Vt;A.layers.enable(1),A.viewport=new bt;const P=new Vt;P.layers.enable(2),P.viewport=new bt;const L=[A,P],y=new ex;y.layers.enable(1),y.layers.enable(2);let x=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(k){T=k},this.getController=function(k){let te=b[k];return te===void 0&&(te=new zs,b[k]=te),te.getTargetRaySpace()},this.getControllerGrip=function(k){let te=b[k];return te===void 0&&(te=new zs,b[k]=te),te.getGripSpace()},this.getHand=function(k){let te=b[k];return te===void 0&&(te=new zs,b[k]=te),te.getHandSpace()};function z(k){const te=_.indexOf(k.inputSource);if(te===-1)return;const ne=b[te];ne!==void 0&&(ne.update(k.inputSource,k.frame,c||a),ne.dispatchEvent({type:k.type,data:k.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",I);for(let k=0;k<b.length;k++){const te=_[k];te!==null&&(_[k]=null,b[k].disconnect(te))}x=null,E=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,he.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),f=new ti(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let te=null,ne=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=v.stencil?Bi:Jn,ne=v.stencil?Zn:Dn);const _e={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(_e),r.updateRenderState({layers:[d]}),f=new ti(d.textureWidth,d.textureHeight,{format:Jt,type:Nn,depthTexture:new nx(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const xe=e.properties.get(f);xe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(k){for(let te=0;te<k.removed.length;te++){const ne=k.removed[te],de=_.indexOf(ne);de>=0&&(_[de]=null,b[de].disconnect(ne))}for(let te=0;te<k.added.length;te++){const ne=k.added[te];let de=_.indexOf(ne);if(de===-1){for(let xe=0;xe<b.length;xe++)if(xe>=_.length){_.push(ne),de=xe;break}else if(_[xe]===null){_[xe]=ne,de=xe;break}if(de===-1)break}const _e=b[de];_e&&_e.connect(ne)}}const N=new U,F=new U;function W(k,te,ne){N.setFromMatrixPosition(te.matrixWorld),F.setFromMatrixPosition(ne.matrixWorld);const de=N.distanceTo(F),_e=te.projectionMatrix.elements,xe=ne.projectionMatrix.elements,De=_e[14]/(_e[10]-1),Ce=_e[14]/(_e[10]+1),Ye=(_e[9]+1)/_e[5],Le=(_e[9]-1)/_e[5],C=(_e[8]-1)/_e[0],ae=(xe[8]+1)/xe[0],K=De*C,se=De*ae,J=de/(-C+ae),Te=J*-C;te.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Te),k.translateZ(J),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const me=De+J,ve=Ce+J,Ie=K-Te,We=se+(de-Te),st=Ye*Ce/ve*me,w=Le*Ce/ve*me;k.projectionMatrix.makePerspective(Ie,We,st,w,me,ve),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function G(k,te){te===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(te.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCameraXR=function(k){if(r===null)return k;T&&(k=T),y.near=P.near=A.near=k.near,y.far=P.far=A.far=k.far,(x!==y.near||E!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),x=y.near,E=y.far);const te=k.parent,ne=y.cameras;G(y,te);for(let de=0;de<ne.length;de++)G(ne[de],te);return ne.length===2?W(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),T&&q(y,te),y};function q(k,te){const ne=T;te===null?ne.matrix.copy(k.matrixWorld):(ne.matrix.copy(te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(k.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0);const de=ne.children;for(let _e=0,xe=de.length;_e<xe;_e++)de[_e].updateMatrixWorld(!0);ne.projectionMatrix.copy(k.projectionMatrix),ne.projectionMatrixInverse.copy(k.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Zs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let Z=null;function Q(k,te){if(u=te.getViewerPose(c||a),g=te,u!==null){const ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let de=!1;ne.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let _e=0;_e<ne.length;_e++){const xe=ne[_e];let De=null;if(p!==null)De=p.getViewport(xe);else{const Ye=h.getViewSubImage(d,xe);De=Ye.viewport,_e===0&&(e.setRenderTargetTextures(f,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(f))}let Ce=L[_e];Ce===void 0&&(Ce=new Vt,Ce.layers.enable(_e),Ce.viewport=new bt,L[_e]=Ce),Ce.matrix.fromArray(xe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(xe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(De.x,De.y,De.width,De.height),_e===0&&(y.matrix.copy(Ce.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(Ce)}}for(let ne=0;ne<b.length;ne++){const de=_[ne],_e=b[ne];de!==null&&_e!==void 0&&_e.update(de,te,c||a)}Z&&Z(k,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const he=new Rc;he.setAnimationLoop(Q),this.setAnimationLoop=function(k){Z=k},this.dispose=function(){}}}function rx(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,bc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,_,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===It&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===It&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===It&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sx(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,_){const T=_.program;n.uniformBlockBinding(b,T)}function c(b,_){let T=r[b.id];T===void 0&&(g(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",m));const A=_.program;n.updateUBOMapping(b,A);const P=e.render.frame;s[b.id]!==P&&(d(b),s[b.id]=P)}function u(b){const _=h();b.__bindingPointIndex=_;const T=i.createBuffer(),A=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=r[b.id],T=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let P=0,L=T.length;P<L;P++){const y=T[P];if(p(y,P,A)===!0){const x=y.__offset,E=Array.isArray(y.value)?y.value:[y.value];let z=0;for(let $=0;$<E.length;$++){const I=E[$],N=v(I);typeof I=="number"?(y.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,x+z,y.__data)):I.isMatrix3?(y.__data[0]=I.elements[0],y.__data[1]=I.elements[1],y.__data[2]=I.elements[2],y.__data[3]=I.elements[0],y.__data[4]=I.elements[3],y.__data[5]=I.elements[4],y.__data[6]=I.elements[5],y.__data[7]=I.elements[0],y.__data[8]=I.elements[6],y.__data[9]=I.elements[7],y.__data[10]=I.elements[8],y.__data[11]=I.elements[0]):(I.toArray(y.__data,z),z+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,_,T){const A=b.value;if(T[_]===void 0){if(typeof A=="number")T[_]=A;else{const P=Array.isArray(A)?A:[A],L=[];for(let y=0;y<P.length;y++)L.push(P[y].clone());T[_]=L}return!0}else if(typeof A=="number"){if(T[_]!==A)return T[_]=A,!0}else{const P=Array.isArray(T[_])?T[_]:[T[_]],L=Array.isArray(A)?A:[A];for(let y=0;y<P.length;y++){const x=P[y];if(x.equals(L[y])===!1)return x.copy(L[y]),!0}}return!1}function g(b){const _=b.uniforms;let T=0;const A=16;let P=0;for(let L=0,y=_.length;L<y;L++){const x=_[L],E={boundary:0,storage:0},z=Array.isArray(x.value)?x.value:[x.value];for(let $=0,I=z.length;$<I;$++){const N=z[$],F=v(N);E.boundary+=F.boundary,E.storage+=F.storage}if(x.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=T,L>0){P=T%A;const $=A-P;P!==0&&$-E.boundary<0&&(T+=A-P,x.__offset=T)}T+=E.storage}return P=T%A,P>0&&(T+=A-P),b.__size=T,b.__cache={},this}function v(b){const _={boundary:0,storage:0};return typeof b=="number"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}function ox(){const i=nr("canvas");return i.style.display="block",i}class Ic{constructor(e={}){const{canvas:t=ox(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this.useLegacyLights=!0,this.toneMapping=yn,this.toneMappingExposure=1;const _=this;let T=!1,A=0,P=0,L=null,y=-1,x=null;const E=new bt,z=new bt;let $=null;const I=new et(0);let N=0,F=t.width,W=t.height,G=1,q=null,Z=null;const Q=new bt(0,0,F,W),he=new bt(0,0,F,W);let k=!1;const te=new wc;let ne=!1,de=!1,_e=null;const xe=new Et,De=new le,Ce=new U,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return L===null?G:1}let C=n;function ae(S,B){for(let Y=0;Y<S.length;Y++){const O=S[Y],j=t.getContext(O,B);if(j!==null)return j}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vo}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){const B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),C=ae(B,S),C===null)throw ae(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let K,se,J,Te,me,ve,Ie,We,st,w,M,X,oe,re,R,ee,ie,H,ye,we,Ae,Ee,Me,Ue;function qe(){K=new _v(C),se=new uv(C,K,e),K.init(se),Ee=new Q0(C,K,se),J=new Z0(C,K,se),Te=new Mv(C),me=new F0,ve=new J0(C,K,J,me,se,Ee,Te),Ie=new dv(_),We=new gv(_),st=new Pm(C,se),Me=new lv(C,K,st,se),w=new vv(C,st,Te,Me),M=new bv(C,w,st,Te),ye=new Ev(C,se,ve),ee=new hv(me),X=new O0(_,Ie,We,K,se,Me,ee),oe=new rx(_,me),re=new z0,R=new X0(K,se),H=new av(_,Ie,We,J,M,d,l),ie=new K0(_,M,se),Ue=new sx(C,Te,se,J),we=new cv(C,K,Te,se),Ae=new xv(C,K,Te,se),Te.programs=X.programs,_.capabilities=se,_.extensions=K,_.properties=me,_.renderLists=re,_.shadowMap=ie,_.state=J,_.info=Te}qe();const D=new ix(_,C);this.xr=D,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=K.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=K.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(F,W,!1))},this.getSize=function(S){return S.set(F,W)},this.setSize=function(S,B,Y=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,W=B,t.width=Math.floor(S*G),t.height=Math.floor(B*G),Y===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(F*G,W*G).floor()},this.setDrawingBufferSize=function(S,B,Y){F=S,W=B,G=Y,t.width=Math.floor(S*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(Q)},this.setViewport=function(S,B,Y,O){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,B,Y,O),J.viewport(E.copy(Q).multiplyScalar(G).floor())},this.getScissor=function(S){return S.copy(he)},this.setScissor=function(S,B,Y,O){S.isVector4?he.set(S.x,S.y,S.z,S.w):he.set(S,B,Y,O),J.scissor(z.copy(he).multiplyScalar(G).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(S){J.setScissorTest(k=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){Z=S},this.getClearColor=function(S){return S.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(S=!0,B=!0,Y=!0){let O=0;if(S){let j=!1;if(L!==null){const Se=L.texture.format;j=Se===hc||Se===uc||Se===cc}if(j){const Se=L.texture.type,Pe=Se===Nn||Se===Dn||Se===xo||Se===Zn||Se===ac||Se===lc,Ne=H.getClearColor(),Oe=H.getClearAlpha(),Xe=Ne.r,Be=Ne.g,ze=Ne.b,it=me.get(L).__webglFramebuffer;Pe?(p[0]=Xe,p[1]=Be,p[2]=ze,p[3]=Oe,C.clearBufferuiv(C.COLOR,it,p)):(g[0]=Xe,g[1]=Be,g[2]=ze,g[3]=Oe,C.clearBufferiv(C.COLOR,it,g))}else O|=C.COLOR_BUFFER_BIT}B&&(O|=C.DEPTH_BUFFER_BIT),Y&&(O|=C.STENCIL_BUFFER_BIT),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),re.dispose(),R.dispose(),me.dispose(),Ie.dispose(),We.dispose(),M.dispose(),Me.dispose(),Ue.dispose(),X.dispose(),D.dispose(),D.removeEventListener("sessionstart",ct),D.removeEventListener("sessionend",tn),_e&&(_e.dispose(),_e=null),Rt.stop()};function fe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=Te.autoReset,B=ie.enabled,Y=ie.autoUpdate,O=ie.needsUpdate,j=ie.type;qe(),Te.autoReset=S,ie.enabled=B,ie.autoUpdate=Y,ie.needsUpdate=O,ie.type=j}function ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ge(S){const B=S.target;B.removeEventListener("dispose",ge),Ze(B)}function Ze(S){lt(S),me.remove(S)}function lt(S){const B=me.get(S).programs;B!==void 0&&(B.forEach(function(Y){X.releaseProgram(Y)}),S.isShaderMaterial&&X.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,Y,O,j,Se){B===null&&(B=Ye);const Pe=j.isMesh&&j.matrixWorld.determinant()<0,Ne=Gc(S,B,Y,O,j);J.setMaterial(O,Pe);let Oe=Y.index,Xe=1;O.wireframe===!0&&(Oe=w.getWireframeAttribute(Y),Xe=2);const Be=Y.drawRange,ze=Y.attributes.position;let it=Be.start*Xe,ut=(Be.start+Be.count)*Xe;Se!==null&&(it=Math.max(it,Se.start*Xe),ut=Math.min(ut,(Se.start+Se.count)*Xe)),Oe!==null?(it=Math.max(it,0),ut=Math.min(ut,Oe.count)):ze!=null&&(it=Math.max(it,0),ut=Math.min(ut,ze.count));const Xt=ut-it;if(Xt<0||Xt===1/0)return;Me.setup(j,O,Ne,Y,Oe);let ln,ft=we;if(Oe!==null&&(ln=st.get(Oe),ft=Ae,ft.setIndex(ln)),j.isMesh)O.wireframe===!0?(J.setLineWidth(O.wireframeLinewidth*Le()),ft.setMode(C.LINES)):ft.setMode(C.TRIANGLES);else if(j.isLine){let $e=O.linewidth;$e===void 0&&($e=1),J.setLineWidth($e*Le()),j.isLineSegments?ft.setMode(C.LINES):j.isLineLoop?ft.setMode(C.LINE_LOOP):ft.setMode(C.LINE_STRIP)}else j.isPoints?ft.setMode(C.POINTS):j.isSprite&&ft.setMode(C.TRIANGLES);if(j.isInstancedMesh)ft.renderInstances(it,Xt,j.count);else if(Y.isInstancedBufferGeometry){const $e=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,rs=Math.min(Y.instanceCount,$e);ft.renderInstances(it,Xt,rs)}else ft.render(it,Xt)},this.compile=function(S,B){function Y(O,j,Se){O.transparent===!0&&O.side===rn&&O.forceSinglePass===!1?(O.side=It,O.needsUpdate=!0,dr(O,j,Se),O.side=Fn,O.needsUpdate=!0,dr(O,j,Se),O.side=rn):dr(O,j,Se)}m=R.get(S),m.init(),b.push(m),S.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(_.useLegacyLights),S.traverse(function(O){const j=O.material;if(j)if(Array.isArray(j))for(let Se=0;Se<j.length;Se++){const Pe=j[Se];Y(Pe,S,O)}else Y(j,S,O)}),b.pop(),m=null};let dt=null;function zn(S){dt&&dt(S)}function ct(){Rt.stop()}function tn(){Rt.start()}const Rt=new Rc;Rt.setAnimationLoop(zn),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(S){dt=S,D.setAnimationLoop(S),S===null?Rt.stop():Rt.start()},D.addEventListener("sessionstart",ct),D.addEventListener("sessionend",tn),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(B=D.updateCameraXR(B)),S.isScene===!0&&S.onBeforeRender(_,S,B,L),m=R.get(S,b.length),m.init(),b.push(m),xe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),te.setFromProjectionMatrix(xe),de=this.localClippingEnabled,ne=ee.init(this.clippingPlanes,de),v=re.get(S,f.length),v.init(),f.push(v),wo(S,B,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(q,Z),ne===!0&&ee.beginShadows();const Y=m.state.shadowsArray;if(ie.render(Y,S,B),ne===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,H.render(v,S),m.setupLights(_.useLegacyLights),B.isArrayCamera){const O=B.cameras;for(let j=0,Se=O.length;j<Se;j++){const Pe=O[j];Ro(v,S,Pe,Pe.viewport)}}else Ro(v,S,B);L!==null&&(ve.updateMultisampleRenderTarget(L),ve.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(_,S,B),Me.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function wo(S,B,Y,O){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||te.intersectsSprite(S)){O&&Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xe);const Pe=M.update(S),Ne=S.material;Ne.visible&&v.push(S,Pe,Ne,Y,Ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||te.intersectsObject(S))){S.isSkinnedMesh&&S.skeleton.frame!==Te.render.frame&&(S.skeleton.update(),S.skeleton.frame=Te.render.frame);const Pe=M.update(S),Ne=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ce.copy(S.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ce.copy(Pe.boundingSphere.center)),Ce.applyMatrix4(S.matrixWorld).applyMatrix4(xe)),Array.isArray(Ne)){const Oe=Pe.groups;for(let Xe=0,Be=Oe.length;Xe<Be;Xe++){const ze=Oe[Xe],it=Ne[ze.materialIndex];it&&it.visible&&v.push(S,Pe,it,Y,Ce.z,ze)}}else Ne.visible&&v.push(S,Pe,Ne,Y,Ce.z,null)}}const Se=S.children;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++)wo(Se[Pe],B,Y,O)}function Ro(S,B,Y,O){const j=S.opaque,Se=S.transmissive,Pe=S.transparent;m.setupLightsView(Y),ne===!0&&ee.setGlobalState(_.clippingPlanes,Y),Se.length>0&&Hc(j,Se,B,Y),O&&J.viewport(E.copy(O)),j.length>0&&hr(j,B,Y),Se.length>0&&hr(Se,B,Y),Pe.length>0&&hr(Pe,B,Y),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Hc(S,B,Y,O){const j=se.isWebGL2;_e===null&&(_e=new ti(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?tr:Nn,minFilter:er,samples:j&&o===!0?4:0})),_.getDrawingBufferSize(De),j?_e.setSize(De.x,De.y):_e.setSize(Js(De.x),Js(De.y));const Se=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(I),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();const Pe=_.toneMapping;_.toneMapping=yn,hr(S,Y,O),ve.updateMultisampleRenderTarget(_e),ve.updateRenderTargetMipmap(_e);let Ne=!1;for(let Oe=0,Xe=B.length;Oe<Xe;Oe++){const Be=B[Oe],ze=Be.object,it=Be.geometry,ut=Be.material,Xt=Be.group;if(ut.side===rn&&ze.layers.test(O.layers)){const ln=ut.side;ut.side=It,ut.needsUpdate=!0,Co(ze,Y,O,it,ut,Xt),ut.side=ln,ut.needsUpdate=!0,Ne=!0}}Ne===!0&&(ve.updateMultisampleRenderTarget(_e),ve.updateRenderTargetMipmap(_e)),_.setRenderTarget(Se),_.setClearColor(I,N),_.toneMapping=Pe}function hr(S,B,Y){const O=B.isScene===!0?B.overrideMaterial:null;for(let j=0,Se=S.length;j<Se;j++){const Pe=S[j],Ne=Pe.object,Oe=Pe.geometry,Xe=O===null?Pe.material:O,Be=Pe.group;Ne.layers.test(Y.layers)&&Co(Ne,B,Y,Oe,Xe,Be)}}function Co(S,B,Y,O,j,Se){S.onBeforeRender(_,B,Y,O,j,Se),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(_,B,Y,O,S,Se),j.transparent===!0&&j.side===rn&&j.forceSinglePass===!1?(j.side=It,j.needsUpdate=!0,_.renderBufferDirect(Y,B,O,j,S,Se),j.side=Fn,j.needsUpdate=!0,_.renderBufferDirect(Y,B,O,j,S,Se),j.side=rn):_.renderBufferDirect(Y,B,O,j,S,Se),S.onAfterRender(_,B,Y,O,j,Se)}function dr(S,B,Y){B.isScene!==!0&&(B=Ye);const O=me.get(S),j=m.state.lights,Se=m.state.shadowsArray,Pe=j.state.version,Ne=X.getParameters(S,j.state,Se,B,Y),Oe=X.getProgramCacheKey(Ne);let Xe=O.programs;O.environment=S.isMeshStandardMaterial?B.environment:null,O.fog=B.fog,O.envMap=(S.isMeshStandardMaterial?We:Ie).get(S.envMap||O.environment),Xe===void 0&&(S.addEventListener("dispose",ge),Xe=new Map,O.programs=Xe);let Be=Xe.get(Oe);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===Pe)return Lo(S,Ne),Be}else Ne.uniforms=X.getUniforms(S),S.onBuild(Y,Ne,_),S.onBeforeCompile(Ne,_),Be=X.acquireProgram(Ne,Oe),Xe.set(Oe,Be),O.uniforms=Ne.uniforms;const ze=O.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ze.clippingPlanes=ee.uniform),Lo(S,Ne),O.needsLights=Wc(S),O.lightsStateVersion=Pe,O.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMap.value=j.state.directionalShadowMap,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotShadowMap.value=j.state.spotShadowMap,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMap.value=j.state.pointShadowMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix);const it=Be.getUniforms(),ut=Gr.seqWithValue(it.seq,ze);return O.currentProgram=Be,O.uniformsList=ut,Be}function Lo(S,B){const Y=me.get(S);Y.outputColorSpace=B.outputColorSpace,Y.instancing=B.instancing,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Gc(S,B,Y,O,j){B.isScene!==!0&&(B=Ye),ve.resetTextureUnits();const Se=B.fog,Pe=O.isMeshStandardMaterial?B.environment:null,Ne=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:on,Oe=(O.isMeshStandardMaterial?We:Ie).get(O.envMap||Pe),Xe=O.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ze=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,ut=!!Y.morphAttributes.color,Xt=O.toneMapped?_.toneMapping:yn,ln=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=ln!==void 0?ln.length:0,$e=me.get(O),rs=m.state.lights;if(ne===!0&&(de===!0||S!==x)){const Nt=S===x&&O.id===y;ee.setState(O,S,Nt)}let xt=!1;O.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==rs.state.version||$e.outputColorSpace!==Ne||j.isInstancedMesh&&$e.instancing===!1||!j.isInstancedMesh&&$e.instancing===!0||j.isSkinnedMesh&&$e.skinning===!1||!j.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Oe||O.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ee.numPlanes||$e.numIntersection!==ee.numIntersection)||$e.vertexAlphas!==Xe||$e.vertexTangents!==Be||$e.morphTargets!==ze||$e.morphNormals!==it||$e.morphColors!==ut||$e.toneMapping!==Xt||se.isWebGL2===!0&&$e.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,$e.__version=O.version);let kn=$e.currentProgram;xt===!0&&(kn=dr(O,B,j));let Po=!1,Gi=!1,ss=!1;const Ct=kn.getUniforms(),Hn=$e.uniforms;if(J.useProgram(kn.program)&&(Po=!0,Gi=!0,ss=!0),O.id!==y&&(y=O.id,Gi=!0),Po||x!==S){if(Ct.setValue(C,"projectionMatrix",S.projectionMatrix),se.logarithmicDepthBuffer&&Ct.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),x!==S&&(x=S,Gi=!0,ss=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Nt=Ct.map.cameraPosition;Nt!==void 0&&Nt.setValue(C,Ce.setFromMatrixPosition(S.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ct.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||j.isSkinnedMesh)&&Ct.setValue(C,"viewMatrix",S.matrixWorldInverse)}if(j.isSkinnedMesh){Ct.setOptional(C,j,"bindMatrix"),Ct.setOptional(C,j,"bindMatrixInverse");const Nt=j.skeleton;Nt&&(se.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),Ct.setValue(C,"boneTexture",Nt.boneTexture,ve),Ct.setValue(C,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const os=Y.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0&&se.isWebGL2===!0)&&ye.update(j,Y,kn),(Gi||$e.receiveShadow!==j.receiveShadow)&&($e.receiveShadow=j.receiveShadow,Ct.setValue(C,"receiveShadow",j.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Hn.envMap.value=Oe,Hn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Gi&&(Ct.setValue(C,"toneMappingExposure",_.toneMappingExposure),$e.needsLights&&Vc(Hn,ss),Se&&O.fog===!0&&oe.refreshFogUniforms(Hn,Se),oe.refreshMaterialUniforms(Hn,O,G,W,_e),Gr.upload(C,$e.uniformsList,Hn,ve)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Gr.upload(C,$e.uniformsList,Hn,ve),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ct.setValue(C,"center",j.center),Ct.setValue(C,"modelViewMatrix",j.modelViewMatrix),Ct.setValue(C,"normalMatrix",j.normalMatrix),Ct.setValue(C,"modelMatrix",j.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Nt=O.uniformsGroups;for(let as=0,Xc=Nt.length;as<Xc;as++)if(se.isWebGL2){const Do=Nt[as];Ue.update(Do,kn),Ue.bind(Do,kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kn}function Vc(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Wc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,B,Y){me.get(S.texture).__webglTexture=B,me.get(S.depthTexture).__webglTexture=Y;const O=me.get(S);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Y===void 0,O.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){const Y=me.get(S);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,Y=0){L=S,A=B,P=Y;let O=!0,j=null,Se=!1,Pe=!1;if(S){const Oe=me.get(S);Oe.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(C.FRAMEBUFFER,null),O=!1):Oe.__webglFramebuffer===void 0?ve.setupRenderTarget(S):Oe.__hasExternalTextures&&ve.rebindTextures(S,me.get(S.texture).__webglTexture,me.get(S.depthTexture).__webglTexture);const Xe=S.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const Be=me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(j=Be[B],Se=!0):se.isWebGL2&&S.samples>0&&ve.useMultisampledRTT(S)===!1?j=me.get(S).__webglMultisampledFramebuffer:j=Be,E.copy(S.viewport),z.copy(S.scissor),$=S.scissorTest}else E.copy(Q).multiplyScalar(G).floor(),z.copy(he).multiplyScalar(G).floor(),$=k;if(J.bindFramebuffer(C.FRAMEBUFFER,j)&&se.drawBuffers&&O&&J.drawBuffers(S,j),J.viewport(E),J.scissor(z),J.setScissorTest($),Se){const Oe=me.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,Y)}else if(Pe){const Oe=me.get(S.texture),Xe=B||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Oe.__webglTexture,Y||0,Xe)}y=-1},this.readRenderTargetPixels=function(S,B,Y,O,j,Se,Pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){J.bindFramebuffer(C.FRAMEBUFFER,Ne);try{const Oe=S.texture,Xe=Oe.format,Be=Oe.type;if(Xe!==Jt&&Ee.convert(Xe)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Be===tr&&(K.has("EXT_color_buffer_half_float")||se.isWebGL2&&K.has("EXT_color_buffer_float"));if(Be!==Nn&&Ee.convert(Be)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===In&&(se.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-O&&Y>=0&&Y<=S.height-j&&C.readPixels(B,Y,O,j,Ee.convert(Xe),Ee.convert(Be),Se)}finally{const Oe=L!==null?me.get(L).__webglFramebuffer:null;J.bindFramebuffer(C.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(S,B,Y=0){const O=Math.pow(2,-Y),j=Math.floor(B.image.width*O),Se=Math.floor(B.image.height*O);ve.setTexture2D(B,0),C.copyTexSubImage2D(C.TEXTURE_2D,Y,0,0,S.x,S.y,j,Se),J.unbindTexture()},this.copyTextureToTexture=function(S,B,Y,O=0){const j=B.image.width,Se=B.image.height,Pe=Ee.convert(Y.format),Ne=Ee.convert(Y.type);ve.setTexture2D(Y,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,Y.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,S.x,S.y,j,Se,Pe,Ne,B.image.data):B.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Pe,B.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,O,S.x,S.y,Pe,Ne,B.image),O===0&&Y.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(S,B,Y,O,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=S.max.x-S.min.x+1,Pe=S.max.y-S.min.y+1,Ne=S.max.z-S.min.z+1,Oe=Ee.convert(O.format),Xe=Ee.convert(O.type);let Be;if(O.isData3DTexture)ve.setTexture3D(O,0),Be=C.TEXTURE_3D;else if(O.isDataArrayTexture)ve.setTexture2DArray(O,0),Be=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const ze=C.getParameter(C.UNPACK_ROW_LENGTH),it=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ut=C.getParameter(C.UNPACK_SKIP_PIXELS),Xt=C.getParameter(C.UNPACK_SKIP_ROWS),ln=C.getParameter(C.UNPACK_SKIP_IMAGES),ft=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,ft.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ft.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,S.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,S.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,S.min.z),Y.isDataTexture||Y.isData3DTexture?C.texSubImage3D(Be,j,B.x,B.y,B.z,Se,Pe,Ne,Oe,Xe,ft.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Be,j,B.x,B.y,B.z,Se,Pe,Ne,Oe,ft.data)):C.texSubImage3D(Be,j,B.x,B.y,B.z,Se,Pe,Ne,Oe,Xe,ft),C.pixelStorei(C.UNPACK_ROW_LENGTH,ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,it),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ln),j===0&&O.generateMipmaps&&C.generateMipmap(Be),J.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?ve.setTextureCube(S,0):S.isData3DTexture?ve.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ve.setTexture2DArray(S,0):ve.setTexture2D(S,0),J.unbindTexture()},this.resetState=function(){A=0,P=0,L=null,J.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?Qn:dc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qn?ke:on}}class ax extends Ic{}ax.prototype.isWebGL1Renderer=!0;class lx extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,p=(a-u)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new le:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,r=[],s=[],a=[],o=new U,l=new Et;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(St(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(St(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Eo extends an{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new le,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cx extends Eo{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function bo(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Fr=new U,ks=new bo,Hs=new bo,Gs=new bo;class ux extends an{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Fr.subVectors(r[0],r[1]).add(r[0]),c=Fr);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Fr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ks.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,m),Hs.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,m),Gs.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ks.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Hs.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Gs.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ks.calc(l),Hs.calc(l),Gs.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vl(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function hx(i,e){const t=1-i;return t*t*e}function dx(i,e){return 2*(1-i)*i*e}function fx(i,e){return i*i*e}function Ki(i,e,t,n){return hx(i,e)+dx(i,t)+fx(i,n)}function px(i,e){const t=1-i;return t*t*t*e}function mx(i,e){const t=1-i;return 3*t*t*i*e}function gx(i,e){return 3*(1-i)*i*i*e}function _x(i,e){return i*i*i*e}function Zi(i,e,t,n,r){return px(i,e)+mx(i,t)+gx(i,n)+_x(i,r)}class Uc extends an{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Zi(e,r.x,s.x,a.x,o.x),Zi(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vx extends an{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Zi(e,r.x,s.x,a.x,o.x),Zi(e,r.y,s.y,a.y,o.y),Zi(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class To extends an{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xx extends an{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nc extends an{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ki(e,r.x,s.x,a.x),Ki(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mx extends an{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ki(e,r.x,s.x,a.x),Ki(e,r.y,s.y,a.y),Ki(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oc extends an{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(vl(o,l.x,c.x,u.x,h.x),vl(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var Fc=Object.freeze({__proto__:null,ArcCurve:cx,CatmullRomCurve3:ux,CubicBezierCurve:Uc,CubicBezierCurve3:vx,EllipseCurve:Eo,LineCurve:To,LineCurve3:xx,QuadraticBezierCurve:Nc,QuadraticBezierCurve3:Mx,SplineCurve:Oc});class Sx extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new To(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Fc[r.type]().fromJSON(r))}return this}}class eo extends Sx{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new To(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Nc(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Uc(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Oc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new Eo(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vr extends eo{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new eo().fromJSON(r))}return this}}const yx={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Bc(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,p;if(n&&(s=wx(i,e,s,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)h=i[g],d=i[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return ir(s,a,t,o,l,p,0),a}};function Bc(i,e,t,n,r){let s,a;if(r===Bx(i,e,t,n)>0)for(s=e;s<t;s+=n)a=xl(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=xl(s,i[s],i[s+1],a);return a&&ns(a,a.next)&&(sr(a),a=a.next),a}function ri(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ns(t,t.next)||at(t.prev,t,t.next)===0)){if(sr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ir(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Dx(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?bx(i,n,r,s):Ex(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),sr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Tx(ri(i),e,t),ir(i,e,t,n,r,s,2)):a===2&&Ax(i,e,t,n,r,s):ir(ri(i),e,t,n,r,s,1);break}}}function Ex(i){const e=i.prev,t=i,n=i.next;if(at(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Pi(r,o,s,l,a,c,g.x,g.y)&&at(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bx(i,e,t,n){const r=i.prev,s=i,a=i.next;if(at(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,v=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=to(p,g,e,t,n),b=to(v,m,e,t,n);let _=i.prevZ,T=i.nextZ;for(;_&&_.z>=f&&T&&T.z<=b;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&Pi(o,u,l,h,c,d,_.x,_.y)&&at(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=p&&T.x<=v&&T.y>=g&&T.y<=m&&T!==r&&T!==a&&Pi(o,u,l,h,c,d,T.x,T.y)&&at(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&Pi(o,u,l,h,c,d,_.x,_.y)&&at(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=b;){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=m&&T!==r&&T!==a&&Pi(o,u,l,h,c,d,T.x,T.y)&&at(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Tx(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!ns(r,s)&&zc(r,n,n.next,s)&&rr(r,s)&&rr(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),sr(n),sr(n.next),n=i=s),n=n.next}while(n!==i);return ri(n)}function Ax(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nx(a,o)){let l=kc(a,o);a=ri(a,a.next),l=ri(l,l.next),ir(a,e,t,n,r,s,0),ir(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function wx(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Bc(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Ux(c));for(r.sort(Rx),s=0;s<r.length;s++)t=Cx(r[s],t);return t}function Rx(i,e){return i.x-e.x}function Cx(i,e){const t=Lx(i,e);if(!t)return e;const n=kc(t,i);return ri(n,n.next),ri(t,t.next)}function Lx(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Pi(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),rr(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&Px(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function Px(i,e){return at(i.prev,i,e.prev)<0&&at(e.next,i,i.next)<0}function Dx(i,e,t,n){let r=i;do r.z===0&&(r.z=to(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Ix(r)}function Ix(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function to(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ux(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Pi(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Nx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ox(i,e)&&(rr(i,e)&&rr(e,i)&&Fx(i,e)&&(at(i.prev,i,e.prev)||at(i,e.prev,e))||ns(i,e)&&at(i.prev,i,i.next)>0&&at(e.prev,e,e.next)>0)}function at(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ns(i,e){return i.x===e.x&&i.y===e.y}function zc(i,e,t,n){const r=zr(at(i,e,t)),s=zr(at(i,e,n)),a=zr(at(t,n,i)),o=zr(at(t,n,e));return!!(r!==s&&a!==o||r===0&&Br(i,t,e)||s===0&&Br(i,n,e)||a===0&&Br(t,i,n)||o===0&&Br(t,e,n))}function Br(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zr(i){return i>0?1:i<0?-1:0}function Ox(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function rr(i,e){return at(i.prev,i,i.next)<0?at(i,e,i.next)>=0&&at(i,i.prev,e)>=0:at(i,e,i.prev)<0||at(i,i.next,e)<0}function Fx(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function kc(i,e){const t=new no(i.i,i.x,i.y),n=new no(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function xl(i,e,t,n){const r=new no(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function no(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bx(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Ui{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Ui.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Ml(e),Sl(n,e);let a=e.length;t.forEach(Ml);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Sl(n,t[l]);const o=yx.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Ml(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ao extends Bn{constructor(e=new Vr([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new En(r,3)),this.setAttribute("uv",new En(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:zx;let _,T=!1,A,P,L,y;f&&(_=f.getSpacedPoints(u),T=!0,d=!1,A=f.computeFrenetFrames(u,!1),P=new U,L=new U,y=new U),d||(m=0,p=0,g=0,v=0);const x=o.extractPoints(c);let E=x.shape;const z=x.holes;if(!Ui.isClockWise(E)){E=E.reverse();for(let C=0,ae=z.length;C<ae;C++){const K=z[C];Ui.isClockWise(K)&&(z[C]=K.reverse())}}const I=Ui.triangulateShape(E,z),N=E;for(let C=0,ae=z.length;C<ae;C++){const K=z[C];E=E.concat(K)}function F(C,ae,K){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(ae,K)}const W=E.length,G=I.length;function q(C,ae,K){let se,J,Te;const me=C.x-ae.x,ve=C.y-ae.y,Ie=K.x-C.x,We=K.y-C.y,st=me*me+ve*ve,w=me*We-ve*Ie;if(Math.abs(w)>Number.EPSILON){const M=Math.sqrt(st),X=Math.sqrt(Ie*Ie+We*We),oe=ae.x-ve/M,re=ae.y+me/M,R=K.x-We/X,ee=K.y+Ie/X,ie=((R-oe)*We-(ee-re)*Ie)/(me*We-ve*Ie);se=oe+me*ie-C.x,J=re+ve*ie-C.y;const H=se*se+J*J;if(H<=2)return new le(se,J);Te=Math.sqrt(H/2)}else{let M=!1;me>Number.EPSILON?Ie>Number.EPSILON&&(M=!0):me<-Number.EPSILON?Ie<-Number.EPSILON&&(M=!0):Math.sign(ve)===Math.sign(We)&&(M=!0),M?(se=-ve,J=me,Te=Math.sqrt(st)):(se=me,J=ve,Te=Math.sqrt(st/2))}return new le(se/Te,J/Te)}const Z=[];for(let C=0,ae=N.length,K=ae-1,se=C+1;C<ae;C++,K++,se++)K===ae&&(K=0),se===ae&&(se=0),Z[C]=q(N[C],N[K],N[se]);const Q=[];let he,k=Z.concat();for(let C=0,ae=z.length;C<ae;C++){const K=z[C];he=[];for(let se=0,J=K.length,Te=J-1,me=se+1;se<J;se++,Te++,me++)Te===J&&(Te=0),me===J&&(me=0),he[se]=q(K[se],K[Te],K[me]);Q.push(he),k=k.concat(he)}for(let C=0;C<m;C++){const ae=C/m,K=p*Math.cos(ae*Math.PI/2),se=g*Math.sin(ae*Math.PI/2)+v;for(let J=0,Te=N.length;J<Te;J++){const me=F(N[J],Z[J],se);xe(me.x,me.y,-K)}for(let J=0,Te=z.length;J<Te;J++){const me=z[J];he=Q[J];for(let ve=0,Ie=me.length;ve<Ie;ve++){const We=F(me[ve],he[ve],se);xe(We.x,We.y,-K)}}}const te=g+v;for(let C=0;C<W;C++){const ae=d?F(E[C],k[C],te):E[C];T?(L.copy(A.normals[0]).multiplyScalar(ae.x),P.copy(A.binormals[0]).multiplyScalar(ae.y),y.copy(_[0]).add(L).add(P),xe(y.x,y.y,y.z)):xe(ae.x,ae.y,0)}for(let C=1;C<=u;C++)for(let ae=0;ae<W;ae++){const K=d?F(E[ae],k[ae],te):E[ae];T?(L.copy(A.normals[C]).multiplyScalar(K.x),P.copy(A.binormals[C]).multiplyScalar(K.y),y.copy(_[C]).add(L).add(P),xe(y.x,y.y,y.z)):xe(K.x,K.y,h/u*C)}for(let C=m-1;C>=0;C--){const ae=C/m,K=p*Math.cos(ae*Math.PI/2),se=g*Math.sin(ae*Math.PI/2)+v;for(let J=0,Te=N.length;J<Te;J++){const me=F(N[J],Z[J],se);xe(me.x,me.y,h+K)}for(let J=0,Te=z.length;J<Te;J++){const me=z[J];he=Q[J];for(let ve=0,Ie=me.length;ve<Ie;ve++){const We=F(me[ve],he[ve],se);T?xe(We.x,We.y+_[u-1].y,_[u-1].x+K):xe(We.x,We.y,h+K)}}}ne(),de();function ne(){const C=r.length/3;if(d){let ae=0,K=W*ae;for(let se=0;se<G;se++){const J=I[se];De(J[2]+K,J[1]+K,J[0]+K)}ae=u+m*2,K=W*ae;for(let se=0;se<G;se++){const J=I[se];De(J[0]+K,J[1]+K,J[2]+K)}}else{for(let ae=0;ae<G;ae++){const K=I[ae];De(K[2],K[1],K[0])}for(let ae=0;ae<G;ae++){const K=I[ae];De(K[0]+W*u,K[1]+W*u,K[2]+W*u)}}n.addGroup(C,r.length/3-C,0)}function de(){const C=r.length/3;let ae=0;_e(N,ae),ae+=N.length;for(let K=0,se=z.length;K<se;K++){const J=z[K];_e(J,ae),ae+=J.length}n.addGroup(C,r.length/3-C,1)}function _e(C,ae){let K=C.length;for(;--K>=0;){const se=K;let J=K-1;J<0&&(J=C.length-1);for(let Te=0,me=u+m*2;Te<me;Te++){const ve=W*Te,Ie=W*(Te+1),We=ae+se+ve,st=ae+J+ve,w=ae+J+Ie,M=ae+se+Ie;Ce(We,st,w,M)}}}function xe(C,ae,K){l.push(C),l.push(ae),l.push(K)}function De(C,ae,K){Ye(C),Ye(ae),Ye(K);const se=r.length/3,J=b.generateTopUV(n,r,se-3,se-2,se-1);Le(J[0]),Le(J[1]),Le(J[2])}function Ce(C,ae,K,se){Ye(C),Ye(ae),Ye(se),Ye(ae),Ye(K),Ye(se);const J=r.length/3,Te=b.generateSideWallUV(n,r,J-6,J-3,J-2,J-1);Le(Te[0]),Le(Te[1]),Le(Te[3]),Le(Te[1]),Le(Te[2]),Le(Te[3])}function Ye(C){r.push(l[C*3+0]),r.push(l[C*3+1]),r.push(l[C*3+2])}function Le(C){s.push(C.x),s.push(C.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return kx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Fc[r.type]().fromJSON(r)),new Ao(n,e.options)}}const zx={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new le(s,a),new le(o,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-h),new le(d,1-g),new le(v,1-f)]:[new le(o,1-l),new le(u,1-h),new le(p,1-g),new le(m,1-f)]}};function kx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Hx extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gx extends Hx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Kr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vx{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Wx=new Vx;class is{constructor(e){this.manager=e!==void 0?e:Wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const mn={};class Xx extends Error{constructor(e,t){super(e),this.response=t}}class qx extends is{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Kr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mn[e]!==void 0){mn[e].push({onLoad:t,onProgress:n,onError:r});return}mn[e]=[],mn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=mn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(f){b();function b(){h.read().then(({done:_,value:T})=>{if(_)f.close();else{v+=T.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let P=0,L=u.length;P<L;P++){const y=u[P];y.onProgress&&y.onProgress(A)}f.enqueue(T),b()}})}}});return new Response(m)}else throw new Xx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Kr.add(e,c);const u=mn[e];delete mn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=mn[e];if(u===void 0)throw this.manager.itemError(e),c;delete mn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $x extends is{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Kr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=nr("img");function l(){u(),Kr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Yx extends is{constructor(e){super(e)}load(e,t,n,r){const s=new Ut,a=new $x(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class yl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jx{constructor(){this.type="ShapePath",this.color=new et,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new eo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,a){return this.currentPath.bezierCurveTo(e,t,n,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const b=[];for(let _=0,T=f.length;_<T;_++){const A=f[_],P=new Vr;P.curves=A.curves,b.push(P)}return b}function n(f,b){const _=b.length;let T=!1;for(let A=_-1,P=0;P<_;A=P++){let L=b[A],y=b[P],x=y.x-L.x,E=y.y-L.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(L=b[P],x=-x,y=b[A],E=-E),f.y<L.y||f.y>y.y)continue;if(f.y===L.y){if(f.x===L.x)return!0}else{const z=E*(f.x-L.x)-x*(f.y-L.y);if(z===0)return!0;if(z<0)continue;T=!T}}else{if(f.y!==L.y)continue;if(y.x<=f.x&&f.x<=L.x||L.x<=f.x&&f.x<=y.x)return!0}}return T}const r=Ui.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new Vr,l.curves=o.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],d=[];let p=[],g=0,v;d[g]=void 0,p[g]=[];for(let f=0,b=s.length;f<b;f++)o=s[f],v=o.getPoints(),a=r(v),a=e?!a:a,a?(!u&&d[g]&&g++,d[g]={s:new Vr,p:v},d[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:v[0]});if(!d[0])return t(s);if(d.length>1){let f=!1,b=0;for(let _=0,T=d.length;_<T;_++)h[_]=[];for(let _=0,T=d.length;_<T;_++){const A=p[_];for(let P=0;P<A.length;P++){const L=A[P];let y=!0;for(let x=0;x<d.length;x++)n(L.p,d[x].p)&&(_!==x&&b++,y?(y=!1,h[x].push(L)):f=!0);y&&h[_].push(L)}}b>0&&f===!1&&(p=h)}let m;for(let f=0,b=d.length;f<b;f++){l=d[f].s,c.push(l),m=p[f];for(let _=0,T=m.length;_<T;_++)l.holes.push(m[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);const El={type:"change"},Vs={type:"start"},bl={type:"end"};class Kx extends li{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Ie),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(El),n.update(),s=r.NONE},this.update=function(){const R=new U,ee=new ni().setFromUnitVectors(e.up,new U(0,1,0)),ie=ee.clone().invert(),H=new U,ye=new ni,we=new U,Ae=2*Math.PI;return function(){const Me=n.object.position;R.copy(Me).sub(n.target),R.applyQuaternion(ee),o.setFromVector3(R),n.autoRotate&&s===r.NONE&&x(L()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ue=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(Ue)&&isFinite(qe)&&(Ue<-Math.PI?Ue+=Ae:Ue>Math.PI&&(Ue-=Ae),qe<-Math.PI?qe+=Ae:qe>Math.PI&&(qe-=Ae),Ue<=qe?o.theta=Math.max(Ue,Math.min(qe,o.theta)):o.theta=o.theta>(Ue+qe)/2?Math.max(Ue,o.theta):Math.min(qe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(o),R.applyQuaternion(ie),Me.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||H.distanceToSquared(n.object.position)>a||8*(1-ye.dot(n.object.quaternion))>a||we.distanceToSquared(n.target)>0?(n.dispatchEvent(El),H.copy(n.object.position),ye.copy(n.object.quaternion),we.copy(n.target),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",K),n.domElement.removeEventListener("pointercancel",J),n.domElement.removeEventListener("wheel",ve),n.domElement.removeEventListener("pointermove",se),n.domElement.removeEventListener("pointerup",J),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new yl,l=new yl;let c=1;const u=new U;let h=!1;const d=new le,p=new le,g=new le,v=new le,m=new le,f=new le,b=new le,_=new le,T=new le,A=[],P={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function x(R){l.theta-=R}function E(R){l.phi-=R}const z=function(){const R=new U;return function(ie,H){R.setFromMatrixColumn(H,0),R.multiplyScalar(-ie),u.add(R)}}(),$=function(){const R=new U;return function(ie,H){n.screenSpacePanning===!0?R.setFromMatrixColumn(H,1):(R.setFromMatrixColumn(H,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(ie),u.add(R)}}(),I=function(){const R=new U;return function(ie,H){const ye=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;R.copy(we).sub(n.target);let Ae=R.length();Ae*=Math.tan(n.object.fov/2*Math.PI/180),z(2*ie*Ae/ye.clientHeight,n.object.matrix),$(2*H*Ae/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(ie*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),$(H*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(R){d.set(R.clientX,R.clientY)}function G(R){b.set(R.clientX,R.clientY)}function q(R){v.set(R.clientX,R.clientY)}function Z(R){p.set(R.clientX,R.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const ee=n.domElement;x(2*Math.PI*g.x/ee.clientHeight),E(2*Math.PI*g.y/ee.clientHeight),d.copy(p),n.update()}function Q(R){_.set(R.clientX,R.clientY),T.subVectors(_,b),T.y>0?N(y()):T.y<0&&F(y()),b.copy(_),n.update()}function he(R){m.set(R.clientX,R.clientY),f.subVectors(m,v).multiplyScalar(n.panSpeed),I(f.x,f.y),v.copy(m),n.update()}function k(R){R.deltaY<0?F(y()):R.deltaY>0&&N(y()),n.update()}function te(R){let ee=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),ee=!0;break}ee&&(R.preventDefault(),n.update())}function ne(){if(A.length===1)d.set(A[0].pageX,A[0].pageY);else{const R=.5*(A[0].pageX+A[1].pageX),ee=.5*(A[0].pageY+A[1].pageY);d.set(R,ee)}}function de(){if(A.length===1)v.set(A[0].pageX,A[0].pageY);else{const R=.5*(A[0].pageX+A[1].pageX),ee=.5*(A[0].pageY+A[1].pageY);v.set(R,ee)}}function _e(){const R=A[0].pageX-A[1].pageX,ee=A[0].pageY-A[1].pageY,ie=Math.sqrt(R*R+ee*ee);b.set(0,ie)}function xe(){n.enableZoom&&_e(),n.enablePan&&de()}function De(){n.enableZoom&&_e(),n.enableRotate&&ne()}function Ce(R){if(A.length==1)p.set(R.pageX,R.pageY);else{const ie=re(R),H=.5*(R.pageX+ie.x),ye=.5*(R.pageY+ie.y);p.set(H,ye)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const ee=n.domElement;x(2*Math.PI*g.x/ee.clientHeight),E(2*Math.PI*g.y/ee.clientHeight),d.copy(p)}function Ye(R){if(A.length===1)m.set(R.pageX,R.pageY);else{const ee=re(R),ie=.5*(R.pageX+ee.x),H=.5*(R.pageY+ee.y);m.set(ie,H)}f.subVectors(m,v).multiplyScalar(n.panSpeed),I(f.x,f.y),v.copy(m)}function Le(R){const ee=re(R),ie=R.pageX-ee.x,H=R.pageY-ee.y,ye=Math.sqrt(ie*ie+H*H);_.set(0,ye),T.set(0,Math.pow(_.y/b.y,n.zoomSpeed)),N(T.y),b.copy(_)}function C(R){n.enableZoom&&Le(R),n.enablePan&&Ye(R)}function ae(R){n.enableZoom&&Le(R),n.enableRotate&&Ce(R)}function K(R){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",se),n.domElement.addEventListener("pointerup",J)),M(R),R.pointerType==="touch"?We(R):Te(R))}function se(R){n.enabled!==!1&&(R.pointerType==="touch"?st(R):me(R))}function J(R){X(R),A.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",se),n.domElement.removeEventListener("pointerup",J)),n.dispatchEvent(bl),s=r.NONE}function Te(R){let ee;switch(R.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case ui.DOLLY:if(n.enableZoom===!1)return;G(R),s=r.DOLLY;break;case ui.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;q(R),s=r.PAN}else{if(n.enableRotate===!1)return;W(R),s=r.ROTATE}break;case ui.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;W(R),s=r.ROTATE}else{if(n.enablePan===!1)return;q(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Vs)}function me(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Z(R);break;case r.DOLLY:if(n.enableZoom===!1)return;Q(R);break;case r.PAN:if(n.enablePan===!1)return;he(R);break}}function ve(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(Vs),k(R),n.dispatchEvent(bl))}function Ie(R){n.enabled===!1||n.enablePan===!1||te(R)}function We(R){switch(oe(R),A.length){case 1:switch(n.touches.ONE){case hi.ROTATE:if(n.enableRotate===!1)return;ne(),s=r.TOUCH_ROTATE;break;case hi.PAN:if(n.enablePan===!1)return;de(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(),s=r.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;De(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Vs)}function st(R){switch(oe(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ye(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;C(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(R),n.update();break;default:s=r.NONE}}function w(R){n.enabled!==!1&&R.preventDefault()}function M(R){A.push(R)}function X(R){delete P[R.pointerId];for(let ee=0;ee<A.length;ee++)if(A[ee].pointerId==R.pointerId){A.splice(ee,1);return}}function oe(R){let ee=P[R.pointerId];ee===void 0&&(ee=new le,P[R.pointerId]=ee),ee.set(R.pageX,R.pageY)}function re(R){const ee=R.pointerId===A[0].pointerId?A[1]:A[0];return P[ee.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",K),n.domElement.addEventListener("pointercancel",J),n.domElement.addEventListener("wheel",ve,{passive:!1}),this.update()}}class Zx extends is{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new qx(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=s.parse(JSON.parse(o));t&&t(l)},n,r)}parse(e){return new Jx(e)}}class Jx{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=Qx(e,t,this.data);for(let s=0,a=r.length;s<a;s++)n.push(...r[s].toShapes());return n}}function Qx(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)o=0,l-=s;else{const h=eM(u,r,o,l,t);o+=h.offsetX,a.push(h.path)}}return a}function eM(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const a=new jx;let o,l,c,u,h,d,p,g;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,f=v.length;m<f;)switch(v[m++]){case"m":o=v[m++]*e+t,l=v[m++]*e+n,a.moveTo(o,l);break;case"l":o=v[m++]*e+t,l=v[m++]*e+n,a.lineTo(o,l);break;case"q":c=v[m++]*e+t,u=v[m++]*e+n,h=v[m++]*e+t,d=v[m++]*e+n,a.quadraticCurveTo(h,d,c,u);break;case"b":c=v[m++]*e+t,u=v[m++]*e+n,h=v[m++]*e+t,d=v[m++]*e+n,p=v[m++]*e+t,g=v[m++]*e+n,a.bezierCurveTo(h,d,p,g,c,u);break}}return{offsetX:s.ha*e,path:a}}class tM extends Ao{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const nM=Ke({__name:"HomeTitle",props:{title:{default:"标题"}},setup(i){const e=i,t=tt(),n=new lx,r=new Vt(45,void 0,1,2e3);r.position.set(0,0,400);const s=new Yx().load(Ji("/textures/environment.png"));s.mapping=Yr,n.environment=s,new Zx().load(Ji("/fonts/STXingKai.json"),h=>{const d=new tM(e.title,{font:h,size:80,height:5,curveSegments:12,bevelEnabled:!0,bevelThickness:4,bevelSize:2,bevelOffset:0,bevelSegments:5});d.center();const p=new Gx({color:38911,roughness:0,reflectivity:1,thickness:80,ior:1.5,transmission:1,side:rn,emissive:38911,emissiveIntensity:.1}),g=new xn(d,p);n.add(g)});const o=new Ic({antialias:!0,alpha:!0}),l=new Kx(r,o.domElement);l.enableDamping=!0,l.autoRotate=!0,l.autoRotateSpeed=3,function h(){requestAnimationFrame(h),l.update(),o.render(n,r)}();function c(){document.querySelector("#main-title").insertAdjacentElement("afterend",t.value)}function u(){var p,g;const h=(p=t.value)==null?void 0:p.clientWidth,d=(g=t.value)==null?void 0:g.clientHeight;r.aspect=h/d,r.updateProjectionMatrix(),o.setSize(h,d),o.setPixelRatio(window.devicePixelRatio)}return kt(()=>{u(),t.value.appendChild(o.domElement),c(),window.addEventListener("resize",u)}),ao(()=>{window.removeEventListener("resize",u)}),(h,d)=>(pe(),Re("div",{class:"home-title",ref_key:"homeTitleRef",ref:t},null,512))}});const iM=rt(nM,[["__scopeId","data-v-26051056"],["__file","HomeTitle.vue"]]),rM=An({enhance({app:i,router:e,siteData:t}){i.component("PluginIconCom",rp),i.component("HomeTitle",iM),e.beforeEach(n=>{}),e.afterEach(n=>{})},setup(){},rootComponents:[]}),kr=[Lu,Iu,Fu,ju,Qu,sh,kf,tp,rM],sM=[["v-8daa1a0e","/",{title:""},["/index.html","/README.md"]],["v-1d8755e3","/choosing-technology/",{title:"技术选型"},["/choosing-technology/index.html","/choosing-technology/README.md"]],["v-25f247c9","/develop-standard/",{title:"样式规范"},["/develop-standard/index.html","/develop-standard/README.md"]],["v-16d350a3","/develop-standard/javascript.html",{title:"JavaScript 规范"},["/develop-standard/javascript","/develop-standard/javascript.md"]],["v-16505f43","/develop-standard/react.html",{title:"React 规范"},["/develop-standard/react","/develop-standard/react.md"]],["v-4de4cc8b","/develop-standard/typescript.html",{title:"TypeScript 规范"},["/develop-standard/typescript","/develop-standard/typescript.md"]],["v-6a2021de","/develop-standard/uni-app.html",{title:"uni-app 规范"},["/develop-standard/uni-app","/develop-standard/uni-app.md"]],["v-368ce9dc","/develop-standard/vue.html",{title:"Vue 规范"},["/develop-standard/vue","/develop-standard/vue.md"]],["v-8a459346","/develop-tools/",{title:"NVM"},["/develop-tools/index.html","/develop-tools/README.md"]],["v-49e0da1e","/develop-tools/hbuilderx.html",{title:"HBuilderX"},["/develop-tools/hbuilderx","/develop-tools/hbuilderx.md"]],["v-69705532","/develop-tools/node-and-npm.html",{title:"Node 和 NPM"},["/develop-tools/node-and-npm","/develop-tools/node-and-npm.md"]],["v-f94cb34c","/develop-tools/node.html",{title:"Node"},["/develop-tools/node","/develop-tools/node.md"]],["v-c84bb1d0","/develop-tools/other-tools.html",{title:"其他工具"},["/develop-tools/other-tools","/develop-tools/other-tools.md"]],["v-b64f52aa","/develop-tools/svn.html",{title:"SVN"},["/develop-tools/svn","/develop-tools/svn.md"]],["v-5794b970","/develop-tools/todesk.html",{title:"ToDesk"},["/develop-tools/todesk","/develop-tools/todesk.md"]],["v-25f19272","/develop-tools/vscode.html",{title:"VSCode"},["/develop-tools/vscode","/develop-tools/vscode.md"]],["v-ebd5c936","/develop-tools/weixin-devtools.html",{title:"微信开发者工具"},["/develop-tools/weixin-devtools","/develop-tools/weixin-devtools.md"]],["v-7b28dbcc","/tips-share/",{title:"编程 Tips"},["/tips-share/index.html","/tips-share/README.md"]],["v-3706649a","/404.html",{title:""},["/404"]]];var Tl=Ke({name:"Vuepress",setup(){const i=xu();return()=>Je(i.value)}}),oM=()=>sM.reduce((i,[e,t,n,r])=>(i.push({name:e,path:t,component:Tl,meta:n},...r.map(s=>({path:s,redirect:t}))),i),[{name:"404",path:"/:catchAll(.*)",component:Tl}]),aM=lu,lM=()=>{const i=su({history:aM(Ll("/frontend-development-guide/")),routes:oM(),scrollBehavior:(e,t,n)=>n||(e.hash?{el:e.hash}:{top:0})});return i.beforeResolve(async(e,t)=>{var n;(e.path!==t.path||t===ou)&&([Pn.value]=await Promise.all([gn.resolvePageData(e.name),(n=Pl[e.name])==null?void 0:n.__asyncLoader()]))}),i},cM=i=>{i.component("ClientOnly",ho),i.component("Content",bu)},uM=(i,e,t)=>{const n=tt(e.currentRoute.value.path);oi(()=>e.currentRoute.value.path,d=>n.value=d);const r=be(()=>gn.resolveLayouts(t)),s=be(()=>gn.resolveRouteLocale(Ci.value.locales,n.value)),a=be(()=>gn.resolveSiteLocaleData(Ci.value,s.value)),o=be(()=>gn.resolvePageFrontmatter(Pn.value)),l=be(()=>gn.resolvePageHeadTitle(Pn.value,a.value)),c=be(()=>gn.resolvePageHead(l.value,o.value,a.value)),u=be(()=>gn.resolvePageLang(Pn.value)),h=be(()=>gn.resolvePageLayout(Pn.value,r.value));return i.provide(pu,r),i.provide(Il,o),i.provide(_u,l),i.provide(Ul,c),i.provide(Nl,u),i.provide(Ol,h),i.provide(co,s),i.provide(Fl,a),Object.defineProperties(i.config.globalProperties,{$frontmatter:{get:()=>o.value},$head:{get:()=>c.value},$headTitle:{get:()=>l.value},$lang:{get:()=>u.value},$page:{get:()=>Pn.value},$routeLocale:{get:()=>s.value},$site:{get:()=>Ci.value},$siteLocale:{get:()=>a.value},$withBase:{get:()=>Ji}}),{layouts:r,pageData:Pn,pageFrontmatter:o,pageHead:c,pageHeadTitle:l,pageLang:u,pageLayout:h,routeLocale:s,siteData:Ci,siteLocaleData:a}},hM=()=>{const i=gu(),e=vu(),t=tt([]),n=()=>{i.value.forEach(s=>{const a=dM(s);a&&t.value.push(a)})},r=()=>{document.documentElement.lang=e.value,t.value.forEach(s=>{s.parentNode===document.head&&document.head.removeChild(s)}),t.value.splice(0,t.value.length),i.value.forEach(s=>{const a=fM(s);a!==null&&(document.head.appendChild(a),t.value.push(a))})};oo(Su,r),kt(()=>{n(),r(),oi(()=>i.value,()=>r())})},dM=([i,e,t=""])=>{const n=Object.entries(e).map(([o,l])=>Qt(l)?`[${o}=${JSON.stringify(l)}]`:l===!0?`[${o}]`:"").join(""),r=`head > ${i}${n}`;return Array.from(document.querySelectorAll(r)).find(o=>o.innerText===t)||null},fM=([i,e,t])=>{if(!Qt(i))return null;const n=document.createElement(i);return lo(e)&&Object.entries(e).forEach(([r,s])=>{Qt(s)?n.setAttribute(r,s):s===!0&&n.setAttribute(r,"")}),Qt(t)&&n.appendChild(document.createTextNode(t)),n},pM=au,mM=async()=>{var t;const i=pM({name:"VuepressApp",setup(){var n;hM();for(const r of kr)(n=r.setup)==null||n.call(r);return()=>[Je(cu),...kr.flatMap(({rootComponents:r=[]})=>r.map(s=>Je(s)))]}}),e=lM();cM(i),uM(i,e,kr);for(const n of kr)await((t=n.enhance)==null?void 0:t.call(n,{app:i,router:e,siteData:Ci}));return i.use(e),{app:i,router:e}};mM().then(({app:i,router:e})=>{e.isReady().then(()=>{i.mount("#app")})});export{mM as createVueApp};
