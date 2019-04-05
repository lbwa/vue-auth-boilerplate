import { dynamicComponents, plainExport } from 'ROUTER/components'

export default [
  {
    path: '/private',
    name: 'private',
    component: plainExport,
    meta: {
      title: 'Private Device',
      icon: 'el-icon-picture-outline'
    },
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesPrivate,
        meta: {
          title: 'Admin',
          access: {
            device: ['read', 'write', 'import']
          }
        }
      },
      {
        path: 'user',
        component: dynamicComponents.pagesPrivate,
        meta: {
          title: 'User',
          access: {
            device: ['read']
          }
        }
      }
    ]
  },
  // Should be hide all /private/* routes when user access exclude 'admin'
  // Because the only child route can only be accessed by admin
  {
    path: '/app',
    component: plainExport,
    meta: {
      title: 'Private App',
      icon: 'el-icon-mobile-phone'
    },
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesPrivate,
        meta: {
          title: 'Admin',
          access: {
            app: ['read', 'write']
          }
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]
