<template>
  <main class="login__page">
    <h1 class="login__header">
      <img class="header__logo" src="~STATIC/logo.png" width="40" alt="logo">
      <span class="header__content">{{ $t('login.title') }}</span>
    </h1>
    <!-- body -->
    <el-form
      class="login__form"
      :model="loginForm"
      ref="login"
      :rules="rules"
      status-icon
      v-loading.fullscreen.lock="loading"
      @keyup.enter.native="onSubmit"
    >
      <el-form-item prop="username">
        <el-input
          :placeholder="$t('login.placeholder.username')"
          v-model="loginForm.username"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :placeholder="$t('login.placeholder.password')"
          type="password"
          v-model="loginForm.password"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-message"></i>
        </el-input>
      </el-form-item>
    </el-form>
    <!-- body end -->
    <el-button type="primary" @click.stop="onSubmit">{{loginText}}</el-button>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      loginText: 'Log in',
      loginForm: {
        username: '',
        password: ''
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },

  methods: {
    onSubmit () {
      this.$refs.login.validate((valid) => {
        if (!valid) return false
        this.loading = true
        this.pushLogin({
          userInfo: this.loginForm,
          replace: this.$router.replace.bind(this.$router)
        })
          .finally(() => { this.loading = false }) // Do not forget close loading
      })
    },
    ...mapActions('login', [
      'pushLogin'
    ])
  }
}
</script>

<style lang="sass" scoped>
.login
  &__header
    text-transform: capitalize
    text-align: center
    transform: translateX(-10px)

.header
  &__logo
    margin-right: 16px
    vertical-align: top
</style>
