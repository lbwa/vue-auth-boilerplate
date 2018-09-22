<template>
  <router-view class="main__wrapper"></router-view>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.main__wrapper
  min-height: calc(100vh - 60px * 2)
  background-color: #f0f2f5
</style>
