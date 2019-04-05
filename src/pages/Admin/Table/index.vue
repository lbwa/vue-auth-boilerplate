<template>
  <div class="admin__table">
    Current route is <strong>{{$route.path}}</strong>.
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: 'this is /pages/admin/table'
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
