<template>
  <el-card class="workspace__radar">
    <h2 class="workspace__radar__title" slot="header">XX 指数</h2>
    <chart-radar
      :labels="labels"
      :datasetsArray="getFormatRadar"
      :options="chartOptions"
      :height="270"
      :styles="chartStyle"
    ></chart-radar>
    <div class="workspace__radar__abstract">
      <div class="abstract__person">
        <h3 class="abstract__title">
          <span
            class="abstract__dot"
            :style="createStyle(0)"
          ></span>{{text.person}}</h3>
        <p class="abstract__value">{{getPersonSum}}</p>
      </div>
      <div class="abstract__team">
        <h3 class="abstract__title">
          <span
            class="abstract__dot"
            :style="createStyle(1)"
          ></span>{{text.team}}</h3>
        <p class="abstract__value">{{getTeamSum}}</p>
      </div>
      <div class="abstract__department">
        <h3 class="abstract__title">
          <span
            class="abstract__dot"
            :style="createStyle(2)"
          ></span>{{text.department}}</h3>
        <p class="abstract__value">{{getDepartmentSum}}</p>
      </div>
    </div>
  </el-card>
</template>

<script>
import ChartRadar from 'COMPONENTS/Chart/Radar'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      labels: ['引用', '口碑', '产量', '贡献', '热度'],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
          ticks: {
            stepSize: 4,
            beginAtZero: true
          }
        }
      },
      text: {
        person: '个人',
        team: '团队',
        department: '部门'
      },
      chartStyle: {
        position: 'relative',
        height: '270px'
      }
    }
  },

  methods: {
    createStyle (index) {
      const color = this.getFormatRadar[index]
        ? this.getFormatRadar[index].borderColor
        : '#e8e8e8'
      return `background-color: ${color};`
    }
  },

  computed: {
    ...mapGetters('workspace', [
      'getFormatRadar',
      'getPersonSum',
      'getTeamSum',
      'getDepartmentSum'
    ])
  },

  components: {
    ChartRadar
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/border.sass'
@import '~STYLE/mixin.sass'

.workspace
  &__radar
    margin-top: 24px

    &__title
      margin: 0
      font-size: 16px
      font-weight: normal
      +text-dot

    &__abstract
      display: flex
      align-item: center
      justify-content: center
      text-align: center

.abstract
  &__person, &__team, &__department
    flex: 1

  &__person, &__team
    border-right: 1px solid $border-light

  &__title
    margin: 0
    line-height: 22px
    font-size: 14px
    color: rgba(0,0,0,.45)

  &__value
    margin: 4px 0 0 0
    line-height: 32px
    font-size: 24px

  &__dot
    display: inline-block
    margin-right: 6px
    width: 6px
    height: 6px
    border-radius: 6px
    vertical-align: middle
</style>
