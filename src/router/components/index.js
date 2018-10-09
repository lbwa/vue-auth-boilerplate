import createImporter from './importer'
import * as components from './components'

export const common = createImporter(components.common)

export const dynamic = createImporter(components.dynamic)

// 2nd level <router-view> export
// Reusing same 2nd level <router-view> to implement 2nd level caching. 1st
// level <router-view> only include the only nestedExport component. and has no
// <keep-alive> to prevent cache 2nd level roues (#1)
// 复用同一个 <router-view> 来实现二级路由缓存，此时一级路由中 <router-view> 仅对应
// 唯一的 nestedExport, 但此时的一级路由不具有缓存功能，此举是为避免一级路由缓存二级路由(#1)
export const nestedExport = () => import(/* webpackChunkName: 'async-nested-export' */ 'COMPONENTS/NestedExport')
