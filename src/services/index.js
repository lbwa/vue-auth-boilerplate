import baseRequest from './base'
import * as routes from './routes'

export function userLogin (token) {
  return baseRequest.post(routes.USER_TOKEN, token)
}

export function getAnalysisData () {
  return baseRequest.get(routes.ANALYSIS)
}

export function fetchUser () {
  return baseRequest.get(routes.CURRENT_USER)
}

export function fetchProjects () {
  return baseRequest.get(routes.WORKSPACE_PROJECTS)
}
