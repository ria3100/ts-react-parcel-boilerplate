import { Home, Login, Signup, Profile } from '../pages'

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
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

export default routes
