import { fetchUser, fetchProjects } from 'SERVICES'
import types from './mutations/types'

export default {
  fetchWorkspace ({ commit }) {
    Promise.all([fetchUser(), fetchProjects()]).then(res => {
      commit(types.SET_CURRENT_USER, res[0].data)
      commit(types.SET_PROJECTS, res[1].data)
    })
  }
}
