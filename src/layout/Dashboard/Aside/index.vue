<template>
  <el-aside
    :class="[
      'layout__dashboard__aside',
      isAsideCollapse ? 'collapse' : 'expand'
    ]"
    :width="``"
  >
    <header class="aside__header">
      <img
        class="aside__header__logo"
        src="./logo.png"
        width="20"
        height="20"
        alt="App logo"
      />
      <h1 class="aside__title">{{ $t('aside.header') }}</h1>
    </header>
    <el-menu
      class="aside__menu"
      :collapse="isAsideCollapse"
      :router="true"
      :collapse-transition="true"
      :unique-opened="true"
      :default-active="$route.path"
      :active-text-color="activeTextColor"
      :text-color="textColor"
      :backgroundColor="menuBackgroundColor"
    >
      <!-- recursive tree area -->
      <recursive-item
        v-for="route of routes"
        :key="route.path"
        :route="route"
        :basic-route="route.path"
      ></recursive-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import RecursiveItem from './Item'

export default {
  data() {
    return {
      activeTextColor: '#ffffff',
      textColor: '#ffffff',
      menuBackgroundColor: '#282c34' // aside text area background
    }
  },

  computed: {
    ...mapState(['isAsideCollapse']),
    ...mapGetters('login', {
      routes: 'allRoutes'
    })
  },

  components: {
    RecursiveItem
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/layout/aside.scss'

.layout__dashboard__aside
  min-height: 100vh
  transition: width 0.3s
  color: white
  overflow-x: hidden !important // 隐藏横向滚动条

  &.expand
    width: $expand-width

  &.collapse
    width: $collapse-width

  .aside
    &__header
      padding-left: 24px
      overflow: hidden
      line-height: 64px
      height: 64px

      &__logo
        margin-right: 12px
        vertical-align: middle

    &__title
      display: inline-block
      margin: 0
      vertical-align: middle
      text-transform: capitalize
      font-size: 20px
      font-weight: 600
      line-height: 60px

    &__menu
      border: 0

/deep/ .el-menu--collapse
  width: auto

/deep/ .el-menu-item,
/deep/ .el-submenu__title
  i
    color: $font-white !important

/deep/ .el-menu-item
  // background of current activate route
  &.is-active,
  &.is-active i
    color: $font-selected !important
</style>
