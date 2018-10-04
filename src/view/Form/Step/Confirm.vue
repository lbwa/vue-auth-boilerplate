<template>
  <div class="step-form__container">
    confirm
    <router-link to="success">success</router-link>
  </div>
</template>

<script>

export default {
  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'confirm')
    }
  },

  created () {
    this.updateBreadcrumb()
  }
}
</script>

<style lang="sass" scoped>

</style>
