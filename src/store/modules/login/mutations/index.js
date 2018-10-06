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
  }
}
