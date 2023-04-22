import { defaultTheme, defineUserConfig } from 'vuepress'
import navbar from './navbar'
import sidebar from './sidebar'

// 部署站点的基础路径
const base = '/frontend-development-guide/'

export default defineUserConfig({
  base,
  lang: 'zh-CN',
  title: '前端开发指南',
  description: '前端开发指南',
  head: [['link', { rel: 'icon', href: base + 'images/logo.svg' }]],
  theme: defaultTheme({
    logo: '/images/logo.svg',
    editLink: false,
    lastUpdated: false,
    navbar: navbar,
    contributors: false,
    sidebarDepth: 3,
    colorMode: 'auto',
    locales: {
      '/': {
        sidebar: sidebar
      }
    }
  }),
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  plugins: []
})
