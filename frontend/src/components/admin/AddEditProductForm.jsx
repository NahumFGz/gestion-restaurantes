import { useEffect, useId, useState } from 'react'
import { useCategory } from '../../hooks'

export function AddEditProductForm () {
  const productId = useId()
  const priceId = useId()
  const categoryId = useId()
  const activeId = useId()
  const imageId = useId()

  const { categories, getCategories } = useCategory()
  const [categoryOptions, setCategoryOptions] = useState([])

  useEffect(() => { getCategories() }, [])

  useEffect(() => {
    setCategoryOptions(formatDropdownOptions(categories))
  }, [categories])

  return (
    <form
      className='space-y-6'
    >
      <div className='flex flex-col gap-10'>
        <div>
          <label htmlFor={productId} className='block text-sm font-medium text-gray-700'>
            Producto
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={productId} name='product' type='text'
          />
        </div>
        <div>
          <label htmlFor={priceId} className='block text-sm font-medium text-gray-700'>
            Precio
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={priceId} name='price' type='number'
          />
        </div>
        <div>
          <label htmlFor={categoryId} className='block text-sm font-medium text-gray-700'>
            Categoria
          </label>
          <select
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={categoryId} name='categoria'
          >
            {categoryOptions}
          </select>
        </div>
        <div className='flex items-center'>
          <input
            className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
            id={activeId} name='is_active' type='checkbox'
          />
          <label htmlFor={activeId} className='ml-2 block text-sm text-gray-700'>
            Producto activo
          </label>
        </div>
        <div>
          <label
            className='block text-sm font-medium text-gray-700'
            htmlFor={imageId}
          >
            Imagen
          </label>
          <input
            className='hidden'
            id={imageId}
            name='image'
            type='file'
            accept='.png, .jpg, .jpeg'
          />
          <button
            type='button'
            className='mt-1 block w-full border border-dashed border-indigo-500 rounded-md bg-white py-2 px-4 text-sm font-medium text-indigo-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Cargar imagen
          </button>
        </div>

      </div>
      <div className='mt-4'>
        <button
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          type='submit'
        >
          'Actualizar'
        </button>
      </div>
    </form>

  )
}

function formatDropdownOptions (categories) {
  return categories.map((category) => (
    <option key={category.id} value={category.title}>
      {category.title}
    </option>
  ))
}
