import { useEffect, useState } from 'react'
import { useOrder, useTables } from '../../hooks'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/admin/Loading'
import { HeaderPage } from '../../components/admin/HeaderPage'
import { AddOrderForm, ListOrders } from '../../components/admin'
import { ModalBasic } from '../../components'

export function TableDetailsAdmin () {
  const { loading, orders, getOrdersByTable } = useOrder()
  const { getTable, table } = useTables()
  const { id } = useParams()
  const [refetch, setRefetch] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const onRefetch = () => setRefetch((prev) => !prev)
  const openCloseModal = () => setShowModal((prev) => !prev)

  useEffect(() => { getOrdersByTable(id, '', '-status,created_at') }, [refetch])
  useEffect(() => { getTable(id) }, [id])

  return (
    <>
      <HeaderPage title={`Mesa ${table?.number || ''}`} btnTitle='Añadir pedido' btnClick={openCloseModal} />

      {
        loading
          ? <Loading />
          : <ListOrders orders={orders} onRefetch={onRefetch} />
      }

      <ModalBasic
        title='Generar pedido'
        show={showModal}
        onClose={openCloseModal}
      >
        <AddOrderForm idTable={id} openCloseModal={openCloseModal} onRefetch={onRefetch} />
      </ModalBasic>

    </>
  )
}
