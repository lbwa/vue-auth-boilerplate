import { createChunkName } from '../utils'

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
      // `async/*` for same output directory
      importer[chunkName] = () => import(/* webpackChunkName: 'async/[request][index]' */ `VIEW/${component}`)
    }
  })
  return importer
}
