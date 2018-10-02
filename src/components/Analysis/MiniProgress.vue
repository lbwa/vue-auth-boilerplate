<template>
  <div class="progress-bar">
    <div
      class="progress__pointer__layout"
      :style="`left: ${formatPercentage + 2}%`"
    >
      <span
        class="pointer__top"
        :style="`background-color: ${color}`"
      ></span>
      <span
        class="pointer__bottom"
        :style="`background-color: ${color}`"
      ></span>
    </div>

    <el-progress
      :percentage="formatPercentage"
      :stroke-width="strokeWidth"
      :color="color"
      :show-text="showText"
    ></el-progress>
  </div>
</template>

<script>
export default {
  props: {
    showText: {
      type: Boolean,
      default: false
    },
    strokeWidth: {
      type: Number,
      default: 8
    },
    percentage: {
      type: Number,
      default: 80
    },
    color: {
      type: String,
      default: 'rgb(19, 194, 194)'
    }
  },

  computed: {
    formatPercentage () {
      const percentage = this.percentage
      return percentage < 1 ? percentage * 100 : percentage
    }
  }
}
</script>

<style lang="sass" scoped>
.progress
  &__inner__layout
    position: relative
    width: 100%

  &__pointer__layout
    position: absolute
    top: 0
    bottom: 0

.pointer
  &__top, &__bottom
    position: absolute
    left: 0
    width: 2px
    height: 4px

  &__top
    top: 0

  &__bottom
    bottom: 0
</style>
