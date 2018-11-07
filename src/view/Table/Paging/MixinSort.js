export default {
  methods: {
    sortFunction (prev, next) {
      let modifier = this.ascending ? 1 : -1
      if (prev[this.sortBenchmark] > next[this.sortBenchmark]) return -1 * modifier
      if (prev[this.sortBenchmark] < next[this.sortBenchmark]) return 1 * modifier
      return 0
    },
    handleEmptyTable (newTableState, oldTableState) {
      while (this.isEmptyTable && this.currentIndex > 1) {
        this.currentIndex--
      }
    }
  },
  computed: {
    normalizeTable () {
      return this.tableData
        .sort(this.sortFunction)
        .filter((item, index) => {
          this.currentStart = (this.currentIndex - 1) * this.pageSize
          this.currentEnd = this.currentIndex * this.pageSize
          return index >= this.currentStart && index < this.currentEnd
        })
    },
    isEmptyTable () {
      return !this.normalizeTable.length
    }
  },
  watch: {
    isEmptyTable: 'handleEmptyTable'
  }
}
