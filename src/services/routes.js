const isDevMode = process.env.NODE_ENV === 'development'

export const baseURL = isDevMode ? 'http://localhost:8800' : ''

export const USER_TOKEN = '/user'

export const ANALYSIS = '/analysis'

export const MONITOR = '/monitor'

export const WORKSPACE = '/workspace'
