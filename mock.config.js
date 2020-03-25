function createRandomString() {
  return Math.random()
    .toString(16)
    .slice(2)
}

function Response(code, data) {
  this.statusCode = code
  this.data = data
}

const apis = {
  /**
   * 'METHOD ROUTE': function requestHandler(request, response) {}
   */
  'GET /user/abilities': function(req, res) {
    res.json(
      new Response(
        200,
        [
          'npm.org.read',
          'npm.org.write',
          'npm.package.read',
          'npm.package.write',
          'github.repo.read',
          'github.repo.write',
          'github.action.read',
          'github.action.write'
        ].map(name => ({
          name,
          uid: createRandomString(),
          createAt: Date.now()
        }))
      )
    )
  },
  'POST /user/profile': function(req, res) {
    res.json(
      new Response(200, {
        token: createRandomString()
      })
    )
  }
}

module.exports = function mocker(app) {
  const methodsReg = /^(?:GET|POST|DELETE|PUT|PATCH|OPTION)$/i
  const routeReg = /^\/.+/
  Object.keys(apis).forEach(api => {
    const [method, route] = api.split(' ')

    if (methodsReg.test(method) && routeReg.test(route)) {
      app[method.toLowerCase()](route, apis[api])
    } else {
      console.error('[MOCK]: Unexpected method or route')
    }
  })
}
