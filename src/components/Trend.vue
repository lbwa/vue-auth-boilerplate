<template>
  <div class="trend">
    <div :class="hasAbsolute ? 'trend__wrapper' : ''">
      <div
        class="trend__item"
        v-for="item of trend"
        :key="item.key"
      >
        <span class="item__title">{{item.key}}</span>
        <span class="item__value">{{formatTrendValue(item.value)}}</span>
        <i v-if="item.value !==0" :class="trendIcon(item.value)"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trend: {
      type: Array,
      default () {
        return [
          {
            key: 'sample 1',
            value: 0.12
          },
          {
            key: 'sample 2',
            value: -0.11
          }
        ]
      }
    },
    hasAbsolute: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    trendIcon (value) {
      if (value === 0) return
      return value > 0 ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
    },

    formatTrendValue (value) {
      return `${value * 100}`.replace(/^-/, '') + '%'
    }
  }
}
</script>

<style lang="sass" scoped>

.trend
  width: 100%

  &__wrapper
    position: absolute
    left: 0
    bottom: 0

  &__item
    display: inline-block
    font-size: 14px
    line-height: 22px

    &:not(:last-child)
      margin-right: 16px

.item__value
  margin-left: 8px
</style>
