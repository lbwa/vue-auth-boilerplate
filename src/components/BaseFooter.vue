<template>
  <v-footer
    class="b-footer flex-column justify-center text-capitalize"
    v-bind="$attrs"
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
