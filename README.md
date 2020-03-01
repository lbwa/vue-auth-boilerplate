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
