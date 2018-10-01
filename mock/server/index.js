const Server = require('json-server')
const config = require('./config')

const PORT = process.env.PORT || 8800

const server = Server.create()
const middleware = Server.defaults()

server.use(middleware)
server.use(Server.bodyParser)

config.initConfig(server)

const router = Server.router()
server.use(router)

server.listen(PORT, () => {
  console.log(`[json server]: Server is running at http://localhost:${PORT}`)
})
