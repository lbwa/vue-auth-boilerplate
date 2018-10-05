import types from './types'

export default {
  [types.SET_PAY_ACCOUNT] (state, payAccount) {
    state.form.payAccount = payAccount
  },
  [types.SET_RECEIVER_ACCOUNT] (state, evt) {
    state.form.receiverAccount = evt.target.value
  },
  [types.SET_RECEIVER_TYPE] (state, receiverType) {
    state.form.receiverType = receiverType
  },
  [types.SET_RECEIVER_NAME] (state, evt) {
    state.form.receiverName = evt.target.value
  },
  [types.SET_AMOUNT] (state, evt) {
    const value = parseFloat(evt.target.value)
    state.form.amount = isNaN(value) ? 0 : value
  }
}
