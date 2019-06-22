// For correct `this` value, using function value to replace object value under
// ES6 import syntax
// Usage: createRules.call(this), `this` should be a vue component instance.
export default function createRules() {
  return {
    username: [
      {
        required: true,
        message: this.$t('tips.username'),
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: this.$t('tips.password'),
        trigger: 'blur'
      }
    ]
  }
}
