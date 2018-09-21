const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const chalk = require('chalk')
const path = require('path')
const PATH = require('./path')

const baseSassLoader = {
  loader: 'sass-loader',
  options: {
    indentedSyntax: true
  }
}

const sassLoader = {
  test: /\.sass/,
  use: [
    'vue-style-loader',
    'css-loader',
    baseSassLoader
  ]
}

const cssLoader = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
}

baseConfig.module.rules.push(
  sassLoader,
  cssLoader
)

baseConfig.devtool = 'cheap-module-eval-source-map'

baseConfig.devServer = {
  host: '0.0.0.0',
  port: 5000,
  overlay: {
    warnings: false,
    errors: true
  }
}

baseConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new HTMLWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(PATH.SOURCE_PATH, './index.html')
  }),
  new WebpackBar({
    profile: true,
    done (sharedState, ctx) {
      const server = baseConfig.devServer
      const log = chalk.blue(`http://${server.host}:${server.port}`)
      console.log(`\nServer is running at ${log}\n`)
    }
  })
)

module.exports = baseConfig
