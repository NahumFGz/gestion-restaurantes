import { AdminLayout } from '../layouts'
import { CategoriesAdmin, HomeAdmin, UsersAdmin, ProducsAdmin } from '../pages/admin'
import TablesAdmin from '../pages/admin/TablesAdmin'

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
  },
  {
    path: ADMIN_LOGIN_PATH + '/categories',
    layout: AdminLayout,
    component: CategoriesAdmin
  },
  {
    path: ADMIN_LOGIN_PATH + '/products',
    layout: AdminLayout,
    component: ProducsAdmin
  },
  {
    path: ADMIN_LOGIN_PATH + '/tables',
    layout: AdminLayout,
    component: TablesAdmin
  }

]

export default routesAdmin
