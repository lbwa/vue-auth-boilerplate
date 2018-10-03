<template>
  <el-card class="workspace__activities">
    <header
      class="workspace__activities__header"
      slot="header"
    >{{title}}</header>
    <activities-item
      v-for="item of activities"
      :key="item.updateAt"
      :user="item.user"
      :updateAt="item.updateAt"
      :group="item.group"
      :project="item.project"
      :template="item.template"
    ></activities-item>
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
            user: {
              name: 'Bowen',
              avatar: ''
            },
            updateAt: +new Date(),
            group: {
              name: 'Github',
              link: 'https://github.com/lbwa'
            },
            project: {
              name: 'Vue Design Pro',
              link: 'https://github.com/lbwa/vue-design-pro'
            },
            template: '在 @{group} 新建项目 @{project}'
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
