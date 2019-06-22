<template functional>
  <section class="unauthorized">
    <h2>401</h2>
    <p>{{ parent.$t('unauthorized.title') }}</p>
    <p>{{ parent.$t('unauthorized.desc') }}</p>
  </section>
</template>

<script>
export default {
  name: 'Unauthorized'
}
</script>

<style lang="sass" scoped>
.unauthorized
  +flex-center
  height: 100%
</style>
