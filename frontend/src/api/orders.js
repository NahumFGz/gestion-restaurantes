import { ORDER_STATUS } from '../utils/constants'

const API_KEY = import.meta.env.VITE_BASE_API_URL

export async function getOrdersByTableApi (idTable, status = '', ordering = '', token) {
  try {
    const tableFilter = `table=${idTable}`
    const statusFilter = `status=${status}`
    const orderingFilter = `ordering=${ordering}`
    const closeFilter = 'close=false'
    const url = `${API_KEY}/api/orders/?${tableFilter}&${statusFilter}&${orderingFilter}&${closeFilter}/`

    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al obtener las ordenes')
  }
}

export async function checkDeliveredOrderApi (idOrder, token) {
  try {
    const url = `${API_KEY}/api/orders/${idOrder}/`

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      },
      body: JSON.stringify({
        status: ORDER_STATUS.DELIVERED
      })
    })

    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al entregar la orden')
  }
}
