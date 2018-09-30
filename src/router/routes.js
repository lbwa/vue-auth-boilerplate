import components from './components'

export default [
  {
    path: '/',
    redirect: '/dashboard/analysis'
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
