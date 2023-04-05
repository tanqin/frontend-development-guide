import { defaultTheme, defineUserConfig } from 'vuepress'
import navbar from './navbar'

const base = '/'

export default defineUserConfig({
  base,
  lang: 'zh-CN',
  title: '前端规范文档',
  description: '前端开发技术规范文档',
  head: [['link', { rel: 'icon', href: base + 'images/logo.svg' }]],
  theme: defaultTheme({
    logo: '/images/logo.svg',
    editLink: false,
    lastUpdated: false,
    navbar: navbar,
    contributors: false,
    sidebar: 'auto',
    sidebarDepth: 3
  }),
  plugins: []
})
