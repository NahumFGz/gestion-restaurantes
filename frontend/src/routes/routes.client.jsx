import { ClientLayout } from '../layouts'
import { Home } from '../pages/client'

export const HOME_PATH = '/home'

export const routesClient = [
  {
    path: HOME_PATH,
    layout: ClientLayout,
    component: Home
  }
]

export default routesClient
