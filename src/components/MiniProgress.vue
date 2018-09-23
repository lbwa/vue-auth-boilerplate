<template>
  <div class="progress-bar">
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

</style>
