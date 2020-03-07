<h1 align="center">Adminize</h1>

`Vue.js` console boilerplate with authentication.

## Symbolic constants

> A symbolic constant is a name given to a constant literal value. It's usually used to prevent [magic numbers][wiki-magic-number] and [hard-coding][wiki-hard-coding].

[wiki-magic-number]: https://en.wikipedia.org/wiki/Magic_number_(programming)
[wiki-hard-coding]: https://en.wikipedia.org/wiki/Hard_coding

All symbolic constants should be recorded in the [src/constants.ts](src/constants.ts) file.

## Declarations

All global declarations should be recorded in the [src/global.d.ts](src/global.d.ts) file.

This boilerplate has supported multiple declarations for CSS pre-process languages in `src/global.d.ts`.

## Layouts

In practice, we perhaps have two different kinds of layout components. All layout components should be placed in the [src/layouts](src/layouts) directory.

|           type           |      character       |
| :----------------------: | :------------------: |
|  With `<router-view/>`   | `src/layouts/R*.vue` |
| Without `<router-view/>` | `src/layouts/L*.vue` |

### How to use route-based layout

A valid router config should be based on the following structure:

```ts
interface ConsoleRouteConfig extends RouteConfig {
  meta?: Partial<{
    layout: string
    hidden: boolean
    icon: string
    title: string
  }>
}
```

We use `meta.layout` to decide which layout component we need to be rendered.

## Components

We also have multiple kinds of components and should be placed in [src/components](src/components) directory.

### Presentational Components

The duty of presentational components are only represent UI view.

### Container Components

hold all business logic

## Plugins

If any `Vue.js` plugin exists, it should be placed in [src/plugins](src/plugins) directory.

## Effects

All HTTP request function should be placed in [src/effects](src/effects) directory.

## Router

|  filename   |                  description                  |
| :---------: | :-------------------------------------------: |
| `guards.ts` |      Used to store all navigation guards      |
| `index.ts`  |    Used to export a Vue.js router instance    |
| `routes.ts` | Used to record all valid preset static routes |

## State management

[doc-vuex-actions]: https://vuex.vuejs.org/guide/actions.html#actions

### Automatic registration

All store module placed in [src/store/modules/\*.ts](src/store/modules) would be registered automatically. Every module would use their filename as store module namespace.

```
|--store
|    |--user.ts
|
```

### With request

> [Actions][doc-vuex-actions] can contain arbitrary asynchronous operations.

All HTTP requests should be called by an action if an HTTP request result needs to be stored in the vuex store, instead of calling HTTP request directly.

```
dispatch an action --> http effects --> commit mutation in an action --> store the result of effects
```

### Error handler

> [store.dispatch][doc-vuex-dispatch] always return a `Promise` instance.

[doc-vuex-dispatch]: https://vuex.vuejs.org/api/#dispatch

Any action internal error should be handled by action consumer, instead of itself.

```
action's error --> throw --as rejected promise--> handled by any action consumer
```

## Changelog

All notable changes to this repository will be documented in [CHANGELOG](./CHANGELOG.md) file.

## License

MIT © [Bowen Liu](https://github.com/lbwa)
