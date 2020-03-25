import { Module } from 'vuex'
import { Route } from 'vue-router'
import invariant from 'tiny-invariant'
import { RootState } from '../global'
import { RECORD_MAX_VAL } from '../../constants'

export type RecordItem = {
  name?: string
  fullPath: string
  next: RecordItem | null
}

interface RecordItemConstructor {
  (this: RecordItem, route: Route, next?: RecordItem): void
  new (route: Route, next?: RecordItem): RecordItem
}

export type HistoryState = Record<'recordHead', RecordItem | null>

const RecordItem = function(this: RecordItem, route: Route, next?: RecordItem) {
  if (route.name) this.name = route.name
  this.fullPath = route.fullPath
  this.next = next || null
} as RecordItemConstructor

const history: Module<HistoryState, RootState> = {
  namespaced: true,

  state: {
    recordHead: null
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
  }
}

export default history
