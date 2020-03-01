// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}

export const errorLog = __DEV__ ? console.error : noop

export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== null && val !== undefined
}
