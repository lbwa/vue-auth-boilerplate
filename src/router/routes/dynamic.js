import { dynamic } from '../components'

export default [
  {
    path: '/access/admin',
    component: dynamic.permission,
    meta: {
      role: ['admin', 'user']
    }
  },
  {
    path: '/access/user',
    component: dynamic.permission,
    meta: {
      role: ['user']
    }
  }
]
