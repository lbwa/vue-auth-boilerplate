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
      ability: 'github.repo.read'
    }
  }
]
