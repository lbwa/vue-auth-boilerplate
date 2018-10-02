<template>
  <el-card
    class="analysis__middle__card"
    :shadow="shadow"
    :body-style="calcBodyStyle"
  >
    <header class="card__header">
      <h3 class="card__title">{{title}}</h3>
      <el-tooltip
        class="card__tooltip"
        :content="tooltip"
        placement="top"
      >
        <i class="el-icon-info card__tooltip-icon__layout"></i>
      </el-tooltip>
    </header>

    <div class="card__highlight__wrapper">
      <p class="card__highlight">{{decimalNumber(highlight)}}</p>
      <div class="card__trend">
        <span class="card__trend__value">{{normalizePercentage(trend)}}</span>
        <i v-if="trend !== 0" :class="trendIcon()"></i>
      </div>
    </div>

    <div class="cart__chart">
      <slot name="chart"></slot>
    </div>
  </el-card>
</template>

<script>
import { toKebabCase, decimalNumber } from 'COMPONENTS//utils'
import Trend from 'COMPONENTS/Trend'

export default {
  mixins: [{
    methods: {
      decimalNumber
    }
  }],
  props: {
    shadow: {
      type: String,
      default: 'always'
    },
    bodyStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    title: {
      type: String,
      default: 'sample title'
    },
    tooltip: {
      type: String,
      default: 'default text'
    },
    highlight: {
      type: String | Number,
      default: 'default value'
    },
    trend: {
      type: Number,
      default: 0
    }
  },

  methods: {
    trendIcon () {
      if (this.trend === 0) return ''
      return this.trend > 0
        ? 'el-icon-caret-top red-icon'
        : 'el-icon-caret-bottom green-icon'
    },
    normalizePercentage (value) {
      value = Math.abs(value)
      value = value <= 1 ? value * 100 : value
      return value.toString().substring(0, 4)
    }
  },

  computed: {
    calcBodyStyle () {
      const style = this.bodyStyle
      let styleString = ''
      Object.keys(this.bodyStyle).forEach(key => {
        styleString += `${toKebabCase(key)}:${style[key]};`
      })
      return styleString
    }
  },

  components: {
    Trend
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/mixin.sass'

.analysis__middle__card.el-card
  border: 0

  .el-card__body
    margin-bottom: 24px

.card
  &__highlight
    display: inline-block
    margin: 0 24px 0 0
    font-size: 24px
    color: rgba(0,0,0,.85)

    &__wrapper
      margin-top: 8px
      height: 32px
      line-height: 32px

  &__title
    display: inline-block
    margin: 0
    height: 22px
    line-height: 22px
    font-size: 14px
    color: rgba(0,0,0,.45)
    word-break: break-all
    +text-dot

  &__tooltip-icon__layout
    margin-left: 8px
    vertical-align: super

  &__trend
    display: inline-block
    vertical-align: top
    height: 32px
    line-height: 32px
    font-size: 16px
    color: rgba(0,0,0,.45)

.red-icon
  color: red

.green-icon
  color: green
</style>
