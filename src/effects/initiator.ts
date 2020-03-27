import axios, {
  AxiosRequestConfig,
  AxiosInterceptorManager,
  AxiosResponse,
  AxiosInstance
} from 'axios'
import { isDef } from '@/shared/utils'
import { REQUEST_BASE_URL, REQUEST_TIMEOUT_THRESHOLD } from '../constants'

type ParamsRequestInterceptors = Parameters<
  AxiosInterceptorManager<AxiosRequestConfig>['use']
>

type ParamsResponseInterceptors<V> = Parameters<
  AxiosInterceptorManager<AxiosResponse<V>>['use']
>

type OnFulfilledRequest = ParamsRequestInterceptors[0]

type OnFulfilledResponse<R = unknown> = ParamsResponseInterceptors<R>[0]

type OnRejectedRequestOrResponse = (error: unknown) => unknown

interface DefaultResponse<T = unknown> {
  statusCode: 200 | 300 | 400 | 500
  data: T
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
const enum HttpStatus {
  OK = 200
}

/**
 * We use dependency injection strategy to implement Axios creation
 * NOTE that all request/response error should be handle by consumer for better
 * generality (single responsibility principle), not itself.
 */
class Initiator {
  constructor(private readonly axios: AxiosInstance, autoIntercept = true) {
    if (autoIntercept) {
      const onerror = (error: Error) => Promise.reject(error)

      this.intercept(
        'request',
        config => {
          // reject all error response code
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
          config.validateStatus = status => status <= 400

          return config
        },
        onerror
      )

      /**
       * This default response interceptor is based on response structure:
       * {
       *    statusCode: number,
       *    data: any
       * }
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.intercept<DefaultResponse<any>>(
        'response',
        ({ data }) => {
          // return raw data when data structure isn't above structure. eg. stream
          if (!isDef(data.statusCode)) return data

          // reject all response include statusCode and error message
          if (data.statusCode !== HttpStatus.OK) {
            return Promise.reject(data)
          }

          return data.data
        },
        onerror
      )
    }
  }

  get http() {
    return this.axios
  }

  intercept(type: 'request', ...callbacks: ParamsRequestInterceptors): number

  intercept<R = unknown>(
    type: 'response',
    ...callbacks: ParamsResponseInterceptors<R>
  ): number

  /**
   * https://www.typescriptlang.org/docs/handbook/functions.html#overloads
   */
  intercept(
    type: 'request' | 'response',
    onFulfilled?: OnFulfilledRequest & OnFulfilledResponse,
    onRejected?: OnRejectedRequestOrResponse
  ) {
    return this.axios.interceptors[type].use(onFulfilled, onRejected)
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
