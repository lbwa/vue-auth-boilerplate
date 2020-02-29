import Vue from 'vue'
import { AuthMethods } from 'v-access'
import 'normalize.css'

import router from './router'
import store from './store'
import './plugins/ability'
import App from './App.vue'

// https://github.com/vuejs/vetur/issues/159
declare module 'vue/types/vue' {
  interface Vue {
    $$auth: AuthMethods
  }
}

Vue.config.productionTip = __DEV__

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
