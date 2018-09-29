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
for (let i = 0; i < 5; i++) {
  randomData50.push({
    name: `关键词-${i}`,
    data: Math.floor(Math.random() * 1000) + 200
  })
}

const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
]

const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
]

const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '食用酒水',
    y: 188,
  },
  {
    x: '个护健康',
    y: 344,
  },
  {
    x: '服饰箱包',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
]

export default {
  fakeData,
  randomData,
  randomData50,
  salesType: {
    all: salesTypeData,
    online: salesTypeDataOnline,
    offline: salesTypeDataOffline
  }
}
