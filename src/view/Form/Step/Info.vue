<template>
  <div class="step-form__container">
    info
    <router-link to="confirm">confirm</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'info')
    }
  },

  created () {
    this.updateBreadcrumb()
  }
}
</script>

<style lang="sass" scoped>

</style>
