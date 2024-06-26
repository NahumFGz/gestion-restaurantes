import { useEffect, useId } from 'react'
import { useFormik } from 'formik'
import { useUser } from '../../hooks'
import * as Yup from 'yup'

export function AddEditUserForm ({ onClose, onRefetch, user }) {
  const { addUser, updateUser } = useUser()

  // Generar IDs únicos para cada input
  const userId = useId()
  const emailId = useId()
  const firstNameId = useId()
  const lastNameId = useId()
  const passwordId = useId()
  const activeId = useId()
  const staffId = useId()

  // Validación de formulario con Yup
  const formik = useFormik({
    initialValues: {
      username: user?.username || '',
      email: user?.email || '',
      first_name: user?.first_name || '',
      last_name: user?.last_name || '',
      password: '',
      is_active: user?.is_active || true,
      is_staff: user?.is_staff || false
    },
    validationSchema: Yup.object({
      username: Yup.string().required('El usuario es obligatorio'),
      email: Yup.string().email('El correo no es válido').required('El correo es obligatorio'),
      first_name: Yup.string(),
      last_name: Yup.string(),
      password: user ? Yup.string() : Yup.string().required('La contraseña es obligatoria'),
      is_active: Yup.boolean().required('El estado del usuario es obligatorio'),
      is_staff: Yup.boolean().required('El rol del usuario es obligatorio')
    }),
    onSubmit: async (formValues) => {
      try {
        if (!user) {
          await addUser(formValues)
          setNewUserValues()
          console.log('Se ha creado un nuevo usuario')
        } else {
          await updateUser(formValues, user.id)
          console.log('Actualizar usuario:', user.id, formValues)
        }
        onRefetch()
        onClose()
      } catch (error) {
        console.error(error)
      }
    }
  })

  // Funciones para establecer los valores iniciales
  const setNewUserValues = () => {
    formik.resetForm({
      values: {
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        is_active: true,
        is_staff: false
      }
    })
  }

  const setEditUserValues = (user) => {
    formik.resetForm({
      values: {
        username: user.username || '',
        email: user.email || '',
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        password: '', // Mantén la contraseña vacía por seguridad
        is_active: user.is_active || true,
        is_staff: user.is_staff || false
      }
    })
  }

  // useEffect para actualizar el formulario según el contexto (nuevo o editar)
  useEffect(() => {
    if (user) {
      setEditUserValues(user)
    } else {
      setNewUserValues()
    }
  }, [user])

  return (
    <form
      className='space-y-6'
      onSubmit={formik.handleSubmit}
    >
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label htmlFor={userId} className='block text-sm font-medium text-gray-700'>
            Usuario
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={userId} name='username' type='text'
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label htmlFor={emailId} className='block text-sm font-medium text-gray-700'>
            Correo
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={emailId} name='email' type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label htmlFor={firstNameId} className='block text-sm font-medium text-gray-700'>
            Nombre
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={firstNameId} name='first_name' type='text'
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label htmlFor={lastNameId} className='block text-sm font-medium text-gray-700'>
            Apellidos
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={lastNameId} name='last_name' type='text'
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='col-span-2'>
          <label htmlFor={passwordId} className='block text-sm font-medium text-gray-700'>
            Contraseña
          </label>
          <input
            className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            id={passwordId} name='password' type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
      <div className='space-y-4'>
        <div className='flex items-center'>
          <input
            className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
            id={activeId} name='is_active' type='checkbox'
            checked={formik.values.is_active}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor={activeId} className='ml-2 block text-sm text-gray-700'>
            Usuario activo
          </label>
        </div>
        <div className='flex items-center'>
          <input
            className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
            id={staffId} name='is_staff' type='checkbox'
            checked={formik.values.is_staff}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor={staffId} className='ml-2 block text-sm text-gray-700'>
            Usuario administrador
          </label>
        </div>
      </div>
      <div className='mt-4'>
        <button
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          type='submit'
        >
          {user ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  )
}
