function validateUsername (rule, value, cb) {
  const login = this.$refs.login
  if (!value) {
    cb(new TypeError(rule.message))
    return
  }
  // Invoke vueComponent inner methods
  if (login.password !== '') {
    login.validateField('password')
  }
  cb()
}

function validatePassword (rule, value, cb) {
  if (!value) {
    cb(new TypeError(rule.message))
    return
  }
  cb()
}

export {
  validateUsername,
  validatePassword
}
