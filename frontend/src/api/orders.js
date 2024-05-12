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
