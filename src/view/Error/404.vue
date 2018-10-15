<template>
  <error-layout>
    <img
      class="error__avatar"
      src="~STATIC/animation.gif"
      alt="error-img"
      slot="main">
    <div slot="tips" class="error__tips">
      <h2 class="tips__title">{{text.title}}</h2>
      <el-button class="tips__button">{{text.tipsButton}}</el-button>
    </div>
  </error-layout>
</template>

<script>
import ErrorLayout from 'COMPONENTS/Error'

export default {
  data () {
    return {
      text: {
        title: '啊哦，页面找不到了',
        tipsButton: '返回首页'
      }
    }
  },
  components: {
    ErrorLayout
  }
}
</script>

<style lang="sass" scoped>
.error
  &__tips
    display: flex
    flex-direction: column
    justify-content: center
    height: 100%

.tips
  &__button
    width: 100px
</style>
