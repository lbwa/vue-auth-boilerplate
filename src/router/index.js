import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'STORE'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './routes'
import { getTokenFromLocal } from 'AUTH'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  nprogress.start()
  if (getTokenFromLocal()) { // get token from sessionStorage
    if (!store.getters['login/role'].length && to.path !== '/') {
      store.dispatch('login/fetchUserInfo')
        .then(({ role }) => {
          store.dispatch('login/createRoutes', role)
        })
    }
  }
  next()
})

router.afterEach((to, from) => {
  nprogress.done()
})

export default router
