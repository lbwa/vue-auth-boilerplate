import types from './types'

export default {
  [types.SET_USERNAME] (state, username) {
    state.username = username
  },
  [types.SET_ROLE] (state, role) {
    state.role = role
  },
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_ROUTES] (state, routes) {
    // store it for passing it into router.addRoutes()
    state.addRoutes = routes

    // store current global routes map, filtered by state.role
    state.routes = [...state.routes, ...routes]
  }
}
