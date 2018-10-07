<template>
  <div class="menu-list__wrapper">
    <template v-if="!route.children">
      <el-menu-item
        index="/1/2/3"
      >{{route.meta.title}}</el-menu-item>
    </template>

    <el-submenu
      v-else
      :index="route.path"
    >
      <template slot="title">
        <!-- <i :class="route.meta.icon"></i> -->
        <span slot="title">{{route.meta.title}}</span>
      </template>
      <!-- recursive area -->
      <template
        v-for="child of route.children"
      >
        <recursive-list
          :key="child.path"
          v-if="route.children"
          :route="child"
        ></recursive-list>
        <el-menu-item
          v-else
          :key="child.path"
          :index="resolvePath(route.path)"
        >{{route.meta.title}}</el-menu-item>
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
    basicPath: {
      type: String,
      default: ''
    }
  },

  methods: {
    resolvePath (targetPath) {
      return path.resolve(this.basicPath, targetPath)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
