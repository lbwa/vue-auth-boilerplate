import baseRequest from './base'
import routes from './routes'

export function getAnalysisData () {
  return baseRequest.get(routes.ANALYSIS)
}
