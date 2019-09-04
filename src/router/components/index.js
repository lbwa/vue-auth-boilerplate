import createImporters from './importer'
import publicPath from './public'
import privatePath from './private'

export const publicComponents = createImporters(publicPath)
export const privateComponents = createImporters(privatePath)
export const pureExport = () => import('COMPONENTS/RouteExport')
