import types from './types'

export default {
  [types.TOGGLE_ASIDE] (state) {
    state.isCollapse = !state.isCollapse
  },

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
  }
}