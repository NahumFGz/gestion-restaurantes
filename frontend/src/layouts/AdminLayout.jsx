import { LoginAdmin } from '../pages/admin'
import { useAuth } from '../hooks'

export function AdminLayout ({ children }) {
  const { auth } = useAuth()

  if (!auth) return <LoginAdmin />

  return (
    <div>
      <p>AdminLayout</p>
      {children}
    </div>

  )
}
