import Vue from 'vue'
import Vuex from 'vuex'
import moduleHistory from 'STORE/modules/history'
import { history } from 'CONFIG'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    history: moduleHistory
  }
})

describe('History queue basic functionality', () => {
  it('Enqueue one history', () => {
    const MOCK_ROUTE_RECORD = {
      path: '/mock-path?query=0'
    }
    store.commit('history/ENQUEUE', MOCK_ROUTE_RECORD)
    const { queue, pathMap } = store.state.history
    expect(queue.length).toBe(1)
    expect(pathMap).toEqual({
      [MOCK_ROUTE_RECORD.path]: MOCK_ROUTE_RECORD
    })
  })

  it('Dequeue one history', () => {
    store.commit('history/DEQUEUE')
    const { queue, pathMap } = store.state.history
    expect(queue.length).toBe(0)
    expect(pathMap).toEqual({})
  })

  it('Insert one exist history record', () => {
    const MOCK_ROUTE_RECORD_1ST = {
      path: '/mock-path?query=0'
    }
    const MOCK_ROUTE_RECORD_2ND = {
      path: '/mock-path?query=1'
    }
    const MOCK_ROUTE_RECORD_3RD = {
      path: '/mock-path?query=2'
    }
    store.commit('history/ENQUEUE', MOCK_ROUTE_RECORD_1ST)
    store.commit('history/ENQUEUE', MOCK_ROUTE_RECORD_2ND)
    store.commit('history/ENQUEUE', MOCK_ROUTE_RECORD_3RD)

    store.commit('history/INSERT', MOCK_ROUTE_RECORD_2ND)

    const { queue, pathMap } = store.state.history
    expect(queue[0]).toEqual(MOCK_ROUTE_RECORD_1ST)
    expect(queue[1]).toEqual(MOCK_ROUTE_RECORD_3RD)
    expect(queue[2]).toEqual(MOCK_ROUTE_RECORD_2ND)
    expect(pathMap).toEqual({
      [MOCK_ROUTE_RECORD_1ST.path]: MOCK_ROUTE_RECORD_1ST,
      [MOCK_ROUTE_RECORD_2ND.path]: MOCK_ROUTE_RECORD_2ND,
      [MOCK_ROUTE_RECORD_3RD.path]: MOCK_ROUTE_RECORD_3RD
    })
  })
})

describe('History queue derived functionalities', () => {
  const { history: historyState } = store.state

  it('Reset history queue', () => {
    while (historyState.queue.length) {
      store.commit('history/DEQUEUE')
    }
    expect(historyState.queue.length).toBe(0)
    expect(historyState.pathMap).toEqual({})
  })

  it('Enqueue one history via action', async done => {
    const { queue, pathMap } = store.state.history
    const MOCK_ROUTE_RECORD = {
      path: '/mock-path?query=0'
    }

    await store.dispatch('history/enqueue', MOCK_ROUTE_RECORD)

    expect(queue.length).toBe(1)
    expect(queue).toEqual([MOCK_ROUTE_RECORD])
    expect(pathMap).toEqual({
      [MOCK_ROUTE_RECORD.path]: MOCK_ROUTE_RECORD
    })
    done()
  })

  it('Enqueue history until limitation', async () => {
    let counter = history.maxLength + 5
    while (counter--) {
      await store.dispatch('history/enqueue', {
        path: `/mock-path?query=${counter}`
      })
    }

    const { queue, pathMap } = store.state.history
    expect(queue.length).toBe(history.maxLength)
    expect(Object.keys(pathMap).length).toEqual(history.maxLength)
    let verifyCounter = history.maxLength
    while (verifyCounter--) {
      const targetRouteRecordPath = `/mock-path?query=${verifyCounter}`
      expect(pathMap[targetRouteRecordPath]).toEqual({
        path: targetRouteRecordPath
      })
    }
  })

  it('Requeue one exist history record', async done => {
    const requeueRecord = historyState.queue[1]
    await store.dispatch('history/enqueue', requeueRecord)
    /**
     * @description It's successful requeued process if requeued one is last of
     * history queue and queue size isn't changed, means all elements has
     * create a new queue which include all elements of previous queue
     * 当没有新的元素加入，且重排的元素位于最后一项，且队列 size 不变的情况下，那么就
     * 意味着其他已经入队元素会对移除重排元素后的队列进行补位，即可在通过判断以下两个
     * 条件来直接判断是否重入队成功，即可避免对队列的每一项进行验证
     */
    expect(historyState.queue[historyState.queue.length - 1]).toEqual(
      requeueRecord
    )
    expect(historyState.queue.length).toBe(history.maxLength)
    done()
  })
})
