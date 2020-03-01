<template>
  <v-app>
    <v-navigation-drawer v-model="isOpenDrawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="isOpenDrawer = !isOpenDrawer" />
      <v-toolbar-title>Adminize</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <!-- router view export -->
        <router-view />
      </v-container>
    </v-content>

    <base-footer app />
  </v-app>
</template>

<script>
import BaseFooter from '../components/BaseFooter'

export default {
  name: 'RAdminize',

  data() {
    return {
      isOpenDrawer: true
    }
  },

  components: {
    BaseFooter
  },

  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style lang="sass" scoped></style>
