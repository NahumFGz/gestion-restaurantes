import { Table } from './Table'

export function TableOrders ({ tables }) {
  return (
    <div className='flex flex-wrap justify-center items-center gap-5'>
      {
        tables.map(table => (
          <Table key={table.id} table={table} />
        ))
      }
    </div>
  )
}
