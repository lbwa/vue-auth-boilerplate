import Vue from 'vue'
import Vuetify from 'vuetify/lib'

if (__DEV__) {
  require('material-design-icons-iconfont/dist/material-design-icons.css')
  require('roboto-fontface/css/roboto/roboto-fontface.css')
}

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true
    },
    themes: {
      light: {
        secondary: '#282c34' // '#f34b7d'
      }
    }
  },
  icons: {
    iconfont: 'md'
  }
})
