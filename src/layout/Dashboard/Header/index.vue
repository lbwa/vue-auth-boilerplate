<template>
  <el-header class="adminize__dashboard__header">
    <i class="el-icon-menu header__icon" @click="toggleAside"></i>

    <div class="user">
      <img
        src="~../img/logo.png"
        height="34%"
        alt="avatar"
        class="user__avatar"
      />
      <span class="user__name" :title="username">{{ username }}</span>

      <el-dropdown trigger="click" class="lang">
        <el-button type="text">{{ lang | formatLang }}</el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><span class="lang__item" @click="setLocale('zh')"
              >中文</span
            ></el-dropdown-item
          >
          <el-dropdown-item
            ><span class="lang__item" @click="setLocale('en')"
              >EN</span
            ></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="text" @click="onLogout" :title="$t('logout')"
        ><i class="el-icon-switch-button"></i
      ></el-button>
    </div>
  </el-header>
</template>

<script>
import { mapMutations } from 'vuex'
import lang from 'LANG'

export default {
  name: 'AdminizeHeader',

  data() {
    return {
      username: 'default name'
    }
  },

  computed: {
    lang() {
      return lang.locale
    }
  },

  methods: {
    async onLogout() {
      try {
        await this.$store.dispatch('login/userLogout')
        this.$router.replace('/login')
      } catch (err) {
        console.error(err)
        this.$_plugins_message.error(this.$t('error'))
      }
    },
    setLocale(type = 'en') {
      lang.locale = type
    },
    ...mapMutations({
      toggleAside: 'SET_ASIDE_COLLAPSE'
    })
  },

  filters: {
    formatLang(lang) {
      const LANG_MAP = {
        zh: '中文',
        en: 'English'
      }
      return LANG_MAP[lang] || 'Unknown'
    }
  },

  i18n: {
    messages: {
      en: {
        logout: 'Logout',
        error: 'Logout failed, Please try again !'
      },
      zh: {
        logout: '登出',
        error: '登出失败，请重试！'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.adminize__dashboard__header
  padding: 0 24px 0 0
  position: relative // for box-shadow
  background-color: $main-white
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)

  .header
    &__icon
      padding: 0 24px
      line-height: 60px
      cursor: pointer
      font-size: 20px
      transition: all 0.3s, padding 0s

  .user
    float: right
    height: 60px

    &__name,
    &__avatar
      line-height: 60px
      vertical-align: middle

    &__name
      margin: 0 0 0 10px
      display: inline-block
      max-width: 100px
      cursor: pointer
      text-align: center
      +text-dot
</style>

<style lang="sass">
.lang
  margin: 0 10px

  &__item
    display: block
    padding: 0 20px
    margin: 0 -20px
    text-align: center
</style>
