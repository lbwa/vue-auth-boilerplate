import Vue from 'vue'
import VueRouter from 'vue-router'
import { RouteWithAbility } from 'v-access'
import { routes } from './public-routes'
import { onLogin, onHistoryChange } from './guards'

Vue.use(VueRouter)

export type RouteSetting = /* intersection type */ RouteWithAbility & {
  meta?: Partial<{
    layout: string
    hidden: boolean
    icon: string
    title: string
  }>
}

const router = new VueRouter({
  /**
   * Should add new routes in the ./routes.ts file, instead of this file.
   */
  routes
})

router.beforeEach(onLogin)
router.afterEach(onHistoryChange)

export default router
