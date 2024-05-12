import { OrderItem } from './OrderItem'

export function ListOrders ({ orders }) {
  return (
    <div className='flex flex-col gap-8'>
      {orders.map(order => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  )
}
