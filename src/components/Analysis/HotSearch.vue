<template>
  <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
    <analysis-middle :title="$t('analysis.topSearch.middleTitle')">
      <el-row :gutter="68">
        <el-col :xs="24" :sm="12">
          <middle-chart-card
            :title="$t('analysis.topSearch.searchUsers')"
            :highlight="searchData.total.value"
            :trend="searchData.total.trend"
            :shadow="shadow"
            :tooltip="$t('analysis.topSearch.searchUsersDesc')"
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
            :title="$t('analysis.topSearch.perCapitaSearch')"
            :highlight="searchData.average.value"
            :trend="searchData.average.trend"
            :shadow="shadow"
            :tooltip="$t('analysis.topSearch.perCapitaSearchDesc')"
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
import MiddleChartCard from 'COMPONENTS/Analysis/MiddleChartCard'
import ChartLine from 'COMPONENTS/Chart/Line'
import HotSearchTable from 'COMPONENTS/Analysis/HotSearchTable'

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
    searchData: {
      type: Object,
      default () {
        return {}
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
