import types from './types'

export default {
  [types.SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [types.SET_ROLE] (state, role) {
    state.role = role
  },
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  // store it for passing it into router.addRoutes()
  [types.SET_EXTRA_ROUTES] (state, extraRoutes) {
    state.extraRoutes = extraRoutes
  },
  // store current global routes map, filtered by state.role
  [types.SET_ROUTES] (state, routes) {
    state.routes = routes
  }
}
