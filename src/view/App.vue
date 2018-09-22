<template>
  <el-container id="root">
    <app-aside/>
    <el-container>
      <el-header>header</el-header>
      <router-view></router-view>
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from 'COMPONENTS/Aside'
export default {
  data () {
    return {}
  },

  components: {
    AppAside
  }
}
</script>

<style lang="sass" scoped>
#root
  min-height: 100vh
</style>
