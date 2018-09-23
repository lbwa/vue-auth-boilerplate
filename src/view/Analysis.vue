<template>
  <el-main>
    <el-row type="flex" :gutter="24">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <chart-card
          cardHeader="销售总额"
          :cardTotal="formatPrice(sales.total)"
          :footerTitle="'日均销售额'"
          :footerDetail="formatPrice(sales.daily)"
        >
          <main class="placeholder__layout">
            <trend
              :trend="sales.trend"
            ></trend>
          </main>
        </chart-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <chart-card
          cardHeader="访问量"
          :cardTotal="visitors.total"
          :footerTitle="'日访问量'"
          :footerDetail="decimalNumber(visitors.daily)"
        >
          <main class="placeholder__layout">chart area</main>
        </chart-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <chart-card
          cardHeader="支付笔数"
          :cardTotal="payments.total"
          :footerTitle="'转化率'"
          :footerDetail="percentValue(payments.rate)"
        >
          <main class="placeholder__layout">card body</main>
        </chart-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <chart-card
          cardHeader="运营活动效果"
          :cardTotal="percentValue(operations.influence)"
        >
          <main class="placeholder__layout">chart area</main>
          <Trend
            class="trend__ops__layout card__footer__no-wrap"
            :trend="operations.trend"
            :hasAbsolute="false"
            slot="footer"
          ></Trend>
        </chart-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import ChartCard from 'COMPONENTS/ChartCard'
// import ChartLine from 'COMPONENTS/ChartLine'
import Trend from 'COMPONENTS/Trend'
import { mapState, mapActions, mapMutations } from 'vuex'
import {
  formatPrice,
  decimalNumber
} from 'COMPONENTS/utils'

// work with dev mode
import { sales, visitors, payments, operations } from 'MOCK/analysis'

export default {
  computed: {
    ...mapState([
      'sales',
      'visitors',
      'payments',
      'operations'
    ])
  },

  created () {
    // ! Request all analysis data at the created hook
    // this.getAnalysisData() // production mode

    // dev mode
    this.setSales(sales)

    this.setVisitors(visitors)

    this.setPayments(payments)

    this.setOperations(operations)
  },

  methods: {
    formatPrice (price) {
      return formatPrice(price)
    },

    decimalNumber (num) {
      return decimalNumber(num)
    },

    percentValue (value) {
      return `${value * 100}`.replace(/^-/, '') + '%'
    },

    ...mapMutations({
      setSales: 'SET_SALES',
      setVisitors: 'SET_VISITORS',
      setPayments: 'SET_PAYMENTS',
      setOperations: 'SET_OPERATIONS'
    }),

    ...mapActions([
      'getAnalysisData'
    ])
  },

  components: {
    ChartCard,
    Trend
  }
}
</script>

<style lang="sass" scoped>

.placeholder
  &__layout
    height: 46px
    margin-bottom: 12px
    position: relative
    width: 100%

.trend
  &__ops__layout
    position: relative
    width: 100%
    margin-top: 8px
    padding-top: 9px
    font-size: 14px
    line-height: 22px
    border-top: 1px solid #e8e8e8

.card__footer__no-wrap
  white-space: nowrap
  overflow: hidden
</style>
