import { useEffect, useState } from 'react'
import { useUser } from '../../hooks'
import { AddEditUserForm, HeaderPage, Loading, ModalBasic, TableUsers } from '../../components'

export function UsersAdmin () {
  const { loading, users, getUsers } = useUser()
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const [refetch, setRefetch] = useState(false)

  useEffect(() => { getUsers() }, [refetch])

  useEffect(() => {
    console.log('loading:', loading)
    console.log('users:', users)
  }, [users])

  const openCloseModal = () => setShowModal((prevState) => !prevState)
  const onRefetch = () => setRefetch((prevState) => !prevState)

  const addUser = () => {
    setTitleModal('Nuevo usuario')
    setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  const updateUser = (user) => {
    setTitleModal('Editar usuario')
    setContentModal(<AddEditUserForm user={user} onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  return (
    <>
      <HeaderPage title='Usuarios' btnTitle='Nuevo usuario' btnClick={addUser} />
      {
        loading
          ? <Loading />
          : <TableUsers users={users} updateUser={updateUser} />
      }

      <ModalBasic title={titleModal} show={showModal} onClose={addUser}>
        {contentModal}
      </ModalBasic>
    </>
  )
}
