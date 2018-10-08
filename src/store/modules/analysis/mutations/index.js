import types from './types'

export default {
  [types.SET_SALES] (state, sales) {
    state.sales = sales
  },

  [types.SET_VISITORS] (state, visitors) {
    state.visitors = visitors
  },

  [types.SET_PAYMENTS] (state, payments) {
    state.payments = payments
  },

  [types.SET_OPERATIONS] (state, operations) {
    state.operations = operations
  },

  [types.SET_RANK_LIST] (state, rankList) {
    state.rankList = rankList
  },

  [types.SET_SEARCH_DATA] (state, searchData) {
    state.searchData = searchData
  },

  [types.SET_SALES_TYPE] (state, salesType) {
    state.salesType = salesType
  }
}
