const props = {
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
        maintainAspectRatio: false
      }
    }
  },
  backgroundColor: {
    type: String,
    default: `#2693f8`
  }
}

const methods = {
  handleUpdate () {
    this.$data._chart.destroy()
    this.renderer()
  },
  renderer () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: this.backgroundColor,
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
}

export default {
  props,
  methods,
  mounted () {
    this.renderer()
  },
  watch: {
    datasets: 'handleUpdate'
  }
}
