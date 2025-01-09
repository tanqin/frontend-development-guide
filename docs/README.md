---
home: true
heroImage: /images/logo.svg
tagline: null
actions:
  - text: 开发工具
    link: /develop-tools/
  - text: 开发规范
    link: /develop-standard/
  - text: 技术选型
    link: /choosing-technology/ 
    type: 'secondary'
  - text: 技巧分享
    link: /tips-share/ 
    type: 'secondary'
features:
  - title: 实用性
    details: 保持编码风格统一性，利于团队协作和代码维护。
  - title: 综合性
    details: 包括开发所用到的各种工具、插件、配置、规范说明等。
  - title: 细节性
    details: 涉及一些开发过程不注意或不了解的编码细节。
footer: 'Copyright © 2023-present GLORYVIEW'
---
<!-- 由于 vuepress 打包会经过 node 渲染，node 环境下无法访问 document 导致打包失败问题，所以需要包裹一层 <ClientOnly> 。参考：https://v2.vuepress.vuejs.org/reference/components.html#clientonly -->
<ClientOnly>
<HomeTitle title="前端开发指南" />
</ClientOnly>
