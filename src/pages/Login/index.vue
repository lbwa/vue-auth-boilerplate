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
          >
            <i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            class="login__controller__submit"
            :loading="isLoading"
            >{{ $t('submitButton') }}</el-button
          >
        </el-form-item>
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

export default {
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      rules: createRules.call(this),
      isLoading: false
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
    ...mapActions('login', ['userLogout'])
  },

  created() {
    this.userLogout()
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
        submitButton: 'Login'
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
        submitButton: '登 陆'
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
      text-align: center
      text-transform: capitalize

  &__controller
    &__submit
      width: 100%

  &__footer
    .author__info
      margin: 0
      text-align: center
      line-height: 60px
</style>
