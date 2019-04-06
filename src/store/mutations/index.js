import types from './types'

export default {
  [types.SET_ASIDE_COLLAPSE](state) {
    state.isAsideCollapse = !state.isAsideCollapse
  }
}
