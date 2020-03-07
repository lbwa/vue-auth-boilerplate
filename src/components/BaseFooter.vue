<template>
  <v-footer
    class="b-footer flex-column justify-center text-capitalize"
    v-bind="$attrs"
  >
    <span
      >Copyright &copy; 2019 - {{ new Date().getFullYear() }}&nbsp;<a
        href="https://set.sh"
        target="_blank"
        rel="noopener noreferrer"
        class="b-footer__link"
        >Bowen Liu</a
      ></span
    >

    <span>
      <a
        href="https://github.com/lbwa/vue-auth-boilerplate"
        target="_blank"
        rel="noopener noreferrer"
        class="b-footer__link"
        >Documentation</a
      >
      -
      <a
        href="https://github.com/lbwa/vue-auth-boilerplate/blob/master/CHANGELOG.md"
        target="_blank"
        rel="noopener noreferrer"
        class="b-footer__link"
        >Changelog</a
      ></span
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
