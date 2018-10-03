const fakeData = require('./fakeData')
const random = require('./randomData')
const salesType = require('./salesType')
const radar = require('./radar')

module.exports = {
  fakeData,
  randomData: random.randomData,
  randomData50: random.randomData50,
  salesType,
  radar
}
