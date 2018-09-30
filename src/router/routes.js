import components from './components'

export default [
  {
    path: '/',
    component: components.login,
    meta: {
      layout: 'login'
    }
  },
  {
    path: '/dashboard/analysis',
    component: components.analysis,
    meta: {
      layout: 'admin'
    }
  },
  {
    path: '/dashboard/workspace',
    component: components.workspace,
    meta: {
      layout: 'admin'
    }
  },
  {
    path: '/form/basic-form',
    component: components.basicForm,
    meta: {
      layout: 'admin'
    }
  }
]
