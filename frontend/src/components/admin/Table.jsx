import { useEffect } from 'react'
import icon from '../../assets/table.svg'
import { getOrdersByTableApi } from '../../api/orders'
import { ORDER_STATUS } from '../../utils/constants'

export function Table ({ table }) {
  useEffect(() => {
    getOrdersByTableApi(table.id, ORDER_STATUS.PENDING)
      .then(response => console.log('response ORDER_STATUS', table.number, response))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='flex justify-center items-center hover:scale-95 active:scale-105'>
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
