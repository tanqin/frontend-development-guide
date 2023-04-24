# VSCode

前往 [VSCode 官网](https://code.visualstudio.com/) 下载安装。你可以参考博文 [VSCode 安装教程详细简单版](https://blog.csdn.net/weixin_43928112/article/details/125813377) 进行安装。

## 插件安装

<PluginIconCom url="https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-close-tag/0.5.14/1644313109985/Microsoft.VisualStudio.Services.Icons.Default" /> [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)：输入开始标签后，自动添加结束标签
---

<PluginIconCom url="https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-rename-tag/0.1.10/1644319230173/Microsoft.VisualStudio.Services.Icons.Default" /> [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)：修改标签时，自动完成开始标签和结束标签的同步修改
---

<PluginIconCom url="https://ms-ceintl.gallerycdn.vsassets.io/extensions/ms-ceintl/vscode-language-pack-zh-hans/1.78.2023041909/1681896361735/Microsoft.VisualStudio.Services.Icons.Default" /> [Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)：中文语言包
---

<PluginIconCom url="https://streetsidesoftware.gallerycdn.vsassets.io/extensions/streetsidesoftware/code-spell-checker/2.20.4/1680519931370/Microsoft.VisualStudio.Services.Icons.Default" /> [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)：英文单词拼写检查
---

<PluginIconCom url="https://naumovs.gallerycdn.vsassets.io/extensions/naumovs/color-highlight/2.5.0/1631530639439/Microsoft.VisualStudio.Services.Icons.Default" /> [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)<Badge type="tip" text="非必须" vertical="middle" />：在编辑器中输入颜色值，自动高亮显示对应颜色
---

<PluginIconCom url="https://editorconfig.gallerycdn.vsassets.io/extensions/editorconfig/editorconfig/0.16.4/1607315835386/Microsoft.VisualStudio.Services.Icons.Default" /> [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)：根据 .editorconfig 文件中定义的代码风格和配置处理代码样式
---

<PluginIconCom url="https://dsznajder.gallerycdn.vsassets.io/extensions/dsznajder/es7-react-js-snippets/4.4.3/1645189962576/Microsoft.VisualStudio.Services.Icons.Default" /> [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)：快捷键生成 React/Redux/React-Native 代码片段
---

<PluginIconCom url="https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.4.0/1675676105903/Microsoft.VisualStudio.Services.Icons.Default" /> [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)：代码规范检查工具
---

<PluginIconCom url="https://davidanson.gallerycdn.vsassets.io/extensions/davidanson/vscode-markdownlint/0.49.0/1673500187272/Microsoft.VisualStudio.Services.Icons.Default" /> [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)：Markdown 文件样式检查和格式化工具
---

<PluginIconCom url="https://christian-kohler.gallerycdn.vsassets.io/extensions/christian-kohler/path-intellisense/2.8.4/1671488165155/Microsoft.VisualStudio.Services.Icons.Default" /> [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)：输入文件路径时，给予文件路径提示
---

<PluginIconCom url="https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/9.12.0/1682068702568/Microsoft.VisualStudio.Services.Icons.Default" /> [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)：代码格式化工具
---

<PluginIconCom url="https://johnstoncode.gallerycdn.vsassets.io/extensions/johnstoncode/svn-scm/2.15.7/1671796596069/Microsoft.VisualStudio.Services.Icons.Default" /> [SVN](https://marketplace.visualstudio.com/items?itemName=johnstoncode.svn-scm)：版本控制工具
---

<PluginIconCom url="https://vue.gallerycdn.vsassets.io/extensions/vue/volar/1.4.2/1682073503198/Microsoft.VisualStudio.Services.Icons.Default" /> [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)：Vue 语法支持和代码高亮显示
---

<PluginIconCom url="https://vue.gallerycdn.vsassets.io/extensions/vue/vscode-typescript-vue-plugin/1.4.2/1682073519031/Microsoft.VisualStudio.Services.Icons.Default" /> [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)：Vue 的 TypeScript 支持
---

## 插件配置

未提及的插件说明不需要配置，启用即生效。

**ESLint 配置**：VSCode 左下角「管理」图标 -> 设置 -> 搜索 “格式化” -> `Default Formatter` 这一项选择 `ESLint` -> `Format On Save` 这一项勾选

## 代码片段

VSCode 左下角「管理」图标 -> 用户代码片段 -> 新建全局代码片段文件 -> 输入框提示「键入代码段文件名」，输入 global，回车确定，将会生成并打开一个代码片段文件 -> 使用下面代码片段覆盖文件中的所有内容，再保存即可：

::: details 点击查看代码片段

```json
{
 // 代码片段名称
 "Arrow function": {
  // 指定该代码片段在哪些语言名称列表中生效
  "scope": "javascript,typescript,javascriptreact,typescriptreact,vue",
  // 快捷键
  "prefix": "af",
  // 生成内容
  "body": [
   "($1) => {",
   "  $2",
   "}"
  ],
  // 描述
  "description": "箭头函数"
 },
 "One-line arrow function": {
  "scope": "javascript,typescript,javascriptreact,typescriptreact,vue",
  "prefix": "oaf",
  "body": [
   "($1) => $2",
  ],
  "description": "单行箭头函数"
 },
 "Console log": {
  "scope": "javascript,typescript,javascriptreact,typescriptreact,vue",
  "prefix": "lg",
  "body": [
   "console.log('$1 ===>', $1)",
  ],
  "description": "便于追踪调试的 console.log"
 },
 "Vue2 template": {
  "prefix": "v2",
  "body": [
   "<template>",
   "  <div>$0</div>",
   "</template>\n",
   "<script>",
   "export default {",
   // "    name: \"${1:component_name}\",",
   "  data() {",
   "    return {\n",
   "    }",
   "  },",
   "  created() {\n",
   "  },",
   "  methods: {\n",
   "  },",
   "}",
   "</script>\n",
   "<style scoped>\n",
   "</style>"
  ],
  "description": "vue2 模板"
 },
 "Vue3 template": {
  "prefix": "v3",
  "body": [
   "<script lang=\"ts\" setup>\n",
   "</script>\n",
   "<template>",
   "  <div class=\"$1\">$2</div>",
   "</template>\n",
   "<style lang=\"scss\" scoped></style>"
  ],
  "description": "vue3 模板"
 }
}
```

:::

目前提供了 5 个代码片段。在开发过程中，如果你要使用某个代码片段，只需键入对应的快捷键，并按下 `Tab` 或 `Enter` 键即可生成代码片段内容。如下图所示：
![代码块](/images/代码块.gif)
