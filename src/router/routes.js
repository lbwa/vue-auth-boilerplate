import components from './components'

// ! FIXME: 先点击 dashboard 下条目再点击 form 下条目将报错，反之，不成立
export default [
  {
    path: '/',
    component: components.analysis
    // redirect: '/form/basic-form'
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
