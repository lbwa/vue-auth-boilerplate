import types from './types'

export default {
  [types.SET_CURRENT_USER] (state, currentUser) {
    state.currentUser = currentUser
  },
  /**
   * @param {project[]} projects
   */
  [types.SET_PROJECTS] (state, projects) {
    state.projects = projects
  }
}
