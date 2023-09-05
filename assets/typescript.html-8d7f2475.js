import{_ as p,M as o,p as l,q as r,N as t,V as a,R as n,t as s}from"./framework-5866ffd3.js";const i={},k=n("h1",{id:"typescript-规范",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typescript-规范","aria-hidden":"true"},"#"),s(" TypeScript 规范")],-1),u=n("h2",{id:"类型或接口定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#类型或接口定义","aria-hidden":"true"},"#"),s(" 类型或接口定义")],-1),d=n("ul",null,[n("li",null,"定义类型或接口时，请给出类型名（接口名）注释和各字段注释。类型名以 T 开头，即 type 的首字母；接口名以 I 开头，即 interface 的首字母。")],-1),m=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// ✅ good"),s(`
`),n("span",{class:"token comment"},"/* 登录表单 */"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"TLoginForm"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 用户名"),s(`
  username`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},"// 密码"),s(`
  password`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},"// 验证码"),s(`
  code`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// or"),s(`

`),n("span",{class:"token comment"},"// ✅ good"),s(`
`),n("span",{class:"token comment"},"/* 登录表单 */"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"TLoginForm"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 用户名 | 密码 | 验证码"),s(`
  `),n("span",{class:"token punctuation"},"["),s("key "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token string"},"'username'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'password'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'code'"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),_=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// ✅ good"),s(`
`),n("span",{class:"token comment"},"/* 登录表单 */"),s(`
`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ILoginForm"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 用户名"),s(`
  username`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},"// 密码"),s(`
  password`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},"// 验证码"),s(`
  code`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),g=n("hr",null,null,-1);function h(y,f){const e=o("CodeGroupItem"),c=o("CodeGroup");return l(),r("div",null,[k,u,d,t(c,null,{default:a(()=>[t(e,{title:"type",active:""},{default:a(()=>[m]),_:1}),t(e,{title:"interface"},{default:a(()=>[_]),_:1})]),_:1}),g])}const x=p(i,[["render",h],["__file","typescript.html.vue"]]);export{x as default};
