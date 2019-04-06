import types from './types'
import { tokenFromStorage, userInfoFromStorage } from 'UTILS/storage'

export default {
  [types.SET_USER_INFO](state, userInfo) {
    userInfo
      ? userInfoFromStorage.setItem(userInfo)
      : userInfoFromStorage.removeItem()
    state.userInfo = userInfo
  },
  [types.SET_ACCESS_TOKEN](state, accessToken) {
    accessToken
      ? tokenFromStorage.setItem(accessToken)
      : tokenFromStorage.removeItem()
    state.accessToken = accessToken
  },
  [types.SET_USER_ACCESSES](state, accesses) {
    state.accesses = accesses
  },
  [types.SET_DYNAMIC_ROUTES](state, dynamicRoutes) {
    state.dynamicRoutes = dynamicRoutes
  },
  [types.SET_ALL_ROUTES](state, allRoutes) {
    state.allRoutes = allRoutes
  }
}
