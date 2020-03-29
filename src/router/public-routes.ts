/**
 * This file should record any public routes.
 * All user would share those static routes
 */

import { RouteSetting } from './index'

const _routes: RouteSetting[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '../views/Login.vue'),
    meta: {
      layout: 'RFooter'
    }
  },
  {
    path: '/forbidden',
    name: 'ForbiddenError',
    component: () =>
      import(/* webpackChunkName: 'error-forbidden' */ '../views/Error.vue'),
    props: {
      code: 403,
      message: 'Forbidden access'
    },
    meta: {
      hidden: true
    }
  }
]

export const routes = _routes.concat({
  path: '*',
  name: 'NotFoundError',
  component: () =>
    import(/* webpackChunkName: 'error-not-found' */ '../views/Error.vue'),
  props: {
    code: 404,
    message: 'Seems nothing could be found.'
  },
  meta: {
    layout: 'RView',
    hidden: true
  }
})
