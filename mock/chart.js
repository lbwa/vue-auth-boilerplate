// import dayjs from 'dayjs'
const dayjs  = require('dayjs')

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
for (let i = 0; i < 5; i++) {
  randomData50.push({
    name: `关键词-${i}`,
    data: Math.floor(Math.random() * 1000) + 200
  })
}

const salesTypeData = [
  {
    name: '家用电器',
    value: 4544,
  },
  {
    name: '食用酒水',
    value: 3321,
  },
  {
    name: '个护健康',
    value: 3113,
  },
  {
    name: '服饰箱包',
    value: 2341,
  },
  {
    name: '母婴产品',
    value: 1231,
  },
  {
    name: '其他',
    value: 1231,
  },
]

const salesTypeDataOnline = [
  {
    name: '家用电器',
    value: 244,
  },
  {
    name: '食用酒水',
    value: 321,
  },
  {
    name: '个护健康',
    value: 311,
  },
  {
    name: '服饰箱包',
    value: 41,
  },
  {
    name: '母婴产品',
    value: 121,
  },
  {
    name: '其他',
    value: 111,
  },
]

const salesTypeDataOffline = [
  {
    name: '家用电器',
    value: 99,
  },
  {
    name: '食用酒水',
    value: 188,
  },
  {
    name: '个护健康',
    value: 344,
  },
  {
    name: '服饰箱包',
    value: 255,
  },
  {
    name: '其他',
    value: 65,
  },
]

module.exports = {
  fakeData,
  randomData,
  randomData50,
  salesType: {
    all: salesTypeData,
    online: salesTypeDataOnline,
    offline: salesTypeDataOffline
  }
}
