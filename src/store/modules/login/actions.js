import { pushLogin, fetchUserInfo } from 'SERVICES'
import { setTokenToLocal } from 'AUTH'
import types from './mutations/types'
import { Notification } from 'element-ui'

export default {
  pushLogin ({ commit }, { userInfo, replace }) {
    return pushLogin(userInfo)
      .then(res => {
        const data = res.data
        if (data.errno !== 0) throw new Error(`用户名或密码错误`)
        Notification.success({
          title: 'Success',
          message: '登陆成功，正在跳转...'
        })
        return data
      })
      .then(data => {
        if (!data.token) throw new Error(`[Token]: empty token`)
        commit(types.SET_TOKEN, data.token)
        setTokenToLocal({ token: data.token })
        replace('/dashboard/analysis')
      })
      .catch(e => {
        Notification.error({
          title: 'Error',
          message: `${e}`
        })
        console.error(e)
      })
  },
  fetchUserInfo ({ commit }) {
    return fetchUserInfo()
      .then(res => res.data)
      .then(data => {
        if (data.errno !== 0) throw new Error(`[errno]: ${data.errno}`)
        if (!Array.isArray(data.role)) throw new Error(`[role]: ${data.role}`)
        commit(types.SET_USERNAME, data.name)
        commit(types.SET_ROLE, data.role)
        return data
      })
      .catch(console.error)
  },
  createRoutes ({ commit }, role) {
    console.log(role)
  }
}
