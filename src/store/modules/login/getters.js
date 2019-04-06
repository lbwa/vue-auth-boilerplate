import { createAccessMap } from 'PERMISSION/controller/routes'

export default {
  username(state) {
    return (state.userInfo && state.userInfo.username) || ''
  },
  accessToken({ accessToken }) {
    return accessToken
  },
  accesses({ accesses }) {
    return accesses
  },
  accessMap({ accesses }) {
    return createAccessMap(accesses)
  },
  // used to add user private routes (router.addRoutes) to global routes map.
  dynamicRoutes({ dynamicRoutes }) {
    return dynamicRoutes
  },
  // used to create recursive aside.
  allRoutes({ allRoutes }) {
    return allRoutes
  },
  randomPhoto({ randomPhoto }) {
    return dataKey =>
      dataKey.split('.').reduce((target, key) => target[key], randomPhoto)
  }
}
