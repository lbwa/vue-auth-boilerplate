/**
 * DO NOT import/export any variables from this file for keeping variables globally
 *
 * In TypeScript,  any file containing a top-level import or export is
 * considered a module. Conversely, a file without any top-level import or
 * export declarations is treated as a script whose contents are available in
 * the global scope (and therefore to modules as well).
 * @doc https://www.typescriptlang.org/docs/handbook/modules.html
 */

/**
 * Whether we are in development environment
 */
declare const __DEV__: boolean

/**
 *
 * https://github.com/facebook/create-react-app/blob/v3.4.0/packages/react-scripts/lib/react-app.d.ts#L53-L66
 */

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}
