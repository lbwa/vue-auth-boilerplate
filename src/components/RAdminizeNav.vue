<template>
  <!-- https://vuetifyjs.com/en/components/navigation-drawers/ -->
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    app
    clipped
  >
    <!-- https://vuetifyjs.com/en/components/lists/ -->
    <v-list dense>
      <nav-drawer-item
        v-for="route of routes"
        :key="route.name"
        :route="route"
        :base-path="route.path"
        :prepend-icon="(route.meta || {}).icon || 'fiber_manual_record'"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import NavDrawerItem from './RAdminizeNavDrawer'

export default {
  name: 'RAdminizeNav',

  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    routes() {
      return this.$router.options.routes.filter(
        route => !(route.meta || {}).hidden
      )
    }
  },

  components: {
    NavDrawerItem
  }
}
</script>

<style lang="sass" scoped></style>
