<template>
  <footer class="card__footer">
    <slot name="title"></slot>
    <slot name="detail"></slot>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/border.sass'

.card__footer
  margin-top: 8px
  padding-top: 9px
  font-size: 14px
  line-height: 22px
  border-top: 1px solid $border-light
</style>
