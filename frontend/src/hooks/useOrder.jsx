import { useState } from 'react'
import { getOrdersByTableApi } from '../api/orders'
import { useAuth } from './useAuth'

export function useOrder () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [orders, setOrders] = useState([])
  const { auth } = useAuth()

  const getOrdersByTable = async (idTable, status, ordering) => {
    try {
      setLoading(true)
      const response = await getOrdersByTableApi(idTable, status, ordering, auth.token)
      setLoading(false)
      setOrders(response)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  return { loading, error, orders, getOrdersByTable }
}
