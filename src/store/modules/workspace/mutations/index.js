import types from './types'

export default {
  /**
   * @param {project[]} projects
   */
  [types.SET_PROJECTS] (state, projects) {
    state.projects = projects
  },
  [types.SET_ACTIVITIES] (state, activities) {
    state.activities = activities
  },
  [types.SET_RADAR] (state, radar) {
    state.radar = radar
  },
  [types.SET_TEAMS] (state, teams) {
    state.teams = teams
  }
}
