<template>
  <el-form
    class="info__form"
    ref="form"
    :model="form"
    label-width="20%"
  >
    <el-form-item label="付款账户">
      <el-select
        v-model="form.payAccount"
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
        v-model="form.receiverAccount"
        placeholder="yourname@example.com"
      >
        <el-select
          slot="prepend"
          v-model="form.receiverType"
          :style="{ width: '110px' }"
        >
          <el-option label="支付宝" value="alipay"></el-option>
          <el-option label="银行账号" value="bank"></el-option>
        </el-select>
      </el-input>
    </el-form-item>

    <el-form-item label="收款人姓名">
      <el-input
        v-model="form.receiverName"
        placeholder="请输入收款人姓名"
      ></el-input>
    </el-form-item>

    <el-form-item label="转账金额">
      <el-input
        v-model="form.amount"
        placeholder="请输入金额"
      ><span slot="prefix">￥</span></el-input>
    </el-form-item>

    <el-form-item>
      <router-link-btn
        class="info__next__btn"
        :text="btnText"
        to="confirm"
      ></router-link-btn>
    </el-form-item>
  </el-form>
</template>

<script>
import RouterLinkBtn from 'COMPONENTS/RouterLinkBtn'

export default {
  props: {
    btnText: {
      type: String,
      default: '下一步'
    }
  },

  data () {
    return {
      form: {
        payAccount: 'vue-design-pro@github.com',
        receiverAccount: '',
        receiverType: 'alipay',
        receiverName: '',
        amount: ''
      }
    }
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
