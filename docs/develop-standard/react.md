# React 规范

## 前提

- React 项目开发要遵循前面提到的样式规范、JavaScript 规范、Typescript 规范，且前面提到的 Vue 规范在 React 中依然适用。

## 命名规则

- 组件文件扩展名

如果使用 `JavaScript`，则文件扩展名为 `.jsx`；

如果使用 `TypeScript`，则文件扩展名为 `.tsx`。

- 组件文件名

如果是组件文件，则使用大驼峰命名法，如 `MyComponent.jsx`、`MyComponent.tsx`；

如果组件是一个目录，则组件主入口命名为 `index`，如 `index.jsx`、`index.tsx`。

- 自定义组件引用

自定义组件引用时，使用大驼峰命名法。

```tsx
// ❌ bad
import myComponent from './MyComponent'

// ✅ good
import MyComponent from './MyComponent'
```

- 组件属性名

React DOM 使用小驼峰式命名法来定义属性的名称。

```tsx
// ✅ good
<div onClick={handleClick} />
```

## 属性

- 属性名使用小驼峰命名法。

```tsx
// ❌ bad
<Foo UserName='Tom' phone_number={12345678901} />

// ✅ good
<Foo userName='Tom' phoneNumber={12345678901} />
```

- 当属性值为 `true` 时省略属性值。

```tsx
// ❌ bad
<Foo hidden={true} />

// ✅ good
<Foo hidden />
```

- 尽量避免使用数组的索引作为 `key` 属性值, 建议使用稳定的 `ID` 值。原因：由于索引存在不稳定性，会对性能产生副作用。

```tsx
// ❌ bad
{todoList.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// ✅ good
{todoList.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```
