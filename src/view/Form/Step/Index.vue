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
  data () {
    return {
      info: 'basic info',
      links: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '表单页',
          path: ''
        },
        {
          name: '分步表单',
          path: ''
        }
      ],
      title: '分步表单',
      description: '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。',
      stepTitles: [
        '填写转账信息',
        '确认转账信息',
        '完成'
      ],
      activeSteps: 1 // min value should be 1, means it has activated first step
    }
  },

  methods: {
    updateBreadcrumb (newTab) {
      switch (newTab) {
        case 'info':
          this.updateLinks({
            name: '分步表单（填写转账信息）',
            path: ''
          })
          this.activeSteps = 1
          break

        case 'confirm':
          this.updateLinks({
            name: '分步表单（确认转账信息）',
            path: ''
          })
          this.activeSteps = 2
          break

        case 'success':
          this.updateLinks({
            name: '分步表单（完成）',
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
