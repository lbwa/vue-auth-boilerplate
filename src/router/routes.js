// import { createRoutes } from './utils'
// import paths from './components/components'
import components from './components'

export default [
  {
    path: '/',
    component: components.login
  },
  {
    path: '/dashboard/analysis',
    component: components.dashboardAnalysis
  },
  {
    path: '/dashboard/workspace',
    component: components.dashboardWorkspace
  },
  {
    path: '/form/basic',
    component: components.formBasic
  },
  {
    path: '/form/step',
    component: components.formStepIndex,
    redirect: '/form/step/info',
    children: [
      {
        path: 'info',
        component: components.formStepInfo
      },
      {
        path: 'confirm',
        component: components.formStepConfirm,
        beforeEnter (to, from, next) {
          from.path !== '/form/step/info' ? next('/form/step/info') : next()
        }
      },
      {
        path: 'success',
        component: components.formStepSuccess,
        beforeEnter (to, from, next) {
          from.path !== '/form/step/confirm' ? next('/form/step/info') : next()
        }
      }
    ]
  },
  {
    path: '/form/advanced',
    component: components.formAdvanced
  }
]
