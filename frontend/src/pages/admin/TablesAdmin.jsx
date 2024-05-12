import { useEffect, useState } from 'react'
import { AddEditTablesForm, HeaderPage, Loading, ModalBasic, TableTables } from '../../components'
import { useTables } from '../../hooks'

export default function TablesAdmin () {
  const { loading, tables, getTables } = useTables()
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState('')
  const [modalContent, setModalContent] = useState(null)

  useEffect(() => { getTables() }, [])

  const openCloseModal = () => setShowModal((prevState) => !prevState)

  const addTable = () => {
    setTitleModal('Crear nueva mesa')
    setModalContent(<AddEditTablesForm />)
    openCloseModal()
  }

  return (
    <>
      <HeaderPage title='Mesas' btnTitle='Crear nueva mesa' btnClick={addTable} />
      {
        loading
          ? <Loading />
          : <TableTables tables={tables} />
      }

      <ModalBasic
        title={titleModal}
        show={showModal}
        onClose={openCloseModal}
      >
        {modalContent}
      </ModalBasic>
    </>
  )
}
