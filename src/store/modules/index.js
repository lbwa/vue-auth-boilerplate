import analysis from './analysis'
import workspace from './workspace'

export default {
  analysis: {
    namespaced: true,
    ...analysis
  },
  workspace: {
    namespaced: true,
    ...workspace
  }
}
