<template>
  <section class="login">
    <el-form
      class="login__form"
      label-position="right"
      :model="userInfo"
      :rules="rules"
      ref="login"
      status-icon
      @keyup.enter.native="onSubmit"
    >
      <h1 class="login__form__title">{{ $t('login.header') }}</h1>
      <el-form-item prop="username">
        <el-input
          v-model="userInfo.username"
          :placeholder="$t('login.placeholder.username')"
          clearable
        >
          <i slot="prefix" class="el-icon-service"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="userInfo.password"
          :placeholder="$t('login.placeholder.password')"
          type="password"
          clearable
        >
          <i slot="prefix" class="el-icon-goods"></i>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
          class="login__controller__submit"
          :loading="isLoading"
          >{{ $t('login.submitButton') }}</el-button
        >
      </el-form-item>
    </el-form>
    <el-footer class="login__footer">
      <page-footer />
    </el-footer>
  </section>
</template>

<script>
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
    onSubmit() {
      this.switchLoading(true)
      this.$refs.login
        .validate()
        .then(valid => ({
          ...this.userInfo,
          vm: this
        }))
        // This action has included routes replacement
        // dispatch() will return a Promise instance
        .then(payload => this.$store.dispatch('login/userLogin', payload))
        .catch(e => console.error('[Login form]: validate failed !'))
        .finally(() => this.switchLoading(false))
    },
    switchLoading(state) {
      this.isLoading = state
    }
  },

  components: {
    PageFooter
  }
}
</script>

<style lang="scss" scoped>
.layout__login {
  min-height: 100vh;
}

.login {
  background-image: url('~./img/animation.gif');
  background-repeat: no-repeat;
  background-position: center center;

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: calc(100vh - 60px);
    max-width: 400px;

    &__title {
      text-align: center;
      text-transform: capitalize;
    }
  }

  &__controller {
    &__submit {
      width: 100%;
    }
  }

  &__footer {
    .author__info {
      margin: 0;
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>
