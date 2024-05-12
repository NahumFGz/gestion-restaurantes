import { useEffect } from 'react'
import { useOrder } from '../../hooks'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/admin/Loading'
import { HeaderPage } from '../../components/admin/HeaderPage'
import { ListOrders } from '../../components'

export function TableDetailsAdmin () {
  const { id } = useParams()
  console.log(id)
  const { loading, orders, getOrdersByTable } = useOrder()

  useEffect(() => {
    getOrdersByTable(id)
  }, [])
  console.log(orders)

  return (
    <>
      <HeaderPage title='Mesa ***' />

      {
        loading
          ? <Loading />
          : <ListOrders orders={orders} />
      }
    </>
  )
}
