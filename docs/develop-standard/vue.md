# Vue 规范

## 前提

- Vue 项目开发要遵循前面提到的样式规范、JavaScript 规范、Typescript 规范。

---

## 项目命名

- 项目名使用中横线（-）作为分隔符。
::: tip 原因：
根据 HTML 和 XML 规范，中横线（-）被定义为有效的标识符字符。而下划线（_）则不是一个有效的标识符字符。
:::

---

## 常用搭配词

**handle**：`handleClick`、`handleDelete` 表达的都是执行一个事件处理函数，用于按钮点击时事件处理。
::: tip 原因：
约定俗成的命名方法，有助于团队内部协作和提高代码的可维护性。
:::

---

## 全局方法

- 全局方法统一以 $ 符号开头。例如 `$add`。
:::tip 原因：
方便区分全局方法与页面内定义的方法。
:::
<CodeGroup>
  <CodeGroupItem title="【 Vue2 + JavaScript 】" active>

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
  <CodeGroupItem title="【 Vue3 + TypeScript 】">

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

// @/main.ts
import { add } from '@/utils/index.ts'

app.config.globalProperties.$add = add
```

  </CodeGroupItem>
</CodeGroup>

---

## 公共组件

---

- 公共组件统一放到 `@/components` 目录下，且应该给各个组件创建一个独立的文件夹（文件夹采用大驼峰命名，例如 `SearchBox`），文件夹下创建 `index.vue` 作为组件入口；所有定义的公共组件，都应该在该组件目录下编写组件使用说明书。

```shell
my-project
├── src
│    └── components            // 公共组件文件夹
│    │   └── SearchBox             // 搜索组件
│    │       └── index.vue             // 组件入口
│    │       └── README.md             // 组件使用说明书
│    └── ...
└── ...
```

:::tip 原因：
集中管理，方便查找。给组件一个独立的文件夹，对于比较复杂的组件，需要拆分多个页面时，这将很有帮助；编写组件使用说明书方便其他开发人员使用公共组件。
:::

---

## API 接口

- 所有 API 接口文件统一放到 `@/apis` 目录下，根据各模块不同进行分组放置。

```shell
my-project
├── src
│    └── apis                   // API 接口文件夹
│    │   └── userManage             // 用户管理
│    │       └── index.ts               // 接口文件
│    │   └── menuManage             // 菜单管理
│    │       └── index.ts               // 接口文件
│    └── ...
└── ...
```

:::tip 原因：
集中管理，方便查找。
:::

---

## 枚举数据

- 所有枚举定义文件统一放到 `@/enums` 目录下，且文件以 `模块名.enum.ts` 的范式命名。

<CodeGroup>
  <CodeGroupItem title="【 Vue2 + JavaScript 】" active>
  
```shell
my-project
├── src
│    └── enums                    // 枚举文件夹
│    │   └── userManage               // 用户管理
│    │       └── index.ts                 // 枚举文件
│    │   └── menuManage               // 菜单管理
│    │       └── index.ts                 // 枚举文件
│    └── ...
└── ...
```

  </CodeGroupItem>
  <CodeGroupItem title="【 Vue3 + TypeScript 】">
  
```shell
my-project
├── src
│    └── enums                    // 枚举文件夹
│    │   └── userManage.enum.ts       // 【用户管理】枚举文件
│    │   └── menuManage.enum.ts       // 【菜单管理】枚举文件
│    └── ...
└── ...
```

  </CodeGroupItem>
</CodeGroup>

:::tip 原因：
集中管理，方便查找。
:::

---

## TypeScript 类型或接口定义

- 类型或接口定义文件统一放在 `@/types` 目录下，且文件以 `模块名.type.ts` 的范式命名。

<CodeGroup>
  <CodeGroupItem title="【 Vue2 + JavaScript 】" active>
  
```shell
my-project
├── src
│    └── types                    // 类型文件夹
│    │   └── userManage               // 用户管理
│    │       └── index.ts                 // 类型文件
│    │   └── menuManage               // 菜单管理
│    │       └── index.ts                 // 类型文件
│    └── ...
└── ...
```

  </CodeGroupItem>
  <CodeGroupItem title="【 Vue3 + TypeScript 】">
  
```shell
my-project
├── src
│    └── types                    // 类型文件夹
│    │   └── userManage.type.ts       // 【用户管理】类型文件
│    │   └── menuManage.type.ts       // 【菜单管理】类型文件
│    └── ...
└── ...
```

  </CodeGroupItem>
</CodeGroup>

:::tip 原因：
类型文件单独存放，避免与页面逻辑文件混放造成干扰开发者的情况。
:::

---

## 移除打印

- 请在代码提交前删除页面中所有的 `console` 打印。
:::tip 原因：
虽然项目打包后我们一般会去除所有打印信息，但是在开发阶段，console 打印在 devtools 打开的情况下会造成内存泄漏。而且过多的打印信息会有时会干扰到其他开发者调试代码。
:::

---

## 移除冗余注释

- 如果由于需求变更，原本的一段旧代码不适用时，请删除它，而不是注释它。你或许担心未来这段代码需要重新使用时通过 SVN 查找过于麻烦，我认为你大可不必吝啬这一点查找的时间，并且，大多数情况下你的这一段旧代码再也不会使用，它会一直躺在那。
:::tip 原因：
冗余注释增加代码管理成本，导致后续维护者不确定这段旧代码是否重要。
:::
