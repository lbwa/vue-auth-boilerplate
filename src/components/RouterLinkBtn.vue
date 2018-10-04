<template>
  <router-link
    tag="button"
    class="router__link__button"
    :to="to"
  >{{text}}</router-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/background.sass'
@import '~STYLE/color/font.sass'

.router__link__button
    padding: 12px 20px
    margin: 0
    border-radius: 4px
    border: 0
    background-color: $background-button-pr
    white-space: nowrap
    font-size: 14px
    color: $font-lightest
    outline: 0
    cursor: pointer
    transition: all .1s

    &:hover, &:focus
      background-color: $background-button-pr-hover
</style>
