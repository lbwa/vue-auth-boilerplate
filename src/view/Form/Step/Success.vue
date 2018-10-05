<template>
  <div class="step-form__container">
    <el-form
      class="success__form"
      label-width="20%"
      size="small"
    >
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{btnText}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btnText: '再转一笔'
    }
  },

  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'success')
    },
    onSubmit () {
      this.$router.push('info')
    }
  },

  created () {
    this.updateBreadcrumb()
  }
}
</script>

<style lang="sass" scoped>
.success
  &__form
    margin: 40px auto 0
    max-width: 500px
</style>
