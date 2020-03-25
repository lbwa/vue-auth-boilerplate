import createPersistedState from 'vuex-persistedstate'
import { PERSISTED_STATE_KEY, SHOULD_BE_PERSISTED_STATE } from '@/constants'

export default function() {
  // You can use any cipher suite with `storage` option
  // https://github.com/robinvdvleuten/vuex-persistedstate#encrypted-local-storage
  return createPersistedState({
    key: PERSISTED_STATE_KEY,
    // https://github.com/robinvdvleuten/vuex-persistedstate#createpersistedstateoptions
    paths: SHOULD_BE_PERSISTED_STATE
  })
}
