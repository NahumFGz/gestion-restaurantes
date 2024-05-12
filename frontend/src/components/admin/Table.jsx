import { useEffect, useState } from 'react'
import icon from '../../assets/table.svg'
import { getOrdersByTableApi } from '../../api/orders'
import { ORDER_STATUS } from '../../utils/constants'
import { Link } from 'react-router-dom'

export function Table ({ table }) {
  const [orders, setOrders] = useState([])
  const [tableBusy, setTableBusy] = useState(false)

  useEffect(() => {
    const fetchOrdersPending = async () => {
      const response = await getOrdersByTableApi(table.id, ORDER_STATUS.PENDING)
      console.log('response ORDER_STATUS', table.number, response)
      setOrders(response)
    }
    fetchOrdersPending()
  }, [table.id])

  useEffect(() => {
    const fetchOrdersDelivered = async () => {
      const response = await getOrdersByTableApi(table.id, ORDER_STATUS.DELIVERED)
      if (response.length > 0) {
        setTableBusy(true)
      }
    }
    fetchOrdersDelivered()
  }, [table.id])

  const getBackgroundClass = () => {
    if (tableBusy) {
      return 'bg-yellow-200'
    } else if (Object.keys(orders).length > 0) {
      return 'bg-blue-200'
    } else {
      return ''
    }
  }

  return (
    <Link to={`/admin/table/${table.id}`}>
      <div className='flex justify-center items-center hover:scale-95 active:scale-105'>
        {Object.keys(orders).length > 0 && (
          <div className='fixed bg-red-500 text-white text-xs font-bold rounded-full px-4'>
            {Object.keys(orders).length}
          </div>
        )}

        <div>
          <img
            className={`w-56 h-56 ${getBackgroundClass()}`}
            src={icon} alt='My Icon'
          />
          <h3
            className='text-center text-sm'
          >{`Mesa ${table.number}`}
          </h3>
        </div>
      </div>
    </Link>
  )
}
