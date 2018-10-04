<template>
  <el-main class="basic-form">
    <form-header
      :links="links"
      :title="title"
      :description="description"
    />
    <router-view @updateBreadcrumb="updateBreadcrumb"></router-view>
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

  methods: {
    updateBreadcrumb (newTab) {
      console.log('handle', newTab)
      switch (newTab) {
        case 'info':
          this.updateLinks({
            name: 'info',
            path: ''
          })
          break

        case 'confirm':
          this.updateLinks({
            name: 'confirm',
            path: ''
          })
          break

        case 'success':
          this.updateLinks({
            name: 'success',
            path: ''
          })
          break
      }
    },

    updateLinks (newTab) {
      this.links.length === 3
        ? this.links.push(newTab)
        : this.links.splice(this.links.length - 1, 1, newTab)
    }
  },

  components: {
    FormHeader
  }
}
</script>

<style lang="sass" scoped>

</style>
