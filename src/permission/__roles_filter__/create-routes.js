import dynamicRoutes from 'ROUTER/routes/dynamic'

/**
 * @param {String} role User access
 */
export default function createDynamicRoutes (role) {
  if (typeof role !== 'string') throw new Error('[Dynamic routes]: Wrong role.')

  return filterRoutes(dynamicRoutes, role)
  // ! ADMINISTRATOR has all route access if necessary.
  // return role === ADMINISTRATOR
  //   ? dynamicRoutes
  //   : filterRoutes(dynamicRoutes, role)
}

/**
 * @param {Object[]} routes Original routes
 * @param {String} role User access
 */
function filterRoutes (routes, role) {
  return routes.reduce((accumulator, route) => {
    const routeCopy = { ...route } // shallow copy
    if (hasAccess(route, role)) {
      if (routeCopy.children) {
        // filter original children routes, **override** all children routes.
        routeCopy.children = filterRoutes(routeCopy.children, role)
      }

      // Skip `push` operation if all the route children has been filtered.
      if (!(routeCopy.children && !routeCopy.children.length)) {
        accumulator.push(routeCopy)
      }
    }
    return accumulator
  }, [])
}

function hasAccess (route, role) {
  return route.meta && route.meta.roles
    ? route.meta.roles.includes(role)
    : true
}
