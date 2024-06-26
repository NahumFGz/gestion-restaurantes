import { useEffect, useState } from 'react'
import { useOrder, useTables } from '../../hooks'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/admin/Loading'
import { HeaderPage } from '../../components/admin/HeaderPage'
import { AddOrderForm, ListOrders, PaymentDetail } from '../../components/admin'
import { ModalBasic } from '../../components'
import { usePayment } from '../../hooks/usePayment'

export function TableDetailsAdmin () {
  const { loading, orders, getOrdersByTable, addPaymentToOrder } = useOrder()
  const { getTable, table } = useTables()
  const { id } = useParams()
  const [refetch, setRefetch] = useState(false)
  const [paymentData, setPaymentData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { createPayment, getPaymentByTable } = usePayment()

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
      const paymentResponse = await createPayment(paymentData)
      console.log('Pago creado con éxito:', paymentResponse)
      // Aquí puedes agregar lógica adicional, como redirigir al usuario o actualizar la vista

      for await (const order of orders) {
        await addPaymentToOrder(order.id, paymentResponse.id)
      }
    } catch (error) {
      console.error('No se pudo crear el pago:', error)
      // Manejo de errores en la interfaz, como mostrar un mensaje de error al usuario
    }

    onRefetch()
  }

  useEffect(() => { getOrdersByTable(id, '', '-status,created_at') }, [refetch])
  useEffect(() => { getTable(id) }, [id])
  useEffect(() => {
    (async () => {
      try {
        const response = await getPaymentByTable(id)
        if (response.length > 0) {
          console.log('Pago pedido')
          setPaymentData(response[0])
        } else {
          console.log('Cuenta no generada')
        }
      } catch (error) {
        console.error('Error al obtener los pagos:', error)
      }
    })()
  }, [refetch])

  return (
    <>
      <HeaderPage
        title={`Mesa ${table?.number || ''}`}
        btnTitle={paymentData ? 'Ver cuenta' : 'Agregar pedido'}
        btnClick={openCloseModal}
        btnTitleTwo={paymentData ? null : 'Generar cuenta'}
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
        {
          paymentData
            ? <PaymentDetail
                payment={paymentData}
                orders={orders}
                openCloseModal={openCloseModal}
                onReloadOrders={onRefetch}
              />
            : <AddOrderForm
                idTable={id}
                openCloseModal={openCloseModal}
                onRefetch={onRefetch}
              />
        }
      </ModalBasic>

    </>
  )
}
