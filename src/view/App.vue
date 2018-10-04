<template>
  <div id="root">
    <transition name="layout" mode="out-in">
      <keep-alive>
        <component :is="currentLayout">
          <!-- 在动态组件中必须使用 route-view 以保证路由出口 -->
          <route-view></route-view>
        </component>
      </keep-alive>
    </transition>
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
      // 重复设定相同值将不会触发 computed 求值，即不会触发动态组件切换，避免不必要 repaint
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
.layout
  &-enter, &-leave-to
    opacity: 0

  &-enter-active, &-leave-active
    transition: opacity .5s
</style>
