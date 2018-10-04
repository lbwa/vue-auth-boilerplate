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
      v-loading.fullscreen.lock="loading"
      @keyup.enter.native="onSubmit"
    >
      <el-form-item prop="username">
        <el-input
          placeholder="Username: admin"
          v-model="loginForm.username"
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
import { userLogin } from 'SERVICES'

export default {
  data () {
    return {
      title: 'vue design pro',
      loginText: 'Log in',
      loginForm: {
        username: '',
        password: ''
      },
      loading: false,
      rules: {
        username: [
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
            trigger: 'change'
          }
        ]
      }
    }
  },

  methods: {
    onSubmit () {
      this.$refs.login.validate((valid) => {
        if (!valid) return false
        // `POST` to server, and activate loading animation
        // check `errno` from response data, 0 to route, 1 to return false

        this.loading = true
        userLogin({
          username: this.loginForm.username,
          password: this.loginForm.password
        })
          .then(res => {
            const data = res.data
            if (data.errno !== 0) {
              console.error(`[${res.status}]: 验证失败`)
              this.$message({
                showClose: true,
                message: '用户名或密码错误',
                type: 'error'
              })
              this.loading = false

              return
            }
            this.$message({
              showClose: true,
              message: '登陆成功',
              type: 'success'
            })
            if (!window.localStorage) return
            window.localStorage.setItem('__vue_design_pro__', res.data.token)

            this.loading = false

            this.$router.replace('/dashboard/analysis')
          })
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
