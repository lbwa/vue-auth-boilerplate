const assets = require('assert')
const config = require('./routes')

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

function initConfig (server) {
  Object.keys(config).forEach(route => {
    const formatConfig = parseRouteConfig(route)

    assets(!!server[formatConfig.method], `Method ${formatConfig.method} is invalid !`)
    const configType = typeof config[route]
    assets(configType === 'object', `${config[route]} should be a object !`)

    server[formatConfig.method](
      formatConfig.path,
      function handler (req, res) {
        res.header('Access-Control-Allow-Origin', '*')
        res.json(config[route])
      }
    )
  })
}

module.exports = {
  initConfig
}
