<template>
  <el-main>
    <el-row :gutter="24">
      <el-col class="card__gutter__bottom" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
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

      <el-col class="card__gutter__bottom" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <chart-card
          cardHeader="访问量"
          :cardTotal="visitors.total"
          :footerTitle="'日访问量'"
          :footerDetail="decimalNumber(visitors.daily)"
        >
          <main class="placeholder__layout">
            <chart-line
              class="chart__layout"
              :options="{
                responsive: true,
                maintainAspectRatio: false // 保持长宽比
              }"
              :labels="visitorsData.labels"
              :datasets="visitorsData.datasets"
            ></chart-line>
          </main>
        </chart-card>
      </el-col>

      <el-col class="card__gutter__bottom" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <chart-card
          cardHeader="支付笔数"
          :cardTotal="payments.total"
          :footerTitle="'转化率'"
          :footerDetail="percentValue(payments.rate)"
        >
          <main class="placeholder__layout">
            <chart-bar
              class="chart__layout"
              :options="{
                responsive: true,
                maintainAspectRatio: false
              }"
              :labels="paymentsData.labels"
              :datasets="paymentsData.datasets"
            ></chart-bar>
          </main>
        </chart-card>
      </el-col>

      <el-col class="card__gutter__bottom" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <chart-card
          cardHeader="运营活动效果"
          :cardTotal="percentValue(operations.influence)"
        >
          <main class="placeholder__layout">
            <mini-progress
              class="progress__layout"
              :percentage="operations.influence"
              :stroke-width="8"
              color="rgb(19, 194, 194)"
              :show-text="false"
            ></mini-progress>
          </main>
          <Trend
            class="trend__ops__layout card__footer__no-wrap"
            :trend="operations.trend"
            :hasAbsolute="false"
            slot="footer"
          ></Trend>
        </chart-card>
      </el-col>
    </el-row>
    <analysis-tab
      :chart-data="totalSalesData"
    ></analysis-tab>
  </el-main>
</template>

<script>
import ChartCard from 'COMPONENTS/ChartCard'
import ChartLine from 'COMPONENTS/ChartLine'
import ChartBar from 'COMPONENTS/ChartBar'
import MiniProgress from 'COMPONENTS/MiniProgress'
import AnalysisTab from 'COMPONENTS/AnalysisTab'
import Trend from 'COMPONENTS/Trend'
import { mapState, mapActions } from 'vuex'
import {
  formatPrice,
  decimalNumber
} from 'COMPONENTS/utils'

// work with prod mode
// import { getAnalysisData } from 'SERVICES'

// ! work with dev mode
import { sales, visitors, payments, operations, rankList } from 'MOCK/analysis'

export default {
  computed: {
    visitorsData () {
      return this.formatData(this.visitors.chart, ['date', 'value'])
    },
    paymentsData () {
      return this.formatData(this.payments.chart, ['date', 'value'])
    },
    totalSalesData () {
      return this.formatData(this.sales.totalDetails, ['month', 'total'])
    },
    ...mapState([
      'sales',
      'visitors',
      'payments',
      'operations'
    ])
  },

  created () {
    // production mode
    // getAnalysisData().then(this.getAnalysisData)

    // ! dev mode
    this.getAnalysisData({
      sales,
      visitors,
      payments,
      operations,
      rankList
    })
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

    /**
     * @description 分离数组中各项的特定键名 filter[i] 的键值，用于绘制 line-chart
     */
    formatData (set, filter) {
      const labels = []
      const datasets = []
      for (const daily of set) {
        labels.push(daily[filter[0]])
        datasets.push(daily[filter[1]])
      }

      return {
        labels,
        datasets
      }
    },

    ...mapActions([
      'getAnalysisData'
    ])
  },

  components: {
    Trend,
    ChartCard,
    ChartLine,
    ChartBar,
    MiniProgress,
    AnalysisTab
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

.progress__layout
  position: absolute
  left: 0
  bottom: 0
  padding: 5px 0
  width: 100%

.chart__layout
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0

.card
  &__footer__no-wrap
    white-space: nowrap
    overflow: hidden

  &__gutter__bottom
    margin-bottom: 24px

// reset
/deep/ .el-progress-bar
  &__inner, &__outer
    border-radius: 0
</style>
