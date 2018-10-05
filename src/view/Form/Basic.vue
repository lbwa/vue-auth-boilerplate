<template>
  <el-main class="basic-form">
    <form-header
      :links="links"
      :title="title"
      :description="description"
    />
    <!-- page content area -->
    <main-form></main-form>
  </el-main>
</template>

<script>
import FormHeader from 'COMPONENTS/Form/Header'
import MainForm from 'COMPONENTS/Form/Basic/MainForm'

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
      ],
      title: '基础表单',
      description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。'
    }
  },

  components: {
    FormHeader,
    MainForm
  }
}
</script>

<style lang="sass" scoped>

</style>
