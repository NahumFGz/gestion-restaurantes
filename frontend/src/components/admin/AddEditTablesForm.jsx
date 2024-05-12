import { useFormik } from 'formik'
import { useId } from 'react'
import * as Yup from 'yup'
import { useTables } from '../../hooks'

export function AddEditTablesForm ({ onClose, onRefetch }) {
  const idNumber = useId()
  const { addTable } = useTables()

  const formik = useFormik({
    initialValues: {
      number: ''
    },
    validationSchema: Yup.object({
      number: Yup.string().required('El número de mesa es obligatorio')
    }),
    onSubmit: async (formValues) => {
      console.log('Formulario enviado:', formValues)
      await addTable(formValues)
      onRefetch()
      onClose()
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className='space-y-6'>
      <div className='flex flex-col gap-10'>
        <div>
          <label htmlFor={idNumber} className='block text-sm font-medium text-gray-700'>
            Numero de mesa
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={idNumber}
            name='number'
            type='text'
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.number && formik.errors.number && (
            <div className='text-red-500 text-sm'>{formik.errors.number}</div>
          )}
        </div>
      </div>
      <div className='mt-4'>
        <button
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          type='submit'
        >
          Crear
        </button>
      </div>
    </form>
  )
}
