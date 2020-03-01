<h1 align="center">Adminize</h1>

## Symbolic constants

> A symbolic constant is a name given to a constant literal value. It's usually used to prevent [magic numbers][wiki-magic-number] and [hard-coding][wiki-hard-coding].

[wiki-magic-number]: https://en.wikipedia.org/wiki/Magic_number_(programming)
[wiki-hard-coding]: https://en.wikipedia.org/wiki/Hard_coding

All symbolic constants should be recorded in the [src/constants.ts](src/constants.ts) file.

## Declarations

All global declarations should be recorded in the [src/global.d.ts](src/global.d.ts) file.

## Layouts

In practice, we perhaps have two different kinds of layout components. All layout components should be placed in the [src/layouts](src/layouts) directory.

|           type           |      character       |
| :----------------------: | :------------------: |
|  With `<router-view/>`   | `src/layouts/R*.vue` |
| Without `<router-view/>` | `src/layouts/L*.vue` |

## Components

We also have multiple kinds of components and should be placed in [src/components](src/components) directory.

## [Actions][doc-vuex-actions]

[doc-vuex-actions]: https://vuex.vuejs.org/guide/actions.html#actions

### With request

> Actions can contain arbitrary asynchronous operations.

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

All notable changes to this package will be documented in [CHANGELOG](./CHANGELOG.md) file.

## License

MIT © [Bowen Liu](https://github.com/lbwa)
