<template>
  <transition name="fade" mode="out-in">
    <keep-alive :exclude="['form-step-index']">
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

</style>
