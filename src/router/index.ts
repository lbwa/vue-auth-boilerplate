import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './public-routes'
import { onLogin } from './guards'

Vue.use(VueRouter)

const router = new VueRouter({
  /**
   * Should add new routes in the ./routes.ts file, instead of this file.
   */
  routes
})

router.beforeEach(onLogin)

export default router
