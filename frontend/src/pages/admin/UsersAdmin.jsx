import { useEffect } from 'react'
import { useUser } from '../../hooks'
import { HeaderPage, Loading, TableUsers } from '../../components'

export function UsersAdmin () {
  const { loading, users, getUsers } = useUser()

  useEffect(() => { getUsers() }, [])

  useEffect(() => {
    console.log('loading:', loading)
    console.log('users:', users)
  }, [users])

  return (
    <>
      <HeaderPage title='Usuarios' btnTitle='Nuevo usuario' />
      {
        loading
          ? <Loading />
          : <TableUsers users={users} />
      }
    </>
  )
}
