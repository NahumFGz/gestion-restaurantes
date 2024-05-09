import { useId, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export function AddEditCategoryForm () {
  const categoryId = useId()
  const imageId = useId()
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState('')

  const formik = useFormik({
    initialValues: {
      category: '',
      image: ''
    },
    validationSchema: Yup.object({
      category: Yup.string().required('El nombre de la categoría es requerido'),
      image: Yup.mixed().required('La imagen es requerida')
    }),
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setImageFile(file)
    formik.setFieldValue('image', file)

    if (file) {
      const reader = new window.FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview('')
    }
  }

  const handleUploadButtonClick = () => {
    document.getElementById(imageId).click()
  }

  return (
    <form className='space-y-6' onSubmit={formik.handleSubmit}>
      <div className='grid grid-cols-1 gap-4'>
        <div>
          <label htmlFor={categoryId} className='block text-sm font-medium text-gray-700'>
            Categoria
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={categoryId} name='category' type='text'
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label
            className='block text-sm font-medium text-gray-700'
            htmlFor={imageId}
          >
            Subir imagen
          </label>
          <input
            className='hidden'
            id={imageId}
            name='image'
            type='file'
            accept='.png, .jpg, .jpeg'
            onChange={handleImageChange}
          />
          <button
            type='button'
            className='mt-1 block w-full border border-dashed border-indigo-500 rounded-md bg-white py-2 px-4 text-sm font-medium text-indigo-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            onClick={handleUploadButtonClick}
          >
            {imageFile ? `Imagen: ${imageFile.name}` : 'Seleccionar imagen'}
          </button>
          {imagePreview && (
            <div className='mt-4 flex flex-row justify-center'>
              <img
                src={imagePreview}
                alt='Vista previa'
                className='h-36 border border-gray-300 rounded-md'
              />
            </div>
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
