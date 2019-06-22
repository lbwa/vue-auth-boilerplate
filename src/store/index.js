import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// Preserve all vuex state when page reloading.
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
import { STORE_KEY } from 'UTILS/storage'

/**
 * @description create a global state snapshot to save initial state which is
 * used to reset global state
 */
import { stateSnapshot } from 'UTILS/storage'
const initialState = Object.keys(modules).reduce((snapshot, moduleName) => {
  snapshot[moduleName] = modules[moduleName].state
  return snapshot
}, {})
stateSnapshot.setItem(Object.assign(initialState, state))

/**
 * @description Vuex persisted state
 */
const __DEV__ = process.env.NODE_ENV === 'development'
// https://github.com/robinvdvleuten/vuex-persistedstate
// https://github.com/js-cookie/js-cookie
const persistedState = createPersistedState({
  key: STORE_KEY,
  // default: window.localStorage
  storage: {
    getItem: key => Cookies.get(key),
    // `expires: default`: Cookie is removed when the user closes the browser.
    setItem: (key, value) => Cookies.set(key, value, { secure: !__DEV__ }),
    removeItem: key => Cookies.remove(key, Cookies.get(key))
  }
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state,
  mutations,
  actions,
  strict: __DEV__,
  plugins: __DEV__ ? [createLogger(), persistedState] : [persistedState]
})
