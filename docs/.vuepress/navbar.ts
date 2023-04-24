import type { NavbarConfig } from 'vuepress'

const navbar: NavbarConfig = [
  {
    text: '开发工具',
    children: [
      { text: 'nvm', link: '/develop-tools/', activeMatch: '^/develop-tools/$' },
      '/develop-tools/node-and-npm.md',
      '/develop-tools/svn.md',
      '/develop-tools/vscode.md',
      '/develop-tools/hbuilderx.md',
      '/develop-tools/weixin-devtools.md',
      '/develop-tools/other-tools.md'
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
