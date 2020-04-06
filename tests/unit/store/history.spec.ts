import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import moduleHistory, { RecordItem } from '@/store/modules/history'
import { RECORD_MAX_VAL } from '@/constants'
import { RootState } from '@/store/global'

Vue.use(Vuex)

describe('Vuex history module', () => {
  let store: Store<RootState>

  beforeEach(() => {
    store = new Vuex.Store<RootState>({
      modules: {
        history: Object.assign(moduleHistory, {
          // clear state for every test closure
          state: {
            recordHead: null
          }
        })
      }
    })
  })

  it("Shouldn't append a history record", () => {
    const mockRoute = '/mock?query=append'
    store.dispatch('history/append', {
      fullPath: mockRoute
    })
    const { recordHead } = store.state.history
    expect(recordHead).toBeNull()
  })

  it('Should append a history record', () => {
    const mockRoute = '/mock?query=append'
    store.dispatch('history/append', {
      fullPath: mockRoute,
      meta: {
        title: 'route-title'
      }
    })
    const { recordHead } = store.state.history
    expect((recordHead as RecordItem).fullPath).toEqual(mockRoute)
    expect((recordHead as RecordItem).next).toBeNull()
  })

  it(`Should avoid append a duplicated history record`, () => {
    const route = `/same?query=append`
    store.dispatch('history/append', {
      fullPath: route,
      meta: {
        title: 'route-title'
      }
    })
    store.dispatch('history/append', {
      fullPath: route,
      meta: {
        title: 'route-title'
      }
    })
    const { recordHead } = store.state.history
    expect((recordHead as RecordItem).next).toBeNull()
  })

  it('Should append multiple history records', () => {
    const mockFirstRoute = '/mock?query=prepend-one'
    const mockSecondRoute = '/mock?query=prepend-two'

    store.dispatch('history/append', {
      fullPath: mockFirstRoute,
      meta: {
        title: 'route-title'
      }
    })
    store.dispatch('history/append', {
      fullPath: mockSecondRoute,
      meta: {
        title: 'route-title'
      }
    })
    const { recordHead } = store.state.history
    expect((recordHead as RecordItem).fullPath).toEqual(mockFirstRoute)
    expect((recordHead as RecordItem).next).toBeDefined()
    expect(((recordHead as RecordItem).next as RecordItem).fullPath).toEqual(
      mockSecondRoute
    )
    expect(((recordHead as RecordItem).next as RecordItem).next).toBeNull()
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
    expect((recordHead as RecordItem).fullPath).toEqual(
      `/mock?query=${actualOffset}`
    )
    expect((recordHead as RecordItem).next).toBeDefined()

    let current: RecordItem = recordHead as RecordItem
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
    expect((recordHead as RecordItem).fullPath).toEqual(mockRoute)
    expect((recordHead as RecordItem).next).toBeNull()
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
    expect((recordHead as RecordItem).fullPath).toEqual(mockSecondRoute)
    expect((recordHead as RecordItem).next).toBeDefined()
    expect(((recordHead as RecordItem).next as RecordItem).fullPath).toEqual(
      mockFirstRoute
    )
    expect(((recordHead as RecordItem).next as RecordItem).next).toBeNull()
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
    expect((recordHead as RecordItem).fullPath).toEqual(
      `/mock?query=${RECORD_MAX_VAL + actualOffset - 1}`
    )
    expect((recordHead as RecordItem).next).toBeDefined()

    let current: RecordItem = recordHead as RecordItem
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
