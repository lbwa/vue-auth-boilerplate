import createImporters from './importer'
import constant from './constant-config'
import dynamic from './dynamic-config'

export const constantComponents = createImporters(constant)
export const dynamicComponents = createImporters(dynamic)
export const plainExport = () => import('COMPONENTS/RouteExport')
