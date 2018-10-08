<template>
  <div class="menu-list__wrapper" v-if="!route.meta.hidden && route.children">
    <template v-if="!route.children">
      <el-menu-item
        :index="resolvePath(route.path)"
      >{{route.meta.title}}</el-menu-item>
    </template>

    <!-- 此处用于类似于 `分步表单` 的情景，将子路由隐藏，并将默认路由替换为第一个子路
    由 -->
    <!-- This template is used to situation like `step form` item, will hidden
    all children routes and set first child routes to default route -->
    <template v-if="route.meta.hideChildren">
      <el-menu-item
        :index="resolvePath(route.children[route.meta.setIndex || 0].path)"
      >{{route.meta.title}}</el-menu-item>
    </template>

    <!-- recursive area -->
    <el-submenu
      v-else
      :index="route.path"
    >
      <template slot="title">
        <i v-if="route.meta && route.meta.icon" :class="route.meta.icon"></i>
        <span slot="title">{{route.meta.title}}</span>
      </template>
      <!-- recursive core area: to all route children -->
      <template
        v-for="child of route.children"
        v-if="!route.meta.hideChildren"
      >
        <recursive-list
          :key="child.path"
          v-if="child.children && !route.meta.hideChildren"
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
