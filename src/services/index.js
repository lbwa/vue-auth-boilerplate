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

export function validateToken (token) {
  if (!token) throw new Error('Token is required.')
  if (typeof token !== 'object') token = { token }
  return baseRequest.get(`${routes.VALIDATE_TOKEN}?${qs.stringify(token)}`)
}

export function fetchUserInfo () {
  return baseRequest.get(routes.CURRENT_USER)
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
