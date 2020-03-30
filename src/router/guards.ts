import { NavigationGuard, Route } from 'vue-router'
import store from '@/store'
import { QUERY_KEY_FOR_LOGIN_TO } from '../constants'

const WHITE_LIST = ['Login']

export const onLogin: NavigationGuard = function(to, from, next) {
  if (store.getters['user/hasLogin'] || WHITE_LIST.includes(to.name || '')) {
    return next()
  }
  return next({
    name: 'Login',
    replace: true,
    query: {
      [QUERY_KEY_FOR_LOGIN_TO]: to.fullPath
    }
  })
}

export const onHistoryChange = function(to: Route) {
  store.dispatch('history/append', to)
}
