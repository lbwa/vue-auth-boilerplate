import { pushLogin, validateToken, fetchUserInfo } from 'SERVICES'
import { setTokenToLocal, getTokenFromLocal, removeToken } from 'AUTH'
import router from 'ROUTER'
import { commonRoutes, dynamicRoutes } from 'ROUTER/routes'
import types from './mutations/types'
import { Notification } from 'element-ui'

// for validate user access
const ADMINISTRATOR = 'admin'

export default {
  pushLogin ({ commit, dispatch }, { userInfo, replace }) {
    return pushLogin(userInfo)
      .then(({ data }) => {
        if (data.errno !== 0) throw new Error(`用户名或密码错误`)
        if (!data.token) throw new Error(`[Token]: Wrong token response`)
        if (!Array.isArray(data.role)) throw new Error(`[Role]: Wrong role response`)
        return data
      })
      .then(data => {
        Notification.success({
          title: 'Success',
          message: '登陆成功，正在跳转...'
        })
        commit(types.SET_TOKEN, data.token)
        setTokenToLocal({ token: data.token })
        return data.role
      })
      .then(role => dispatch('createExtraRoutes', { role }))
      .then(() => dispatch('createGlobalRoutes', { router }))
      .then(() => replace('/dashboard/analysis'))
      .catch(e => {
        Notification.error({
          title: 'Error',
          message: `${e}`
        })
        console.error(e)
      })
  },
  validateToken ({ dispatch }) {
    return validateToken(getTokenFromLocal())
      .then(({ data }) => {
        if (data.errno !== 0) throw new Error(`errno: ${data}`)
        return data.role
      })
      .then(role => dispatch('createExtraRoutes', { role }))
      .then(() => dispatch('createGlobalRoutes', { router }))
      .catch(console.error)
  },
  fetchUserInfo ({ commit }) {
    return fetchUserInfo()
      .then(({ data }) => {
        if (data.errno !== 0) throw new Error(`[errno]: ${data.errno}`)
        commit(types.SET_USER_INFO, data)
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
    let extraRoutes = role.includes(ADMINISTRATOR)
      ? dynamicRoutes
      : filterRoutes(dynamicRoutes, role)

    commit(types.SET_ROLE, role)
    commit(types.SET_EXTRA_ROUTES, extraRoutes)
  },
  createGlobalRoutes ({ commit, getters }, { router }) {
    commit(types.SET_ROUTES, [...commonRoutes, ...getters.extraRoutes])
    router.addRoutes(getters.extraRoutes)
  },
  logout ({ commit }, replace) {
    // same tab will not delete token from sessionStorage
    removeToken()
    replace('/')

    // for reset all global status, especially global routes map
    location.reload()
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
