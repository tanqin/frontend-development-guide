# 样式规范

## 类选择器

- 类选择器由多个词组成时，类名统一使用中横线（-）作为分隔符。

::: tip 原因：
根据 HTML 和 XML 规范，中横线（-）被定义为有效的标识符字符。而下划线（_）则不是一个有效的标识符字符。
:::

```css
/* ❌ bad */
.mainContainer { }
.main_container { }

/* ✅ good */
.main-container { }
```

---

## 变量

- 开发前，根据项目原型总体色调，定义一些可重用的全局样式变量。
::: tip 原因：
使用样式变量，可以确保整体色调一致，且能够降低后续颜色变更时的修改成本。
:::

---

## 书写顺序

- 请按照以下顺序书写 CSS 属性：

| 顺序 | 属性类别 | 属性 |
| :---: | :---: | :---: |
| 1 | 定位属性 | display、position、float、z-index、clear、visibility、overflow 等 |
| 2 |盒模型属性| width、height、line-height、margin、padding、border、border-radius、background系列（background-color、background-image...） 等 |
| 3 | 文本属性 | color、font系列（font-family、font-size、font-style...）、text-align、text-decoration、vertical-align、white-space、break-word、letter-spacing、color-text-align 等 |
| 4 | 视觉效果属性 | box-shadow、text-shadow、opacity 等 |
| 5 | 变换属性 | transform、transition 等 |
| 6 | 其他属性 | content、cursor、animation 等 |

::: tip 原因：
正确的书写顺序，以减少浏览器 reflow（回流），提升浏览器渲染 dom 的性能。
:::

以下提供一份完整的书写顺序参考：

::: details 点击查看

```css
/* ✅ good */
.example {
  /* 定位属性 */
  position: absolute;
  display: block;
  float: right;
  z-index: 9999;
  clear: both;
  visibility: visible;
  overflow: hidden;

  /* 盒模型属性 */
  width: 100%;
  height: 200px;
  line-height: 1.5;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  background-image: url('/image.jpg');
  background-size: cover;
  background-position: center center;

  /* 文本属性 */
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-style: italic;
  text-align: center;
  text-decoration: underline;
  vertical-align: middle;
  white-space: nowrap;
  word-break: break-all;
  letter-spacing: 1px;

  /* 视觉效果属性 */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 1px #ccc;
  opacity: 0.8;

  /* 变换属性 */
  transform: translateX(50px);
  transition: all 0.3s ease-in-out;

  /* 其他属性 */
  content: '';
  cursor: pointer;
  animation: slideIn 1s;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
```

---
