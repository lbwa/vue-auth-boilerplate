<template>
  <el-header class="header" :height="height">
    <i
      class="el-icon-menu header__icon"
      @click="toggleAside"
    ></i>
    <div class="header__info header__info__align">
      <el-tooltip
        effect="dark"
        content="Source code"
        placement="bottom"
      >
        <a
          href="https://github.com/lbwa/vue-design-pro"
          class="info__icon__align info__icon__gutter"
          target="_blank"
        >
          <i class="el-icon-question"></i>
        </a>
      </el-tooltip>
      <header-notify class="info__icon__align info__icon__gutter">
        <el-badge
          class="info__dot__face"
          slot="reference"
          :value="12"
        >
          <i class="el-icon-bell"></i>
        </el-badge>
      </header-notify>
      <header-user-info
        class="info__icon__align info__icon__gutter"
      >
      </header-user-info>
    </div>
  </el-header>
</template>

<script>
import HeaderNotify from 'COMPONENTS/App/Header/Notify'
import HeaderUserInfo from 'COMPONENTS/App/Header/UserInfo'

export default {
  props: {
    height: {
      type: String,
      default: '64px'
    }
  },

  methods: {
    toggleAside () {
      this.$emit('toggleAside')
    }
  },

  components: {
    HeaderNotify,
    HeaderUserInfo
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/background.sass'
@import '~STYLE/color/hover.sass'

.header
  padding: 0 24px 0 0
  position: relative // for box-shadow
  background-color: $background-lightest
  box-shadow: 0 1px 4px rgba(0,21,41,.08)

  &__icon
    padding: 0 24px
    line-height: 64px
    cursor: pointer
    font-size: 20px
    transition: all .3s, padding 0s

  &__info
    float: right
    padding: 0 12px
    height: 100%
    vertical-align: middle

    &__align
      display: flex
      align-items: center

.info__icon

  &__align
    display: flex
    align-items: center
    height: 100%
    cursor: pointer
    text-decoration: none

    .el-icon-question
      color: rgba(0,0,0,.65)

    &:hover
      background-color: $hover-light

  &__gutter
    padding: 0 12px

.user-role__toggle
  user-select: none
</style>
