export default {
  getFormatRadar (state) {
    return iterator([...state.radar])
  },
  getPersonSum (state, getters) {
    const origin = getters.getFormatRadar
    return origin[0] ? reducer(origin[0].data) : 0 // ignore initial value
  },
  getTeamSum (state, getters) {
    const origin = getters.getFormatRadar
    return origin[1] ? reducer(origin[1].data) : 0
  },
  getDepartmentSum (state, getters) {
    const origin = getters.getFormatRadar
    return origin[2] ? reducer(origin[2].data) : 0
  }
}

function iterator (origin) {
  const formatOrigin = []
  const colorSet = ['#1890ff', '#facc14', '#2fc25b']
  let i = 0
  origin.forEach(item => {
    const labels = []
    const datasets = []
    Object.keys(item).forEach(key => {
      // Only push number type values
      if (typeof item[key] === 'number') {
        labels.push(key)
        datasets.push(item[key])
      }
    })
    formatOrigin.push({
      // labels,
      data: datasets,
      // chart.js config
      fill: false,
      borderColor: colorSet[i++]
    })
  })
  return formatOrigin
}

function reducer (origin) {
  return origin.reduce((prev, cur) => prev + cur)
}
