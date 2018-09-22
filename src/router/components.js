export default {
  wrapper: () => import(/* webpackChunkName: 'wrapper' */ 'COMPONENTS/MainWrapper'),
  analysis: () => import(/* webpackChunkName: 'dashboard' */ 'VIEW/Analysis'),
  monitor: () => import(/* webpackChunkName: 'dashboard' */ 'VIEW/Monitor'),
  workspace: () => import(/* webpackChunkName: 'dashboard' */ 'VIEW/Workspace'),
  basicForm: () => import(/* webpackChunkName: 'form' */ 'VIEW/BasicForm')
}
