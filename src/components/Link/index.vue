<template functional>
  <a :class="['link', props.size]" :href="props.href" :target="props.target">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'AdminizeLink',

  props: {
    href: {
      type: String,
      required: true
    },
    target: {
      type: String,
      default: '_blank'
    },
    size: {
      type: String,
      default: 'small',
      validator(val) {
        return ['small', 'medium', 'large'].includes(val)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.link
  +normalize-link

  &.small
    font-size: $fz-sub

  &.medium
    font-size: $fz-content-s

  &.large
    font-size: $fz-content
</style>
