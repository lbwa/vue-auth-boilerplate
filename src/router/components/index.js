import createImporter from './importer'
import * as components from './components'

export const common = createImporter(components.common)

export const dynamic = createImporter(components.dynamic)
