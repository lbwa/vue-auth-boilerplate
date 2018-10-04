<template>
  <div class="page__header">
    <el-row class="page__breadcrumb__layout" v-if="links.length">
      <breadcrumb :links="links"></breadcrumb>
    </el-row>
    <slot></slot>
  </div>
</template>

<script>
import Breadcrumb from 'COMPONENTS/Breadcrumb'
export default {
  props: {
    links: {
      type: Array,
      default () {
        return []
      }
    }
  },

  components: {
    Breadcrumb
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/background.sass'

.page
  &__header
    margin: -24px -24px 0
    padding: 16px 32px 0
    background-color: $background-lightest

  &__breadcrumb
    &__layout
      margin-bottom: 16px
</style>
