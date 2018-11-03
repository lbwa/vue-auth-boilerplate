<template>
  <el-main>
    <el-table
      class="table"
      :data="normalizeTable"
    >
      <el-table-column
        v-for="col of tableHeaders"
        :key="col.label"
        :label="col.label"
        :prop="col.benchmark"
        :width="col.width || 'auto'"
      ></el-table-column>
    </el-table>
    <table-footer
      :currentIndex="currentIndex"
      :totalItem="totalItem"
      @sizeChange="handleSizeChange"
      @currentChange="handleCurrentChange"
    ></table-footer>
  </el-main>
</template>

<script>
import TableFooter from './Footer'
import mixinSort from './MixinSort'
import { fetchPagingTableList } from 'SERVICES'
import DefaultTableHeaders from './DefaultHeaders'

export default {
  mixins: [
    mixinSort
  ],
  data () {
    return {
      tableData: [],
      currentIndex: 1,
      currentStart: 0,
      currentEnd: 0,
      sortBenchmark: 'name',
      pageSize: 10
    }
  },

  props: {
    tableHeaders: {
      type: Array,
      default () {
        return DefaultTableHeaders
      }
    }
  },

  methods: {
    handleSizeChange (size) {
      this.pageSize = size
    },
    handleCurrentChange (currentIndex) {
      this.currentIndex = currentIndex
    }
  },

  computed: {
    totalItem () {
      return this.tableData.length
    }
  },

  created () {
    fetchPagingTableList()
      .then(({ data }) => data)
      .then(({ code, list }) => {
        if (code === 200) {
          this.tableData = list
          return
        }
        throw new Error(`[Fetch table]: ${code}`)
      })
      .catch(console.error)
  },

  components: {
    TableFooter
  }
}
</script>

<style lang="sass" scoped>

</style>
