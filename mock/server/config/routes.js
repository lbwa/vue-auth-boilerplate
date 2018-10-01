const analysis = require('../../analysis')

const token = Math.random.toString(16).slice(2)

module.exports = {
  'GET /api/user': {
    name: 'jack ma',
    avatar: '',
    userId: token,
    notify: 12
  },

  'GET /api/analysis': analysis
}
