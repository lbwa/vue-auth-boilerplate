import { Injectable, HttpException, HttpStatus } from '@nestjs/common'

export interface UserProfile {
  username: string
  token: string
}

export class AbilityEntity {
  uid = Math.random()
    .toString(16)
    .slice(2)

  create_at = Date.now()

  constructor(public name: string) {}
}

@Injectable()
export class UserService {
  findProfile(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      return {
        username,
        token: Math.random()
          .toString(16)
          .slice(2)
      }
    }

    if (username === 'user' && password === 'user') {
      return {
        username,
        token: Math.random()
          .toString(16)
          .slice(2)
      }
    }
    throw new HttpException('Wrong username or password', HttpStatus.FORBIDDEN)
  }

  fineAbilities() {
    return [
      'npm.org.read',
      'npm.org.write',
      'npm.package.read',
      'npm.package.write',
      'github.repo.read',
      'github.repo.write',
      'github.action.read',
      'github.action.write'
    ].map(name => new AbilityEntity(name))
  }
}
