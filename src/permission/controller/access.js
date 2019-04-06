import store from 'STORE'

function hasAccess(accessTarget, accessMap = store.getters['login/accessMap']) {
  const accessChipList = accessTarget.split('.')
  return accessMap[`${accessChipList[0]}.${accessChipList[1]}`].includes(
    accessChipList[2]
  )
}

// 通过 Vue.use() 方法来实现添加原型方法
export default {
  install(Vue) {
    Vue.prototype.$_hasAccess = hasAccess
  }
}
