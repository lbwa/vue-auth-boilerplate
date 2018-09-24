export function formatData (set) {
  const labels = []
  const datasets = []
  for (const daily of set) {
    labels.push(daily.date)
    datasets.push(daily.visitors)
  }

  return {
    labels,
    datasets
  }
}
