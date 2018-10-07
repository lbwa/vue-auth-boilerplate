import { dynamic } from '../components'

// Service response routes map can be used to expand or rebuild this preset map
export default [
  {
    path: '/access',
    component: dynamic.access,
    meta: {
      title: 'Access',
      role: ['admin']
    },
    children: [
      {
        path: 'admin',
        component: dynamic.access,
        meta: {
          title: 'admin',
          role: ['admin']
        }
      },
      {
        path: 'user',
        component: dynamic.access,
        meta: {
          title: 'user',
          role: ['user']
        }
      }
    ]
  }
]
