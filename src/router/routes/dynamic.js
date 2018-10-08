import { dynamic, nestedExport } from '../components'

// Service response routes map can be used to expand or rebuild this preset map
export default [
  {
    path: '/access',
    component: nestedExport,
    meta: {
      title: 'Access',
      role: ['admin']
    },
    children: [
      {
        path: 'admin',
        component: dynamic.accessAdmin,
        meta: {
          title: 'admin',
          role: ['admin']
        }
      },
      {
        path: 'user',
        component: dynamic.accessUser,
        meta: {
          title: 'user',
          role: ['user']
        }
      }
    ]
  }
]
