import store from 'STORE'

function hasAccess(access, accessMap = store.getters['login/accessMap']) {
  return !!accessMap[access]
}

function hasEveryAccess(
  accesses,
  accessMap = store.getters['login/accessMap']
) {
  if (Array.isArray(accesses)) {
    return accesses.every(access => hasAccess(access, accessMap))
  }
  throw new Error(`[hasEveryAccess]: ${accesses} should be a array !`)
}

function hasSomeAccess(accesses, accessMap = store.getters['login/accessMap']) {
  if (Array.isArray(accesses)) {
    return accesses.some(access => hasAccess(access, accessMap))
  }
  throw new Error(`[hasSomeAccess]: ${accesses} should be a array !`)
}

export default {
  install(Vue) {
    Vue.prototype.$_hasAccess = hasAccess
    Vue.prototype.$_hasEveryAccess = hasEveryAccess
    Vue.prototype.$_hasSomeAccess = hasSomeAccess

    /**
     * @description Support .some .every directive modifiers
     * @usage
     *    <element v-access="admin.device.read" />
     *    <element v-access.some="['admin.device.read']" />
     *    <element v-access.every="['admin.device.read']" />
     */
    Vue.directive('access', {
      inserted: function(el, { value, modifiers }) {
        if (value === undefined)
          throw new Error(
            '[v-access]: should input target access list, support .some or .every modifiers.'
          )
        let isVerified = hasAccess(value)

        if (modifiers.some) {
          isVerified = hasSomeAccess(Array.isArray(value) ? value : [value])
        }

        if (modifiers.every) {
          isVerified = hasEveryAccess(Array.isArray(value) ? value : [value])
        }

        if (!isVerified) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      }
    })
  }
}
