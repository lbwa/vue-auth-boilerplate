<h1 align="center">Adminize</h1>

## [Actions][doc-vuex-actions]

[doc-vuex-actions]: https://vuex.vuejs.org/guide/actions.html#actions

### Request

> Actions can contain arbitrary asynchronous operations.

All HTTP requests should be called by an action if an HTTP request result needs to be stored in the vuex store, instead of calling HTTP request directly.

```
dispatch an action --> http effects --> commit mutation in an action --> store the result of effects
```

### Error handler

> [store.dispatch][doc-vuex-dispatch] always return a Promise instance.

[doc-vuex-dispatch]: https://vuex.vuejs.org/api/#dispatch

Any action internal error should be handled by action consumer, instead of itself.

```
action's error --> throw --as rejected promise--> handled by any action consumer
```

## Symbolic constants

> A symbolic constant is a name given to a constant literal value. It's unusually used to prevent [magic numbers][wiki-magic-number] and [hard-coding][wiki-hard-coding].

[wiki-magic-number]: https://en.wikipedia.org/wiki/Magic_number_(programming)
[wiki-hard-coding]: https://en.wikipedia.org/wiki/Hard_coding

All symbolic constants should be recorded in the [src/constants.ts](src/constants.ts) file.

## Declarations

All global declarations should be recorded in the [src/global.d.ts](src/global.d.ts) file.

## Changelog

All notable changes to this package will be documented in [CHANGELOG](./CHANGELOG.md) file.

## License

MIT © [Bowen Liu](https://github.com/lbwa)
