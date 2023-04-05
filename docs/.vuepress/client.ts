import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // app.component('MyComponent', MyComponent)

    router.beforeEach(to => {
      // console.log('before navigation', to);
    })

    router.afterEach(to => {
      // console.log('after navigation', to);
    })
    // console.log('siteData', siteData);
  },
  setup() {},
  rootComponents: []
})
