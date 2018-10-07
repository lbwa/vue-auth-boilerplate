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
      :collapse-transition="false"
      :router="true"
      :default-active="defaultActive"
      active-text-color="#ffffff"
      text-color="#ffffff"
      backgroundColor="#001529"
    >
      <!-- recursive tree area -->
      <recursive-list
        :basic-route="`/1`"
        :route="{
          path: '/1',
          components: 1,
          meta: {
            title: '11111',
            icon: 'el-icon-tickets'
          },
          children: [
            {
              path: '2-1',
              components: 2,
              meta: {
                title: '22222'
              },
              children: [
                {
                  path: '3-1',
                  components: 3,
                  meta: {
                    title: '33333'
                  }
                },
                {
                  path: '4-1',
                  components: 4,
                  meta: {
                    title: '4444'
                  },
                }
              ]
            },
            {
              path: '2-2',
              components: 2,
              meta: {
                title: '22222-222'
              },
              children: [
                {
                  path: '3-2',
                  components: 3,
                  meta: {
                    title: '33333-222'
                  }
                },
                {
                  path: '4-2',
                  components: 4,
                  meta: {
                    title: '4444-2222'
                  },
                }
              ]
            }
          ]
        }"
      ></recursive-list>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AsideLogo from 'COMPONENTS/App/AsideLogo'
import RecursiveList from 'COMPONENTS/App/RecursiveList'
import path from 'path'

export default {
  methods: {
    resolvePath (basicPath, targetPath) {
      return path.resolve(basicPath, targetPath)
    }
  },

  computed: {
    defaultActive () {
      return this.$route.path
    },
    ...mapState([
      'isCollapse'
    ]),
    ...mapGetters('login', [
      'routes'
    ])
  },

  components: {
    AsideLogo,
    RecursiveList
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/background.sass'

.root__aside
  &__face
    min-height: 100vh
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
    // 源 UI 样式为内联样式，故使用 important 提升权重
    background-color: $background-hover !important
</style>
