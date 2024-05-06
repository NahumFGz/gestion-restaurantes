import { ClientLayout } from '../layouts'
import { Home } from '../pages/client'

export const routesClient = [
  {
    path: '/home',
    layout: ClientLayout,
    component: Home
  }
]

export default routesClient
