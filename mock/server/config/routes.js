const analysis = require('../../analysis')
const workspace = require('../../workspace')
const api = require('../../api')

module.exports = {
  'GET /api/user': {
    errno: 0,
    name: 'Bowen Liu',
    avatar: 'https://assets-cdn.github.com/favicon.ico',
    notify: 12,
    position: '前端开发',
    department: '蚂蚁金服－某某某事业群－某某平台部－某某技术部'
  },

  'GET /api/analysis': analysis,

  'GET /api/workspace/projects': api.fetchProjects,

  'GET /api/workspace/activities': api.fetchActivities,

  'GET /api/workspace/radar': workspace.radar,

  'GET /api/workspace/teams': api.fetchTeam,

  'GET /api/token': (req, res) => {
    // simulate user token validating
    const role = req.query.token.replace(/^simulate-token-/, '')
    if (['admin', 'user'].includes(role)) {
      res.json({
        errno: 0,
        role: [role]
      })
    } else {
      res.sendStatus(403)
    }
  },

  'POST /api/login': (req, res) => {
    const { username, password } = req.body
    if ((username === 'admin' || username === 'user') && password === 'pro') {
      res.send({
        errno: 0,
        status: 'ok',
        token: `simulate-token-${username}`,
        role: [username]
      })
      return
    }
    res.send({
      errno: 1,
      status: 'error',
      role: ['user']
    })
  },

  'POST /api/form/step': (req, res) => {
    const {
      payAccount,
      receiverAccount,
      receiverType,
      receiverName,
      amount,
      password
    } = req.body
    if (password === 'admin') {
      res.send({
        errno: 0,
        status: 'ok',
        message: ''
      })
    } else {
      res.send({
        errno: 1,
        status: 'error',
        message: 'Invalid username or password'
      })
    }
  },

  'POST /api/form/basic': (req, res) => {
    res.send({
      errno: 0,
      status: 'ok',
      message: ''
    })
  }
}
