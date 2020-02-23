<template>
  <div class="user">
    <h1 class="user__title">User center</h1>
    <button @click="onSignOut">sign out</button>
  </div>
</template>

<script>
import { reset } from 'v-access'

export default {
  name: 'User',

  methods: {
    onSignOut() {
      reset(this.$router)
    }
  }
}
</script>

<style lang="sass" scoped>
.user
  &__title
    text-align: center
</style>
