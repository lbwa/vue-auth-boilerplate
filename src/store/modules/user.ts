import Vue from 'vue'
import { Module } from 'vuex'
import { RootState } from '..'
import { Ability, init, RouteWithAbility, reset } from 'v-access'
import { userLogin, fetchUserAbilities } from '@/effects'
import VueRouter from 'vue-router'
import { FORBIDDEN_ROUTE } from '@/constants'

interface UserState {
  token: string
  abilities: Ability[]
  routes: RouteWithAbility[]
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
    async fetchUserAbilities(
      { commit },
      {
        instance,
        routes
      }: {
        instance: Vue | VueRouter
        routes: RouteWithAbility[]
      }
    ) {
      const { abilities } = await fetchUserAbilities()

      if (abilities && abilities.length) {
        const abilitiesIds = abilities.map(
          (ability: Record<'id', string>) => ability.id
        )
        commit('setUserAbilities', abilitiesIds)

        commit(
          'setUserRoutes',
          Object.freeze(
            routes.concat(
              init({
                vm: instance,
                abilities: abilitiesIds,
                redirect: FORBIDDEN_ROUTE,
                routes: [
                  {
                    path: '/user',
                    component: () =>
                      import(
                        /* webpackChunkName: 'user' */ '@/views/User/index.vue'
                      ),
                    meta: {
                      title: 'User',
                      ability: 'ability.simulator.1'
                    }
                  }
                ]
              })
            )
          )
        )
      }
    },
    async logout({ dispatch }, router: VueRouter) {
      reset(router)
      await dispatch('resetStore', null, { root: true })
      router.push({
        name: 'Login'
      })
    }
  }
}

export default user
