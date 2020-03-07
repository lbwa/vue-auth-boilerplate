export type RootState = {}

const globalNamespace = {
  state: {} as RootState,

  getters: {},

  mutations: {},

  actions: {
    resetStore() {
      /**
       * This action will trigger store reset plugin in src/plugins/store.ts
       */
    }
  }
}

export default globalNamespace
