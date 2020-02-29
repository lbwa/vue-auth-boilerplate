import Vue from 'vue'
import VueRouter from 'vue-router'
import { onLogin } from './guards'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {}
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '../views/Login/index.vue')
  },
  {
    path: '/forbidden',
    name: 'ForbiddenError',
    component: () =>
      import(
        /* webpackChunkName: 'error-forbidden' */ '../views/Error/index.vue'
      ),
    props: {
      code: 403,
      message: 'Forbidden access'
    }
  },
  {
    path: '*',
    name: 'NotFoundError',
    component: () =>
      import(
        /* webpackChunkName: 'error-not-found' */ '../views/Error/index.vue'
      ),

    props: {
      code: 404,
      message: 'Seems nothing could be found.'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(onLogin)

export default router
