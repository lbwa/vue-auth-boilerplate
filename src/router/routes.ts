import { RouteConfig } from 'vue-router'

interface ConsoleRouteConfig extends RouteConfig {
  meta?: Partial<{
    layout: string
    hidden: boolean
    icon: string
    title: string
  }>
}

const routes: ConsoleRouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '../views/Login/index.vue'),
    meta: {
      layout: 'RFooter'
    }
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
    },
    meta: {
      hidden: true
    }
  }
]

export default routes.concat({
  path: '*',
  name: 'NotFoundError',
  component: () =>
    import(
      /* webpackChunkName: 'error-not-found' */ '../views/Error/index.vue'
    ),
  props: {
    code: 404,
    message: 'Seems nothing could be found.'
  },
  meta: {
    layout: 'RView',
    hidden: true
  }
})
