/**
 * Record all third-party dependencies that need to be served by CDN.
 *
 * 1. All these JS dependencies would not be handled by webpack when production
 * building.
 * 2. ONLY SUPPORT UMD js libraries;
 * 3. Pure CSS libraries should work with __DEV__ and require() for
 * tree-shaking.
 *
 * {
 *    name: '',  // required for js, npm package name
 *    library: '', // required for js, global variable name in the browser
 *    js: '', // js cdn file urls
 *    css: '' // css cdn file urls
 * }
 */

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
    name: 'vuex-persistedstate',
    library: 'createPersistedState',
    js:
      'https://cdn.jsdelivr.net/npm/vuex-persistedstate@3.0.x/dist/vuex-persistedstate.umd.js'
  },
  // FIXME: duplicated importation
  // {
  //   name: 'vuetify',
  //   library: 'Vuetify',
  //   js: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.js',
  //   css: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css'
  // },
  {
    css:
      'https://cdn.jsdelivr.net/npm/material-design-icons-iconfont@5.0.x/dist/material-design-icons.min.css'
  },
  {
    css:
      'https://cdn.jsdelivr.net/npm/roboto-fontface@0.10.0/css/roboto/roboto-fontface.min.css'
  },
  {
    css: 'https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css'
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
    // set webpackConfig.externals
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
