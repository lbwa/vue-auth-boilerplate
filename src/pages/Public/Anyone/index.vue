<template functional>
  <div class="anyone">
    <h3>{{ parent.$t('pages.withoutVerification') }}</h3>
    <p>
      {{ parent.$t('pages.currentRoute') }}
      <strong>{{ parent.$route.path }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PublicAnyone'
}
</script>

<style lang="sass" scoped>
.anyone
  +flex-center
  height: 100%
</style>
