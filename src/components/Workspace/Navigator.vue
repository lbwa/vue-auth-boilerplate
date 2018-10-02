<template>
  <el-card class="workspace__navigator">
    <header class="workspace__navigator__header" slot="header">
      <breadcrumb :links="tags"></breadcrumb>
    </header>
    <div class="workspace__navigator__main">
      <router-link
        class="workspace__navigator__item"
        v-for="item of navigators" :key="item.name"
        :to="item.link"
      >{{item.name}}</router-link>
      <el-button
        v-if="navigators.length < 8"
        class="workspace__navigator__button"
        plain
        icon="el-icon-circle-plus-outline"
        size="mini"
      >{{buttonText}}</el-button>
    </div>
  </el-card>
</template>

<script>
import Breadcrumb from 'COMPONENTS/Breadcrumb'
export default {
  props: {
    tags: {
      type: Array,
      default () {
        return [
          {
            name: 'navigator',
            link: '/dashboard/analysis'
          }
        ]
      }
    },
    navigators: {
      type: Array,
      default () {
        return [
          {
            name: '操作一',
            link: '/dashboard/analysis'
          }
        ]
      }
    },
    buttonText: {
      type: String,
      default: '添加'
    }
  },

  components: {
    Breadcrumb
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/link.sass'
@import '~STYLE/color/border.sass'
@import '~STYLE/mixin.sass'

.workspace
  &__navigator
    &__main
      font-size: 0

    &__item
      +normalize-link(14px, 500, rgba(0,0,0,.65))
      display: inline-block
      margin-bottom: 13px
      width: 25%

    &__button
      padding: 2px 7px !important // reset UI style
      height: 24px
      color: $link-theme !important // reset UI style
      border-color: $border-light-blue !important // reset UI style
</style>
