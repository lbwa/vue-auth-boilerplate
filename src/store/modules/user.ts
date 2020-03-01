import { Module } from 'vuex'
import { RootState } from '..'
import { Ability } from 'v-access'

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
    async login({ commit }, { username, password }: Record<string, string>) {
      const { token } = await new Promise<{
        code: number
        [key: string]: unknown
      }>((resolve, reject) => {
        setTimeout(() => {
          if (
            (username === 'admin' && password === 'admin') ||
            (username === 'user' && password === 'user')
          ) {
            return resolve({
              code: 200,
              token:
                Math.random()
                  .toString(16)
                  .slice(2) +
                username +
                password
            })
          }
          reject({
            code: 401,
            msg: 'account error'
          })
        }, 2 * 1000)
      })
      commit('setToken', token)
    },
    async fetchUserAbilities({ commit }) {
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
    }
  }
}

export default user
