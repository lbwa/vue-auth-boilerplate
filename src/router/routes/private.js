import { dynamicComponents, plainExport } from 'ROUTER/components'

export default [
  {
    path: '/private',
    name: 'private',
    component: plainExport,
    meta: {
      title: 'Private',
      icon: 'el-icon-picture'
    },
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesPrivateAdmin,
        meta: {
          title: 'Admin',
          access: [
            'admin.device.read',
            'admin.device.write',
            'admin.device.import'
          ]
        }
      },
      {
        path: 'user',
        component: dynamicComponents.pagesPrivateUser,
        meta: {
          title: 'User',
          access: ['user.device.read']
        }
      }
    ]
  },
  // Should be hide all /private/* routes when user access exclude 'admin'
  // Because the only child route can only be accessed by admin
  {
    path: '/private-one-child',
    component: plainExport,
    meta: {
      title: 'Private Only Child',
      icon: 'el-icon-s-platform'
    },
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesPrivateOnlyChild,
        meta: {
          title: 'Admin',
          access: ['admin.app.read', 'admin.app.write']
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
