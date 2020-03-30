<template>
  <v-app>
    <!-- header -->
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

    <!-- sidebar -->
    <r-admin-nav v-model="isOpenDrawer" />

    <v-content>
      <!-- tab -->
      <v-tabs v-model="activeTab">
        <v-tab
          v-for="tab in routeTabs"
          :key="tab.fullPath"
          :to="tab.fullPath"
          class="r-admin__tab"
          >{{ tab.label }}</v-tab
        >
      </v-tabs>

      <!-- body -->
      <v-container fluid class="fill-height justify-center">
        <!-- router view export -->
        <router-view />
      </v-container>
    </v-content>

    <!-- footer -->
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
      isOpenDrawer: true,
      activeTab: ''
    }
  },

  computed: {
    routeTabs() {
      const tabs = []
      let current = this.$store.state.history.recordHead
      while (current) {
        if (current.name && current.fullPath) {
          tabs.push({
            label: current.name,
            fullPath: current.fullPath
          })
        }
        current = current.next
      }
      return tabs
    }
  },

  components: {
    BaseFooter,
    RAdminNav
  }
}
</script>

<style lang="sass" scoped>
.r-admin
  &__tab
    text-transform: capitalize
</style>
