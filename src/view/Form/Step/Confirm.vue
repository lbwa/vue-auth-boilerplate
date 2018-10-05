<template>
  <div class="step-form__container">
    <el-form
      class="confirm__form"
      ref="form"
      :model="form"
      label-width="20%"
    >
      <el-form-item>
        <router-link-btn
          :text="btnText"
          to="success"
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
.confirm
  &__form
    margin: 40px auto 0
    max-width: 500px
</style>
