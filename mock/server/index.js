const Server = require('json-server')
const config = require('./config')

const PORT = process.env.PORT || 8800

// Notice: Keep correct sequences, otherwise request body would be empty object.
const server = Server.create()
const middleware = Server.defaults()
const router = Server.router()

server.use(middleware)
server.use(Server.bodyParser)

config.initConfig(server)
server.use(router)

server.listen(PORT, () => {
  console.log(`[json server]: Server is running at http://localhost:${PORT}`)
})
