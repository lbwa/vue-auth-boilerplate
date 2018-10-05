<template>
  <el-form
    class="info__form"
    ref="mainForm"
    :model="form"
    :rules="rules"
    label-width="20%"
  >
    <el-form-item label="付款账户">
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

    <el-form-item label="收款账户">
      <el-input
        :value="form.receiverAccount"
        @change.native="setReceiverAccount"
        placeholder="yourname@example.com"
        prop="receiverAccount"
      >
        <el-select
          slot="prepend"
          v-model="receiverType"
          :style="{ width: '110px' }"
        >
          <el-option label="支付宝" value="alipay"></el-option>
          <el-option label="银行账号" value="bank"></el-option>
        </el-select>
      </el-input>
    </el-form-item>

    <el-form-item label="收款人姓名">
      <el-input
        :value="form.receiverName"
        @change.native="setReceiverName"
        placeholder="请输入收款人姓名"
      ></el-input>
    </el-form-item>

    <el-form-item label="转账金额">
      <el-input
        :value="form.amount"
        @change.native="setAmount"
        placeholder="请输入金额"
      ><span slot="prefix">￥</span></el-input>
    </el-form-item>

    <el-form-item>
      <router-link-btn
        class="info__next__btn"
        :text="btnText"
        to="confirm"
        @click="onSubmit"
      ></router-link-btn>
    </el-form-item>
  </el-form>
</template>

<script>
import RouterLinkBtn from 'COMPONENTS/RouterLinkBtn'
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    btnText: {
      type: String,
      default: '下一步'
    }
  },

  data () {
    return {
      rules: {
        receiverAccount: [
          {
            required: true
          }
        ]
      }
    }
  },

  methods: {
    onSubmit () {
      this.$refs.mainForm.validate(valid => {
        console.log(valid)
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
  },

  components: {
    RouterLinkBtn
  }
}
</script>

<style lang="sass" scoped>
.info
  &__form
    margin: 40px auto 0
    max-width: 500px
</style>
