<template>
  <v-app id="adminize">
    <transition name="layout">
      <component :is="layoutComponent">
        <router-view />
      </component>
    </transition>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { DEFAULT_LAYOUT } from './constants'

export default Vue.extend({
  name: 'App',

  computed: {
    layoutComponent() {
      // for trigger framework's internal dep collection, make `layoutComponent`
      // reactive
      const layout = this.$route.meta.layout || DEFAULT_LAYOUT
      // A component name should be embedded by template string directly.
      // Otherwise, `Critical dependency: the request of a dependency is an
      // expression` warning occurred.
      return () =>
        import(/* webpackChunkName: 'layout-[request]' */ `./layouts/${layout}`)
    }
  },

  watch: {
    $route: function(to) {
      this.$store.commit('history/append', to)
    }
  }
})
</script>
