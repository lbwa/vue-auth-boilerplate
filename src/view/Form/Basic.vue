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
      links: [
        {
          name: this.$t('form.basic.links.home'),
          path: '/'
        },
        {
          name: this.$t('form.basic.links.form'),
          path: ''
        },
        {
          name: this.$t('form.basic.links.basic'),
          path: ''
        }
      ],
      title: this.$t('form.basic.title'),
      description: this.$t('form.basic.description')
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
