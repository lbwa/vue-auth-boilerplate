import components from './components'

export default [
  {
    path: '/',
    component: components.home
  },
  {
    path: '*',
    redirect: '/'
  }
]
