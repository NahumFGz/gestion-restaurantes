import { AdminLayout } from '../layouts'
import { HomeAdmin, UsersAdmin } from '../pages/admin'

export const ADMIN_LOGIN_PATH = '/admin'

export const routesAdmin = [
  {
    path: ADMIN_LOGIN_PATH,
    layout: AdminLayout,
    component: HomeAdmin
  },
  {
    path: ADMIN_LOGIN_PATH + '/users',
    layout: AdminLayout,
    component: UsersAdmin
  }
]

export default routesAdmin
