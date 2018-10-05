import baseRequest from './base'
import * as routes from './routes'

export function userLogin (token) {
  return baseRequest.post(routes.USER_TOKEN, token)
}

export function pushStepForm (formData) {
  return baseRequest.post(routes.STEP_FORM, formData)
}

export function fetchAllAnalysis () {
  return baseRequest.get(routes.ANALYSIS)
}

export function fetchSpaceUser () {
  return baseRequest.get(routes.CURRENT_USER)
}

export function fetchSpaceProjects () {
  return baseRequest.get(routes.WORKSPACE_PROJECTS)
}

export function fetchSpaceActivities () {
  return baseRequest.get(routes.WORKSPACE_ACTIVITIES)
}

export function fetchSpaceRadar () {
  return baseRequest.get(routes.WORKSPACE_RADAR)
}

export function fetchSpaceTeams () {
  return baseRequest.get(routes.WORKSPACE_TEAMS)
}
