import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    labels: {
      type: Array | String,
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
    },

    backgroundColor: {
      type: String,
      default: `#975fe4`
    },

    borderColor: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleUpdate () {
      this.$data._chart.destroy()
      this.rendering()
    },
    rendering () {
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
  },

  watch: {
    datasets: 'handleUpdate'
  },

  mounted () {
    this.rendering()
  }
}
