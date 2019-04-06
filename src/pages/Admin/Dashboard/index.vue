<template>
  <div class="admin__dashboard">
    Current routes is <strong>{{ $route.path }}</strong
    >.
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: 'this is /pages/admin/dashboard'
    }
  }
}
</script>
<style lang="scss" scoped></style>
