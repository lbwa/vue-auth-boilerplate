<template>
  <div class="step-form__container">
    <main-form
      :text="btnText"
    ></main-form>
    <div class="info__form__divider"></div>
    <div class="info__form__description">
      <h2 class="description__title">{{description.title}}</h2>
      <p class="description__main">{{description.main}}</p>
    </div>
  </div>
</template>

<script>
import MainForm from 'COMPONENTS/Form/Basic/MainForm'

export default {
  props: {
    btnText: {
      type: String,
      default: '下一步'
    }
  },

  data () {
    return {
      description: {
        title: '说明',
        main: '如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。'
      }
    }
  },

  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'info')
    }
  },

  created () {
    this.updateBreadcrumb()
  },

  components: {
    MainForm
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/border.sass'
@import '~STYLE/color/font.sass'

.info
  &__form
    margin: 40px auto 0
    max-width: 500px

    &__divider
      margin: 40px 0px 24px
      height: 1px
      width: 100%
      background-color: $border-light

    &__description
      padding: 0 56px
      color: $font-d-45

.description
  &__title
    font-size: 16px
    margin: 0 0 12px
    color: $font-d-45
    line-height: 32px
</style>
