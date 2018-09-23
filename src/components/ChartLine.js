import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    labels: {
      type: Array,
      default () {
        return []
      }
    },

    datasets: {
      type: Array,
      default () {
        return []
      }
    },

    options: {
      type: Object,
      default () {
        return {
          responsive: true,
          maintainAspectRatio: false // 保持长宽比
        }
      }
    }
  },

  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets
    }, this.options)
  }
}
