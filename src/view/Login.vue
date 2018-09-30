<template>
  <section class="login">
    <h1 class="login__title">{{title}}</h1>
    <router-link to="/dashboard/analysis">to analysis</router-link>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Login page'
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
