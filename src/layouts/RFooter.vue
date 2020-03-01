<template>
  <v-app class="l-footer">
    <router-view />
    <base-footer />
  </v-app>
</template>

<script>
import BaseFooter from '../components/BaseFooter'

export default {
  name: 'RViewFooter',

  components: {
    BaseFooter
  }
}
</script>

<style lang="sass" scoped></style>
