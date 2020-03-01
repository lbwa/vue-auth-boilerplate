import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: false
    }
  },
  icons: {
    iconfont: 'md'
  }
})
