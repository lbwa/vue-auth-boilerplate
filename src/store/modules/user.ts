import { Module } from 'vuex'
import { RootState } from '../global'
import { Ability, reset } from 'v-access'
import { userLogin, fetchUserAbilities } from '@/effects'
import VueRouter from 'vue-router'
import { RouteSetting } from '@/router/public-routes'

export interface UserState {
  token: string
  abilities: Ability[]
  routes: RouteSetting[]
}

export interface UserAbility {
  name: string
  uid: string
  create_at: string
}

export const userMutationTypes = {
  setToken: 'setToken',
  setUserAbilities: 'setUserAbilities',
  setUserRoutes: 'setUserRoutes'
}

const user: Module<UserState, RootState> = {
  namespaced: true,

  state: {
    token: '',
    abilities: [],
    // this is user private routes, not all routes
    routes: []
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
    },
    [userMutationTypes.setUserRoutes](state, routes) {
      state.routes = routes
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
      const abilities = await fetchUserAbilities()

      if (abilities && abilities.length) {
        const abilitiesIds = abilities.map(
          (ability: Record<'name', string>) => ability.name
        )
        commit('setUserAbilities', abilitiesIds)
      }
    },
    async logout({ dispatch }, router: VueRouter) {
      reset(router)
      await dispatch('resetState', null, { root: true })
      router.push({
        name: 'Login'
      })
    }
  }
}

export default user
