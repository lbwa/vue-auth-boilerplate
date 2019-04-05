import { userLogin, fetchUserAccess } from 'API'
import types from './mutations/types'
import router from 'ROUTER'

export default {
  userLogin ({ commit }, { username, password, vm }) {
    return (
      userLogin({
        username,
        password
      })
        // eslint-disable-next-line
        .then(({ user_id, access_token }) => {
          commit(types.SET_USER_INFO, {
            username /* 手机或者是邮箱 */,
            userId: user_id
          })
          commit(types.SET_ACCESS_TOKEN, access_token)
          router.replace('/')
        })
        .catch(e => {
          if (e.code === 5000) {
            vm.$_plugins_messageBox.alert('Wrong username or password', {
              type: 'error',
              title: 'Error'
            })
          }
          // 仅用于触发 afterEach 后置导航守卫，使得顶部进度条 done()
          // For invoking `router.afterEach` navigation guards including `NProgress.done()`
          vm.$router.replace('/login')
          console.error(`[Login error]: ${JSON.stringify(e)}`)
        })
    )
  },
  userLogout ({ commit }) {
    commit(types.SET_USER_INFO, {})
    commit(types.SET_USER_ACCESSES, [])
    commit(types.SET_ACCESS_TOKEN, '')
    commit(types.SET_DYNAMIC_ROUTES, [])
    commit(types.SET_ALL_ROUTES, [])
    // https://github.com/PanJiaChen/vue-element-admin/issues/416
    // location.reload() is used to reset all dynamic routes.
    // All routes records should be synced with vuex-persistedstate.
    location.reload()
  },
  fetchUserAccess ({ commit }, token) {
    // ! 预留接口：请求用户的权限集合 roles，用于过滤用户的私有路由
    return fetchUserAccess(token).then(({ accesses }) => {
      commit(types.SET_USER_ACCESSES, accesses)
      return accesses
    })
  }
}
