import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import moduleHistory, { RecordItem } from '../../../src/store/modules/history'
import { RECORD_MAX_VAL } from '../../../src/constants'

Vue.use(Vuex)

describe('Vuex history module', () => {
  let store: Store<Record<string, any>>

  beforeEach(() => {
    store = new Vuex.Store<Record<string, any>>({
      modules: {
        history: Object.assign(moduleHistory, {
          // make state clear
          state: {
            recordHead: null
          }
        })
      }
    })
  })

  it('Should append a history record', () => {
    const mockRoute = '/mock?query=append'
    store.commit('history/append', {
      fullPath: mockRoute
    })
    const { recordHead } = store.state.history
    expect(recordHead.fullPath).toEqual(mockRoute)
    expect(recordHead.next).toBeNull()
  })

  it('Should append multiple history records', () => {
    const mockFirstRoute = '/mock?query=prepend-one'
    const mockSecondRoute = '/mock?query=prepend-two'

    store.commit('history/append', {
      fullPath: mockFirstRoute
    })
    store.commit('history/append', {
      fullPath: mockSecondRoute
    })
    const { recordHead } = store.state.history
    expect(recordHead.fullPath).toEqual(mockFirstRoute)
    expect(recordHead.next).toBeDefined()
    expect(recordHead.next.fullPath).toEqual(mockSecondRoute)
    expect(recordHead.next.next).toBeNull()
  })

  it('Should append a history record until exceed', () => {
    const actualOffset = 5
    new Array(RECORD_MAX_VAL + actualOffset)
      .fill(null)
      .forEach((item, index) => {
        store.commit('history/append', {
          fullPath: `/mock?query=${index}`
        })
      })

    const { recordHead } = store.state.history
    expect(recordHead.fullPath).toEqual(`/mock?query=${actualOffset}`)
    expect(recordHead.next).toBeDefined()

    let current: RecordItem = recordHead
    let size = 1
    while (current.next) {
      ++size
      current = current.next
    }
    expect(size).toEqual(RECORD_MAX_VAL)
    expect(current.fullPath).toEqual(
      `/mock?query=${RECORD_MAX_VAL + actualOffset - 1}`
    )
    expect(current.next).toBeNull()
  })

  it('Should prepend a history record', () => {
    const mockRoute = '/mock?query=prepend'
    store.commit('history/prepend', {
      fullPath: mockRoute
    })
    const { recordHead } = store.state.history
    expect(recordHead.fullPath).toEqual(mockRoute)
    expect(recordHead.next).toBeNull()
  })

  it('Should prepend multiple history records', () => {
    const mockFirstRoute = '/mock?query=prepend-one'
    const mockSecondRoute = '/mock?query=prepend-two'

    store.commit('history/prepend', {
      fullPath: mockFirstRoute
    })
    store.commit('history/prepend', {
      fullPath: mockSecondRoute
    })
    const { recordHead } = store.state.history
    expect(recordHead.fullPath).toEqual(mockSecondRoute)
    expect(recordHead.next).toBeDefined()
    expect(recordHead.next.fullPath).toEqual(mockFirstRoute)
    expect(recordHead.next.next).toBeNull()
  })

  it('Should prepend a history record until exceed', () => {
    const actualOffset = 5
    new Array(RECORD_MAX_VAL + actualOffset)
      .fill(null)
      .forEach((item, index) => {
        store.commit('history/prepend', {
          fullPath: `/mock?query=${index}`
        })
      })

    const { recordHead } = store.state.history
    expect(recordHead.fullPath).toEqual(
      `/mock?query=${RECORD_MAX_VAL + actualOffset - 1}`
    )
    expect(recordHead.next).toBeDefined()

    let current: RecordItem = recordHead
    let size = 1
    while (current.next) {
      ++size
      current = current.next
    }
    expect(size).toEqual(RECORD_MAX_VAL)
    expect(current.fullPath).toEqual(`/mock?query=${actualOffset}`)
    expect(current.next).toBeNull()
  })
})
