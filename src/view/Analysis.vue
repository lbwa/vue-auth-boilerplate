<template>
  <el-main>
    <el-row type="flex" :gutter="24">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <chart-card
          cardHeader="总销售额"
          :cardTotal="formatPrice(12566)"
          :footerTitle="'日销售量'"
          :footerDetail="formatPrice(10000)"
        >
          <main>
            <trend
              :trend="sellingTrend"
            ></trend>
          </main>
        </chart-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <chart-card
          cardHeader="访问量"
          :cardTotal="8846"
          :footerTitle="'日访问量'"
          :footerDetail="1234"
        >
          <main>chart area</main>
        </chart-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <chart-card
          cardHeader="支付笔数"
          :cardTotal="6560"
          :footerTitle="'转化率'"
          :footerDetail="'60%'"
        >
          <main>card body</main>
        </chart-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <chart-card
          cardHeader="运营活动效果"
          :cardTotal="'78%'"
          :footerTitle="'转化率'"
          :footerDetail="'60%'"
        >
          <main>chart area</main>
        </chart-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import ChartCard from 'COMPONENTS/ChartCard'
import Trend from 'COMPONENTS/Trend'
import { formatPrice } from 'COMPONENTS/utils'

export default {
  data () {
    return {
      sellingTrend: [
        {
          key: '同周比',
          value: 0.12
        },
        {
          key: '日环比',
          value: -0.11
        }
      ]
    }
  },

  methods: {
    formatPrice (price) {
      return formatPrice(price)
    }
  },

  components: {
    ChartCard,
    Trend
  }
}
</script>

<style lang="sass" scoped>

</style>
