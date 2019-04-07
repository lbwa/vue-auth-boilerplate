<template>
  <section class="login">
    <div class="login__body">
      <el-form
        class="login__form"
        label-position="right"
        :model="userInfo"
        :rules="formRules"
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
    </div>
    <el-footer class="login__footer">
      <page-footer />
    </el-footer>

    <div
      class="login__background"
      :style="{
        backgroundImage: `url(${randomPhotoUrl})`
      }"
    ></div>
  </section>
</template>

<script>
import PageFooter from 'COMPONENTS/PageFooter'
import MixinsFormRules from './rules'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LoginPage',

  mixins: [MixinsFormRules],

  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },

  computed: {
    randomPhotoUrl() {
      const allUrls = this.randomPhoto('urls')
      if (allUrls) {
        return this.randomPhoto('urls.custom')
      }
      return ''
    },
    ...mapGetters('login', ['randomPhoto'])
  },

  methods: {
    onSubmit() {
      this.switchLoading(true)
      this.$refs.login
        .validate()
        .then(() => ({
          ...this.userInfo,
          vm: this
        }))
        // This action has included routes replacement
        // dispatch() will return a Promise instance
        .then(payload => this.$store.dispatch('login/userLogin', payload))
        .catch(() => console.error('[Login form]: validate failed !'))
        .finally(() => this.switchLoading(false))
    },
    switchLoading(state) {
      this.isLoading = state
    },
    ...mapActions('login', ['fetchRandomPhoto'])
  },

  created() {
    !this.randomPhotoUrl && this.fetchRandomPhoto()
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
  position: relative;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: -1;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: -1;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
  }

  &__form {
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    width: 400px;

    &__title {
      background-image: url('~./img/logo.svg');
      background-position: center;
      background-size: auto 100%;
      background-repeat: no-repeat;
      color: transparent;
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
