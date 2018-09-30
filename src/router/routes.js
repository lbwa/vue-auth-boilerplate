import components from './components'

export default [
  {
    path: '/',
    component: components.login
  },
  {
    path: '/dashboard/analysis',
    component: components.analysis
  },
  {
    path: '/dashboard/workspace',
    component: components.workspace
  },
  {
    path: '/form/basic-form',
    component: components.basicForm
  }
]
