const DEFAULT_TOKEN_KEY = '__vue-design-pro__'

export function setTokenToLocal ({ key = DEFAULT_TOKEN_KEY, token }) {
  localStorage.setItem(key, token)
}

export function getTokenFromLocal (key = DEFAULT_TOKEN_KEY) {
  localStorage.getItem(key)
}

export function removeToken (key = DEFAULT_TOKEN_KEY) {
  localStorage.removeItem(key)
}
