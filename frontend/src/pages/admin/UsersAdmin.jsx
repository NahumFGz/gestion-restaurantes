import { useEffect, useState } from 'react'
import { useUser } from '../../hooks'
import { HeaderPage, Loading, ModalBasic, TableUsers } from '../../components'

export function UsersAdmin () {
  const { loading, users, getUsers } = useUser()
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)

  useEffect(() => { getUsers() }, [])

  useEffect(() => {
    console.log('loading:', loading)
    console.log('users:', users)
  }, [users])

  const openCloseModal = () => setShowModal((prevState) => !prevState)

  return (
    <>
      <HeaderPage title='Usuarios' btnTitle='Nuevo usuario' btnClick={openCloseModal} />
      {
        loading
          ? <Loading />
          : <TableUsers users={users} />
      }

      <ModalBasic title='Crear usuario' show={showModal} onClose={openCloseModal}>
        <p> Formulario de creación de usuario </p>
        <p> wawa </p>
      </ModalBasic>
    </>
  )
}
