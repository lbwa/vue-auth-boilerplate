import { common, nestedExport } from '../components'

export default [
  {
    path: '/',
    component: common.login,
    meta: {
      hidden: true,
      layout: 'login'
    }
  },
  {
    path: '/dashboard',
    component: nestedExport,
    redirect: '/dashboard/analysis',
    meta: {
      title: 'Dashboard',
      icon: 'el-icon-service'
    },
    children: [
      {
        path: 'analysis',
        component: common.dashboardAnalysis,
        meta: {
          title: 'Analysis'
        }
      },
      {
        path: 'workspace',
        component: common.dashboardWorkspace,
        meta: {
          title: 'Workspace'
        }
      }
    ]
  },
  {
    path: '/form',
    component: nestedExport,
    redirect: '/form/basic',
    meta: {
      title: 'Form',
      icon: 'el-icon-document'
    },
    children: [
      {
        path: 'basic',
        component: common.formBasic,
        meta: {
          title: 'Basic form'
        }
      },
      {
        path: 'step',
        component: common.formStepIndex,
        redirect: 'step/info',
        meta: {
          title: 'Step form',
          // hide all child routes
          hideChildren: true,
          // Only work with `hideChildren`, and set 1st child routes to replace
          // default routes
          setIndex: 0
        },
        children: [
          {
            path: 'info',
            component: common.formStepInfo,
            meta: {
              title: 'info'
            }
          },
          {
            path: 'confirm',
            component: common.formStepConfirm,
            meta: {
              title: 'confirm'
            },
            beforeEnter (to, from, next) {
              from.path !== '/form/step/info' ? next('/form/step/info') : next()
            }
          },
          {
            path: 'success',
            component: common.formStepSuccess,
            meta: {
              title: 'success'
            },
            beforeEnter (to, from, next) {
              from.path !== '/form/step/confirm' ? next('/form/step/info') : next()
            }
          }
        ]
      }
      // {
      //   path: 'advanced',
      //   component: common.formAdvanced,
      //   meta: {
      //     title: '高级表单'
      //   }
      // }
    ]
  },
  {
    path: '/table',
    component: nestedExport,
    redirect: '/table/pagination',
    meta: {
      title: 'Table',
      icon: 'el-icon-tickets'
    },
    children: [
      {
        path: 'pagination',
        component: common.tablePagination,
        meta: {
          title: 'Pagination table'
        }
      }
    ]
  },
  {
    path: '/error',
    component: nestedExport,
    meta: {
      hidden: true
    },
    children: [
      {
        path: '404',
        component: common.error,
        props: {
          status: 404,
          info: '抱歉，你访问的页面不存在',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg'
        }
      },
      {
        path: '403',
        component: common.error,
        props: {
          status: 403,
          info: '抱歉，你无权访问该页面',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg'
        }
      }
    ]
  }
]
