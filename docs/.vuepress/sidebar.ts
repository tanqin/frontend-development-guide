import { SidebarConfig } from "vuepress";

const sidebar: SidebarConfig = {
  '/develop-tool/': [
    {
      text: '开发工具',
      children: [
        '/develop-tool/README.md',
        '/develop-tool/node-and-npm.md',
        '/develop-tool/svn.md',
        '/develop-tool/vscode.md',
        '/develop-tool/hbuilderx.md',
        '/develop-tool/weixin-devtools.md'
      ]
    }
  ],
  '/develop-standard/': [
    {
      text: '开发规范',
      collapsible: true,
      children: [
        '/develop-standard/README.md',
        '/develop-standard/javascript.md',
        '/develop-standard/typescript.md',
        '/develop-standard/vue.md',
        '/develop-standard/uni-app.md',
        '/develop-standard/react.md'
      ]
    }
  ],
  '/tips-share/': [
    {
      text: '技巧分享',
      children: [
        '/tips-share/README.md'
      ]
    }
  ]
}

export default sidebar
