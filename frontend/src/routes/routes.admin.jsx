import { AdminLayout } from '../layouts'
import { CategoriesAdmin, TablesAdmin, OrdersAdmin, UsersAdmin, ProducsAdmin, TableDetailsAdmin } from '../pages/admin'

export const ADMIN_LOGIN_PATH = '/admin'

export const routesAdmin = [
  {
    path: ADMIN_LOGIN_PATH,
    layout: AdminLayout,
    component: OrdersAdmin
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
  },
  {
    path: ADMIN_LOGIN_PATH + '/table/:id',
    layout: AdminLayout,
    component: TableDetailsAdmin
  }

]

export default routesAdmin
