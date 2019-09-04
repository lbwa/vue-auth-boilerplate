import Vue from 'vue'
import 'normalize.css'
import i18n from 'LANG'
import App from './App'

// Including Vue prototype functions (eg. this.$_plugins_messageBox())
import './plugins/hasAccess'
import './plugins/element'

// Shouldn't use Router instance directly without 'access/index' process.
import router from './access'
import store from './store'

import 'STYLE/transition/index.scss'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
