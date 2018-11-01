<template>
  <el-table
    class="table"
    :data="normalizeTable"
  >
    <el-table-column
      v-for="row of tableHeaders"
      :key="row.label"
      :label="row.label"
      :prop="row.benchmark"
      :width="row.width || 'auto'"
    ></el-table-column>
  </el-table>
</template>

<script>
import DefaultTableHeaders from './DefaultHeaders'
import mixinSort from './MixinSort'
import { fetchPagingTableList } from 'SERVICES'

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
  }
}
</script>

<style lang="sass" scoped>

</style>
