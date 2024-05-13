import { OrderItem } from './OrderItem'

export function ListOrders ({ orders, onRefetch }) {
  console.log('orders:', orders)

  return (
    <div className='flex flex-col gap-8'>
      {orders.filter(order => !order.close).map(order => (
        <OrderItem key={order.id} order={order} onRefetch={onRefetch} />
      ))}
    </div>
  )
}
