import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import router from '@/router'

import modules from './modules'
import { createAbilityPlugin } from '../plugins/ability'
import { userMutationTypes } from './modules/user'
import { FORBIDDEN_ROUTE } from '@/constants'

Vue.use(Vuex)

export type RootState = {}

const abilityPlugin = createAbilityPlugin(
  userMutationTypes.setUserAbilities,
  router,
  FORBIDDEN_ROUTE,
  [
    {
      path: '/user',
      component: () =>
        import(/* webpackChunkName: 'private' */ '../views/User/index.vue'),
      meta: {
        ability: 'system.user.read'
      }
    }
  ]
)

export default new Vuex.Store<RootState>({
  state: {},
  mutations: {},
  actions: {},
  modules,
  strict: __DEV__,
  plugins: __DEV__ ? [createLogger(), abilityPlugin] : [abilityPlugin]
})
