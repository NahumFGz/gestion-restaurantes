import { useEffect, useState } from 'react'
import { AddEditTablesForm, HeaderPage, Loading, ModalBasic, TableTables } from '../../components'
import { useTables } from '../../hooks'

export default function TablesAdmin () {
  const { loading, tables, getTables, deleteTable } = useTables()
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState('')
  const [modalContent, setModalContent] = useState(null)
  const [refetch, setRefetch] = useState(false)

  useEffect(() => { getTables() }, [refetch])

  const openCloseModal = () => setShowModal((prevState) => !prevState)
  const onRefetch = () => setRefetch((prevState) => !prevState)

  useEffect(() => {
    if (!showModal) {
      setTitleModal('')
      setModalContent(null)
    }
  }, [showModal])

  const addTable = () => {
    setTitleModal('Crear nueva mesa')
    setModalContent(<AddEditTablesForm onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  const updateTable = (table) => {
    setTitleModal('Editar mesa')
    setModalContent(<AddEditTablesForm table={table} onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  const onDeleteTable = async (table) => {
    const result = window.confirm(`¿Estás seguro de eliminar la mesa ${table.id}?`)
    if (result) {
      console.log('Eliminar mesa:', table)
      await deleteTable(table.id)
      onRefetch()
    }
  }

  return (
    <>
      <HeaderPage title='Mesas' btnTitle='Crear nueva mesa' btnClick={addTable} />
      {
        loading
          ? <Loading />
          : <TableTables tables={tables} updateTable={updateTable} deleteTable={onDeleteTable} />
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
