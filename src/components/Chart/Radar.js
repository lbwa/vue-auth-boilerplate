import { Radar } from 'vue-chartjs'
import chartConfig from './mixins'

export default {
  extends: Radar,
  mixins: [chartConfig]
}
