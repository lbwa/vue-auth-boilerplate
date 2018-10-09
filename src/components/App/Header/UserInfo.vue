<template>
  <el-popover
    trigger="hover"
    popper-class="header__user-info"
  >
    <el-menu>
      <el-menu-item index="/user/center">
        <i class="el-icon-tickets"></i>
        <span slot="title">{{text.userCenter}}</span>
      </el-menu-item>
      <el-menu-item
        index="/logout"
        @click="logout($router.replace.bind($router))"
      >
        <i class="el-icon-circle-close-outline"></i>
        <span slot="title">{{text.logout}}</span>
      </el-menu-item>
    </el-menu>
    <div class="header__user-info__icon" slot="reference">
      <img
        src="~STATIC/user.png"
        alt="user-avatar"
        width="24"
        height="24"
        class="user-info__icon__avatar"
        ref="avatar"
      >
      <span class="user-info__icon__current-user">{{userInfo.name}}</span>
    </div>
  </el-popover>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      text: {
        userCenter: '用户中心',
        logout: '登出'
      }
    }
  },

  mounted () {
    if (this.userInfo.avatar) this.$refs.avatar.src = this.userInfo.avatar
  },

  computed: {
    ...mapState('login', [
      'userInfo'
    ])
  },

  methods: {
    ...mapActions('login', [
      'logout'
    ])
  }
}
</script>

<style lang="sass">
.header__user-info
  padding: 0
  border: 0

.user-info
  &__icon
    &__avatar
      border-radius: 50%
      vertical-align: middle

    &__current-user
      vertical-align: middle
</style>
