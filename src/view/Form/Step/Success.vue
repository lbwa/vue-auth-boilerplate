<template>
  <div class="step-form__container">
    <el-form
      class="success__form"
      label-width="20%"
    >
      <el-form-item>
        <router-link-btn
          :text="btnText"
          to="info"
        ></router-link-btn>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import RouterLinkBtn from 'COMPONENTS/RouterLinkBtn'

export default {
  data () {
    return {
      btnText: '再转一笔'
    }
  },

  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'success')
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
.success
  &__form
    margin: 40px auto 0
    max-width: 500px
</style>
