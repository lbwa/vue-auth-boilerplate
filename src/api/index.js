import routes from './routes'
import createBaseRequest from 'UTILS/request'

const restBaseRequest = createBaseRequest(process.env.VUE_APP_XHR_REST)

export function userLogin({ username, password }) {
  return restBaseRequest.post(routes.LOGIN, {
    username,
    password
  })
}

export function fetchUserAccess(token) {
  return restBaseRequest.post(routes.ACCESS, {
    token
  })
}
