import { CheckBadgeIcon, XMarkIcon } from '@heroicons/react/24/solid'

export function TableUsers ({ users, updateUser, deleteUser }) {
  return (
    <div className='overflow-auto shadow-lg rounded-lg'>
      <table className='w-full table-auto bg-white rounded-lg border border-gray-200'>
        <thead className='bg-gray-800 text-white'>
          <tr>
            <th className='px-6 py-4 text-left'>Username</th>
            <th className='px-6 py-4 text-left'>Nombre</th>
            <th className='px-6 py-4 text-left'>Correo</th>
            <th className='px-6 py-4 text-left'>Activo</th>
            <th className='px-6 py-4 text-left'>Staff</th>
            <th className='px-6 py-4 text-left'>Acciones</th>
          </tr>
        </thead>
        <tbody className='text-gray-700'>
          {users.map((user) => (
            <tr key={user.id} className='border-b border-gray-200 hover:bg-gray-100'>
              <td className='px-6 py-4'>{user.username}</td>
              <td className='px-6 py-4'>{`${user.first_name} - ${user.last_name}`}</td>
              <td className='px-6 py-4'>{user.email}</td>
              <td className='px-6 py-4'>
                {user.is_active
                  ? (
                    <CheckBadgeIcon className='h-5 w-5 text-green-500' />
                    )
                  : (
                    <XMarkIcon className='h-5 w-5 text-red-500' />
                    )}
              </td>
              <td className='px-6 py-4'>
                {user.is_staff
                  ? (
                    <CheckBadgeIcon className='h-5 w-5 text-green-500' />
                    )
                  : (
                    <XMarkIcon className='h-5 w-5 text-red-500' />
                    )}
              </td>
              <td className='flex text-sm justify-start gap-2 px-6 py-4'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  onClick={() => updateUser(user)}
                >
                  Editar
                </button>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                  onClick={() => deleteUser(user.email, user.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
