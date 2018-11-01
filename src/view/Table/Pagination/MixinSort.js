export default {
  methods: {
    sortFunction (prev, next) {
      let modifier = this.ascending ? -1 : 1
      if (prev > next) return -1 * modifier
      if (prev < next) return 1 * modifier
      return 0
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
    }
  }
}
