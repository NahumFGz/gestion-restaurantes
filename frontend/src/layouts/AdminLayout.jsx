import { LoginAdmin } from '../pages/admin'
import { useAuth } from '../hooks'
import { SideMenu, TopMenu } from '../components'

export function AdminLayout ({ children }) {
  const { auth } = useAuth()

  if (!auth) return <LoginAdmin />

  return (
    <div>
      <div>
        <TopMenu />
      </div>

      <SideMenu>
        {children}
      </SideMenu>
    </div>

  )
}
