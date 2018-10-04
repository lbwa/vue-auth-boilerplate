<template>
  <div class="form__header">
    <page-header :links="links" class="clearfix">
      <h2 class="form__title">{{title}}</h2>
      <p class="form__description">{{description}}</p>
    </page-header>
  </div>
</template>

<script>
import PageHeader from 'COMPONENTS/PageHeader'

export default {
  props: {
    links: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },

  components: {
    PageHeader
  }
}
</script>

<style lang="sass" scoped>
.form
  &__title
    margin: 0 0 16px
    font-size: 20px
    font-weight: normal
    line-height: 1.5
    color: rgba(0,0,0,.85)

  &__description
    margin: 0 0 16px
    line-height: 1.5

.clearfix
  overflow: hidden // bfc
</style>
