<template>
  <div class="step-form__container">
    <div class="success__form__header">
      <i class="el-icon-success success__form__icon"></i>
      <h2 class="success__form__title">{{text.success}}</h2>
      <p class="success__form__description">{{text.description}}</p>
    </div>
    <el-form
      class="success__form"
      label-width="30%"
      size="small"
    >
      <el-form-item
        :label="text.payAccount"
      >{{form.payAccount}}</el-form-item>
      <el-form-item
        :label="text.receiverAccount"
      >{{form.receiverAccount}}</el-form-item>
      <el-form-item
        :label="text.receiverName"
      >{{form.receiverName}}</el-form-item>
      <el-form-item
        :label="text.amount"
      >{{form.amount}}</el-form-item>
    </el-form>
    <div class="success__form__button">
      <el-button
        type="primary"
        @click="onSubmit"
        size="small"
      >{{text.morePayment}}</el-button>
      <el-button
        type="plain"
        @click="onCheckBill"
        size="small"
      >{{text.checkBill}}</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      text: {
        success: this.$t('form.step.success.success'),
        description: this.$t('form.step.success.description'),
        payAccount: this.$t('form.step.success.payAccount'),
        receiverAccount: this.$t('form.step.success.receiverAccount'),
        receiverName: this.$t('form.step.success.receiverName'),
        amount: this.$t('form.step.success.amount'),
        morePayment: this.$t('form.step.success.morePayment'),
        checkBill: this.$t('form.step.success.checkBill')
      }
    }
  },

  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'success')
    },
    onSubmit () {
      this.$router.push('info')
    },
    onCheckBill () {
      this.$notify.success({
        title: '确认信息',
        message: `${this.text.checkBill} 页面实现中`
      })
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
@import '~STYLE/color/background.sass'

.success
  &__form
    margin: 40px auto 0
    padding: 24px 40px 10px
    max-width: 500px
    background-color: $background-lighter

    &__header, &__button
      text-align: center

    &__button
      margin: 36px 0 8px

    &__icon
      font-size: 70px
      color: green
</style>
