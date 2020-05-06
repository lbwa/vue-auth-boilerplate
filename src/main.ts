import Vue from 'vue'

import router from './router'
import store from './store'
import { connect } from './plugins/ability'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './styles/global.sass'
import { FORBIDDEN_ROUTE } from './constants'
import { routes } from './router/private-routes'

if (__DEV__) {
  require('normalize.css')
}

Vue.config.productionTip = __DEV__

connect(router, store, { redirect: FORBIDDEN_ROUTE, routes })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
