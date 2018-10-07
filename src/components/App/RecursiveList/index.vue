<template>
  <div class="menu-list__wrapper">
    <template v-if="!route.children">
      <el-menu-item
        :index="resolvePath(route.path)"
      >{{route.meta.title}}</el-menu-item>
    </template>

    <el-submenu
      v-else
      :index="route.path"
    >
      <template slot="title">
        <i v-if="route.meta.icon" :class="route.meta.icon"></i>
        <span slot="title">{{route.meta.title}}</span>
      </template>
      <!-- recursive area -->
      <template
        v-for="child of route.children"
      >
        <recursive-list
          :key="child.path"
          v-if="child.children"
          :route="child"
          :basic-route="resolvePath(child.path)"
        ></recursive-list>
        <el-menu-item
          v-else
          :key="child.path"
          :index="resolvePath(child.path)"
        >{{child.meta.title}}</el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'recursive-list',

  props: {
    route: {
      type: Object,
      required: true
    },
    basicRoute: {
      type: String,
      default: ''
    }
  },

  methods: {
    resolvePath (targetPath) {
      return path.resolve(this.basicRoute, targetPath)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
