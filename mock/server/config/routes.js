const analysis = require('../../analysis')

module.exports = {
  'GET /api/user': {
    name: 'Bowen Liu',
    avatar: '',
    token: Math.random().toString(16).slice(2),
    notify: 12,
    position: '前端开发',
    department: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED'
  },

  'GET /api/analysis': analysis,

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
  }
}
