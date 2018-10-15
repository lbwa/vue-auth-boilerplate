import { dynamic, nestedExport } from '../components'

// Service response routes map can be used to expand or rebuild this preset map
export default [
  {
    path: '/access',
    component: nestedExport,
    meta: {
      title: 'Access',
      icon: 'el-icon-view'
      // no meta means this component is common components in dynamic routes
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
  },
  // Last one routes should be a error handle,
  // it's also will become global error handle
  {
    path: '*',
    redirect: '/error/404',
    meta: {
      hidden: true
    }
  }
]
