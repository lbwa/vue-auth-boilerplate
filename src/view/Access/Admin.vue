<template>
  <el-main class="access__admin">
    {{info}}
  </el-main>
</template>

<script>
export default {
  data () {
    return {
      info: 'access__admin: This page only work with `admin` role.'
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
