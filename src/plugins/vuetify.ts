import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#f34b7d'
      }
    }
  },
  icons: {
    iconfont: 'md'
  }
})
