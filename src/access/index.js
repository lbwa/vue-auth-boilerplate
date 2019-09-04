import router from 'ROUTER'
import store from 'STORE'
import loginTypes from 'STORE/modules/login/mutations/types'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { tokenInCookie } from 'UTILS/storage'
import { Notification } from 'element-ui'
import createPrivateRoutes, { validateAccess } from './controller/routes'
import publicRoutes from 'ROUTER/routes/public'

NProgress.configure({ showSpinner: false })

const WHITELIST = ['/login']

// Used to determine whether private routes has been added
let HAS_ROUTES_ADDED = false

async function errorHandler(e, next, redirectPath) {
  try {
    await Notification.error({
      title: 'Error',
      message: 'Access validation failed, please login again.',
      position: 'bottom-right'
    })

    await store.dispatch('login/userLogout')
    next({
      path: `/login?redirect=${redirectPath}`,
      replace: true
    })
    NProgress.done()
    console.error(e)
  } catch (e) {
    console.error(e)
  }
}

function addRoutesToRouter(privateRoutes) {
  router.addRoutes(privateRoutes)
  console.log(
    '%c[Routes creation]: routes has been added!',
    'color: yellow',
    privateRoutes
  )
}

function createRoutesMap(to, next) {
  const privateRoutes = createPrivateRoutes(store.getters['login/accessMap'])
  // To create dashboard aside, store all global routes
  store.commit(`login/${loginTypes.SET_ALL_ROUTES}`, [
    ...publicRoutes,
    ...privateRoutes
  ])
  addRoutesToRouter(privateRoutes)
  HAS_ROUTES_ADDED = true
  // 1. MUST invoke `next({ ...to, replace: true })` to prevent route matching
  // from occurring before route is added
  // 2. use `to` route to replace routes occurring before private routes is added
  return next({ ...to, replace: true })
}

/**
 * @description Login state validation
 */
router.beforeEach(async (to, from, next) => {
  NProgress.start()

  // Jump to target path directly If target path has been included by white list
  // Should includes redirect page to prevent infinity redirect loop.
  if (WHITELIST.includes(to.path)) {
    return next()
  }

  // ! State: User has been logged in (local token).
  if (tokenInCookie.getItem()) {
    // step 1
    // create all routes map when no token or no accessMap
    // vuex state is empty string when user activate a new session (eg. new
    // browser tab)

    if (
      !store.getters['login/accessToken'] ||
      !store.getters['login/accesses'].length
    ) {
      try {
        await store.dispatch('login/fetchUserAccess', tokenInCookie.getItem())

        createRoutesMap(to, next)
      } catch (e) {
        errorHandler(e, next, to.path)
      }
    }

    /**
     * (step 1.1) Regenerate private routes based on user access
     */
    if (store.getters['login/accesses'].length && !HAS_ROUTES_ADDED) {
      console.log(
        '%c[Routes creation]: Activate private routes regeneration process !',
        'color: yellow;'
      )
      return createRoutesMap(to, next)
    }

    // Optional step:  real-time access control for any routes
    if (
      !to.meta.access ||
      validateAccess(to, store.getters['login/accessMap'])
    ) {
      next()
    } else {
      next({
        path: `/401?redirect=${to.path}`,
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

router.afterEach(to => {
  NProgress.done()
  store.dispatch('history/enqueue', cloneRoute(to))
})

function cloneRoute(to) {
  const clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  return Object.freeze(clone)
}

export default router
