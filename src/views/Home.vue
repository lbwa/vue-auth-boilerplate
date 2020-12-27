<template>
  <v-card class="home d-flex flex-column justify-center align-center">
    <h1 class="home__title">Vue auth boilerplate</h1>
    <p class="home__subtitle">Vue.js console boilerplate with authentication</p>
    <ul class="home__info ma-0 pa-0">
      <li
        v-for="key of Object.keys(info)"
        :key="key"
        class="home__info__item my-2"
      >
        <h4 class="home__info__item-title mx-5">{{ key | formatCamelCase }}</h4>
        <p class="home__info__item-value ma-0">
          <template v-if="typeof info[key] === 'string'">
            {{ info[key] }}
          </template>

          <template v-else>
            <a
              :href="info[key].href"
              target="_blank"
              rel="noopener noreferrer"
              class="hover-decoration"
              >{{ info[key].label }}</a
            >
          </template>
        </p>
      </li>
    </ul>
  </v-card>
</template>

<script>
export default {
  name: 'Home',

  methods: {},

  data() {
    return {
      info: Object.freeze({
        version: {
          label: __VERSION__,
          href: `https://github.com/lbwa/vue-auth-boilerplate/releases/v${__VERSION__}`
        },
        commit: {
          label: __COMMIT_HASH__
            ? __COMMIT_HASH__.slice(0, 15)
            : 'Not a git repository',
          href: __COMMIT_HASH__
            ? `https://github.com/lbwa/vue-auth-boilerplate/commit/${__COMMIT_HASH__}`
            : ''
        },
        latestBuild: new Date(__BUILD_TIME__).toLocaleString()
      })
    }
  },

  filters: {
    formatCamelCase(val) {
      return val.replace(/[A-Z]/g, matched => ` ${matched.toLowerCase()}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  text-align: center;

  &__info {
    list-style: none;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-title {
    text-transform: capitalize;
  }
}
</style>
