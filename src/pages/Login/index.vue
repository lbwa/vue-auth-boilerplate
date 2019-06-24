<template>
  <section class="login">
    <div class="locator">
      <el-form
        class="login__form"
        label-position="right"
        :model="userInfo"
        :rules="rules"
        ref="login"
        status-icon
        @keyup.enter.native="onSubmit"
      >
        <h1 class="login__form__title">{{ $t('header') }}</h1>
        <el-form-item prop="username">
          <el-input
            v-model="userInfo.username"
            :placeholder="$t('placeholder.username')"
            clearable
          >
            <i slot="prefix" class="el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="userInfo.password"
            :placeholder="$t('placeholder.password')"
            type="password"
            clearable
            show-password
          >
            <i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>

        <el-button
          type="primary"
          @click="onSubmit"
          class="login__controller__submit"
          :loading="isLoading"
          >{{ $t('submitButton') }}</el-button
        >

        <div class="login__account">
          <el-button
            class="login__account__item"
            size="mini"
            type="text"
            @click="asDefault('admin')"
            >{{ $t('asAdmin') }}</el-button
          >
          <el-button
            class="login__account__item"
            size="mini"
            type="text"
            @click="asDefault('user')"
            >{{ $t('asUser') }}</el-button
          >
        </div>
        <div class="git">
          <span v-if="lastCommit.author"
            >{{ $t('latestCommit') }}:&nbsp;<a
              class="git__info"
              href="https://github.com/lbwa/adminize-template"
              target="_blank"
              >{{ lastCommit.author.date | formatDate }}</a
            ></span
          >
          <span v-if="lastRelease"
            >{{ $t('latestRelease') }}:&nbsp;<a
              class="git__info"
              href="https://github.com/lbwa/adminize-template/releases"
              target="_blank"
              >{{ lastRelease.tag_name }}</a
            ></span
          >
        </div>
      </el-form>
    </div>
    <el-footer class="login__footer">
      <page-footer />
    </el-footer>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import PageFooter from 'COMPONENTS/PageFooter'
import createRules from './rules'
import { fetchCommitList, fetchLastRelease } from 'API'
import { formatDate } from 'UTILS'

export default {
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      rules: createRules.call(this),
      isLoading: false,
      lastCommit: {},
      lastRelease: null
    }
  },

  methods: {
    async onSubmit() {
      try {
        this.switchLoading(true)
        await this.$refs.login.validate()
        // This action has included routes replacement
        // dispatch() will return a Promise instance
        await this.$store.dispatch('login/userLogin', {
          ...this.userInfo,
          vm: this
        })
        this.switchLoading(false)
      } catch (err) {
        console.error('[Login form]: validate failed !', err)
        this.switchLoading(false)
      }
    },
    switchLoading(state) {
      this.isLoading = state
    },
    asDefault(type = 'admin') {
      this.userInfo.username = type
      this.userInfo.password = type
    },
    ...mapActions('login', ['userLogout'])
  },

  filters: {
    formatDate
  },

  async created() {
    this.userLogout()

    try {
      const promiseCommitList = fetchCommitList()
      const promiseLastRelease = fetchLastRelease()

      const [lastCommit] = await promiseCommitList
      this.lastRelease = await promiseLastRelease
      this.lastCommit = lastCommit.commit
    } catch (err) {
      console.error(err)
      this.$_plugins_message.error('Fetching release info failed !')
    }
  },

  components: {
    PageFooter
  },

  i18n: {
    messages: {
      en: {
        header: 'Adminize console',
        placeholder: {
          username: 'Username',
          password: 'Password'
        },
        tips: {
          username: 'Username is required.',
          password: 'Password is required.'
        },
        submitButton: 'Login',
        asAdmin: 'as admin',
        asUser: 'as user',
        latestCommit: 'Latest commit',
        latestRelease: 'Latest release'
      },
      zh: {
        header: 'Adminize console',
        placeholder: {
          username: '用户名',
          password: '密码'
        },
        tips: {
          username: '请输入正确的用户名',
          password: '请输入正确的密码'
        },
        submitButton: '登 录',
        asAdmin: '管理员登录',
        asUser: '用户登录',
        latestCommit: '最新提交',
        latestRelease: '最新发布'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.layout__login
  min-height: 100vh

.login
  background-color: $main-dark
  background-position: center center
  background-size: cover

  .locator
    position: relative
    height: calc(100vh - 60px)

  &__form
    display: flex
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    flex-direction: column
    justify-content: center
    margin: 0 auto
    padding: 1.25rem
    width: 25rem
    background-color: white
    border-radius: 5px

    &__title
      margin-top: 0
      text-align: center
      text-transform: capitalize

    .git
      display: flex
      justify-content: space-between
      font-size: $fz-sub
      color: $font-tips
      text-transform: capitalize

      &__info
        display: inline-block
        margin-top: 5px
        +normalize-link
        font-size: $fz-sub

  &__controller
    &__submit
      width: 100%

  &__account
    margin: 10px 0 0

    &__item
      text-transform: uppercase

  &__footer
    .author__info
      margin: 0
      text-align: center
      line-height: 60px
</style>
