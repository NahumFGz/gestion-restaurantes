import { useAuth } from '../../hooks'

export function TopMenu () {
  const { auth, logout } = useAuth()

  const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `Hola ${auth.me.first_name} ${auth.me.last_name}`
    } else {
      return auth.me?.email
    }
  }

  return (
    <div className='p-2 flex flex-row justify-between shadow-md'>
      <div>
        iCard Admin
      </div>

      <div className='flex flex-row gap-2'>
        <div>
          <p>{renderName()}</p>
        </div>
        <div onClick={logout}>
          <svg className='w-6 h-6 cursor-pointer rotate-90 hover:scale-110 hover:text-red-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75' />
          </svg>
        </div>
      </div>
    </div>
  )
}
