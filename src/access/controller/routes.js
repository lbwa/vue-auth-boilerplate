import privateRoutes from 'ROUTER/routes/private'

/**
 * @description Generate a private route based on the current user's access map
 * @param {Array} routes All private routes used to filter
 * @param {Object} accessMap A map presenting the service access of current user
 */
export default function createPrivateRoutes(accessMap, routes = privateRoutes) {
  return routes.reduce((filteredRoutes, route) => {
    const routeCopy = { ...route } // shallow copy
    if (validateAccess(route, accessMap)) {
      if (routeCopy.children) {
        // filter children routes recursively
        routeCopy.children = createPrivateRoutes(accessMap, routeCopy.children)
      }

      if (!(routeCopy.children && !routeCopy.children.length)) {
        filteredRoutes.push(routeCopy)
      }
    }
    return filteredRoutes
  }, [])
}

/**
 * @description validate route access, based on current user access
 * @param {Object} route one of the private routes
 * @param {Array} accessMap A map presenting the service access of current user
 */
export function validateAccess(route, accessMap) {
  const meta = route.meta
  if (route.meta && route.meta.access) {
    // Return false when route accesses has not been satisfied
    return meta.access.every(access => !!accessMap[access])
  }

  if (route.meta && route.meta.optionalAccess) {
    return meta.optionalAccess.some(access => !!accessMap[access])
  }

  // situation: preset private route has no 'access' field
  return true
}
