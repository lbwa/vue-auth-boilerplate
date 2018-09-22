<template>
  <el-container id="root">
    <app-aside/>
    <el-container>
      <el-header>
        header
        <el-button class="root__header__button" @click="toggleAside">extend</el-button>
        <router-link to="/">aaa</router-link>
      </el-header>
      <router-view></router-view>
      <el-footer>
        footer
        <router-link to="/dashboard/monitor">monitor</router-link>
        <router-link to="/dashboard/workspace">workspace</router-link>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { mapMutations } from 'vuex'
import AppAside from 'COMPONENTS/Aside'

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
    AppAside
  }
}
</script>

<style lang="sass" scoped>
#root
  min-height: 100vh
</style>
