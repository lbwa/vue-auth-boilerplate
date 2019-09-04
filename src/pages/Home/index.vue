<template>
  <adminize-card v-if="isCompleted">
    <h4>{{ $t('pages.withoutVerification') }}</h4>
    <p>
      {{ $t('pages.currentRoute') }}
      <strong>{{ $route.path }}</strong>
    </p>
  </adminize-card>
</template>

<script>
import AdminizeCard from 'LAYOUT/Card'

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
  },

  components: {
    AdminizeCard
  }
}
</script>

<style lang="sass" scoped>
/deep/ .adminize-card
  text-align: center
</style>
