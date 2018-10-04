/**
 * Pass a paths array to create a import() function for each item.
 *
 * @param {*} components. A paths array
 * @returns A object including every component import()
 * eg. ['a/b'] --> { aB: () => import('view/a/b') }
 */
export default function createImporter (components) {
  const importer = {}
  components.forEach(component => {
    const chunkName = createChunkName(component)
    if (!importer[chunkName]) {
      importer[chunkName] = () => import(/* webpackChunkName: 'async-[request][index]' */ `VIEW/${component}`)
    }
  })
  return importer
}

function createChunkName (path) {
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
