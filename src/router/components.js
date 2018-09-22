export default {
  dashboard: () => import(/* webpackChunkName: 'dashboard' */ 'VIEW/Dashboard'),
  analysis: () => import(/* webpackChunkName: 'dashboard' */ 'VIEW/Analysis'),
  monitor: () => import(/* webpackChunkName: 'dashboard' */ 'VIEW/Monitor'),
  workspace: () => import(/* webpackChunkName: 'dashboard' */ 'VIEW/Workspace')
}
