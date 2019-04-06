<template>
  <el-container
    :class="[
      'layout__material',
      isAsideCollapse ? 'collapse-aside' : 'expand-aside'
    ]"
  >
    <!-- Dynamic aside rendering area -->
    <el-scrollbar
      wrap-class="scrollbar-wrapper"
      class="layout__material__aside-placeholder"
    >
      <material-aside />
    </el-scrollbar>

    <el-container class="layout__material__placeholder">
      <material-header />

      <el-main class="layout__material__placeholder-main">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </el-main>

      <el-footer class="layout__material__footer">
        <page-footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import MaterialHeader from './Header'
import MaterialAside from './Aside'
import PageFooter from 'COMPONENTS/PageFooter'
import { mapState } from 'vuex'

export default {
  name: 'LayoutMaterial',

  computed: {
    ...mapState(['isAsideCollapse'])
  },

  components: {
    MaterialHeader,
    MaterialAside,
    PageFooter
  }
}
</script>

<style lang="scss" scoped>
@import '~STYLE/color/background.scss';
@import '~STYLE/layout/aside.scss';
@import '~STYLE/transition/aside.scss';

.layout__material {
  &__aside {
    &-placeholder {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1200;
    }
  }

  &__placeholder {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: margin $aside-transition-time;

    &-main {
      flex: 1;
    }
  }

  &__footer {
    line-height: 60px;
    text-align: center;
  }
}

.collapse-aside {
  .layout__material__placeholder {
    margin-left: $collapse-width;
  }
}

.expand-aside {
  .layout__material__placeholder {
    margin-left: $expand-width;
  }
}

/deep/ .scrollbar-wrapper {
  overflow-x: hidden !important; // 隐藏横向滚动条
  background-color: $background-dark;
}
</style>
