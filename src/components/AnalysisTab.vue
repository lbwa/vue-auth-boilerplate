<template>
  <el-tabs class="analysis__tab" v-model="activeTab">
    <el-tab-pane label="销售量" name="totalSales">
      <el-row>
        <el-col
          :xs="24" :sm="24" :md="12" :lg="18" :xl="18"
          class="tab__chart"
        >
          <h4 class="chart__title">销售趋势</h4>
          <chart-bar
            class="chart__body"
            :labels="formatData.labels"
            :datasets="formatData.datasets"
            :options="chartOptions"
          ></chart-bar>
        </el-col>
        <el-col
          :xs="24" :sm="24" :md="12" :lg="6" :xl="6"
          class="tab__rank"
        >
          <h4 class="rank__title">门店销售额排名</h4>
        </el-col>
      </el-row>
    </el-tab-pane>

    <el-tab-pane label="访问量" name="totalVisitors">
      <el-row>
        <el-col
          :xs="24" :sm="24" :md="12" :lg="18" :xl="18"
          class="tab__chart"
        >
          <h4 class="chart__title">访问量趋势</h4>
          <chart-bar
            class="chart__body"
            :labels="formatData.labels"
            :datasets="formatData.datasets"
            :options="chartOptions"
          ></chart-bar>
        </el-col>
        <el-col
          :xs="24" :sm="24" :md="12" :lg="6" :xl="6"
          class="tab__rank"
        >
          <h4 class="rank__title">门店访问量排名</h4>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import ChartBar from 'COMPONENTS/ChartBar'
export default {
  props: {
    chartData: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      activeTab: 'totalSales',
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
        // scaleShowLabels: false
      }
    }
  },

  computed: {
    formatData () {
      const labels = []
      const datasets = []
      const chartData = [...this.chartData]
      for (const point of chartData) {
        labels.push(point.month)
        datasets.push(point.total)
      }
      return {
        labels,
        datasets
      }
    }
  },

  components: {
    ChartBar
  }
}
</script>

<style lang="sass" scoped>
.analysis
  &__tab
    padding: 16px
    background-color: white
    font-size: 14px

.chart__title, .rank__title
  margin-top: 0
  margin-bottom: 20px
  color: rgba(0,0,0,.85)
  font-weight: 500

.chart
  &__body
    height: 290px

/deep/ .el-tabs__header
  margin-bottom: 24px

</style>
