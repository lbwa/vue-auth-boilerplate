import { NavigationGuard } from 'vue-router'
import store from '@/store'

const WHITE_LIST = ['Login']

export const onLogin: NavigationGuard = function(to, from, next) {
  if (store.getters['user/hasLogin'] || WHITE_LIST.includes(to.name || '')) {
    return next()
  }
  return next({
    name: 'Login',
    replace: true
  })
}
