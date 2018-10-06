import { pushBasicForm } from 'SERVICES'

export default {
  pushBasicForm ({ commit }, formData) {
    return pushBasicForm(formData)
      .then(res => res.data)
      .then(res => {
        return res.errno !== 0
          ? console.error(new Error(`[pushBasicForm]: ${res.message}`))
          : res
      })
  }
}
