import Vue from 'vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import App from 'VIEW/App'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUI)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  render (h) {
    return h(App)
  }
})
