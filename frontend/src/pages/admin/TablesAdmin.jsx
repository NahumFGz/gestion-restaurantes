import { useEffect } from 'react'
import { HeaderPage, Loading, TableTables } from '../../components'
import { useTables } from '../../hooks'

export default function TablesAdmin () {
  const { loading, tables, getTables } = useTables()

  useEffect(() => { getTables() }, [])
  return (
    <>
      <HeaderPage title='Mesas' btnTitle='Crear nueva mesa' />
      {
        loading
          ? <Loading />
          : <TableTables tables={tables} />
      }
    </>
  )
}
