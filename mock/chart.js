import dayjs from 'dayjs'

const visitorData = []
const beginDay = new Date().getTime()
const fakeDailyVisitor = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]

for (let i = 0; i < fakeDailyVisitor.length; i++) {
  visitorData.push({
    date: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    visitors: fakeDailyVisitor[i]
  })
}

export {
  visitorData
}
