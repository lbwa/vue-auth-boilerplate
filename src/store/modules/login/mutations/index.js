import types from './types'
import { tokenInCookie, userInCookie } from 'UTILS/storage'

export default {
  [types.SET_USER_INFO](state, userInfo) {
    userInfo ? userInCookie.setItem(userInfo) : userInCookie.removeItem()
    state.userInfo = userInfo
  },
  [types.SET_ACCESS_TOKEN](state, accessToken) {
    accessToken
      ? tokenInCookie.setItem(accessToken)
      : tokenInCookie.removeItem()
    state.accessToken = accessToken
  },
  [types.SET_USER_ACCESSES](state, accesses) {
    state.accesses = accesses
  },
  [types.SET_ALL_ROUTES](state, allRoutes) {
    state.allRoutes = allRoutes
  }
}
