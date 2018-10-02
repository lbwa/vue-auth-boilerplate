<template>
  <el-card
    class="projects__item"
    :shadow="shadow"
    :body-style="bodyStyle"
  >
    <header class="projects__item__header">
      <img
        src="~STATIC/user.png"
        alt="projects-avatar"
        class="projects__item__avatar"
        ref="avatar"
      >
      <router-link
        class="projects__item__title projects__item__inner-link"
        :to="link"
      >{{title}}</router-link>
    </header>
    <div class="projects__item__description">{{description}}</div>
    <footer class="projects__item__author">
      <router-link
        class="projects__author__link projects__item__inner-link"
        :to="author.link"
      >{{author.name}}</router-link>
      <time class="projects__item__time">{{createTime}}</time>
    </footer>
  </el-card>
</template>

<script>
export default {
  props: {
    shadow: {
      type: String,
      default: 'hover'
    },
    bodyStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    avatarSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'default project'
    },
    link: {
      type: String,
      default: '/dashboard/analysis'
    },
    description: {
      type: String,
      default: 'this is project\'s description'
    },
    author: {
      type: Object,
      default () {
        return {
          name: 'default name',
          link: '/dashboard/analysis'
        }
      }
    },
    time: {
      type: Number,
      default: +new Date() - 10000
    }
  },

  computed: {
    createTime () {
      // Simply logic, not production implementation
      const period = ((new Date() - this.time) / 1000).toFixed(0)
      return `${period} 秒前`
    }
  },

  mounted () {
    if (this.avatarSrc) this.$refs.avatar.src = this.avatarSrc
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/hover.sass'
@import '~STYLE/mixin.sass'

.projects
  &__item
    width: 33.33%
    color: rgba(0, 0, 0, .45)

    &__inner-link
      line-height: 24px
      height: 24px
      vertical-align: top
      +normalize-link

    &__header
      font-size: 0
      margin-bottom: 8px
      +text-dot

    &__avatar
      width: 24px
      height: 24px
      border-radius: 100%

    &__title
      margin-left: 12px

    &__description
      height: 44px
      line-height: 22px
      overflow: hidden

    &__author
      display: flex
      justify-content: space-between

  &__author__link
    color: rgba(0, 0, 0, .45)
</style>
