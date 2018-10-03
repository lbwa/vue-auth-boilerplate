<template>
  <el-card class="workspace__projects">
    <h3 class="workspace__projects__title" slot="header">
      <span class="projects__title__content">{{title}}</span>
      <router-link
        to="/dashboard/analysis"
        class="projects__title__more">{{button}}</router-link>
    </h3>
    <div class="workspace__projects__wrapper" v-if="projects.length">
      <workspace-pro-item
        v-for="item of projects"
        :key="item.title"
        :title="item.title"
        :avatar-src="item.logo"
        :link="item.href"
        :description="item.description"
        :author="{
          name: item.member,
          link: item.memberLink
        }"
      ></workspace-pro-item>
    </div>
  </el-card>
</template>

<script>
import WorkspaceProItem from 'COMPONENTS/Workspace/ProjectItem'
export default {
  props: {
    title: {
      type: String,
      default: '进行中的项目'
    },
    button: {
      type: String,
      default: '全部项目'
    },
    projects: {
      type: Array,
      default () {
        return [
          {
            title: 'Alipay',
            avatar: '',
            link: '/dashboard/analysis',
            description: 'This is project\'s description',
            author: {
              name: '科学搬砖组',
              link: '/dashboard/analysis'
            }
          }
        ]
      }
    }
  },

  components: {
    WorkspaceProItem
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/mixin.sass'

.workspace
  &__projects
    &__title
      display: flex
      margin: 0
      font-size: 16px
      font-weight: normal

    &__wrapper
      display: flex
      flex-wrap: wrap

.projects
  &__title
    &__more
      margin-left: auto
      +normalize-link(null, null,#1890ff)
</style>
