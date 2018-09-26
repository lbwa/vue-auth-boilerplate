import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import modules from './modules'
import globalState from './state'
import globalMutations from './mutations'

const debug = process.env.NODE_ENV === 'development'

if (debug) console.log(`Under development mode`)

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  globalState,
  globalMutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
