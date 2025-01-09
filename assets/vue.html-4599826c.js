import{_ as u,M as p,p as i,q as r,a1 as l,N as e,V as t,R as n,t as a}from"./framework-a44ba987.js";const d={};function k(m,s){const o=p("CodeGroupItem"),c=p("CodeGroup");return i(),r("div",null,[s[6]||(s[6]=l('<h1 id="vue-规范" tabindex="-1"><a class="header-anchor" href="#vue-规范" aria-hidden="true">#</a> Vue 规范</h1><h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2><ul><li>Vue 项目开发要遵循前面提到的样式规范、JavaScript 规范、Typescript 规范。</li></ul><hr><h2 id="项目命名" tabindex="-1"><a class="header-anchor" href="#项目命名" aria-hidden="true">#</a> 项目命名</h2><ul><li>项目名使用中横线（-）作为分隔符。</li></ul><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>根据 HTML 和 XML 规范，中横线（-）被定义为有效的标识符字符。而下划线（_）则不是一个有效的标识符字符。</p></div><hr><h2 id="常用搭配词" tabindex="-1"><a class="header-anchor" href="#常用搭配词" aria-hidden="true">#</a> 常用搭配词</h2><p><strong>handle</strong>：<code>handleClick</code>、<code>handleDelete</code> 表达的都是执行一个事件处理函数，用于按钮点击时事件处理。</p><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>约定俗成的命名方法，有助于团队内部协作和提高代码的可维护性。</p></div><hr><h2 id="全局方法" tabindex="-1"><a class="header-anchor" href="#全局方法" aria-hidden="true">#</a> 全局方法</h2><ul><li>全局方法统一以 $ 符号开头。例如 <code>$add</code>。</li></ul><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>方便区分全局方法与页面内定义的方法。</p></div>',15)),e(c,null,{default:t(()=>[e(o,{title:"【 Vue2 + JavaScript 】",active:""},{default:t(()=>s[0]||(s[0]=[n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// @/utils/index.js"),a(`
`),n("span",{class:"token doc-comment comment"},[a(`/**
 * 求两数之和
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),a("number"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token parameter"},"num1"),a(` 第一个数
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),a("number"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token parameter"},"num2"),a(` 第二个数
 * `),n("span",{class:"token keyword"},"@returns"),a(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),a("number"),n("span",{class:"token punctuation"},"}")]),a(` 相加结果
 */`)]),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("num1"),n("span",{class:"token punctuation"},","),a(" num2")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" num1 "),n("span",{class:"token operator"},"+"),a(` num2
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// @/main.js"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" add "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/utils/index.js'"),a(`

`),n("span",{class:"token class-name"},"Vue"),n("span",{class:"token punctuation"},"."),a("prototype"),n("span",{class:"token punctuation"},"."),a("$add "),n("span",{class:"token operator"},"="),a(` add
`)])])],-1)])),_:1}),e(o,{title:"【 Vue3 + TypeScript 】"},{default:t(()=>s[1]||(s[1]=[n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// @/utils/index.ts"),a(`
`),n("span",{class:"token doc-comment comment"},[a(`/**
 * 求两数之和
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token punctuation"},"{"),a("number"),n("span",{class:"token punctuation"},"}"),a(` num1 第一个数
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token punctuation"},"{"),a("number"),n("span",{class:"token punctuation"},"}"),a(` num2 第二个数
 * `),n("span",{class:"token keyword"},"@returns"),a(),n("span",{class:"token punctuation"},"{"),a("number"),n("span",{class:"token punctuation"},"}"),a(` 相加结果
 */`)]),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),a("num1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),a(" num2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" num1 "),n("span",{class:"token operator"},"+"),a(` num2
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// @/main.ts"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" add "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/utils/index.ts'"),a(`

app`),n("span",{class:"token punctuation"},"."),a("config"),n("span",{class:"token punctuation"},"."),a("globalProperties"),n("span",{class:"token punctuation"},"."),a("$add "),n("span",{class:"token operator"},"="),a(` add
`)])])],-1)])),_:1})]),_:1}),s[7]||(s[7]=l(`<hr><h2 id="公共组件" tabindex="-1"><a class="header-anchor" href="#公共组件" aria-hidden="true">#</a> 公共组件</h2><hr><ul><li>公共组件统一放到 <code>@/components</code> 目录下，且应该给各个组件创建一个独立的文件夹（文件夹采用大驼峰命名，例如 <code>SearchBox</code>），文件夹下创建 <code>index.vue</code> 作为组件入口；所有定义的公共组件，都应该在该组件目录下编写组件使用说明书。</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>my-project
├── src
│    └── components            // 公共组件文件夹
│    │   └── SearchBox             // 搜索组件
│    │       └── index.vue             // 组件入口
│    │       └── README.md             // 组件使用说明书
│    └── <span class="token punctuation">..</span>.
└── <span class="token punctuation">..</span>.
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>集中管理，方便查找。给组件一个独立的文件夹，对于比较复杂的组件，需要拆分多个页面时，这将很有帮助；编写组件使用说明书方便其他开发人员使用公共组件。</p></div><hr><h2 id="api-接口" tabindex="-1"><a class="header-anchor" href="#api-接口" aria-hidden="true">#</a> API 接口</h2><ul><li>所有 API 接口文件统一放到 <code>@/apis</code> 目录下，根据各模块不同进行分组放置。</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>my-project
├── src
│    └── apis                   // API 接口文件夹
│    │   └── userManage             // 用户管理
│    │       └── index.ts               // 接口文件
│    │   └── menuManage             // 菜单管理
│    │       └── index.ts               // 接口文件
│    └── <span class="token punctuation">..</span>.
└── <span class="token punctuation">..</span>.
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>集中管理，方便查找。</p></div><hr><h2 id="枚举数据" tabindex="-1"><a class="header-anchor" href="#枚举数据" aria-hidden="true">#</a> 枚举数据</h2><ul><li>所有枚举定义文件统一放到 <code>@/enums</code> 目录下，且文件以 <code>模块名.enum.ts</code> 的范式命名。</li></ul>`,14)),e(c,null,{default:t(()=>[e(o,{title:"【 Vue2 + JavaScript 】",active:""},{default:t(()=>s[2]||(s[2]=[n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[a(`my-project
├── src
│    └── enums                    // 枚举文件夹
│    │   └── userManage               // 用户管理
│    │       └── index.ts                 // 枚举文件
│    │   └── menuManage               // 菜单管理
│    │       └── index.ts                 // 枚举文件
│    └── `),n("span",{class:"token punctuation"},".."),a(`.
└── `),n("span",{class:"token punctuation"},".."),a(`.
`)])])],-1)])),_:1}),e(o,{title:"【 Vue3 + TypeScript 】"},{default:t(()=>s[3]||(s[3]=[n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[a(`my-project
├── src
│    └── enums                    // 枚举文件夹
│    │   └── userManage.enum.ts       // 【用户管理】枚举文件
│    │   └── menuManage.enum.ts       // 【菜单管理】枚举文件
│    └── `),n("span",{class:"token punctuation"},".."),a(`.
└── `),n("span",{class:"token punctuation"},".."),a(`.
`)])])],-1)])),_:1})]),_:1}),s[8]||(s[8]=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"原因："),n("p",null,"集中管理，方便查找。")],-1)),s[9]||(s[9]=n("hr",null,null,-1)),s[10]||(s[10]=n("h2",{id:"typescript-类型或接口定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typescript-类型或接口定义","aria-hidden":"true"},"#"),a(" TypeScript 类型或接口定义")],-1)),s[11]||(s[11]=n("ul",null,[n("li",null,[a("类型或接口定义文件统一放在 "),n("code",null,"@/types"),a(" 目录下，且文件以 "),n("code",null,"模块名.type.ts"),a(" 的范式命名。")])],-1)),e(c,null,{default:t(()=>[e(o,{title:"【 Vue2 + JavaScript 】",active:""},{default:t(()=>s[4]||(s[4]=[n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[a(`my-project
├── src
│    └── types                    // 类型文件夹
│    │   └── userManage               // 用户管理
│    │       └── index.ts                 // 类型文件
│    │   └── menuManage               // 菜单管理
│    │       └── index.ts                 // 类型文件
│    └── `),n("span",{class:"token punctuation"},".."),a(`.
└── `),n("span",{class:"token punctuation"},".."),a(`.
`)])])],-1)])),_:1}),e(o,{title:"【 Vue3 + TypeScript 】"},{default:t(()=>s[5]||(s[5]=[n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[a(`my-project
├── src
│    └── types                    // 类型文件夹
│    │   └── userManage.type.ts       // 【用户管理】类型文件
│    │   └── menuManage.type.ts       // 【菜单管理】类型文件
│    └── `),n("span",{class:"token punctuation"},".."),a(`.
└── `),n("span",{class:"token punctuation"},".."),a(`.
`)])])],-1)])),_:1})]),_:1}),s[12]||(s[12]=l('<div class="custom-container tip"><p class="custom-container-title">原因：</p><p>类型文件单独存放，避免与页面逻辑文件混放造成干扰开发者的情况。</p></div><hr><h2 id="移除打印" tabindex="-1"><a class="header-anchor" href="#移除打印" aria-hidden="true">#</a> 移除打印</h2><ul><li>请在代码提交前删除页面中所有的 <code>console</code> 打印。</li></ul><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>虽然项目打包后我们一般会去除所有打印信息，但是在开发阶段，console 打印在 devtools 打开的情况下会造成内存泄漏。而且过多的打印信息会有时会干扰到其他开发者调试代码。</p></div><hr><h2 id="移除冗余注释" tabindex="-1"><a class="header-anchor" href="#移除冗余注释" aria-hidden="true">#</a> 移除冗余注释</h2><ul><li>如果由于需求变更，原本的一段旧代码不适用时，请删除它，而不是注释它。你或许担心未来这段代码需要重新使用时通过 SVN 查找过于麻烦，我认为你大可不必吝啬这一点查找的时间，并且，大多数情况下你的这一段旧代码再也不会使用，它会一直躺在那。</li></ul><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>冗余注释增加代码管理成本，导致后续维护者不确定这段旧代码是否重要。</p></div>',9))])}const g=u(d,[["render",k],["__file","vue.html.vue"]]);export{g as default};
