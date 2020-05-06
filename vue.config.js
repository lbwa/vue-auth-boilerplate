/**
 * SHOULD read https://cli.vuejs.org first to modify these configurations.
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const { externals, thirdPartiesUrls } = require('./third-parties.js')
const mocker = require('./mock.config.js')

const __DEV__ = process.env.NODE_ENV === 'development'
const __PROD__ = process.env.NODE_ENV === 'production'

// should we enable preload feature for CDN files
const shouldPreloadCDNFiles = true

module.exports = {
  publicPath: './',

  productionSourceMap: false,

  chainWebpack(config) {
    /**
     * Feature flags in **compiler** time
     * @doc https://webpack.js.org/plugins/define-plugin/#feature-flags
     */
    config.plugin('define').tap(([args]) => {
      args.__DEV__ = JSON.stringify(__DEV__)
      args.__BUILD_TIME__ = JSON.stringify(new Date().toString())
      args.__VERSION__ = JSON.stringify(require('./package.json').version)
      try {
        args.__COMMIT_HASH__ = JSON.stringify(
          require('child_process')
            .execSync('git rev-parse HEAD')
            .toString()
        )
      } catch (err) {
        // works without git
        args.__COMMIT_HASH__ = JSON.stringify('')
      }
      return [args]
    })

    /**
     * resolve eslint-loader with symlink package error temporarily
     * "No eslint configuration file ... at symlink package"
     * https://webpack.js.org/configuration/resolve/#resolvesymlinks
     */
    config.resolve.symlinks(false)

    // Only works with production building
    config.when(__PROD__, config => {
      // use third-parties with cdn files. instead webpack chunk files
      config.plugin('html').tap(([args]) => {
        args.cdnCssUrls = thirdPartiesUrls.css || []
        args.cdnJsUrls = thirdPartiesUrls.js || []
        args.shouldPreloadCDNFiles = shouldPreloadCDNFiles
        return [args]
      })

      config.externals(externals)
    })
  },

  devServer: {
    before(app) {
      mocker(app)
    }
  }
}
