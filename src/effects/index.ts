import { createInitiator } from './initiator'
import { REQUEST_BASE_URL, REQUEST_TIMEOUT_THRESHOLD } from '../constants'
import { UserAbility } from '@/store/modules/user'

const { http } = createInitiator({
  baseURL: REQUEST_BASE_URL,
  timeout: REQUEST_TIMEOUT_THRESHOLD
})

const enum Routes {
  userLogin = '/user/profile',
  userAbilities = '/user/abilities'
}

export function userLogin(username: string, password: string) {
  return http.post<Record<'token', string>, Record<'token', string>>(
    Routes.userLogin,
    {
      username,
      password
    }
  )
}

export function fetchUserAbilities() {
  return http.get<UserAbility[], UserAbility[]>(Routes.userAbilities)
}
