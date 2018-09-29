import types from './mutations/types'

export default {
  getAnalysisData ({ commit }, analysisData) {
    commit(types.SET_SALES, analysisData.sales)
    commit(types.SET_VISITORS, analysisData.visitors)
    commit(types.SET_PAYMENTS, analysisData.payments)
    commit(types.SET_OPERATIONS, analysisData.operations)
    commit(types.SET_RANK_LIST, analysisData.rankList)
    commit(types.SET_SEARCH_DATA, analysisData.searchData)
    commit(types.SET_SALES_TYPE, analysisData.salesType)
  }
}
