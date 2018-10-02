import types from './types'

export default {
  [types.SET_CURRENT_USER] (state, currentUser) {
    state.currentUser = currentUser
  }
}
