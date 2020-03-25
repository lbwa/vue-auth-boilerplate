/**
 * This file is used to record all **symbolic constants**.
 */

/**
 * the root router-view layout
 */
export const DEFAULT_LAYOUT = 'RAdmin'

/**
 * the max value of history records and should be greater than 1
 */
export const RECORD_MAX_VAL = 20

/**
 * Used to forbid unauthorized access
 */
export const FORBIDDEN_ROUTE = '/forbidden'

/**
 * Used to redirect to target path when login successfully
 */
export const QUERY_KEY_FOR_LOGIN_TO = '__from'

/**
 * Default icon for navigation item
 */
export const DEFAULT_NAV_ICON = 'work_outline'

/**
 * Base URL for HTTP request
 */
export const REQUEST_BASE_URL = process.env.VUE_APP_REQUEST_BASE_URL

/**
 * How long HTTP request should be abort
 */
export const REQUEST_TIMEOUT_THRESHOLD = 1000 * 15

/**
 * Key for implementing global persisted state
 */
export const PERSISTED_STATE_KEY = '__VX__'

/**
 * Which store namespace should be persisted
 */
export const SHOULD_BE_PERSISTED_STATE = ['history', 'user']
