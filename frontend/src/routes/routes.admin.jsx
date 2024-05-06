import { AdminLayout } from '../layouts'
import { LoginAdmin } from '../pages/admin'

export const ADMIN_LOGIN_PATH = '/admin'

export const routesAdmin = [
  {
    path: ADMIN_LOGIN_PATH,
    layout: AdminLayout,
    component: LoginAdmin
  }
]

export default routesAdmin
