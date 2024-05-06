import { LoginAdmin } from '../pages/admin'

export function AdminLayout ({ children }) {
  const auth = null

  if (!auth) return <LoginAdmin />

  return (
    <div>
      <p>AdminLayout</p>
      {children}
    </div>

  )
}
