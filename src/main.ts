import Vue from 'vue'
import 'normalize.css'

import router from './router'
import store from './store'
import { connect } from './plugins/ability'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './styles/global.sass'
import { FORBIDDEN_ROUTE } from './constants'

Vue.config.productionTip = __DEV__

connect(router, store, {
  redirect: FORBIDDEN_ROUTE,
  routes: [
    {
      path: '/user',
      component: () =>
        import(/* webpackChunkName: 'user' */ '@/views/User/index.vue'),
      meta: {
        title: 'User',
        ability: 'github.repo.read'
      }
    }
  ]
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
