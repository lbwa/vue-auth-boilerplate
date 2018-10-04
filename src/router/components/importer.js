/**
 * Pass a paths array to create a import() function for each item.
 *
 * @param {*} components. A paths array
 * @returns A object including every component import()
 * eg. ['a/b'] --> { aB: () => import('view/a/b') }
 */
function createImporter (components) {
  const importer = {}
  components.forEach(component => {
    const chunkName = createChunkName(component)
    const convertChunkName = convertor(chunkName)
    if (!importer[convertChunkName]) {
      importer[convertChunkName] = () => import(/* webpackChunkName: 'async-[request]-[index]' */ `VIEW/${component}`)
    }
  })
  return importer
}

function createChunkName (path) {
  return path.split('/').map(key => key.toLowerCase()).join('-')
}

function convertor (str) {
  str.replace(/^-/, '')
  const strArr = str.split('-')
  const newStrArr = []

  for (let i = 1, len = strArr.length; i < len; i++) {
    const newStr = strArr[i].replace(/^[a-z]/, function (initialKey) {
      return initialKey.toUpperCase()
    })
    newStrArr.push(newStr)
  }
  newStrArr.unshift(strArr[0])

  return newStrArr.join('')
}

export default createImporter
