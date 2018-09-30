<template>
  <div id="root">
    <keep-alive>
      <component :is="currentLayout"></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultLayout: 'admin'
    }
  },

  computed: {
    currentLayout () {
      const layout = this.$route.meta.layout || this.defaultLayout
      const formatLayoutKey = layout.replace(/^[a-z]/, key => {
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
