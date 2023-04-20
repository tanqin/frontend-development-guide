# JavaScript 规范

## 引用

- 对所有变量的声明都应该优先使用 `const`，不要使用 `var`。原因：确保你无法重新分配变量引用，以避免出现错误和难以理解的代码。

```js
// ❌ bad
var num = 1

// ✅ good
const num = 1
```

- 对于可变动的变量引用，使用 `let` 代替 `var`。原因：`let` 属于块级作用域，而 `var` 属于函数级作用域，存在变量声明提升、自动挂至 `window` 对象等问题，使用 `var` 易导致错误引用问题。

```js
// ❌ bad
console.log(count) // 输出 undefined。
if (Math.random() >= 0.5) {
  var count = 1
}
console.log(count) // 输出 1。

// ✅ good
console.log(count) // 报错 ReferenceError: count is not defined。
if (Math.random() >= 0.5) {
  let count = 1
}
console.log(count) // 报错 ReferenceError: count is not defined。

```

## 命名规范

- 变量名使用驼峰命名规则，推荐使用有意义的纯英文单词组合，不要使用拼音、拼音缩写或数字。

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

- 对应公共常量，推荐使用「英文单词全大写 + 下划线」组合。多用于全局环境变量文件、配置文件、工具类文件中。

```js
// ✅ good
const APP_TITLE = '应用名称'
const BASE_URL = 'https://www.xxx.com/'
const TOKEN_KEY = 'token-key'
```

## 对象

- 请使用对象方法的简写方式。

```js
// ❌ bad
const user = {
  name: 'Andy',
  intro: function () {
    console.log(`My name is ${this.name}`)
  }
}

// ✅ good
const user = {
  name: 'Tom',
  intro () {
    console.log(`My name is ${this.name}`)
  }
}
```

- 请使用对象属性值的简写方式。

```js
const name = 'Andy'

// ❌ bad
const user = {
  name: name
}

// ✅ good
const user = {
  name
}
```

## 逻辑运算

- 请使用等同符 `===`，摒弃等值符 `==`。唯一考虑使用 `==` 的场景是一个变量的值可能为 `null || undefined` 时，此时可以使用 `obj == null` 达到简化代码的目的。

```js
const num = 2
const strNum = '2'

// ❌ bad
console.log(num == strNum) // true

// ✅ good
console.log(num === strNum) // false
console.log(Number(strNum) === num) // true
```
