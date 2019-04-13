// https://cli.vuejs.org/zh/config/#babel
module.exports = {
  presets: ['@vue/babel-preset-app'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
