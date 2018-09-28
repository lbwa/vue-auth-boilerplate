<template>
  <el-col
    class="analysis__sales"
    :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
  >
    <analysis-middle title="销售额类别">
      <!-- analysis sales radio tab -->
      <el-row>
        <el-radio-group v-model="radioSelected" size="medium">
          <el-radio-button label="全部渠道"></el-radio-button>
          <el-radio-button label="线上"></el-radio-button>
          <el-radio-button label="门店"></el-radio-button>
        </el-radio-group>
      </el-row>

      <el-row slot="table">
        {{chartData}}
      </el-row>
    </analysis-middle>
  </el-col>
</template>

<script>
import AnalysisMiddle from 'COMPONENTS/AnalysisMiddle'

export default {
  data () {
    return {
      radioSelected: '全部渠道'
    }
  },

  computed: {
    chartData () {
      if (this.radioSelected === '线上') return 'online'
      if (this.radioSelected === '门店') return 'store'
      return 'all'
    }
  },

  components: {
    AnalysisMiddle
  }
}
</script>

<style lang="sass" scoped>

</style>
