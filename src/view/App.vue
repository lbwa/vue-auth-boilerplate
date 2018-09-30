<template>
  <div id="root">
    <keep-alive>
      <component :is="currentLayout">
        <route-view></route-view>
      </component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layout: 'admin'
    }
  },

  methods: {
    handleRouteUpdate (to, from) {
      this.layout = to.path === '/' ? 'login' : 'admin'
    }
  },

  watch: {
    '$route': 'handleRouteUpdate'
  },

  computed: {
    currentLayout () {
      const formatLayoutKey = this.layout.replace(/^[a-z]/, key => {
        return key.toUpperCase()
      })
      return () => import(/* webpackChunkName: 'layout-[request]' */ `LAYOUT/${formatLayoutKey}.vue`)
    }
  }
}
</script>

<style lang="sass" scoped>
#root
  min-height: 100vh
</style>
