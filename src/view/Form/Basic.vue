<template>
  <el-main class="basic-form">
    <page-header :links="links">
      <div class="basic-form__header__content">{{info}}</div>
    </page-header>
    <!-- page content area -->
  </el-main>
</template>

<script>
import PageHeader from 'COMPONENTS/PageHeader'
export default {
  data () {
    return {
      info: 'basic info',
      links: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '表单页',
          path: ''
        },
        {
          name: '基础表单',
          path: ''
        }
      ]
    }
  },

  components: {
    PageHeader
  }
}
</script>

<style lang="sass" scoped>

</style>
