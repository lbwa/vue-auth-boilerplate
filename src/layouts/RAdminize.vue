<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="isOpenDrawer = !isOpenDrawer" />
      <v-toolbar-title>Adminize console</v-toolbar-title>
    </v-app-bar>

    <r-adminize-nav v-model="isOpenDrawer" />

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
import RAdminizeNav from '../components/RAdminizeNav'

export default {
  name: 'RAdminize',

  data() {
    return {
      isOpenDrawer: true
    }
  },

  components: {
    BaseFooter,
    RAdminizeNav
  },

  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style lang="sass" scoped></style>
