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
  getAllDetails (state) {
    return calcPercent([...state.salesType.all])
  },
  getOnlineDetails (state) {
    return calcPercent([...state.salesType.online])
  },
  getOfflineDetails (state) {
    return calcPercent([...state.salesType.offline])
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
 * @param {String} indexKey.
 * @param {percentKey} percentKey. Convert origin array according to percentKey
 */
function calcPercent (origin, indexKey = 'x', percentKey = 'y') {
  const total = origin.reduce((prev, cur) => {
    return { [percentKey]: prev[percentKey] + cur[percentKey] }
  }, { [percentKey]: 0 })[percentKey]
  const details = []
  for (const item of origin) {
    details.push({
      ...item,
      percent: item[percentKey] / total
    })
  }
  return details
}
