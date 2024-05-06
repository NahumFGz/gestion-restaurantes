import { useFormik } from 'formik'
import * as Yup from 'yup'
import { loginApi } from '../../api/user'
import { toast } from 'react-toastify'

export function LoginForm () {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formValues) => {
      try {
        const response = await loginApi(formValues)
        const { access } = response
        console.log('access', access)
      } catch (error) {
        toast.error(error.message)
      }
    }
  })

  return (
    <div>
      <form className='flex flex-col' onSubmit={formik.handleSubmit}>
        <input
          className='border border-gray-300 p-2 mb-2 rounded-md'
          name='email' type='text' placeholder='Correo electrónico'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email
          ? (
            <div className='text-red-500'>{formik.errors.email}</div>
            )
          : null}
        <input
          className='border border-gray-300 p-2 mb-2 rounded-md'
          name='password' type='password' placeholder='Password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {
            (formik.touched.password && formik.errors.password) &&
            (<div className='text-red-500'>{formik.errors.password}</div>)
        }

        <button
          className='bg-blue-500 text-white p-2 rounded-md'
          type='submit'
        >
          Iniciar sesión
        </button>
      </form>
    </div>

  )
}

function initialValues () {
  return {
    email: '',
    password: ''
  }
}

function validationSchema () {
  return Yup.object({
    email: Yup.string().email('Correo electrónico no válido').required('El correo electrónico es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria')
  })
}
