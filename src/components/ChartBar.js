import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
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
            backgroundColor: `#2693f8`,
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
        ...this.options
      })
    }
  },

  mounted () {
    this.rendering()
  },

  watch: {
    datasets: 'handleUpdate'
  }
}
