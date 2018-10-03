<template>
  <el-card class="workspace__activities">
    <header
      class="workspace__activities__header"
      slot="header"
    >{{title}}</header>
    <activities-item></activities-item>
  </el-card>
</template>

<script>
import ActivitiesItem from 'COMPONENTS/Workspace/ActivitiesItem'

export default {
  props: {
    activities: {
      type: Array,
      default () {
        return [
          {
            name: 'Bowen'
          }
        ]
      }
    },
    title: {
      type: String,
      default: '活动'
    }
  },

  components: {
    ActivitiesItem
  }
}
</script>

<style lang="sass" scoped>

.workspace
  &__activities
    margin-top: 24px

// reset
/deep/ .el-card__body
  padding: 0 24px 8px !important
</style>
