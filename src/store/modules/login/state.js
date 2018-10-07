import { commonRoutes } from 'ROUTER/routes'

export default {
  username: '',
  role: [],
  token: '',
  routes: commonRoutes, // store current global routes map
  addRoutes: [] // for router.addRoutes() function
}
