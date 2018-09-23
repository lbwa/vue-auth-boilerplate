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
          <main>
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
          <main>chart area</main>
        </chart-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <chart-card
          cardHeader="支付笔数"
          :cardTotal="payments.total"
          :footerTitle="'转化率'"
          :footerDetail="percentValue(payments.rate)"
        >
          <main>card body</main>
        </chart-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <chart-card
          cardHeader="运营活动效果"
          :cardTotal="percentValue(operations.influence)"
          :footerTitle="'转化率'"
          :footerDetail="percentValue(operations.conversion)"
        >
          <main>chart area</main>
        </chart-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import ChartCard from 'COMPONENTS/ChartCard'
// import ChartLine from 'COMPONENTS/ChartLine'
import Trend from 'COMPONENTS/Trend'
import { mapState, mapActions } from 'vuex'
import {
  formatPrice,
  decimalNumber
} from 'COMPONENTS/utils'

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
    // this.getAnalysisData()
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

</style>
