import { Plugin } from 'vuex'
import { RootState } from '@/store/global'
import cloneDeep from 'lodash.clonedeep'

export const createResetPlugin: (
  listenType: string
) => Plugin<RootState> = listenType => store => {
  const stateClone = cloneDeep(store.state)

  store.subscribeAction(action => {
    if (action.type !== listenType) return
    store.replaceState(stateClone)
  })
}
