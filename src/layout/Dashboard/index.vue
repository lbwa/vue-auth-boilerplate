<template>
  <el-container
    :class="[
      'layout__dashboard',
      isAsideCollapse ? 'collapse-aside' : 'expand-aside'
    ]"
  >
    <!-- Dynamic aside rendering area -->
    <el-scrollbar
      wrap-class="scrollbar-wrapper"
      class="layout__dashboard__aside-placeholder"
    >
      <dashboard-aside />
    </el-scrollbar>

    <el-container class="layout__dashboard__placeholder">
      <dashboard-header />

      <el-main class="layout__dashboard__placeholder-main">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </el-main>

      <el-footer class="layout__dashboard__footer">
        <page-footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import DashboardHeader from './Header'
import DashboardAside from './Aside'
import PageFooter from 'COMPONENTS/PageFooter'
import { mapState } from 'vuex'

export default {
  name: 'LayoutDashboard',

  computed: {
    ...mapState(['isAsideCollapse'])
  },

  components: {
    DashboardHeader,
    DashboardAside,
    PageFooter
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/layout/aside.scss'
@import '~STYLE/transition/aside.scss'

.layout__dashboard
  &__aside
    &-placeholder
      position: fixed
      top: 0
      bottom: 0
      left: 0
      z-index: 1200
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35)

  &__placeholder
    display: flex
    flex-direction: column
    min-height: 100vh
    transition: margin $aside-transition-time

    &-main
      height: 100%
      flex: 1

      &:empty
        position: relative
        box-sizing: border-box

        &::before
          content: ''
          position: absolute
          width: 100%
          height: 100%
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
          background-color: $main-white

        &::after
          content: ''
          display: block
          position: absolute
          left: 50%
          top: 50%
          border: 3px solid $main-bg // rgb(217, 236, 255)
          border-top-color: $main-hover
          border-radius: 50%
          width: 1.5em
          height: 1.5em
          animation: spin 1s linear infinite

  &__footer
    line-height: 60px
    text-align: center

@keyframes spin
  from
    transform: translate(-50%, -50%) rotate(0deg)
  to
    transform: translate(-50%, -50%) rotate(720deg)

.collapse-aside
  .layout__dashboard__placeholder
    margin-left: $collapse-width

.expand-aside
  .layout__dashboard__placeholder
    margin-left: $expand-width

/deep/ .scrollbar-wrapper
  overflow-x: hidden !important // 隐藏横向滚动条
  background-color: $main-dark
</style>
