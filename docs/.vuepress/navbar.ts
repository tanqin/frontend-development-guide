import type { NavbarConfig } from 'vuepress'

const navbar: NavbarConfig = [
  {
    text: '开发工具',
    children: [
      { text: 'nvm', link: '/develop-tool/', activeMatch: '^/develop-tool/$' },
      '/develop-tool/node-and-npm.md',
      '/develop-tool/svn.md',
      '/develop-tool/vscode.md',
      '/develop-tool/hbuilderx.md',
      '/develop-tool/weixin-devtools.md'
    ]
  },
  {
    text: '开发规范',
    children: [
      { text: '样式规范', link: '/develop-standard/', activeMatch: '^/develop-standard/$' },
      '/develop-standard/javascript.md',
      '/develop-standard/typescript.md',
      '/develop-standard/vue.md',
      '/develop-standard/uni-app.md',
      '/develop-standard/react.md'
    ]
  },
  {
    text: '技巧分享',
    link: '/tips-share/'
  }
]

export default navbar
