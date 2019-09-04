<template>
  <div class="">
    <adminize-card>
      <h4>{{ $t('elementAccess.title') }}</h4>
      <ul>
        <li class="element-access__item">
          <h4>{{ $t('elementAccess.functionTitle') }}</h4>
          <p>{{ $t('elementAccess.desc') }}</p>
          <el-tag v-if="$_hasAccess('admin.device.read')">admin</el-tag>
          <el-tag v-if="$_hasAccess('user.device.read')" type="info"
            >user</el-tag
          >
        </li>
        <li class="element-access__item">
          <h4>{{ $t('elementAccess.directiveTitle') }}</h4>
          <div v-access="'admin.device.read'">
            <p>{{ $t('elementAccess.directiveSingle') }}</p>
            <el-tag>admin</el-tag>
          </div>
          <div v-access="'user.device.read'">
            <p>{{ $t('elementAccess.directiveSingle') }}</p>
            <el-tag type="info">user</el-tag>
          </div>

          <div v-access.some="['admin.device.read']">
            <p>{{ $t('elementAccess.directiveSome') }}</p>
            <el-tag>admin</el-tag>
          </div>
          <div v-access.some="['user.device.read']">
            <p>{{ $t('elementAccess.directiveSome') }}</p>
            <el-tag type="info">user</el-tag>
          </div>

          <div v-access.every="['admin.device.read']">
            <p>{{ $t('elementAccess.directiveEvery') }}</p>
            <el-tag>admin</el-tag>
          </div>

          <div v-access.every="['user.device.read']">
            <p>{{ $t('elementAccess.directiveEvery') }}</p>
            <el-tag type="info">user</el-tag>
          </div>
        </li>
      </ul>
    </adminize-card>
  </div>
</template>

<script>
import AdminizeCard from 'LAYOUT/Card'

export default {
  name: 'ElementAccess',

  components: {
    AdminizeCard
  },

  i18n: {
    messages: {
      en: {
        elementAccess: {
          title: 'Element access verification',
          functionTitle:
            'Use $_hasAccess, $_hasSomeAccess, $_hasEveryAccess function',
          directiveTitle: 'Use v-access custom directive',
          directiveSingle: 'v-access="access", to verify single access.',
          directiveSome:
            'v-access.some="[some access]", to verify one item of access list.',
          directiveEvery:
            'v-access.every="[some access]", to verify all items of access list',
          desc:
            'There is a `admin.device.read` tag when you login as admin, otherwise `user.device.read` tag will be shown up.'
        }
      },
      zh: {
        elementAccess: {
          title: '按钮（元素）级权限测试',
          functionTitle:
            '使用 $_hasAccess, $_hasSomeAccess, $_hasEveryAccess 方法',
          directiveTitle: '使用 v-access 自定义指令',
          directiveSingle: 'v-access="access", 用于验证单一权限。',
          directiveSome:
            'v-access.some="[some access]", 用于验证可选权限，至少满足权限列表的一项。',
          directiveEvery:
            'v-access.every="[some access]", 用于验证给定的所有权限列表。',
          desc:
            '当你以 admin 的身份登陆时，你将看到一个 `admin.device.read` 的标签，否则将看到一个 `user.device.read` 的标签。'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped></style>
