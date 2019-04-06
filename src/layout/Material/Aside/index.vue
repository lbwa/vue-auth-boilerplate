<template>
  <el-aside
    :class="[
      'layout__material__aside',
      isAsideCollapse ? 'collapse' : 'expand'
    ]"
    :width="``"
  >
    <header class="aside__header">
      <img
        class="aside__header__logo"
        src="./logo.png"
        width="32"
        height="32"
        alt="App logo"
      />
      <h1 class="aside__title">{{ $t('aside.header') }}</h1>
    </header>
    <el-menu
      class="aside__menu"
      :collapse="isAsideCollapse"
      :router="true"
      :collapse-transition="true"
      :unique-opened="true"
      :default-active="$route.path"
      :active-text-color="activeTextColor"
      :text-color="textColor"
      :backgroundColor="menuBackgroundColor"
    >
      <!-- recursive tree area -->
      <recursive-item
        v-for="route of routes"
        :key="route.path"
        :route="route"
        :basic-route="route.path"
      ></recursive-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import RecursiveItem from './Item'

export default {
  data() {
    return {
      activeTextColor: '#ffffff',
      textColor: '#ffffff',
      menuBackgroundColor: '#001529'
    }
  },
  computed: {
    ...mapState(['isAsideCollapse']),
    ...mapGetters('login', {
      routes: 'allRoutes'
    })
  },
  components: {
    RecursiveItem
  }
}
</script>

<style lang="scss" scoped>
@import '~STYLE/color/background.scss';
@import '~STYLE/color/font.scss';
@import '~STYLE/layout/aside.scss';

.layout__material__aside {
  min-height: 100vh;
  transition: width 0.3s;
  color: white;
  overflow-x: hidden !important; // 隐藏横向滚动条

  &.expand {
    width: $expand-width;
  }

  &.collapse {
    width: $collapse-width;
  }

  .aside {
    &__header {
      padding-left: 24px;
      background-color: #002140;
      overflow: hidden;
      line-height: 64px;
      height: 64px;

      &__logo {
        margin-right: 12px;
        vertical-align: middle;
      }
    }

    &__title {
      display: inline-block;
      margin: 0;
      vertical-align: middle;
      text-transform: capitalize;
      font-size: 20px;
      font-weight: 600;
      line-height: 60px;
    }

    &__menu {
      border: 0;
    }
  }
}

/deep/ .el-menu--collapse {
  width: auto;
}

/deep/ .el-submenu__title {
  &:hover,
  &:focus {
    background-color: $background-dark;
  }
}

/deep/ .el-menu-item {
  background-color: $background-dark;

  &:focus,
  &:hover {
    background-color: $background-dark;
  }

  // 当前激活路由背景色
  &.is-active {
    // 源 UI 样式为内联样式，故使用 important 提升权重
    color: $font-blue-50 !important;
  }
}
</style>
