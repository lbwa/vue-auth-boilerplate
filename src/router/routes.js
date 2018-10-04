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
  }
]
