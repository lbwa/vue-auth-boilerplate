<template>
  <v-app>
    <r-adminize-nav v-model="isOpenDrawer" />

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="isOpenDrawer = !isOpenDrawer" />
      <v-toolbar-title>Adminize console</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
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
