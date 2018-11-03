<template>
  <el-main class="form">
    <form-header
      :links="links"
      :title="title"
      :description="description"
    />
    <el-card class="form__item__wrapper">
      <el-steps class="form__item__progress" :active="activeSteps" align-center>
        <el-step
          v-for="item of stepTitles"
          :key="item"
          :title="item"
        ></el-step>
      </el-steps>
      <!-- nested routes -->
      <transition name="form-fade" mode="out-in">
        <router-view @updateBreadcrumb="updateBreadcrumb"></router-view>
      </transition>
    </el-card>
  </el-main>
</template>

<script>
import FormHeader from 'COMPONENTS/Form/Header'

export default {
  /**
   * `name` option for /layout/Admin <keep-alive> exclude
   * https://cn.vuejs.org/v2/api/#keep-alive
   * !
   * BUG: 一级路由组件被缓存时，将导致其内部的 nested route 一并被缓存，那么在一级组
   * 件再次激活时将保留之前匹配的嵌套路由组件，而非现在路由匹配下的正确嵌套路由组件
   * !
   * reproduce: /form/step/非 info 值下，切换其他一级路由再切换回来，nested 匹配组
   * 件非默认 info 组件（匹配正确的组件），而是被缓存的之前的嵌套路由组件
   */
  name: 'form-step-index',

  data () {
    return {
      info: 'basic info',
      links: [
        {
          name: this.$t('form.step.label.linksHome'),
          path: '/'
        },
        {
          name: this.$t('form.step.label.linksForm'),
          path: ''
        },
        {
          name: this.$t('form.step.label.linksStep'),
          path: ''
        }
      ],
      title: this.$t('form.step.label.linksStep'),
      description: this.$t('form.step.description'),
      stepTitles: [
        this.$t('form.step.stepTitle.write'),
        this.$t('form.step.stepTitle.confirm'),
        this.$t('form.step.stepTitle.complete')
      ],
      activeSteps: 1 // min value should be 1, means it has activated first step
    }
  },

  methods: {
    updateBreadcrumb (newTab) {
      switch (newTab) {
        case 'info':
          this.updateLinks({
            name: this.$t('form.step.combineStepTitle.write'),
            path: ''
          })
          this.activeSteps = 1
          break

        case 'confirm':
          this.updateLinks({
            name: this.$t('form.step.combineStepTitle.confirm'),
            path: ''
          })
          this.activeSteps = 2
          break

        case 'success':
          this.updateLinks({
            name: this.$t('form.step.combineStepTitle.complete'),
            path: ''
          })
          this.activeSteps = 3
          break
      }
    },

    updateLinks (newTab) {
      this.links.length === 3
        ? this.links.push(newTab)
        : this.links.splice(this.links.length - 1, 1, newTab)
    }
  },

  components: {
    FormHeader
  }
}
</script>

<style lang="sass" scoped>

.form
  &__item
    &__wrapper
      margin-top: 24px

    &__progress
      max-width: 1080px
      margin: 16px auto

  &-fade
    &-enter
      opacity: 0
      transform: translateX(-5%)

    &-leave-to
      opacity: 0
      transform: translateX(5%)

    &-enter-active, &-leave-active
      transition: opacity .3s, transform .3s
</style>
