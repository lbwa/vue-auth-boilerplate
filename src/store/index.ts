import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export type RootState = {}

export default new Vuex.Store<RootState>({
  state: {},
  mutations: {},
  actions: {},
  modules
})
