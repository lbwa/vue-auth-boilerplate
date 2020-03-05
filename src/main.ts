import Vue from 'vue'
import 'normalize.css'

import router from './router'
import store from './store'
import './plugins/ability'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './styles/global.sass'

Vue.config.productionTip = __DEV__

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
