export default {
  isCollapse: false,
  dailyVisitor: 1234,
  totalVisitor: 8846,
  dailySelling: 10000,
  totalSelling: 126566,
  totalPayment: 6560,
  influenceRate: 0.78,
  conversionRate: 0.6,
  sales: {
    trend: [
      {
        key: '同周比',
        value: 0.12
      },
      {
        key: '日环比',
        value: -0.11
      }
    ],
    daily: 10000,
    total: 126566
  },
  visitors: {
    daily: 1234,
    trend: '', // chart
    total: 8846
  },
  payments: {
    total: 6560,
    rate: 0.6
  },
  operations: {
    influence: 0.78,
    trend: '', // chart
    conversion: 0.6
  }
}
