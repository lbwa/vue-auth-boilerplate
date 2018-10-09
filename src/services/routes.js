const isDevMode = process.env.NODE_ENV === 'development'

export const baseURL = isDevMode
  ? 'http://localhost:8800/api'
  : 'https://vue-design-pro.now.sh/api'

export const USER_TOKEN = '/login'

export const VALIDATE_TOKEN = '/token'

export const CURRENT_USER = '/user'

export const ANALYSIS = '/analysis'

export const WORKSPACE = '/workspace'

export const WORKSPACE_PROJECTS = '/workspace/projects'

export const WORKSPACE_ACTIVITIES = '/workspace/activities'

export const WORKSPACE_RADAR = '/workspace/radar'

export const WORKSPACE_TEAMS = '/workspace/teams'

export const FORM_STEP = '/form/step'

export const FORM_BASIC = '/form/basic'
