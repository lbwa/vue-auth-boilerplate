import { pushLogin, fetchUserInfo } from 'SERVICES'
import { setTokenToLocal } from 'AUTH'
import { dynamicRoutes } from 'ROUTER/routes'
import types from './mutations/types'
import { Notification } from 'element-ui'

// for validate user access
const ADMINISTRATOR = 'admin'

export default {
  pushLogin ({ commit, dispatch }, { userInfo, replace }) {
    return pushLogin(userInfo)
      .then(res => {
        const data = res.data
        if (data.errno !== 0) throw new Error(`用户名或密码错误`)
        if (!data.token) throw new Error(`[Token]: empty token`)
        return data
      })
      .then(data => {
        Notification.success({
          title: 'Success',
          message: '登陆成功，正在跳转...'
        })
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
        commit(types.SET_USER_INFO, data)
        commit(types.SET_USERNAME, data.name)
        commit(types.SET_ROLE, data.role)
        return data
      })
      .catch(console.error)
  },

  /**
   * @description Using preset dynamic routes map to create extra map
   * @param {String[]} role. Current user access. eg. ['admin'] or ['user']
   */
  createExtraRoutes ({ commit }, { role }) {
    if (!Array.isArray(role)) {
      throw new TypeError(`[createExtraRoutes]:${role} should be a array`)
    }
    // validate current user access
    // Skip filter extra routes if user role is ADMINISTRATOR
    let globalRoutes = role.includes(ADMINISTRATOR)
      ? dynamicRoutes
      : filterRoutes(dynamicRoutes, role)

    commit(types.SET_ROUTES, globalRoutes)
  }
}

function filterRoutes (routes, role) {
  const formatRoutes = []
  routes.forEach(route => {
    const routeCopy = { ...route } // Prevent edit original routes map
    if (hasAccess(route, role)) {
      if (routeCopy.children) {
        routeCopy.children = filterRoutes(routeCopy.children, role)
      }
      formatRoutes.push(routeCopy)
    }
  })

  return formatRoutes
}

function hasAccess (route, role) {
  return route.meta && route.meta.role
    ? role.some(key => route.meta.role.includes(key))
    : true // common routes in dynamic routes map
}
