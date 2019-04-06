<template>
  <!-- Component default behavior: route rendering when route has a title value
  and no hidden setting. -->
  <div
    class="recursive__list__item"
    v-if="route.meta && !route.meta.hidden && route.meta.title"
  >
    <!-- route rendering without child route -->
    <template v-if="!route.children">
      <el-menu-item :index="resolvePath(route.path)">
        <!-- 仅仅在根路由的情况下存在默认图标 `el-icon-news` -->
        <!-- Only root routes has a default icon. -->
        <item-title
          :icon="
            route.meta.icon || (isRootPath(route.path) ? 'el-icon-news' : '')
          "
          :title="route.meta.title"
        />
      </el-menu-item>
    </template>

    <!-- route rendering with child route: recursive area -->
    <el-submenu v-else :index="route.path">
      <template slot="title">
        <item-title
          v-if="route.meta"
          :icon="route.meta.icon"
          :title="route.meta.title"
        />
      </template>

      <!-- child route recursive rendering -->
      <template v-for="child of route.children">
        <template v-if="child.meta && !child.meta.hidden">
          <recursive-item
            v-if="child.children && child.children.length"
            :route="child"
            :key="child.path"
            :basic-route="resolvePath(child.path)"
            class="recursive__nested-list"
          />
          <el-menu-item
            v-else
            :key="child.path"
            :index="resolvePath(child.path)"
            >{{ child.meta.title }}</el-menu-item
          >
        </template>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import ItemTitle from './ItemTitle'

export default {
  name: 'recursive-item',

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
    resolvePath(targetPath) {
      return path.resolve(this.basicRoute, targetPath)
    },
    isRootPath(path) {
      return /^\//.test(path)
    }
  },

  components: {
    ItemTitle
  }
}
</script>

<style lang="scss">
/* MUST be global style setting */
.el-menu--collapse {
  & .el-submenu {
    & .el-submenu__title {
      & .el-submenu__icon-arrow,
      .menu__item__title {
        display: none;
      }
    }
  }
}
</style>
