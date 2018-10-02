<template>
  <el-main class="workspace">
    <workspace-header :current-user="currentUser"></workspace-header>
    <el-row :gutter="24">
      <el-col
        class="workspace__projects__gutter"
        :xs="24" :sm="24" :md="24" :lg="16" :xl="16"
      >
        <!-- v-for area -->
        <workspace-projects></workspace-projects>
      </el-col>
      <el-col
        class="workspace__navigator__wrapper"
        :xs="24" :sm="24" :md="24" :lg="8" :xl="8"
      >
        <workspace-navigator
          :tags="tags"
          :navigators="navigators"
        ></workspace-navigator>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import WorkspaceHeader from 'COMPONENTS/Workspace/Header'
import WorkspaceProjects from 'COMPONENTS/Workspace/Projects'
import WorkspaceNavigator from 'COMPONENTS/Workspace/Navigator'
import { fetchUser } from 'SERVICES'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      tags: [
        {
          name: '快速开始'
        },
        {
          name: '便捷导航'
        }
      ],
      navigators: [
        {
          name: '操作一',
          link: '/dashboard/analysis'
        },
        {
          name: '操作二',
          link: '/dashboard/analysis'
        },
        {
          name: '操作三',
          link: '/dashboard/analysis'
        },
        {
          name: '操作四',
          link: '/dashboard/analysis'
        },
        {
          name: '操作五',
          link: '/dashboard/analysis'
        },
        {
          name: '操作六',
          link: '/dashboard/analysis'
        }
      ]
    }
  },

  created () {
    fetchUser().then(res => this.setCurrentUser(res.data))
  },

  computed: {
    ...mapState('workspace', [
      'currentUser'
    ])
  },

  methods: {
    ...mapMutations('workspace', {
      setCurrentUser: 'SET_CURRENT_USER'
    })
  },

  components: {
    WorkspaceHeader,
    WorkspaceProjects,
    WorkspaceNavigator
  }
}
</script>

<style lang="sass" scoped>
.workspace
  &__projects
    &__gutter
      margin-top: 24px

  &__navigator
    &__wrapper
      margin-top: 24px
</style>
