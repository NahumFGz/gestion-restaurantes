import { useEffect } from 'react'
import { HeaderPage, Loading, TableOrders } from '../../components'
import { useTables } from '../../hooks'

export function OrdersAdmin () {
  const { loading, tables, getTables } = useTables()

  useEffect(() => { getTables() }, [])
  console.log(tables)
  console.log(loading)

  return (
    <>
      <HeaderPage title='Restaurante' />
      {
        loading
          ? <Loading />
          : <TableOrders tables={tables} />
      }
    </>

  )
}
