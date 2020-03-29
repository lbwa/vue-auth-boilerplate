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
export default {
  name: 'User',

  data() {
    return {
      routeTree: [],
      routeTreeNodesMap: new Map(), // only used to fill nodes when mounted
      selectedNodes: []
    }
  },

  computed: {
    /**
     * This computed value is based on all `this.selectedNodes` elements
     * @return {Set<string>}
     */
    selectedAbilities() {
      return this.selectedNodes.reduce((abilities, node) => {
        ;(node.abilities || []).forEach(ability => abilities.add(ability))
        return abilities
      }, new Set()) // prevent duplicate abilities
    }
  },

  watch: {
    '$store.state.user.routes': {
      handler(routes) {
        const createRouteTree = routes => {
          return routes.reduce((tree, route) => {
            const node = {
              // tree node label
              name: route.meta.title,
              // tree node value
              abilities: [].concat(
                route.meta.ability || route.meta.strict || route.meta.weak
              )
            }
            if (route.children && route.children.length) {
              node.children = createRouteTree(route.children)
            } else {
              // optional `fill nodes` step
              this.routeTreeNodesMap.set(node.name, node)
            }

            tree.push(node)
            return tree
          }, [])
        }

        this.routeTree = createRouteTree(routes)
      },
      immediate: true
    }
  },

  mounted() {
    /**
     * Optional `fill nodes` step
     * You can put a specific nodes map to fill `route-nodes` tree.
     */
    this.routeTreeNodesMap.forEach(node => {
      this.selectedNodes.push(node)
    })
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
