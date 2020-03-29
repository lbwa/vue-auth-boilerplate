import Vue from 'vue'
import VAccess, { init } from 'v-access'
import { RootState } from '@/store/global'
import { Store } from 'vuex'
import VueRouter from 'vue-router'
import { userMutationTypes } from '@/store/modules/user'
import { RouteSetting } from '@/router/public-routes'

Vue.use(VAccess)

declare module 'vue-router/types/router' {
  interface VueRouter {
    options: RouterOptions
  }
}

interface ConnectOptions {
  redirect: string
  routes: RouteSetting[]
}

export const connect = function(
  vm: Vue | VueRouter,
  store: Store<RootState>,
  { redirect, routes }: ConnectOptions = {} as ConnectOptions
) {
  store.watch(
    state => state.user.abilities,
    abilities => {
      if (!Array.isArray(abilities) || !abilities.length) return

      /**
       * Because all private routes handle by v-access, we just store routes
       * excluding public parts.
       */
      store.commit(
        'user/' + userMutationTypes.setUserRoutes,
        init({
          vm,
          abilities,
          redirect,
          routes
        })
      )
    },
    {
      immediate: true,
      sync: true
      // type assertion - WatchOption doesn't include `sync` option
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any
  )
}
