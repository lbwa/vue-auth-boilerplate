<template>
  <error-layout>
    <div class="error__avatar__layout" slot="main">
      <img
        class="error__avatar"
        :src="img"
        alt="error-img"
      >
    </div>
    <div slot="tips" class="error__tips">
      <h2 class="tips__status">{{status}}</h2>
      <h3 class="tips__info">{{info}}</h3>
      <el-button
        class="tips__button"
        type="primary"
      >{{text.tipsButton}}</el-button>
    </div>
  </error-layout>
</template>

<script>
import ErrorLayout from 'COMPONENTS/Error'

export default {
  props: {
    status: {
      type: Number,
      required: true
    },
    info: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      text: {
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
  &__avatar
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    &__layout
      position: relative
      height: 100%

  &__tips
    display: flex
    flex-direction: column
    justify-content: center
    margin-left: 150px
    height: 100%

.tips
  &__button
    width: 100px
</style>
