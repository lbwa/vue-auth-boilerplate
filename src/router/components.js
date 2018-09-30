export default {
  analysis: () => import(/* webpackChunkName: 'analysis' */ 'VIEW/Analysis'),
  workspace: () => import(/* webpackChunkName: 'workspace' */ 'VIEW/Workspace'),
  basicForm: () => import(/* webpackChunkName: 'basic-form' */ 'VIEW/BasicForm')
}
