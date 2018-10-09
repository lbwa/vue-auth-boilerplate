<template>
  <el-main class="access__user">
    <div class="access__description">
      <h2 class="access__description__title">current role: {{role}}</h2>
      <p class="access__description__main">{{info}}</p>
    </div>
  </el-main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      info: 'access__user: This private page only work with `admin` role.\nThe admin page will disappear when current role is not `admin`.'
    }
  },

  computed: {
    ...mapState('login', [
      'role'
    ])
  }
}
</script>

<style lang="sass" scoped>

</style>
