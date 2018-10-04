<template>
  <el-card class="workspace__team">
    <h2 class="workspace__team__title" slot="header">{{title}}</h2>
    <ul class="workspace__team__wrapper" v-if="teams.length">
      <li
        class="workspace__team__item"
        v-for="item of teams"
        :key="item.link"
      >
        <img
          :src="item.avatar"
          alt="team-avatar"
          class="workspace__team__avatar"
        >
        <router-link
          class="workspace__team__item-title"
          to="/dashboard/analysis"
        >{{item.name}}</router-link>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '团队'
    },
    teams: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/mixin.sass'

.workspace
  &__team
    margin-top: 24px
    +text-dot

    &__title
      margin: 0
      font-size: 16px
      font-weight: normal

    &__item-title
      +normalize-link
      margin-left: 12px
      line-height: 24px
      vertical-align: top

    &__wrapper
      display: flex
      flex-wrap: wrap
      padding: 0
      margin: 0
      list-style: none

    &__item
      flex-basis: 50%
      margin: 12px 0
      font-size: 0

    &__avatar
      width: 24px
      height: 24px
      border-radius: 50%
</style>
