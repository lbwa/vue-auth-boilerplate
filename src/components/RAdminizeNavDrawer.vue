<template>
  <nav-root-item
    v-if="!route.children || !route.children.length"
    :icon="(route.meta || {}).icon || defaultNavIcon"
    :title="(route.meta || {}).title"
    :to="resolvePath(route.path)"
  />

  <v-list-group v-bind="$attrs" v-else>
    <template v-slot:activator>
      <v-list-item-title>{{ (route.meta || {}).title }}</v-list-item-title>
    </template>

    <template v-for="child of route.children">
      <r-adminize-nav-drawer
        v-if="child.children && child.children.length"
        :key="child.path"
        :prepend-icon="(child.meta || {}).icon || defaultNavIcon"
        sub-group
        no-action
        :route="child"
        :base-path="resolvePath(child.path)"
      />
      <nav-root-item
        v-else
        :key="child.path"
        :icon="(child.meta || {}).icon"
        :title="(child.meta || {}).title"
        :to="resolvePath(child.path)"
      />
    </template>
  </v-list-group>
</template>

<script>
import path from 'path'
import NavRootItem from './RAdminizeNavRoot'
import { DEFAULT_NAV_ICON } from '../constants'

export default {
  name: 'RAdminizeNavDrawer',

  props: {
    route: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      defaultNavIcon: DEFAULT_NAV_ICON
    }
  },

  methods: {
    isAbsolutePath(path) {
      return /^\//.test(path)
    },
    resolvePath(snippet) {
      return path.resolve(this.basePath, snippet)
    }
  },

  components: {
    NavRootItem
  }
}
</script>
