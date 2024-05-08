export function TableUsers ({ users }) {
  return (
    <>
      <div className='overflow-auto shadow-lg rounded-lg'>
        <table className='w-full table-auto bg-white rounded-lg border border-gray-200'>
          <thead className='bg-gray-800 text-white'>
            <tr>
              <th className='px-6 py-4 text-left'>Username</th>
              <th className='px-6 py-4 text-left'>Nombre</th>
              <th className='px-6 py-4 text-left'>Correo</th>
              <th className='px-6 py-4 text-left'>Activo</th>
              <th className='px-6 py-4 text-left'>Staff</th>
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {users.map((user) => (
              <tr key={user.id} className='border-b border-gray-200 hover:bg-gray-100'>
                <td className='px-6 py-4'>{user.username}</td>
                <td className='px-6 py-4'>{`${user.first_name} - ${user.last_name}`}</td>
                <td className='px-6 py-4'>{user.email}</td>
                <td className='px-6 py-4'>{user.is_active ? 'Sí' : 'No'}</td>
                <td className='px-6 py-4'>{user.is_staff ? 'Sí' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
