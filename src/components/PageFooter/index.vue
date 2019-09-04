<template>
  <p class="footer__info">
    <adminize-link
      href="https://github.com/lbwa/adminize/blob/master/CHANGELOG.md"
      >Changelog</adminize-link
    >
    &nbsp;-&nbsp; Copyright &copy; {{ new Date().getFullYear() | formatYear }}
    <adminize-link href="https://github.com/lbwa" target="_blank"
      >Bowen</adminize-link
    >
    &nbsp;-&nbsp;
    <adminize-link
      href="https://github.com/lbwa/adminize#adminize"
      >Documentation</adminize-link
    >
  </p>
</template>

<script>
import AdminizeLink from 'COMPONENTS/Link'

export default {
  components: {
    AdminizeLink
  },

  filters: {
    formatYear(now) {
      return now !== '2019' ? now : `2019 - ${now}`
    }
  }
}
</script>

<style lang="sass" scoped>
$gap: 60px

.footer
  &__info
    margin: 0
    text-align: center
    line-height: $gap
    font-size: $fz-sub
    color: $font-light

    svg
      margin: 0 5px
      width: 18px
      height: 18px
      color: $main-dark
      vertical-align: sub

    /deep/ .link
      +normalize-link(12px, 500, $font-light, $font-link, none, underline)
</style>
