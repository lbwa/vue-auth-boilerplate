<template>
  <!-- https://vuetifyjs.com/en/components/navigation-drawers/ -->
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    app
    clipped
  >
    <!-- https://vuetifyjs.com/en/components/lists/ -->
    <v-list dense rounded expand nav>
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

function createNavRoutes(routes) {
  return routes.reduce((list, current) => {
    const shallow = Object.assign({}, current)

    if (shallow.meta && !shallow.meta.hidden && shallow.meta.title) {
      if (shallow.children) {
        shallow.children = createNavRoutes(shallow.children)
      }

      if (!shallow.children || shallow.children.length) {
        list.push(shallow)
      }
    }
    return list
  }, [])
}

export default {
  name: 'RAdminizeNav',

  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      // TODO: include dynamic routes
      routes: Object.freeze(createNavRoutes(this.$router.options.routes))
    }
  },

  components: {
    NavDrawerItem
  }
}
</script>

<style lang="sass" scoped></style>
