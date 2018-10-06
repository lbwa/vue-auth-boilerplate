// We do not use `state` directly for strong scalability.
export default {
  username (state) {
    return state.username
  },
  role (state) {
    return state.role
  }
}
