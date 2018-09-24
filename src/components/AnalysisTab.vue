<template>
  <el-tabs class="analysis__tab" v-model="activeTab">
    <el-tab-pane label="销售量" name="totalSales">
      <chart-bar
        :labels="formatData.labels"
        :datasets="formatData.datasets"
      ></chart-bar>
    </el-tab-pane>
    <el-tab-pane label="访问量" name="totalVisitors">访问量</el-tab-pane>
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
      activeTab: 'totalSales'
    }
  },

  computed: {
    formatData () {
      const labels = []
      const datasets = []
      const chartData = [...this.chartData]
      for (const point of chartData) {
        labels.push(point.month)
        datasets.push(point.totalSales)
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
</style>
