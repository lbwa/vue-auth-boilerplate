import analysis from './analysis'
import workspace from './workspace'
import formStep from './formStep'

export default {
  analysis: {
    namespaced: true,
    ...analysis
  },
  workspace: {
    namespaced: true,
    ...workspace
  },
  formStep: {
    namespaced: true,
    ...formStep
  }
}
