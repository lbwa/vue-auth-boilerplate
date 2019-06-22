<template>
  <div class="admin">
    <p>
      {{ $t('desc[0]') }}
      <strong>{{ $t('desc[1]') }}</strong
      >{{ $t('desc[2]') }}
    </p>
    <p>
      {{ $t('currentRoute') }}
      <strong>{{ $route.path }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Admin',

  i18n: {
    messages: {
      en: {
        currentRoute: 'Current route is',
        desc: [
          'This route with its aside menu title item will',
          'disappear',
          ' when current user has correct access.'
        ]
      },
      zh: {
        currentRoute: '当前路由是',
        desc: [
          '在当前用户没有包含此路由权限时，侧边栏中仅包含本路由的条目也会一同',
          '消失。',
          ' '
        ]
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.admin
  +flex-center
  height: 100%
</style>
