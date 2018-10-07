import { dynamic } from '../components'

// Service response routes map can be used to expand or rebuild this preset map
export default [
  {
    path: '/access/admin',
    component: dynamic.access,
    meta: {
      role: ['admin']
    }
  },
  {
    path: '/access/user',
    component: dynamic.access,
    meta: {
      role: ['user']
    }
  }
]
