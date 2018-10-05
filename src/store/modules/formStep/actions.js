import { pushStepForm } from 'SERVICES'

export default {
  // Should secure password to transport (under HTTPS protocol)
  // eg. md5(salt + form['password'])
  pushStepForm ({ commit, state }, password) {
    return pushStepForm({
      ...state.form,
      password
    })
      .then(res => res.data)
      .then(res => {
        if (res.errno !== 0) throw new Error(`[pushStepForm]: ${res.message}`)
        return res
      })
  }
}
