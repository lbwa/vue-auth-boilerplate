import types from './types'

export default {
  [types.TOGGLE_ASIDE] (state) {
    state.isCollapse = !state.isCollapse
  },
  [types.SET_TOKEN] (state, token) {
    state.token = token
  }
}
