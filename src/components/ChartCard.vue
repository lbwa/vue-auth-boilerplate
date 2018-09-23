<template>
  <el-card class="chart-card">
    <header class="card__header">
      <h1 class="card__title">{{cardHeader}}</h1>
      <p class="card__total">{{cardTotal}}</p>
    </header>
    <slot></slot>
    <card-footer>
      <span slot="title">{{footerTitle}}</span>
      <span slot="detail">{{footerDetail}}</span>
    </card-footer>
  </el-card>
</template>

<script>
import CardFooter from './CardFooter'

export default {
  props: {
    cardHeader: {
      type: String,
      default: 'card header'
    },
    cardTotal: {
      type: String | Number,
      default: 'card main'
    },
    footerTitle: {
      type: String,
      default: 'footer title'
    },

    footerDetail: {
      type: String | Number,
      default: 'footer details'
    }
  },

  components: {
    CardFooter
  }
}
</script>

<style lang="sass" scoped>
@import 'STYLE/mixin.sass'

.card
  &__title
    margin: 0
    color: rgba(0,0,0,.45)
    font-size: 14px
    height: 22px
    line-height: 22px

  &__total
    margin-top: 4px
    margin-bottom: 0
    height: 38px
    line-height: 38px
    color: rgba(0,0,0,.85)
    font-size: 30px
    word-break: break-all
    +text-dot
</style>
