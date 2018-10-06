import analysis from './analysis'
import workspace from './workspace'
import formStep from './formStep'
import formBasic from './formBasic'

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
  },
  formBasic: {
    namespaced: true,
    ...formBasic
  }
}
