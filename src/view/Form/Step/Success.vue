<template>
  <div class="step-form__container">
    <!-- success information here -->
    <router-link-btn
      :text="btnText"
      to="info"
    ></router-link-btn>
  </div>
</template>

<script>
import RouterLinkBtn from 'COMPONENTS/RouterLinkBtn'

export default {
  data () {
    return {
      btnText: '再转一笔'
    }
  },

  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'success')
    }
  },

  created () {
    this.updateBreadcrumb()
  },

  components: {
    RouterLinkBtn
  }
}
</script>

<style lang="sass" scoped>

</style>
