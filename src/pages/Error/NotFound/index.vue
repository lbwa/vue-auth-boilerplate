<template functional>
  <section class="not-found">
    <h2>404</h2>
    <p>{{ parent.$t('notFound') }}</p>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="sass" scoped>
.not-found
  +flex-center
  height: 100%
</style>
