import router from 'ROUTER'
import store from 'STORE'
import loginTypes from 'STORE/modules/login/mutations/types'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { tokenFromStorage, userInfoFromStorage } from 'UTILS/storage'
import { MessageBox } from 'element-ui'
import createDynamicRoutes, { validateAccess } from './controller/routes'
import constantRoutes from 'ROUTER/routes/constant'

NProgress.configure({ showSpinner: false })

const WHITELIST = ['/login']

// Used to determine whether private routes has been added
let HAS_ROUTES_ADDED = false

function setDynamicRoutesToStorage() {
  store.commit(
    `login/${loginTypes.SET_DYNAMIC_ROUTES}`,
    createDynamicRoutes(store.getters['login/accessMap'])
  )
}

function setGlobalRoutesToStorage() {
  store.commit(`login/${loginTypes.SET_ALL_ROUTES}`, [
    ...constantRoutes,
    ...store.getters['login/dynamicRoutes']
  ])
}

function errorHandler(e, next, redirectPath) {
  MessageBox({
    title: 'Error',
    message: 'We got a error when fetching user access.',
    type: 'error',
    showClose: false
  })
    .then(() => store.dispatch('login/userLogout'))
    .then(() =>
      next({
        path: `/login?redirect=${redirectPath}`,
        replace: true
      })
    )
  NProgress.done()
  console.error(e)
}

function addRoutesToRouter() {
  router.addRoutes(store.getters['login/dynamicRoutes'])
  console.log(
    '%c[Routes creation]: routes has been added!',
    'color: yellow',
    store.getters['login/dynamicRoutes']
  )
}

function createRoutesMap(to, next) {
  setDynamicRoutesToStorage()
  setGlobalRoutesToStorage()
  addRoutesToRouter()
  HAS_ROUTES_ADDED = true
  // 1. MUST invoke `next({ ...to, replace: true })` to prevent route matching
  // from occurring before route is added
  // 2. use `to` route to replace routes occurring before private routes is added
  return next({ ...to, replace: true })
}

/**
 * @description Login state validation
 */
router.beforeEach((to, from, next) => {
  NProgress.start()

  // Jump to target path directly If target path has been included by white list
  if (WHITELIST.includes(to.path)) {
    return next()
  }

  // ! State: User has been logged in (local token).
  if (tokenFromStorage.getItem()) {
    // (Optional) local storage has a accessToken record, but current `login/accessToken`
    // vuex state is empty string when user activate a new session (eg. new
    // browser tab)

    if (!store.getters['login/accessToken']) {
      return store
        .dispatch('login/fetchUserAccess', tokenFromStorage.getItem())
        .then(() => {
          // fill vuex state with user information to prevent infinity loop.
          store.commit(
            `login/${loginTypes.SET_ACCESS_TOKEN}`,
            tokenFromStorage.getItem()
          )
          store.commit(
            `login/${loginTypes.SET_USER_INFO}`,
            JSON.parse(userInfoFromStorage.getItem())
          )
        })
        .then(() => createRoutesMap(to, next))
        .catch(e => errorHandler(e, next, to.path))
    }

    // step: 1. confirm route access by user access, including global routes creation.
    if (!store.getters['login/accesses'].length) {
      // 2.1 fetch user role, then routes creation based on user role.
      return store
        .dispatch('login/fetchUserAccess', tokenFromStorage.getItem())
        .then(() => createRoutesMap(to, next))
        .catch(e => errorHandler(e, next, to.path))
    }

    // (step 1.2 optional) Regenerate private routes based on user role when page
    // reload, because vuex state will be preserved by vuex-persistedstate when
    // page reload.
    if (store.getters['login/accesses'].length && !HAS_ROUTES_ADDED) {
      console.log(
        '%c[Routes creation]: Activate private routes regeneration process !',
        'color: yellow;'
      )
      return createRoutesMap(to, next)
    }

    // Optional step:  real-time routes filter
    // ! 动态权限验证，如在公有路由中的未参与 private routes 过滤的路由需要权限验证时
    if (
      // 当前路由不存在权限验证时
      !to.meta.access ||
      // 当前路由存在权限验证时
      validateAccess(to, store.getters['login/accessMap'])
    ) {
      next()
    } else {
      next({
        path: `/403?redirect=${to.path}`,
        replace: true
      })
    }
  } else {
    // ! State: user logout
    next({
      path: `/login?redirect=${to.path}`,
      replace: true
    })
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
