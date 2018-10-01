import baseRequest from './base'
import * as routes from './routes'

export function checkToken (token) {
  return baseRequest.post(routes.USER_TOKEN, token)
}

export function getAnalysisData () {
  return baseRequest.get(routes.ANALYSIS)
}
