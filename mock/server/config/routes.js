const analysis = require('../../analysis')
const workspace = require('../../workspace')
const api = require('../../api')

module.exports = {
  'GET /api/user': {
    errno: 0,
    name: 'Bowen Liu',
    avatar: 'https://assets-cdn.github.com/apple-touch-icon-120x120.png',
    notify: 12,
    position: '前端开发',
    department: '蚂蚁金服－某某某事业群－某某平台部－某某技术部'
  },

  'GET /api/analysis': analysis,

  'GET /api/workspace/projects': api.fetchProjects,

  'GET /api/workspace/activities': api.fetchActivities,

  'GET /api/workspace/radar': workspace.radar,

  'GET /api/workspace/teams': api.fetchTeam,

  'POST /api/login': (req, res) => {
    const { username, password, token } = req.body
    if (username === 'admin' && password === 'pro') {
      res.send({
        errno: 0,
        status: 'ok',
        token: token ? token : Math.random().toString(16).slice(2),
        currentAuthority: 'admin'
      })
      return
    }
    res.send({
      errno: 1,
      status: 'error',
      currentAuthority: 'guest'
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
