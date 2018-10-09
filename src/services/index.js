import baseRequest from './base'
import * as routes from './routes'
import qs from 'querystring'

// `POST` methods should be throttled in production mode
export function pushLogin (userInfo) {
  return baseRequest.post(routes.USER_TOKEN, userInfo)
}

export function pushStepForm (formData) {
  return baseRequest.post(routes.FORM_STEP, formData)
}

export function pushBasicForm (formData) {
  return baseRequest.post(routes.FORM_BASIC, formData)
}

export function fetchUserInfo (query) {
  const url = query
    ? `${routes.CURRENT_USER}?${qs.stringify(query)}`
    : routes.CURRENT_USER

  return baseRequest.get(url)
}

export function fetchAllAnalysis () {
  return baseRequest.get(routes.ANALYSIS)
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
