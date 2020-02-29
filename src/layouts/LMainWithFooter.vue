<template>
  <div class="l-mwf">
    <template v-if="sticky">
      <main :class="{ 'l-mwf__main': true, sticky }">
        <router-view />
      </main>
    </template>

    <router-view v-else />

    <footer class="l-mwf__footer">
      Copyright &copy; {{ new Date().getFullYear() }}
      <a
        href="http://github.com/lbwa"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
        >Bowen</a
      >
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LMainWithFooter',

  props: {
    sticky: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="sass" scoped>
.l-mwf
  &__main
    &.sticky
      height: calc(100vh - 60px)

  &__footer
    height: 60px
    line-height: 60px
    font-size: 12px
    text-align: center
</style>
