import { common } from '../components'

export default [
  {
    path: '/',
    component: common.login
  },
  {
    path: '/dashboard/analysis',
    component: common.dashboardAnalysis
  },
  {
    path: '/dashboard/workspace',
    component: common.dashboardWorkspace
  },
  {
    path: '/form/basic',
    component: common.formBasic
  },
  {
    path: '/form/step',
    component: common.formStepIndex,
    redirect: '/form/step/info',
    children: [
      {
        path: 'info',
        component: common.formStepInfo
      },
      {
        path: 'confirm',
        component: common.formStepConfirm,
        beforeEnter (to, from, next) {
          from.path !== '/form/step/info' ? next('/form/step/info') : next()
        }
      },
      {
        path: 'success',
        component: common.formStepSuccess,
        beforeEnter (to, from, next) {
          from.path !== '/form/step/confirm' ? next('/form/step/info') : next()
        }
      }
    ]
  },
  {
    path: '/form/advanced',
    component: common.formAdvanced
  }
]
