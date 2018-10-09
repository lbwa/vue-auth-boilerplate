import {
  fetchSpaceProjects,
  fetchSpaceActivities,
  fetchSpaceRadar,
  fetchSpaceTeams
} from 'SERVICES'
import types from './mutations/types'

export default {
  fetchWorkspace ({ commit }) {
    Promise.all([
      fetchSpaceProjects(),
      fetchSpaceActivities(),
      fetchSpaceRadar(),
      fetchSpaceTeams()
    ])
      .then(res => {
        commit(types.SET_PROJECTS, res[0].data)
        commit(types.SET_ACTIVITIES, res[1].data)
        commit(types.SET_RADAR, res[2].data)
        commit(types.SET_TEAMS, res[3].data)
      })
      .catch(err => console.error(err))
  }
}
