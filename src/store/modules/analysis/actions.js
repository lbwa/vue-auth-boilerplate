import { fetchAllAnalysis } from 'SERVICES'
import types from './mutations/types'

export default {
  fetchAnalysis ({ commit }) {
    fetchAllAnalysis().then(({ data }) => {
      commit(types.SET_SALES, data.sales)
      commit(types.SET_VISITORS, data.visitors)
      commit(types.SET_PAYMENTS, data.payments)
      commit(types.SET_OPERATIONS, data.operations)
      commit(types.SET_RANK_LIST, data.rankList)
      commit(types.SET_SEARCH_DATA, data.searchData)
      commit(types.SET_SALES_TYPE, data.salesType)
    })
  }
}
