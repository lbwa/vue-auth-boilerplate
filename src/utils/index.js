import Vue from 'vue'
import day from 'dayjs'

export function vueUsing(components) {
  components.forEach(component => Vue.use(component))
}

export function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

export const eventBus = new Vue({})

export function formatDate(unformatted, syntax = 'YYYY-MM-DD') {
  return day(unformatted).format(syntax)
}
