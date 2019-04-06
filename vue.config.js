const path = require('path')
const PATH = require('./config/path')

const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/adminize/' : '/',
  productionSourceMap: false, // turn off source map
  configureWebpack(config) {
    if (!__DEV__) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack(chainConfig) {
    aliasCreator(chainConfig)
  }
}

function aliasCreator(chainConfig) {
  chainConfig.resolve.alias
    .set('SOURCE', PATH.SOURCE_PATH)
    .set('PAGES', path.resolve(PATH.SOURCE_PATH, './pages'))
    .set('COMPONENTS', path.resolve(PATH.SOURCE_PATH, './components'))
    .set('LAYOUT', path.resolve(PATH.SOURCE_PATH, './layout'))
    .set('STYLE', path.resolve(PATH.SOURCE_PATH, './style'))
    .set('STATIC', PATH.STATIC_PATH)
    .set('ROUTER', path.resolve(PATH.SOURCE_PATH, './router'))
    .set('STORE', path.resolve(PATH.SOURCE_PATH, './store'))
    .set('UTILS', path.resolve(PATH.SOURCE_PATH, './utils'))
    .set('API', path.resolve(PATH.SOURCE_PATH, './api'))
    .set('PERMISSION', path.resolve(PATH.SOURCE_PATH, './permission'))
    .set('ASSETS', path.resolve(PATH.SOURCE_PATH, './assets'))
    .set('LANG', path.resolve(PATH.SOURCE_PATH, './lang'))
}
