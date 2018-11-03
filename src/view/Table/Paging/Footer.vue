<template>
  <footer class="paging-table__footer">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentIndex"
      :page-sizes="pageSizes"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItem">
    </el-pagination>
  </footer>
</template>

<script>
export default {
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default () {
        return [ 10, 20, 30, 40 ]
      }
    },
    currentIndex: {
      type: Number,
      required: true
    },
    totalItem: {
      type: Number,
      required: true
    }
  },

  methods: {
    handleSizeChange (pageSize) {
      this.$emit('sizeChange', pageSize)
    },
    handleCurrentChange (currentIndex) {
      this.$emit('currentChange', currentIndex)
    }
  }
}
</script>

<style lang="sass" scoped>
.paging-table
  &__footer
    display: flex
    justify-content: center
    background-color: white
</style>
