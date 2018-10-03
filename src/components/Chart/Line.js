import { Line } from 'vue-chartjs'
import chartConfig from './mixins'

export default {
  extends: Line,
  mixins: [chartConfig],
  props: {
    borderColor: {
      type: String,
      default: ''
    }
  },

  methods: {
    renderer () {
      this.renderChart({
        labels: this.labels,
        datasets: [
          {
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor === '' ? '' : this.borderColor,
            data: this.datasets
          }
        ]
      }, {
        // hide data label
        legend: {
          display: false
        },

        // hide axis and its labels
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        scaleShowLabels: false,

        // hide line dots
        // 需要在极其精确的 hover 状态下才能触发 dot 样式
        elements: {
          point: {
            radius: 1,
            hoverRadius: 4
          }
        },
        ...this.options
      })
    }
  }
}
