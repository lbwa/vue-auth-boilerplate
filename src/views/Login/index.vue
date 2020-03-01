<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-3">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>
                <span class="login__title">Adminize console</span>
              </v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="person"
                  label="Username"
                  name="username"
                  type="text"
                  clearable
                  v-model="username"
                />
                <v-text-field
                  prepend-icon="lock"
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  v-model="password"
                  :append-icon="
                    isShowPassword ? 'md-visibility' : 'md-visibility_off'
                  "
                  @click:append="isShowPassword = !isShowPassword"
                />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="onLogin">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'ViewLogin',

  data() {
    return {
      username: '',
      password: '',
      isShowPassword: false
    }
  },

  methods: {
    onLogin() {
      console.info(true)
    }
  }
}
</script>

<style lang="sass" scoped>
.login
  &__title
    text-transform: capitalize
</style>
