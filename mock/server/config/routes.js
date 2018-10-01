const analysis = require('../../analysis')

module.exports = {
  'GET /api/user': {
    name: 'jack ma',
    avatar: '',
    token: Math.random().toString(16).slice(2),
    notify: 12
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
