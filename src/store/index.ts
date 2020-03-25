import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import modules from './modules'
import globalNamespace, { RootState } from './global'
import { createResetPlugin } from '../plugins/store'
import createPersistedPlugins from '../plugins/persisted-state'

Vue.use(Vuex)

const plugins = (() => {
  const plugins = [createResetPlugin(), createPersistedPlugins()]
  if (__DEV__) {
    plugins.push(createLogger())
  }
  return plugins
})()

const store = new Vuex.Store<RootState>(
  Object.assign(globalNamespace, {
    modules,
    strict: __DEV__,
    plugins
  })
)

export default store
