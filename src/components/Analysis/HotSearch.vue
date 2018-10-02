<template>
  <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
    <analysis-middle title="线上热门搜索">
      <el-row :gutter="68">
        <el-col :xs="24" :sm="12">
          <middle-chart-card
            title="搜索用户数"
            :highlight="searchData.total.value"
            :trend="searchData.total.trend"
            :shadow="shadow"
            tooltip="这是搜索用户数"
            :bodyStyle="bodyStyle"
          >
            <chart-line
              slot="chart"
              class="middle__chart__layout"
              :options="{
                responsive: true,
                maintainAspectRatio: false
              }"
              :labels="chartData.labels"
              :datasets="chartData.datasets"
              :backgroundColor="backgroundColor"
              :borderColor="borderColor"
            ></chart-line>
          </middle-chart-card>
        </el-col>
        <el-col :xs="24" :sm="12">
          <middle-chart-card
            title="人均搜索次数"
            :highlight="searchData.average.value"
            :trend="searchData.average.trend"
            :shadow="shadow"
            tooltip="这是人均搜索次数"
            :bodyStyle="bodyStyle"
          >
            <chart-line
              slot="chart"
              class="middle__chart__layout"
              :options="{
                responsive: true,
                maintainAspectRatio: false
              }"
              :labels="chartData.labels"
              :datasets="chartData.datasets"
              :backgroundColor="backgroundColor"
              :borderColor="borderColor"
            ></chart-line>
          </middle-chart-card>
        </el-col>
      </el-row>

      <el-row slot="table">
        <hot-search-table :data="searchData.chart"></hot-search-table>
      </el-row>

    </analysis-middle>
  </el-col>
</template>

<script>
import AnalysisMiddle from 'COMPONENTS/Analysis/Middle'
import MiddleChartCard from 'COMPONENTS/MiddleChartCard'
import ChartLine from 'COMPONENTS/ChartLine'
import HotSearchTable from 'COMPONENTS/HotSearchTable'
import { mapState } from 'vuex'

export default {
  props: {
    chartData: {
      type: Object,
      default () {
        return {
          labels: ['a', 'b', 'c'],
          datasets: [1, 2, 3]
        }
      }
    },
    bodyStyle: {
      type: Object,
      default () {
        return {
          padding: 0,
          marginBottom: '24px'
        }
      }
    },
    shadow: {
      type: String,
      default: 'never'
    },
    backgroundColor: {
      type: String,
      default: '#d0e9ff'
    },
    borderColor: {
      type: String,
      default: '#1089ff'
    }
  },

  computed: {
    ...mapState('analysis', [
      'searchData'
    ])
  },

  components: {
    AnalysisMiddle,
    MiddleChartCard,
    ChartLine,
    HotSearchTable
  }
}
</script>

<style lang="sass" scoped>

.middle__chart__layout
  position: relative
  height: 45px
</style>
