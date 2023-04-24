import { SidebarConfig } from 'vuepress'

const sidebar: SidebarConfig = {
  '/develop-tools/': [
    {
      text: '开发工具',
      children: [
        '/develop-tools/README.md',
        '/develop-tools/node-and-npm.md',
        '/develop-tools/svn.md',
        '/develop-tools/vscode.md',
        '/develop-tools/hbuilderx.md',
        '/develop-tools/weixin-devtools.md',
        '/develop-tools/other-tools.md'
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
      children: ['/tips-share/README.md']
    }
  ]
}

export default sidebar
