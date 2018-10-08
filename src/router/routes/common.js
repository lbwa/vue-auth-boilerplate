import { common } from '../components'

export default [
  {
    path: '/',
    component: common.login,
    meta: {
      title: 'analysis'
    }
  },
  {
    path: '/dashboard',
    component: common.dashboard,
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
          title: '分析页'
        }
      },
      {
        path: 'workspace',
        component: common.dashboardWorkspace,
        meta: {
          title: '工作台'
        }
      }
    ]
  },
  {
    path: '/form',
    component: common.form,
    redirect: '/form/basic',
    meta: {
      title: '表单页'
    },
    children: [
      {
        path: 'basic',
        component: common.formBasic,
        meta: {
          title: '基础表单'
        }
      },
      {
        path: 'step',
        component: common.formStepIndex,
        redirect: 'step/info',
        meta: {
          title: '分步表单'
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
      },
      {
        path: 'advanced',
        component: common.formAdvanced,
        meta: {
          title: '高级表单'
        }
      }
    ]
  }
]
