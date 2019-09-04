<h1 align="center">Adminize template</h1>

<p align="center">
  <a href="https://github.com/lbwa/adminize/actions">
    <img alt="master workflow" src="https://github.com/lbwa/adminize/workflows/Test%20and%20deployment/badge.svg">
  </a>
  <a href="https://github.com/lbwa/adminize/releases">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/lbwa/adminize.svg?style=flat-square">
  </a>
  <a href="https://lbwa.github.io/adminize">
    <img alt="Website" src="https://img.shields.io/website/https/lbwa.github.io/adminize.svg?down_message=offline&style=flat-square&up_message=online">
  </a>
  <a href="https://github.com/lbwa/adminize/commits/dev">
    <img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/lbwa/adminize.svg?style=flat-square">
  </a>
  <a href="https://github.com/lbwa/adminize/pulls?q=is%3Apr+is%3Aclosed">
    <img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed/lbwa/adminize.svg?logo=github&style=flat-square">
  </a>
</p>

<p align="center">
  <a href="https://lbwa.github.io/adminize">Online site</a>
</p>

> A front-end access control solution building with Vue.js v2.6+

## Features

1. Dynamic aside rendering

   All of console aside menu items is based on current user global routes which is made of public routes and private routes

   - **Public routes** means their generation will be ignored by access verification process.

   - **Private routes** means these routes are filtered by current user access.

1. The implement of mandatory access control and optional access control

   You can set up two typical solutions for access verification.

   - **Mandatory access control**, current user access should be satisfied all of them, otherwise routes wouldn't be created.

   - **Optional access control**, private routes will be create when current user access just matched one of them

1. User access console which is used to distribute access to user.

1. Dynamic component importer.

   Just edit your own component path based on `{PROJECT_ROOT}/src` in the `{PROJECT_ROOT}/src/router/components` directory.

   ```js
   // It will use `() => import(...)` function to import your component dynamically
   export default ['page/someComponent']
   ```

   then you can import component like these code:

   ```js
   import { privateComponents } from 'ROUTER/components'

   export default [
     {
       path: '/private',
       component: privateComponents.pageSomeComponent
     }
   ]
   ```

## Schema

- User access schema, you can store it anywhere (eg, local environment or remote database).

  ```ts
  /**
   * @description These access set can be store anywhere you want.
   * You should fetch all current access before you activate
   * private routes generation.
   */
  interface UserAccess {
    access: string
    update_time: string
    [extraMeta: string]: any
  }

  type UserAccessSet = UserAccess[]
  ```

  The most **important** thing is in `access` field of `UserAccess` scheme. We will use this field to create current user access map which is used to implement front-end access control and aside menu rendering dynamically.

- Route schema, inherited from [route schema](https://router.vuejs.org/api/#the-route-object) of `vue-router`

  ```ts
  interface Route extends RouteOfVueRouter {
    meta: {
      title: string
      icon: string
      layout: string
      access?: string[]
      optionalAccess?: string[]
    }
  }
  ```

  | Field          | description                                               |
  | -------------- | --------------------------------------------------------- |
  | title          | Used to create a title in the aside menu                  |
  | icon           | Used to create a icon for above title                     |
  | layout         | Used to create a layout for route linked with above title |
  | access         | Used to determine mandatory access for current route      |
  | optionalAccess | Used to determine optional access for current route       |

## Usages

- Routes-access control

  ```js
  export default [
    {
      path: '/fist-routes',
      components: firstComponent,
      meta: {
        /**
         * @description This route will be added to global routes map if user
         * accesses include 'device.read' and 'device.write' access.
         */
        access: ['admin.device.read', 'admin.device.write']
      }
    },
    {
      path: '/second-routes',
      components: secondComponent,
      meta: {
        /**
         * @description Current route will be ignored when current user has no 'mange.device.write' access
         */
        access: ['admin.device.read', 'admin.device.write']
      }
    },
    {
      path: '/optional-routes',
      components: optionalComponent,
      meta: {
        /**
         * @description Once one of access was matched, private routes will be created.
         */
        optionalAccess: ['admin.device.read', 'admin.device.write']
      }
    }
    // ... other routes
  ]
  ```

| meta field     | description                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| access         | Current user's access list should include all items of access field.            |
| optionalAccess | Current user's access list include at least one access of optionalAccess field. |

- Element-access control


    - Single access control

      ```html
      <!-- Element will be disappeared when user has no 'admin.device.read' access -->
      <AnyElement v-access="admin.device.read" />
      <AnyElement v-if="$_hasAccess('admin.device.read')" />
      ```

    - Optional access control

      ```html
      <!-- The current user's accesses should include at least one of the target access list. -->
      <AnyElement v-access.some="['admin.device.read', 'admin.device.write']" />
      <AnyElement v-if="$_hasSomeAccess(['admin.device.read', 'admin.device.write'])" />
      ```

    - Mandatory access control

      ```html
      <!-- The current user's accesses should include all accesses in the target access list. -->
      <AnyElement v-access.every="['admin.device.read', 'admin.device.write']" />
      <AnyElement v-if="$_hasEveryAccess(['admin.device.read', 'admin.device.write'])" />
      ```

As you wish, you can use `Vue` prototype function `$_hasAccess`, `$_hasSomeAccess`, `$_hasEveryAccess` to verify any user access without limitation.

> NOTICE: You should use `parent.$_hasAccess` to verify user access in the Vue functional component which has a non-functional parent vue component.

| Vue `v-access` directive with modifiers | description                  |
| --------------------------------------- | ---------------------------- |
| `v-access`                              | Single access verification   |
| `v-access.some`                         | Optional access verification |
| `v-access.every`                        | Mandatory access control     |

| Vue prototype function | description                  |
| ---------------------- | ---------------------------- |
| `$_hasAccess`          | Single access verification   |
| `$_hasSomeAccess`      | Optional access verification |
| `$_hasEveryAccess`     | Mandatory access control     |

## Commands

- Compiles and hot-reloads for development

```bash
yarn run serve
```

- Compiles and minifies for production

```bash
yarn run build
```

## Other

CHANGELOG is [here](./CHANGELOG.md).
