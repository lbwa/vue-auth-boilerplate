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
  },
  // 用于绘制多条路径，如雷达图不同组数据之间的对比
  datasetsArray: {
    type: Array,
    default () {
      return []
    }
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
      datasets: this.normalizeDatasets
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
  computed: {
    normalizeDatasets () {
      return this.datasetsArray.length
        ? this.datasetsArray
        : [{
          backgroundColor: this.backgroundColor,
          data: this.datasets
        }]
    }
  },
  mounted () {
    this.renderer()
  },
  watch: {
    datasets: 'handleUpdate'
  }
}
