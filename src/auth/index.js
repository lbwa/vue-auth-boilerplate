const DEFAULT_TOKEN_KEY = '__vue-design-pro__'

export function setTokenToLocal ({ key = DEFAULT_TOKEN_KEY, token }) {
  sessionStorage.setItem(key, token)
}

export function getTokenFromLocal (key = DEFAULT_TOKEN_KEY) {
  sessionStorage.getItem(key)
}

export function removeToken (key = DEFAULT_TOKEN_KEY) {
  sessionStorage.removeItem(key)
}
