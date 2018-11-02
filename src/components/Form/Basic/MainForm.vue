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
          <el-radio :label="$t('form.basic.mainForm.public')"></el-radio>
          <el-radio :label="$t('form.basic.mainForm.partiallyPublic')"></el-radio>
          <el-radio :label="$t('form.basic.mainForm.private')"></el-radio>
        </el-radio-group>
        <div class="basic-form__public__optional-input">
          <el-input
            v-if="form.public === `${
              this.$t('form.basic.mainForm.partiallyPublic')
            }`"
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
        title: this.$t('form.basic.mainForm.title'),
        titlePlaceholder: this.$t('form.basic.mainForm.titlePlaceholder'),
        timePicker: this.$t('form.basic.mainForm.timePicker'),
        startDay: this.$t('form.basic.mainForm.startDay'),
        endDay: this.$t('form.basic.mainForm.endDay'),
        to: this.$t('form.basic.mainForm.to'),
        target: this.$t('form.basic.mainForm.target'),
        targetPlaceholder: this.$t('form.basic.mainForm.targetPlaceholder'),
        measure: this.$t('form.basic.mainForm.measure'),
        measurePlaceholder: this.$t('form.basic.mainForm.measurePlaceholder'),
        optional: this.$t('form.basic.mainForm.optional'),
        client: this.$t('form.basic.mainForm.client'),
        clientPlaceholder: this.$t('form.basic.mainForm.clientPlaceholder'),
        clientDescription: this.$t('form.basic.mainForm.clientDescription'),
        inviter: this.$t('form.basic.mainForm.inviter'),
        inviterPlaceholder: this.$t('form.basic.mainForm.inviterPlaceholder'),
        weight: this.$t('form.basic.mainForm.weight'),
        public: this.$t('form.basic.mainForm.public'),
        publicTip: this.$t('form.basic.mainForm.publicTip'),
        publicPlaceholder: this.$t('form.basic.mainForm.publicPlaceholder'),
        submit: this.$t('form.basic.mainForm.submit'),
        save: this.$t('form.basic.mainForm.save')
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
