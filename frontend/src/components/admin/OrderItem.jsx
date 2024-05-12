export function OrderItem ({ order }) {
  return (
    <div className='relative flex flex-col border p-2'>
      <p
        className='absolute -top-3 right-2 border bg-white px-2 py-1 rounded-md text-sm font-semibold text-gray-800'
      >
        {order.created_at}
      </p>

      <div className='flex flex-row gap-5 items-center'>
        <img
          className='w-32 h-32 object-cover rounded-md'
          src={order.product_data.image} alt={order.name}
        />
        <p>{order.product_data.title}</p>
        <p>{order.status}</p>

      </div>
    </div>
  )
}
