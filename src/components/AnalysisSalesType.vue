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
        <chart-doughnut
          class="doughnut__main"
          :labels="chartData.sales.labels"
          :datasets="chartData.sales.datasets"
        ></chart-doughnut>
        <analysis-sales-list
          class="doughnut__legend"
          :salesList="chartData.details"
        ></analysis-sales-list>
      </el-row>
    </analysis-middle>
  </el-col>
</template>

<script>
import AnalysisMiddle from 'COMPONENTS/AnalysisMiddle'
import ChartDoughnut from 'COMPONENTS/ChartDoughnut'
import AnalysisSalesList from 'COMPONENTS/AnalysisSalesList'
import { mapGetters } from 'vuex'

export default {
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

    ...mapGetters('analysis', {
      allSales: 'getAllSalesType',
      allDetails: 'getAllDetails',
      onlineSales: 'getOnlineSalesType',
      onlineDetails: 'getOnlineDetails',
      offlineSales: 'getOfflineSalesType',
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
</style>
