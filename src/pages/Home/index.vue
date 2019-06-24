<template>
  <div class="home" v-if="isCompleted">
    <h3>{{ $t('pages.withoutVerification') }}</h3>
    <p>
      {{ $t('pages.currentRoute') }}
      <strong>{{ $route.path }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
      isCompleted: false
    }
  },

  created() {
    // simulate data fetching
    this.$__timer__ = setTimeout(() => {
      this.isCompleted = true
    }, 1000)
  },

  beforeDestroy() {
    clearTimeout(this.$__timer__)
  }
}
</script>

<style lang="sass" scoped>
.home
  +flex-center
  height: 100%
</style>
