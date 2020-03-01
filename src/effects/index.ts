type EffectResponse = {
  code: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function userLogin(username: string, password: string) {
  return new Promise<EffectResponse>((resolve, reject) => {
    setTimeout(() => {
      if (
        (username === 'admin' && password === 'admin') ||
        (username === 'user' && password === 'user')
      ) {
        return resolve({
          code: 200,
          token:
            Math.random()
              .toString(16)
              .slice(2) +
            username +
            password
        })
      }
      reject({
        code: 403,
        msg: 'account error'
      })
    }, 2 * 1000)
  })
}

export function fetchUserAbilities() {
  return new Promise<EffectResponse>((resolve, reject) => {
    setTimeout(() => {
      const simulateFailed = Math.random() > 0.9
      if (simulateFailed) {
        return reject({
          code: 403,
          msg: 'abilities error'
        })
      }
      resolve({
        code: 200,
        abilities: Array(Math.floor(Math.random() * 20))
          .fill(null)
          .map((_, index) => ({
            id: `ability.simulator.${index}`,
            name: `ability.simulator.${index}`,
            createAt: Date.now() + index
          }))
      })
    }, 2 * 1000)
  })
}
