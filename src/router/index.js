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

  // get token from sessionStorage
  if (getTokenFromLocal()) {
    if (!store.getters['login/role'].length && to.path !== '/') {
      store.dispatch('login/fetchUserInfo')
        .then(({ role }) => {
          // Preset dynamic routes is used to create new global routes map,
          // filtered by `role` variable.
          if (!Array.isArray(role)) {
            throw new TypeError(role, ` should be a array`)
          }
          store.dispatch('login/createExtraRoutes', { role })
        })
    }
  }
  next()
})

router.afterEach((to, from) => {
  nprogress.done()
})

export default router
