import axios, {
  AxiosRequestConfig,
  AxiosInterceptorManager,
  AxiosResponse,
  AxiosInstance
} from 'axios'
import { isDef } from '@/shared/utils'
import { REQUEST_BASE_URL, REQUEST_TIMEOUT_THRESHOLD } from '../constants'

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
const enum HttpStatus {
  OK = 200
}

/**
 * NOTE that all request/response error should be handle by consumer for better
 * generality (single responsibility principle), not itself.
 */
class Initiator {
  constructor(private readonly axios: AxiosInstance, autoIntercept = true) {
    if (autoIntercept) {
      const onerror = (error: Error) => Promise.reject(error)
      this.onRequest(config => {
        // reject all error response code
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        config.validateStatus = status => status <= 400

        return config
      }, onerror)

      /**
       * This interceptor is based on response structure:
       * {
       *    statusCode: number,
       *    data: any
       * }
       */
      this.onResponse(({ data = {} }) => {
        // return raw data when data structure isn't above structure. eg. stream
        if (!isDef(data.statusCode)) return data

        // reject all response include statusCode and error message
        if (data.statusCode !== HttpStatus.OK) {
          return Promise.reject(data)
        }

        return data.data
      }, onerror)
    }
  }

  get http() {
    return this.axios
  }

  onRequest(
    ...fns: Parameters<AxiosInterceptorManager<AxiosRequestConfig>['use']>
  ) {
    return this.axios.interceptors.request.use(...fns)
  }

  onResponse(
    ...fns: Parameters<AxiosInterceptorManager<AxiosResponse>['use']>
  ) {
    return this.axios.interceptors.response.use(...fns)
  }
}

/**
 * Create a http instance
 * @param config [Request config](https://github.com/axios/axios#request-config)
 * @see [Instance methods](https://github.com/axios/axios#instance-methods)
 */
export function createInitiator(
  config: AxiosRequestConfig = {
    baseURL: REQUEST_BASE_URL,
    timeout: REQUEST_TIMEOUT_THRESHOLD
  }
) {
  return new Initiator(axios.create(config))
}
