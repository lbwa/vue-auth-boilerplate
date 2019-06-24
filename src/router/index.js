import Vue from 'vue'
import Router from 'vue-router'
import publicRoutes from './routes/public'

Vue.use(Router)

function createRouter() {
  return new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: publicRoutes
  })
}

const router = createRouter()

/**
 * @description to implement addRoutes resetting
 * @ref https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
 */
export function resetRouter() {
  router.matcher = createRouter().matcher
}

/**
 * ! NOTICE
 * This router instance should not be added directly without
 * `ACCESS/index` processing.
 */
export default router
