<template>
  <div class="step-form__container">
    <el-form
      class="confirm__form"
      ref="form"
      :model="form"
      label-width="20%"
    >
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{btnText}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      btnText: '提交'
    }
  },

  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'confirm')
    },
    onSubmit () {
      this.$router.push('success')
    }
  },

  computed: {
    ...mapState('formStep', [
      'form'
    ])
  },

  created () {
    this.updateBreadcrumb()
  }
}
</script>

<style lang="sass" scoped>
.confirm
  &__form
    margin: 40px auto 0
    max-width: 500px
</style>
