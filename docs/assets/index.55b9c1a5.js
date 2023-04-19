import{r as C,a as p,o as a,c as l,b as i,F as w,d as N,u as $,e as b,f as E,w as x,g as S,t as f,h as L,i as P,j as B,k as h,P as D,l as A,v as V,m as O}from"./vendor.234e3e3c.js";const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};F();var R=[{compName:"Button",compZhName:"\u6309\u94AE",compDesc:"\u8FD9\u662F\u4E00\u4E2A\u6309\u94AE",compClassName:"button"},{compName:"Foo",compZhName:"\u6D4B\u8BD5\u7EC4\u4EF6",compDesc:"\u9ED8\u8BA4\uFF1A\u8FD9\u662F\u4E00\u4E2A\u65B0\u7EC4\u4EF6",compClassName:"foo"}];const I={class:"my-kit-doc"},M={setup(o){const t=C({links:R.map(s=>({path:`/components/${s.compName}`,name:s.compZhName}))});return(s,n)=>{const e=p("router-link"),r=p("router-view");return a(),l("div",I,[i("aside",null,[(a(!0),l(w,null,N($(t).links,(c,u)=>(a(),E(e,{key:u,to:c.path},{default:x(()=>[S(f(c.name),1)]),_:2},1032,["to"]))),128))]),i("main",null,[b(r)])])}}},j="modulepreload",v={},q="/MY-Kit/",y=function(t,s){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=`${q}${n}`,n in v)return;v[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":j,e||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),e)return new Promise((u,k)=>{c.addEventListener("load",u),c.addEventListener("error",k)})})).then(()=>t())},K=[{title:"\u6309\u94AE",name:"Button",path:"/components/Button",component:()=>y(()=>import("./README.04f9b87a.js"),["assets/README.04f9b87a.js","assets/vendor.234e3e3c.js"])},{title:"\u6D4B\u8BD5\u7EC4\u4EF6",name:"Foo",path:"/components/Foo",component:()=>y(()=>import("./README.e027c703.js"),["assets/README.e027c703.js","assets/vendor.234e3e3c.js"])}],T={history:L(),routes:K,scrollBehavior(o,t){if(o.path!==t.path)return{top:0}}},Y=P(T);var d=(o,t)=>{const s=o.__vccOpts||o;for(const[n,e]of t)s[n]=e;return s};const Z=B({emits:["click"],setup(o){return(t,s)=>(a(),l("button",{class:"my-button",onClick:s[0]||(s[0]=n=>t.$emit("click",n))},[h(t.$slots,"default",{},void 0,!0)]))}});var H=d(Z,[["__scopeId","data-v-5102a2ab"]]);const m={install(o){o.component("my-button",H)}};const W={},z={class:"my-foo"};function G(o,t){return a(),l("div",z," \u6211\u662F\u6D4B\u8BD5\u7EC4\u4EF6\u7EC4\u4EF6 ")}var J=d(W,[["render",G],["__scopeId","data-v-1df37c44"]]);const _={install(o){o.component("my-foo",J)}},Q={install(o){var t,s;(t=m.install)==null||t.call(m,o),(s=_.install)==null||s.call(_,o)}};const U={props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0}},data(){return{sourceCode:"",codeVisible:!1}},computed:{previewSourceCode(){return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g,"'@tencent/my-kit'")}},async mounted(){this.compName&&this.demoName&&(this.sourceCode=await fetch(`/MY-Kit/packages/${this.compName}/docs/${this.demoName}.vue`).then(o=>o.text())),await this.$nextTick(),D.highlightAll()},methods:{async copyCode(){},showSourceCode(){this.codeVisible=!this.codeVisible}}},X={class:"mykit-preview"},ee={class:"source-code"},te={class:"language-html"},oe={class:"language-html"},se={class:"preview-bottom"};function re(o,t,s,n,e,r){return a(),l("div",X,[i("section",null,[h(o.$slots,"default")]),A(i("div",ee,[i("pre",te,[i("code",oe,f(r.previewSourceCode),1)])],512),[[V,e.codeVisible]]),i("div",se,[i("span",{name:"Code",onClick:t[0]||(t[0]=(...c)=>r.showSourceCode&&r.showSourceCode(...c))},"\u67E5\u770B\u4EE3\u7801")])])}var ne=d(U,[["render",re]]);const g=O(M);g.component("Preview",ne);g.use(Q).use(Y).mount("#app");export{d as _};
