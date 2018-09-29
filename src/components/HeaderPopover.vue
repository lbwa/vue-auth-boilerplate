<template>
  <el-popover
    class="popover"
    placement="top-start"
    trigger="click"
  >
    <el-tabs v-model="activeName">
      <el-tab-pane label="通知" name="notification">通知</el-tab-pane>
      <el-tab-pane label="消息" name="message">消息</el-tab-pane>
      <el-tab-pane label="待办" name="todo">待办</el-tab-pane>
    </el-tabs>
    <slot name="reference" slot="reference"></slot>
  </el-popover>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'notification'
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
