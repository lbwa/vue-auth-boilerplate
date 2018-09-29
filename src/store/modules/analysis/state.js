// store.state basic schema

export default {
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
    daily: 0,
    total: 0
  },

  visitors: {
    daily: 0,
    chart: [],
    total: 0
  },

  payments: {
    total: 0,
    chart: [],
    rate: 0.6
  },

  operations: {
    influence: 0.0, // chart
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
    conversion: 0.1
  },

  rankList: [
    {
      name: 'sample name',
      value: 10000
    }
  ],

  searchData: {
    total: {
      value: 12321,
      trend: 0.1
    },
    average: {
      value: 2.7,
      trend: -0.2
    },
    chart: [
      {
        name: 'default title',
        data: 1234
      }
    ]
  },

  salesType: {
    all: [
      {
        name: 'sample 1',
        value: 123
      },
      {
        name: 'sample 2',
        value: 234
      }
    ],
    online: [
      {
        name: 'sample 1',
        value: 123
      }
    ],
    offline: [
      {
        name: 'sample 2',
        value: 234
      }
    ]
  }
}
