<template>
  <div class="logo" :style="`color: ${textColor}`">
    <img
      src="~STATIC/logo.png"
      alt="logo"
      class="logo__img__size"
      :width="`${sideLength}px`"
      :height="`${sideLength}`"
    >
    <h1 class="logo__title__face">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Vue design pro'
    },
    sideLength: {
      type: Number,
      default: 32
    },
    textColor: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/background.sass'

.logo
  padding-left: 24px
  background-color: $background-blue-dark
  height: 64px
  line-height: 64px
  overflow: hidden
  transition: all .3s

  &__img__size
    vertical-align: middle

  &__title__face
    display: inline-block
    margin: 0 0 0 12px
    vertical-align: middle
    text-transform: capitalize
    font-size: 20px
    font-weight: 600
</style>
