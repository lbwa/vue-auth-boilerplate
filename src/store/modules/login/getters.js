export default {
  username({ userInfo }) {
    return (userInfo && userInfo.username) || '无用户名'
  },
  accessToken({ accessToken }) {
    return accessToken
  },
  accesses({ accesses }) {
    return accesses
  },
  accessMap({ accesses }) {
    return accesses.reduce(
      (map, access) => ({
        ...map,
        [access['access']]: access
      }),
      {}
    )
  },
  // used to create recursive aside.
  allRoutes(state) {
    return state.allRoutes
  }
}
