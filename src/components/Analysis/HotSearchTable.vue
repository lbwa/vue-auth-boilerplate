<template>
  <el-table
    :data="data"
    :style="tableStyle"
    :default-sort="{prop: 'data', order: 'descending'}"
    :stripe="true"
    size="medium"
    >
    <el-table-column
      :label="label.col1"
      type="index"
      width="90"
    ></el-table-column>
    <el-table-column
      prop="name"
      :label="label.col2"
      sortable
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="data"
      :label="label.col3"
      sortable
      :formatter="formatter"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    label: {
      type: Object,
      default () {
        return {
          col1: '排名',
          col2: '名称',
          col3: '数据'
        }
      }
    }
  },

  computed: {
    tableStyle () {
      return `padding: 0 8px;
        width: 100%;
        border: 1px solid #e8e8e8;
        border-radius: 5px;`
    }
  },

  methods: {
    formatter (row, column) {
      return row.data
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
