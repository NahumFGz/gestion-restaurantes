import { useAuth } from '../../hooks'

export function HomeAdmin () {
  const { logout } = useAuth()

  return (
    <div>
      <p>Home Admin</p>
      <button
        className='border border-red-500 bg-red-500 text-white px-4 py-2 rounded-md'
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </div>

  )
}
