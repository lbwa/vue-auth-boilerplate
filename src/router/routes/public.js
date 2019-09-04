import { publicComponents as components, pureExport } from 'ROUTER/components'

/**
 * meta: {
 *   title: 'route title', // Route will be hidden if meta.title is falsy value
 *   icon: '', // title text icon name
 *   layout: '', // layout name, 'plain' or 'dashboard'(default value)
 *   access: ['manage.device.read'] // current route access, it can be any string
 * }
 */
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: components.pagesHome,
    meta: {
      title: 'Home',
      icon: 'el-icon-house'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: components.pagesLogin,
    meta: {
      layout: 'plain'
    }
  },
  {
    path: '/element-access',
    component: components.pagesElementAccess,
    meta: {
      title: 'Element Access',
      icon: 'el-icon-lock'
    }
  },
  {
    path: '/static-private',
    component: pureExport,
    meta: {
      title: 'Static Private',
      icon: 'el-icon-lock'
    },
    children: [
      {
        path: 'admin',
        component: components.pagesStaticPrivateAdmin,
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
        component: components.pagesStaticPrivateUser,
        meta: {
          title: 'User',
          icon: 'el-icon-tickets',
          access: [
            'user.device.read',
            'user.device.write',
            'user.device.import'
          ]
        }
      }
    ]
  },
  {
    path: '/public',
    component: pureExport,
    meta: {
      title: 'Public',
      icon: 'el-icon-folder-opened'
    },
    children: [
      {
        path: 'anyone',
        component: components.pagesPublicAnyone,
        meta: {
          title: 'Anyone'
        }
      }
    ]
  },
  {
    path: '/nested',
    component: components.pagesNested,
    meta: {
      title: 'Nested',
      icon: 'el-icon-coin'
    },
    children: [
      {
        path: 'nested-1',
        component: components.pagesNested,
        meta: {
          title: 'nested-1'
        },
        children: [
          {
            path: 'nested-2',
            component: components.pagesNested,
            meta: {
              title: 'nested-2'
            }
          }
        ]
      }
    ]
  },
  {
    // https://tools.ietf.org/html/rfc7235#section-3.1
    path: '/401',
    component: components.pagesErrorUnauthorized
  },
  {
    path: '/404',
    component: components.pagesErrorNotFound
  }
]
