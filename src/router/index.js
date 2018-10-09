import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'STORE'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { commonRoutes } from './routes'
import { getTokenFromLocal } from 'AUTH'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: commonRoutes
})

router.beforeEach((to, from, next) => {
  nprogress.start()

  if (to.path === '/') {
    next()
    return
  }

  // get token from sessionStorage
  if (getTokenFromLocal()) {
    // fetch user info
    if (!store.getters['login/role'].length && to.path !== '/') {
      store.dispatch('login/fetchUserInfo')
        .then((userInfo) => {
          // Preset dynamic routes is used to create new global routes map,
          // filtered by `role` variable.
          store.dispatch('login/createExtraRoutes', userInfo)
            .then(() => router.addRoutes(store.getters['login/addRoutes']))
        })
        .catch(console.error)
    }
    next()
  } else {
    next({ path: `/?redirect=${to.path}`, replace: true })
  }
})

router.afterEach((to, from) => {
  nprogress.done()
})

export default router
