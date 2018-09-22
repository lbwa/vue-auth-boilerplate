<template>
  <el-aside
    :width="isCollapse ? '80px' : '256px'"
    :class="[
      'root__aside__face',
      isCollapse ? 'collapsed' : 'not-collapsed'
    ]"
  >
    <el-menu
      :collapse="isCollapse"
      :router="true"
      class="root__aside__menu"
      default-active="analysis"
      background-color="#001529"
      text-color="#ffffff"
    >
      <el-submenu index="/dashboard">
        <template slot="title">
          <i class="el-icon-service"></i>
          <span slot="title">Dashboard</span>
        </template>
        <el-menu-item index="analysis">分析页</el-menu-item>
        <el-menu-item index="monitor">监控页</el-menu-item>
        <el-menu-item index="workspace">工作台</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">表单页</span>
        </template>
        <el-menu-item index="2-1">基础表单</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },

  computed: {
    ...mapState([
      'isCollapse'
    ])
  }
}
</script>

<style lang="sass" scoped>
.root__aside
  &__face
    background-color: #001529
    transition: width .3s

  &__menu
    border-right: 0
</style>
