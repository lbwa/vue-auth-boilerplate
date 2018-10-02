<template>
  <el-main>
    <el-row :gutter="24">
      <el-col class="card__gutter__bottom" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <chart-card
          :cardHeader="text.total.sales"
          :cardTotal="formatPrice(sales.total)"
          :footerTitle="text.daily.sales"
          :footerDetail="formatPrice(sales.daily)"
          :tooltip="text.tooltip.sales"
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
          :cardHeader="text.total.visitors"
          :cardTotal="decimalNumber(visitors.total)"
          :footerTitle="text.daily.visitors"
          :footerDetail="decimalNumber(visitors.daily)"
          :tooltip="text.tooltip.visitors"
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
          :cardHeader="text.total.payments"
          :cardTotal="decimalNumber(payments.total)"
          :footerTitle="text.daily.payments"
          :footerDetail="percentValue(payments.rate)"
          :tooltip="text.tooltip.payments"
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
          :cardHeader="text.total.operations"
          :cardTotal="percentValue(operations.influence)"
          :tooltip="text.tooltip.operations"
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

    <el-row class="analysis__search-sales" :gutter="24">
      <analysis-hot-search
        :chartData="visitorsData"
      ></analysis-hot-search>
      <analysis-sales-type></analysis-sales-type>
    </el-row>

  </el-main>
</template>

<script>
import ChartCard from 'COMPONENTS/Analysis/ChartCard'
import ChartLine from 'COMPONENTS/Chart/Line'
import ChartBar from 'COMPONENTS/Chart/Bar'
import MiniProgress from 'COMPONENTS/Analysis/MiniProgress'
import AnalysisTab from 'COMPONENTS/Analysis/Tab'
import AnalysisHotSearch from 'COMPONENTS/Analysis/HotSearch'
import AnalysisSalesType from 'COMPONENTS/Analysis/SalesType'
import Trend from 'COMPONENTS/Trend'
import { mapState, mapActions } from 'vuex'
import {
  formatPrice,
  decimalNumber,
  percentValue
} from 'COMPONENTS/utils'

import { getAnalysisData } from 'SERVICES'

export default {
  mixins: [{
    methods: {
      formatPrice,
      decimalNumber,
      percentValue
    }
  }],

  data () {
    return {
      text: {
        total: {
          sales: '销售总额',
          visitors: '访问量',
          payments: '支付笔数',
          operations: '运营活动效果'
        },
        daily: {
          sales: '日均销售额',
          visitors: '日均访问量',
          payments: '转化率'
        },
        tooltip: {
          sales: '这是销售总额',
          visitors: '这是访客量',
          payments: '这是支付笔数',
          operations: '这是运营效果'
        }
      }
    }
  },

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
    ...mapState('analysis', [
      'sales',
      'visitors',
      'payments',
      'operations',
      'searchData'
    ])
  },

  created () {
    getAnalysisData().then(res => this.getAnalysisData(res.data))
  },

  methods: {
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

    ...mapActions('analysis', [
      'getAnalysisData'
    ])
  },

  components: {
    Trend,
    ChartCard,
    ChartLine,
    ChartBar,
    MiniProgress,
    AnalysisTab,
    AnalysisHotSearch,
    AnalysisSalesType
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
