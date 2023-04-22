# Vue 规范

## 前提

- Vue 项目开发要遵循前面提到的样式规范、JavaScript 规范、Typescript 规范。

## 项目命名

- 项目名使用中横线（-）作为分隔符。
::: tip 原因：
根据 HTML 和 XML 规范，中横线（-）被定义为有效的标识符字符。而下划线（_）则不是一个有效的标识符字符。
:::

## 常用搭配词说明

**handle**：`handleClick`、`handleDelete` 表达的都是执行一个事件处理函数，用于按钮点击时事件处理。
::: tip 原因：
约定俗成的命名方法，有助于团队内部协作和提高代码的可维护性。
:::

## 全局方法

- 全局方法统一以 $ 符号开头。例如 `$add`。
:::tip 原因：
方便区分全局方法与页面内定义的方法。
:::
<CodeGroup>
  <CodeGroupItem title="【Vue2 + JavaScript】" active>

```javascript
// @/utils/index.js
/**
 * 求两数之和
 * @param {number} num1 第一个数
 * @param {number} num2 第二个数
 * @returns {number} 相加结果
 */
export function add(num1, num2) {
  return num1 + num2
}

// @/main.js
import { add } from '@/utils/index.js'

Vue.prototype.$add = add
```

  </CodeGroupItem>
  <CodeGroupItem title="【Vue3 + TypeScript】">

```typescript
// @/utils/index.ts
/**
 * 求两数之和
 * @param {number} num1 第一个数
 * @param {number} num2 第二个数
 * @returns {number} 相加结果
 */
export function add(num1: number, num2: number) {
  return num1 + num2
}

// @/main.js
import { add } from '@/utils/index.ts'

app.config.globalProperties.$add = add
```

  </CodeGroupItem>
</CodeGroup>

## 公共组件

- 公共组件统一以 Com 结尾，这里的 Com 可理解为 `common component`。例如 `HeaderCom`。
:::tip 原因：
方便区分公共组件与页面组件。
:::

## API 接口

- 所有 API 接口文件统一放到 `@/apis` 目录下，根据各模块不同进行分组放置。
:::tip 原因：
集中管理，方便查找。
:::

## 枚举数据

- 所有枚举定义文件统一放到 `@/enums` 目录下，根据各模块不同进行分组放置。
:::tip 原因：
集中管理，方便查找。
:::

## TypeScript 类型或接口定义

- 类型或接口定义文件统一放在 `@/types` 目录下，且以 `模块名.d.ts` 的范式命名。例如：`login.d.ts`。
:::tip 原因：
类型文件单独存放，避免与页面逻辑文件混放造成干扰开发者的情况。使用 `模块名.d.ts` 的命名方式使得使用类型时无需导入，方便快捷。
:::

## 移除打印

- 请在代码提交前删除页面中所有的 `console` 打印。
:::tip 原因：
虽然项目打包后我们一般会去除所有打印信息，但是在开发阶段，console 打印在 devtools 打开的情况下会造成内存泄漏。而且过多的打印信息会有时会干扰到其他开发者调试代码。
:::
