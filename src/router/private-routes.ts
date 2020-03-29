/**
 * This file should record any private routes.
 * All of them should be added dynamically
 */

export const routes = [
  {
    path: '/user',
    component: () => import(/* webpackChunkName: 'user' */ '@/views/User.vue'),
    meta: {
      title: 'User',
      ability: 'github.user.read'
    }
  },
  {
    path: '/sample',
    component: () =>
      import(
        /* webpackChunkName: 'sample' */ '@/components/BaseRouterView.vue'
      ),
    meta: {
      title: 'Sample'
    },
    children: [
      {
        path: 'read',
        component: () =>
          import(/* webpackChunkName: 'sample-read' */ '@/views/Sample.vue'),
        meta: {
          title: 'SampleRead',
          strict: ['github.sample.read', 'github.sample.write', 'npm.org.read']
        }
      }
    ]
  }
]
