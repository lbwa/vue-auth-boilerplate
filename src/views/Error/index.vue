<template>
  <div class="view-error">
    <div class="error__notify">
      <h2 class="error__notify__code">{{ code }}</h2>
      <div class="error__notify__message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',

  props: {
    code: {
      type: [Number, String],
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.view-error
  position: relative
  height: calc(100vh - 60px)

.error
  &__notify
    display: flex
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    justify-content: center
    align-items: center

    &__code, &__message
      padding: 0 20px

    &__code
      border-right: 1px solid currentColor
</style>
