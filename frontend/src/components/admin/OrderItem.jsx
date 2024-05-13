import { useOrder } from '../../hooks'
import { formatDateToUTCMinus5 } from '../../utils/dafeFormater'

export function OrderItem ({ order, onRefetch }) {
  const { checkDeliveredOrder } = useOrder()

  const handleCheckDeliveredOrder = async (idOrder) => {
    try {
      await checkDeliveredOrder(idOrder)
      onRefetch()
    } catch (error) {
      console.error('Error marking order as delivered:', error)
    }
  }

  // Determinar el color de fondo basado en el estado
  const bgColor = order.status === 'PENDING'
    ? 'bg-yellow-200'
    : order.status === 'DELIVERED'
      ? 'bg-green-300'
      : 'bg-white'

  return (
    <div className={`relative flex flex-col border p-2 ${bgColor}`}>
      <p
        className='absolute -top-3 right-2 border bg-white px-2 py-1 rounded-md text-sm font-semibold text-gray-800'
      >
        {
              `
             ${formatDateToUTCMinus5(order.created_at).formattedHourMinute}
             -
             ${formatDateToUTCMinus5(order.created_at).formattedTimeDifference}
              `
            }
      </p>

      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-row gap-5 items-center'>
          <img
            className='w-32 h-32 object-cover rounded-md'
            src={order.product_data.image} alt={order.name}
          />
          <p>{order.product_data.title}</p>
          <p>{order.status}</p>
        </div>

        {
          order.status === 'PENDING' && (
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => handleCheckDeliveredOrder(order.id)}
            >
              Marcar entregado
            </button>
          )
        }
      </div>
    </div>
  )
}
