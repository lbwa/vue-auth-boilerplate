<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="isOpenDrawer = !isOpenDrawer" />
      <v-toolbar-title>Vue auth boilerplate console</v-toolbar-title>
      <v-spacer />
      <v-btn
        small
        color="primary"
        @click="$store.dispatch('user/logout', $router)"
        >Sign out</v-btn
      >
    </v-app-bar>

    <r-admin-nav v-model="isOpenDrawer" />

    <v-content>
      <v-container fluid class="fill-height justify-center">
        <!-- router view export -->
        <router-view />
      </v-container>
    </v-content>

    <base-footer app />
  </v-app>
</template>

<script>
import BaseFooter from '../components/BaseFooter'
import RAdminNav from '../components/RAdminNav'

export default {
  name: 'RAdmin',

  data() {
    return {
      isOpenDrawer: true
    }
  },

  components: {
    BaseFooter,
    RAdminNav
  }
}
</script>

<style lang="sass" scoped></style>
