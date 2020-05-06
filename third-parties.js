// Record all third-party dependencies that need to be served by CDN.
// All these dependencies would not handle by webpack when production building.
// {
//   name: '',  // required, npm package name
//   library: '', // required, global variable name in browser environment
//   js: '', // cdn js file urls
//   css: '' // cdn css file urls
// }
const thirdParties = [
  {
    name: 'vue',
    library: 'Vue',
    js: 'https://cdn.jsdelivr.net/npm/vue@2.6.x/dist/vue.min.js'
  },
  {
    name: 'vue-router',
    library: 'VueRouter',
    js: 'https://cdn.jsdelivr.net/npm/vue-router@3.1.x/dist/vue-router.min.js'
  },
  {
    name: 'vuex',
    library: 'Vuex',
    js: 'https://cdn.jsdelivr.net/npm/vuex@3.3.x/dist/vuex.min.js'
  },
  {
    name: 'axios',
    library: 'axios',
    js: 'https://cdn.jsdelivr.net/npm/axios@0.19.x/dist/axios.min.js'
  },
  {
    name: 'vuetify',
    library: 'Vuetify',
    js: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.js',
    css: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css'
  }
]

// DO NOT MODIFY the following codes if you don't know what's going on.

// use to be webpackConfig.externals
// https://webpack.js.org/configuration/externals/
const externals = {}
// inject these urls to html template
const urls = thirdParties.reduce(
  (urls, library) => {
    if (library.js) {
      urls.js.push(library.js)
    }
    if (library.css) {
      urls.css.push(library.css)
    }
    // Only set webpackConfig.externals for js 3rd-party library
    if (library.js && library.name && library.library) {
      externals[library.name] = library.library
    }
    return urls
  },
  {
    js: [],
    css: []
  }
)

exports.externals = externals
exports.thirdPartiesUrls = urls
