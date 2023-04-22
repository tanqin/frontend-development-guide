# JavaScript 规范

## 变量声明

- 对所有变量的声明都应该优先使用 `const`，其次考虑 `let`，不要使用 `var`。

::: tip 原因：
确保你定义的变量无法被重新分配，以避免出现数据被篡改的问题。
:::

```js
// ❌ bad
var num = 1

// ✅ good
const num = 1
```

---

- 当我们想要定义一个变量而不是常量时，使用 `let`，不要使用 `var`。
::: tip 原因：
`let` 属于块级作用域，而 `var` 属于函数级作用域，存在变量提升、闭包、可重复声明、全局变量自动挂载 window 对象等问题，使用 `var` 易导致错误引用。
:::

```js
// ❌ bad
console.log(count) // 输出 undefined。
if (Math.random() >= 0.5) {
  var count = 1 // count 变量包裹在花括号内，直觉告诉我们这块数据很安全，但实际却是我们在外部也能够访问，而且还能够修改它，这是 var 函数级作用域存在的缺陷
}
console.log(count) // 输出 1。

// ✅ good
console.log(count) // 报错 ReferenceError: count is not defined。
if (Math.random() >= 0.5) {
  let count = 1 
}
console.log(count) // 报错 ReferenceError: count is not defined。

```

---

## 命名规范

- 变量名使用小驼峰命名规则，推荐使用有意义的纯英文单词组合，不要使用拼音、拼音缩写或纯数字。
::: tip 原因：
没有特别的原因，主要是为了保持风格统一，提高代码的可读性和可维护性。
:::

```js
// ❌ bad
const first_name = 'Andy'
const nameA = 'Andy'
const name1 = 'Andy'
const mingzi = 'Andy'
const mz = 'Andy'

// ✅ good
const firstName = 'Andy' 
```

---

- 对于公共常量，推荐使用「英文单词全大写 + 下划线」组合。多用于全局环境变量文件、配置文件、工具类文件中。

```js
// ✅ good
const APP_TITLE = '应用名称'
const BASE_URL = 'https://www.xxx.com/'
const TOKEN_KEY = 'token-key'
```

---

## 对象

- 请使用对象属性值、对象方法的简写方式。
::: tip 原因：
更简洁、更直观、减少冗余代码。
:::

```js
const name = 'Andy'

// ❌ bad
const user = {
  name: name,
  intro: function () {
    console.log(`My name is ${this.name}`)
  }
}

// ✅ good
const user = {
  name,
  intro () {
    console.log(`My name is ${this.name}`)
  }
}
```

---

## 逻辑运算

- 请使用等同符 `===`，不要使用等值符 `==`。唯一考虑使用 `==` 的场景是一个变量的值可能为 `null || undefined` 时，此时可以使用 `obj == null` 达到简化代码的目的。
::: tip 原因：
等同符 `===` 需要确保类型和值都完全匹配，等值符 `==` 只需要转换后值相等即可。`==` 由于存在隐式强制类型转换，导致结果难以预测，且转换规则复杂且难以记忆。
:::

```js
const num = 2
const strNum = '2'

// ❌ bad
console.log(num == strNum) // true
console.log('0' == false) // true。逆天结果
console.log(false == '') // true。逆天结果
console.log(null == undefined) // true。逆天结果


// ✅ good
console.log(num === strNum) // false
console.log(Number(strNum) === num) // true
console.log('0' == false) // false
console.log(false == '') // false
console.log(null == undefined) // false
```

---
