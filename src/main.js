import Vue from 'vue'

import GlobalMixins from '@/mixins/global'
import app from './app'
import router from './router'
import store from './store'

import '@/components/global'

Vue.config.productionTip = false
Vue.mixin(GlobalMixins)

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
