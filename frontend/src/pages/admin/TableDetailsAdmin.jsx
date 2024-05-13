import { useEffect, useState } from 'react'
import { useOrder, useTables } from '../../hooks'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/admin/Loading'
import { HeaderPage } from '../../components/admin/HeaderPage'
import { ListOrders } from '../../components/admin'

export function TableDetailsAdmin () {
  const { id } = useParams()
  const { loading, orders, getOrdersByTable } = useOrder()
  const [refetch, setRefetch] = useState(false)
  const { getTable, table } = useTables()

  const onRefetch = () => setRefetch((prev) => !prev)

  useEffect(() => {
    getOrdersByTable(id, '', '-status,created_at')
  }, [refetch])
  console.log(orders)

  useEffect(() => { getTable(id) }, [id])
  console.log('---->', table)
  return (
    <>
      <HeaderPage title={`Mesa ${table?.number || ''}`} />

      {
        loading
          ? <Loading />
          : <ListOrders orders={orders} onRefetch={onRefetch} />
      }
    </>
  )
}
