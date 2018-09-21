import Vue from 'vue'
import 'normalize.css'
import router from './router'
import App from 'VIEW/App'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  render (h) {
    return h(App)
  }
})
