import components from 'ROUTER/components'

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
    component: components.pagesHome,
    meta: {
      title: 'Home'
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
    path: '/admin',
    component: components.componentsRouterExport,
    meta: {
      title: 'Admin',
      icon: 'el-icon-view'
    },
    children: [
      {
        path: 'dashboard',
        component: components.pagesAdminDashboard,
        meta: {
          title: 'Dashboard',
          access: {
            device: ['read', 'write', 'import']
          }
        }
      },
      {
        path: 'table',
        component: components.pagesAdminTable,
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
    component: components.componentsRouterExport,
    meta: {
      title: 'Common',
      icon: 'el-icon-document'
    },
    children: [
      {
        path: 'user',
        component: components.pagesCommonUser,
        meta: {
          title: 'User'
        }
      }
    ]
  },
  {
    path: '/nested',
    component: components.pagesNested,
    meta: {
      title: 'Nested',
      icon: 'el-icon-document'
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
    path: '/403',
    component: components.pagesErrorUnauthorized
  },
  {
    path: '/404',
    component: components.pagesErrorNotFound
  }
]
