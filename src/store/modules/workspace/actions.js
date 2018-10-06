import {
  fetchUserInfo,
  fetchSpaceProjects,
  fetchSpaceActivities,
  fetchSpaceRadar,
  fetchSpaceTeams
} from 'SERVICES'
import types from './mutations/types'

export default {
  fetchWorkspace ({ commit }) {
    Promise.all([
      fetchUserInfo(),
      fetchSpaceProjects(),
      fetchSpaceActivities(),
      fetchSpaceRadar(),
      fetchSpaceTeams()
    ])
      .then(res => {
        commit(types.SET_CURRENT_USER, res[0].data)
        commit(types.SET_PROJECTS, res[1].data)
        commit(types.SET_ACTIVITIES, res[2].data)
        commit(types.SET_RADAR, res[3].data)
        commit(types.SET_TEAMS, res[4].data)
      })
      .catch(err => console.error(err))
  }
}
