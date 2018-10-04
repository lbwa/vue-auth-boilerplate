<template>
  <el-main class="basic-form">
    <form-header
      :links="links"
      :title="title"
      :description="description"
    />
    <!-- page content area -->
  </el-main>
</template>

<script>
import FormHeader from 'COMPONENTS/Form/Header'
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
          name: '高级表单',
          path: ''
        }
      ],
      title: '高级表单',
      description: '高级表单常见于一次性输入和提交大批量数据的场景。'
    }
  },

  components: {
    FormHeader
  }
}
</script>

<style lang="sass" scoped>

</style>
