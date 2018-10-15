<template>
  <main class="root__error">
    <div class="error__main__layout">
      <slot name="main"></slot>
    </div>
    <div class="error__tips__layout">
      <slot name="tips"></slot>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.root
  &__error
    display: flex

.error
  &__main, &__tips
    &__layout
      flex: 1
</style>
