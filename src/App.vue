<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { DEFAULT_LAYOUT } from './constants'

export default Vue.extend({
  name: 'App',

  data() {
    return {
      layoutType: DEFAULT_LAYOUT
    }
  },

  computed: {
    layoutComponent() {
      // 1. For trigger framework's internal dep collection, make
      // `layoutComponent` reactive
      // 2. DON'T use `this.$route.meta.layout` directly.
      // Because layoutComponent's underlying calculation depends on this.$route
      // this.$route changes will occur property re-computed
      // though this.$route.meta.layout never changes.
      const layout = this.layoutType
      // A component name should be embedded by template string directly.
      // Otherwise, `Critical dependency: the request of a dependency is an
      // expression` warning occurred.
      return () =>
        import(/* webpackChunkName: 'layout-[request]' */ `./layouts/${layout}`)
    }
  },

  watch: {
    $route: function(to) {
      this.layoutType = to.meta.layout || DEFAULT_LAYOUT
    }
  }
})
</script>
