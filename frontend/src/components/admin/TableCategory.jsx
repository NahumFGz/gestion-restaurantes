export function TableCategory ({ categories }) {
  return (
    <div className='overflow-auto shadow-lg rounded-lg'>
      <table className='w-full table-auto bg-white rounded-lg border border-gray-200'>
        <thead className='bg-gray-800 text-white'>
          <tr>
            <th className='px-6 py-4 text-left'>Categoria</th>
            <th className='px-6 py-4 text-left'>Imagen</th>
            <th className='px-6 py-4 text-left'>Acciones</th>
          </tr>
        </thead>
        <tbody className='text-gray-700'>
          {categories.map((category) => (
            <tr key={category.id} className='border-b border-gray-200 hover:bg-gray-100'>
              <td className='px-6 py-4'>{category.title}</td>
              <td className='px-6 py-4'>
                <img
                  src={category.image}
                  alt={`Imagen de ${category.title}`}
                  className='h-16 w-16 object-cover rounded'
                />
              </td>
              <td className='flex text-sm justify-start gap-2 px-6 py-4'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  onClick={() => console.log('Editar Categoria')}
                >
                  Editar
                </button>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                  onClick={() => console.log('Eliminar Categoria')}
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
