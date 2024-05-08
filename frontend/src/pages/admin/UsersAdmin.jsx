import { useEffect } from 'react'
import { useUser } from '../../hooks'

export function UsersAdmin () {
  const { loading, users, getUsers } = useUser()

  useEffect(() => { getUsers() }, [])

  useEffect(() => {
    console.log('loading:', loading)
    console.log('users:', users)
  }, [users])

  return (
    <div>
      <p>Estamos en users Admin</p>
    </div>

  )
}
