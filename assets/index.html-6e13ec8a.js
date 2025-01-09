import{_ as u,M as e,p as r,q as i,a1 as c,N as t,V as p,R as n,t as a}from"./framework-a44ba987.js";const k={};function d(y,s){const o=e("CodeGroupItem"),l=e("CodeGroup");return r(),i("div",null,[s[3]||(s[3]=c(`<h1 id="样式规范" tabindex="-1"><a class="header-anchor" href="#样式规范" aria-hidden="true">#</a> 样式规范</h1><h2 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器" aria-hidden="true">#</a> 类选择器</h2><ul><li>类选择器由多个词组成时，类名统一使用中横线（-）作为分隔符。</li></ul><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>根据 HTML 和 XML 规范，中横线（-）被定义为有效的标识符字符。而下划线（_）则不是一个有效的标识符字符。</p></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* ❌ bad */</span>
<span class="token selector">.mainContainer</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.main_container</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* ✅ good */</span>
<span class="token selector">.main-container</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><hr><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><ul><li>开发前，根据项目原型总体色调，定义一些可重用的全局样式变量。<div class="custom-container tip"><p class="custom-container-title">原因：</p><p>使用全局样式变量，可以确保整体色调一致，且能够降低后续颜色变更时的修改成本。</p></div></li></ul>`,8)),t(l,null,{default:p(()=>[t(o,{title:"css",active:""},{default:p(()=>s[0]||(s[0]=[n("div",{class:"language-css","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},":root"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"--primary-color"),n("span",{class:"token punctuation"},":"),a(" #f00"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1)])),_:1}),t(o,{title:"less"},{default:p(()=>s[1]||(s[1]=[n("div",{class:"language-less","data-ext":"less"},[n("pre",{class:"language-less"},[n("code",null,[n("span",{class:"token variable"},[a("@primary-color"),n("span",{class:"token punctuation"},":")]),a(" #f00"),n("span",{class:"token punctuation"},";"),a(`
`)])])],-1)])),_:1}),t(o,{title:"scss"},{default:p(()=>s[2]||(s[2]=[n("div",{class:"language-scss","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token property"},[n("span",{class:"token variable"},"$primary-color")]),n("span",{class:"token punctuation"},":"),a(" #f00"),n("span",{class:"token punctuation"},";"),a(`
`)])])],-1)])),_:1})]),_:1}),s[4]||(s[4]=c(`<hr><h2 id="书写顺序" tabindex="-1"><a class="header-anchor" href="#书写顺序" aria-hidden="true">#</a> 书写顺序</h2><ul><li>请按照以下顺序书写 CSS 属性：</li></ul><table><thead><tr><th style="text-align:center;">顺序</th><th style="text-align:center;">属性类别</th><th style="text-align:center;">属性</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">定位属性</td><td style="text-align:center;">position、top、right、bottom、left、z-index、display、justify-content、align-items、float、clear、overflow、overflow-x、overflow-y</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">盒模型属性</td><td style="text-align:center;">width、height、line-height、margin、padding、border、border-radius、background 系列（background-color、background-image...） 等</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">文本属性</td><td style="text-align:center;">color、font 系列（font-family、font-size、font-style...）、text-align、text-decoration、vertical-align、white-space、break-word、letter-spacing、color-text-align 等</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">视觉效果属性</td><td style="text-align:center;">box-shadow、text-shadow、opacity 等</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">变换属性</td><td style="text-align:center;">transform、transition 等</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:center;">其他属性</td><td style="text-align:center;">content、cursor、animation 等</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>正确的书写顺序，以减少浏览器 reflow（回流），提升浏览器渲染 dom 的性能。</p></div><p>以下提供一份完整的书写顺序参考：</p><details class="custom-container details"><summary>点击查看</summary><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* ✅ good */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">max-height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-top-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-top-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-top-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 2px dotted #999<span class="token punctuation">;</span>
  <span class="token property">border-right-style</span><span class="token punctuation">:</span> dotted<span class="token punctuation">;</span>
  <span class="token property">border-right-width</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">border-right-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid #333<span class="token punctuation">;</span>
  <span class="token property">border-bottom-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-bottom-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-left-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-left-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">text-justify</span><span class="token punctuation">:</span> inter-word<span class="token punctuation">;</span>
  <span class="token property">text-indent</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> clip<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>#f1f1f1<span class="token punctuation">,</span> #ddd<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 2px 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 1px 1px 0 #fff<span class="token punctuation">;</span>
  <span class="token property">resize</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease-in-out<span class="token punctuation">;</span>
</code></pre></div><hr></details>`,7))])}const x=u(k,[["render",d],["__file","index.html.vue"]]);export{x as default};
