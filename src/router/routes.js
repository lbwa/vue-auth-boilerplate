import components from './components'

export default [
  {
    path: '/',
    // redirect: '/dashboard/analysis'
    component: components.analysis
  },
  {
    path: '/dashboard',
    children: [
      {
        path: '/analysis',
        component: components.analysis
      },
      {
        path: '/monitor',
        component: components.monitor
      },
      {
        path: '/workspace',
        component: components.workspace
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
