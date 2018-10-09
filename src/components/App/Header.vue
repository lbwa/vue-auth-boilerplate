<template>
  <el-header class="header" :height="height">
    <i
      class="el-icon-menu header__icon"
      @click="toggleAside"
    ></i>
    <div class="header__info header__info__align">
      <el-switch
        style="display: block"
        v-model="isAdmin"
        :active-color="activeColor"
        :inactive-color="inactiveColor"
        active-text="admin"
        inactive-text="user">
      </el-switch>
      <el-tooltip
        effect="dark"
        content="Source code"
        placement="bottom"
      >
        <a
          href="https://github.com/lbwa/vue-design-pro"
          class="info__icon__align info__icon__gutter"
          target="_blank"
        >
          <i class="el-icon-question"></i>
        </a>
      </el-tooltip>
      <div class="info__icon__align info__icon__gutter">
        <header-popover>
          <el-badge
            class="info__dot__face"
            slot="reference"
            :value="12"
          >
            <i class="el-icon-bell"></i>
          </el-badge>
        </header-popover>
      </div>
    </div>
  </el-header>
</template>

<script>
import HeaderPopover from 'COMPONENTS/App/HeaderPopover'
import { mapActions } from 'vuex'

export default {
  props: {
    height: {
      type: String,
      default: '64px'
    }
  },

  data () {
    return {
      isAdmin: true,
      activeColor: '#13ce66',
      inactiveColor: '#3273dc'
    }
  },

  computed: {
    currentRole () {
      return this.isAdmin ? 'admin' : 'user'
    }
  },

  methods: {
    toggleAside () {
      this.$emit('toggleAside')
    },
    toggleUserRole () {
      this.createExtraRoutes({ role: [this.currentRole] })
    },
    ...mapActions('login', [
      'createExtraRoutes'
    ])
  },

  watch: {
    'currentRole': 'toggleUserRole'
  },

  components: {
    HeaderPopover
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/background.sass'
@import '~STYLE/color/hover.sass'

.header
  padding: 0 24px 0 0
  position: relative // for box-shadow
  background-color: $background-lightest
  box-shadow: 0 1px 4px rgba(0,21,41,.08)

  &__icon
    padding: 0 24px
    line-height: 64px
    cursor: pointer
    font-size: 20px
    transition: all .3s, padding 0s

  &__info
    float: right
    padding: 0 12px
    height: 100%
    vertical-align: middle

    &__align
      display: flex
      align-items: center

.info__icon

  &__align
    display: flex
    align-items: center
    height: 100%
    cursor: pointer
    text-decoration: none

    .el-icon-question
      color: rgba(0,0,0,.65)

    &:hover
      background-color: $hover-light

  &__gutter
    padding: 0 12px
</style>
