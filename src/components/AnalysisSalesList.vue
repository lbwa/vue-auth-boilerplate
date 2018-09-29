<template>
  <ul class="analysis__sales__list" v-if="salesList.length && colorSets.length">
    <li
      class="analysis__sales__list-item"
      v-for="(goods, index) of salesList"
      :key="goods.goods"
    >
      <span
        class="item__dot"
        :style="colorDot(index)"
      ></span>
      <h4 class="item__title">{{goods.goods}}</h4>
      <span class="item__divider"></span>
      <span class="item__percent">{{goods.percent}}</span>
      <span class="item__sales">{{goods.sales}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    salesList: {
      type: Array,
      default () {
        return [
          {
            goods: 'default goods',
            percent: 0.1,
            sales: 10000
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

  methods: {
    colorDot (index) {
      const colorSets = this.colorSets
      return index < colorSets.length
        ? `background-color: ${colorSets[index]}`
        : `background-color: ${colorSets[index - colorSets.length]}`
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
</style>
