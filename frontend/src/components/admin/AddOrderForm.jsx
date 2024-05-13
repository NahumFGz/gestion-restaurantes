import React, { useEffect } from 'react'
import Select from 'react-select'
import { useOrder, useProducts } from '../../hooks'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export function AddOrderForm ({ idTable, openCloseModal, onRefetch }) {
  const { products, getProducts } = useProducts()
  const { addOrderToTable } = useOrder()

  useEffect(() => {
    getProducts()
  }, [])

  // Validaciones de Formik y Yup
  const formik = useFormik({
    initialValues: {
      selectedProducts: []
    },
    validationSchema: Yup.object({
      selectedProducts: Yup.array()
        .min(1, 'Debe seleccionar al menos un producto')
        .required('La selección de productos es obligatoria')
    }),
    onSubmit: async (formValues, { resetForm }) => {
      console.log('Enviando pedidos', [...formValues.selectedProducts])
      for (const product of formValues.selectedProducts) {
        try {
          await addOrderToTable(idTable, product.value)
        } catch (error) {
          console.error('Error al añadir la orden:', error)
        }
      }
      onRefetch()
      openCloseModal()
      resetForm()
    }
  })

  // Crear opciones para react-select
  const options = products.map(product => ({
    value: product.id,
    label: product.title
  }))

  return (
    <form onSubmit={formik.handleSubmit} className='space-y-6'>
      <div className='flex flex-col gap-10'>
        <div className='relative w-full'>
          <label htmlFor='order-dropdown' className='block text-sm font-medium text-gray-700'>
            Seleccione productos
          </label>
          <Select
            id='order-dropdown'
            name='selectedProducts'
            value={formik.values.selectedProducts}
            onChange={value => formik.setFieldValue('selectedProducts', value)}
            options={options}
            className='mt-1 text-base sm:text-sm'
            classNamePrefix='react-select'
            placeholder='Seleccionar...'
            isMulti
          />
          {formik.touched.selectedProducts && formik.errors.selectedProducts
            ? (
              <div className='text-red-500 text-sm'>{formik.errors.selectedProducts}</div>
              )
            : null}
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
