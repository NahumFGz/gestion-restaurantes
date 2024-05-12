export function TableTables ({ tables, updateTable }) {
  return (
    <div className='overflow-auto shadow-lg rounded-lg'>
      <table className='w-full table-auto bg-white rounded-lg border border-gray-200'>
        <thead className='bg-gray-800 text-white'>
          <tr>
            <th className='px-6 py-4 text-left'>Numero de mesa</th>
            <th className='px-6 py-4 text-left'>Acciones</th>
          </tr>
        </thead>
        <tbody className='text-gray-700'>
          {tables.map((table) => (
            <tr key={table.id} className='border-b border-gray-200 hover:bg-gray-100'>
              <td className='px-6 py-4'>{table.number}</td>
              <td className='flex text-sm justify-start gap-2 px-6 py-4'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  onClick={() => updateTable(table)}
                >
                  Editar
                </button>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                  onClick={() => console.log('Delete table', table)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
