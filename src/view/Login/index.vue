<template>
  <main class="login__page">
    <h1 class="login__header">
      <img class="header__logo" src="~STATIC/logo.png" width="40" alt="logo">
      <span class="header__content">{{title}}</span>
    </h1>
    <!-- body -->
    <el-form
      class="login__form"
      :model="loginForm"
      ref="login"
      :rules="rules"
      status-icon
    >
      <el-form-item prop="user">
        <el-input
          placeholder="Username: admin"
          v-model="loginForm.user"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="Password: pro"
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
import { validateUsername, validatePassword } from './validator'

export default {
  data () {
    return {
      title: 'vue design pro',
      loginText: 'Log in',
      loginForm: {
        user: '',
        password: ''
      },
      rules: {
        user: [
          {
            // Set `this` value into vueComponent
            validator: validateUsername.bind(this),
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: validatePassword.bind(this),
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
        // `POST` to server
        return valid ? this.$router.push('/dashboard/analysis') : false
      })
    }
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
