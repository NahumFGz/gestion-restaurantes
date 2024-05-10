import { useEffect, useId, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useCategory } from '../../hooks'

export function AddEditProductForm () {
  const idProduct = useId()
  const idPrice = useId()
  const idCategory = useId()
  const idActive = useId()
  const idImage = useId()

  console.log('idProduct: ', idProduct)
  console.log('idImage: ', idImage)

  const { categories, getCategories } = useCategory()
  const [categoryOptions, setCategoryOptions] = useState([])
  const [imagePreview, setImagePreview] = useState(null)

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    setCategoryOptions(formatDropdownOptions(categories))
  }, [categories])

  const formik = useFormik({
    initialValues: {
      product: '',
      price: '',
      category: '',
      is_active: false,
      image: null
    },
    validationSchema: Yup.object({
      product: Yup.string().required('El nombre del producto es obligatorio'),
      price: Yup.number()
        .typeError('Debe ser un número válido')
        .positive('Debe ser un número positivo')
        .required('El precio es obligatorio'),
      category: Yup.string().required('La categoría es obligatoria'),
      is_active: Yup.boolean(),
      image: Yup.mixed().required('Se requiere una imagen')
    }),
    onSubmit: (values) => {
      console.log('Formulario enviado:', values)
    }
  })

  const handleImageUploadClick = () => {
    document.getElementById(idImage).click()
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new window.FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
        formik.setFieldValue('image', file)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <form onSubmit={formik.handleSubmit} className='space-y-6'>
      <div className='flex flex-col gap-10'>
        <div>
          <label htmlFor={idProduct} className='block text-sm font-medium text-gray-700'>
            Producto
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={idProduct}
            name='product'
            type='text'
            value={formik.values.product}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.product && formik.errors.product && (
            <div className='text-red-500 text-sm'>{formik.errors.product}</div>
          )}
        </div>

        <div>
          <label htmlFor={idPrice} className='block text-sm font-medium text-gray-700'>
            Precio
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={idPrice}
            name='price'
            type='number'
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.price && formik.errors.price && (
            <div className='text-red-500 text-sm'>{formik.errors.price}</div>
          )}
        </div>

        <div>
          <label htmlFor={idCategory} className='block text-sm font-medium text-gray-700'>
            Categoría
          </label>
          <select
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={idCategory}
            name='category'
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value=''>Seleccione una categoría</option>
            {categoryOptions}
          </select>
          {formik.touched.category && formik.errors.category && (
            <div className='text-red-500 text-sm'>{formik.errors.category}</div>
          )}
        </div>

        <div className='flex items-center'>
          <input
            className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
            id={idActive}
            name='is_active'
            type='checkbox'
            checked={formik.values.is_active}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor={idActive} className='ml-2 block text-sm text-gray-700'>
            Producto activo
          </label>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700' htmlFor={idImage}>
            Imagen
          </label>
          <input
            className='hidden'
            id={idImage}
            name='image'
            type='file'
            accept='.png, .jpg, .jpeg'
            onChange={handleImageChange}
          />
          <button
            type='button'
            className='mt-1 block w-full border border-dashed border-indigo-500 rounded-md bg-white py-2 px-4 text-sm font-medium text-indigo-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            onClick={handleImageUploadClick}
          >
            Cargar imagen
          </button>
          {formik.touched.image && formik.errors.image && (
            <div className='text-red-500 text-sm'>{formik.errors.image}</div>
          )}
        </div>

        {imagePreview && (
          <div className='flex flex-row justify-center'>
            <img
              src={imagePreview}
              alt='Previsualización de imagen'
              className='mt-2 h-50 w-auto rounded-md'
            />
          </div>
        )}
      </div>

      <div className='mt-4'>
        <button
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          type='submit'
        >
          Actualizar
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
