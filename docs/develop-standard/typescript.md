# TypeScript 规范

## TypeScript 类型或接口定义

- 定义类型或接口时，请给出类型（接口）名注释和各字段注释。类型名以 T 开头，即 type 的首字母；接口名以 I 开头，即 interface 的首字母。

```ts
/* 登录表单 */
type TLoginFrom = {
  username: string
  password: string
  code: string
}

/* 登录表单 */
interface ILoginForm {
  username: string
  password: string
  code: string
}
```
