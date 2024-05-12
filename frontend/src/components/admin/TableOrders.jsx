import { Table } from './Table'

export function TableOrders ({ tables }) {
  return (
    <>
      <div className='fixed right-0 top-[80px] mr-12'>
        <div className='flex items-center justify-center'>
          <div>
            <label>
              Reload Automático
            </label>
            <input
              type='checkbox'
              className='ml-1 mr-2'
              onChange={() => console.log('Check')}
            />
          </div>

          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Actualizar
          </button>
        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-5'>
        {
        tables.map(table => (
          <Table key={table.id} table={table} />
        ))
      }
      </div>
    </>
  )
}
