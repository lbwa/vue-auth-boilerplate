
const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '../')
const BUILD_PATH = path.resolve(ROOT_PATH, './dist')
const SOURCE_PATH = path.resolve(ROOT_PATH, './src')
const DEP_PATH = path.resolve(ROOT_PATH, './node_modules')
const STATIC_PATH = path.resolve(ROOT_PATH, './static')

module.exports = {
  ROOT_PATH,
  BUILD_PATH,
  SOURCE_PATH,
  DEP_PATH,
  STATIC_PATH
}
