<template>
  <section class="login__layout login__align">
    <!-- header -->
    <router-view class="login__main"></router-view>
    <!-- footer -->
    <login-footer class="login__footer"></login-footer>
  </section>
</template>

<script>
import LoginFooter from 'COMPONENTS/App/Footer'
export default {
  components: {
    LoginFooter
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/background.sass'

.login
  &__layout
    min-height: 100vh
    background-color: $background-light

  &__align
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

  &__main
    flex-basis: calc(100vh - 95px)
    display: flex
    flex-direction: column
    justify-content: center

</style>
