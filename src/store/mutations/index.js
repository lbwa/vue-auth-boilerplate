import types from './types'

export default {
  [types.TOGGLE_ASIDE](state) {
    state.isCollapse = !state.isCollapse
  }
}
