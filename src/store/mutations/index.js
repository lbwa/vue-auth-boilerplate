import type from './type'

export default {
  [type.TOGGLE_ASIDE] (state) {
    state.isCollapse = !state.isCollapse
  }
}
