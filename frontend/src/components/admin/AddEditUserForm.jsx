import { useId } from 'react'

export function AddEditUserForm () {
  // Generar IDs únicos para cada input
  const userId = useId()
  const emailId = useId()
  const firstNameId = useId()
  const lastNameId = useId()
  const passwordId = useId()
  const activeId = useId()
  const staffId = useId()

  return (
    <form className='space-y-6'>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label htmlFor={userId} className='block text-sm font-medium text-gray-700'>
            Usuario
          </label>
          <input
            id={userId}
            type='text'
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <div>
          <label htmlFor={emailId} className='block text-sm font-medium text-gray-700'>
            Correo
          </label>
          <input
            id={emailId}
            type='email'
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <div>
          <label htmlFor={firstNameId} className='block text-sm font-medium text-gray-700'>
            Nombre
          </label>
          <input
            id={firstNameId}
            type='text'
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <div>
          <label htmlFor={lastNameId} className='block text-sm font-medium text-gray-700'>
            Apellidos
          </label>
          <input
            id={lastNameId}
            type='text'
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <div className='col-span-2'>
          <label htmlFor={passwordId} className='block text-sm font-medium text-gray-700'>
            Contraseña
          </label>
          <input
            id={passwordId}
            type='password'
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
      </div>
      <div className='space-y-4'>
        <div className='flex items-center'>
          <input
            id={activeId}
            type='checkbox'
            className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
          />
          <label htmlFor={activeId} className='ml-2 block text-sm text-gray-700'>
            Usuario activo
          </label>
        </div>
        <div className='flex items-center'>
          <input
            id={staffId}
            type='checkbox'
            className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
          />
          <label htmlFor={staffId} className='ml-2 block text-sm text-gray-700'>
            Usuario administrador
          </label>
        </div>
      </div>
      <div className='mt-4'>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Guardar
        </button>
      </div>
    </form>
  )
}
