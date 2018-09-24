import { fakeData, randomData } from './chart'

export const sales = {
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
  daily: 12423,
  total: 126566,
  totalDetails: randomData // chart
}

export const visitors = {
  daily: 1234,
  chart: fakeData,
  total: 8846
}

export const payments = {
  total: 6560,
  chart: fakeData, // simulate fake datasets
  rate: 0.6
}

export const operations = {
  influence: 0.78, // chart
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
  conversion: 0.6
}
