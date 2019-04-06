export default {
  created() {
    // Avoid unnecessary data binding
    this.formRules = {
      username: [
        {
          required: true,
          message: this.$t('login.tips.username'),
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: this.$t('login.tips.password'),
          trigger: 'blur'
        }
      ]
    }
  }
}
