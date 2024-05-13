import { OrderItem } from './OrderItem'

export function ListOrders ({ orders, onRefetch }) {
  return (
    <div className='flex flex-col gap-8'>
      {orders.map(order => (
        <OrderItem key={order.id} order={order} onRefetch={onRefetch} />
      ))}
    </div>
  )
}
