<template functional>
  <div class="home">
    <h3>{{ parent.$t('pages.withoutVerification') }}</h3>
    <p>
      {{ parent.$t('pages.currentRoute') }}
      <strong>{{ parent.$route.path }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="sass" scoped>
.home
  +flex-center
  height: 100%
</style>
