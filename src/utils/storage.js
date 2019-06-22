import Cookies from 'js-cookie'

const __DEV__ = process.env.NODE_ENV === 'development'
const TOKEN_KEY = '$_ut'
const USER_INFO_KEY = '$_ui'
const STATE_SNAPSHOT = '$_snapshot'
export const STORE_KEY = '$_VX'

function setValueToLocal(key, val, storage) {
  const normalizeVal = typeof val === 'string' ? val : JSON.stringify(val)
  storage.setItem(key, normalizeVal)
}

function utilStorage(key, storage = localStorage) {
  return {
    setItem(value) {
      setValueToLocal(key, value, storage)
    },
    getItem() {
      return storage.getItem(key)
    },
    removeItem() {
      storage.removeItem(key)
    }
  }
}

function utilCookie(key, props = { secure: !__DEV__ }) {
  return {
    setItem: value =>
      Cookies.set(key, value, Object.assign({ secure: !__DEV__ }, props)),
    getItem: () => Cookies.get(key),
    removeItem: () => Cookies.remove(key, Cookies.get(key))
  }
}

/**
 * @description used to clean all cookies without $_vx
 */
export function cleanupCookies() {
  return Object.keys(Cookies.get()).forEach(
    key => key !== STORE_KEY && Cookies.remove(key, Cookies.get(key))
  )
}

export const tokenInCookie = utilCookie(TOKEN_KEY)
export const userInCookie = utilCookie(USER_INFO_KEY)
export const stateSnapshot = utilStorage(STATE_SNAPSHOT, sessionStorage)
