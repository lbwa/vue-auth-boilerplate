<template>
  <ul class="tab__rank">
    <li
      v-for="(item, index) of rankList"
      :key="item.name"
    >
      <span
        :class="[
          'rank__icon',
          index < 2 /* start from zero */ ? 'icon__dark' : 'icon__light']"
      >{{index + 1}}</span>
      <span class="rank__name">{{item.name}}</span>
      <span class="rank__value">{{decimalNumber(item.value)}}</span>
    </li>
  </ul>
</template>

<script>
import { decimalNumber } from './utils'

export default {
  props: {
    rankList: {
      type: Array,
      default () {
        return [
          {
            name: 'sample name',
            value: 100000
          }
        ]
      }
    }
  },

  methods: {
    decimalNumber (value) {
      return decimalNumber(value)
    }
  }
}
</script>

<style lang="sass" scoped>
.tab
  &__rank
    list-style-type: none
    margin-top: 25px
    padding: 0

.rank
  &__icon
    display: inline-block
    margin-right: 16px
    width: 20px
    height: 20px
    line-height: 20px
    border-radius: 20px
    font-size: 12px
    text-align: center

  &__value
    float: right

.icon
  &__dark
    color: white
    font-weight: 600
    background-color: #314659

  &__light
    background-color: #f5f5f5
</style>
