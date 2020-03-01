<template>
  <v-footer class="b-footer justify-center text-capitalize" v-bind="$attrs">
    <a
      href="https://github.com/lbwa/adminize"
      target="_blank"
      rel="noopener noreferrer"
      class="b-footer__link"
      >Documentation</a
    >
    <span class="px-1"
      >- Copyright &copy; 2019 - {{ new Date().getFullYear() }}</span
    >
    <a
      href="https://set.sh"
      target="_blank"
      rel="noopener noreferrer"
      class="b-footer__link"
      >Bowen Liu</a
    >
    <span class="px-1">-</span>
    <a
      href="https://github.com/lbwa/adminize/blob/master/CHANGELOG.md"
      target="_blank"
      rel="noopener noreferrer"
      class="b-footer__link"
      >Changelog</a
    >
  </v-footer>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style lang="sass" scoped>
.b-footer
  font-size: 12px

  &__link
    text-decoration: none

    &:hover
      text-decoration: underline
</style>
