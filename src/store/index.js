import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// Preserve all vuex state when page reloading.
import createPersistedState from 'vuex-persistedstate'
import state from './state'
import getters from './getter'
// sync operation
import mutations from './mutations'
// async operation
import actions from './actions'
import modules from './modules'

const __DEV__ = process.env.NODE_ENV === 'development'
// https://github.com/robinvdvleuten/vuex-persistedstate
const persistedState = createPersistedState({
  key: '$_VUEX_STORE',
  // default: window.localStorage
  storage: window.sessionStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  actions,
  strict: __DEV__,
  plugins: __DEV__ ? [createLogger(), persistedState] : [persistedState]
})
