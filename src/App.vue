<template>
  <div id="app">
    <transition name="layout">
      <component :is="layoutComponent">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { DEFAULT_LAYOUT } from './constants'

export default Vue.extend({
  name: 'App',

  computed: {
    layoutComponent() {
      // for trigger framework internal dep collection, make `layoutComponent`
      // reactive
      const layout = this.$route.meta.layout || DEFAULT_LAYOUT
      // A component name should be embedded by template string directly.
      // Otherwise, `Critical dependency: the request of a dependency is an
      // expression` warning occurred.
      return () =>
        import(
          /* webpackChunkName: 'layout-[request]' */ `./layouts/${layout}.vue`
        )
    }
  }
})
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>
