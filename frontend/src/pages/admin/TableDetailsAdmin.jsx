import { useEffect, useState } from 'react'
import { useOrder, useTables } from '../../hooks'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/admin/Loading'
import { HeaderPage } from '../../components/admin/HeaderPage'
import { AddOrderForm, ListOrders } from '../../components/admin'
import { ModalBasic } from '../../components'
import { usePayment } from '../../hooks/usePayment'

export function TableDetailsAdmin () {
  const { loading, orders, getOrdersByTable } = useOrder()
  const { getTable, table } = useTables()
  const { id } = useParams()
  const [refetch, setRefetch] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { createPayment } = usePayment()

  const onRefetch = () => setRefetch((prev) => !prev)
  const openCloseModal = () => setShowModal((prev) => !prev)
  const onCreatePayment = async () => {
    const result = window.confirm('¿Estás seguro de generar la cuenta?')
    if (!result) return

    const totalPayment = orders.reduce((acc, order) => acc + Number(order.product_data.price), 0)
    const resultTypePayment = window.confirm('Pago con tarjeta? Presiona ACEPTAR para confirmar o CANCELAR para pagar en efectivo')

    const paymentData = {
      table: id,
      total_payment: totalPayment.toFixed(2),
      payment_type: resultTypePayment ? 'CARD' : 'CASH',
      status_payment: 'PENDING'
    }

    try {
      const response = await createPayment(paymentData)
      console.log('Pago creado con éxito:', response)
      // Aquí puedes agregar lógica adicional, como redirigir al usuario o actualizar la vista
    } catch (error) {
      console.error('No se pudo crear el pago:', error)
      // Manejo de errores en la interfaz, como mostrar un mensaje de error al usuario
    }
  }

  useEffect(() => { getOrdersByTable(id, '', '-status,created_at') }, [refetch])
  useEffect(() => { getTable(id) }, [id])

  return (
    <>
      <HeaderPage
        title={`Mesa ${table?.number || ''}`}
        btnTitle='Añadir pedido' btnClick={openCloseModal}
        btnTitleTwo='Generar cuenta'
        btnClickTwo={() => onCreatePayment()}
      />

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
