const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackBar = require('webpackbar')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const baseConfig = require('./webpack.base')
const PATH = require('./path')

const baseSassLoader = {
  loader: 'sass-loader',
  options: {
    indentedSyntax: true
  }
}

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    config: {
      path: './config/postcss.config.js'
    }
  }
}

const sassLoader = {
  test: /\.sass/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    postCSSLoader,
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

baseConfig.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new OptimizeCSSAssetsPlugin({})
  ],
  runtimeChunk: {
    name: 'runtime'
  },
  splitChunks: {
    chunks: 'all',
    // minSize: 30000 // bytes, equal to 30kb
    cacheGroups: {
      vendor: {
        test: /node_modules[\\/](?!(element-ui))/,
        name: 'vendor',
        enforce: true
      },
      'vendor-ui': {
        test: /node_modules[\\/]element-ui/,
        name: 'vendor-ui'
      }
    }
  }
}

baseConfig.plugins.push(
  new HTMLWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(PATH.SOURCE_PATH, './index.html'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
  }),
  new webpack.HashedModuleIdsPlugin(),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash:8].css',
    allChunks: true
  }),
  new WebpackBar({
    profile: true
  })
)

module.exports = baseConfig
