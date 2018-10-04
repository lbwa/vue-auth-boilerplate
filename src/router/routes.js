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
        component: components.formStepConfirm
      },
      {
        path: 'success',
        component: components.formStepSuccess
      }
    ]
  },
  {
    path: '/form/advanced',
    component: components.formAdvanced
  }
]
