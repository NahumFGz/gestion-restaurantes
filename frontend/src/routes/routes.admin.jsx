import { AdminLayout } from '../layouts'
import { HomeAdmin } from '../pages/admin'

export const ADMIN_LOGIN_PATH = '/admin'

export const routesAdmin = [
  {
    path: ADMIN_LOGIN_PATH,
    layout: AdminLayout,
    component: HomeAdmin
  }
]

export default routesAdmin
