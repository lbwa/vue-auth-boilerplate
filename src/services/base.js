import { baseURL } from './routes'

const baseRequest = axios.create({
  baseURL,
  timeout: 5000
})

baseRequest.interceptors.request.use(req => req, function (err) {
  err && console.error(`[Request error]: ${err}`)
  return Promise.reject(err)
})

baseRequest.interceptors.response.use(res => res, function (err) {
  err && console.error(`[Response error]: ${err}`)
  return Promise.reject(err)
})

export default baseRequest
