import Vue from 'vue'
import Router from 'vue-router'
import constantRoutes from './routes/constant'

Vue.use(Router)

/**
 * ! NOTICE
 * This router instance should not be added directly without
 * `PERMISSION/index` processing.
 */
export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
