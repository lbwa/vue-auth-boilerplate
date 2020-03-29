<template>
  <div class="user">
    <h1 class="user__title">User center</h1>

    <p>The following trees describe how our routes consist of.</p>

    <v-treeview
      selectable
      hoverable
      rounded
      open-on-click
      transition
      return-object
      v-model="selectedNodes"
      :items="routeTree"
      item-key="name"
      item-text="name"
      class="user__abilities"
    />
  </div>
</template>

<script>
function createRouteTree(routes) {
  return routes.reduce((trees, route) => {
    const tree = {
      name: route.meta.title,
      abilities: [].concat(
        route.meta.ability || route.meta.strict || route.meta.weak
      )
    }
    if (route.children && route.children.length) {
      tree.children = createRouteTree(route.children)
    }

    trees.push(tree)
    return trees
  }, [])
}

export default {
  name: 'User',

  data() {
    return {
      visibleRoutes: [],
      selectedNodes: []
    }
  },

  computed: {
    routeTree() {
      return createRouteTree(this.$store.state.user.routes)
    },
    selectedAbilities() {
      return this.selectedNodes.reduce((abilities, node) => {
        ;(node.abilities || []).forEach(ability => abilities.add(ability))
        return abilities
      }, new Set()) // prevent duplicate abilities
    }
  }
}
</script>

<style lang="sass" scoped>
.user
  height: 100%
  width: 100%

  &__title
    text-align: center

  &__abilities
    width: 100%

  &__controller
    text-align: center
</style>
