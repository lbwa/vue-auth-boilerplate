<template>
  <ul class="analysis__sales__list" v-if="salesList.length && colorSets.length">
    <li
      class="analysis__sales__list-item"
      v-for="(goods, index) of salesList"
      :key="goods.name"
    >
      <span
        class="item__dot"
        :style="colorDot(index)"
      ></span>
      <h4 class="item__title">{{goods.name}}</h4>
      <span class="item__divider"></span>
      <span class="item__percent">{{percentValue(goods.percent)}}</span>
      <span class="item__sales">{{formatPrice(goods.value)}}</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatPrice, percentValue } from 'COMPONENTS/utils'

export default {
  mixins: [{
    methods: {
      formatPrice,
      percentValue
    }
  }],

  props: {
    salesList: {
      type: Array,
      default () {
        return [
          {
            name: 'default',
            value: 10000,
            percent: 0.1
          }
        ]
      }
    },
    colorSets: {
      type: Array,
      default () {
        return [
          'rgb(24, 144, 255)',
          'rgb(19, 194, 194)',
          'rgb(47, 194, 91)',
          'rgb(250, 204, 20)',
          'rgb(240, 72, 100)',
          'rgb(133, 67, 224)'
        ]
      }
    }
  },

  computed: {
    ...mapGetters('analysis', {
      allSales: 'getAllSalesType',
      onlineSales: 'getOnlineSalesType',
      offlineSales: 'getOfflineSalesType'
    })
  },

  methods: {
    colorDot (index) {
      const colorSets = this.colorSets
      const len = colorSets.length
      return index < colorSets.length
        ? `background-color: ${colorSets[index]}`
        : `background-color: ${colorSets[index % (len === 0 ? 1 : len)]}`
    }
  }
}
</script>

<style lang="sass" scoped>
.analysis__sales
  &__list
    margin: 0
    padding: 0
    list-style: none

  &__list-item
    font-size: 0
    color: rgba(0,0,0,.65)

    &:not(:last-child)
      margin-bottom: 16px

.item
  &__dot
    display: inline-block
    margin-right: 8px
    border-radius: 8px
    height: 8px
    width: 8px

  &__title
    display: inline-block
    margin: 0
    font-size: 14px
    font-weight: normal

  &__divider
    display: inline-block
    margin: 0 8px
    height: 0.9em
    width: 1px
    vertical-align: baseline
    background-color: #e8e8e8
    font-size: 14px

  &__percent
    color: rgba(0,0,0,.45)
    font-size: 14px

  &__sales
    float: right
    font-size: 14px
</style>
