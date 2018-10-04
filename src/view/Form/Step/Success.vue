<template>
  <div class="step-form__container">
    success
    <router-link to="info">info</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'success')
    }
  },

  created () {
    this.updateBreadcrumb()
  }
}
</script>

<style lang="sass" scoped>

</style>
