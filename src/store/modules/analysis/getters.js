export default {
  getAllSalesType (state) {
    return iterator([...state.salesType.all])
  },
  getOnlineSalesType (state) {
    return iterator([...state.salesType.online])
  },
  getOfflineSalesType (state) {
    return iterator([...state.salesType.offline])
  },
  getAllSum (state) {
    return sum([...state.salesType.all])
  },
  getOnlineSum (state) {
    return sum([...state.salesType.online])
  },
  getOfflineSum (state) {
    return sum([...state.salesType.offline])
  },
  getAllDetails (state, getters) {
    return calcPercent([...state.salesType.all], getters.getAllSum)
  },
  getOnlineDetails (state, getters) {
    return calcPercent([...state.salesType.online], getters.getOnlineSum)
  },
  getOfflineDetails (state, getters) {
    return calcPercent([...state.salesType.offline], getters.getOfflineSum)
  }
}

/**
 * @description Extract same keys data to same array
 * @param {Array} origin. Original array
 * @param {String} labelsKey. Target labels key
 * @param {String} datasetsKey. Target datasets key
 */
function iterator (origin, labelsKey = 'x', datasetsKey = 'y') {
  const labels = []
  const datasets = []
  for (const item of origin) {
    labels.push(item[labelsKey])
    datasets.push(item[datasetsKey])
  }
  return {
    labels,
    datasets
  }
}

/**
 * @description 根据 percentKey 计算百分比并组成新的数据对象
 * @param {Array} origin. Original array
 * @param {percentKey} percentKey. Convert origin array according to percentKey
 */
function calcPercent (origin, sum, percentKey = 'y') {
  const details = []
  for (const item of origin) {
    details.push({
      ...item,
      percent: item[percentKey] / sum
    })
  }
  return details
}

/**
 * @description 数组中特定键值求和
 * @param {Array} origin. Original array
 * @param {String} sumKey. Key, used to sum from original array
 */
function sum (origin, sumKey = 'y') {
  return origin.reduce((prev, cur) => {
    return { [sumKey]: prev[sumKey] + cur[sumKey] }
  }, { [sumKey]: 0 })[sumKey]
}
