const path = require('path')
const PATH = require('./config/path')
const terserOptions = require('./config/terserConfig')

const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: !__DEV__ ? './' : '/',
  productionSourceMap: false, // turn off source map
  chainWebpack(chainConfig) {
    aliasCreator(chainConfig)

    chainConfig.when(!__DEV__, chainConfig => {
      const TerserPlugin = require('terser-webpack-plugin')
      chainConfig.optimization.minimizer([
        new TerserPlugin(
          terserOptions({
            productionSourceMap: false,
            parallel: true
          })
        )
      ])

      // Optimize chunks under production mode
      chainConfig.optimization.splitChunks({
        minSize: 30000, // 30kb
        cacheGroups: {
          // split ui into a single chunk for long-term caching
          ui: {
            name: 'element-ui',
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            priority: -5, // more then `vendors` chunk priority
            chunks: 'all' // to optimize sync and async chunks
          },
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          },
          // split all css into s single chunk
          // ref: https://github.com/webpack-contrib/mini-css-extract-plugin#extracting-css-based-on-entry
          styles: {
            name: 'chunk-styles',
            test: (m, c, entry = 'app') =>
              m.constructor.name === 'CssModule' &&
              recursiveIssuer(m) === entry,
            chunks: 'all', // to optimize sync and async chunks
            enforce: true
          }
        }
      })

      // an alias for:
      // runtimeChunk: { name: 'runtime' }
      // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
      chainConfig.optimization.runtimeChunk('single')
    })
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

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer)
  } else if (m.name) {
    return m.name
  } else {
    return false
  }
}
