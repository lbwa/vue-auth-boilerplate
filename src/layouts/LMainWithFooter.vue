<template>
  <div class="l-mwf">
    <router-view />
    <footer class="l-mwf__footer">
      Copyright &copy; {{ new Date().getFullYear() }}
      <a href="http://github.com/lbwa" target="_blank" rel="noopener noreferrer"
        >Bowen</a
      >
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LMainWithFooter'
}
</script>

<style lang="sass" scoped>
.l-mwf
  &__footer
    padding: 20px 0
    font-size: 12px
    text-align: center
</style>
