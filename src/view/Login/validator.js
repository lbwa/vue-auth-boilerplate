function validator (rule, value, cb) {
  value ? setTimeout(() => cb(), 0) : cb(new Error(rule.message))
}

export {
  validator
}
