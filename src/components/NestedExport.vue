<template>
  <transition name="fade" mode="out-in">
    <keep-alive :exclude="noCachedList">
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      noCachedList: [
        'form-step-index'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
