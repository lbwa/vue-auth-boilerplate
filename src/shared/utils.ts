// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}

export const errorLog = __DEV__ ? console.error : noop

/**
 * Whether value is defined
 */
export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== null && val !== undefined
}

/**
 * handle await statement without `try {} catch (reason) {}`
 */
export function asyncTryCatch<V, R = Error>(promise: Promise<V>) {
  return promise
    .then<[V, null], [null, R]>(value => [value, null])
    .catch<[null, R]>((reason: R) => [null, reason])
}
