<template>
  <el-main class="workspace">
    <workspace-header :current-user="currentUser"></workspace-header>
    <el-row :gutter="24" class="workspace__projects__gutter">
      <el-col
        :xs="24" :sm="24" :md="24" :lg="24" :xl="12"
      >
        <workspace-projects></workspace-projects>
      </el-col>
      <el-col
        :xs="24" :sm="24" :md="24" :lg="24" :xl="8"
      ></el-col>
    </el-row>
  </el-main>
</template>

<script>
import WorkspaceHeader from 'COMPONENTS/Workspace/Header'
import WorkspaceProjects from 'COMPONENTS/Workspace/Projects'
import { fetchUser } from 'SERVICES'
import { mapState, mapMutations } from 'vuex'

export default {
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
    WorkspaceProjects
  }
}
</script>

<style lang="sass" scoped>
.workspace
  &__projects
    &__gutter
      margin-top: 24px
</style>
