<template>
  <el-container id="root">
    <app-aside/>
    <el-container>
      <app-header @toggleAside="toggleAside"></app-header>
      <router-view></router-view>
      <el-footer>
        footer
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { mapMutations } from 'vuex'
import AppAside from 'COMPONENTS/AppAside'
import AppHeader from 'COMPONENTS/AppHeader'

export default {
  data () {
    return {}
  },

  methods: {
    ...mapMutations({
      toggleAside: 'TOGGLE_ASIDE'
    })
  },

  components: {
    AppAside,
    AppHeader
  }
}
</script>

<style lang="sass" scoped>
#root
  min-height: 100vh
</style>
