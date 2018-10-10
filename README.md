# vue-design-pro [![Build Status](https://travis-ci.org/lbwa/vue-design-pro.svg?branch=master)](https://travis-ci.org/lbwa/vue-design-pro)

> An administrator dashboard, implemented by Vue.js (including vue-router, vuex, chart.js), inspired by [ant design pro].

[ant design pro]:https://github.com/ant-design/ant-design-pro

***Notice***: This project is developing !

- Preview (including online mock, details in `Network` tab): https://lbwa.github.io/vue-design-pro

## Features

- **Access control**: Global aside menu is rendered dynamically by global routes map which is made of common routes and dynamic routes, filtered by user access.

- **Neat Design**: UI design is inspired by [ant design specification], implemented by [Element UI]

- **Mock development**: Easy to use mock development solution

[Element UI]: https://github.com/ElemeFE/element

[ant design specification]: https://ant.design

## Templates

(Implemented)

- Dashboard
    - Analysis
    - Workspace
- Form
    - Basic form
    - Step form
- Access
    - Admin (A ***private*** page, filter by user access.)
    - User (A ***common*** page, based on dynamic routes.)

**Notice:** `access/admin` only work with user access including `admin`.

## Usage

```bash
git clone https://github.com/lbwa/vue-design-pro.git --depth=1
cd vue-design-pro
yarn mock
yarn dev
# visit http://localhost:5000 (or http://<your host device ip>:5000)
```
