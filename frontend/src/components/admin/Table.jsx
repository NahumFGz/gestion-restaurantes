import { useEffect, useState } from 'react'
import icon from '../../assets/table.svg'
import { getOrdersByTableApi } from '../../api/orders'
import { ORDER_STATUS } from '../../utils/constants'

export function Table ({ table }) {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await getOrdersByTableApi(table.id, ORDER_STATUS.PENDING)
      console.log('response ORDER_STATUS', table.number, response)
      setOrders(response)
    }
    fetchOrders()
  }, [])

  return (
    <div className='flex justify-center items-center hover:scale-95 active:scale-105'>
      {Object.keys(orders).length > 0 && (
        <div className='fixed bg-red-500 text-white text-xs font-bold rounded-full px-4'>
          {Object.keys(orders).length}
        </div>
      )}

      <div>
        <img
          className='w-56 h-56'
          src={icon} alt='My Icon'
        />
        <h3
          className='text-center text-sm'
        >{`Mesa ${table.number}`}
        </h3>
      </div>
    </div>
  )
}
