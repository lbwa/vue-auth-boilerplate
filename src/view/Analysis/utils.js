export function formatVisitorData (visitorsData) {
  const labels = []
  const datasets = []
  for (const daily of visitorsData) {
    labels.push(daily.date)
    datasets.push(daily.visitors)
  }

  return {
    labels,
    datasets
  }
}
