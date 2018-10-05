<template>
  <el-card class="basic-form__main">
    <h2 class="basic-form__header"></h2>
    <el-form
      class="basic-form__wrapper"
      ref="mainForm"
      :model="form"
      :rules="rules"
      label-width="30%"
      :size="size"
    >
      <el-form-item :label="text.title">
        <el-input
          :value="form.title"
          @change.native="setTitle"
          :placeholder="text.titlePlaceholder"
        ></el-input>
      </el-form-item>

      <el-form-item :label="text.period">
        <el-date-picker
          v-model="form.timePicker"
          type="daterange"
          :style="{ width: '100%' }"
          :range-separator="text.to"
          :start-placeholder="text.startDay"
          :end-placeholder="text.endDay">
        </el-date-picker>
      </el-form-item>

      <el-form-item :label="text.target">
        <el-input
          type="textarea"
          :placeholder="text.targetPlaceholder"
          :autosize="{ minRows: 4 }"
          v-model="form.target"
        ></el-input>
      </el-form-item>

      <el-form-item :label="text.measure">
        <el-input
          type="textarea"
          :placeholder="text.measurePlaceholder"
          :autosize="{ minRows: 4 }"
          v-model="form.measure"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <span class="basic-form__public__label" slot="label">
          <span class="label__main">{{text.client}}</span>
          <span class="label__optional">{{text.optional}}</span>
          <el-tooltip placement="top" :content="text.clientDescription">
            <i class="el-icon-info"></i>
          </el-tooltip>
        </span>
        <el-input
          v-model="form.client"
          :placeholder="text.clientPlaceholder"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <span class="basic-form__public__label" slot="label">
          <span class="label__main">{{text.inviter}}</span>
          <span class="label__optional">{{text.optional}}</span>
        </span>
        <el-input
          v-model="form.inviter"
          :placeholder="text.inviterPlaceholder"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <span class="basic-form__public__label" slot="label">
          <span class="label__main">{{text.weight}}</span>
          <span class="label__optional">{{text.optional}}</span>
        </span>
        <el-input-number
          v-model="form.weight"
          controls-position="right"
          :min="0" :max="100"
        ></el-input-number>
        <span>%</span>
      </el-form-item>

      <el-form-item :label="text.public">
        <el-radio-group v-model="form.public" :min="0" :max="1">
          <el-radio label="公开"></el-radio>
          <el-radio label="部分公开"></el-radio>
          <el-radio label="不公开"></el-radio>
        </el-radio-group>
        <div class="basic-form__public__optional-input">
          <el-input
            v-if="form.public === '部分公开'"
            v-model="form.inviters"
            :placeholder="text.publicPlaceholder"
          ></el-input>
        </div>
        <span class="basic-form__public__tip">{{text.publicTip}}</span>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{text.submit}}</el-button>
        <el-button type="plain" @click="onSave">{{text.save}}</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: '',
        timePicker: [],
        target: '',
        measure: '',
        client: '',
        inviter: '',
        inviters: '',
        weight: 0,
        public: ''
      },
      size: 'small',
      text: {
        title: '标题',
        titlePlaceholder: '给目标起个名字',
        period: '起止日期',
        startDay: '开始日期',
        endDay: '结束日期',
        to: '至',
        target: '目标描述',
        targetPlaceholder: '请输入内容',
        measure: '衡量标准',
        measurePlaceholder: '请输入内容',
        optional: '（选填）',
        client: '客户',
        clientPlaceholder: '请描述你服务的客户，内部客户直接 @姓名/工号',
        clientDescription: '目标服务对象',
        inviter: '邀评人',
        inviterPlaceholder: '请直接 @姓名/工号，最多可邀请 5 人',
        weight: '权重',
        public: '目标公开',
        publicTip: '客户、邀评人默认被分享',
        publicPlaceholder: '分享给',
        submit: '提交',
        save: '保存'
      },
      rules: {}
    }
  },

  methods: {
    onSubmit () {},
    onSave () {}
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/font.sass'

.basic-form
  &__main
    margin-top: 24px

  &__wrapper
    margin: 24px auto

  &__public
    &__optional-input
      margin: 8px 0

    &__tip
      color: $font-d-45

.label__optional
  color: $font-d-45

/deep/ .el-form-item__content
  width: 40% !important
</style>
