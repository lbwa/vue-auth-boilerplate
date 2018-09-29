export default {
  getAllSalesType (state) {
    return iterator([...state.salesType.all], 'x', 'y')
  },
  getOnlineSalesType (state) {
    return iterator([...state.salesType.online], 'x', 'y')
  },
  getOfflineSalesType (state) {
    return iterator([...state.salesType.offline], 'x', 'y')
  }
}

/**
 * @description Extract same keys data to same array
 * @param {Array} origin Original array
 * @param {String} labelsKey Target labels key
 * @param {String} datasetsKey Target datasets key
 */
function iterator (origin, labelsKey, datasetsKey) {
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
