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
      <el-form-item :label="text.title" prop="title">
        <el-input
          v-model="form.title"
          :placeholder="text.titlePlaceholder"
        ></el-input>
      </el-form-item>

      <el-form-item :label="text.timePicker" prop="timePicker">
        <el-date-picker
          v-model="form.timePicker"
          type="daterange"
          :style="{ width: '100%' }"
          :range-separator="text.to"
          :start-placeholder="text.startDay"
          :end-placeholder="text.endDay">
        </el-date-picker>
      </el-form-item>

      <el-form-item :label="text.target" prop="target">
        <el-input
          type="textarea"
          :placeholder="text.targetPlaceholder"
          :autosize="{ minRows: 4 }"
          v-model="form.target"
        ></el-input>
      </el-form-item>

      <el-form-item :label="text.measure" prop="measure">
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
import { mapActions } from 'vuex'

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
        timePicker: '起止日期',
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
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        timePicker: [
          { type: 'array', required: true, message: '请输入起止日期', trigger: 'blur' }
        ],
        target: [
          { required: true, message: '请输入目标描述', trigger: 'blur' }
        ],
        measure: [
          { required: true, message: '请输入衡量标准', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    onSubmit () {
      this.$refs.mainForm.validate()
        .then(valid => this.pushBasicForm(this.form))
        .then(() => this.$notify.success({
          title: '提示',
          message: '已通过校验'
        }))
        .catch(invalid => this.$notify.error({
          title: '错误',
          message: '输入有误，请修正。'
        }))
    },
    onSave () {},
    ...mapActions('formBasic', [
      'pushBasicForm'
    ])
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
