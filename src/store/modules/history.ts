import { Module } from 'vuex'
import { Route } from 'vue-router'
import invariant from 'tiny-invariant'
import { RootState } from '../global'
import { RECORD_MAX_VAL } from '../../constants'

export interface HistoryState {
  recordHead: RecordItem | null
}

export class RecordItem {
  name?: string
  fullPath: string

  constructor(route: Route, public next: RecordItem | null = null) {
    this.fullPath = route.fullPath
    if (route.meta && route.meta.title) {
      this.name = route.meta.title
    }
  }
}

const history: Module<HistoryState, RootState> = {
  namespaced: true,

  state: {
    recordHead: null
  },

  getters: {
    isInList({ recordHead }) {
      return (route: Route) => {
        let current = recordHead
        while (current) {
          if (current.fullPath === route.fullPath) return true
          current = current.next
        }

        return false
      }
    }
  },

  mutations: {
    append(state, route: Route) {
      if (!state.recordHead) {
        state.recordHead = new RecordItem(route)
        return
      }

      let current: RecordItem | null = state.recordHead
      let size = 1
      invariant(
        RECORD_MAX_VAL > 1,
        '[module/history]: RECORD_MAX_VAL should be greater then 1'
      )
      while (current.next) {
        ++size
        current = current.next
      }
      // drop the head when exceed
      if (size === RECORD_MAX_VAL) {
        state.recordHead = state.recordHead.next
      }
      // a new tail element of linked list
      current.next = new RecordItem(route)
    },

    prepend(state, route: Route) {
      if (!state.recordHead) {
        state.recordHead = new RecordItem(route)
        return
      }

      let current: RecordItem | null = state.recordHead
      let size = 1
      invariant(
        RECORD_MAX_VAL > 1,
        '[module/history]: RECORD_MAX_VAL should be greater then 1'
      )

      state.recordHead = new RecordItem(route, state.recordHead)

      while (current.next) {
        ++size
        if (size === RECORD_MAX_VAL) {
          // drop the tail element
          current.next = null
          break
        }
        current = current.next
      }
    }
  },

  actions: {
    append({ commit, getters }, to: Route) {
      if (!to.meta || !to.meta.title || getters.isInList(to)) return
      // only add it when it doesn't exist in the linked-list
      commit('append', to)
    }
  }
}

export default history
