export const errorLog = console.error

export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== null && val !== undefined
}
