import VueI18n from 'vue-i18n'
import { vueUsing } from 'UTILS'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zhLocale from './zh'
import enLocale from './en'

import ElementLocale from 'element-ui/lib/locale'

vueUsing([VueI18n])

const i18n = new VueI18n({
  locale: 'en',
  /**
   * @description close warnings for fallback localization
   * @doc https://kazupon.github.io/vue-i18n/zh/guide/fallback.html
   */
  silentFallbackWarn: true,
  messages: {
    zh: {
      ...zhLocale,
      ...elementZhLocale
    },
    en: {
      ...enLocale,
      ...elementEnLocale
    }
  }
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
