<template>
  <div class="user">
    <h1 class="user__title">User center</h1>
    <v-btn
      small
      color="primary"
      @click="$store.dispatch('user/logout', $router)"
      >Sign out</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style lang="sass" scoped>
.user
  text-align: center

  &__title
    text-align: center
</style>
