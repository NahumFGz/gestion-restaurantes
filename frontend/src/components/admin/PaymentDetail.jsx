export function PaymentDetail ({ payment, orders, openCloseModal, onReloadOrders }) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <div>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Detalle de pago</h3>
        <p className='text-gray-700'>Fecha: <span className='font-semibold'>{payment.created_at}</span></p>
        <p className='text-gray-700'>Mesa: <span className='font-semibold'>xxx</span></p>
      </div>

      <div className='mt-6'>
        <table className='min-w-full divide-y divide-gray-300'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                id
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Producto
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Precio
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {orders.map(order => (
              <tr key={order.id}>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.product_data.id}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.product_data.title}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.product_data.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className='bg-gray-100'>
            <tr>
              <td colSpan='2' className='px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700'>
                Total
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold'>
                {payment.total}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <button
        className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Pagar
      </button>
    </div>
  )
}
