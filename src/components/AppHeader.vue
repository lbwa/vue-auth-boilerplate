<template>
  <el-header class="header">
    <i
      class="el-icon-menu header__icon"
      @click="toggleAside"
    ></i>
    <div class="header__info header__info__align">
      <a
        href="https://github.com/lbwa/vue-design-pro"
        class="info__icon__align info__icon__gutter"
        target="_blank"
      >
        <i class="el-icon-question"></i>
      </a>
      <div class="info__icon__align info__icon__gutter">
        <header-popover>
          <el-badge
            class="info__dot__face"
            slot="reference"
            :value="12"
          >
            <i class="el-icon-bell"></i>
          </el-badge>
        </header-popover>
      </div>
    </div>
  </el-header>
</template>

<script>
import HeaderPopover from 'COMPONENTS/HeaderPopover'
export default {
  methods: {
    toggleAside () {
      this.$emit('toggleAside')
    }
  },

  components: {
    HeaderPopover
  }
}
</script>

<style lang="sass" scoped>

.header
  padding: 0 24px 0 0
  overflow: hidden

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
      background-color: #e6f7ff

  &__gutter
    padding: 0 12px
</style>
