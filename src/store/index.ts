import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import modules from './modules'
import { createAbilityPlugin } from '../plugins/ability'
import router from '@/router'

Vue.use(Vuex)

const __DEV__ = process.env.NODE_ENV === 'development'

export type RootState = {}

const abilityPlugin = createAbilityPlugin(
  'user/setUserAbilities',
  router,
  '/forbidden',
  [
    {
      path: '/user',
      component: () =>
        import(/* webpackChunkName: 'private' */ '../views/User/index.vue'),
      meta: {
        ability: 'github.repo.read'
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
