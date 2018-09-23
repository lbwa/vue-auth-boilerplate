<template>
  <footer class="card__footer">
    <slot class="footer__title" name="title"></slot>
    <slot class="footer__detail" name="detail"></slot>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

.card__footer
  margin-top: 8px
  padding-top: 9px
  font-size: 14px
  line-height: 22px
  border-top: 1px solid #e8e8e8
</style>
