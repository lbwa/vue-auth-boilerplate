import { Module } from 'vuex'
import { RootState } from '..'
import { Ability } from 'v-access'
import { userLogin, fetchUserAbilities } from '@/effects'

interface UserState {
  token: string
  abilities: Ability[]
}

export const userMutationTypes = {
  setToken: 'setToken',
  setUserAbilities: 'setUserAbilities'
}

const user: Module<UserState, RootState> = {
  namespaced: true,

  state: {
    token: '',
    abilities: []
  },

  getters: {
    hasLogin({ token }) {
      return Boolean(token)
    }
  },

  mutations: {
    [userMutationTypes.setToken](state, token) {
      state.token = token
    },
    [userMutationTypes.setUserAbilities](state, abilities) {
      state.abilities = abilities
    }
  },

  actions: {
    async login(
      { commit },
      { username, password }: Record<'username' | 'password', string>
    ) {
      const { token } = await userLogin(username, password)
      token && commit('setToken', token)
    },
    async fetchUserAbilities({ commit }) {
      const { abilities } = await fetchUserAbilities()
      abilities &&
        abilities.length &&
        commit(
          'setUserAbilities',
          abilities.map((ability: Record<'id', string>) => ability.id)
        )
    }
  }
}

export default user
