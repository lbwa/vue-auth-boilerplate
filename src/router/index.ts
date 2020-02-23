import Vue from 'vue'
import VueRouter from 'vue-router'

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
    name: '/login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '../views/Login/index.vue')
  },
  {
    path: '/forbidden',
    name: 'ErrorForbidden',
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
    name: 'ErrorNotFound',
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

export default router
