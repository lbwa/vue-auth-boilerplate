<template>
  <el-header class="layout__material__header">
    <i class="el-icon-menu header__icon" @click="toggleAside"></i>

    <!-- 登出按钮 -->
    <el-button class="logout" type="text" @click="onLogout">{{
      $t('aside.bar.logout')
    }}</el-button>

    <div class="user">
      <!-- 此处用户头像地址应是与用户信息耦合，而不与静态文件耦合 -->
      <img
        src="~../img/logo.png"
        height="50%"
        alt="avatar"
        class="user__avatar"
      />
      <span class="user__name">{{ username }}</span>
    </div>
  </el-header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Header',

  data() {
    return {
      username: 'default name'
    }
  },

  methods: {
    onLogout() {
      this.$store
        .dispatch('login/userLogout')
        .then(() => this.$router.replace('/login'))
    },
    ...mapMutations({
      toggleAside: 'SET_ASIDE_COLLAPSE'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~STYLE/color/background.scss';

@mixin user-area {
  float: right;
  height: 60px;
}

.layout__material__header {
  padding: 0 24px 0 0;
  position: relative; // for box-shadow
  background-color: $background-lightest;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .header {
    &__icon {
      padding: 0 24px;
      line-height: 60px;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.3s, padding 0s;
    }
  }

  .user {
    @include user-area;
    margin-right: 15px;
    &__name,
    &__avatar {
      line-height: 60px;
      vertical-align: middle;
    }
  }

  .logout {
    @include user-area;
  }
}
</style>
