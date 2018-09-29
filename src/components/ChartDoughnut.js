import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,

  props: {
    labels: {
      type: Array,
      default () {
        return [
          'default title 1',
          'default title 2',
          'default title 3',
          'default title 4'
        ]
      }
    },
    datasets: {
      type: Array,
      default () {
        return [1, 2, 3, 4]
      }
    },
    options: {
      type: Object,
      default () {
        return {
          responsive: true,
          maintainAspectRatio: true
        }
      }
    },
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

  mounted () {
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
