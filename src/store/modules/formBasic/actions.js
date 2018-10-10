import { pushBasicForm } from 'SERVICES'

export default {
  pushBasicForm ({ commit }, formData) {
    return pushBasicForm(formData)
      .then(({ data }) => {
        return data.errno !== 0
          ? console.error(new Error(`[pushBasicForm]: ${data.message}`))
          : data
      })
  }
}
