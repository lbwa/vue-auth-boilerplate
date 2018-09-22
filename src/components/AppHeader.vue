<template>
  <el-header class="header">
    <i
      class="el-icon-menu header__icon"
      @click="toggleAside"
    ></i>
    <div class="header__info header__info__align">
      <div class="info__icon__align info__icon__gutter">
        <i class="el-icon-question"></i>
      </div>
      <div class="info__icon__align info__icon__gutter">
        <el-badge
          class="info__dot__face"
          :value="12"
        >
          <i class="el-icon-bell"></i>
        </el-badge>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  methods: {
    toggleAside () {
      this.$emit('toggleAside')
    }
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

    &:hover
      background-color: #e6f7ff

  &__gutter
    padding: 0 12px
</style>
