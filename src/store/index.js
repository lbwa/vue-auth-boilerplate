import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import state from './state'
import mutations from './mutations'
import actions from './actions'

const debug = process.env.NODE_ENV === 'development'

if (debug) console.log(`Under development mode`)

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

if (module.hot) {
  module.hot.accept([
    './state',
    './mutations',
    './actions'
  ], () => {
    const newState = require('./state').default
    const newMutations = require('./mutations').default
    const newActions = require('./actions').default

    store.hotUpdate({
      state: newState,
      mutations: newMutations,
      actions: newActions
    })
  })
}

export default store
