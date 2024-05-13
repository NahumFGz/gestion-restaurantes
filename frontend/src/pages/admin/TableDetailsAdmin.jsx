import { useEffect, useState } from 'react'
import { useOrder } from '../../hooks'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/admin/Loading'
import { HeaderPage } from '../../components/admin/HeaderPage'
import { ListOrders } from '../../components/admin'

export function TableDetailsAdmin () {
  const { id } = useParams()
  const { loading, orders, getOrdersByTable } = useOrder()
  const [refetch, setRefetch] = useState(false)

  const onRefetch = () => setRefetch((prev) => !prev)

  useEffect(() => {
    getOrdersByTable(id, '', '-status,created_at')
  }, [refetch])
  console.log(orders)

  return (
    <>
      <HeaderPage title='Mesa ***' />

      {
        loading
          ? <Loading />
          : <ListOrders orders={orders} onRefetch={onRefetch} />
      }
    </>
  )
}
