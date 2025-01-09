import{_ as s,p as a,q as t,a1 as o}from"./framework-a44ba987.js";const p={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[o(`<h1 id="javascript-规范" tabindex="-1"><a class="header-anchor" href="#javascript-规范" aria-hidden="true">#</a> JavaScript 规范</h1><h2 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h2><ul><li>对所有变量的声明都应该优先使用 <code>const</code>，其次考虑 <code>let</code>，不要使用 <code>var</code>。</li></ul><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>确保你定义的变量无法被重新分配，以避免出现数据被篡改的问题。</p></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ❌ bad</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment">// ✅ good</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">1</span>
</code></pre></div><hr><ul><li>当我们想要定义一个变量而不是常量时，使用 <code>let</code>，不要使用 <code>var</code>。</li></ul><div class="custom-container tip"><p class="custom-container-title">原因：</p><p><code>let</code> 属于块级作用域，而 <code>var</code> 属于函数级作用域，存在变量提升、闭包、可重复声明、全局变量自动挂载 window 对象等问题，使用 <code>var</code> 易导致错误引用。</p></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ❌ bad</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// 输出 undefined。</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// count 变量包裹在花括号内，直觉告诉我们这块数据很安全，但实际却是我们在外部也能够访问，而且还能够修改它，这是 var 函数级作用域存在的缺陷</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// 输出 1。</span>

<span class="token comment">// ✅ good</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// 报错 ReferenceError: count is not defined。</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span> 
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// 报错 ReferenceError: count is not defined。</span>

</code></pre></div><hr><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h2><ul><li>变量名使用小驼峰命名规则，推荐使用有意义的纯英文单词组合，不要使用拼音、拼音缩写或纯数字。</li></ul><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>没有特别的原因，主要是为了保持风格统一，提高代码的可读性和可维护性。</p></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ❌ bad</span>
<span class="token keyword">const</span> first_name <span class="token operator">=</span> <span class="token string">&#39;Andy&#39;</span>
<span class="token keyword">const</span> nameA <span class="token operator">=</span> <span class="token string">&#39;Andy&#39;</span>
<span class="token keyword">const</span> name1 <span class="token operator">=</span> <span class="token string">&#39;Andy&#39;</span>
<span class="token keyword">const</span> mingzi <span class="token operator">=</span> <span class="token string">&#39;Andy&#39;</span>
<span class="token keyword">const</span> mz <span class="token operator">=</span> <span class="token string">&#39;Andy&#39;</span>

<span class="token comment">// ✅ good</span>
<span class="token keyword">const</span> firstName <span class="token operator">=</span> <span class="token string">&#39;Andy&#39;</span> 
</code></pre></div><hr><ul><li>对于公共常量，推荐使用「英文单词全大写 + 下划线」组合。多用于全局环境变量文件、配置文件、工具类文件中。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ✅ good</span>
<span class="token keyword">const</span> <span class="token constant">APP_TITLE</span> <span class="token operator">=</span> <span class="token string">&#39;应用名称&#39;</span>
<span class="token keyword">const</span> <span class="token constant">BASE_URL</span> <span class="token operator">=</span> <span class="token string">&#39;https://www.xxx.com/&#39;</span>
<span class="token keyword">const</span> <span class="token constant">TOKEN_KEY</span> <span class="token operator">=</span> <span class="token string">&#39;token-key&#39;</span>
</code></pre></div><hr><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><ul><li>请使用对象属性值、对象方法的简写方式。</li></ul><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>更简洁、更直观、减少冗余代码。</p></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Andy&#39;</span>

<span class="token comment">// ❌ bad</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
  <span class="token function-variable function">intro</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ✅ good</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>
  <span class="token function">intro</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><hr><h2 id="逻辑运算" tabindex="-1"><a class="header-anchor" href="#逻辑运算" aria-hidden="true">#</a> 逻辑运算</h2><ul><li>请使用等同符 <code>===</code>，不要使用等值符 <code>==</code>。唯一考虑使用 <code>==</code> 的场景是一个变量的值可能为 <code>null || undefined</code> 时，此时可以使用 <code>obj == null</code> 达到简化代码的目的。</li></ul><div class="custom-container tip"><p class="custom-container-title">原因：</p><p>等同符 <code>===</code> 需要确保类型和值都完全匹配，等值符 <code>==</code> 只需要转换后值相等即可。<code>==</code> 由于存在隐式强制类型转换，导致结果难以预测，且转换规则复杂且难以记忆。</p></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">const</span> strNum <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span>

<span class="token comment">// ❌ bad</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">==</span> strNum<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// true。逆天结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true。逆天结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// true。逆天结果</span>


<span class="token comment">// ✅ good</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">===</span> strNum<span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>strNum<span class="token punctuation">)</span> <span class="token operator">===</span> num<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><hr>`,28)]))}const u=s(p,[["render",e],["__file","javascript.html.vue"]]);export{u as default};
