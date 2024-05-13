import { useState } from 'react'
import { createPaymentApi, getPaymentByTableApi } from '../api/payments'
import { useAuth } from './useAuth'

export function usePayment () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [payment, setPayment] = useState(null)
  const { auth } = useAuth()

  const createPayment = async (paymentData) => {
    try {
      setLoading(true)
      setError(null)
      const result = await createPaymentApi(paymentData)
      setPayment(result)
      setLoading(false) // Asegúrate de desactivar el indicador de carga aquí
      return result // Devuelve el resultado para manejo adicional si es necesario
    } catch (error) {
      setError(error.message || 'Error al crear el pago')
      setLoading(false)
      throw error // Lanza el error para capturarlo en la interfaz si es necesario
    }
  }

  const getPaymentByTable = async (idTable) => {
    try {
      setLoading(true)
      setError(null)
      const result = await getPaymentByTableApi(idTable, auth.token)
      setPayment(result)
      setLoading(false)
      return result
    } catch (error) {
      setError(error.message || 'Error al obtener los pagos')
      setLoading(false)
    }
  }

  return { loading, error, payment, createPayment, getPaymentByTable }
}
