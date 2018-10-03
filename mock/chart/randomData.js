const randomData = []
for (let i = 0; i < 12; i++) {
  randomData.push({
    month: `${i + 1}月`,
    total: Math.floor(Math.random() * 1000) + 200
  })
}

const randomData50 = []
for (let i = 0; i < 5; i++) {
  randomData50.push({
    name: `关键词-${i}`,
    data: Math.floor(Math.random() * 1000) + 200
  })
}

module.exports = {
  randomData,
  randomData50
}
