import { history } from 'CONFIG'

const types = {
  ENQUEUE: 'ENQUEUE',
  DEQUEUE: 'DEQUEUE',
  INSERT: 'INSERT'
}

export default {
  namespaced: true,
  state: {
    queue: [],
    pathMap: {}
  },

  getters: {
    current({ queue: [current] }) {
      return current || {}
    }
  },

  mutations: {
    [types.ENQUEUE](state, record) {
      state.pathMap[record.path] = record
      state.queue.push(record)
    },
    [types.DEQUEUE](state) {
      if (state.queue.length) {
        delete state.pathMap[state.queue.shift().path]
      }
    },
    [types.INSERT](state, record) {
      const stateQueue = state.queue
      const queue = []
      let last = null
      for (const queueItem of stateQueue) {
        if (record.path !== queueItem.path) {
          queue.push(queueItem)
        } else {
          last = queueItem
        }
      }
      queue.push(last)
      state.queue = queue
    }
  },

  actions: {
    enqueue(
      {
        commit,
        state: { queue, pathMap }
      },
      routeRecord
    ) {
      if (!pathMap[routeRecord.path]) {
        // exceed limit
        if (queue.length >= history.maxLength) {
          commit(types.DEQUEUE)
        }
        // enqueue new one
        commit(types.ENQUEUE, routeRecord)
      } else {
        // requeue exist one
        commit(types.INSERT, routeRecord)
      }
    }
  }
}
