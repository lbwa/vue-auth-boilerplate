const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '../')
const BUILD_PATH = path.resolve(ROOT_PATH, './dist')
const SOURCE_PATH = path.resolve(ROOT_PATH, './src')

module.exports = {
  ROOT_PATH,
  BUILD_PATH,
  SOURCE_PATH
}
