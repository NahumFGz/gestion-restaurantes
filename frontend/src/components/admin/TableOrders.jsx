import { useEffect, useState } from 'react'
import { Table } from './Table'

export function TableOrders ({ tables }) {
  const [reload, setReload] = useState(false)
  const [autoReload, setAutoReload] = useState(false)

  const onReload = () => { setReload((prev) => !prev) }
  const toggleAutoReload = () => { setAutoReload((prev) => !prev) }

  useEffect(() => {
    let interval
    if (autoReload) {
      // Definimos un intervalo para recargar la página cada 5 segundos
      interval = setInterval(() => { setReload((prev) => !prev) }, 5000)
    } else if (interval) {
      clearInterval(interval)
    }
    // Limpieza para evitar intervalos múltiples
    return () => clearInterval(interval)
  }, [autoReload])

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
              onChange={toggleAutoReload}
              checked={autoReload}
            />
          </div>

          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={onReload}
          >
            Actualizar
          </button>
        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-5'>
        {
        tables.map(table => (
          <Table key={table.id} table={table} reload={reload} />
        ))
      }
      </div>
    </>
  )
}
