import { constantComponents, plainExport } from 'ROUTER/components'

/**
 * meta: {
 *   title: 'route title', // Route will be hidden if meta.title is falsy value
 *   icon: '', // title text icon name
 *   layout: '', // layout name, 'plain' or 'material'(default value)
 *   roles: ['admin', 'user'] // current route access
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
    component: constantComponents.pagesHome,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: constantComponents.pagesLogin,
    meta: {
      layout: 'plain'
    }
  },
  {
    path: '/admin',
    component: plainExport,
    meta: {
      title: 'Admin',
      icon: 'el-icon-view'
    },
    children: [
      {
        path: 'dashboard',
        component: constantComponents.pagesAdminDashboard,
        meta: {
          title: 'Dashboard',
          access: {
            device: ['read', 'write', 'import']
          }
        }
      },
      {
        path: 'table',
        component: constantComponents.pagesAdminTable,
        meta: {
          title: 'Table',
          icon: 'el-icon-tickets',
          access: {
            device: ['read', 'write', 'import']
          }
        }
      }
    ]
  },
  {
    path: '/common',
    component: plainExport,
    meta: {
      title: 'Common',
      icon: 'el-icon-document'
    },
    children: [
      {
        path: 'user',
        component: constantComponents.pagesCommonUser,
        meta: {
          title: 'User'
        }
      }
    ]
  },
  {
    path: '/nested',
    component: constantComponents.pagesNested,
    meta: {
      title: 'Nested',
      icon: 'el-icon-document'
    },
    children: [
      {
        path: 'nested-1',
        component: constantComponents.pagesNested,
        meta: {
          title: 'nested-1'
        },
        children: [
          {
            path: 'nested-2',
            component: constantComponents.pagesNested,
            meta: {
              title: 'nested-2'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/403',
    component: constantComponents.pagesErrorUnauthorized
  },
  {
    path: '/404',
    component: constantComponents.pagesErrorNotFound
  }
]
