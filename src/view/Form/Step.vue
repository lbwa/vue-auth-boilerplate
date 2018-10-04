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
          name: '分步表单',
          path: ''
        }
      ],
      title: '分步表单',
      description: '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。'
    }
  },

  components: {
    FormHeader
  }
}
</script>

<style lang="sass" scoped>

</style>
