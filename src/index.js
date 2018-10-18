import Vue from 'vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import i18n from './lang'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'STYLE/theme.sass'

import App from 'VIEW/App' // Ensure behind element default style

Vue.use(elementUI)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  i18n,
  render (h) {
    return h(App)
  }
})
