<template>
  <div class="common__user">
    Current route is <strong>{{ $route.path }}</strong
    >.
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: 'this is /pages/common/user'
    }
  }
}
</script>
<style lang="scss" scoped></style>
