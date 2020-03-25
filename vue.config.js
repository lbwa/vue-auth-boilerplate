// eslint-disable-next-line @typescript-eslint/no-var-requires
const mocker = require('./mock.config.js')

const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: './',

  productionSourceMap: false,

  chainWebpack(config) {
    /**
     * Feature flags
     * @doc https://webpack.js.org/plugins/define-plugin/#feature-flags
     */
    config.plugin('define').tap(([args]) => {
      args.__DEV__ = JSON.stringify(__DEV__)
      args.__BUILD_TIME__ = JSON.stringify(new Date().toString())
      args.__VERSION__ = JSON.stringify(require('./package.json').version)
      args.__COMMIT_HASH__ = JSON.stringify(
        require('child_process')
          .execSync('git rev-parse HEAD')
          .toString()
      )
      return [args]
    })

    config.when(__DEV__, config => {
      /**
       * resolve eslint-loader with symlink package error temporarily
       * "No eslint configuration file ... at symlink package"
       * https://webpack.js.org/configuration/resolve/#resolvesymlinks
       */
      config.resolve.symlinks(false)
    })
  },

  transpileDependencies: __DEV__ ? [] : ['vuetify'],

  devServer: {
    before(app) {
      mocker(app)
    }
  }
}
