<template>
  <div class="step-form__container">
    <el-form>22</el-form>
    <router-link-btn
      :text="btnText"
      to="success"
    ></router-link-btn>
  </div>
</template>

<script>
import RouterLinkBtn from 'COMPONENTS/RouterLinkBtn'

export default {
  data () {
    return {
      btnText: '提交'
    }
  },

  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'confirm')
    }
  },

  created () {
    this.updateBreadcrumb()
  },

  components: {
    RouterLinkBtn
  }
}
</script>

<style lang="sass" scoped>

</style>
