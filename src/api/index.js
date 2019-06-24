import routes from './routes'
import createRequest from 'UTILS/request'

export * from './github'

const http = createRequest({
  baseURL: process.env.VUE_APP_XHR_REST,
  headers: {
    Client_Id: process.env.VUE_APP_CLIENT_ID
  },
  auth: true
})

export function userLogin({ username, password }) {
  return http.post(routes.LOGIN, {
    username,
    password
  })
}

export function fetchUserAccess(token) {
  return http.post(routes.ACCESS, {
    token
  })
}
