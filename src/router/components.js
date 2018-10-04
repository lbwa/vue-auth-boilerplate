export default {
  login: () => import(/* webpackChunkName: 'login' */ 'VIEW/Login'),
  analysis: () => import(/* webpackChunkName: 'analysis' */ 'VIEW/Dashboard/Analysis'),
  workspace: () => import(/* webpackChunkName: 'workspace' */ 'VIEW/Dashboard/Workspace'),
  basicForm: () => import(/* webpackChunkName: 'basic-form' */ 'VIEW/Form/Basic')
}
