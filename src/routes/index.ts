import { Home, Login } from '../pages'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
  },
]

export default routes
