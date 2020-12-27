<template>
  <v-content>
    <v-container class="login fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-3">
            <v-overlay :value="isLoading" absolute>
              <v-progress-circular indeterminate></v-progress-circular>
            </v-overlay>

            <v-toolbar dark color="secondary">
              <v-toolbar-title>
                <span class="login__title">Login</span>
              </v-toolbar-title>
              <v-spacer />
              <v-btn text small @click="asPreset('user')">as user</v-btn>
              <v-btn text small @click="asPreset('admin')">as admin</v-btn>
            </v-toolbar>

            <v-card-text>
              <v-form ref="form" v-model="isValidForm" @submit="onLogin">
                <v-text-field
                  prepend-icon="person"
                  label="Email"
                  name="username"
                  type="text"
                  clearable
                  required
                  v-model="username"
                  :rules="usernameRules"
                  :disabled="isLoading"
                />

                <v-text-field
                  prepend-icon="lock"
                  id="password"
                  label="Senha"
                  name="password"
                  v-model="password"
                  required
                  :append-icon="
                    isShowPassword ? 'visibility_off' : 'visibility'
                  "
                  :type="isShowPassword ? 'text' : 'password'"
                  :rules="passwordRules"
                  :disabled="isLoading"
                  @click:append="isShowPassword = !isShowPassword"
                />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                :disabled="isLoading"
                @click="onLogin"
                color="secondary"
                class="px-6"
                >Login</v-btn
              >
            </v-card-actions>

            <base-toast
              :message.sync="toastMessage"
              :visible.sync="toastVisibility"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { errorLog, asyncTryCatch } from '../shared/utils'
import { QUERY_KEY_FOR_LOGIN_TO } from '../constants'
import BaseToast from '../components/BaseToast'

const ERR_CODE = {
  wrongInfo: 'Oops! Wrong username or password.',
  emptyAbilities:
    'Oops! Current user has no permission. Please contact system administrator.'
}

export default {
  name: 'Login',

  data() {
    return {
      username: '',
      password: '',
      usernameRules: [v => !!v || 'Insira nome do usuário.'],
      passwordRules: [v => !!v || 'Insira a senha.'],
      isShowPassword: false,
      isValidForm: false,
      isLoading: false,
      toastVisibility: false,
      toastMessage: ''
    }
  },

  methods: {
    async onLogin() {
      this.toggleLoading(true)
      if (this.isValidForm || this.$refs.form.validate()) {
        const [, profileError] = await asyncTryCatch(
          this.$store.dispatch('user/login', {
            username: this.username,
            password: this.password
          })
        )
        if (profileError) {
          errorLog(profileError)
          if (profileError.code === 403) {
            this.toggleToastVisibility(true)
            this.toastMessage = ERR_CODE.wrongInfo
          }
          this.toggleLoading(false)
          return
        }

        /**
         * Because we should use user info to fetch ability list, the following
         * request should be called after action named login, instead of
         * concurrent request.
         */
        const [, abilitiesError] = await asyncTryCatch(
          this.$store.dispatch('user/fetchUserAbilities')
        )
        if (abilitiesError) {
          errorLog(abilitiesError)
          if (abilitiesError.code === 403) {
            this.toggleToastVisibility(true)
            this.toastMessage = ERR_CODE.emptyAbilities
          }
          this.toggleLoading(false)
          return
        }

        this.$router.replace(this.$route.query[QUERY_KEY_FOR_LOGIN_TO] || '/')
      }

      this.toggleLoading(false)
    },
    toggleLoading(state) {
      this.isLoading = state || !this.isLoading
    },
    toggleToastVisibility(state) {
      this.toastVisibility = state || !this.toastVisibility
    },
    asPreset(tag) {
      this.username = tag
      this.password = tag
    }
  },

  components: {
    BaseToast
  }
}
</script>

<style lang="scss" scoped>
.login {
  justify-content: center;

  &__title {
    text-transform: capitalize;
  }
}
</style>
