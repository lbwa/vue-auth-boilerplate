import { pushLogin, fetchUserInfo } from 'SERVICES'
import { setTokenToLocal } from 'AUTH'
import types from './mutations/types'
import { Notification } from 'element-ui'

export default {
  pushLogin ({ commit }, { userInfo, replace }) {
    return pushLogin(userInfo)
      .then(res => {
        const data = res.data
        if (data.errno !== 0) {
          console.error(`[pushLogin]: ${res.status} 用户名或密码错误`)
          Notification.error({
            title: 'Error',
            message: '用户名或密码错误'
          })
          return
        }
        Notification.success({
          title: 'Success',
          message: '登陆成功，正在跳转...'
        })
        return data
      })
      .then(data => {
        if (!data.token) throw new Error(`[pushLogin]: token's error`)
        commit(types.SET_TOKEN, data.token)
        setTokenToLocal({ token: data.token })
        replace('/dashboard/analysis')
      })
      .catch(e => {
        Notification.error({
          title: '服务器超时',
          message: '与服务器连接超时'
        })
        console.error(e)
      })
  },
  fetchUserInfo ({ commit }) {
    return fetchUserInfo({ commit })
      .then(res => res.data)
      .then(data => {
        if (data.errno !== 0) throw new Error(`[fetchUserInfo]: Token error`)
        commit(types.SET_USERNAME, data.name)
        commit(types.SET_ROLE, data.role)
      })
      .catch(e => console.error(e))
  }
}
