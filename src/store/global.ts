import { GetterTree, MutationTree, ActionTree } from 'vuex'
import cloneDeep from 'lodash.clonedeep'
import { HistoryState } from './modules/history'
import { UserState } from './modules/user'

export type RootState = {
  DO_NOT_MUTATE: RootState
  history: HistoryState
  user: UserState
}

interface GlobalNamespaces {
  state: Pick<RootState, 'DO_NOT_MUTATE'>
  getters: GetterTree<RootState, RootState>
  mutations: MutationTree<RootState>
  actions: ActionTree<RootState, RootState>
}

const globalNamespace: GlobalNamespaces = {
  state: {
    // DO NOT mutate this snapshot property for the entire store.state
    // This is should be use to reset state
    DO_NOT_MUTATE: {} as RootState
  },

  getters: {},

  mutations: {
    // should always pass a store.state deep clone, instead of reference
    setSnapshot(state, snapshot) {
      state.DO_NOT_MUTATE = snapshot
    },
    resetState(state, replacement: RootState) {
      /**
       * Why we don't use store.replaceState directly?
       * https://github.com/lbwa/vue-auth-boilerplate/pull/13
       */

      // should always use a deep clone from snapshot to avoid unexpected snapshot mutation
      Object.assign(state, cloneDeep(replacement))
    }
  },

  actions: {
    resetState({ commit, rootState }) {
      commit('resetState', rootState.DO_NOT_MUTATE)
    }
  }
}

export default globalNamespace
