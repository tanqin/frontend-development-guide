import{_ as c,M as p,p as r,q as i,R as n,t as s,N as a,V as e}from"./framework-a44ba987.js";const k={};function u(m,t){const o=p("CodeGroupItem"),l=p("CodeGroup");return r(),i("div",null,[t[2]||(t[2]=n("h1",{id:"typescript-规范",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typescript-规范","aria-hidden":"true"},"#"),s(" TypeScript 规范")],-1)),t[3]||(t[3]=n("h2",{id:"类型或接口定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#类型或接口定义","aria-hidden":"true"},"#"),s(" 类型或接口定义")],-1)),t[4]||(t[4]=n("ul",null,[n("li",null,"定义类型或接口时，请给出类型名（接口名）注释和各字段注释。类型名以 T 开头，即 type 的首字母；接口名以 I 开头，即 interface 的首字母。")],-1)),a(l,null,{default:e(()=>[a(o,{title:"type",active:""},{default:e(()=>t[0]||(t[0]=[n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// ✅ good"),s(`
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
`)])])],-1)])),_:1}),a(o,{title:"interface"},{default:e(()=>t[1]||(t[1]=[n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// ✅ good"),s(`
`),n("span",{class:"token comment"},"/* 登录表单 */"),s(`
`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ILoginForm"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 用户名"),s(`
  username`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},"// 密码"),s(`
  password`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},"// 验证码"),s(`
  code`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)])),_:1})]),_:1}),t[5]||(t[5]=n("hr",null,null,-1))])}const g=c(k,[["render",u],["__file","typescript.html.vue"]]);export{g as default};
