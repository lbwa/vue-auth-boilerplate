import components from './components'

export default [
  {
    path: '/',
    redirect: '/dashboard/analysis'
  },
  {
    path: '/dashboard',
    component: components.wrapper,
    children: [
      {
        path: 'analysis',
        component: components.analysis
      },
      {
        path: 'monitor',
        component: components.monitor
      },
      {
        path: 'workspace',
        component: components.workspace
      }
    ]
  },
  {
    path: '/form',
    component: components.wrapper,
    children: [
      {
        path: 'basic-form',
        component: components.basicForm
      }
    ]
  }
]
