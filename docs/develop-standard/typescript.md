# TypeScript 规范

## 类型或接口定义

- 定义类型或接口时，请给出类型名（接口名）注释和各字段注释。类型名以 T 开头，即 type 的首字母；接口名以 I 开头，即 interface 的首字母。

<CodeGroup>
  <CodeGroupItem title="type" active>

```ts
// ✅ good
/* 登录表单 */
type TLoginForm = {
  // 用户名
  username: string
  // 密码
  password: string
  // 验证码
  code: string
}

// or

// ✅ good
/* 登录表单 */
type TLoginForm = {
  // 用户名 | 密码 | 验证码
  [key in 'username' | 'password' | 'code' ]: string
}
```

  </CodeGroupItem>
  <CodeGroupItem title="interface">

```ts
// ✅ good
/* 登录表单 */
interface ILoginForm {
  // 用户名
  username: string
  // 密码
  password: string
  // 验证码
  code: string
}
```

  </CodeGroupItem>
</CodeGroup>

---
