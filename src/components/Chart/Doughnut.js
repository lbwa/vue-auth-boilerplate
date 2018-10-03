import { Doughnut } from 'vue-chartjs'
import chartConfig from './mixins'

export default {
  extends: Doughnut,
  mixins: [chartConfig],
  props: {
    colorSets: {
      type: Array,
      default () {
        return [
          'rgb(24, 144, 255)',
          'rgb(19, 194, 194)',
          'rgb(47, 194, 91)',
          'rgb(250, 204, 20)',
          'rgb(240, 72, 100)',
          'rgb(133, 67, 224)'
        ]
      }
    }
  },

  methods: {
    renderer () {
      this.renderChart({
        labels: this.labels,
        datasets: [
          {
            backgroundColor: this.colorSets,
            data: this.datasets
          }
        ]
      }, {
        legend: {
          display: false,
          position: 'right',
          labels: {
            usePointStyle: true
          }
        },
        cutoutPercentage: 80, // inner round radius
        ...this.options
      })
    }
  }
}
