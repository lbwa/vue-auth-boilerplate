import VueI18n from 'vue-i18n'
import Vue from 'vue'

import zh from './zh'
import en from './en'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en',
  messages: {
    zh,
    en
  }
})
