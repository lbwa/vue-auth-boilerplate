const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const PATH = require('./path')
const path = require('path')

const devMode = process.env.NODE_ENV === 'development'
const OUTPUT_CONFIG = devMode ? '[name].[hash].js' : '[name].[contentHash:8].js'

module.exports = {
  mode: devMode ? 'development' : 'production',
  context: PATH.ROOT_PATH,
  target: 'web',
  entry: {
    client: path.resolve(PATH.SOURCE_PATH, './index.js')
  },
  output: {
    path: PATH.BUILD_PATH,
    filename: OUTPUT_CONFIG
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      'SOURCE': PATH.SOURCE_PATH,
      'VIEW': path.resolve(PATH.SOURCE_PATH, './view'),
      'COMPONENTS': path.resolve(PATH.SOURCE_PATH, './components'),
      'STYLE': path.resolve(PATH.SOURCE_PATH, './style'),
      'STATIC': PATH.STATIC_PATH,
      'MOCK': path.resolve(PATH.ROOT_PATH, './mock'),
      'SERVICES': path.resolve(PATH.SOURCE_PATH, './services')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: PATH.SOURCE_PATH,
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarnings: true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [
          PATH.SOURCE_PATH
        ]
      },
      {
        test: /\.js$/,
        include: PATH.SOURCE_PATH,
        loader: 'babel-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)\??.*$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]'
        }
      }
    ]
  },
  stats: 'minimal',
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
