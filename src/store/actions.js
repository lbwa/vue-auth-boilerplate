import { stateSnapshot } from 'UTILS/storage'
import store from 'STORE'

export default {
  resetStore() {
    store.replaceState(JSON.parse(stateSnapshot.getItem()))
  }
}
