<template>
  <el-card class="analysis__middle">
    <header class="middle__header" slot="header">
      <span class="middle__header__title">{{title}}</span>
      <el-dropdown class="middle__header__icon">
        <el-button style="padding: 3px 0" type="text">...</el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>操作一</el-dropdown-item>
          <el-dropdown-item>操作二</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </header>

    <main class="analysis__middle__main">
      <slot></slot>
    </main>

    <div class="analysis__middle__table">
      <slot name="table"></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'default title'
    }
  }
}
</script>

<style lang="sass" scoped>

.analysis
  &__middle
    margin-top: 24px

.middle
  &__header
    display: flex
    align-items: center

    &__icon
      margin-left: auto

</style>
