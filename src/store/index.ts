import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import modules from './modules'
import globalNamespace from './global'
import { createResetPlugin } from '../plugins/store'

Vue.use(Vuex)

const plugins = (() => {
  const plugins = [createResetPlugin('resetStore')]
  if (__DEV__) {
    plugins.push(createLogger())
  }
  return plugins
})()

export type RootState = typeof globalNamespace.state

const store = new Vuex.Store<RootState>(
  Object.assign(globalNamespace, {
    modules,
    strict: __DEV__,
    plugins
  })
)

export default store
