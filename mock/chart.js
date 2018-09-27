import dayjs from 'dayjs'

const fakeData = []
const beginDay = new Date().getTime()
const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]

for (let i = 0; i < fakeY.length; i++) {
  fakeData.push({
    date: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    value: fakeY[i]
  })
}

const randomData = []
for (let i = 0; i < 12; i++) {
  randomData.push({
    month: `${i + 1}月`,
    total: Math.floor(Math.random() * 1000) + 200
  })
}

const randomData50 = []
for (let i = 0; i < 50; i++) {
  randomData50.push({
    name: `关键词-${i}`,
    data: Math.floor(Math.random() * 1000) + 200
  })
}

export {
  fakeData,
  randomData,
  randomData50
}
