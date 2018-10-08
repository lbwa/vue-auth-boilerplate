<template>
  <el-container class="admin__layout">
    <recursive-aside></recursive-aside>
    <el-container>
      <app-header @toggleAside="toggleAside"></app-header>

      <transition name="fade" mode="out-in">
        <keep-alive :exclude="['form-step-index']">
          <router-view class="main__wrapper"></router-view>
        </keep-alive>
      </transition>

      <el-footer class="footer__layout footer__font" height="100">
        <div class="footer__icon">
          <a
            href="https://github.com/lbwa/vue-design-pro"
            class="icon__link"
            target="_blank"
          >
            <svg height="1.2em" fill="rgba(0, 0, 0, 0.45)" class="octicon-mark" viewBox="0 0 16 16" width="1.2em" aria-hidden="true">
              <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
        <div class="author__info">
          Copyright &copy; {{currentYear}}
          <a
            href="https://github.com/lbwa"
            class="author"
            target="_blank"
          >Bowen</a>
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { mapMutations } from 'vuex'
import AppAside from 'COMPONENTS/App/Aside'
import RecursiveAside from 'COMPONENTS/App/RecursiveAside'
import AppHeader from 'COMPONENTS/App/Header'

export default {
  data () {
    return {}
  },

  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },

  methods: {
    ...mapMutations({
      toggleAside: 'TOGGLE_ASIDE'
    })
  },

  components: {
    AppAside,
    AppHeader,
    RecursiveAside
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/background.sass'
@import '~STYLE/color/hover.sass'

.admin
  &__layout
    min-height: 100vh
    background-color: $background-light

.footer
  &__layout
    padding: 20px 0
    background-color: $background-light
    text-align: center

  &__font
    color: rgba(0,0,0,.45)
    font-size: 14px

  &__icon
    margin-bottom: 8px
    padding-top: 10px

.author
  color: rgba(0,0,0,.45)
  font-weight: bold

  &:hover
    color: $hover-link

.main
  &__wrapper
    min-height: calc(100vh - 64px - 100px)
    overflow: hidden // remove scrollBar-x
</style>
