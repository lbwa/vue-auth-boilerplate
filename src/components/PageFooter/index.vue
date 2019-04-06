<template functional>
  <p class="author__info">
    Copyright &copy; {{ new Date().getFullYear() }}
    <a class="author__name" href="https://github.com/lbwa" target="_blank"
      >lbwa</a
    >&nbsp;Released under the MIT License
  </p>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~STYLE/color/font.scss';

$gap: 60px;

.author {
  &__info {
    margin: 0;
    text-align: center;
    line-height: $gap;
    font-size: 14px;
    color: #999999;
  }

  &__name {
    color: $font-blue-50;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
