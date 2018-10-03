<template>
  <div class="activity__item">
    <span class="activity__item__avatar-wrapper">
      <img
        ref="avatar"
        src="~STATIC/user.png"
        alt="user-avatar"
        class="activity__item__avatar"
      >
    </span>
    <div class="activity__item__content">
      <h4
        class="activity__item__content-title"
      >{{user.name}}&nbsp;{{createActivity}}</h4>
      <time class="activity__item__update">4 小时前</time>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default () {
        return {
          name: 'Bowen',
          avatar: ''
        }
      }
    },
    updateAt: {
      type: Date | Number,
      default () {
        return +new Date()
      }
    },
    group: {
      type: Object,
      default () {
        return {
          name: 'Github',
          link: 'https://github.com/lbwa'
        }
      }
    },
    project: {
      type: Object,
      default () {
        return {
          name: 'Vue Design Pro',
          link: 'https://github.com/lbwa/vue-design-pro'
        }
      }
    },
    comment: {
      type: Object,
      default () {
        return {
          name: 'comments',
          link: 'https://github.com/lbwa/vue-design-pro'
        }
      }
    },
    template: {
      type: String,
      default: '在 @{group} 新建项目 @{project}'
    }
  },

  computed: {
    createActivity () {
      // return a new string, this.template should be immutable.
      return this.template.replace(/@\{([^{}]*)\}/gi, key => {
        if (key === '@{group}') return this.group.name
        if (key === '@{project}') return this.project.name
        if (key === '@{comment}') return this.comment.name
      })
    }
  },

  mounted () {
    if (this.user.avatar) this.$refs.avatar.src = this.user.avatar
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/border.sass'

.activity
  &__item
    padding: 16px 0

    &:not(:last-child)
      border-bottom: 1px solid $border-light

    &__avatar-wrapper
      display: inline-block
      margin-right: 16px
      height: 32px
      width: 32px
      vertical-align: top

    &__avatar
      width: 32px
      height: 32px

    &__content
      display: inline-block

    &__content-title
      margin: 0 0 4px 0
      line-height: 22px
      color: rgba(0,0,0,.65)
      font-weight: 400

    &__update
      color: rgba(0,0,0,.25)
</style>
