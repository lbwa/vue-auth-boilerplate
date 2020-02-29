import { Module } from 'vuex'
import { RootState } from '..'
import { Ability } from 'v-access'
import { errorLog } from '@/shared/utils'

interface UserState {
  token: string
  abilities: Ability[]
}

export const types = {
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
    setToken(state, token) {
      state.token = token
    },
    setUserAbilities(state, abilities) {
      state.abilities = abilities
    }
  },

  actions: {
    async fetchUserInfo(
      { commit },
      { username, password }: Record<string, string>
    ) {
      try {
        const { token } = await Promise.resolve({
          token:
            Math.random()
              .toString(16)
              .slice(2) +
            username +
            password
        })
        commit('setToken', token)
      } catch (error) {
        errorLog(error)
      }
    },
    async fetchUserAbilities({ commit }) {
      try {
        const { abilities } = await Promise.resolve({
          abilities: Array(20)
            .fill(null)
            .map((_, index) => ({
              id: `ability.simulator.${index}`,
              name: `ability.simulator.${index}`,
              createAt: Date.now() + index
            }))
        })
        commit(
          'setUserAbilities',
          abilities.map(ability => ability.id)
        )
      } catch (error) {
        errorLog(error)
      }
    }
  }
}

export default user
