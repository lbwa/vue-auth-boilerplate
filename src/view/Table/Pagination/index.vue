<template>
  <el-table
    class="table"
    :data="tableList"
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
import { fetchPagingTableList } from 'SERVICES'

export default {
  data () {
    return {
      tableList: []
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
          this.tableList = list
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
