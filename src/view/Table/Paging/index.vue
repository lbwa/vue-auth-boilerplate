<template>
  <el-main>
    <el-table
      class="paging-table"
      :data="normalizeTable"
      :cell-class-name="createCellClassName"
    >
      <el-table-column
        v-for="col of tableHeaders"
        v-if="col.benchmark !== 'mid'"
        :key="col.label"
        :label="col.label"
        :prop="col.benchmark"
        :width="col.width || 'auto'"
        :formatter="formatTableCell"
      ></el-table-column>

      <el-table-column
        v-else
        prop="mid"
        label="MID"
        width="200"
      >
        <template slot-scope="scope">
          <el-input
            v-show="scope.row.__isEditing"
            @blur="handleClickSave(scope)"
            v-model="scope.row.mid"
          ></el-input>
          <span v-show="!scope.row.__isEditing">{{scope.row.mid}}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="actions"
        width="100"
      >
        <template slot-scope="scope">
          <el-button
            size="small"
            key="edit"
            type="text"
            icon="el-icon-edit-outline"
            v-show="!scope.row.__isEditing"
            @click="handleClickEdit(scope)"
          ></el-button>
          <el-button
            size="small"
            key="save"
            type="text"
            icon="el-icon-download"
            class="paging-table__actions__save"
            v-show="scope.row.__isEditing"
            @click="handleClickSave(scope)"
          ></el-button>
          <el-button
            size="small"
            key="delete"
            type="text"
            icon="el-icon-delete"
            @click="handleClickDelete(scope)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <table-footer
      :currentIndex="currentIndex"
      :totalItem="totalItem"
      :page-size="pageSize"
      :page-sizes="[ 10, 20, 30, 40 ]"
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
import dayjs from 'dayjs'

export default {
  mixins: [
    mixinSort
  ],
  data () {
    return {
      tableData: [], // all table data container
      currentIndex: 1, // current page index
      currentStart: 0, // current start index for table data
      currentEnd: 0, // current end index for table data
      sortBenchmark: 'name', // current sort benchmark
      pageSize: 10 // maximum number in the current page
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
    },
    handleClickEdit ({ $index, row, column }) {
      row.__isEditing = true
    },
    handleClickSave ({ $index, row, column }) {
      row.__isEditing = false

      // push to back-end server, invoke callback in `then` function
      this.tableData.splice(this.currentStart + $index, 1, {
        name: row.name,
        mid: row.mid,
        id: row.id,
        package_name: row.package_name,
        total_counts: row.total_counts,
        used_counts: row.used_counts,
        state: row.state,
        start_time: row.start_time,
        end_time: row.end_time,
        __isEditing: false
      })
    },
    handleClickDelete ({ $index, row, column }) {
      // push to back-end server, invoke callback in `then` function
      this.tableData.splice(this.currentStart + $index, 1)
    },
    /**
     * @description Convert new value into specific table cell
     * @param {Object} row Cell Object
     * @param {Object} cel Table cell layout object
     * @param {Any} cellValue Cell value
     * @param {Number} index Cell index in current table component
     */
    formatTableCell (row, col, cellValue, index) {
      if (col.property === this.tableHeaders[6].benchmark ||
        col.property === this.tableHeaders[7].benchmark) {
        return dayjs(parseFloat(cellValue)).format('YYYY-MM-DD')
      }

      return cellValue
    },
    createCellClassName ({ row, column, rowIndex, columnIndex }) {
      if (column.label === 'actions') return 'paging-table__actions__button'
      return ''
    },
    fetchList () {
      return fetchPagingTableList()
        .then(({ data }) => data)
        .then(({ code, list }) => {
          if (code === 200) {
            // set a tag to make cell editable
            this.tableData = list.map(item => {
              this.$set(item, '__isEditing', false)
              return item
            })
            return
          }
          throw new Error(`[Fetch table]: ${code}`)
        })
        .catch(console.error)
    }
  },

  computed: {
    totalItem () {
      return this.tableData.length
    }
  },

  created () {
    this.fetchList()
  },

  components: {
    TableFooter
  }
}
</script>

<style lang="sass" scoped>
.paging-table
  position: relative

  &__actions
    &__save
      margin-left: 0
    &__button
      .el-button
        font-size: 20px
</style>
