<template>
  <el-aside
    :width="isCollapse ? '80px' : '256px'"
    :class="[
      'root__aside__face',
      isCollapse ? 'collapsed' : 'not-collapsed'
    ]"
  >
    <aside-logo></aside-logo>
    <el-menu
      class="root__aside__menu"
      :collapse="isCollapse"
      :collapse-transition="true"
      :router="true"
      :default-active="defaultActive"
      text-color="#ffffff"
      backgroundColor="#001529"
    >
      <el-submenu index="/dashboard">
        <template slot="title">
          <i class="el-icon-service"></i>
          <span slot="title">Dashboard</span>
        </template>
        <el-menu-item index="/dashboard/analysis">分析页</el-menu-item>
        <el-menu-item index="/dashboard/workspace">工作台</el-menu-item>
      </el-submenu>

      <el-submenu index="/form">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">表单页</span>
        </template>
        <el-menu-item index="/form/basic-form">基础表单</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState } from 'vuex'
import AsideLogo from './AsideLogo'

export default {
  data () {
    return {}
  },

  computed: {
    defaultActive () {
      return this.$route.path
    },
    ...mapState([
      'isCollapse'
    ])
  },

  components: {
    AsideLogo
  }
}
</script>

<style lang="sass" scoped>
$background-dark: #001529
$background-hover: #1890ff

.root__aside
  &__face
    background-color: $background-dark
    transition: width .3s

  &__menu
    background-color: $background-dark
    border-right: 0

/deep/ .el-submenu__title
  &:hover, &:focus
    background-color: $background-dark

/deep/ .el-menu-item
  background-color: $background-dark

  &:focus, &:hover
    background-color: $background-dark

  &.is-active
    color: #ffffff
    // 源 UI 样式为内联样式，故使用 important 提升权重
    background-color: $background-hover !important
</style>
