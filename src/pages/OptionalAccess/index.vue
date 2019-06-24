<template>
  <div class="optional-access">
    <h3>{{ $t('msg') }}</h3>
    <p>
      {{ $t('route') }}
      <strong>{{ $route.path }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'OptionalAccess',

  i18n: {
    messages: {
      en: {
        msg:
          'Current route will disappear until meta.optionalAccess has included at least one correct access',
        route: 'Current route is'
      },
      zh: {
        msg:
          '当前路由满足至少一项 meta.optionalAccess 权限时，才会出现，否则将消失。',
        route: '当前路由是'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.optional-access
  +flex-center
  height: 100%
</style>
