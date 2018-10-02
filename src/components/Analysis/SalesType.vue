<template>
  <el-col
    class="analysis__sales"
    :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
  >
    <analysis-middle title="销售额类别">
      <!-- analysis sales radio tab -->
      <el-row>
        <el-radio-group v-model="radioSelected" size="medium">
          <el-radio-button label="全部渠道"></el-radio-button>
          <el-radio-button label="线上"></el-radio-button>
          <el-radio-button label="门店"></el-radio-button>
        </el-radio-group>
      </el-row>

      <el-row class="analysis__sales__doughnut" slot="table">
        <h4 class="doughnut__title">销售额</h4>
        <div class="doughnut__main__wrapper">
          <chart-doughnut
            class="doughnut__main"
            :labels="chartData.sales.labels"
            :datasets="chartData.sales.datasets"
          ></chart-doughnut>
          <div class="doughnut__total-tips">
            <h3 class="doughnut__tips-title">{{radioSelected}}</h3>
            <span class="doughnut__sum">{{formatPrice(sumData)}}</span>
          </div>
        </div>
        <analysis-sales-list
          class="doughnut__legend"
          :salesList="chartData.details"
        ></analysis-sales-list>
      </el-row>
    </analysis-middle>
  </el-col>
</template>

<script>
import AnalysisMiddle from 'COMPONENTS/Analysis/Middle'
import ChartDoughnut from 'COMPONENTS/Chart/Doughnut'
import AnalysisSalesList from 'COMPONENTS/Analysis/SalesList'
import { mapGetters } from 'vuex'
import { formatPrice } from 'COMPONENTS/utils'

export default {
  mixins: [{
    methods: {
      formatPrice
    }
  }],

  data () {
    return {
      radioSelected: '全部渠道'
    }
  },

  computed: {
    chartData () {
      if (this.radioSelected === '线上') {
        return {
          sales: this.onlineSales,
          details: this.onlineDetails
        }
      }
      if (this.radioSelected === '门店') {
        return {
          sales: this.offlineSales,
          details: this.offlineDetails
        }
      }
      return {
        sales: this.allSales,
        details: this.allDetails
      }
    },

    sumData () {
      if (this.radioSelected === '线上') {
        return this.onlineSum
      }
      if (this.radioSelected === '门店') {
        return this.offlineSum
      }
      return this.allSum
    },

    ...mapGetters('analysis', {
      allSales: 'getAllSalesType',
      allSum: 'getAllSum',
      allDetails: 'getAllDetails',
      onlineSales: 'getOnlineSalesType',
      onlineSum: 'getOnlineSum',
      onlineDetails: 'getOnlineDetails',
      offlineSales: 'getOfflineSalesType',
      offlineSum: 'getOfflineSum',
      offlineDetails: 'getOfflineDetails'
    })
  },

  components: {
    AnalysisMiddle,
    ChartDoughnut,
    AnalysisSalesList
  }
}
</script>

<style lang="sass" scoped>

.analysis
  &__sales__doughnut
    position: relative

.doughnut
  &__title
    margin-top: 8px
    margin-bottom: 32px
    font-size: 14px

  &__main
    height: 100%

    &__wrapper
      position: relative
      width: calc(100% - 240px)
      height: 248px

  &__legend
    position: absolute
    right: 0
    top: calc(50% + (32px + 8px + 16px) / 2)
    transform: translateY(-50%)
    margin: 0 20px
    min-width: 200px

  &__total-tips
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    text-align: center

  &__tips-title
    font-size: 14px
    color: rgba(0,0,0,.45)

  &__sum
    font-size: 22px
    color: rgba(0,0,0,.65)
</style>
