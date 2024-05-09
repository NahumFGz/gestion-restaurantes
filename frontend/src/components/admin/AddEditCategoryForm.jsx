import { useId, useState } from 'react'

export function AddEditCategoryForm () {
  const categoryId = useId()
  const [imageFile, setImageFile] = useState(null)

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0])
  }

  const handleUploadButtonClick = () => {
    document.getElementById('uploadImageInput').click()
  }

  return (
    <form className='space-y-6' onSubmit=''>
      <div className='grid grid-cols-1 gap-4'>
        <div>
          <label htmlFor={categoryId} className='block text-sm font-medium text-gray-700'>
            Categoria
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={categoryId} name='category' type='text'
            value=''
            onChange=''
            onBlur=''
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Subir imagen
          </label>
          <input
            className='hidden'
            id='uploadImageInput'
            name='image'
            type='file'
            onChange={handleImageChange}
          />
          <button
            type='button'
            className='mt-1 block w-full border border-dashed border-indigo-500 rounded-md bg-white py-2 px-4 text-sm font-medium text-indigo-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            onClick={handleUploadButtonClick}
          >
            {imageFile ? `Imagen: ${imageFile.name}` : 'Seleccionar imagen'}
          </button>
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
