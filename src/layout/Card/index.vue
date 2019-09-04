<template functional>
  <div class="adminize-card"><slot></slot></div>
</template>

<script>
export default {
  name: 'LayoutCard'
}
</script>

<style lang="sass" scoped>
.adminize-card
  padding: $fz-content
  border-radius: $border-radius
  box-shadow: $box-shadow
</style>
