<template>
  <ul class="tab__rank" v-if="rankList && rankList.length > 6">
    <li
      class="tab__rank-item"
      v-for="(item, index) of rankList"
      :key="item.name"
    >
      <span
        :class="[
          'rank__icon',
          index < 3 /* start from zero */ ? 'icon__dark' : 'icon__light']"
      >{{index + 1}}</span>
      <span class="rank__name">{{item.name}}</span>
      <span class="rank__value">{{decimalNumber(item.value)}}</span>
    </li>
  </ul>
</template>

<script>
import { decimalNumber } from './utils'
import { mapState } from 'vuex'

export default {
  mixins: [{
    methods: {
      decimalNumber
    }
  }],

  computed: {
    ...mapState('analysis', [
      'rankList'
    ])
  }
}
</script>

<style lang="sass" scoped>
.tab
  &__rank
    list-style-type: none
    padding: 0 32px 32px 72px
    margin-top: 25px
    color: rgba(0,0,0,.65)

  &__rank-item
    margin-top: 16px

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
