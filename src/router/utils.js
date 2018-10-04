export function createChunkName (path) {
  const formatPath = path.split('/')
  const normalizePath = [formatPath[0].toLowerCase()]
  for (let i = 1; i < formatPath.length; i++) {
    const str = formatPath[i].replace(/^[a-z]/, (initial) => {
      return initial.toUpperCase()
    })
    normalizePath.push(str)
  }
  return normalizePath.join('')
}

export function createRoutes (paths, components, routes = []) {
  paths.forEach(path => {
    const chunkName = createChunkName(path)
    routes.push({
      path: path.toLowerCase(),
      component: components[chunkName]
    })
  })
  return routes
}
