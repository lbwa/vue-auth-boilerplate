import routes from 'ROUTER/routes/dynamic'

/**
 * @description 根据后端回传的当前用户权限表创建一个用于过滤 routes 的 hashmap
 * @param {Array} accesses 后端回传的当前用户权限表
 */
export function createAccessMap (accesses) {
  return accesses.reduce((accessMap, access) => {
    const accessNameList = access.access.split('.')
    // accessNameList[1] 表示某个模块的名称，如 device
    // accessNameList[2] 表示某个模块下的某个特定权限。如 read，write 等
    accessMap[accessNameList[1]] = (accessMap[accessNameList[1]] || []).concat(
      accessNameList[2]
    )
    return accessMap
  }, {})
}

/**
 * @description 根据重建的当前用户各个模块权限的 hashmap 过滤所有私有路由，得到当前用
 * 户可访问的私有路由
 * @param {Array} routes 所有的私有路由表
 * @param {Object} accessMap 一个对应当前用户各个模块权限的 hashmap
 */
function filterRoutes (routes, accessMap) {
  return routes.reduce((filteredRoutes, route) => {
    const routeCopy = { ...route } // shallow copy
    // 2.1 validate private route access
    // determine whether private route is added to global routes map.
    if (validateAccess(route, accessMap)) {
      if (routeCopy.children) {
        // recursive filter
        routeCopy.children = filterRoutes(routeCopy.children, accessMap)
      }

      if (!(routeCopy.children && !routeCopy.children.length)) {
        filteredRoutes.push(routeCopy)
      }
    }
    return filteredRoutes
  }, [])
}

/**
 * @description 验证用户是否有权限访问某个私有路由
 * @param {Object} route 某个私有路由对象
 * @param {Array} accessMap 一个对应当前用户各个模块权限的 hashmap
 */
// ! 本质问题: 如何确定两个数组是否存在交集
export function validateAccess (route, accessMap) {
  if (route.meta && route.meta.access) {
    return Object.keys(route.meta.access).every(accessName => {
      // 在后端回传的权限表中不存在对应 route 所需的最低权限中的一项，
      // 即不满足 private route 的最低权限需求
      if (!accessMap[accessName]) return false

      return route.meta.access[accessName].every(routeAccess =>
        accessMap[accessName].includes(routeAccess)
      )
    })
  }

  // situation: preset private route has no 'access' field
  return true
}

export default function createPrivateRoutes (accessMap) {
  return filterRoutes(routes, accessMap)
}
