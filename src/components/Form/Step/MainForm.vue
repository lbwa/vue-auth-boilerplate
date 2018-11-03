<template>
  <el-form
    class="info__form"
    ref="mainForm"
    :model="form"
    :rules="rules"
    label-width="30%"
    :size="size"
  >
    <el-form-item :label="$t('form.step.label.payment')">
      <el-select
        v-model="payAccount"
        :style="{ width: '100%' }"
      >
        <el-option
          label="vue-design-pro@github.com"
          value="vue-design-pro@github.com"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-form-item :label="$t('form.step.label.receiver')" prop="receiverAccount">
      <el-input
        :value="form.receiverAccount"
        @change.native="setReceiverAccount"
        placeholder="yourname@example.com"
      >
        <el-select
          slot="prepend"
          v-model="receiverType"
          :style="{ width: '110px' }"
        >
          <el-option
            :label="$t('form.step.label.alipay')"
            value="alipay"
          ></el-option>
          <el-option
            :label="$t('form.step.label.bank')"
            value="bank"
          ></el-option>
        </el-select>
      </el-input>
    </el-form-item>

    <el-form-item
      :label="$t('form.step.label.receiverName')"
      prop="receiverName">
      <el-input
        :value="form.receiverName"
        @change.native="setReceiverName"
        :placeholder="$t('form.step.placeholder.receiverName')"
      ></el-input>
    </el-form-item>

    <el-form-item
      :label="$t('form.step.label.amount')"
      prop="amount">
      <el-input
        :value="form.amount"
        @change.native="setAmount"
        :placeholder="$t('form.step.placeholder.amount')"
      ><span slot="prefix">￥</span></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{btnText}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    btnText: {
      type: String,
      default: 'Next'
    },
    size: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      rules: {
        receiverAccount: [
          {
            required: true,
            message: this.$t('form.step.rulesReceiverAccount'),
            trigger: 'blur'
          }
        ],
        receiverName: [
          {
            required: true,
            message: this.$t('form.step.rulesReceiverName'),
            trigger: 'blur'
          }
        ],
        amount: [
          {
            required: true,
            message: this.$t('form.step.rulesAmount'),
            trigger: 'blur'
          }
        ]
      }
    }
  },

  methods: {
    onSubmit () {
      this.$refs.mainForm.validate(valid => {
        if (valid) this.$router.push('confirm')
      })
    },
    ...mapMutations('formStep', {
      setPayAccount: 'SET_PAY_ACCOUNT',
      setReceiverAccount: 'SET_RECEIVER_ACCOUNT',
      setReceiverType: 'SET_RECEIVER_TYPE',
      setReceiverName: 'SET_RECEIVER_NAME',
      setAmount: 'SET_AMOUNT'
    })
  },

  computed: {
    // el-input doesn't support `.lazy`, so we use `:value=` and
    // `@change.native` for other form item.
    payAccount: {
      get () {
        return this.form.payAccount
      },
      set (value) {
        this.setPayAccount(value)
      }
    },
    receiverType: {
      get () {
        return this.form.receiverType
      },
      set (value) {
        this.setReceiverType(value)
      }
    },
    ...mapState('formStep', [
      'form'
    ])
  }
}
</script>

<style lang="sass" scoped>
.info
  &__form
    margin: 40px auto 0
    max-width: 500px
</style>
