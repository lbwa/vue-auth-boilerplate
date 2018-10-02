<template>
  <el-breadcrumb v-if="links.length" :separator="separator">
    <el-breadcrumb-item
      v-for="item of links"
      :key="item.name"
      :to="createRouteTo(item.path)"
    >{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default () {
        return [
          {
            name: 'home',
            path: ''
          }
        ]
      }
    },

    separator: {
      type: String,
      default: '/'
    }
  },

  methods: {
    createRouteTo (link) {
      return link ? { path: link } : false
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
