import axios from 'axios'
import { tokenInCookie } from 'UTILS/storage'
import store from 'STORE'
import { Notification } from 'element-ui'
import { eventBus } from 'UTILS'

const h = eventBus.$createElement.bind(eventBus)

/**
 * @description 创建一个 axios 基础请求实例，提示，环境变量可在 .env.[mode] files 中定义
 * @param {String} baseURL 基础请求路径
 */
export default function createBaseRequest(baseURL) {
  if (!baseURL) throw new Error('[createRequestBase]: Wrong baseURL type !')

  const request = axios.create({
    baseURL,
    timeout: 10000
  })

  request.interceptors.request.use(
    req => {
      req.headers['content-type'] = 'application/json'
      req.headers['app_key'] = process.env.VUE_APP_KEY
      req.headers['app_secret'] = process.env.VUE_APP_SECRET

      const token = tokenInCookie.getItem()
      if (token) req.headers['access_token'] = token

      return req
    },
    err => {
      err && console.error(`[Request error]: ${err}`)
      return Promise.reject(err)
    }
  )

  request.interceptors.response.use(
    ({ data, status, statusText, config: { url } }) => {
      // response schema: https://github.com/axios/axios#response-schema
      // 1. error capture for http code
      if (status !== 200) {
        return Promise.reject(
          new Error(`[response error]: ${status}, ${statusText}`)
        )
      }

      // 2. invalid access_token
      if (data.code === 3000) {
        // 触发 router 的 beforeEach 导航守卫中的 token 检测并重定向至 login 页
        tokenInCookie.removeItem()
        // 以下 action 用于用户登出，并重置 vuex 状态
        return store
          .dispatch('login/userLogout')
          .then(() => Promise.reject(data))
      }

      // 3. error capture (Only capture error which has a error code)
      if (data.code && data.code !== 2000) {
        Notification.error({
          title: 'Error',
          message: h(
            'div',
            data.code === 3002
              ? [
                  'Unauthorized request',
                  h('div', { style: 'work-break: break-all' }, url)
                ]
              : '😢Update data failed.'
          ),
          position: 'bottom-right'
        })
        return Promise.reject(data)
      }

      // 4. normal response or binary data
      return data
    },
    err => {
      err && console.error(`[Response error]: ${err}`)
      return Promise.reject(err)
    }
  )

  return request
}
