const Server = require('json-server')
const config = require('./config')

const PORT = process.env.PORT || 8800

const router = Server.router()
const server = Server.create()
const middleware = Server.defaults()
config.initConfig(server)

server.use(middleware)
server.use(Server.bodyParser)
server.use(router)

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
