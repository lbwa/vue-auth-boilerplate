const version = require('./package.json').version

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
      args.__VERSION__ = JSON.stringify(version)
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

  transpileDependencies: ['vuetify']
}
