<template>
  <section class="dashboard">
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.dashboard
  min-height: calc(100vh - 60px * 2)
  background-color: #f0f2f5
</style>
