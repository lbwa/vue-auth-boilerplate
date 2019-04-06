const TOKEN_KEY = '$_tk'
const USER_INFO_KEY = '$_usi'

function setValueToLocal(key, val, storage) {
  const normalizeVal = typeof val === 'string' ? val : JSON.stringify(val)
  storage.setItem(key, normalizeVal)
}

function createStorageUtils(key, storage = localStorage) {
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

export const tokenFromStorage = createStorageUtils(TOKEN_KEY, localStorage)

export const userInfoFromStorage = createStorageUtils(
  USER_INFO_KEY,
  localStorage
)
