const DEFAULT_TOKEN_KEY = '__vue-design-pro__'

// User token only work with current session.

export function setTokenToLocal ({ key = DEFAULT_TOKEN_KEY, token }) {
  sessionStorage.setItem(key, token)
}

export function getTokenFromLocal (key = DEFAULT_TOKEN_KEY) {
  return sessionStorage.getItem(key)
}

export function removeToken (key = DEFAULT_TOKEN_KEY) {
  sessionStorage.removeItem(key)
}
