import { LoginForm } from '../../components'

export function LoginAdmin () {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='p-10 bg-white w-[500px] border rounded-md shadow-lg shadow-red-500/50'>
        <h1 className='mb-10 font-bold text-3xl text-center'>
          Entrar al panel
        </h1>
        <LoginForm />
      </div>
    </div>

  )
}
