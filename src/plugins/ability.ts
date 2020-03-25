import Vue from 'vue'
import VAccess, { init, RouteWithAbility } from 'v-access'
import { RootState } from '@/store/global'
import { Store } from 'vuex'
import VueRouter from 'vue-router'
import { userMutationTypes } from '@/store/modules/user'

Vue.use(VAccess)

declare module 'vue-router/types/router' {
  interface VueRouter {
    options: RouterOptions
  }
}

interface ConnectOptions {
  redirect: string
  routes: RouteWithAbility[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isVue(val: Record<string, any>): val is Vue {
  return Object.prototype.hasOwnProperty.call(val, '_isVue') && val._isVue
}

export const connect = function(
  vm: Vue | VueRouter,
  store: Store<RootState>,
  { redirect, routes }: ConnectOptions = {} as ConnectOptions
) {
  store.watch(
    state => state.user.abilities,
    abilities => {
      if (Array.isArray(abilities) && abilities.length) {
        let origin: RouteWithAbility[] | undefined
        if (isVue(vm)) {
          origin = vm.$root.$router.options.routes
        } else {
          origin = vm.options.routes
        }
        store.commit(
          'user/' + userMutationTypes.setUserRoutes,
          (origin || []).concat(
            init({
              vm,
              abilities,
              redirect,
              routes
            })
          )
        )
      }
    },
    {
      immediate: true,
      sync: true
      // type assertion - WatchOption doesn't include `sync` option
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any
  )
}
