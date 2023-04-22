import { defineClientConfig } from '@vuepress/client'
import PluginIconCom from './components/PluginIconCom.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('PluginIconCom', PluginIconCom)

    router.beforeEach(to => {
      // console.log('before navigation', to);
    })

    router.afterEach(to => {
      // console.log('after navigation', to);
    })
    // console.log('siteData', siteData);
  },
  setup() {},
  rootComponents: [],
})
