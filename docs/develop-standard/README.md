# 样式规范

## 类选择器

- 类选择器由多个词组成时，类名统一使用中横线（-）作为分隔符。

::: tip 原因：
根据 HTML 和 XML 规范，中横线（-）被定义为有效的标识符字符。而下划线（\_）则不是一个有效的标识符字符。
:::

```css
/* ❌ bad */
.mainContainer {
}
.main_container {
}

/* ✅ good */
.main-container {
}
```

---

## 变量

- 开发前，根据项目原型总体色调，定义一些可重用的全局样式变量。
  ::: tip 原因：
  使用全局样式变量，可以确保整体色调一致，且能够降低后续颜色变更时的修改成本。
  :::

<CodeGroup>
  <CodeGroupItem title="css" active>

```css
:root {
  --primary-color: #f00;
}
```

  </CodeGroupItem>
  <CodeGroupItem title="less">

```less
@primary-color: #f00;
```

  </CodeGroupItem>
  <CodeGroupItem title="scss">

```scss
$primary-color: #f00;
```
  
  </CodeGroupItem>
</CodeGroup>

---

## 书写顺序

- 请按照以下顺序书写 CSS 属性：

| 顺序 |   属性类别   |                                                                                 属性                                                                                 |
| :--: | :----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  1   |   定位属性   |                                                 position、top、right、bottom、left、z-index、display、justify-content、align-items、float、clear、overflow、overflow-x、overflow-y                                                   |
|  2   |  盒模型属性  |                   width、height、line-height、margin、padding、border、border-radius、background 系列（background-color、background-image...） 等                    |
|  3   |   文本属性   | color、font 系列（font-family、font-size、font-style...）、text-align、text-decoration、vertical-align、white-space、break-word、letter-spacing、color-text-align 等 |
|  4   | 视觉效果属性 |                                                                 box-shadow、text-shadow、opacity 等                                                                  |
|  5   |   变换属性   |                                                                       transform、transition 等                                                                       |
|  6   |   其他属性   |                                                                    content、cursor、animation 等                                                                     |

::: tip 原因：
正确的书写顺序，以减少浏览器 reflow（回流），提升浏览器渲染 dom 的性能。
:::

以下提供一份完整的书写顺序参考：

::: details 点击查看

```css
/* ✅ good */
.example {
  position: relative;
  top: 10px;
  right: 20px;
  bottom: auto;
  left: auto;
  z-index: 10;
  display: block;
  justify-content: center;
  align-items: center;
  float: left;
  clear: both;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
  padding: 0;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
  width: auto;
  min-width: 100px;
  max-width: 500px;
  height: auto;
  min-height: 50px;
  max-height: 300px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  border: 1px solid #ccc;
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
  border-top: none;
  border-top-style: none;
  border-top-width: 0;
  border-top-color: transparent;
  border-right: 2px dotted #999;
  border-right-style: dotted;
  border-right-width: 2px;
  border-right-color: #999;
  border-bottom: 3px solid #333;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: #333;
  border-left: none;
  border-left-style: none;
  border-left-width: 0;
  border-left-color: transparent;
  border-radius: 5px;
  text-align: center;
  text-justify: inter-word;
  text-indent: 20px;
  text-overflow: clip;
  text-decoration: underline;
  white-space: nowrap;
  color: #333;
  background: linear-gradient(#f1f1f1, #ddd);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  background-clip: border-box;
  opacity: 1;
  filter: none;
  list-style: none;
  outline: none;
  visibility: visible;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 0 #fff;
  resize: both;
  transition: all 0.3s ease-in-out;
```

---
