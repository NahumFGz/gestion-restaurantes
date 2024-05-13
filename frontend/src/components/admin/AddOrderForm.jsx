import React, { useEffect, useState } from 'react'
import { useProducts } from '../../hooks'

export function AddOrderForm ({ idTable, openCloseModal }) {
  const [selectedOption, setSelectedOption] = useState('')
  const { products, getProducts } = useProducts()

  useEffect(() => { getProducts() }, [])

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <form className='space-y-6'>
      <div className='flex flex-col gap-10'>
        <div className='relative inline-block w-full'>
          <label htmlFor='order-dropdown' className='block text-sm font-medium text-gray-700'>
            Seleccione una opción
          </label>
          <select
            id='order-dropdown'
            value={selectedOption}
            onChange={handleSelectChange}
            className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
          >
            <option value='' disabled>Seleccionar...</option>
            {
              products.map((product) => (
                <option key={product.id} value={product.id}>{product.title}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className='mt-4'>
        <button
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          type='submit'
        >
          Añadir orden
        </button>
      </div>
    </form>
  )
}
