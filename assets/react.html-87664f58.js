import{_ as n,p as a,q as s,a1 as t}from"./framework-5866ffd3.js";const p={},o=t(`<h1 id="react-规范" tabindex="-1"><a class="header-anchor" href="#react-规范" aria-hidden="true">#</a> React 规范</h1><h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2><ul><li>React 项目开发要遵循前面提到的样式规范、JavaScript 规范、Typescript 规范，且前面提到的 Vue 规范在 React 中依然适用。</li></ul><h2 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h2><ul><li>组件文件扩展名</li></ul><p>如果使用 <code>JavaScript</code>，则文件扩展名为 <code>.jsx</code>；</p><p>如果使用 <code>TypeScript</code>，则文件扩展名为 <code>.tsx</code>。</p><ul><li>组件文件名</li></ul><p>如果是组件文件，则使用大驼峰命名法，如 <code>MyComponent.jsx</code>、<code>MyComponent.tsx</code>；</p><p>如果组件是一个目录，则组件主入口命名为 <code>index</code>，如 <code>index.jsx</code>、<code>index.tsx</code>。</p><ul><li>自定义组件引用</li></ul><p>自定义组件引用时，使用大驼峰命名法。</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// ❌ bad</span>
<span class="token keyword">import</span> myComponent <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent&#39;</span>

<span class="token comment">// ✅ good</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent&#39;</span>
</code></pre></div><ul><li>组件属性名</li></ul><p>React DOM 使用小驼峰式命名法来定义属性的名称。</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// ✅ good</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><ul><li>属性名使用小驼峰命名法。</li></ul><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// ❌ bad</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span> <span class="token attr-name">UserName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Tom<span class="token punctuation">&#39;</span></span> <span class="token attr-name">phone_number</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">12345678901</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">// ✅ good</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span> <span class="token attr-name">userName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Tom<span class="token punctuation">&#39;</span></span> <span class="token attr-name">phoneNumber</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">12345678901</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><ul><li>当属性值为 <code>true</code> 时省略属性值。</li></ul><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// ❌ bad</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span> <span class="token attr-name">hidden</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">// ✅ good</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span></span> <span class="token attr-name">hidden</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><ul><li>尽量避免使用数组的索引作为 <code>key</code> 属性值, 建议使用稳定的 <code>ID</code> 值。原因：由于索引存在不稳定性，会对性能产生副作用。</li></ul><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// ❌ bad</span>
<span class="token punctuation">{</span>todoList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>todo<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Todo</span></span>
    <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>todo<span class="token punctuation">}</span></span>
    <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token comment">// ✅ good</span>
<span class="token punctuation">{</span>todoList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>todo <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Todo</span></span>
    <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>todo<span class="token punctuation">}</span></span>
    <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre></div>`,23),e=[o];function c(l,u){return a(),s("div",null,e)}const k=n(p,[["render",c],["__file","react.html.vue"]]);export{k as default};