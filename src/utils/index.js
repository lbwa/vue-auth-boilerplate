import Vue from 'vue'

export function vueUsing(components) {
  components.forEach(component => Vue.use(component))
}

export const eventBus = new Vue({})
