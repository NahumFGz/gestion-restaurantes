import { CheckBadgeIcon, XMarkIcon } from '@heroicons/react/24/solid'

export function TableProducts ({ products, updateProduct }) {
  products.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className='overflow-auto shadow-lg rounded-lg'>
      <table className='w-full table-auto bg-white rounded-lg border border-gray-200'>
        <thead className='bg-gray-800 text-white'>
          <tr>
            <th className='px-6 py-4 text-left'>Categoria</th>
            <th className='px-6 py-4 text-left'>Imagen</th>
            <th className='px-6 py-4 text-left'>Precio</th>
            <th className='px-6 py-4 text-left'>Categoria</th>
            <th className='px-6 py-4 text-left'>Activo</th>
            <th className='px-6 py-4 text-left'>Acciones</th>
          </tr>
        </thead>
        <tbody className='text-gray-700'>
          {products.map((product) => (
            <tr key={product.id} className='border-b border-gray-200 hover:bg-gray-100'>
              <td className='px-6 py-4'>{product.title}</td>
              <td className='px-6 py-4'>
                <img
                  src={product.image}
                  alt={`Imagen de ${product.title}`}
                  className='h-16 w-16 object-cover rounded'
                />
              </td>
              <td className='px-6 py-4'>S/. {product.price}</td>
              <td className='px-6 py-4'>{product.category_data.title}</td>
              <td className='px-6 py-4'>{product.active
                ? (
                  <CheckBadgeIcon className='h-5 w-5 text-green-500' />
                  )
                : (
                  <XMarkIcon className='h-5 w-5 text-red-500' />
                  )}
              </td>
              <td className='flex text-sm justify-start gap-2 px-6 py-4'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  onClick={() => updateProduct(product)}
                >
                  Editar
                </button>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                  onClick={() => console.log('Eliminar')}
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
