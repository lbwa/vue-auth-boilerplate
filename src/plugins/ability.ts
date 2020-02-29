import Vue from 'vue'
import VAccess, { init, RouteWithAbility } from 'v-access'
import { Plugin } from 'vuex'
import { RootState } from '@/store'
import VueRouter from 'vue-router'

Vue.use(VAccess)

type CreateAbilityPlugin = (
  mutationType: string,
  instance: Vue | VueRouter,
  redirect: string,
  routes: RouteWithAbility[]
) => Plugin<RootState>

export const createAbilityPlugin: CreateAbilityPlugin = function(
  mutationType, // when should we call init
  vm,
  redirect,
  routes
) {
  return store => {
    store.subscribe(mutation => {
      if (mutation.type === mutationType) {
        init({
          vm,
          abilities: mutation.payload,
          redirect,
          routes
        })
        return
      }
    })
  }
}
