const isDevMode = process.env.NODE_ENV === 'development'

export const baseURL = isDevMode
  ? 'http://localhost:8800/api'
  : 'https://vue-design-pro.now.sh/api'

export const USER_TOKEN = '/login'

export const ANALYSIS = '/analysis'

export const WORKSPACE = '/workspace'

export const WORKSPACE_PROJECTS = '/workspace/projects'

export const WORKSPACE_ACTIVITIES = '/workspace/activities'

export const WORKSPACE_RADAR = '/workspace/radar'

export const CURRENT_USER = '/user'
