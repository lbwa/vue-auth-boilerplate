<template>
  <div id="app">
    <transition name="layout" mode="out-in">
      <component :is="currentLayout">
        <router-view/>
      </component>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layout: ''
    }
  },

  methods: {
    onRouteUpdate (to, from) {
      this.setCurrentLayout(to.meta.layout)
    },
    setCurrentLayout (layout = 'material') {
      this.layout = layout
    }
  },

  watch: {
    '$route': 'onRouteUpdate'
  },

  computed: {
    currentLayout () {
      // ! 必须将 formatLayoutKey 从字符串模板中抽离出来，否则 this.layout 变化时,
      // 将不会触发 computed 的计算
      const formatLayoutKey = this.layout
        .replace(/^[a-z]/, key => key.toUpperCase())

      return () => import(
        /* webpackChunkName: 'layout-[request]' */
        `LAYOUT/${formatLayoutKey}`
      )
    }
  },

  created () {
    this.setCurrentLayout(this.$route.meta.layout)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.layout {
  &-enter, &-leave-to {
    opacity: 0;
  }
  &-enter-active, &-leave-active {
    transition: opacity .3s;
  }
}

</style>
