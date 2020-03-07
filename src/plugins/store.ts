import { Plugin } from 'vuex'
import { RootState } from '@/store/global'
import cloneDeep from 'lodash.clonedeep'

/**
 * For storing the whole initial `store.state` including all modules states
 * @when This plugin will be called only once in the whole Store instance lifetime
 * @see https://github.com/vuejs/vuex/blob/v3.1.2/src/store.js#L64-L65
 */
export const createResetPlugin: () => Plugin<RootState> = () => store => {
  const clone = cloneDeep(store.state)
  delete clone.DO_NOT_MUTATE
  store.commit('setSnapshot', clone)
}
