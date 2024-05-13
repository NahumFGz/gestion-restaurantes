import { useState } from 'react'
import { checkDeliveredOrderApi, getOrdersByTableApi, addOrderToTableApi, addPaymentToOrderApi, closeOrderApi } from '../api/orders'
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

  const checkDeliveredOrder = async (idOrder) => {
    try {
      setLoading(true)
      await checkDeliveredOrderApi(idOrder, auth.token)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  const addOrderToTable = async (idTable, idProduct) => {
    try {
      setLoading(true)
      await addOrderToTableApi(idTable, idProduct, auth.token)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  const addPaymentToOrder = async (idOrder, paymentData) => {
    try {
      setLoading(true)
      await addPaymentToOrderApi(idOrder, paymentData, auth.token)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  const closeOrder = async (idOrder) => {
    try {
      setLoading(true)
      await closeOrderApi(idOrder, auth.token)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    orders,
    getOrdersByTable,
    checkDeliveredOrder,
    addOrderToTable,
    addPaymentToOrder,
    closeOrder
  }
}
