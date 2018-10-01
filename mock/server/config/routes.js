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
    console.log(`req.body`, req)
    const { username, password } = req.body
    if (username === 'admin' && password === 'pro') {
      res.send({
        status: 'ok',
        currentAuthority: 'admin'
      })
      return
    }
    res.send({
      status: 'error',
      currentAuthority: 'guest'
    })
  }
}
