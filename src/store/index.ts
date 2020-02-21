import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import modules from './modules'

Vue.use(Vuex)

const __DEV__ = process.env.NODE_ENV === 'development'

export type RootState = {}

export default new Vuex.Store<RootState>({
  state: {},
  mutations: {},
  actions: {},
  modules,
  strict: __DEV__,
  plugins: __DEV__ ? [createLogger()] : []
})
