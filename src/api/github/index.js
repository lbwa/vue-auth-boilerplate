import routes from '../routes'
import createRequest from 'UTILS/request'

const http = createRequest({
  baseURL: process.env.VUE_APP_GITHUB_API
})

export function fetchCommitList() {
  return http.get(routes.COMMIT_LIST)
}

export function fetchLastRelease() {
  return http.get(routes.LAST_RELEASE)
}
