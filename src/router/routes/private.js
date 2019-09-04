import { privateComponents as components, pureExport } from 'ROUTER/components'

export default [
  {
    path: '/private',
    name: 'private',
    component: pureExport,
    meta: {
      title: 'Private',
      icon: 'el-icon-lock'
    },
    children: [
      {
        path: 'admin',
        component: components.pagesPrivateAdmin,
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
        component: components.pagesPrivateUser,
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
    component: pureExport,
    meta: {
      title: 'Private Only Child',
      icon: 'el-icon-lock'
    },
    children: [
      {
        path: 'admin',
        component: components.pagesPrivateOnlyChild,
        meta: {
          title: 'Admin',
          access: ['admin.app.read', 'admin.app.write']
        }
      }
    ]
  },
  {
    path: '/optional-access',
    component: components.pagesOptionalAccess,
    meta: {
      title: 'Optional Access',
      icon: 'el-icon-lock',
      optionalAccess: ['admin.app.read', 'user.app.read']
    }
  },
  // NOTICE: Ensure 404 page is last route
  {
    path: '*',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]
