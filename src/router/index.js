import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

/**
 * 1. 在使用 history 模式的情况下，将导致嵌套路由出错，但 hash 模式下，正常；推测为后
 * 端对应路由配置问题
 * 2. 示例如：在 history 模式下先点击 dashboard 下条目再点击 form 下条目将报错，反
 * 之，不成立
 */
// https://router.vuejs.org/zh/guide/essentials/history-mode.html
export default new VueRouter({
  // mode: 'history',
  routes
})
