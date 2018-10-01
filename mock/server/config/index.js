const assets = require('assert')
const config = require('./routes')

module.exports = {
  initConfig
}

function parseRouteConfig (key) {
  let method = 'get'
  let path = key
  if (key.indexOf(' ') > -1) {
    const formatKey = key.split(' ')
    method = formatKey[0].toLowerCase()
    path = formatKey[1]
  }
  return {
    method,
    path
  }
}

function createHandler (cb) {
  return function (req, res, ...args) {
    res.header('Access-Control-Allow-Origin', '*')
    typeof cb === 'function' ? cb(req, res, ...args) : res.json(cb)
  }
}

function initConfig (server) {
  Object.keys(config).forEach(route => {
    const formatConfig = parseRouteConfig(route)

    assets(!!server[formatConfig.method], `Method ${formatConfig.method} is invalid !`)
    const configType = typeof config[route]
    assets(
      configType === 'object' || configType === 'function',
      `${config[route]} should be a object or function !`
    )

    server[formatConfig.method](
      formatConfig.path,
      createHandler(config[route])
    )
  })
}

