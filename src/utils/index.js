import Vue from 'vue'

export function vueUsing(components) {
  components.forEach(component => Vue.use(component))
}

export function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

export const eventBus = new Vue({})
