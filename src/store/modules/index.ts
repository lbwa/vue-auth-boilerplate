import { Module } from 'vuex'
import { RootState } from '../global'

const requireStoreModule = require.context(
  '.',
  false,
  /^\.\/(?!index)\w+\.(t|j)s/ // match all ts file without index.ts
)

export default requireStoreModule.keys().reduce((map, current) => {
  const [, moduleName] = /\.\/([\w-]+)\.ts/.exec(current) || []
  if (!map[moduleName]) {
    map[moduleName] = requireStoreModule(current).default
  }
  return map
}, {} as Record<string, Module<object, RootState>>)
