<template>
  <el-main class="workspace">
    <workspace-header :current-user="currentUser"></workspace-header>
  </el-main>
</template>

<script>
import WorkspaceHeader from 'COMPONENTS/WorkspaceHeader'
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
    WorkspaceHeader
  }
}
</script>

<style lang="sass" scoped>

</style>
